(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[0],{1795:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,u,l,d,p,b,h=t(0),j=t.n(h),f=t(54),x=t.n(f),g=t(13),m=t(6),O=t(5),v=O.c.div(r||(r=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n"])),(function(e){return e.theme.colors.lightGrey})),y=t(71),w=t(18),k=t(39),S=O.c.nav(o||(o=Object(m.a)(["\n  grid-row: 1 / 3;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid ",";\n  justify-content: flex-start;\n  padding: 30px 0;\n"])),(function(e){return e.theme.colors.lightPurple})),C=O.c.div(c||(c=Object(m.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 30px;\n\n  h1 {\n    font-size: 15px;\n    color: ",";\n    text-align: right;\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.white})),z="active-link",E=Object(O.c)(k.c).attrs({activeClassName:z})(i||(i=Object(m.a)(["\n  font-weight: bold;\n  text-decoration: none;\n  color: ",";\n  text-align: right;\n  margin: 15px 20px 15px auto;\n  cursor: pointer;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 18px;\n    height: 3px;\n    top: 50%;\n    transform: translateY(-50%);\n    right: -20px;\n    background-color: ",";\n    opacity: 0;\n    transition: opacity 0.4s ease-in-out;\n  }\n\n  &."," {\n    &::after {\n      opacity: 1;\n    }\n  }\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.grey}),z),P=t(2),G=t.n(P),B=t(16),I=t(8),A=t(40),q=t.n(A),L=t(1),M=j.a.createContext({}),N=function(e){var n=e.children,t=Object(h.useState)(null),r=Object(I.a)(t,2),o=r[0],c=r[1],i=Object(h.useCallback)((function(e){c(e),setTimeout((function(){c(null)}),7e3)}),[]);return Object(L.jsx)(M.Provider,{value:{error:o,dispatchError:i},children:n})},F=function(){var e=Object(h.useContext)(M);if(!e)throw Error('errorContext doesn"t exist');return e},T=j.a.createContext({}),D=function(e){var n=e.children,t=Object(h.useState)(null),r=Object(I.a)(t,2),o=r[0],c=r[1],i=F().dispatchError;Object(h.useEffect)((function(){var e=localStorage.getItem("token");e&&Object(B.a)(G.a.mark((function n(){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.a.get("/me",{headers:{authorization:"Bearer ".concat(e)}});case 3:t=n.sent,c(t.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[]);var a=function(){var e=Object(B.a)(G.a.mark((function e(n){var t,r,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.login,r=n.password,e.prev=1,e.next=4,q.a.post("/login",{login:t,password:r});case 4:o=e.sent,c(o.data),localStorage.setItem("token",o.data.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i("Invalid email or password");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return Object(L.jsx)(T.Provider,{value:{user:o,signIn:a,singOut:function(){c(null),localStorage.removeItem("token")}},children:n})},_=function(){var e=Object(h.useContext)(T);if(!e)throw Error("useAuth needs to be used inside AuthContext");return e},X=function(){var e=_();return Object(L.jsxs)(S,{children:[Object(L.jsx)(C,{children:Object(L.jsxs)("h1",{children:["Study",Object(L.jsx)("br",{}),"Buddy"]})}),Object(L.jsx)(E,{exact:!0,to:"/group",children:"Dashboard"}),Object(L.jsx)(E,{exact:!0,to:"/notes",children:"Notes"}),Object(L.jsx)(E,{as:"a",onClick:e.singOut,children:"Logout"})]})},U=O.c.div(a||(a=Object(m.a)(["\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 150px 1fr 0.75fr;\n  grid-template-rows: 90px 1fr;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  overflow-x: scroll;\n  background-color: ",";\n  overflow-y: hidden;\n"])),(function(e){return e.theme.colors.lightGrey})),K=O.c.input(s||(s=Object(m.a)(["\n  padding: 10px 12px;\n  border: 1px solid ",";\n  box-sizing: border-box;\n  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);\n  border-radius: ",";\n  font-size: ",";\n  resize: none;\n\n  &:focus {\n    outline: none;\n    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);\n  }\n"])),(function(e){return e.theme.colors.lightPurple}),(function(e){return e.isTextarea?"15px":"25px"}),(function(e){return e.theme.fontSize.l})),R=t(150),V=t.n(R),J=t(154),Z=O.c.div(u||(u=Object(m.a)(["\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  border-bottom: 1px solid ",";\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 40px;\n\n  "," {\n    font-size: ",";\n    width: 100%;\n    max-width: 350px;\n    border: 2px solid ",";\n  }\n"])),(function(e){return e.theme.colors.darkPurple}),K,(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.colors.lightPurple})),H=O.c.div(l||(l=Object(m.a)(["\n  color: ",";\n  font-size: ",";\n  margin-right: 40px;\n\n  p {\n    margin: 5px;\n  }\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.fontSize.l})),Q=O.c.div(d||(d=Object(m.a)(["\n  position: relative;\n"]))),Y=O.c.ul(p||(p=Object(m.a)(["\n  visibility: ",";\n  z-index: 1000;\n  max-height: 500px;\n  overflow-y: scroll;\n  padding: 10px;\n  border-radius: 15px;\n  list-style: none;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n"])),(function(e){return e.isVisible?"visibility":"hidden"}),(function(e){return e.theme.colors.white})),W=O.c.li(b||(b=Object(m.a)(["\n  font-weight: bold;\n  color: ",";\n  background-color: ",";\n  width: 100%;\n  padding: 20px 5px;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){var n=e.theme;return e.isHighlighted?n.colors.lightPurple:n.colors.white}),(function(e){return e.theme.colors.lightPurple}),(function(e){return e.theme.colors.darkPurple})),$=q.a.create({});$.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.authorization="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)}));var ee,ne,te,re,oe,ce,ie,ae=function(){var e=F().dispatchError,n=Object(h.useCallback)(Object(B.a)(G.a.mark((function n(){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$.get("/groups");case 3:return t=n.sent,n.abrupt("return",t.data.groups);case 7:n.prev=7,n.t0=n.catch(0),e("Sorry, groups not found, please try again");case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e]),t=Object(h.useCallback)(function(){var n=Object(B.a)(G.a.mark((function n(t){var r;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$.get("/students/".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.students);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),e("Sorry, students not found, please try again");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),[e]),r=Object(h.useCallback)(function(){var n=Object(B.a)(G.a.mark((function n(t){var r;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$.get("/groups/".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.students);case 7:n.prev=7,n.t0=n.catch(0),e("Sorry, students in this group not found, please try again");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),[e]),o=function(){var n=Object(B.a)(G.a.mark((function n(t){var r,o;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$.post("/students/search",{searchPhrase:t});case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 8:n.prev=8,n.t0=n.catch(0),e("Sorry, student not found, please try again");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return{getGroups:n,getStudentsByGroup:r,getStudentById:t,findStudents:o}},se=function(){var e=Object(h.useState)([]),n=Object(I.a)(e,2),t=n[0],r=n[1],o=ae().findStudents,c=V()(function(){var e=Object(B.a)(G.a.mark((function e(n){var t,c,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.inputValue,e.next=3,o(t);case 3:c=e.sent,i=c.students,r(i);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),500),i=Object(J.a)({items:t,onInputValueChange:c}),a=i.isOpen,s=i.getMenuProps,u=i.getInputProps,l=i.getComboboxProps,d=i.highlightedIndex,p=i.getItemProps;return Object(L.jsxs)(Z,{children:[Object(L.jsxs)(H,{children:[Object(L.jsx)("p",{children:"Logged as:"}),Object(L.jsx)("p",{children:Object(L.jsx)("strong",{children:"Teacher"})})]}),Object(L.jsxs)(Q,Object(g.a)(Object(g.a)({},l()),{},{children:[Object(L.jsx)(K,Object(g.a)(Object(g.a)({},u()),{},{name:"Search",id:"Search",placeholder:"Search"})),Object(L.jsx)(Y,Object(g.a)(Object(g.a)({isVisible:a&&t.length>0},s()),{},{"aria-label":"results",children:a&&t.map((function(e,n){return Object(h.createElement)(W,Object(g.a)(Object(g.a)({isHighlighted:d===n},p({item:e,index:n})),{},{key:e.id}),e.name)}))}))]}))]})},ue=O.c.button(ee||(ee=Object(m.a)(["\n  margin: 15px 0;\n  padding: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: 20px;\n  border: none;\n  font-weight: 700;\n"])),(function(e){return e.isBig?"10px 38px":"7px 20px"}),(function(e){var n=e.isBig,t=e.theme.fontSize;return n?t.m:t.s}),(function(e){return e.theme.colors.lightPurple}),(function(e){return e.theme.colors.darkGrey})),le=O.c.div(ne||(ne=Object(m.a)(["\n  margin: 25px;\n  background-color: ",";\n  width: 100%;\n  max-width: 500px;\n  padding: 40px 50px;\n  border-radius: 25px;\n  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);\n"])),(function(e){return e.theme.colors.white})),de=O.c.div(te||(te=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 50px;\n  height: 100%;\n  grid-row: 1 / 3;\n  grid-column: 3 / 3;\n  border-left: 1px solid ",";\n  overflow-y: scroll;\n"])),(function(e){return e.theme.colors.grey})),pe=O.c.h2(re||(re=Object(m.a)(["\n  margin-right: auto;\n  color: ",";\n"])),(function(e){return e.theme.colors.darkGrey})),be=Object(O.c)(le)(oe||(oe=Object(m.a)(["\n  margin: 30px 0;\n  width: 100%;\n  max-width: unset;\n  border-radius: 12px;\n  color: ",";\n\n  p {\n    line-height: 1.6;\n  }\n"])),(function(e){return e.theme.colors.darkGrey})),he=O.c.div(ce||(ce=Object(m.a)(["\n  h3 {\n    margin: 0;\n    font-size: ",";\n  }\n\n  p {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.fontSize.m})),je=O.c.div(ie||(ie=Object(m.a)(["\n  display: flex;\n\n  img {\n    margin-left: 30px;\n    max-width: 200px;\n    object-fit: contain;\n  }\n"])));var fe,xe,ge,me=function(){var e=Object(h.useState)([]),n=Object(I.a)(e,2),t=n[0],r=n[1],o=Object(h.useState)(""),c=Object(I.a)(o,2),i=c[0],a=c[1];return Object(h.useEffect)((function(){q.a.post("https://graphql.datocms.com/",{query:"\n{\n  allArticles {\n    id\n    title\n \t  category\n    content\n    image {\n      url\n    }\n  }\n}\n"},{headers:{Authorization:"Bearer ".concat("512dd18aa8be2845b7e9fa1719e732")}}).then((function(e){var n=e.data.data;r(n.allArticles)})).catch((function(e){a("Sorry, we couldn't load articles for you")}))}),[]),Object(L.jsxs)(de,{children:[Object(L.jsx)(pe,{children:"University news feed"}),t.length>0?t.map((function(e){var n=e.id,t=e.title,r=e.category,o=e.content,c=e.image,i=void 0===c?null:c;return Object(L.jsxs)(be,{children:[Object(L.jsxs)(he,{children:[Object(L.jsx)("h3",{children:t}),Object(L.jsx)("p",{children:r})]}),Object(L.jsxs)(je,{children:[Object(L.jsx)("p",{children:o}),i?Object(L.jsx)("img",{src:i.url,alt:"article"}):null]}),Object(L.jsx)(ue,{isBig:!0,children:"click me"})]},n)})):Object(L.jsx)(pe,{children:i||"Loading..."})]})},Oe=O.c.h1(fe||(fe=Object(m.a)(["\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.colors.darkGrey})),ve=t(20),ye=t(10),we=t(151),ke=t(25),Se=Object(we.a)({baseQuery:Object(ke.d)({baseUrl:"/"}),tagTypes:["Notes"],endpoints:function(e){return{getNotes:e.query({query:function(){return"notes"},providesTags:["Notes"]}),addNote:e.mutation({query:function(e){return{url:"notes",method:"POST",body:e}},invalidatesTags:["Notes"]}),removeNote:e.mutation({query:function(e){return{url:"notes",method:"DELETE",body:e}},invalidatesTags:["Notes"]})}}}),Ce=Se.useGetNotesQuery,ze=Se.useAddNoteMutation,Ee=Se.useRemoveNoteMutation,Pe=Object(ye.a)({reducer:Object(ve.a)({},Se.reducerPath,Se.reducer),middleware:function(e){return e().concat(Se.middleware)}}),Ge=["title","titleId"];function Be(){return Be=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Be.apply(this,arguments)}function Ie(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Ae(e,n){var t=e.title,r=e.titleId,o=Ie(e,Ge);return h.createElement("svg",Be({width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?h.createElement("title",{id:r},t):null,xe||(xe=h.createElement("g",{clipPath:"url(#clip0_276_117)"},h.createElement("path",{d:"M9.90477 2.67625C7.77223 0.543138 4.30123 0.543138 2.16869 2.67625C1.13568 3.70994 0.56665 5.08399 0.56665 6.54532C0.56665 8.00666 1.13568 9.3807 2.16869 10.414C3.23517 11.4808 4.63596 12.0139 6.03672 12.0139C7.43748 12.0139 8.83829 11.4808 9.90475 10.414C12.0373 8.28088 12.0373 4.80977 9.90477 2.67625ZM9.30563 9.81469C7.50317 11.6176 4.57027 11.6176 2.7678 9.81469C1.89497 8.94163 1.41406 7.78034 1.41406 6.54532C1.41406 5.3103 1.89497 4.14902 2.7678 3.27552C4.57027 1.47257 7.50317 1.473 9.30563 3.27552C11.1077 5.07847 11.1077 8.01217 9.30563 9.81469Z",fill:"white"}),h.createElement("path",{d:"M7.74044 7.68187L6.60381 6.54536L7.74044 5.40885C7.89702 5.25207 7.89702 4.99759 7.74085 4.84038C7.58387 4.68279 7.32972 4.6832 7.17274 4.83998L6.03532 5.9773L4.89789 4.83998C4.74091 4.6832 4.48676 4.68279 4.32978 4.84038C4.17321 4.99757 4.17321 5.25205 4.33019 5.40885L5.46683 6.54536L4.33019 7.68187C4.17321 7.83865 4.17321 8.09313 4.32978 8.25034C4.40808 8.32913 4.51126 8.36812 4.61405 8.36812C4.71684 8.36812 4.81961 8.32872 4.89791 8.25073L6.03534 7.1134L7.17276 8.25073C7.25106 8.32913 7.35383 8.36812 7.45662 8.36812C7.55942 8.36812 7.66259 8.32872 7.74089 8.25034C7.89743 8.09313 7.89742 7.83865 7.74044 7.68187Z",fill:"white"}))),ge||(ge=h.createElement("defs",null,h.createElement("clipPath",{id:"clip0_276_117"},h.createElement("rect",{width:12.5448,height:12.5448,fill:"white",transform:"translate(0.0178223 0.0179443)"})))))}var qe,Le,Me,Ne,Fe,Te,De,_e,Xe,Ue,Ke,Re,Ve,Je=h.forwardRef(Ae),Ze=(t.p,O.c.button(qe||(qe=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 25px;\n  height: 25px;\n  background-color: ",";\n  border-radius: 50%;\n  border: none;\n  color: white;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(e){return e.theme.colors.grey}))),He=function(e){return Object(L.jsx)(Ze,Object(g.a)(Object(g.a)({},e),{},{children:Object(L.jsx)(Je,{})}))},Qe=O.c.div(Le||(Le=Object(m.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  h3,\n  p {\n    margin: 0;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.darkGrey})),Ye=Object(O.c)(He)(Me||(Me=Object(m.a)(["\n  position: absolute;\n  top: 20px;\n  left: -40px;\n"]))),We=function(e){var n=e.title,t=void 0===n?"Untitled":n,r=e.content,o=void 0===r?"No content":r,c=e.id,i=Ee(),a=Object(I.a)(i,1)[0];return Object(L.jsxs)(Qe,{children:[Object(L.jsx)(Oe,{children:t}),Object(L.jsx)("p",{children:o}),Object(L.jsx)(Ye,{"aria-label":"Delete",onClick:function(){a({id:c})}})]})},$e=O.c.div(Ne||(Ne=Object(m.a)(["\n  width: 400px;\n  height: auto;\n  max-height: 700px;\n  position: absolute;\n  right: 0;\n  top: 40px;\n  transform: ",";\n  transition: transform 0.6s ease-in-out;\n  background: ",";\n  border: 2px solid ",";\n"])),(function(e){return e.isOpen?"translateX(0)":"translateX(400px)"}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.darkGrey})),en=O.c.div(Fe||(Fe=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 30px;\n  background-color: ",";\n  transform: rotate(-90deg);\n  position: absolute;\n  left: -55px;\n  top: 40px;\n  color: ",";\n  border: none;\n  border-radius: 8px 8px 0 0;\n  line-height: 1;\n  cursor: pointer;\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.white})),nn=O.c.div(Te||(Te=Object(m.a)(["\n  max-height: 700px;\n  overflow-y: scroll;\n  padding: 20px 60px;\n  display: flex;\n  flex-direction: column;\n"]))),tn=function(){var e=Object(h.useState)(!1),n=Object(I.a)(e,2),t=n[0],r=n[1],o=Ce(),c=o.data,i=o.isLoading;return Object(L.jsxs)($e,{isOpen:t,children:[Object(L.jsx)(en,{onClick:function(){return r((function(e){return!e}))},children:"notes"}),i?Object(L.jsx)("h2",{children:"Loading..."}):Object(L.jsx)(nn,{children:c.notes.length?c.notes.map((function(e){var n=e.title,t=e.content,r=e.id;return Object(L.jsx)(We,{id:r,title:n,content:t},r)})):Object(L.jsx)("p",{children:"Create your first note"})})]})},rn=function(e){var n=e.children;return Object(L.jsxs)(U,{children:[Object(L.jsx)(X,{}),Object(L.jsx)(se,{}),n,Object(L.jsx)(me,{}),Object(L.jsx)(tn,{})]})},on=O.c.div(De||(De=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),cn=Object(O.c)(le)(_e||(_e=Object(m.a)(["\n  margin: 0;\n"]))),an=O.c.div(Xe||(Xe=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n"]))),sn=O.c.div(Ue||(Ue=Object(m.a)(["\n  margin-left: 20px;\n  display: flex;\n  gap: 15px;\n\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    background-color: ",";\n    color: ",";\n    font-weight: 700;\n    text-decoration: none;\n    border-radius: 50%;\n    transition: background-color 0.2s ease;\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.grey})),un=t(51),ln=O.c.li(Ke||(Ke=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.lightGrey})),dn=(O.c.div(Re||(Re=Object(m.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ",";\n  color: ",";\n  font-weight: bold;\n  background: ",";\n"])),(function(e){return e.isBig?"68px":"35px"}),(function(e){return e.isBig?"68px":"35px"}),(function(e){var n=e.isBig,t=e.theme;return n?t.fontSize.xl:t.fontSize.s}),(function(e){return e.theme.colors.white}),(function(e){var n=e.theme,t=e.value;return t>4?n.colors.success:t>3?n.colors.warning:t>=2?n.colors.error:n.colors.grey})),O.c.div(Ve||(Ve=Object(m.a)(["\n  padding: 25px 20px;\n\n  p {\n    margin: 0;\n    color: ",";\n  }\n\n  p:first-child {\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    font-size: ",";\n  }\n\n  p:last-child {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.fontSize.m}))),pn=t(3),bn=t.n(pn),hn=(bn.a.string,bn.a.string,bn.a.number,t(12)),jn=j.a.createContext({users:[],handleAddUser:function(){},deleteUser:function(){}});var fn,xn=O.c.div(fn||(fn=Object(m.a)(["\n  width: 35px;\n  height: 35px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ",";\n  color: ",";\n  font-weight: bold;\n  background: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.white}),(function(e){var n=e.theme,t=e.value;return t>4?n.colors.success:t>3?n.colors.warning:t>1?n.colors.error:n.colors.grey})),gn=["userData"];var mn,On,vn,yn,wn,kn,Sn,Cn,zn,En,Pn,Gn,Bn,In,An,qn,Ln=function(e){var n=e.userData,t=n.name,r=n.average,o=n.attendace,c=void 0===o?"0%":o,i=Object(un.a)(e,gn),a=Object(h.useContext)(jn).deleteUser;return Object(L.jsxs)(ln,Object(g.a)(Object(g.a)({},i),{},{children:[Object(L.jsx)(xn,{value:r,children:r}),Object(L.jsxs)(dn,{children:[Object(L.jsx)("p",{children:t}),Object(L.jsxs)("p",{children:["attendace: ",c]})]}),Object(L.jsx)(He,{onClick:function(){return a(t)}})]}))},Mn=O.c.ul(mn||(mn=Object(m.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Nn=function(e){var n=e.handleOpenStudentsDetails,t=Object(h.useState)([]),r=Object(I.a)(t,2),o=r[0],c=r[1],i=Object(w.g)().id,a=ae().getStudentsByGroup;return Object(h.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(i);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))()}),[a,i]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Oe,{children:"Students list"}),Object(L.jsx)(Mn,{children:o.map((function(e){return Object(L.jsx)(Ln,{onClick:function(){return n(e.id)},userData:e},e.name)}))})]})},Fn=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(h.useState)(e),t=Object(I.a)(n,2),r=t[0],o=t[1],c=function(){return o(!0)},i=function(){return o(!1)};return{isOpen:r,handleOpenModal:c,handleCloseModal:i}},Tn=O.c.div(On||(On=Object(m.a)(["\n  width: 100%;\n  padding: 40px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]))),Dn=Object(O.c)(xn)(vn||(vn=Object(m.a)(["\n  width: 68px;\n  height: 68px;\n  font-size: ",";\n  position: absolute;\n  left: 40px;\n"])),(function(e){return e.theme.fontSize.xl})),_n=O.c.div(yn||(yn=Object(m.a)(["\n  width: 100%;\n  padding: 40px;\n"]))),Xn=O.c.h3(wn||(wn=Object(m.a)(["\n  font-size: ",";\n  color: ",";\n  margin-bottom: 0;\n"])),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.colors.darkGrey})),Un=O.c.p(kn||(kn=Object(m.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 10px 20px 20px 0;\n"])),(function(e){var n=e.theme;return e.isBig?n.fontSize.xl:n.fontSize.l}),(function(e){return e.theme.colors.darkGrey})),Kn=O.c.div(Sn||(Sn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 250px;\n"]))),Rn=function(e){var n=e.student;return Object(L.jsxs)(Tn,{children:[Object(L.jsx)(Dn,{value:n.average,children:n.average}),Object(L.jsx)(Oe,{isBig:!0,children:n.name}),Object(L.jsxs)(_n,{children:[Object(L.jsx)(Xn,{children:"Course:"}),Object(L.jsx)(Un,{isBig:!0,children:n.course}),Object(L.jsx)(Xn,{children:"Average grades:"}),n.grades.map((function(e){var n=e.subject,t=e.average;return Object(L.jsxs)(Kn,{children:[Object(L.jsx)(Un,{children:n}),Object(L.jsx)(xn,{value:t,children:t})]},n)}))]})]})},Vn=t(153),Jn=t.n(Vn),Zn=Object(O.c)(Jn.a)(Cn||(Cn=Object(m.a)(["\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  min-height: 600px;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.colors.white})),Hn=function(e){var n=e.handleClose,t=e.isOpen,r=e.children;return Object(L.jsxs)(Zn,{appElement:document.getElementById("root"),isOpen:t,onRequestClose:n,children:[r,Object(L.jsx)(ue,{onClick:n,children:"Close modal"})]})},Qn=function(){var e=Object(h.useState)([]),n=Object(I.a)(e,2),t=n[0],r=n[1],o=Object(h.useState)([]),c=Object(I.a)(o,2),i=c[0],a=c[1],s=ae(),u=s.getGroups,l=s.getStudentById,d=Object(w.g)().id,p=Fn(),b=p.isOpen,j=p.handleOpenModal,f=p.handleCloseModal;Object(h.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})))()}),[u]);var x=function(){var e=Object(B.a)(G.a.mark((function e(n){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n);case 2:t=e.sent,a(t),j();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return!d&&t.length>0?Object(L.jsx)(w.a,{to:"/group/".concat(t[0].id)}):Object(L.jsxs)(on,{children:[Object(L.jsxs)(an,{children:[Object(L.jsxs)(Oe,{as:"h2",children:["Group ",d]}),Object(L.jsx)(sn,{children:t.map((function(e){var n=e.id;return Object(L.jsxs)(k.b,{to:"/group/".concat(n),children:[n," "]},n)}))})]}),Object(L.jsxs)(cn,{children:[Object(L.jsx)(Nn,{handleOpenStudentsDetails:x}),Object(L.jsx)(Hn,{isOpen:b,handleClose:f,children:Object(L.jsx)(Rn,{student:i})})]})]})},Yn=O.c.label(zn||(zn=Object(m.a)(["\n  font-family: Montserrat, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n  color: ",";\n"])),(function(e){return e.theme.colors.darkGrey})),Wn=["onChange","value","label","name","id","type","isTextarea"],$n=O.c.div(En||(En=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  "," {\n    margin-bottom: 12px;\n  }\n"])),Yn),et=j.a.forwardRef((function(e,n){var t=e.onChange,r=e.value,o=e.label,c=e.name,i=e.id,a=e.type,s=void 0===a?"text":a,u=e.isTextarea,l=Object(un.a)(e,Wn);return Object(L.jsxs)($n,{children:[Object(L.jsx)(Yn,{htmlFor:i,children:o}),u?Object(L.jsx)(K,Object(g.a)(Object(g.a)({isTextarea:!0,as:"textarea",name:c,id:i,value:r,onChange:t,"data-testid":o},l),{},{ref:n})):Object(L.jsx)(K,Object(g.a)(Object(g.a)({name:c,id:i,type:s,value:r,onChange:t,"data-testid":o},l),{},{ref:n}))]})})),nt=Object(O.d)(Pn||(Pn=Object(m.a)(["\nfrom {\n    transform: translateX(-50%) scaleX(1);\n}\nto {\n    transform: translateX(-50%) scaleX(0);\n\n}\n"]))),tt=Object(O.d)(Gn||(Gn=Object(m.a)(["\nfrom {\n    transform: translate(-50%, 500%);\n}\nto {\n    transform: translate(-50%, 0);\n}\n"]))),rt=O.c.div(Bn||(Bn=Object(m.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 10%;\n  padding: 25px 25px 15px;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 15px;\n  z-index: 999;\n  animation: "," 1s ease-in-out 1 forwards, "," 1s 6s ease-in-out reverse forwards;\n\n  "," {\n    color: ",";\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: 15px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: ",";\n    width: 60px;\n    height: 5px;\n    border-radius: 50px;\n  }\n\n  &::before {\n    opacity: 0.5;\n  }\n\n  &::after {\n    transform: translateX(-50%) scaleX(1);\n    transform-origin: left center;\n    animation: "," 5s 1s linear 1 forwards;\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.error}),(function(e){return e.theme.colors.error}),tt,tt,Oe,(function(e){return e.theme.colors.error}),(function(e){return e.theme.colors.error}),nt),ot=function(e){var n=e.message,t=void 0===n?"Something went wrong. Please try again, or contact our support.":n;return Object(L.jsxs)(rt,{children:[Object(L.jsx)(Oe,{children:"Oops!"}),Object(L.jsx)("p",{children:t})]})},ct=O.c.div(In||(In=Object(m.a)(["\n  padding: 30px;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 0.7fr 1.3fr;\n  grid-gap: 30px;\n"]))),it=O.c.form(An||(An=Object(m.a)(["\n  padding: 40px 30px;\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  background-color: ",";\n  border-radius: 25px;\n"])),(function(e){return e.theme.colors.white})),at=Object(O.c)(et)(qn||(qn=Object(m.a)(["\n  height: ",";\n"])),(function(e){return e.isTextarea?"300px":"unset"})),st=function(){var e=Object(y.a)(),n=e.register,t=e.handleSubmit,r=e.formState.errors,o=Ce(),c=o.data,i=o.isLoading,a=ze(),s=Object(I.a)(a,2),u=s[0],l=s[1];j.a.useEffect((function(){}),[c,l]);return Object(L.jsxs)(ct,{children:[Object(L.jsxs)(it,{onSubmit:t((function(e){var n=e.title,t=e.content;u({title:n,content:t})})),children:[Object(L.jsx)(at,Object(g.a)(Object(g.a)({},n("title",{required:!0})),{},{label:"Title",name:"title",id:"title"})),Object(L.jsx)(at,Object(g.a)(Object(g.a)({},n("content",{required:!0})),{},{isTextarea:!0,label:"Content",name:"content",id:"content"})),r.title&&Object(L.jsx)("span",{children:"Title is required"}),r.content&&Object(L.jsx)("span",{children:"Content is required"}),Object(L.jsx)(ue,{type:"submit",children:"Add"})]}),i?Object(L.jsx)("h2",{children:"Loading..."}):Object(L.jsx)(nn,{children:c.notes.length?c.notes.map((function(e){var n=e.title,t=e.content,r=e.id;return Object(L.jsx)(We,{id:r,title:n,content:t},r)})):Object(L.jsx)("p",{children:"Create your first note"})})]})},ut=function(){return Object(L.jsx)(rn,{children:Object(L.jsx)(v,{children:Object(L.jsxs)(w.d,{children:[Object(L.jsx)(w.b,{exact:!0,path:"/",children:Object(L.jsx)(w.a,{to:"/group"})}),Object(L.jsx)(w.b,{path:"/group/:id?",children:Object(L.jsx)(Qn,{})}),Object(L.jsx)(w.b,{path:"/notes",children:Object(L.jsx)(st,{})})]})})})},lt=function(){var e=_(),n=Object(y.a)(),t=n.register,r=n.handleSubmit,o=n.formState.errors;return Object(L.jsxs)("form",{onSubmit:r(e.signIn),style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:" center",alignItems:"center"},children:[Object(L.jsx)(et,Object(g.a)({label:"login",name:"login",id:"login"},t("login",{required:!0}))),o.login&&Object(L.jsx)("span",{children:"Login is required"}),Object(L.jsx)(et,Object(g.a)({label:"password",name:"password",id:"password",type:"password"},t("password",{required:!0}))),o.password&&Object(L.jsx)("span",{children:"password is required"}),Object(L.jsx)(ue,{type:"submit",children:"Sign in"})]})},dt=function(){var e=_(),n=F().error;return Object(L.jsxs)(L.Fragment,{children:[n?Object(L.jsx)(ot,{message:n}):null,e.user?Object(L.jsx)(ut,{}):Object(L.jsx)(lt,{})]})},pt=t(48),bt=t(37),ht=t(45),jt=t(19),ft=t.n(jt);ft.a.seed(123);var xt,gt=["A","B","C"],mt=["workshop","exam","lecture"],Ot=function(e,n){return e[n]},vt=function(){return ft.a.datatype.number({min:2,max:5,precision:.1})},yt=Object(ht.factory)({student:{id:Object(ht.primaryKey)(ft.a.datatype.uuid),name:function(){return ft.a.fake("{{name.firstName}} {{name.lastName}}")},attendance:function(){return"".concat(ft.a.datatype.number({min:0,max:100}))},average:vt,group:function(){return Ot(gt,ft.a.datatype.number({min:0,max:2}))},course:function(){return ft.a.fake("{{company.bsAdjective}} {{company.bsNoun}}")},grades:function(){return[{subject:"Business Philosophy",average:vt()},{subject:"Marketing",average:vt()},{subject:"Modern Economy",average:vt()}]}},group:{id:Object(ht.primaryKey)(String)},event:{id:Object(ht.primaryKey)(ft.a.datatype.uuid),type:function(){return Ot(mt,ft.a.datatype.number({min:0,max:2}))},group:function(){return Ot(gt,ft.a.datatype.number({min:0,max:2}))},subject:function(){return ft.a.fake("{{company.bsAdjective}} {{company.bsNoun}}")},date:ft.a.date.soon},teacher:{id:Object(ht.primaryKey)((function(){return"1"})),name:function(){return"Jacek Sobczak"},login:function(){return"teacher@studybuddy.com"},password:function(){return"Test1234"}},note:{id:Object(ht.primaryKey)(ft.a.datatype.uuid),title:function(){return"Lorem ipsum dolor sit amet"},content:function(){return"Lorem ipsum dolor sit amet"}}}),wt=[bt.c.get("/groups",(function(e,n,t){return n(t.status(200),t.json({groups:yt.group.getAll()}))})),bt.c.get("/groups/:id",(function(e,n,t){if(e.params.id){var r=yt.student.findMany({where:{group:{equals:e.params.id}}});return n(t.status(200),t.json({students:r}))}return n(t.status(404),t.json({error:"Please provide the group ID"}))}))],kt=[bt.c.get("/students/:id",(function(e,n,t){if(e.params.id){var r=yt.student.findFirst({where:{id:{equals:e.params.id}}});return r?n(t.status(200),t.json({students:r})):n(t.status(404),t.json({error:"No matching student"}))}return n(t.status(200),t.json({students:yt.student.getAll()}))})),bt.c.post("/students/search",(function(e,n,t){var r=yt.student.findMany({where:{name:{contains:e.body.searchPhrase}}});return n(t.status(200),t.json({students:r}))}))],St=["password"],Ct=function(e){e.password;return Object(un.a)(e,St)},zt=[bt.c.post("/login",(function(e,n,t){var r=yt.teacher.findFirst({where:{login:{equals:e.body.login}}});if(r&&r.password===e.body.password){var o=btoa(r.login);return localStorage.setItem("__be_token__",o),n(t.status(200),t.json(Object(g.a)(Object(g.a)({},Ct(r)),{},{token:o})))}return n(t.status(403),t.json({error:"Invalid user data"}))})),bt.c.get("/me",(function(e,n,t){if(function(e){var n;return(localStorage.getItem("__be_token__")||null)===(null===(n=e.headers.get("Authorization"))||void 0===n?void 0:n.replace("Bearer ",""))}(e)){var r=yt.teacher.getAll();return n(t.status(200),t.json(Object(g.a)({},Ct(r))))}return n(t.status(401))}))],Et=[bt.c.get("/notes",(function(e,n,t){return n(t.status(200),t.json({notes:yt.note.getAll()}))})),bt.c.post("/notes",(function(e,n,t){if(e.body.title&&e.body.content){var r={id:ft.a.datatype.uuid(),title:e.body.title,content:e.body.content};return yt.note.create(r),n(t.status(201),t.json({note:r}))}return n(t.status(404),t.json({error:"Every note needs to contain title and content"}))})),bt.c.delete("/notes",(function(e,n,t){if(e.body.id){var r=yt.note.delete({where:{id:{equals:e.body.id}}});return n(t.status(200),t.json({removedNote:r}))}return n(t.status(400),t.json({error:"Please provide ID of removed note"}))}))],Pt=[].concat(Object(hn.a)(wt),Object(hn.a)(kt),Object(hn.a)(zt),Object(hn.a)(Et)),Gt=pt.a.apply(void 0,Object(hn.a)(Pt)),Bt=function(){yt.group.create({id:"A"}),yt.group.create({id:"B"}),yt.group.create({id:"C"}),yt.teacher.create(),yt.note.create(),yt.note.create();for(var e=0;e<15;e++)yt.student.create(),yt.event.create()};Bt(),window.mocks={seed:Bt,getStudents:function(){return yt.student.getAll()},getEvents:function(){return yt.event.getAll()},getGroups:function(){return yt.group.getAll()}};var It=Object(O.b)(xt||(xt=Object(m.a)([" \n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n\n\nhtml {\n    box-sizing: border-box;\n}\n\n*,*::before, *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n    overflow-y: hidden;\n}\n\na, button {\n    font-family: 'Montserrat', sans-serif;\n}\n"]))),At={colors:{white:"#FFFFFF",lightGrey:"#F7F8FA",grey:"#C0C7D6",darkGrey:"#737C8E",black:"#111111",success:"#8FCB81",error:"#FF8383",warning:"#E1D888",lightPurple:"#DFE2E8"},fontSize:{xl:"24px",l:"17px",m:"12px",s:"11px"}},qt=t(21),Lt=function(e){var n=e.children;return Object(L.jsx)(qt.a,{store:Pe,children:Object(L.jsx)(k.a,{children:Object(L.jsx)(O.a,{theme:At,children:Object(L.jsx)(N,{children:Object(L.jsxs)(D,{children:[Object(L.jsx)(It,{}),n]})})})})})};Gt.start().then((function(){x.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(Lt,{children:Object(L.jsx)(dt,{})})}),document.getElementById("root"))}))}},[[1795,1,2]]]);
//# sourceMappingURL=main.ba24a721.chunk.js.map