(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),s=n.n(a),r=(n(15),n(7)),i=n(9),d=n(2),l=n(3),h=n(5),u=n(4),j=(n(16),n(0)),v=function(e){var t=e.todos,n=e.form,c=e.children,o=t.filter((function(e){return!e.checked})),a=new Date,s=a.getFullYear(),r=a.getMonth()+1,i=a.getDate();return Object(j.jsxs)("main",{className:"todo-list-template",children:[Object(j.jsxs)("div",{className:"title",children:[s,"\ub144 ",r,"\uc6d4 ",i,"\uc77c"]}),Object(j.jsx)("section",{className:"form-wrapper",children:n}),Object(j.jsx)("section",{className:"todos-wrapper",children:c}),Object(j.jsxs)("section",{className:"task-left",children:["\ud560 \uc77c ",o.length,"\uac1c \ub0a8\uc74c"]})]})},b=(n(18),function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeyPress;return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("input",{value:t,onChange:n,onKeyPress:o}),Object(j.jsx)("div",{className:"create-button",onClick:c,children:"\ucd94\uac00"})]})}),f=n(10),p=(n(19),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"CheckCircle",value:function(){var e=this.props;e.checked,e.onToggle}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,c=e.id,o=e.onToggle,a=e.onRemove;return Object(j.jsxs)("div",{className:"todo-item",children:[Object(j.jsx)("div",{className:"check-box",checked:n,onClick:function(){return o(c)},children:n&&Object(j.jsx)("div",{className:"check-mark",children:" \u2714 "})}),Object(j.jsx)("div",{className:"todo-text ".concat(n&&"checked"),children:Object(j.jsxs)("div",{children:[" ",t," "]})}),Object(j.jsx)("div",{className:"remove",onClick:function(e){e.stopPropagation(),a(c)},children:Object(j.jsx)(f.a,{size:20})})]})}}]),n}(o.a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,c=e.onRemove,o=t.map((function(e){var t=e.id,o=e.text,a=e.checked;return Object(j.jsx)(p,{id:t,text:o,checked:a,onToggle:n,onRemove:c},t)}));return Object(j.jsx)("div",{children:o})}}]),n}(o.a.Component),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).id=0,e.state={input:"",todos:[]},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t=e.state,n=t.input,c=t.todos;e.setState({input:"",todos:c.concat({id:e.id++,text:n,checked:!1})})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e.handleToggle=function(t){var n=e.state.todos,c=n.findIndex((function(e){return e.id===t})),o=n[c],a=Object(i.a)(n);a[c]=Object(r.a)(Object(r.a)({},o),{},{checked:!o.checked}),e.setState({todos:a})},e.handleRemove=function(t){var n=e.state.todos;e.setState({todos:n.filter((function(e){return e.id!==t}))})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,c=this.handleChange,o=this.handleCreate,a=this.handleKeyPress,s=this.handleToggle,r=this.handleRemove;return Object(j.jsx)(v,{todos:n,form:Object(j.jsx)(b,{value:t,onKeyPress:a,onChange:c,onCreate:o}),children:Object(j.jsx)(O,{todos:n,onToggle:s,onRemove:r})})}}]),n}(o.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.9ac19843.chunk.js.map