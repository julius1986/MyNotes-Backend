(function(t){function e(e){for(var i,a,c=e[0],r=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0147":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"0769":function(t,e,n){"use strict";var i=n("7641"),o=n.n(i);o.a},"1bd0":function(t,e,n){"use strict";var i=n("0147"),o=n.n(i);o.a},"1dcd":function(t,e,n){},"2fad":function(t,e,n){"use strict";var i=n("c164"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu",{attrs:{userName:t.userName}}),n("list-notes",{attrs:{notes:t.notes},on:{"set-update-note":function(e){t.setUpdateNote(e)},"set-delete-note":function(e){t.setDeleteNote(e)}}}),t.isDisable?n("disable-window"):t._e(),t.isConfirm?n("dialog-window",{attrs:{note:t.currentDeleteNote},on:{"delete-note":function(e){t.deleteNote(e)}}}):t._e(),t.isEdit?n("edit-window",{attrs:{note:t.currentEditNote},on:{"update-note":function(e){t.updateNote(e)}}}):t._e(),t.isShowNote?n("show-note-window"):t._e(),t.isAdd?n("add-note-window",{on:{"add-new-note":function(e){t.addNewNote(e)}}}):t._e()],1)},s=[],a=n("be94"),c=(n("96cf"),n("1da1")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ListNotes"}},t._l(t.notes,function(e){return n("note",{key:e.id,attrs:{note:e},on:{"set-delete-note":function(e){t.setDeleteNote(e)},"set-update-note":function(e){t.setUpdateNote(e)}}})}))},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"width-100",attrs:{id:"note"}},[n("div",{staticClass:"text",on:{click:function(e){t.showFullNote()}}},[t._v(t._s(t.note.text))]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn btn-info",on:{click:function(e){t.openEdit()}}},[n("div",{staticClass:"btnText"},[t._v("Edit")])]),n("div",{staticClass:"btn btn-info",on:{click:function(e){t.setDeleteNote()}}},[n("div",{staticClass:"btnText"},[t._v("Delete")])])])])},l=[],f={name:"",props:["note"],data:function(){return{}},methods:{setDeleteNote:function(){this.$emit("set-delete-note",this.note),this.$store.commit("changeState",{type:"isDisable",value:!0}),this.$store.commit("changeState",{type:"isConfirm",value:!0})},openEdit:function(){this.$store.commit("changeState",{type:"isDisable",value:!0}),this.$store.commit("changeState",{type:"isEdit",value:!0}),this.$emit("set-update-note",this.note)},showFullNote:function(){this.$store.commit("changeState",{type:"isDisable",value:!0}),this.$store.commit("changeState",{type:"isShowNote",value:!0}),this.$store.commit("changeState",{type:"showNoteText",value:this.note.text})}}},h=f,p=(n("0769"),n("2877")),v=Object(p["a"])(h,d,l,!1,null,"06ebc022",null);v.options.__file="note.vue";var m=v.exports,b={name:"",props:["notes"],data:function(){return{}},components:{note:m},methods:{setUpdateNote:function(t){this.$emit("set-update-note",t)},setDeleteNote:function(t){this.$emit("set-delete-note",t)}}},N=b,w=(n("9034"),Object(p["a"])(N,r,u,!1,null,"e1c2028a",null));w.options.__file="ListNotes.vue";var g=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("div",{staticClass:"users__panel"},[t._m(0),n("div",{staticClass:"user"},[t._v("\r\n    "+t._s(t.userName)+"\r\n  ")])]),n("div",{staticClass:"btns__group"},[n("div",{staticClass:"add-btn",on:{click:function(e){t.addNewNote()}}},[t._v("Add")])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logout"},[n("a",{attrs:{href:"/logout"}},[t._v("Logout")])])}],C={name:"",props:["userName"],data:function(){return{}},methods:{addNewNote:function(){this.$store.commit("changeState",{type:"isDisable",value:!0}),this.$store.commit("changeState",{type:"isAdd",value:!0})}}},y=C,S=(n("ed38"),Object(p["a"])(y,_,x,!1,null,"1099804c",null));S.options.__file="menu.vue";var $=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"disable-window"}})},D=[],j={name:"",data:function(){return{}}},O=j,A=(n("1bd0"),Object(p["a"])(O,E,D,!1,null,"37bbfe7b",null));A.options.__file="disable-window.vue";var T=A.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container-show-window"}},[n("div",{staticClass:"note-box width-80 height-80"},[n("div",{staticClass:"text-container"},[n("div",{staticClass:"text-input p-10"},[t._v(t._s(t.noteText))])]),n("div",{staticClass:"button-group"},[n("div",{staticClass:"btn btn-cancel",on:{click:function(e){t.cancelUpdating()}}},[n("div",{staticClass:"btn-text"},[t._v("\n        CANCEL\n        ")])])])])])},U=[],P={name:"",created:function(){this.noteText=this.$store.state.showNoteText},data:function(){return{noteText:""}},methods:{cancelUpdating:function(){this.$store.commit("changeState",{type:"isDisable",value:!1}),this.$store.commit("changeState",{type:"isShowNote",value:!1})}}},L=P,M=(n("5daf"),Object(p["a"])(L,k,U,!1,null,"685c5e99",null));M.options.__file="show-note-window.vue";var J=M.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"add-window"}},[n("div",{staticClass:"dialog-box width-80 height-80"},[n("div",{staticClass:"text-container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.text,expression:"newNote.text"}],staticClass:"text-input p-10",domProps:{value:t.newNote.text},on:{input:function(e){e.target.composing||t.$set(t.newNote,"text",e.target.value)}}})]),n("div",{staticClass:"button-group"},[n("div",{staticClass:"btn btn-success",on:{click:function(e){t.addNote()}}},[n("div",{staticClass:"btn-text"},[t._v("\r\n          ADD\r\n        ")])]),n("div",{staticClass:"btn btn-cancel",on:{click:function(e){t.cancelAdding()}}},[n("div",{staticClass:"btn-text"},[t._v("\r\n          CANCEL\r\n        ")])])])])])},R=[],F={name:"",data:function(){return{newNote:{}}},methods:{addNote:function(){this.newNote.text&&this.newNote.text.length>0?this.$emit("add-new-note",this.newNote):this.cancelAdding()},cancelAdding:function(){this.$store.commit("changeState",{type:"isDisable",value:!1}),this.$store.commit("changeState",{type:"isAdd",value:!1})}}},Y=F,G=(n("a80e"),Object(p["a"])(Y,W,R,!1,null,"27058a6f",null));G.options.__file="add-note-window.vue";var q=G.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit-window"}},[n("div",{staticClass:"dialog-box width-80 height-80"},[n("div",{staticClass:"text-container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.text,expression:"newNote.text"}],staticClass:"text-input p-10",domProps:{value:t.newNote.text},on:{input:function(e){e.target.composing||t.$set(t.newNote,"text",e.target.value)}}})]),n("div",{staticClass:"button-group"},[n("div",{staticClass:"btn btn-success",on:{click:function(e){t.updateNote()}}},[n("div",{staticClass:"btn-text"},[t._v("\n        UPDATE\n        ")])]),n("div",{staticClass:"btn btn-cancel",on:{click:function(e){t.cancelUpdating()}}},[n("div",{staticClass:"btn-text"},[t._v("\n        CANCEL\n        ")])])])])])},B=[],H={name:"",created:function(){this.newNote.id=this.note.id,this.newNote.text=this.note.text},props:["note"],data:function(){return{newNote:{}}},methods:{updateNote:function(){this.$emit("update-note",this.newNote)},cancelUpdating:function(){this.$store.commit("changeState",{type:"isDisable",value:!1}),this.$store.commit("changeState",{type:"isEdit",value:!1})}}},I=H,K=(n("2fad"),Object(p["a"])(I,z,B,!1,null,"13fd58db",null));K.options.__file="edit-window.vue";var Q=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dialog-window"}},[n("div",{staticClass:"dialog-box width-80 height-40"},[t._m(0),n("div",{staticClass:"button-group"},[n("div",{staticClass:"btn btn-success",on:{click:function(e){t.deleteNote()}}},[n("div",{staticClass:"btn-text"},[t._v("\r\n          YES\r\n        ")])]),n("div",{staticClass:"btn btn-cancel",on:{click:function(e){t.cancelDeleting()}}},[n("div",{staticClass:"btn-text"},[t._v("\r\n          NO\r\n        ")])])])])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-container"},[n("div",{staticClass:"text"},[t._v("\r\n        Are you sure? You want to delete this note?\r\n      ")])])}],Z={name:"",props:["note"],data:function(){return{}},methods:{deleteNote:function(){this.$emit("delete-note",this.note)},cancelDeleting:function(){this.$store.commit("changeState",{type:"isDisable",value:!1}),this.$store.commit("changeState",{type:"isConfirm",value:!1})}}},tt=Z,et=(n("90a6"),Object(p["a"])(tt,V,X,!1,null,"9834c40a",null));et.options.__file="dialog-window.vue";var nt=et.exports,it=n("2f62");i["a"].use(it["a"]);var ot=new it["a"].Store({state:{notes:[],isDisable:!1,isEdit:!1,isShowNote:!1,isConfirm:!1,isAdd:!1,showNoteText:""},getters:{notes:function(t){return t.notes},isConfirm:function(t){return t.isConfirm},isEdit:function(t){return t.isEdit},isShowNote:function(t){return t.isShowNote},isAdd:function(t){return t.isAdd},isDisable:function(t){return t.isDisable}},mutations:{setNotes:function(t,e){t.notes=e},addNewNote:function(t,e){t.notes.push(e)},deleteNote:function(t,e){t.notes.splice(t.notes.indexOf(e),1)},changeState:function(t,e){t[e.type]=e.value},updateNote:function(t,e){for(var n=0;n<t.notes.length;n++)if(t.notes[n].id==e.id){for(var i in t.notes[n])t.notes[n][i]=e[i];return}}},actions:{getAllNotes:function(){return fetch("http://localhost:8080/notes",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return t})},addNewNote:function(t,e){fetch("http://localhost:8080/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(e){t.commit("addNewNote",e.data)}),t.commit("changeState",{type:"isDisable",value:!1}),t.commit("changeState",{type:"isAdd",value:!1})},deleteNote:function(t,e){t.commit("changeState",{type:"isDisable",value:!1}),t.commit("changeState",{type:"isConfirm",value:!1}),fetch("http://localhost:8080/notes/"+e.id,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(){t.commit("deleteNote",e)})},updateNote:function(t,e){t.commit("changeState",{type:"isDisable",value:!1}),t.commit("changeState",{type:"isEdit",value:!1}),fetch("http://localhost:8080/notes/"+e.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(e){t.commit("updateNote",e.data)})}}}),st=ot,at={name:"app",created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getAllNotes();case 2:return e=t.sent,st.commit("setNotes",e.data),t.next=6,this.getUserName();case 6:this.userName=t.sent;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{currentEditNote:{},currentDeleteNote:{},userName:""}},store:st,components:{ListNotes:g,Menu:$,DisableWindow:T,DialogWindow:nt,ShowNoteWindow:J,AddNoteWindow:q,EditWindow:Q},computed:Object(a["a"])({},Object(it["c"])(["notes","isConfirm","isDisable","isShowNote","isAdd","isEdit"])),methods:Object(a["a"])({},Object(it["b"])(["getAllNotes","addNewNote","deleteNote","updateNote"]),{setUpdateNote:function(t){this.currentEditNote=t},setDeleteNote:function(t){this.currentDeleteNote=t},getUserName:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8080/users/currentUser");case 2:return e=t.sent,t.next=5,e.json();case 5:return e=t.sent,t.abrupt("return",e.data.userName);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},ct=at,rt=(n("034f"),Object(p["a"])(ct,o,s,!1,null,null,null));rt.options.__file="App.vue";var ut=rt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ut)}}).$mount("#app")},"5daf":function(t,e,n){"use strict";var i=n("adf4"),o=n.n(i);o.a},"64a9":function(t,e,n){},7641:function(t,e,n){},"8f42":function(t,e,n){},9034:function(t,e,n){"use strict";var i=n("ec53"),o=n.n(i);o.a},"90a6":function(t,e,n){"use strict";var i=n("9258"),o=n.n(i);o.a},9258:function(t,e,n){},a80e:function(t,e,n){"use strict";var i=n("1dcd"),o=n.n(i);o.a},adf4:function(t,e,n){},c164:function(t,e,n){},ec53:function(t,e,n){},ed38:function(t,e,n){"use strict";var i=n("8f42"),o=n.n(i);o.a}});
//# sourceMappingURL=app.js.map