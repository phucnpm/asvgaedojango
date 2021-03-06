//>>built
define("dojox/data/demos/stores/LazyLoadJSIStore",["dojo","dijit","dojox","dojo/require!dojo/data/ItemFileReadStore"],function(_1,_2,_3){
_1.provide("dojox.data.demos.stores.LazyLoadJSIStore");
_1.require("dojo.data.ItemFileReadStore");
_1.declare("dojox.data.demos.stores.LazyLoadJSIStore",_1.data.ItemFileReadStore,{constructor:function(_4){
},isItemLoaded:function(_5){
if(this.getValue(_5,"type")==="stub"){
return false;
}
return true;
},loadItem:function(_6){
var _7=_6.item;
this._assertIsItem(_7);
var _8=this.getValue(_7,"name");
var _9=this.getValue(_7,"parent");
var _a="";
if(_9){
_a+=(_9+"/");
}
_a+=_8+"/data.json";
var _b=this;
var _c=function(_d){
delete _7.type;
delete _7.parent;
for(var i in _d){
if(_1.isArray(_d[i])){
_7[i]=_d[i];
}else{
_7[i]=[_d[i]];
}
}
_b._arrayOfAllItems[_7[_b._itemNumPropName]]=_7;
var _e=_b.getAttributes(_7);
for(i in _e){
var _f=_7[_e[i]];
for(var j=0;j<_f.length;j++){
var _10=_f[j];
if(typeof _10==="object"){
if(_10["stub"]){
var _11={type:["stub"],name:[_10["stub"]],parent:[_8]};
if(_9){
_11.parent[0]=_9+"/"+_11.parent[0];
}
_b._arrayOfAllItems.push(_11);
_11[_b._storeRefPropName]=_b;
_11[_b._itemNumPropName]=(_b._arrayOfAllItems.length-1);
_f[j]=_11;
}
}
}
}
if(_6.onItem){
var _12=_6.scope?_6.scope:_1.global;
_6.onItem.call(_12,_7);
}
};
var _13=function(_14){
if(_6.onError){
var _15=_6.scope?_6.scope:_1.global;
_6.onError.call(_15,_14);
}
};
var _16={url:_a,handleAs:"json-comment-optional"};
var d=_1.xhrGet(_16);
d.addCallback(_c);
d.addErrback(_13);
}});
});
