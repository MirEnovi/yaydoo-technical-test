(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports={questions:[{title:"Cu\xe9ntanos sobre ti",fields:[{name:"first_name",label:"First Name",type:"text"},{name:"last_name",label:"Last Name",type:"text"},{name:"email",label:"Email",type:"text"},{name:"phone_number",label:"Phone Number",type:"tel"}]},{title:"D\xf3nde vives?",fields:[{name:"street_address",label:"Street Address",type:"text"},{name:"post_code",label:"Post Code",type:"text"},{name:"country",label:"Country",type:"dropdown",options:[{value:"Canada",label:"Canada"},{value:"USA",label:"USA"},{value:"M\xe9xico",label:"M\xe9xico"}]}]}]}},22:function(e,t,n){e.exports=n(42)},27:function(e,t,n){},29:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),c=n.n(l),i=(n(27),n(11)),s=n(12),r=n(19),p=n(13),m=n(20),u=(n(29),n(14)),d=n(21),h=function(e){console.log(e);var t=e.selectedOption.selectedOption;return o.a.createElement(d.a,{value:t,onChange:e.handleChange,options:e.options})},v=function(e){return"dropdown"!==e.type?o.a.createElement("div",{className:"input-field col s6"},o.a.createElement("input",{name:e.name,type:e.type,id:"autocomplete-input",className:"autocomplete"}),o.a.createElement("label",{htmlFor:"autocomplete-input"},e.label)):o.a.createElement("div",{className:"input-field col s6"},o.a.createElement(h,{selectedOption:e.selectedOption,handleChange:e.handleChange,options:e.options}))},b=function(e){return o.a.createElement("h3",null,e.title)},f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){n.setState({selectedOption:e}),console.log("Option selected:",e)},n.state={selectedOption:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectedOption,n=u.questions.map(function(n,a){var l=[],c=n.title,i=n.fields;l.push(o.a.createElement("div",{key:"".concat(c.length,"-").concat(a)},o.a.createElement(b,{title:c})));for(var s=0;s<i.length;s++)console.log(i[s].options),l.push(o.a.createElement("div",{key:"".concat(c.length,"-").concat(a,"-").concat(s)},o.a.createElement(v,{options:i[s].options,selectedOption:t,handleChange:e.handleChange,value:e.state.value,name:i[s].name,type:i[s].type,label:i[s].label})));return l});return o.a.createElement("div",{className:"App"},o.a.createElement("form",{className:"row"},o.a.createElement("div",{className:"col s12"},n)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.c6f82a97.chunk.js.map