(this.webpackJsonptypewriterreact=this.webpackJsonptypewriterreact||[]).push([[0],{1077:function(e,t,n){},1078:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=n(7),u=n(1);var i=function(e){var t=e.count;return r.a.createElement("div",null,r.a.createElement("h3",null,"correct words: ",t))};var l=function(e){var t=e.word,n=e.userInput;return r.a.createElement("div",null,t.includes(n)?r.a.createElement("h1",null,t):r.a.createElement("h1",{style:{color:"hotpink"}},t))};var d=function(e){var t=e.onChange,n=e.userInput,a=e.counter,c=(e.getWord,e.randomWord),o=e.handleKeyPress,s=e.inputFocus;return r.a.createElement("div",null,r.a.createElement(l,{word:c,userInput:n}),r.a.createElement("input",{className:"userInput",type:"text",placeholder:"click START to play",onChange:t,value:n,onKeyPress:o,ref:s,autoCapitalize:"none"}),r.a.createElement(i,{count:a}))},m=n(8),p=n(13),h=n(14),f=n(4),v=n(23),g=n(22);var b=function(e){var t=e.secLeft;return r.a.createElement("div",null,r.a.createElement("h1",null,"Time Remaining : ",t))},E=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={seconds:60,stop:!0},a.gamecheck=a.gamecheck.bind(Object(f.a)(a)),a.onStart=a.props.onStart,a.onReset=a.props.onReset,a.setData=a.props.setData,a}return Object(h.a)(n,[{key:"gamecheck",value:function(){this.state.seconds<60?alert("You are already in a game!"):this.timer()}},{key:"timer",value:function(){var e=this;this.onStart(),this.setState(Object(m.a)(Object(m.a)({},this.state),{},{stop:!1})),this.interval=setInterval((function(){if(e.state.seconds>0&&!e.state.stop)e.setState((function(e){return{seconds:e.seconds-1}}));else{var t=e.props.counter;e.setData(t),e.setState({seconds:60,stop:!0}),e.onReset(),clearInterval(e.interval)}}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.gamecheck,className:"startButton"},"Start"),r.a.createElement(b,{secLeft:this.state.seconds}))}}]),n}(a.Component),y=n(15);function O(){var e=Object(y.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n    width: 330px;\n    height: 30px;\n    font-size: 21px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid grey;\n"]);return O=function(){return e},e}var j=n(16).a.div(O());var S=function(e){var t=e.histories;return r.a.createElement("div",null,r.a.createElement("h2",{className:"historyList"},"Ranking History"),t.map((function(e){return r.a.createElement(j,{key:e.id},r.a.createElement("span",null,e.date),r.a.createElement("span",null,e.record," (WPM)"))})))},w=n(20),k=n.n(w),x=n(21),I=n.n(x);n(1077);var C=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(u.a)(n,2),c=r[0],o=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};var R=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),i=Object(u.a)(o,2),l=i[0],m=i[1],p=k.a.random.word().toLowerCase().split(" ")[0],h=Object(a.useState)(p),f=Object(u.a)(h,2),v=f[0],g=f[1],b=C("records",[]),y=Object(u.a)(b,2),O=y[0],j=y[1],w=(O.date,O.record,Object(a.useRef)()),x=function(){g(p),c("")},R=function(){m(0)};return r.a.createElement("div",{className:"gameBoard"},r.a.createElement(d,{onChange:function(e){c(e.target.value),new Audio(I.a).play()},userInput:n,counter:l,getWord:p,randomWord:v,handleKeyPress:function(e){13===e.charCode&&(n===v?(m(l+1),x()):x())},inputFocus:w}),r.a.createElement(E,{onStart:function(){w.current.focus(),x(),R()},onReset:function(){x(),R()},empty:x,setData:function(e){var t=new Date,n="".concat(t.getFullYear(),".").concat(t.toLocaleString("default",{month:"short"}),".").concat(t.getDate()," - [").concat(t.getHours(),":").concat(t.getMinutes(),"]"),a={id:O.length>0?Math.max.apply(Math,Object(s.a)(O.map((function(e){return e.id}))))+1:0,date:n,record:e};j([].concat(Object(s.a)(O),[a]))},counter:l}),r.a.createElement(S,{histories:O}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))},21:function(e,t,n){e.exports=n.p+"static/media/switch2.563d3524.ogg"},24:function(e,t,n){e.exports=n(1078)}},[[24,1,2]]]);
//# sourceMappingURL=main.8bf0f34c.chunk.js.map