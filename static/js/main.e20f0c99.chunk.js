(this.webpackJsonpscheduledaily=this.webpackJsonpscheduledaily||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=(a(17),a(1)),u=a(6),i=function(e,t){switch(t.type){case"ADD_BOOL":return[].concat(Object(u.a)(e),[{boolName:t.bool.boolName,bID:Math.floor(9e5*Math.random()),pID:1,isComplete:!1}]);case"REMOVE_BOOL":return e.filter((function(e){return e.bID!==t.bID}));default:return e}},m=Object(n.createContext)(),o=function(e){var t=Object(n.useReducer)(i,[],(function(){var e=localStorage.getItem("bools");return e?JSON.parse(e):[]})),a=Object(c.a)(t,2),l=a[0],s=a[1];return Object(n.useEffect)((function(){localStorage.setItem("bools",JSON.stringify(l)),console.log("Bools was just set to ".concat(JSON.stringify(l)))}),[l]),r.a.createElement(m.Provider,{value:{bools:l,boolsDispatch:s}},e.children)};var d=function(e){var t=Object(n.useContext)(m).boolsDispatch;return r.a.createElement("div",{className:"creationselection"},r.a.createElement("button",{className:"deletebutton",onClick:function(){return t({type:"REMOVE_BOOL",bID:e.bool.bID})}},"x"),r.a.createElement("p",{className:"selectionname"},e.selectionname))};var b=function(e){var t=Object(n.useContext)(m).boolsDispatch,a=Object(n.useState)(""),l=Object(c.a)(a,2),s=l[0],u=l[1];return r.a.createElement("div",{className:"creationselection"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOL",bool:{boolName:s}}),console.log(s),u("")}},r.a.createElement("input",{className:"selectioninput",placeholder:"New",type:"text",name:"AltAdder",value:s,onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"+",className:"deletebutton"})))},E=function(e,t){var a=e.findIndex((function(e){return e.tID==t.tID}));switch(t.type){case"ADD_TASK":return function(e,t){return(e=[].concat(Object(u.a)(e),[{taskName:t.taskName,tID:Math.floor(9e5*Math.random()),pID:1,startTime:t.startTime,endTime:t.endTime,isComplete:!1,taskNotes:t.taskNotes,subtasks:t.subtasks}])).sort((function(e,t){var a=Number(e.startTime.substring(0,2)),n=Number(t.startTime.substring(0,2)),r=Number(e.startTime.substring(3,5)),l=Number(t.startTime.substring(3,5));return a<n||a===n&&r<l?-1:n<a?1:0})),Object(u.a)(e)}(e,t.task);case"REMOVE_TASK":return e.filter((function(e){return e.tID!==t.tID}));case"TOGGLE_TASK":return e[a].isComplete=!e[a].isComplete,e;case"EDIT_TASK_NOTE":return console.log(t.task.ind),e[t.task.ind].taskNotes=t.task.note,console.log(e[t.task.ind].taskNotes),Object(u.a)(e);default:return e}};var p=Object(n.createContext)(),v=function(e){var t=Object(n.useReducer)(E,[],(function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),a=Object(c.a)(t,2),l=a[0],s=a[1];return Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(l)),console.log("Tasks was just set to ".concat(JSON.stringify(l)))}),[l]),r.a.createElement(p.Provider,{value:{tasks:l,dispatch:s}},e.children)},N=Object(n.createContext)(),f=function(e){var t=localStorage.getItem("note"),a=t?JSON.parse(t):[{note:"Today's Notes: "}],l=Object(n.useState)(a),s=Object(c.a)(l,2),u=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem("note",JSON.stringify(u)),console.log("Notes was just set to ".concat(JSON.stringify(u)))}),[u]),r.a.createElement(N.Provider,{value:{note:u,editNote:function(e){i([{note:e}])}}},e.children)};var k=function(){var e=Object(n.useContext)(p).tasks,t=Object(n.useContext)(m).bools,a=Object(n.useContext)(N),l=a.note,s=a.editNote;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar",id:"creationsidebar"},r.a.createElement("div",{className:"sidebarlabel"},r.a.createElement("p",{className:"lighttext"},"Preset Schedules:"),r.a.createElement("div",{className:"sidebarlist"},r.a.createElement(d,{selectionname:"Selection"})),r.a.createElement("button",{id:"createpresetbutton"},"Create Preset From Current")),r.a.createElement("div",{className:"sidebarlabel"},r.a.createElement("p",{className:"lighttext"},"Preset Tasks:"),r.a.createElement("div",{className:"sidebarlist"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(d,{selectionname:e.taskName,key:e.tID})}))),r.a.createElement(b,{action:"ADD_PRESET"}))),r.a.createElement("div",{className:"sidebarlabel"},r.a.createElement("p",{className:"lighttext"},"Un-Timed Tasks:"),r.a.createElement("div",{className:"sidebarlist"},t[0]?r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(d,{selectionname:e.boolName,key:e.bID,bool:e})}))):null,r.a.createElement(b,{action:"ADD_BOOl"}))),r.a.createElement("textarea",{cols:"28",rows:"6",className:"dayNotes",onChange:function(e){return s(e.target.value)},defaultValue:l[0]?l[0].note:null})))},g=function(e){var t=new Date;return t.setHours(Number(e.substring(0,2))),t.setMinutes(Number(e.substring(3,5))),t},h=function(e){var t=Number(e.substring(0,2));return t>12?(t-=12)+":"+e.substring(3,5)+"pm":t+":"+e.substring(3,5)+"am"},O=new Date;var y=function(e){var t=e.task,a=Object(n.useContext)(p).dispatch;return t?r.a.createElement("div",{className:"taskblock"},r.a.createElement("button",{className:"deletebutton",onClick:function(){return a({type:"REMOVE_TASK",tID:t.tID})}},"x"),r.a.createElement("p",{className:"taskname"},t.taskName),r.a.createElement("div",{className:"time"},r.a.createElement("p",{className:"stime"},h(t.startTime)),r.a.createElement("p",null,h(t.endTime))),t.subtasks[0]?r.a.createElement("div",{className:"subtask"},r.a.createElement("ul",{className:"subBarList"},r.a.createElement("span",{className:"subBar",key:Math.floor(9e5*Math.random())},t.subtasks.map((function(e){return r.a.createElement("span",{className:"subBarName",key:Math.floor(9e5*Math.random())},e.stName,"\t")}))))):null):null},j=function(){var e=Object(n.useContext)(p).tasks;return r.a.createElement("div",{className:"schedulepreviewcontainer"},r.a.createElement("div",{className:"schedulepreview"},r.a.createElement("ul",{id:"previewlist"},e.map((function(e){return r.a.createElement(y,{task:e,key:e.tID})})))))};var S=function(e){var t=Object(n.useContext)(p).dispatch,a=Object(n.useState)(e.subtask.stName),l=Object(c.a)(a,2),s=l[0],u=l[1],i=Object(n.useState)(e.subtask.stType),m=Object(c.a)(i,2),o=m[0],d=m[1],b=Object(n.useState)(e.subtask.goal),E=Object(c.a)(b,2),v=E[0],N=E[1];return r.a.createElement("div",{className:"subtaskpreview"},r.a.createElement("div",{className:"creater of subtasks"},r.a.createElement("input",{className:"subtasknameinput taskcreationinput",value:s,onChange:function(e){return u(e.target.value)},type:"text"}),r.a.createElement("label",{className:"switch",id:"typeselector"},r.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return d(!o)},className:"check",checked:o}),r.a.createElement("span",{className:"slider"})),o?r.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return N(e.target.value)},value:v,min:1,max:999}):r.a.createElement("input",{type:"checkbox",name:"indicval",unchecked:"true"}),r.a.createElement("span",{className:"stSub",onClick:function(){return t({type:"REMOVE_SUB",stID:e.subtask.stID})}},"-")))};var D=function(){var e=Object(n.useContext)(p).dispatch,t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)(""),m=Object(c.a)(i,2),o=m[0],d=m[1],b=Object(n.useState)(""),E=Object(c.a)(b,2),v=E[0],N=E[1],f=Object(n.useState)(""),k=Object(c.a)(f,2),g=k[0],h=k[1],O=Object(n.useState)(""),y=Object(c.a)(O,2),j=y[0],D=y[1],T=Object(n.useState)(""),C=Object(c.a)(T,2),x=C[0],I=C[1],w=Object(n.useState)(!1),M=Object(c.a)(w,2),_=M[0],B=M[1],A=Object(n.useState)(2),L=Object(c.a)(A,2),J=L[0],F=L[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_TASK",task:{taskName:l,startTime:o,endTime:v,taskNotes:g,subtasks:j}}),s(""),d(""),N(""),h("Notes: "),D(""),B(!1),F(2),I("")}},r.a.createElement("div",{id:"taskcreator"},r.a.createElement("div",{className:"lineup"},r.a.createElement("div",null,r.a.createElement("input",{className:"tasknameinput taskcreationinput",placeholder:"Task Name",type:"text",value:l,onChange:function(e){return s(e.target.value)},name:"taskName",required:!0}),r.a.createElement("label",{id:"tasknamelabel",htmlFor:"taskName"},"Task Name")),r.a.createElement("div",{id:"timeinput",className:"double"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"starttime",className:"timeLabel"},"Start Time"),r.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"starttime",onChange:function(e){return d(e.target.value)},value:o,pattern:"[0-9]{2}:[0-9]{2}",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"endtime",className:"timeLabel"},"End Time"),r.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"endtime",onChange:function(e){return N(e.target.value)},value:v,pattern:"[0-9]{2}:[0-9]{2}",min:o,required:!0}))),r.a.createElement("div",{className:"stlist"},j[0]?r.a.createElement("ul",null,j.map((function(e){return r.a.createElement(S,{stName:e.stName,key:e.stID,subtask:e})}))):null),r.a.createElement("div",null,r.a.createElement("div",{className:"creater of subtasks"},r.a.createElement("input",{className:"subtasknameinput taskcreationinput",placeholder:"Subtask Name",type:"text",onChange:function(e){return I(e.target.value)},value:x}))),r.a.createElement("div",{className:"secondpart"},r.a.createElement("label",{className:"switch",id:"typeselector"},r.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return B(!_)},className:"check",checked:_}),r.a.createElement("span",{className:"slider"})),_?r.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return F(e.target.value)},value:J,min:1,max:999}):r.a.createElement("input",{type:"checkbox",name:"indicval",unchecked:"true"}),r.a.createElement("span",{onClick:function(e){D([].concat(Object(u.a)(j),[{stName:x,stType:_,goal:J,stID:Math.floor(9e5*Math.random()),value:0}])),B(!1),F(2),I("")},className:"stSub"},"+"))),r.a.createElement("textarea",{cols:"28",rows:"5",className:"tasknotesinput taskcreationinput",onChange:function(e){return h(e.target.value)},value:g}),r.a.createElement("input",{type:"submit",value:"+",id:"creatoradd"}))))},T=a(9);var C=function(){var e=new Date;return e=e.toDateString(),r.a.createElement("div",{className:"backheader"},r.a.createElement("span",null,e),r.a.createElement(T.b,{className:"right",to:"/dayschedule"},"Schedule"))};var x=function(){return r.a.createElement(v,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"doubler"},r.a.createElement("div",null,r.a.createElement(o,null,r.a.createElement(f,null,r.a.createElement(k,null)))),r.a.createElement("div",{className:"content"},r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(D,null)))))},I=function(e){return e.findIndex((function(e){return g(e.startTime.toString())<=O&&g(e.endTime.toString())>=O}))};var w=function(){var e=Object(n.useContext)(p).tasks,t=O.toDateString(),a=I(e);return Object(n.useEffect)((function(){if(a=I(e),document.getElementById("progress")){var t=document.getElementById("progress"),n=e[a]?g(e[a].startTime):0,r=e[a]?g(e[a].endTime):0,l=r-O,s=r-n;console.log(l/s*100+"%"),t.style.animationName="anim",t.style.width=(s-l)/s*100+"%",t.style.animationTimingFunction="linear",t.style.animationDuration=l+"ms",t.style.animationIterationCount=1}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scheduleheader"},r.a.createElement("div",{className:"timegroup"},r.a.createElement("span",null,e[a]?h(e[a].startTime):null),r.a.createElement("span",{id:"currenttimedisplay"}),r.a.createElement("span",null,e[a]?h(e[a].endTime):null)),r.a.createElement("div",{className:"baseline"},r.a.createElement("span",null,t),r.a.createElement(T.b,{className:"right",to:"/"},"Schedule Creator")),r.a.createElement("div",{id:"progressbar"},r.a.createElement("div",{id:"progress"}))))};var M=function(e){Object(n.useContext)(p).dispatch;var t=Object(n.useState)(e.sub.value),a=Object(c.a)(t,2),l=a[0],s=a[1];return r.a.createElement("div",{className:"subtaskdisplay",key:e.sub.stID,key2:e.sub.stID},r.a.createElement("input",{type:"checkbox",className:"check",onChange:function(){var t="[key2='"+e.sub.stID+"']",a=document.querySelector(t);a&&(a.classList.contains("finished")?a.classList.remove("finished"):a.classList.add("finished"))}}),r.a.createElement("p",null,e.stName),e.sub.stType?r.a.createElement("div",null,r.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return s(e.target.value)},value:l||0,min:0,max:e.sub.goal}),r.a.createElement("span",null,"/",e.sub.goal)):null)};var _=function(){var e=Object(n.useContext)(p),t=e.tasks,a=e.dispatch,l=t.findIndex((function(e){return g(e.startTime.toString())<=O&&g(e.endTime.toString())>=O})),s=Object(n.useState)(l>=0?t[l.taskNotes]:""),u=Object(c.a)(s,2),i=u[0],m=u[1];return Object(n.useEffect)((function(){l=t.findIndex((function(e){return g(e.startTime.toString())<=O&&g(e.endTime.toString())>=O}))}),[]),r.a.createElement("div",{id:"currentdisplay"},r.a.createElement("div",{id:"currenttasktop"},r.a.createElement("ul",{className:"inline"},r.a.createElement("h1",{id:"currentdisplayname"},l>=0?t[l].taskName:"Break")),r.a.createElement("button",{id:"nexttaskbutt"},"Next Task")),r.a.createElement("div",{id:"currentdiplaysub"},l>=0&&t[l].subtasks?t[l].subtasks.map((function(e){return r.a.createElement(M,{sub:e,key:e.stID,stName:e.stName})})):null),r.a.createElement("div",{id:"currentdisplaynotes"},r.a.createElement("textarea",{className:"dayNotes fillup",defaultValue:l>=0?t[l].taskNotes:"Task Notes:",onChange:l>=0?function(e){return t=e.target.value,m(t),void a({type:"EDIT_TASK_NOTE",task:{note:i,ind:l}});var t}:null})))};var B=function(){var e=Object(n.useContext)(m).bools;return r.a.createElement("div",{id:"booleanlist",className:"scroll"},e[0]?r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(M,{sub:e,stName:e.boolName,key:e.bID,key2:e.bID})}))):null)};var A=function(){var e=new Date,t=Object(n.useContext)(p).tasks;return r.a.createElement("div",{id:"upcominglist",className:"scroll"},r.a.createElement("h3",{className:"lightlabel"},"Coming Up:"),t[0]?r.a.createElement("ul",{className:"scroll"},t.map((function(t){return g(t.startTime.toString())>e?r.a.createElement(y,{task:t,key:t.tID}):null}))):null)};var L=function(){var e=Object(n.useContext)(N),t=e.note,a=e.editNote;return r.a.createElement("textarea",{id:"daynotes",onChange:function(e){return a(e.target.value)},defaultValue:t[0]?t[0].note:null})};var J=function(){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(w,null),r.a.createElement("div",{id:"schedulegrid"},r.a.createElement(_,null),r.a.createElement(A,null),r.a.createElement(f,null,r.a.createElement(L,null)),r.a.createElement(o,null,r.a.createElement(B,null)))))},F=a(7);var R=function(){return r.a.createElement(T.a,{baseline:"{process.env.PUBLIC_URL + '/'}"},r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/dayschedule"},r.a.createElement(v,null,r.a.createElement(J,null))),r.a.createElement(F.a,{path:"/"},r.a.createElement(v,null,r.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e20f0c99.chunk.js.map