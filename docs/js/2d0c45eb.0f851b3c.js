(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c45eb"],{"3b17":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"template",label:"Template"}}),a("q-tab",{attrs:{name:"script",label:"Script"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:t.template}})],1),a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:t.script}})],1)],1)],1)],1),a("q-separator"),a("q-calendar",{staticStyle:{height:"400px"},attrs:{view:"week","short-interval-label":!0,"hour24-format":!0,locale:"en-us"},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1)},r=[],l='```\n<template>\n  <q-calendar\n    v-model="selectedDate"\n    view="week"\n    :short-interval-label="true"\n    :hour24-format="true"\n    locale="en-us"\n    style="height: 400px;"\n  />\n</template>\n```',s="```\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01'\n    }\n  }\n<\/script>\n```",c={data:function(){return{tab:"template",selectedDate:"2019-04-01",template:l,script:s}}},o=c,i=a("2877"),p=Object(i["a"])(o,n,r,!1,null,null,null);e["default"]=p.exports}}]);