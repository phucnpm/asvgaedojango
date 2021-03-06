//>>built
define("dojox/wire/demos/WidgetRepeater",["dojo","dijit","dojox","dojo/require!dojo/parser,dijit/_Widget,dijit/_Templated,dijit/_Container"],function(_1,_2,_3){
_1.provide("dojox.wire.demos.WidgetRepeater");
_1.require("dojo.parser");
_1.require("dijit._Widget");
_1.require("dijit._Templated");
_1.require("dijit._Container");
_1.declare("dojox.wire.demos.WidgetRepeater",[_2._Widget,_2._Templated,_2._Container],{templateString:"<div class='WidgetRepeater' dojoAttachPoint='repeaterNode'></div>",widget:null,repeater:null,createNew:function(_4){
try{
if(_1.isString(this.widget)){
this.widget=_1.getObject(this.widget);
}
this.addChild(new this.widget(_4));
this.repeaterNode.appendChild(document.createElement("br"));
}
catch(e){
}
}});
});
