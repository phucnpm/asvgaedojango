//>>built
define("dojango/widget/plugins/InsertImage",["dojo","dijit","dojox","dojo/require!dijit/_editor/plugins/LinkDialog,dojango/widget/ThumbnailPicker"],function(_1,_2,_3){
_1.provide("dojango.widget.plugins.InsertImage");
_1.require("dijit._editor.plugins.LinkDialog");
_1.require("dojango.widget.ThumbnailPicker");
dojango.widget.plugins.InsertImageConfig={size:400,thumbHeight:75,thumbWidth:100,isHorizontal:true};
_1.declare("dojango.widget.plugins.InsertImage",_2._editor.plugins.LinkDialog,{command:"insertImage",linkDialogTemplate:["<div id=\"${id}_thumbPicker\" class=\"thumbPicker\" dojoType=\"dojango.widget.ThumbnailPicker\" size=\"${size}\"","thumbHeight=\"${thumbHeight}\" thumbWidth=\"${thumbWidth}\" isHorizontal=\"${isHorizontal}\" isClickable=\"true\"></div>","<label for=\"${id}_textInput\">${text}</label><input dojoType=\"dijit.form.ValidationTextBox\" required=\"true\" name=\"textInput\" id=\"${id}_textInput\"/>","<div><button dojoType=dijit.form.Button type=\"submit\">${set}</button></div>"].join(""),_picker:null,_textInput:null,_currentItem:null,_initButton:function(){
this.linkDialogTemplate=_1.string.substitute(this.linkDialogTemplate,dojango.widget.plugins.InsertImageConfig,function(_4,_5){
return _4?_4:"${"+_5+"}";
});
this.inherited(arguments);
this._picker=_2.byNode(_1.query("[widgetId]",this.dropDown.domNode)[0]);
this._textInput=_2.byNode(_1.query("[widgetId]",this.dropDown.domNode)[1]);
_1.subscribe(this._picker.getClickTopicName(),_1.hitch(this,"_markSelected"));
this.dropDown.execute=_1.hitch(this,"_customSetValue");
var _6=this;
this.dropDown.onOpen=function(){
_6._onOpenDialog();
_2.TooltipDialog.prototype.onOpen.apply(this,arguments);
var p=_6._picker,a=p._thumbs[p._thumbIndex],b=p.thumbsNode;
if(typeof (a)!="undefined"&&typeof (b)!="undefined"){
var _7=a[p._offsetAttr]-b[p._offsetAttr];
p.thumbScroller[p._scrollAttr]=_7;
}
};
_2.popup.prepare(this.dropDown.domNode);
this.editor.thumbnailPicker=this._picker;
},_customSetValue:function(_8){
if(!this._currentItem){
return false;
}
_8.urlInput=this._currentItem["largeUrl"]?this._currentItem["largeUrl"]:this._currentItem["url"];
this.setValue(_8);
},_markSelected:function(_9){
this._currentItem=_9;
this._textInput.attr("value",_9.title?_9.title:"");
this._picker.reset();
_1.addClass(this._picker._thumbs[_9.index],"imgSelected");
}});
_1.subscribe(_2._scopeName+".Editor.getPlugin",null,function(o){
if(o.plugin){
return;
}
switch(o.args.name){
case "dojangoInsertImage":
o.plugin=new dojango.widget.plugins.InsertImage({command:"insertImage"});
}
});
});
