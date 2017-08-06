namespace WebSharper.Community.Dashboard.Test

open WebSharper

module Server =

    [<Rpc>]
    let DoSomething input =
        let R (s: string) = System.String(Array.rev(s.ToCharArray()))
        async {
            return R input
        }
    [<Rpc>]
    let Serialize (data:AppData) =
            Json.Serialize<AppData> data        
