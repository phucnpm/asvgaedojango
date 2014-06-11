//>>built
define("dojango/form/Form",["dojo","dijit","dojox","dojo/require!dijit/form/Form,dojo/date/stamp"],function(_1,_2,_3){
_1.provide("dojango.form.Form");
_1.require("dijit.form.Form");
_1.require("dojo.date.stamp");
_1.declare("dojango.form.Form",_2.form.Form,{_getDojangoValueAttr:function(){
var _4=this.attr("value");
return dojango.form.converter.convert_values(_4);
}});
dojango.form.converter={convert_values:function(_5){
for(var i in _5){
if(_5[i]&&!_5[i].getDate&&_1.isObject(_5[i])&&!_1.isArray(_5[i])){
_5[i]=_1.toJson(this._convert_value(_5[i]));
}else{
_5[i]=this._convert_value(_5[i]);
}
}
return _5;
},_convert_value:function(_6){
if(_6&&_6.getDate){
_6=_1.date.stamp.toISOString(_6);
if(typeof (_6)!="undefined"){
_6=_6.substring(0,_6.length-6);
}
}else{
if(_1.isString(_6)){
_6=_6;
_6=_6.replace("<br _moz_editor_bogus_node=\"TRUE\" />","");
}else{
if(_1.isArray(_6)){
for(var i=0,l=_6.length;i<l;i++){
_6[i]=this._convert_value(_6[i]);
}
}else{
if(typeof (_6)=="number"&&isNaN(_6)){
_6="";
}else{
if(_1.isObject(_6)){
for(var i in _6){
_6[i]=this._convert_value(_6[i]);
}
}else{
if(typeof (_6)=="undefined"){
_6="";
}
}
}
}
}
}
return _6;
}};
});
