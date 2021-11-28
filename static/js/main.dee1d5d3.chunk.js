(this["webpackJsonpreact-guide"]=this["webpackJsonpreact-guide"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(5),s=a.n(r),l=(a(10),a(2)),o=(a(11),a(4)),i=a.n(o),b=a(0);function d(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",to:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label mx-2",htmlFor:"flexSwitchCheckDefault",children:"Change Mode"})]})]})]})})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),i=o[0],d=o[1],h=Object(c.useState)(""),j=Object(l.a)(h,2),u=j[0],m=j[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:{color:"dark"===e.mode?"white":"rgb(24 39 57)"},children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"my-3"}),Object(b.jsx)("h1",{children:e.heading}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"rgb(24 39 57)":"white",color:"dark"===e.mode?"white":"rgb(24 39 57)"},value:n,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8",placeholder:"Enter text here"}),Object(b.jsxs)("div",{className:"my-2 d-flex",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=n.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("success","Text copied to clipboard.")},children:"Copy Text"}),Object(b.jsx)("input",{className:"form-control me-2",type:"search",value:i,onChange:function(e){d(e.target.value)},placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",onClick:function(){for(var e=0;e<n.length;){if(i.charAt(0)===n.charAt(e)){for(var t=!0,a=0,c=e;a<i.length;){if(i.charAt(a)!==n.charAt(c)){m(i+" not found."),t=!1;break}a++,c++}if(t){m(i+" found at position "+e);break}}e++}},children:"Search"})]}),Object(b.jsx)("p",{itemID:"search",children:u})]})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"Your text summary"}),Object(b.jsxs)("p",{children:[function(e){for(var t=0,a=0;t<e.length;)" "===e.charAt(t)&&" "!==e.charAt(t+1)&&a++,t++;return a}(n)," words and ",n.length," characters"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:0===n.length?"Enter text to preview.":n})]})]})})}function j(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.type}),": ",e.alert.message]})}d.prototype={title:i.a.string.isRequired,aboutText:i.a.string},d.defaultProps={title:"Title here",aboutText:"About us here"};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),o=s[0],i=s[1],u=function(e,t){i({type:e,message:t}),setTimeout((function(){i(null)}),1500)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"Text Utils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="rgb(24 39 57)",u("success","Dark mode has been enabled.")):(n("light"),document.body.style.backgroundColor="white",u("success","Light mode has been enabled."))}}),Object(b.jsx)(j,{alert:o}),Object(b.jsx)(h,{to:"/",showAlert:u,heading:"welcome to  text converter, Enter your text",mode:a})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.dee1d5d3.chunk.js.map