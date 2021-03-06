//>>built
define("dojox/data/demos/widgets/PicasaViewList",["dojo","dijit","dojox","dojo/require!dijit/_Templated,dijit/_Widget,dojox/data/demos/widgets/PicasaView"],function(_1,_2,_3){
_1.provide("dojox.data.demos.widgets.PicasaViewList");
_1.require("dijit._Templated");
_1.require("dijit._Widget");
_1.require("dojox.data.demos.widgets.PicasaView");
_1.declare("dojox.data.demos.widgets.PicasaViewList",[_2._Widget,_2._Templated],{templateString:_1.cache("dojox","data/demos/widgets/templates/PicasaViewList.html","<div dojoAttachPoint=\"list\"></div>\n\n"),listNode:null,postCreate:function(){
this.fViewWidgets=[];
},clearList:function(){
while(this.list.firstChild){
this.list.removeChild(this.list.firstChild);
}
for(var i=0;i<this.fViewWidgets.length;i++){
this.fViewWidgets[i].destroy();
}
this.fViewWidgets=[];
},addView:function(_4){
var _5=new _3.data.demos.widgets.PicasaView(_4);
this.fViewWidgets.push(_5);
this.list.appendChild(_5.domNode);
}});
});
