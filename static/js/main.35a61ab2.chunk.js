(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(13),r=c.n(i),s=(c(23),c(4)),o=c(14),d=c(15),j=c(18),l=c(17),h=(c(24),c(0)),b=function(e){var t=e.Poster,c=e.Title,n=e.Year,a=e.imdbID;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"card active-card",children:[Object(h.jsx)("div",{className:"card-img",children:Object(h.jsx)("img",{src:t,alt:c})}),Object(h.jsxs)("div",{className:"text-card",children:[Object(h.jsx)("h5",{children:c}),Object(h.jsx)("p",{children:n})]})]},a)})},u=c(16),m=c.n(u),O=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={Search:[]},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(t){console.log(t.data),e.setState({Search:t.data.Search})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"topbar",children:"Movie's"}),Object(h.jsx)("div",{className:"card-container",children:this.state.Search.map((function(e,t){return Object(n.createElement)(b,Object(s.a)(Object(s.a)({},e),{},{key:t}))}))})]})}}]),c}(n.Component),p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.35a61ab2.chunk.js.map