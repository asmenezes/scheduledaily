(this.webpackJsonpscheduledaily=this.webpackJsonpscheduledaily||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(19),l=a.n(c),r=(a(17),a(1)),i=a(2),o=function(e,t){switch(t.type){case"ADD_BOOL":return[].concat(Object(i.a)(e),[{boolName:t.bool.boolName,bID:Math.floor(9e5*Math.random()),pID:1,isComplete:!1}]);case"TOGGLE_BOOL":var a=e.findIndex((function(e){return e.bID==t.bool.bool.bID}));return e[a].isComplete=!t.bool.value,Object(i.a)(e);case"REMOVE_BOOL":return e.filter((function(e){return e.bID!==t.bID}));default:return e}},u=Object(n.createContext)(),m=function(e){var t=Object(n.useReducer)(o,[],(function(){var e=localStorage.getItem("bools");return e?JSON.parse(e):[]})),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("bools",JSON.stringify(c)),console.log("Bools was just set to ".concat(JSON.stringify(c)))}),[c]),s.a.createElement(u.Provider,{value:{bools:c,boolsDispatch:l}},e.children)},d=function(e,t){switch(t.type){case"ADD_PRESET":return[].concat(Object(i.a)(e),[{presetName:t.preset.presetName,taskList:t.preset.presetTasks,dpID:Math.floor(9e5*Math.random())}]);case"REMOVE_PRESET":return e.filter((function(e){return e.dpID!==t.dpID}));case"RENAME_PRESET":return Object(i.a)(e);default:return e}},b=Object(n.createContext)(),E=function(e){var t=Object(n.useReducer)(d,[],(function(){var e=localStorage.getItem("dayPresets");return e?JSON.parse(e):[]})),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("dayPresets",JSON.stringify(c)),console.log("dayPresets was just set to ".concat(JSON.stringify(c)))}),[c]),s.a.createElement(b.Provider,{value:{dayPresets:c,dayDispatch:l}},e.children)},p=function(e){var t=new Date;return t.setHours(Number(e.substring(0,2))),t.setMinutes(Number(e.substring(3,5))),t},v=function(e){var t=Number(e.substring(0,2));return t>12?(t-=12)+":"+e.substring(3,5)+"pm":t+":"+e.substring(3,5)+"am"},f=(new Date,function(e,t){var a=e.findIndex((function(e){return e.tID==t.task.tID}));switch(t.type){case"ADD_TASK":return function(e,t){return(e=[].concat(Object(i.a)(e),[{taskName:t.taskName,tID:Math.floor(9e5*Math.random()),pID:1,startTime:t.startTime,endTime:t.endTime,isComplete:!1,taskNotes:t.taskNotes,isCurrent:!1,subtasks:t.subtasks}])).sort((function(e,t){var a=Number(e.startTime.substring(0,2)),n=Number(t.startTime.substring(0,2)),s=Number(e.startTime.substring(3,5)),c=Number(t.startTime.substring(3,5));return a<n||a===n&&s<c?-1:n<a?1:0})),Object(i.a)(e)}(e,t.task);case"REPLACE_TASKS":return Object(i.a)(t.tasks);case"REMOVE_TASK":return e.filter((function(e){return e.tID!==t.task.tID}));case"TOGGLE_TASK":return e[a].isComplete=!e[a].isComplete,Object(i.a)(e);case"EDIT_TASK_NOTE":return e[t.task.ind].taskNotes=t.task.note,Object(i.a)(e);case"MARK_CURRENT":for(var n=0;n<e.length;n++)n==a?e[a].isCurrent=!0:e[n].isCurrent=!1;return console.log("currentmarked"),Object(i.a)(e);case"TOGGLE_SUB":var s=t.task.sub.stID,c=e[a].subtasks.findIndex((function(e){return e.stID==s}));return e[a].subtasks[c].isComplete=!t.task.value,Object(i.a)(e);default:return e}});var h=Object(n.createContext)(),k=function(e){var t=Object(n.useReducer)(f,[],(function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))}),[c]),s.a.createElement(h.Provider,{value:{tasks:c,dispatch:l}},e.children)};var N=function(e){var t=Object(n.useContext)(u).boolsDispatch,a=(Object(n.useContext)(h).dispatch,Object(n.useContext)(b).dayDispatch);return s.a.createElement("div",{className:"creationselection"},s.a.createElement("button",{className:"deletebutton",onClick:function(n){return function(n){n.preventDefault(),e.bool?t({type:"REMOVE_BOOL",bID:e.bool.bID}):e.preset&&a({type:"REMOVE_PRESET",dpID:e.preset.dpID})}(n)}},"x"),s.a.createElement("p",{className:"selectionname",onClick:e.onClick},e.selectionname))};var g=function(e){var t=Object(n.useContext)(u).boolsDispatch,a=Object(n.useState)(""),c=Object(r.a)(a,2),l=c[0],i=c[1];return s.a.createElement("div",{className:"creationselection"},s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOL",bool:{boolName:l}}),i("")}},s.a.createElement("input",{className:"selectioninput",placeholder:"New",type:"text",name:"AltAdder",value:l,onChange:function(e){return i(e.target.value)},required:!0}),s.a.createElement("input",{type:"submit",value:"+",className:"deletebutton"})))},O=Object(n.createContext)(),y=function(e){var t=localStorage.getItem("note"),a=t?JSON.parse(t):[{note:"Today's Notes: "}],c=Object(n.useState)(a),l=Object(r.a)(c,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){localStorage.setItem("note",JSON.stringify(i))}),[i]),s.a.createElement(O.Provider,{value:{note:i,editNote:function(e){o([{note:e}])}}},e.children)};var C=function(e){return s.a.createElement("div",{className:"swipeButton ".concat(e.addClass),onClick:e.onClick,id:e.id},s.a.createElement("span",{className:"swbt"},"\xbb"))};var j=function(){var e=Object(n.useContext)(h),t=e.tasks,a=e.dispatch,c=Object(n.useContext)(u).bools,l=Object(n.useContext)(b),r=l.dayPresets,i=l.dayDispatch,o=Object(n.useContext)(O),m=o.note,d=o.editNote;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"sidebar",id:"creationsidebar"},s.a.createElement("div",{id:"sideScroller"},s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Preset Schedules:"),s.a.createElement("div",{className:"sidebarlist"},r.map((function(e){return s.a.createElement(N,{selectionname:e.presetName,preset:e,key:e.dpID,onClick:function(t){!function(e,t){e.preventDefault(),a({type:"REPLACE_TASKS",tasks:t,task:0})}(t,e.taskList)}})}))),s.a.createElement("button",{id:"createpresetbutton",onClick:function(e){e.preventDefault(),i({type:"ADD_PRESET",preset:{presetName:(new Date).toDateString(),presetTasks:t}})}},"Create Preset From Current")),s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Preset Tasks:"),s.a.createElement("div",{className:"sidebarlist"},s.a.createElement("ul",null,t.map((function(e){return s.a.createElement(N,{selectionname:e.taskName,key:e.tID})}))),s.a.createElement(g,{action:"ADD_PRESET"}))),s.a.createElement(C,{id:"cSideHide",onClick:function(e){return function(e){var t=document.getElementById("schedPreSB");document.getElementById("createrReveal").classList.remove("hide"),e.target.parentNode.parentNode.parentNode.classList.add("hide"),t.classList.remove("hide")}(e)}}),s.a.createElement("div",{className:"sidebarlabel"},s.a.createElement("p",{className:"lighttext"},"Un-Timed Tasks:"),s.a.createElement("div",{className:"sidebarlist"},c[0]?s.a.createElement("ul",null,c.map((function(e){return s.a.createElement(N,{selectionname:e.boolName,key:e.bID,bool:e})}))):null,s.a.createElement(g,{action:"ADD_BOOl"}))),s.a.createElement("textarea",{cols:"28",rows:"6",className:"dayNotes",onChange:function(e){return d(e.target.value)},defaultValue:m[0]?m[0].note:null}))))};var D=function(e){var t=e.task,a=Object(n.useContext)(h).dispatch;return t?s.a.createElement("div",{className:"taskblock"},s.a.createElement("button",{className:"deletebutton",onClick:function(){return a({type:"REMOVE_TASK",task:{tID:t.tID}})}},"x"),s.a.createElement("p",{className:"taskname"},t.taskName),s.a.createElement("div",{className:"time"},s.a.createElement("p",{className:"stime"},v(t.startTime)),s.a.createElement("p",null,v(t.endTime))),t.subtasks[0]?s.a.createElement("div",{className:"subtask"},s.a.createElement("ul",{className:"subBarList"},s.a.createElement("span",{className:"subBar",key:Math.floor(9e5*Math.random())},t.subtasks.map((function(e){return s.a.createElement("span",{className:"subBarName",key:Math.floor(9e5*Math.random())},e.stName,"\t")}))))):null):null},I=function(e){var t=Object(n.useContext)(h).tasks;return s.a.createElement("div",{className:"schedulepreviewcontainer"},s.a.createElement("div",{className:"schedulepreview"},s.a.createElement("ul",{id:"previewlist"},t.map((function(e){return s.a.createElement(D,{task:e,key:e.tID})})))),s.a.createElement(C,{id:"schedPreSB",addClass:"left sp",onClick:function(e){return function(e){var t=document.getElementById("creationsidebar"),a=document.getElementById("createrReveal");t.classList.remove("hide"),t.style.display="block",e.target.parentNode.classList.add("hide"),a.classList.add("hide")}(e)}}))};var S=function(e){return e.value,s.a.createElement("div",{className:"checkBox ".concat(e.value?"checked":"unchecked"),onClick:function(){e.value,e.onClick()},id:e.id},s.a.createElement("span",{className:"check"},e.value?"\u2713":"\u2717"))};var T=function(e){var t=Object(n.useContext)(h).dispatch,a=Object(n.useState)(e.subtask.stName),c=Object(r.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(e.subtask.stType),u=Object(r.a)(o,2),m=u[0],d=u[1],b=Object(n.useState)(e.subtask.goal),E=Object(r.a)(b,2),p=E[0],v=E[1];return s.a.createElement("div",{className:"subtaskpreview"},s.a.createElement("div",{className:"creater of subtasks"},s.a.createElement("input",{className:"subtasknameinput taskcreationinput",value:l,onChange:function(e){return i(e.target.value)},type:"text"}),s.a.createElement("label",{className:"switch",id:"typeselector"},s.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return d(!m)},className:"check",checked:m}),s.a.createElement("span",{className:"slider"})),m?s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return v(e.target.value)},value:p,min:1,max:999}):s.a.createElement(S,{type:"checkbox",className:"check",onClick:function(){return!0},value:!1}),s.a.createElement("span",{className:"stSub",onClick:function(){return t({type:"REMOVE_SUB",stID:e.subtask.stID})}},"-")))};var x=function(){var e=Object(n.useContext)(h).dispatch,t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(r.a)(o,2),m=u[0],d=u[1],b=Object(n.useState)(""),E=Object(r.a)(b,2),p=E[0],v=E[1],f=Object(n.useState)(""),k=Object(r.a)(f,2),N=k[0],g=k[1],O=Object(n.useState)(""),y=Object(r.a)(O,2),j=y[0],D=y[1],I=Object(n.useState)(""),x=Object(r.a)(I,2),L=x[0],B=x[1],w=Object(n.useState)(!1),M=Object(r.a)(w,2),_=M[0],R=M[1],A=Object(n.useState)(2),P=Object(r.a)(A,2),G=P[0],J=P[1];function K(e){var t=document.getElementsByClassName("tasknotesinput taskcreationinput"),a=document.getElementsByClassName("creater"),n=document.getElementsByClassName("secondpart"),s=[].concat(Object(i.a)(t),Object(i.a)(a),Object(i.a)(n));if(e.matches)for(var c=0;c<s.length;c++)console.log(s[c]),s[c].classList.contains("hide")||s[c].classList.add("hide");else for(var l=0;l<s.length;l++)console.log(s[l]),s[l].classList.contains("hide")&&s[l].classList.remove("hide")}var V=window.matchMedia("(max-width: 720px)");return V.addListener(K),Object(n.useEffect)((function(){K(V)}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_TASK",task:{taskName:c,startTime:m,endTime:p,taskNotes:N,subtasks:j}}),l(""),d(""),v(""),g("Notes: "),D(""),R(!1),J(2),B("")}},s.a.createElement("div",{id:"taskcreator"},s.a.createElement("div",{className:"lineup"},s.a.createElement("div",null,s.a.createElement("input",{className:"tasknameinput taskcreationinput",placeholder:"Task Name",type:"text",value:c,onChange:function(e){return l(e.target.value)},name:"taskName",required:!0}),s.a.createElement("label",{id:"tasknamelabel",htmlFor:"taskName"},"Task Name")),s.a.createElement("div",{id:"timeinput",className:"double"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"starttime",className:"timeLabel"},"Start Time"),s.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"starttime",onChange:function(e){return d(e.target.value)},value:m,pattern:"[0-9]{2}:[0-9]{2}",required:!0})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"endtime",className:"timeLabel"},"End Time"),s.a.createElement("input",{className:"taskcreationinput timeinput",type:"time",name:"endtime",onChange:function(e){return v(e.target.value)},value:p,pattern:"[0-9]{2}:[0-9]{2}",min:m,required:!0}))),s.a.createElement("div",{className:"stlist"},j[0]?s.a.createElement("ul",null,j.map((function(e){return s.a.createElement(T,{stName:e.stName,key:e.stID,subtask:e})}))):null),s.a.createElement("input",{className:"subtasknameinput taskcreationinput creater",placeholder:"Subtask Name",type:"text",onChange:function(e){return B(e.target.value)},value:L}),s.a.createElement("div",{className:"secondpart"},s.a.createElement("label",{className:"switch",id:"typeselector"},s.a.createElement("input",{type:"checkbox",name:"indication",onChange:function(e){return R(!_)},className:"check",checked:_}),s.a.createElement("span",{className:"slider"})),_?s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return J(e.target.value)},value:G,min:1,max:999}):s.a.createElement(S,{type:"checkbox",className:"check",onClick:function(){return!0},value:!1}),s.a.createElement("span",{onClick:function(e){D([].concat(Object(i.a)(j),[{stName:L,stType:_,goal:G,stID:Math.floor(9e5*Math.random()),value:0,isComplete:!1}])),R(!1),J(2),B("")},className:"stSub"},"+"))),s.a.createElement("textarea",{onLoad:function(){return K(window.matchMedia("(max-width: 860px)"))},cols:"28",rows:"5",className:"tasknotesinput taskcreationinput",onChange:function(e){return g(e.target.value)},value:N}),s.a.createElement("input",{type:"submit",value:"+",id:"creatoradd"}))),s.a.createElement(C,{id:"createrReveal",addClass:"mid",onClick:function(e){return function(e){var t=document.getElementsByClassName("tasknotesinput taskcreationinput"),a=document.getElementsByClassName("creater"),n=document.getElementsByClassName("secondpart"),s=[].concat(Object(i.a)(t),Object(i.a)(a),Object(i.a)(n));if(V.matches&&s[0].classList.contains("hide"))for(var c=0;c<s.length;c++)s[c].classList.contains("hide")&&s[c].classList.remove("hide");else for(var l=0;l<s.length;l++)console.log(s[l]),s[l].classList.contains("hide")||s[l].classList.add("hide")}()}}))},L=a(9);var B=function(){var e=new Date;return e=e.toDateString(),s.a.createElement("div",{className:"backheader"},s.a.createElement("span",{id:"topDate"},e),s.a.createElement(L.b,{className:"right topLink",to:"/dayschedule"},"Schedule"))};var w=function(){return s.a.createElement(k,null,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"doubler"},s.a.createElement("div",null,s.a.createElement(m,null,s.a.createElement(y,null,s.a.createElement(E,null,s.a.createElement(j,null))))),s.a.createElement("div",{className:"content"},s.a.createElement(B,null),s.a.createElement(I,null),s.a.createElement(x,null)))))};var M=function(e){var t=Object(n.useContext)(h).tasks,a=v(e.time.getHours()+":"+e.time.getMinutes()),c=t.findIndex((function(t){return p(t.startTime).setMinutes(p(t.startTime).getMinutes()-1)<=e.time&&p(t.endTime)>=e.time}));return console.log(t[c]),console.log(e.time),console.log(p(t[1].startTime)),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"scheduleheader"},s.a.createElement("div",{className:"timegroup"},s.a.createElement("span",{id:"stime"},t[c]?v(t[c].startTime):""),s.a.createElement("span",{id:"currenttimedisplay"},a),s.a.createElement("span",{id:"etime"},t[c]?v(t[c].endTime):"")),s.a.createElement("div",{className:"baseline"},s.a.createElement("span",null,e.time.toDateString()),s.a.createElement(L.b,{className:"right",to:"/"},"Schedule Creator")),s.a.createElement("div",{id:"progressbar"},s.a.createElement("div",{id:"progress"}))))};var _=function(e){var t=Object(n.useContext)(h).dispatch,a=Object(n.useState)(e.sub.value),c=Object(r.a)(a,2),l=c[0],i=c[1],o="subtaskdisplay"+(e.sub.isComplete?" finished":"");return s.a.createElement("div",{className:o,key:e.sub.stID,key2:e.sub.stID},s.a.createElement(S,{type:"checkbox",className:"check",onClick:function(){t({type:"TOGGLE_SUB",task:{sub:e.sub,tID:e.task.tID,value:e.sub.isComplete}}),o="subtaskdisplay"+(e.sub.isComplete?" finished":"")},value:e.sub.isComplete}),s.a.createElement("p",null,e.stName),e.sub.stType?s.a.createElement("div",null,s.a.createElement("input",{type:"number",name:"indicval",onChange:function(e){return i(e.target.value)},value:l||0,min:0,max:e.sub.goal}),s.a.createElement("span",null,"/",e.sub.goal)):null)};var R=function(e){var t=Object(n.useContext)(h),a=t.tasks,c=t.dispatch,l=a.findIndex((function(t){return p(t.startTime).setMinutes(p(t.startTime).getMinutes()-1)<=e.time&&p(t.endTime)>=e.time})),i=Object(n.useState)(l>=0?a[l.taskNotes]:""),o=Object(r.a)(i,2),u=o[0],m=o[1];return s.a.createElement("div",{id:"currentdisplay"},s.a.createElement("div",{id:"currenttasktop"},s.a.createElement("ul",{className:"inline"},s.a.createElement("h1",{id:"currentdisplayname",className:a[l]&&a[l].isComplete?"finished":""},a[l]?a[l].taskName:"Break")),l>=0?s.a.createElement("button",{id:"nexttaskbutt",onClick:function(){var e;!function(){var e=document.getElementById("currentdisplayname");""==e.className?e.className="finished":e.className=""}(),e=a[l].tID,console.log(e),c({type:"TOGGLE_TASK",task:{tID:e}}),console.log("toggle clicked")}},"Mark Complete"):null),s.a.createElement("div",{id:"currentdiplaysub"},l>=0&&a[l].subtasks?a[l].subtasks.map((function(e){return s.a.createElement(_,{sub:e,key:e.stID,stName:e.stName,task:a[l]})})):null),s.a.createElement("div",{id:"currentdisplaynotes"},s.a.createElement("textarea",{className:"dayNotes fillup",defaultValue:a[l]?a[l].taskNotes:"Task Notes:",onChange:l>=0?function(e){return t=e.target.value,m(t),void c({type:"EDIT_TASK_NOTE",task:{note:u,ind:l}});var t}:null})),s.a.createElement(C,{onClick:function(){return document.getElementById("upcominglist").classList.remove("hide"),void document.getElementById("currentdisplay").classList.add("hide")},addClass:"right"}))};var A=function(e){var t=Object(n.useContext)(u).boolsDispatch,a="subtaskdisplay"+(e.bool.isComplete?" finished":"");return s.a.createElement("div",{className:a,key:e.bID,key2:e.bID},s.a.createElement(S,{type:"checkbox",className:"check",onClick:function(){t({type:"TOGGLE_BOOL",bool:{bool:e.bool,value:e.bool.isComplete}}),a="subtaskdisplay"+(e.bool.isComplete?" finished":"")},value:e.bool.isComplete}),s.a.createElement("p",null,e.bName))};var P=function(){var e=Object(n.useContext)(u).bools;return s.a.createElement("div",{id:"booleanlist",className:"scroll"},e[0]?s.a.createElement("ul",null,e.map((function(e){return s.a.createElement(A,{bool:e,bName:e.boolName,key:e.bID,key2:e.bID})}))):null,s.a.createElement(C,{addClass:"left boolswipebutt",onClick:function(){return function(){document.getElementById("booleanlist").classList.add("hide");var e=document.getElementsByClassName("dn");e[0].classList.remove("hide"),e[1].classList.remove("hide")}()}}))};var G=function(e){var t=Object(n.useContext)(h).tasks;return s.a.createElement("div",{id:"upcominglist",className:"scroll"},s.a.createElement("h3",{className:"lightlabel"},"Coming Up:"),t[0]?s.a.createElement("ul",{className:"scroll"},t.map((function(t){return p(t.startTime).setMinutes(p(t.startTime).getMinutes()-1)>e.time?s.a.createElement(D,{task:t,key:t.tID}):null}))):null,s.a.createElement(C,{addClass:"left upswipebutt",onClick:function(){return document.getElementById("upcominglist").classList.add("hide"),void document.getElementById("currentdisplay").classList.remove("hide")}}))};var J=function(){var e=Object(n.useContext)(O),t=e.note,a=e.editNote;return s.a.createElement(s.a.Fragment,null,s.a.createElement("textarea",{id:"daynotes",className:"dn",onChange:function(e){return a(e.target.value)},defaultValue:t[0]?t[0].note:null}),s.a.createElement(C,{onClick:function(){return function(){document.getElementById("booleanlist").classList.remove("hide");var e=document.getElementsByClassName("dn");e[0].classList.add("hide"),e[1].classList.add("hide")}()},addClass:"right dn"}))};var K=function(){var e=Object(n.useState)(new Date),t=Object(r.a)(e,2),a=t[0],c=t[1];function l(e){var t=document.getElementById("booleanlist"),a=document.getElementById("upcominglist"),n=document.getElementsByClassName("timegroup"),s=document.getElementById("progressbar"),c=[t,a].concat(Object(i.a)(n),[s]),l=document.getElementsByClassName("hide");if(console.log(e.matches),e.matches&&c[0])for(var r=0;r<c.length;r++)c[r].classList.contains("hide")||c[r].classList.add("hide");else if(0==e.matches){console.log(l.length);for(var o=0;o<l.length;o++)l[o].classList.contains("hide")&&(l[o].classList.remove("hide"),console.log(l))}}Object(n.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}));var o=window.matchMedia("(max-width: 720px)");return window.addEventListener("resize",l(o)),Object(n.useEffect)((function(){l(o)}),[]),s.a.createElement("div",null,s.a.createElement(k,null,s.a.createElement(M,{time:a}),s.a.createElement("div",{id:"schedulegrid"},s.a.createElement(R,{time:a}),s.a.createElement(G,{time:a}),s.a.createElement(y,null,s.a.createElement(J,null)),s.a.createElement(m,null,s.a.createElement(P,null)))))},V=a(7);var F=function(){return s.a.createElement(L.a,{baseline:"{process.env.PUBLIC_URL + '/'}"},s.a.createElement(V.c,null,s.a.createElement(V.a,{path:"/dayschedule"},s.a.createElement(k,null,s.a.createElement(K,null))),s.a.createElement(V.a,{path:"/"},s.a.createElement(k,null,s.a.createElement(w,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.22599d92.chunk.js.map