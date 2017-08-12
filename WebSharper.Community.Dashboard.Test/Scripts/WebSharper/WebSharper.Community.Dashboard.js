(function()
{
 "use strict";
 var WebSharper,Community,Dashboard,MessageBus,KeyValue,Message,AgentState,SC$1,InPort,OutPortType,OutPort,Ports,Worker,Workers,RandomRunner,OpenWeather,Forecast,OpenWeatherRunner,ChartRunnerContext,ChartRenderer,TextBoxRenderer,RuleEntry,RuleChain,RuleContainer,WorkerItem,Factory,WidgetItem,DshData,DshEditorCellItem,DshEditorRowItem,DshEditor,Dashboard$1,List,Concurrency,Remoting,AjaxRemotingProvider,console,Panel,Helper,Date,IntelliFactory,Runtime,Control,MailboxProcessor,Seq,Operators,UI,Next,Var,PropertyGrid,Properties,Guid,Unchecked,Doc,Random,Math,PrintfHelpers,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,Arrays,View,Charting,Renderers,ChartJs,Chart,Pervasives,AttrModule,Enumerator,Key,ListModel,Option,PanelContainer,LayoutManagers,Panel$1,TitleButton,Dialog,PropertyGrid$1;
 WebSharper=window.WebSharper=window.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 Dashboard=Community.Dashboard=Community.Dashboard||{};
 MessageBus=Dashboard.MessageBus=Dashboard.MessageBus||{};
 KeyValue=MessageBus.KeyValue=MessageBus.KeyValue||{};
 Message=MessageBus.Message=MessageBus.Message||{};
 AgentState=MessageBus.AgentState=MessageBus.AgentState||{};
 SC$1=window.StartupCode$WebSharper_Community_Dashboard$MessageBus=window.StartupCode$WebSharper_Community_Dashboard$MessageBus||{};
 InPort=Dashboard.InPort=Dashboard.InPort||{};
 OutPortType=Dashboard.OutPortType=Dashboard.OutPortType||{};
 OutPort=Dashboard.OutPort=Dashboard.OutPort||{};
 Ports=Dashboard.Ports=Dashboard.Ports||{};
 Worker=Dashboard.Worker=Dashboard.Worker||{};
 Workers=Dashboard.Workers=Dashboard.Workers||{};
 RandomRunner=Dashboard.RandomRunner=Dashboard.RandomRunner||{};
 OpenWeather=Dashboard.OpenWeather=Dashboard.OpenWeather||{};
 Forecast=OpenWeather.Forecast=OpenWeather.Forecast||{};
 OpenWeatherRunner=Dashboard.OpenWeatherRunner=Dashboard.OpenWeatherRunner||{};
 ChartRunnerContext=Dashboard.ChartRunnerContext=Dashboard.ChartRunnerContext||{};
 ChartRenderer=Dashboard.ChartRenderer=Dashboard.ChartRenderer||{};
 TextBoxRenderer=Dashboard.TextBoxRenderer=Dashboard.TextBoxRenderer||{};
 RuleEntry=Dashboard.RuleEntry=Dashboard.RuleEntry||{};
 RuleChain=Dashboard.RuleChain=Dashboard.RuleChain||{};
 RuleContainer=Dashboard.RuleContainer=Dashboard.RuleContainer||{};
 WorkerItem=Dashboard.WorkerItem=Dashboard.WorkerItem||{};
 Factory=Dashboard.Factory=Dashboard.Factory||{};
 WidgetItem=Dashboard.WidgetItem=Dashboard.WidgetItem||{};
 DshData=Dashboard.DshData=Dashboard.DshData||{};
 DshEditorCellItem=Dashboard.DshEditorCellItem=Dashboard.DshEditorCellItem||{};
 DshEditorRowItem=Dashboard.DshEditorRowItem=Dashboard.DshEditorRowItem||{};
 DshEditor=Dashboard.DshEditor=Dashboard.DshEditor||{};
 Dashboard$1=Dashboard.Dashboard=Dashboard.Dashboard||{};
 List=WebSharper&&WebSharper.List;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 console=window.console;
 Panel=Community&&Community.Panel;
 Helper=Panel&&Panel.Helper;
 Date=window.Date;
 IntelliFactory=window.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 Seq=WebSharper&&WebSharper.Seq;
 Operators=WebSharper&&WebSharper.Operators;
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Var=Next&&Next.Var;
 PropertyGrid=Community&&Community.PropertyGrid;
 Properties=PropertyGrid&&PropertyGrid.Properties;
 Guid=WebSharper&&WebSharper.Guid;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Doc=Next&&Next.Doc;
 Random=WebSharper&&WebSharper.Random;
 Math=window.Math;
 PrintfHelpers=WebSharper&&WebSharper.PrintfHelpers;
 Data=WebSharper&&WebSharper.Data;
 TxtRuntime=Data&&Data.TxtRuntime;
 FSharp=window.FSharp;
 Data$1=FSharp&&FSharp.Data;
 Runtime$1=Data$1&&Data$1.Runtime;
 IO=Runtime$1&&Runtime$1.IO;
 JSON=window.JSON;
 Arrays=WebSharper&&WebSharper.Arrays;
 View=Next&&Next.View;
 Charting=WebSharper&&WebSharper.Charting;
 Renderers=Charting&&Charting.Renderers;
 ChartJs=Renderers&&Renderers.ChartJs;
 Chart=Charting&&Charting.Chart;
 Pervasives=Charting&&Charting.Pervasives;
 AttrModule=Next&&Next.AttrModule;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Key=Next&&Next.Key;
 ListModel=Next&&Next.ListModel;
 Option=WebSharper&&WebSharper.Option;
 PanelContainer=Panel&&Panel.PanelContainer;
 LayoutManagers=Panel&&Panel.LayoutManagers;
 Panel$1=Panel&&Panel.Panel;
 TitleButton=Panel&&Panel.TitleButton;
 Dialog=Panel&&Panel.Dialog;
 PropertyGrid$1=PropertyGrid&&PropertyGrid.PropertyGrid;
 KeyValue.New=function(Key$1,Time,Value)
 {
  return{
   Key:Key$1,
   Time:Time,
   Value:Value
  };
 };
 Message.Clear={
  $:2
 };
 AgentState.get_empty=function()
 {
  return AgentState.New(List.T.Empty,List.T.Empty);
 };
 AgentState.New=function(Buffer,Listeners)
 {
  return{
   Buffer:Buffer,
   Listeners:Listeners
  };
 };
 MessageBus.RunServerRequests=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.While(function()
   {
    return true;
   },Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(2*1000),function()
    {
     return Concurrency.Bind(MessageBus.Agent().PostAndAsyncReply(function(r)
     {
      return{
       $:4,
       $0:r
      };
     },null),function(a)
     {
      return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WebSharper.Community.Dashboard:WebSharper.Community.Dashboard.MessageBus.GetMessages:-745577628",[a]),function(a$1)
      {
       List.iter(function(message)
       {
        var _this;
        _this=MessageBus.Agent();
        _this.mailbox.AddLast({
         $:0,
         $0:message
        });
        _this.resume();
       },a$1);
       console.log((function($1)
       {
        return function($2)
        {
         return $1("Values from server requested messages received:"+window.String($2));
        };
       }(window.id))(a$1.get_Length()));
       return Concurrency.Zero();
      });
     });
    });
   }));
  })),null);
 };
 MessageBus.Agent=function()
 {
  SC$1.$cctor();
  return SC$1.Agent;
 };
 MessageBus.CreateString=function(value)
 {
  return MessageBus.CreateStrPair(Helper.UniqueKey(),value);
 };
 MessageBus.CreateNumber=function(value)
 {
  return MessageBus.CreateNumPair(Helper.UniqueKey(),value);
 };
 MessageBus.CreateStrPair=function(key,value)
 {
  return MessageBus.CreateKeyValue(key,{
   $:1,
   $0:value
  });
 };
 MessageBus.CreateNumPair=function(key,value)
 {
  return MessageBus.CreateKeyValue(key,{
   $:0,
   $0:value
  });
 };
 MessageBus.CreateKeyValue=function(key,value)
 {
  return KeyValue.New(key,Date.now(),value);
 };
 MessageBus.Log=function()
 {
  SC$1.$cctor();
  return SC$1.Log;
 };
 MessageBus.set_Log=function($1)
 {
  SC$1.$cctor();
  SC$1.Log=$1;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.Log=function()
  {
  };
  SC$1.Agent=MailboxProcessor.Start(function(inbox)
  {
   var cutBuffer;
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(inbox.Receive(null),function(a)
     {
      var m,busKeyValue,newState,newBuf,a$1,p;
      return a.$==1?loop(AgentState.New(state.Buffer,new List.T({
       $:1,
       $0:a.$0,
       $1:state.Listeners
      }))):a.$==3?(a.$0[1](cutBuffer(a.$0[0],state.Buffer)),loop(state)):a.$==4?(a.$0((m=state.Buffer,m.$==0?(new Date(0,0-1,0)).getTime():List.maxBy(function(item)
      {
       return item.Time;
      },m).Time)),loop(state)):a.$==0?(busKeyValue=a.$0,(newState=(newBuf=new List.T({
       $:1,
       $0:busKeyValue,
       $1:state.Buffer
      }),AgentState.New(cutBuffer(List.maxBy(function(item)
      {
       return item.Time;
      },newBuf).Time-10*1000,newBuf),state.Listeners)),(a$1=function(a$2,name,callback)
      {
       callback(busKeyValue.Value);
      },List.iter(function($1)
      {
       return a$1($1[0],$1[1],$1[2]);
      },(p=function(key)
      {
       return key===busKeyValue.Key;
      },List.filter(function($1)
      {
       return p($1[0],$1[1],$1[2]);
      },newState.Listeners))),loop(newState)))):loop(AgentState.get_empty());
     });
    });
   }
   cutBuffer=function(time,buffer)
   {
    return Seq.fold(function(acc,item)
    {
     return item.Time>=time?new List.T({
      $:1,
      $0:item,
      $1:acc
     }):acc;
    },List.T.Empty,buffer);
   };
   return loop(AgentState.get_empty());
  },null);
  SC$1.$cctor=window.ignore;
 });
 InPort=Dashboard.InPort=Runtime.Class({
  Equals:function(y)
  {
   return y instanceof InPort&&this.Name===y.Name;
  },
  get_StringValue:function()
  {
   var $this;
   $this=this;
   return this.ExtractPortStringValue(function(variable)
   {
    return MessageBus.CreateStrPair($this.Key,variable.c);
   });
  },
  get_StringVar:function()
  {
   return this.ExtractPortStringValue(window.id);
  },
  get_String:function()
  {
   return this.ExtractPortStringValue(function(variable)
   {
    return variable.c;
   });
  },
  ExtractPortStringValue:function(fnc)
  {
   var m;
   m=this.PortValue;
   return m.$==1?fnc(m.$0):Operators.FailWith("unexpected type");
  },
  get_NumberValue:function()
  {
   var $this;
   $this=this;
   return this.ExtractPortNumberValue(function(variable)
   {
    return MessageBus.CreateNumPair($this.Key,variable.c);
   });
  },
  get_NumberVar:function()
  {
   return this.ExtractPortNumberValue(window.id);
  },
  get_Number:function()
  {
   return this.ExtractPortNumberValue(function(variable)
   {
    return variable.c;
   });
  },
  ExtractPortNumberValue:function(fnc)
  {
   var m;
   m=this.PortValue;
   return m.$==0?fnc(m.$0):Operators.FailWith("unexpected type");
  },
  Receive:function(value)
  {
   var m;
   m=this.PortValue;
   m.$==1?value.$==1?Var.Set(m.$0,value.$0):Operators.FailWith("incompatible types"):value.$==0?Var.Set(m.$0,value.$0):Operators.FailWith("incompatible types");
  },
  get_Property:function()
  {
   var m;
   m=this.PortValue;
   return m.$==1?Properties.string(this.Name,m.$0):Properties["double"](this.Name,m.$0);
  },
  get_Clone:function()
  {
   var c,m;
   return InPort.New((c=Guid.NewGuid(),window.String(c)),this.Name,(m=this.PortValue,m.$==1?{
    $:1,
    $0:Var.Create$1(m.$0.c)
   }:{
    $:0,
    $0:Var.Create$1(m.$0.c)
   }));
  }
 },null,InPort);
 InPort.Create=function(key,name,portValue)
 {
  return InPort.New(key,name,portValue);
 };
 InPort.New=function(Key$1,Name,PortValue)
 {
  return new InPort({
   Key:Key$1,
   Name:Name,
   PortValue:PortValue
  });
 };
 OutPortType=Dashboard.OutPortType=Runtime.Class({
  IsCompatible:function(inPort)
  {
   return this.$==1?inPort.PortValue.$==1&&true:inPort.PortValue.$==0&&true;
  }
 },null,OutPortType);
 OutPortType.StringOutPort=new OutPortType({
  $:1
 });
 OutPortType.NumberOutPort=new OutPortType({
  $:0
 });
 OutPort=Dashboard.OutPort=Runtime.Class({
  Equals:function(y)
  {
   return y instanceof OutPort&&this.Name===y.Name;
  },
  Trigger:function(value)
  {
   var _this;
   _this=MessageBus.Agent();
   _this.mailbox.AddLast({
    $:0,
    $0:MessageBus.CreateKeyValue(this.Key,value)
   });
   _this.resume();
  },
  get_Clone:function()
  {
   return OutPort.New(Helper.UniqueKey(),this.Name,this.Type);
  }
 },null,OutPort);
 OutPort.CreateString=function(key,name)
 {
  return OutPort.Create(key,name,OutPortType.StringOutPort);
 };
 OutPort.CreateNumber=function(key,name)
 {
  return OutPort.Create(key,name,OutPortType.NumberOutPort);
 };
 OutPort.Create=function(key,name,portType)
 {
  return OutPort.New(key,name,portType);
 };
 OutPort.New=function(Key$1,Name,Type)
 {
  return new OutPort({
   Key:Key$1,
   Name:Name,
   Type:Type
  });
 };
 Ports.Create=function(info)
 {
  var m;
  m=function(name,pair)
  {
   var m$1;
   m$1=pair.Value;
   return m$1.$==1?InPort.Create(pair.Key,name,{
    $:1,
    $0:Var.Create$1(m$1.$0)
   }):InPort.Create(pair.Key,name,{
    $:0,
    $0:Var.Create$1(m$1.$0)
   });
  };
  return List.map(function($1)
  {
   return m($1[0],$1[1]);
  },info);
 };
 Worker=Dashboard.Worker=Runtime.Class({
  Equals:function(y)
  {
   return y instanceof Worker&&Unchecked.Equals(this.Name,y.Name);
  },
  get_Properties:function()
  {
   return new List.T({
    $:1,
    $0:Properties.string("Name",this.Name),
    $1:List.map(function(port)
    {
     return port.get_Property();
    },this.InPorts)
   });
  },
  get_Render:function()
  {
   var m;
   m=this.Renderer;
   return m==null?Doc.Empty():(m.$0.WebSharper_Community_Dashboard_IRenderer$get_Render())(this);
  },
  get_CloneAndRun:function()
  {
   var varName,iPorts,oPorts;
   varName=Var.Create$1(this.Name.c);
   iPorts=List.map(function(port)
   {
    return port.get_Clone();
   },this.InPorts);
   oPorts=List.map(function(port)
   {
    return port.get_Clone();
   },this.OutPorts);
   return Worker.New(Helper.UniqueKey(),varName,iPorts,oPorts,this.Runner,this.Renderer,this.DataContext,null).WithStartRunner();
  },
  WithStartRunner:function()
  {
   var m;
   m=this.Runner;
   return m==null?this:Worker.New(this.Key,this.Name,this.InPorts,this.OutPorts,this.Runner,this.Renderer,this.DataContext,(m.$0.WebSharper_Community_Dashboard_IRunner$get_Run())(this));
  },
  WithRenderer:function(renderer)
  {
   return Worker.New(this.Key,this.Name,this.InPorts,this.OutPorts,this.Runner,{
    $:1,
    $0:renderer
   },this.DataContext,this.RunnerContext);
  },
  WithRunner:function(runner)
  {
   return Worker.New(this.Key,this.Name,this.InPorts,this.OutPorts,{
    $:1,
    $0:runner
   },this.Renderer,this.DataContext,this.RunnerContext);
  },
  WithKey:function(key)
  {
   return Worker.New(key,this.Name,this.InPorts,this.OutPorts,this.Runner,this.Renderer,this.DataContext,this.RunnerContext);
  }
 },null,Worker);
 Worker.Create=function(dataContext)
 {
  return Worker.New(Helper.UniqueKey(),Var.Create$1(dataContext.WebSharper_Community_Dashboard_IWorkerContext$get_Name()),dataContext.WebSharper_Community_Dashboard_IWorkerContext$get_InPorts(),dataContext.WebSharper_Community_Dashboard_IWorkerContext$get_OutPorts(),null,null,dataContext,null);
 };
 Worker.New=function(Key$1,Name,InPorts,OutPorts,Runner,Renderer,DataContext,RunnerContext)
 {
  return new Worker({
   Key:Key$1,
   Name:Name,
   InPorts:InPorts,
   OutPorts:OutPorts,
   Runner:Runner,
   Renderer:Renderer,
   DataContext:DataContext,
   RunnerContext:RunnerContext
  });
 };
 Workers.allInPorts=function(workers)
 {
  return Workers.allPorts(workers,function(worker)
  {
   return worker.InPorts;
  });
 };
 Workers.allOutPorts=function(workers)
 {
  return Workers.allPorts(workers,function(worker)
  {
   return worker.OutPorts;
  });
 };
 Workers.allPorts=function(workers,fnc)
 {
  return List.concat(List.map(fnc,workers));
 };
 RandomRunner=Dashboard.RandomRunner=Runtime.Class({
  WithMiddleValue:function(value)
  {
   return RandomRunner.New(this.Name,MessageBus.CreateNumber(value),this.Dispersion,this.OutPortKey);
  },
  WebSharper_Community_Dashboard_IRunner$get_Run:function()
  {
   return function(worker)
   {
    var b;
    new Random.New();
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return true;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(600),function()
      {
       var disper,middle,d;
       disper=worker.InPorts.get_Item(1).get_Number();
       middle=worker.InPorts.get_Item(0).get_Number();
       d=Math.random()*disper+middle;
       worker.OutPorts.get_Item(0).Trigger({
        $:0,
        $0:d
       });
       return Concurrency.Zero();
      });
     }));
    })),null);
    return null;
   };
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_OutPorts:function()
  {
   return List.ofArray([OutPort.CreateNumber(this.OutPortKey,"Random value")]);
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_InPorts:function()
  {
   return Ports.Create(List.ofArray([["Middle value",this.MiddleValue],["Dispersion",this.Dispersion]]));
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_Name:function()
  {
   return this.Name;
  }
 },null,RandomRunner);
 RandomRunner.get_FromPorts=function()
 {
  return function(worker)
  {
   return RandomRunner.New(worker.Name.c,worker.InPorts.get_Item(0).get_NumberValue(),worker.InPorts.get_Item(1).get_NumberValue(),worker.OutPorts.get_Item(0).Key);
  };
 };
 RandomRunner.Create=function(middleValue,dispersion)
 {
  var c;
  return RandomRunner.New("Random",MessageBus.CreateNumber(middleValue),MessageBus.CreateNumber(dispersion),(c=Guid.NewGuid(),window.String(c)));
 };
 RandomRunner.New=function(Name,MiddleValue,Dispersion,OutPortKey)
 {
  return new RandomRunner({
   Name:Name,
   MiddleValue:MiddleValue,
   Dispersion:Dispersion,
   OutPortKey:OutPortKey
  });
 };
 Forecast.New=function(Title,Description,ImageUrl,Temperature,TemparatureMinMax)
 {
  return{
   Title:Title,
   Description:Description,
   ImageUrl:ImageUrl,
   Temperature:Temperature,
   TemparatureMinMax:TemparatureMinMax
  };
 };
 OpenWeather.get=function(key,city)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var request;
   request=(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("http://api.openweathermap.org/data/2.5/weather?q="+PrintfHelpers.toSafe($2)+"&units=metric&appid="+PrintfHelpers.toSafe($3));
   }))(window.id))(city))(key);
   console.log("get key city "+request);
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,"C:\\Users\\Andrey\\Private\\VS_Projects\\WebSharper.Community.Dashboard\\WebSharper.Community.Dashboard","","JSON","",request),function(t)
    {
     return Unchecked.Equals(typeof t,"string")?JSON.parse(t):t;
    }),function(a)
    {
     var o,head,prop,opt,x,prop$1,opt$1,prop$2,opt$2,prop$3,opt$3,v,x$1,prop$4,opt$4,v$1,x$2,prop$5,opt$5,v$2,x$3,prop$6,opt$6;
     console.log("get key city 2");
     return Concurrency.Return((o=Arrays.tryHead(a.weather),o==null?null:{
      $:1,
      $0:(head=o.$0,Forecast.New((((Runtime.Curried3(function($1,$2,$3)
      {
       return $1(PrintfHelpers.toSafe($2)+", "+PrintfHelpers.toSafe($3));
      }))(window.id))((opt=(prop="name",prop in a?{
       $:1,
       $0:a[prop]
      }:null),opt==null?null:opt.$0)))((opt$1=(x=a.sys,(prop$1="country",prop$1 in x?{
       $:1,
       $0:x[prop$1]
      }:null)),opt$1==null?null:opt$1.$0)),(opt$2=(prop$2="main",prop$2 in head?{
       $:1,
       $0:head[prop$2]
      }:null),opt$2==null?null:opt$2.$0),(function($1)
      {
       return function($2)
       {
        return $1("http://openweathermap.org/img/w/"+PrintfHelpers.toSafe($2)+".png");
       };
      }(window.id))((opt$3=(prop$3="icon",prop$3 in head?{
       $:1,
       $0:head[prop$3]
      }:null),opt$3==null?null:opt$3.$0)),(v=(x$1=a.main,(prop$4="temp",prop$4 in x$1?{
       $:1,
       $0:x$1[prop$4]
      }:null)),(opt$4=v==null?null:{
       $:1,
       $0:1*v.$0
      },opt$4==null?null:opt$4.$0)),[(v$1=(x$2=a.main,(prop$5="temp_min",prop$5 in x$2?{
       $:1,
       $0:x$2[prop$5]
      }:null)),(opt$5=v$1==null?null:{
       $:1,
       $0:1*v$1.$0
      },opt$5==null?null:opt$5.$0)),(v$2=(x$3=a.main,(prop$6="temp_max",prop$6 in x$3?{
       $:1,
       $0:x$3[prop$6]
      }:null)),(opt$6=v$2==null?null:{
       $:1,
       $0:1*v$2.$0
      },opt$6==null?null:opt$6.$0))]))
     }));
    });
   }),function(a)
   {
    console.log(a.message);
    return Concurrency.Return(null);
   });
  });
 };
 OpenWeatherRunner=Dashboard.OpenWeatherRunner=Runtime.Class({
  WebSharper_Community_Dashboard_IRunner$get_Run:function()
  {
   return function(worker)
   {
    var b;
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return true;
     },Concurrency.Delay(function()
     {
      var inCity,inApiKey,outTempearatur;
      inCity=worker.InPorts.get_Item(0);
      inApiKey=worker.InPorts.get_Item(1);
      outTempearatur=worker.OutPorts.get_Item(0);
      return Concurrency.Bind(OpenWeather.get(inApiKey.get_String(),inCity.get_String()),function(a)
      {
       return Concurrency.Combine(a==null?Concurrency.Zero():(console.log("Value generated:"+a.$0.Title),outTempearatur.Trigger({
        $:0,
        $0:+a.$0.Temperature
       }),Concurrency.Zero()),Concurrency.Delay(function()
       {
        return Concurrency.Bind(Concurrency.Sleep(1000*15),function()
        {
         return Concurrency.Return(null);
        });
       }));
      });
     }));
    })),null);
    return null;
   };
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_OutPorts:function()
  {
   return List.ofArray([OutPort.CreateNumber(this.OutPortKey,"Temperature")]);
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_InPorts:function()
  {
   return Ports.Create(List.ofArray([["City",this.OpenWeatherCity],["ApiKey",this.OpenWeatherApiKey]]));
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_Name:function()
  {
   return this.Name;
  }
 },null,OpenWeatherRunner);
 OpenWeatherRunner.get_FromPorts=function()
 {
  return function(worker)
  {
   return OpenWeatherRunner.New(worker.Name.c,worker.InPorts.get_Item(0).get_StringValue(),worker.InPorts.get_Item(1).get_StringValue(),worker.OutPorts.get_Item(0).Key);
  };
 };
 OpenWeatherRunner.Create=function(city,apikey)
 {
  var c;
  return OpenWeatherRunner.New("OpenWeatherMap",MessageBus.CreateString(city),MessageBus.CreateString(apikey),(c=Guid.NewGuid(),window.String(c)));
 };
 OpenWeatherRunner.New=function(Name,OpenWeatherCity,OpenWeatherApiKey,OutPortKey)
 {
  return new OpenWeatherRunner({
   Name:Name,
   OpenWeatherCity:OpenWeatherCity,
   OpenWeatherApiKey:OpenWeatherApiKey,
   OutPortKey:OutPortKey
  });
 };
 ChartRunnerContext.New=function(LineChart,Queue)
 {
  return{
   LineChart:LineChart,
   Queue:Queue
  };
 };
 ChartRenderer=Dashboard.ChartRenderer=Runtime.Class({
  WebSharper_Community_Dashboard_IRenderer$get_Render:function()
  {
   return function(worker)
   {
    var chartBufferSize,context;
    chartBufferSize=worker.InPorts.get_Item(3).get_Number()<<0;
    context=worker.RunnerContext.$0;
    View.Sink(function(value)
    {
     context.Queue.push(value);
     context.Queue.length>chartBufferSize?context.Queue.shift():void 0;
     Seq.iteri(function(ind,entry)
     {
      return context.LineChart.__UpdateData(ind,function()
      {
       return entry;
      });
     },context.Queue);
    },worker.InPorts.get_Item(0).get_NumberVar().v);
    return ChartJs.Render$8(worker.RunnerContext.$0.LineChart,{
     $:1,
     $0:{
      $:0,
      $0:worker.InPorts.get_Item(1).get_Number()<<0,
      $1:worker.InPorts.get_Item(2).get_Number()<<0
     }
    },null,null);
   };
  },
  WebSharper_Community_Dashboard_IRunner$get_Run:function()
  {
   return function(worker)
   {
    var chartBufferSize,data,values,queue;
    chartBufferSize=worker.InPorts.get_Item(3).get_Number()<<0;
    data=List.ofSeq(Seq.delay(function()
    {
     return Seq.map(function()
     {
      return 0;
     },Operators.range(0,chartBufferSize-1));
    }));
    values=(queue=[],(Seq.iter(function(entry)
    {
     queue.push(entry);
    },data),queue));
    return{
     $:1,
     $0:ChartRunnerContext.New(Chart.Line(data).__WithFillColor(new Pervasives.Color({
      $:2,
      $0:"white"
     })),values)
    };
   };
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_OutPorts:function()
  {
   return List.T.Empty;
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_InPorts:function()
  {
   return Ports.Create(List.ofArray([[" in Value",MessageBus.CreateNumber(0)],["cx",this.Cx],["cy",this.Cy],["BufferSize",this.ChartBufferSize]]));
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_Name:function()
  {
   return this.Name;
  }
 },null,ChartRenderer);
 ChartRenderer.get_FromPorts=function()
 {
  return function(worker)
  {
   return ChartRenderer.New(worker.Name.c,worker.InPorts.get_Item(0).get_NumberValue(),worker.InPorts.get_Item(1).get_NumberValue(),worker.InPorts.get_Item(2).get_NumberValue(),worker.InPorts.get_Item(3).get_NumberValue());
  };
 };
 ChartRenderer.Create=function(cx,cy,bufferSize)
 {
  return ChartRenderer.New("Chart",MessageBus.CreateNumber(0),MessageBus.CreateNumber(cx),MessageBus.CreateNumber(cy),MessageBus.CreateNumber(bufferSize));
 };
 ChartRenderer.New=function(Name,Number,Cx,Cy,ChartBufferSize)
 {
  return new ChartRenderer({
   Name:Name,
   Number:Number,
   Cx:Cx,
   Cy:Cy,
   ChartBufferSize:ChartBufferSize
  });
 };
 TextBoxRenderer=Dashboard.TextBoxRenderer=Runtime.Class({
  WebSharper_Community_Dashboard_IRenderer$get_Render:function()
  {
   return function(worker)
   {
    var strView;
    strView=View.Map(function(value)
    {
     var c;
     c=value<<0;
     return window.String(c);
    },worker.InPorts.get_Item(0).get_NumberVar().v);
    return Doc.Element("div",[AttrModule.Class("bigvalue")],[Doc.TextView(strView)]);
   };
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_OutPorts:function()
  {
   return List.T.Empty;
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_InPorts:function()
  {
   return Ports.Create(List.ofArray([["in Value",this.TextBoxValue]]));
  },
  WebSharper_Community_Dashboard_IWorkerContext$get_Name:function()
  {
   return this.Name;
  }
 },null,TextBoxRenderer);
 TextBoxRenderer.get_FromPorts=function()
 {
  return function(worker)
  {
   return TextBoxRenderer.New(worker.Name.c,worker.InPorts.get_Item(0).get_NumberValue());
  };
 };
 TextBoxRenderer.get_Create=function()
 {
  return TextBoxRenderer.New("Text",MessageBus.CreateNumber(0));
 };
 TextBoxRenderer.New=function(Name,TextBoxValue)
 {
  return new TextBoxRenderer({
   Name:Name,
   TextBoxValue:TextBoxValue
  });
 };
 RuleEntry.New=function(InPortKey,OutPortKey,WorkerKey)
 {
  return{
   InPortKey:InPortKey,
   OutPortKey:OutPortKey,
   WorkerKey:WorkerKey
  };
 };
 RuleChain.New=function(RuleChain$1)
 {
  return{
   RuleChain:RuleChain$1
  };
 };
 RuleContainer=Dashboard.RuleContainer=Runtime.Class({
  Reconnect:function(workers)
  {
   var allOutPorts,allInPorts,_this;
   allOutPorts=Workers.allOutPorts(workers);
   allInPorts=Workers.allInPorts(workers);
   List.iter(function(inPort)
   {
    (MessageBus.Log())((((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(PrintfHelpers.toSafe($2)+" "+PrintfHelpers.toSafe($3));
    }))(window.id))(inPort.Name))(inPort.Key));
   },allInPorts);
   _this=MessageBus.Agent();
   _this.mailbox.AddLast(Message.Clear);
   _this.resume();
   List.iter(function(row)
   {
    var cells,i,e;
    cells=List.ofSeq(row.RuleChain);
    i=List.ofSeq(Operators.range(1,cells.get_Length()-1));
    e=Enumerator.Get(i);
    try
    {
     while(e.MoveNext())
      (function()
      {
       var i$1,cell1,cell2,o,outPort,o$1,inPort,_this$1;
       i$1=e.Current();
       cell1=cells.get_Item(i$1-1);
       cell2=cells.get_Item(i$1);
       o=Seq.tryFind(function(port)
       {
        return port.Key===cell1.OutPortKey;
       },allOutPorts),o==null?null:{
        $:1,
        $0:(outPort=o.$0,((MessageBus.Log())((function($1)
        {
         return function($2)
         {
          return $1("Found out port "+PrintfHelpers.toSafe($2));
         };
        }(window.id))(cell2.InPortKey)),o$1=Seq.tryFind(function(port)
        {
         return port.Key===cell2.InPortKey;
        },allInPorts),o$1==null?null:{
         $:1,
         $0:(inPort=o$1.$0,((MessageBus.Log())("Found int port"),_this$1=MessageBus.Agent(),_this$1.mailbox.AddLast({
          $:1,
          $0:[outPort.Key,outPort.Name+"->"+inPort.Name,function(a)
          {
           inPort.Receive(a);
          }]
         }),_this$1.resume()))
        }))
       };
      }());
    }
    finally
    {
     if("Dispose"in e)
      e.Dispose();
    }
   },List.ofSeq(this.RuleContainer));
  }
 },null,RuleContainer);
 RuleContainer.New=function(RuleContainer$1)
 {
  return new RuleContainer({
   RuleContainer:RuleContainer$1
  });
 };
 WorkerItem.Create=function(worker)
 {
  return WorkerItem.New(Key.Fresh(),worker);
 };
 WorkerItem.New=function(Key$1,Worker$1)
 {
  return{
   Key:Key$1,
   Worker:Worker$1
  };
 };
 Factory=Dashboard.Factory=Runtime.Class({
  RegisterEvent:function(event)
  {
   this.EventItems.Append(WorkerItem.Create(event));
  },
  RegisterWidget:function(widget)
  {
   this.WidgetItems.Append(WorkerItem.Create(widget));
  }
 },null,Factory);
 Factory.get_Create=function()
 {
  return Factory.New(ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty),ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty));
 };
 Factory.New=function(EventItems,WidgetItems)
 {
  return new Factory({
   EventItems:EventItems,
   WidgetItems:WidgetItems
  });
 };
 WidgetItem.Create=function(panel,widget)
 {
  return WidgetItem.New(Key.Fresh(),panel,widget);
 };
 WidgetItem.New=function(Key$1,Panel$2,Widget)
 {
  return{
   Key:Key$1,
   Panel:Panel$2,
   Widget:Widget
  };
 };
 DshData=Dashboard.DshData=Runtime.Class({
  RegisterWidget:function(key,panel,widget)
  {
   var widget_key;
   widget_key=widget.WithKey(key);
   this.WidgetItems.Append(WidgetItem.Create(panel,widget_key));
   this.WorkItems.Append(WorkerItem.Create(widget_key));
  },
  RegisterEvent:function(key,event)
  {
   var item;
   item=WorkerItem.Create(event.WithKey(key));
   this.EventItems.Append(item);
   this.WorkItems.Append(item);
  },
  get_Clear:function()
  {
   this.WorkItems.Clear();
   this.WidgetItems.Clear();
   this.EventItems.Clear();
  }
 },null,DshData);
 DshData.get_Create=function()
 {
  return DshData.New(ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty),ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty),ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty));
 };
 DshData.New=function(WorkItems,WidgetItems,EventItems)
 {
  return new DshData({
   WorkItems:WorkItems,
   WidgetItems:WidgetItems,
   EventItems:EventItems
  });
 };
 DshEditorCellItem=Dashboard.DshEditorCellItem=Runtime.Class({
  Render:function(data,reconnectFnc)
  {
   var $this,workerSelector,inPorts,outPorts,items;
   $this=this;
   View.Sink(function(optWorker)
   {
    var workerItem;
    if(optWorker==null)
     ;
    else
     {
      workerItem=optWorker.$0;
      console.log("Workitem selected");
      Var.Set($this.OptInPort,List.tryHead(workerItem.Worker.InPorts));
      Var.Set($this.OptOutPort,List.tryHead(workerItem.Worker.OutPorts));
      reconnectFnc();
     }
   },this.OptWorker.v);
   View.Sink(function()
   {
    reconnectFnc();
   },this.OptInPort.v);
   View.Sink(function()
   {
    reconnectFnc();
   },this.OptOutPort.v);
   workerSelector=(inPorts=View.Map(function(workerItemOpt)
   {
    var ports;
    return workerItemOpt==null?List.ofArray([null]):(ports=List.map(function(item)
    {
     return{
      $:1,
      $0:item
     };
    },workerItemOpt.$0.Worker.InPorts),ports.get_Length()>0?ports:List.ofArray([null]));
   },this.OptWorker.v),(outPorts=View.Map(function(workerItemOpt)
   {
    var ports;
    return workerItemOpt==null?List.ofArray([null]):(ports=List.map(function(item)
    {
     return{
      $:1,
      $0:item
     };
    },workerItemOpt.$0.Worker.OutPorts),ports.get_Length()>0?ports:List.ofArray([null]));
   },this.OptWorker.v),(items=View.Map(function(itemSeq)
   {
    return new List.T({
     $:1,
     $0:null,
     $1:List.map(function(item)
     {
      return{
       $:1,
       $0:item
      };
     },List.ofSeq(itemSeq))
    });
   },data.WorkItems.v),Doc.Element("table",[],[Doc.Element("tr",[],[Doc.Element("td",[],[Doc.SelectDyn([AttrModule.Class("form-control")],function(item)
   {
    return Option.fold(function(a,port)
    {
     return port.Name;
    }," ",item);
   },inPorts,this.OptInPort)]),Doc.Element("td",[],[Doc.SelectDyn([AttrModule.Class("form-control")],function(item)
   {
    return Option.fold(function(a,workerItem)
    {
     return workerItem.Worker.Name.c;
    }," ",item);
   },items,this.OptWorker)]),Doc.Element("td",[],[Doc.SelectDyn([AttrModule.Class("form-control")],function(item)
   {
    return Option.fold(function(a,port)
    {
     return port.Name;
    }," ",item);
   },outPorts,this.OptOutPort)])])]))));
   return Doc.Element("td",[AttrModule.Class("td DshEditorCell")],[Doc.Element("div",[AttrModule.Class("div DshEditorCell")],[Doc.Element("table",[],[Doc.Element("tr",[],[Doc.Element("td",[],[workerSelector])])])])]);
  }
 },null,DshEditorCellItem);
 DshEditorCellItem.get_Create=function()
 {
  return DshEditorCellItem.New(Key.Fresh(),Var.Create$1(null),Var.Create$1(null),Var.Create$1(null));
 };
 DshEditorCellItem.New=function(Key$1,OptInPort,OptWorker,OptOutPort)
 {
  return new DshEditorCellItem({
   Key:Key$1,
   OptInPort:OptInPort,
   OptWorker:OptWorker,
   OptOutPort:OptOutPort
  });
 };
 DshEditorRowItem=Dashboard.DshEditorRowItem=Runtime.Class({
  Render:function(data,reconnectFnc)
  {
   var $this;
   $this=this;
   return Doc.Element("tr",[],[Doc.ConvertBy(function(m)
   {
    return m.Key;
   },function(item)
   {
    return item.Render(data,reconnectFnc);
   },this.CellItems.v),Helper.IconNormal("add",function()
   {
    $this.CellItems.Append(DshEditorCellItem.get_Create());
   })]);
  }
 },null,DshEditorRowItem);
 DshEditorRowItem.Create=function(children)
 {
  return DshEditorRowItem.New(Key.Fresh(),ListModel.Create(function(item)
  {
   return item.Key;
  },children));
 };
 DshEditorRowItem.New=function(Key$1,CellItems)
 {
  return new DshEditorRowItem({
   Key:Key$1,
   CellItems:CellItems
  });
 };
 DshEditor=Dashboard.DshEditor=Runtime.Class({
  Render:function(data)
  {
   var $this,reconnectFnc;
   $this=this;
   reconnectFnc=function()
   {
    var x;
    x=List.map(function(item)
    {
     return item.Worker;
    },List.ofSeq(data.WorkItems));
    $this.get_CopyToRules().Reconnect(x);
   };
   return Doc.Element("table",[],[Doc.ConvertBy(function(m)
   {
    return m.Key;
   },function(item)
   {
    return Doc.Element("tr",[],[item.Render(data,function()
    {
     reconnectFnc();
    })]);
   },this.RowItems.v)]);
  },
  Restore:function(data,rules)
  {
   var $this,allWorkers,allOutPorts,allInPorts;
   $this=this;
   this.RowItems.Clear();
   allWorkers=List.map(function(item)
   {
    return item.Worker;
   },List.ofSeq(data.WorkItems));
   allOutPorts=Workers.allOutPorts(allWorkers);
   allInPorts=Workers.allInPorts(allWorkers);
   List.iter(function(rowData)
   {
    var row;
    row=DshEditorRowItem.Create([]);
    List.iter(function(cellData)
    {
     var cell;
     cell=DshEditorCellItem.get_Create();
     Var.Set(cell.OptWorker,Seq.tryFind(function(item)
     {
      return item.Worker.Key===cellData.WorkerKey;
     },List.ofSeq(data.WorkItems)));
     Var.Set(cell.OptInPort,Seq.tryFind(function(port)
     {
      return port.Key===cellData.InPortKey;
     },allInPorts));
     Var.Set(cell.OptOutPort,Seq.tryFind(function(port)
     {
      return port.Key===cellData.OutPortKey;
     },allOutPorts));
     row.CellItems.Append(cell);
    },rowData.RuleChain);
    $this.RowItems.Append(row);
   },rules.RuleContainer);
   rules.Reconnect(allWorkers);
  },
  get_CopyToRules:function()
  {
   return RuleContainer.New(List.map(function(row)
   {
    return RuleChain.New(List.map(function(cell)
    {
     var m,m$1,m$2;
     return RuleEntry.New((m=cell.OptInPort.c,m==null?"":m.$0.Key),(m$1=cell.OptOutPort.c,m$1==null?"":m$1.$0.Key),(m$2=cell.OptWorker.c,m$2==null?"":m$2.$0.Worker.Key));
    },List.ofSeq(row.CellItems)));
   },List.ofSeq(this.RowItems)));
  }
 },null,DshEditor);
 DshEditor.get_Create=function()
 {
  return DshEditor.New(ListModel.Create(function(item)
  {
   return item.Key;
  },List.T.Empty));
 };
 DshEditor.New=function(RowItems)
 {
  return new DshEditor({
   RowItems:RowItems
  });
 };
 Dashboard$1=Dashboard.Dashboard=Runtime.Class({
  get_Render:function()
  {
   var $this,eventsRender,containers,menu,m,containerDivs,m$1;
   function container(varValue,content)
   {
    var varVis;
    varVis=Var.Create$1(varValue);
    return[varVis,Doc.Element("div",[AttrModule.DynamicStyle("display",View.Map(function(isVisible)
    {
     return isVisible?"initial":"none";
    },varVis.v))],[content])];
   }
   $this=this;
   eventsRender=Doc.Element("table",[],[Doc.ConvertBy(function(m$2)
   {
    return m$2.Key;
   },function(item)
   {
    return Doc.Element("tr",[],[Doc.Element("i",Helper.AttrsClick(function()
    {
     $this.PropertyGrid.Edit(item.Worker.get_Properties());
    }),[Doc.TextView(item.Worker.Name.v)])]);
   },this.Data.EventItems.v)]);
   containers=List.ofArray([["Board",container(true,this.PanelContainer.get_Render())],["Events",container(false,eventsRender)],["Rules",container(false,this.Editor.Render(this.Data))]]);
   menu=(m=function(name,a)
   {
    var varVis;
    varVis=a[0];
    return Doc.Element("tr",[],[Doc.Element("td",[AttrModule.DynamicStyle("Color",View.Map(function(isVisible)
    {
     return isVisible?"#FB8C00":"#7D4600";
    },varVis.v)),AttrModule.Style("cursor","pointer"),AttrModule.Handler("click",function()
    {
     return function()
     {
      var a$1;
      $this.PropertyGrid.Edit(List.T.Empty);
      a$1=function(a$2,a$3)
      {
       var varBool;
       varBool=a$3[0];
       !Unchecked.Equals(varBool,varVis)?Var.Set(varBool,false):Var.Set(varBool,true);
      };
      return List.iter(function($1)
      {
       return a$1($1[0],$1[1]);
      },containers);
     };
    })],[Doc.TextNode(name)])]);
   },List.map(function($1)
   {
    return m($1[0],$1[1]);
   },containers));
   containerDivs=(m$1=function(a,a$1)
   {
    return a$1[1];
   },List.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },containers));
   return Doc.Element("div",[],[Doc.Element("table",[],[Doc.Element("tr",[],[Doc.Element("td",[AttrModule.Style("vertical-align","top")],[Doc.Element("table",[],Seq.concat([List.ofArray([Doc.Element("tr",[],[Doc.Element("td",[],[Helper.IconNormal("dehaze",function()
   {
   })])]),Doc.Element("tr",[],[Doc.Element("td",[],[Helper.IconNormal("add",function()
   {
    var varBoolDash,varBoolSrc,varBoolEdit,items,selected;
    varBoolDash=(containers.get_Item(0))[1][0];
    varBoolSrc=(containers.get_Item(1))[1][0];
    varBoolEdit=(containers.get_Item(2))[1][0];
    varBoolSrc.c?(items=List.ofSeq($this.Factory.EventItems),selected=Var.Create$1(List.head(items)),$this.Dialog.ShowDialog("Select source",Doc.Element("div",[],[Doc.Select([AttrModule.Class("form-control")],function(item)
    {
     return item.Worker.Name.c;
    },items,selected)]),function()
    {
     var a;
     a=selected.c.Worker.get_CloneAndRun();
     $this.Data.RegisterEvent(Helper.UniqueKey(),a);
    })):varBoolDash.c?$this.CreatePanel("Panel",700,null):varBoolEdit.c?$this.Editor.RowItems.Append(DshEditorRowItem.Create([DshEditorCellItem.get_Create()])):void 0;
   })])])]),menu,List.ofArray([Doc.Element("tr",[],[Doc.Element("td",[],[])]),Doc.Element("tr",[],[Doc.Element("td",[],[this.PropertyGrid.get_Render()])])])]))]),Doc.Element("td",[],containerDivs)])]),Doc.Element("div",[],[this.Dialog.get_Render()])]);
  },
  Restore:function(panelList,events,widgets,dashEditorData)
  {
   var $this,a,a$1;
   $this=this;
   this.PanelContainer.PanelItems.Clear();
   this.Data.get_Clear();
   List.iter(function(panelConfig)
   {
    var panel;
    panel=$this.CreatePanel("Panel",700,{
     $:1,
     $0:panelConfig.Key
    });
    Var.Set(panel.Left,panelConfig.Left);
    Var.Set(panel.Top,panelConfig.Top);
   },panelList);
   a=function(key,event)
   {
    $this.Data.RegisterEvent(key,event);
   };
   List.iter(function($1)
   {
    return a($1[0],$1[1]);
   },events);
   console.log("Events restored");
   a$1=function(key,panelKey,widget)
   {
    $this.RegisterWidget(key,panelKey,Seq.find(function(entry)
    {
     return entry.Key===panelKey;
    },List.ofSeq($this.PanelContainer.PanelItems)).Children,widget.WithStartRunner());
   };
   List.iter(function($1)
   {
    return a$1($1[0],$1[1],$1[2]);
   },widgets);
   console.log("Widgets restored");
   this.Editor.Restore(this.Data,dashEditorData);
   console.log("Connectors restored");
  },
  CreatePanel:function(name,cx,key)
  {
   var $this,keyDef,d,c,childContainerContent,panel;
   $this=this;
   Doc.ConvertBy(this.Data.WidgetItems.key,function(item)
   {
    return Doc.Element("div",[],[Doc.TextView(item.Widget.Name.v)]);
   },this.Data.WidgetItems.v);
   keyDef=(d=(c=Guid.NewGuid(),window.String(c)),key==null?d:key.$0);
   childContainerContent=PanelContainer.get_Create().WithLayoutManager(LayoutManagers.StackPanelLayoutManager()).WithAttributes([AttrModule.Style("border","1px solid white"),AttrModule.Style("display","flex")]);
   panel=Panel$1.get_Create().WithKey(keyDef).WithPannelAttrs([AttrModule.Style("Width",window.String(cx)+"px"),AttrModule.Style("position","absolute")]).WithTitleContent(Doc.TextNode(name)).WithTitleButtons(List.ofArray([TitleButton.New("add",function(panel$1)
   {
    var items,selected;
    items=List.ofSeq($this.Factory.WidgetItems);
    selected=Var.Create$1(List.head(items));
    $this.Dialog.ShowDialog("Select widget",Doc.Element("div",[],[Doc.Select([AttrModule.Class("form-control")],function(item)
    {
     return item.Worker.Name.c;
    },items,selected)]),function()
    {
     console.log("Dialog.IsOK");
     $this.RegisterWidget(Helper.UniqueKey(),panel$1.Key,panel$1.Children,selected.c.Worker.get_CloneAndRun());
    });
   }),TitleButton.New("edit",function(panel$1)
   {
    console.log("Edit");
    $this.PropertyGrid.Edit(List.concat(List.map(function(item)
    {
     return item.Widget.get_Properties();
    },List.filter(function(item)
    {
     return item.Panel===panel$1.Key;
    },List.ofSeq($this.Data.WidgetItems)))));
   }),TitleButton.New("clear",function(panel$1)
   {
    $this.PanelContainer.PanelItems.Remove($this.PanelContainer.FindPanelItem(panel$1));
   })])).WithChildPanelContainer(childContainerContent);
   this.PanelContainer.AddPanel(panel);
   return panel;
  },
  RegisterWidget:function(key,panelKey,toPanelContainer,worker)
  {
   this.Data.RegisterWidget(key,panelKey,worker);
   toPanelContainer.AddPanel(Panel$1.get_Create().WithTitle(false).WithPanelContent(worker.get_Render()));
  }
 },null,Dashboard$1);
 Dashboard$1.Create=function(panelContainer)
 {
  var dialog;
  dialog=Dialog.get_Create();
  return Dashboard$1.New(Factory.get_Create(),DshData.get_Create(),panelContainer,DshEditor.get_Create(),PropertyGrid$1.get_Create(),dialog);
 };
 Dashboard$1.New=function(Factory$1,Data$2,PanelContainer$1,Editor,PropertyGrid$2,Dialog$1)
 {
  return new Dashboard$1({
   Factory:Factory$1,
   Data:Data$2,
   PanelContainer:PanelContainer$1,
   Editor:Editor,
   PropertyGrid:PropertyGrid$2,
   Dialog:Dialog$1
  });
 };
}());
