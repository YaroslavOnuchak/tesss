(function(e){function t(t){for(var o,s,r=t[0],i=t[1],d=t[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);c&&c(t);while(p.length)p.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},l=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-word/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28d4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Header",{attrs:{editStatus:e.editTogle,addStatus:e.add.addStatus},on:{"edit-start":function(t){return e.edit(e.editTogle)},"edit-save":function(t){return e.edit(e.editTogle)},"add-new-text":function(t){return e.create(t)},del:e.del}}),n("Main",{attrs:{editStatus:e.editTogle,addNewText:e.add.text,del:e.del}}),n("div",{staticClass:"wrap-json-info"},[n("b-button",{attrs:{id:"btn-json-info",title:"get JSON "},on:{click:e.getJSON}},[e._v("get JSON "),n("b-icon-info-square")],1),e.spanJSON.length?n("p",[e._v(e._s(JSON.stringify(this.spanJSON)))]):e._e()],1)],1)},l=[],s=(n("c975"),n("7039"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"container-fluid row m-0 justify-content-around text-center"},[n("b-form",{staticClass:"w-25",attrs:{name:"setColor"},on:{change:e.setColor}},[n("b-form-group",{attrs:{id:"input-group-3",label:"Text Color:","label-for":"input-3"}},[n("b-form-select",{ref:"selectedTextColor",attrs:{id:"input-3",options:e.colors,required:""},model:{value:e.selectedTextColor,callback:function(t){e.selectedTextColor=t},expression:"selectedTextColor"}})],1)],1),n("b-form",{staticClass:"w-25",attrs:{name:"setColorBg"},on:{change:e.setColorBg}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Text Bg Color:","label-for":"input-2"}},[n("b-form-select",{attrs:{id:"input-2",options:e.colorsBg,required:""},model:{value:e.selectedTextBgColor,callback:function(t){e.selectedTextBgColor=t},expression:"selectedTextBgColor"}})],1)],1),n("b-form",{staticClass:"w-25",attrs:{name:"setFontSize"},on:{change:e.setSize}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Text Size:","label-for":"input-1"}},[n("b-form-select",{attrs:{id:"input-1",options:e.sizes,required:""},model:{value:e.selectedTextSize,callback:function(t){e.selectedTextSize=t},expression:"selectedTextSize"}})],1)],1)],1),n("div",{ref:"divContent",staticClass:"relative-position cursor_normal none_outline",staticStyle:{color:"rgb(255, 255, 255)",opacity:"1","border-radius":"6px",transform:"rotate(0deg)",border:"0px solid rgb(70, 144, 247)",padding:"10px","text-align":"center","letter-spacing":"0px","font-size":"32px","font-family":"Aleo","font-weight":"300","text-decoration":"none","box-shadow":"rgb(0, 0, 0) 0px 0px 0px 0px","text-transform":"initial","font-style":"normal","z-index":"2002","text-shadow":"rgba(0, 0, 0, 0.2) 2px 2px 0px","line-height":"1.5em"},attrs:{contenteditable:e.editStatus,spellcheck:"false"}},[n("span",{staticStyle:{"background-color":"rgb(248, 187, 208)","padding-left":"3px","padding-right":"3px","border-radius":"4px"}},[e._v("Hi")]),n("br"),n("span",{staticStyle:{"background-color":"rgb(248, 187, 208)","padding-left":"3px","padding-right":"3px","border-radius":"4px"}},[e._v("My lovely")]),n("span",{staticStyle:{color:"rgb(136, 14, 79)","font-size":"54px"}},[e._v("little")]),n("span",{staticStyle:{color:"rgb(186, 104, 200)","background-color":"rgb(248, 187, 0)"}},[e._v("Ponny")])])])}),r=[],i=(n("99af"),n("fb6a"),n("ac1f"),n("5319"),n("498a"),n("b85c")),d={props:{editStatus:Boolean,addNewText:String,del:Function},data:function(){return{spans:[],selectedTextBgColor:null,selectedTextColor:null,selectedTextSize:null,colors:[{text:"Select Color",value:null,disabled:!0},{text:"yellow",value:"yellow"},{text:"green",value:"green"},{text:"red",value:"red"}],colorsBg:[{text:"Select Color",value:null,disabled:!0},{text:"aliceblue",value:"aliceblue"},{text:"lavender",value:"lavender"},{text:"thistle",value:"thistle"},{text:"khaki",value:"khaki"},{text:"darkseagreen",value:"darkseagreen"}],sizes:[{text:"Select Size",value:null,disabled:!0},{text:"12px",value:"12px"},{text:"24px",value:"24px"},{text:"48px",value:"48px"},{text:"72px",value:"72px"}]}},updated:function(){this.checkWhiteSpaces()},mounted:function(){this.checkWhiteSpaces()},methods:{setCaret:function(){var e=this.$refs.divContent.lastChild,t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)},setColor:function(){var e=document.getSelection();e.isCollapsed||"SPAN"!==e.anchorNode.parentElement.tagName||"SPAN"!==e.focusNode.parentElement.tagName||(this.selectedTextColor=document.setColor.elements[0].value,e.focusNode.parentElement.style.color=e.anchorNode.parentElement.style.color=this.selectedTextColor,e.removeAllRanges(),this.selectedTextColor=null)},setColorBg:function(){var e=document.getSelection();e.isCollapsed||"SPAN"!==e.anchorNode.parentElement.tagName||"SPAN"!==e.focusNode.parentElement.tagName||(this.selectedTextBgColor=document.setColorBg.elements[0].value,e.focusNode.parentElement.style.backgroundColor=e.anchorNode.parentElement.style.backgroundColor=this.selectedTextBgColor,e.removeAllRanges(),this.selectedTextBgColor=null)},setSize:function(){var e=document.getSelection();e.isCollapsed||"SPAN"!==e.anchorNode.parentElement.tagName||"SPAN"!==e.focusNode.parentElement.tagName||(this.selectedTextSize=document.setFontSize.elements[0].value,e.focusNode.parentElement.style.fontSize=e.anchorNode.parentElement.style.fontSize=this.selectedTextSize,e.removeAllRanges(),this.selectedTextSize=null)},checkWhiteSpaces:function(){this.spans=document.getElementsByTagName("span");var e,t=Object(i["a"])(this.spans);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.textContent.indexOf(" ")>-1)if(/^\s*$/.test("".concat(n.textContent)))n.remove();else{var o="".concat(n.outerHTML.slice(0,n.outerHTML.indexOf(">")+1)),a=" </span>".concat(o),l=/\s/gi;n.outerHTML="".concat(o).concat(n.textContent.trim().replace(l,a)," </span>")}}}catch(s){t.e(s)}finally{t.f()}}},watch:{addNewText:function(){if(console.log("this.addNewText.text :>> ",this.addNewText),this.addNewText){var e=this.$refs.divContent.lastChild;e.innerText+=" ".concat(this.addNewText),this.setCaret(),this.checkWhiteSpaces()}},editStatus:function(){this.editStatus&&this.setCaret()}}},c=d,u=(n("b43f"),n("2877")),p=Object(u["a"])(c,s,r,!1,null,"a9f8348c",null),f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container-fluid row w-100"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{disabled:e.addStatus,title:"add text"}},[n("b-icon-plus")],1),e.editStatus?n("b-button",{class:{"save-edit":e.editStatus},attrs:{title:"save edit"},on:{click:function(t){return e.$emit("edit-save",e.editStatus)}}},[n("b-icon-check2-square")],1):n("b-button",{attrs:{title:"edit text"},on:{click:function(t){return e.$emit("edit-start",e.editStatus)}}},[n("b-icon-pencil")],1),n("b-button",{attrs:{title:"delete last span"},on:{click:function(t){return e.$emit("del")}}},[n("b-icon-x-circle")],1)],1),n("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"enter new text"},on:{ok:e.handleOk}},[n("div",{staticClass:"modal_dody"},[n("p",{ref:"modal_context",staticClass:"modal_context",attrs:{contenteditable:!e.addStatus}})])])],1)},g=[],x={name:"Header",props:{editStatus:Boolean,addStatus:Boolean},data:function(){return{}},mounted:function(){},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.$emit("add-new-text",this.$refs.modal_context.innerText),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")}))}}},b=x,m=(n("fa35"),Object(u["a"])(b,h,g,!1,null,"e69274f4",null)),S=m.exports,v={name:"App",data:function(){return{editTogle:!1,add:{addStatus:!1,text:""},spanJSON:[]}},components:{Main:f,Header:S},methods:{create:function(e){this.add.addStatus&&(this.add.addStatus=!this.add.addStatus),this.add.text=e},del:function(){var e=document.getElementsByTagName("span");e[e.length-1].remove()},edit:function(e){this.editTogle=!e,this.add.addStatus?this.add.addStatus=!1:this.add.addStatus=!0},getJSON:function(){this.spanJSON=[];for(var e=document.getElementsByTagName("span"),t=0;t<e.length;t++){var n={title:e[t].innerText,color:e[t].style.color||e[t].parentElement.style.color||null,fontSize:e[t].style.fontSize||e[t].parentElement.style.fontSize||null,backgroundColor:e[t].style.backgroundColor||e[t].parentElement.style.backgroundColor||null};0===this.spanJSON.length?this.spanJSON.push(n):(this.spanJSON[this.spanJSON.length-1].color===n.color&&(this.spanJSON[this.spanJSON.length-1].title+=" ".concat(n.title),delete n.color),this.spanJSON[this.spanJSON.length-1].fontSize===n.fontSize&&(-1===this.spanJSON[this.spanJSON.length-1].title.indexOf(n.title)?(this.spanJSON[this.spanJSON.length-1].title+=" ".concat(n.title),delete n.fontSize):delete n.fontSize),this.spanJSON[this.spanJSON.length-1].backgroundColor===n.backgroundColor&&(-1===this.spanJSON[this.spanJSON.length-1].title.indexOf(n.title)?(this.spanJSON[this.spanJSON.length-1].title+=" ".concat(n.title),delete n.backgroundColor):delete n.backgroundColor),Object.getOwnPropertyNames(n).length>2&&this.spanJSON.push(n))}}}},N=v,C=(n("5c0b"),Object(u["a"])(N,a,l,!1,null,null,null)),y=C.exports,O=(n("f669"),n("5f5b")),T=n("b1e0");o["default"].use(O["a"]),o["default"].use(T["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(y)}}).$mount("#app")},"5b09":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(e,t,n){},b43f:function(e,t,n){"use strict";var o=n("28d4"),a=n.n(o);a.a},f669:function(e,t,n){},fa35:function(e,t,n){"use strict";var o=n("5b09"),a=n.n(o);a.a}});
//# sourceMappingURL=app.8bbc113c.js.map