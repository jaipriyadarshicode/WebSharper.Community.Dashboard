﻿namespace WebSharper.Community.Dashboard.Events

open WebSharper
open WebSharper.Community.Dashboard

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.Community.Panel
open WebSharper.Community.Dashboard
open System
open System.IO

module ServerDatabase =

    type AgentMessage =
    |WriteMessage of (string*MessageBus.Message)
    |ReadAllMessages of (string*AsyncReplyChannel<MessageBus.Message list>)

    let Agent = MailboxProcessor<AgentMessage>.Start(fun inbox ->
        let fileName file = Path.Combine(Environment.DataDirectory,file)
        let rec loop state = async {
            let! message = inbox.Receive()
            match message with
            | WriteMessage (file,message) ->
                try
                    let line=sprintf "%s %s %s" message.Key (message.Time.ToString()) (match message.Value with
                                                                                       |MessageBus.Number(num) -> num.ToString()
                                                                                       |MessageBus.String(str) -> str
                                                                                       |_ -> failwith "Database supports only numbers and strings"
                                                                                       )
                    File.AppendAllText(fileName file,line + "\n")
                with
                |ex -> ex.Message |> Environment.Log
                return! loop ""
            | ReadAllMessages (file,channel) ->
                try
                    if File.Exists(fileName file) then
                        let messages = 
                            System.IO.File.ReadAllLines(fileName file)
                            |>Array.map (fun line -> line.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries)|>List.ofArray)
                            |>List.ofArray
                            |>List.fold (fun acc raw -> match raw with
                                                        |keyStr::dateStr::timeStr::value::[] ->let time = System.DateTime.Parse(dateStr + " " + timeStr)
                                                                                               (let (res,dblValue) = Double.TryParse(value)
                                                                                                if res then MessageBus.Number(dblValue)
                                                                                                else MessageBus.String(value)
                                                                                                 |> MessageBus.CreateMessage)
                                                                                                .WithTime(time).WithKey(keyStr) :: acc

                                                        |_ -> acc) []
                        channel.Reply(messages)
                    else channel.Reply([])
                with
                |ex -> ex.Message |> Environment.Log
                return! loop ""

        }
        loop ""
    )

    [<Rpc>]
    let WriteMessage file message = 
            Agent.Post(WriteMessage(file,message))
    [<Rpc>]
    let ReadAllMessages file= 
            Agent.PostAndReply(fun r -> ReadAllMessages(file,r))
[<JavaScript>]
type DatabaseEventContext =
    {
        DatabaseEventRun:MailboxProcessor<string>
    }
    interface IRunnerContext

[<JavaScript>]
type DatabaseEvent =
 {
    DatabaseEventData:WorkerData
 }
 static member Create  = {
                           DatabaseEventData =  WorkerData.Create "Database" 
                                                              [InPortData.CreateNumber " in Value"  100.0
                                                               InPortData.CreateString "Database name" "Database.txt"]
                                                              []
                         }
 static member FromWorker = (fun (worker:Worker) -> {DatabaseEventData = worker.ToData})
 interface IWorkerData with
      override x.Data = x.DatabaseEventData
      override x.Run = Some(fun worker ->
                                let mutable isFirstCall = true
                                worker.InPorts.[0].PortValue.View
                                |> View.Sink (fun value -> 
                                        let file = worker.InPorts.[1].String
                                        if isFirstCall then 
                                            ServerDatabase.ReadAllMessages file
                                            |> List.iter (fun msg -> (MessageBus.Agent.Post(MessageBus.Send(msg))))
                                            isFirstCall <- false
                                        else
                                            ServerDatabase.WriteMessage file (value)                                            
                                    )  
                                None)
      override x.Render = None



