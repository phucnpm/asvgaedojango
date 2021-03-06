//>>built
define("dojox/wire/demos/TableContainer",["dojo","dijit","dojox","dojo/require!dojo/parser,dijit/_Widget,dijit/_Templated"],function(_1,_2,_3){
_1.provide("dojox.wire.demos.TableContainer");
_1.require("dojo.parser");
_1.require("dijit._Widget");
_1.require("dijit._Templated");
_1.declare("dojox.wire.demos.TableContainer",[_2._Widget,_2._Templated,_2._Container],{templateString:"<table class='tablecontainer'><tbody dojoAttachPoint='tableContainer'></tbody></table>",rowCount:0,headers:"",addRow:function(_4){
try{
var _5=document.createElement("tr");
if((this.rowCount%2)===0){
_1.addClass(_5,"alternate");
}
this.rowCount++;
for(var i in _4){
var _6=document.createElement("td");
var _7=document.createTextNode(_4[i]);
_6.appendChild(_7);
_5.appendChild(_6);
}
this.tableContainer.appendChild(_5);
}
catch(e){
}
},clearTable:function(){
while(this.tableContainer.firstChild.nextSibling){
this.tableContainer.removeChild(this.tableContainer.firstChild.nextSibling);
}
this.rowCount=0;
},postCreate:function(){
var _8=this.headers.split(",");
var tr=document.createElement("tr");
for(i in _8){
var _9=_8[i];
var th=document.createElement("th");
var _a=document.createTextNode(_9);
th.appendChild(_a);
tr.appendChild(th);
}
this.tableContainer.appendChild(tr);
}});
});
