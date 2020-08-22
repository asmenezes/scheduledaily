(this.webpackJsonpscheduledaily=this.webpackJsonpscheduledaily||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a.n(r),l=(a(17),a(1)),i=a(3),u=function(e,t){switch(t.type){case"ADD_BOOL":return[].concat(Object(i.a)(e),[{boolName:t.bool.boolName,bID:Math.floor(9e5*Math.random()),pID:1,isComplete:!1}]);case"REMOVE_BOOL":return e.filter((function(e){return e.bID!==t.bID}));default:return e}},o=Object(n.createContext)(),m=function(e){var t=Object(n.useReducer)(u,[],(function(){var e=localStorage.getItem("bools");return e?JSON.parse(e):[]})),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("bools",JSON.stringify(r)),console.log("Bools was just set to ".concat(JSON.stringify(r)))}),[r]),s.a.createElement(o.Provider,{value:{bools:r,boolsDispatch:c}},e.children)},d=function(e,t){switch(t.type){case"ADD_PRESET":return[].concat(Object(i.a)(e),[{presetName:t.preset.presetName,taskList:t.preset.presetTasks,dpID:Math.floor(9e5*Math.random())}]);case"REMOVE_PRESET":return e.filter((function(e){return e.dpID!==t.dpID}));case"RENAME_PRESET":return Object(i.a)(e);default:return e}},b=Object(n.createContext)(),E=function(e){var t=Object(n.useReducer)(d,[],(function(){var e=localStorage.getItem("dayPresets");return e?JSON.parse(e):[]})),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("dayPresets",JSON.stringify(r)),console.log("dayPresets was just set to ".concat(JSON.stringify(r)))}),[r]),s.a.createElement(b.Provider,{value:{dayPresets:r,dayDispatch:c}},e.children)},p=function(e,t){var a=e.findIndex((function(e){return e.tID==t.task.tID}));switch(t.type){case"ADD_TASK":return function(e,t){return(e=[].concat(Object(i.a)(e),[{taskName:t.taskName,tID:Math.floor(9e5*Math.random()),pID:1,startTime:t.startTime,endTime:t.endTime,isComplete:!1,taskNotes:t.taskNotes,subtasks:t.subtasks}])).sort((function(e,t){var a=Number(e.startTime.substring(0,2)),n=Number(t.startTime.substring(0,2)),s=Number(e.startTime.substring(3,5)),r=Number(t.startTime.substring(3,5));return a<n||a===n&&s<r?-1:n<a?1:0})),Object(i.a)(e)}(e,t.task);case"REPLACE_TASKS":return Object(i.a)(t.tasks);case"REMOVE_TASK":return e.filter((function(e){return e.tID!==t.task.tID}));case"TOGGLE_TASK":return e[a].isComplete=!e[a].isComplete,console.log("index is ".concat(e[a].isComplete,", tID is ").concat(t.task.tID)),e;case"EDIT_TASK_NOTE":return console.log(t.task.ind),e[t.task.ind].taskNotes=t.task.note,console.log(e[t.task.ind].taskNotes),Object(i.a)(e);default:return e}};var v=Object(n.createContext)(),f=function(e){var t=Object(n.useReducer)(p,[],(function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r)),console.log("Tasks was just set to ".concat(JSON.stringify(r)))}),[r]),s.a.createElement(v.Provider,{value:{tasks:r,dispatch:c}},e.children)};var N=function(e){var t=Object(n.useContext)(o).boolsDispatch,a=(Object(n.useContext)(v).dispatch,Object(n.useContext)(b).dayDispatch);return s.a.createElement("div",{className:"creationselection"},s.a.createElement("button",{className:"deletebutton",onClick:function(n){return function(n){n.preventDefault(),e.bool?t({type:"REMOVE_BOOL",bID:e.bool.bID}):e.preset&&a({type:"REMOVE_PRESET",dpID:e.preset.dpID})}(n)}},"x"),s.a.createElement("p",{className:"selectionname",onClick:e.onClick},e.selectionname))};var k=function(e){var t=Object(n.useContext)(o).boolsDispatch,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1];return s.a.createElement("div",{className:"creationselection"},s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOL",bool:{boolName:c}}),i("")}},s.a.createElement("input",{className:"selectioninput",placeholder:"New",type:"text",name:"AltAdder",value:c,onChange:function(e){return i(e.target.value)},required:!0}),s.a.createElement("input",{type:"submit",value:"+",className:"deletebutton"})))},g=Object(n.createContext)(),h=function(e){var t=localStorage.getItem("note"),a=t?JSON.parse(t):[{note:"Today's Notes: "}],r=Object(n.useState)(a),c=Object(l.a)(r,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){localStorage.setItem("note",JSON.stringify(i))}),[i]),s.a.createElement(g.Provider,{value:{note:i,editNote:function(e){u([{note:e}])}}},e.children)};var O=function(){var e=Object(n.useContext)(v),t=e.tasks,a=e.dispatch,r=Object(n.useContext)(o).bools,c=Object(n.useContext)(b),l=c.dayPresets,i=c.dayDispatch,u=Object(n.useContext)(g),m=u.note,d=u.editNote;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"sidebar",id:"creationsidebar"},s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Preset Schedules:"),s.a.createElement("div",{className:"sidebarlist"},l.map((function(e){return s.a.createElement(N,{selectionname:e.presetName,preset:e,key:e.dpID,onClick:function(t){!function(e,t){e.preventDefault(),a({type:"REPLACE_TASKS",tasks:t,task:0})}(t,e.taskList)}})}))),s.a.createElement("button",{id:"createpresetbutton",onClick:function(e){e.preventDefault(),i({type:"ADD_PRESET",preset:{presetName:(new Date).toDateString(),presetTasks:t}})}},"Create Preset From Current")),s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Preset Tasks:"),s.a.createElement("div",{className:"sidebarlist"},s.a.createElement("ul",null,t.map((function(e){return s.a.createElement(N,{selectionname:e.taskName,key:e.tID})}))),s.a.createElement(k,{action:"ADD_PRESET"}))),s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Un-Timed Tasks:"),s.a.createElement("div",{className:"sidebarlist"},r[0]?s.a.createElement("ul",null,r.map((function(e){return s.a.createElement(N,{selectionname:e.boolName,key:e.bID,bool:e})}))):null,s.a.createElement(k,{action:"ADD_BOOl"}))),s.a.createElement("textarea",{cols:"28",rows:"6",className:"dayNotes",onChange:function(e){return d(e.target.value)},defaultValue:m[0]?m[0].note:null})))},y=function(e){var t=new Date;return t.setHours(Number(e.substring(0,2))),t.setMinutes(Number(e.substring(3,5))),t},j=function(e){var t=Number(e.substring(0,2));return t>12?(t-=12)+":"+e.substring(3,5)+"pm":t+":"+e.substring(3,5)+"am"},D=new Date;var S=function(e){var t=e.task,a=Object(n.useContext)(v).dispatch;return t?s.a.createElement("div",{className:"taskblock"},s.a.createElement("button",{className:"deletebutton",onClick:function(){return a({type:"REMOVE_TASK",task:{tID:t.tID}})}},"x"),s.a.createElement("p",{className:"taskname"},t.taskName),s.a.createElement("div",{className:"time"},s.a.createElement("p",{className:"stime"},j(t.startTime)),s.a.createElement("p",null,j(t.endTime))),t.subtasks[0]?s.a.createElement("div",{className:"subtask"},s.a.createElement("ul",{className:"subBarList"},s.a.createElement("span",{className:"subBar",key:Math.floor(9e5*Math.random())},t.subtasks.map((function(e){return s.a.createElement("span",{className:"subBarName",key:Math.floor(9e5*Math.random())},e.stName,"\t")}))))):null):null},C=function(){var e=Object(n.useContext)(v).tasks;return s.a.createElement("div",{className:"schedulepreviewcontainer"},s.a.createElement("div",{className:"schedulepreview"},s.a.createElement("ul",{id:"previewlist"},e.map((function(e){return s.a.createElement(S,{task:e,key:e.tID})})))))};var I=function(e){var t=Object(n.useContext)(v).dispatch,a=Object(n.useState)(e.subtask.stName),r=Object(l.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(e.subtask.stType),o=Object(l.a)(u,2),m=o[0],d=o[1],b=Object(n.useState)(e.subtask.goal),E=Object(l.a)(b,2),p=E[0],f=E[1];return s.a.createElement("div",{className:"subtaskpreview"},s.a.createElement("div",{className:"creater of subtasks"},s.a.createElement("input",{className:"subtasknameinput taskcreationinput",value:c,onChange:function(e){return i(e.target.value)},type:"text"}),s.a.createElement("label",{className:"switch",id:"typeselector"},s.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return d(!m)},className:"check",checked:m}),s.a.createElement("span",{className:"slider"})),m?s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return f(e.target.value)},value:p,min:1,max:999}):s.a.createElement("input",{type:"checkbox",name:"indicval",unchecked:"true"}),s.a.createElement("span",{className:"stSub",onClick:function(){return t({type:"REMOVE_SUB",stID:e.subtask.stID})}},"-")))};var T=function(){var e=Object(n.useContext)(v).dispatch,t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),o=Object(l.a)(u,2),m=o[0],d=o[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),p=E[0],f=E[1],N=Object(n.useState)(""),k=Object(l.a)(N,2),g=k[0],h=k[1],O=Object(n.useState)(""),y=Object(l.a)(O,2),j=y[0],D=y[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),T=C[0],x=C[1],w=Object(n.useState)(!1),L=Object(l.a)(w,2),M=L[0],_=L[1],B=Object(n.useState)(2),A=Object(l.a)(B,2),P=A[0],R=A[1];function J(e){var t=document.getElementsByClassName("tasknotesinput taskcreationinput"),a=document.getElementsByClassName("creater"),n=document.getElementsByClassName("secondpart"),s=[].concat(Object(i.a)(t),Object(i.a)(a),Object(i.a)(n));if(e.matches)for(var r=0;r<s.length;r++)console.log(s[r]),s[r].classList.contains("hide")||s[r].classList.add("hide");else for(var c=0;c<s.length;c++)console.log(s[c]),s[c].classList.contains("hide")&&s[c].classList.remove("hide")}var K=window.matchMedia("(max-width: 720px)");return K.addListener(J),Object(n.useEffect)((function(){J(K)}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_TASK",task:{taskName:r,startTime:m,endTime:p,taskNotes:g,subtasks:j}}),c(""),d(""),f(""),h("Notes: "),D(""),_(!1),R(2),x("")}},s.a.createElement("div",{id:"taskcreator"},s.a.createElement("div",{className:"lineup"},s.a.createElement("div",null,s.a.createElement("input",{className:"tasknameinput taskcreationinput",placeholder:"Task Name",type:"text",value:r,onChange:function(e){return c(e.target.value)},name:"taskName",required:!0}),s.a.createElement("label",{id:"tasknamelabel",htmlFor:"taskName"},"Task Name")),s.a.createElement("div",{id:"timeinput",className:"double"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"starttime",className:"timeLabel"},"Start Time"),s.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"starttime",onChange:function(e){return d(e.target.value)},value:m,pattern:"[0-9]{2}:[0-9]{2}",required:!0})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"endtime",className:"timeLabel"},"End Time"),s.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"endtime",onChange:function(e){return f(e.target.value)},value:p,pattern:"[0-9]{2}:[0-9]{2}",min:m,required:!0}))),s.a.createElement("div",{className:"stlist"},j[0]?s.a.createElement("ul",null,j.map((function(e){return s.a.createElement(I,{stName:e.stName,key:e.stID,subtask:e})}))):null),s.a.createElement("input",{className:"subtasknameinput taskcreationinput creater",placeholder:"Subtask Name",type:"text",onChange:function(e){return x(e.target.value)},value:T}),s.a.createElement("div",{className:"secondpart"},s.a.createElement("label",{className:"switch",id:"typeselector"},s.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return _(!M)},className:"check",checked:M}),s.a.createElement("span",{className:"slider"})),M?s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return R(e.target.value)},value:P,min:1,max:999}):s.a.createElement("input",{type:"checkbox",name:"indicval",unchecked:"true"}),s.a.createElement("span",{onClick:function(e){D([].concat(Object(i.a)(j),[{stName:T,stType:M,goal:P,stID:Math.floor(9e5*Math.random()),value:0}])),_(!1),R(2),x("")},className:"stSub"},"+"))),s.a.createElement("textarea",{onLoad:function(){return J(window.matchMedia("(max-width: 860px)"))},cols:"28",rows:"5",className:"tasknotesinput taskcreationinput",onChange:function(e){return h(e.target.value)},value:g}),s.a.createElement("input",{type:"submit",value:"+",id:"creatoradd"}))))},x=a(9);var w=function(){var e=new Date;return e=e.toDateString(),s.a.createElement("div",{className:"backheader"},s.a.createElement("span",{id:"topDate"},e),s.a.createElement(x.b,{className:"right topLink",to:"/dayschedule"},"Schedule"))};var L=function(){return s.a.createElement(f,null,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"doubler"},s.a.createElement("div",null,s.a.createElement(m,null,s.a.createElement(h,null,s.a.createElement(E,null,s.a.createElement(O,null))))),s.a.createElement("div",{className:"content"},s.a.createElement(w,null),s.a.createElement(C,null),s.a.createElement(T,null)))))},M=function(e){return e.findIndex((function(e){return y(e.startTime.toString())<=D&&y(e.endTime.toString())>=D}))};var _=function(){var e=Object(n.useContext)(v).tasks,t=D.toDateString(),a=M(e);return Object(n.useEffect)((function(){if(a=M(e),document.getElementById("progress")){var t=document.getElementById("progress"),n=e[a]?y(e[a].startTime):0,s=e[a]?y(e[a].endTime):0,r=s-D,c=s-n;console.log(r/c*100+"%"),t.style.animationName="anim",t.style.width=(c-r)/c*100+"%",t.style.animationTimingFunction="linear",t.style.animationDuration=r+"ms",t.style.animationIterationCount=1}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"scheduleheader"},s.a.createElement("div",{className:"timegroup"},s.a.createElement("span",null,e[a]?j(e[a].startTime):null),s.a.createElement("span",{id:"currenttimedisplay"}),s.a.createElement("span",null,e[a]?j(e[a].endTime):null)),s.a.createElement("div",{className:"baseline"},s.a.createElement("span",null,t),s.a.createElement(x.b,{className:"right",to:"/"},"Schedule Creator")),s.a.createElement("div",{id:"progressbar"},s.a.createElement("div",{id:"progress"}))))};var B=function(e){Object(n.useContext)(v).dispatch;var t=Object(n.useState)(e.sub.value),a=Object(l.a)(t,2),r=a[0],c=a[1];return s.a.createElement("div",{className:"subtaskdisplay",key:e.sub.stID,key2:e.sub.stID},s.a.createElement("input",{type:"checkbox",className:"check",onChange:function(){var t="[key2='"+e.sub.stID+"']",a=document.querySelector(t);a&&(a.classList.contains("finished")?a.classList.remove("finished"):a.classList.add("finished"))}}),s.a.createElement("p",null,e.stName),e.sub.stType?s.a.createElement("div",null,s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return c(e.target.value)},value:r||0,min:0,max:e.sub.goal}),s.a.createElement("span",null,"/",e.sub.goal)):null)};var A=function(){var e=Object(n.useContext)(v),t=e.tasks,a=e.dispatch,r=t.findIndex((function(e){return y(e.startTime.toString())<=D&&y(e.endTime.toString())>=D})),c=Object(n.useState)(r>=0?t[r.taskNotes]:""),i=Object(l.a)(c,2),u=i[0],o=i[1];return Object(n.useEffect)((function(){r=t.findIndex((function(e){return y(e.startTime.toString())<=D&&y(e.endTime.toString())>=D}))}),[]),s.a.createElement("div",{id:"currentdisplay"},s.a.createElement("div",{id:"currenttasktop"},s.a.createElement("ul",{className:"inline"},s.a.createElement("h1",{id:"currentdisplayname",className:""},r>=0?t[r].taskName:"Break")),r>=0?s.a.createElement("button",{id:"nexttaskbutt",onClick:function(){var e;!function(){var e=document.getElementById("currentdisplayname");""==e.className?e.className="finished":e.className=""}(),e=t[r].tID,console.log(e),a({type:"TOGGLE_TASK",task:{tID:e}}),console.log("toggle clicked")}},"Mark Complete"):null),s.a.createElement("div",{id:"currentdiplaysub"},r>=0&&t[r].subtasks?t[r].subtasks.map((function(e){return s.a.createElement(B,{sub:e,key:e.stID,stName:e.stName})})):null),s.a.createElement("div",{id:"currentdisplaynotes"},s.a.createElement("textarea",{className:"dayNotes fillup",defaultValue:r>=0?t[r].taskNotes:"Task Notes:",onChange:r>=0?function(e){return t=e.target.value,o(t),void a({type:"EDIT_TASK_NOTE",task:{note:u,ind:r}});var t}:null})))};var P=function(){var e=Object(n.useContext)(o).bools;return s.a.createElement("div",{id:"booleanlist",className:"scroll"},e[0]?s.a.createElement("ul",null,e.map((function(e){return s.a.createElement(B,{sub:e,stName:e.boolName,key:e.bID,key2:e.bID})}))):null)};var R=function(){var e=new Date,t=Object(n.useContext)(v).tasks;return s.a.createElement("div",{id:"upcominglist",className:"scroll"},s.a.createElement("h3",{className:"lightlabel"},"Coming Up:"),t[0]?s.a.createElement("ul",{className:"scroll"},t.map((function(t){return y(t.startTime.toString())>e?s.a.createElement(S,{task:t,key:t.tID}):null}))):null)};var J=function(){var e=Object(n.useContext)(g),t=e.note,a=e.editNote;return s.a.createElement("textarea",{id:"daynotes",onChange:function(e){return a(e.target.value)},defaultValue:t[0]?t[0].note:null})};var K=function(){function e(e){var t=document.getElementById("booleanlist"),a=document.getElementById("upcominglist"),n=document.getElementsByClassName("timegroup"),s=document.getElementById("progressbar"),r=[t,a].concat(Object(i.a)(n),[s]);if(e.matches)for(var c=0;c<r.length;c++)console.log(r[c]),r[c].classList.contains("hide")||r[c].classList.add("hide");else for(var l=0;l<r.length;l++)console.log(r[l]),r[l].classList.contains("hide")&&r[l].classList.remove("hide")}var t=window.matchMedia("(max-width: 720px)");return t.addListener(e),Object(n.useEffect)((function(){e(t)}),[]),s.a.createElement("div",null,s.a.createElement(f,null,s.a.createElement(_,null),s.a.createElement("div",{id:"schedulegrid"},s.a.createElement(A,null),s.a.createElement(R,null),s.a.createElement(h,null,s.a.createElement(J,null)),s.a.createElement(m,null,s.a.createElement(P,null)))))},V=a(7);var F=function(){return s.a.createElement(x.a,{baseline:"{process.env.PUBLIC_URL + '/'}"},s.a.createElement(V.c,null,s.a.createElement(V.a,{path:"/dayschedule"},s.a.createElement(f,null,s.a.createElement(K,null))),s.a.createElement(V.a,{path:"/"},s.a.createElement(f,null,s.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5c3b7e74.chunk.js.map