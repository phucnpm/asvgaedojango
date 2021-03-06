//>>built
define("dojox/data/demos/widgets/FileView",["dojo","dijit","dojox","dojo/require!dijit/_Templated,dijit/_Widget"],function(_1,_2,_3){
_1.provide("dojox.data.demos.widgets.FileView");
_1.require("dijit._Templated");
_1.require("dijit._Widget");
_1.declare("dojox.data.demos.widgets.FileView",[_2._Widget,_2._Templated],{templateString:_1.cache("dojox","data/demos/widgets/templates/FileView.html","<div class=\"fileView\">\n\t<div class=\"fileViewTitle\">File Details:</div>\n\t<table class=\"fileViewTable\">\n\t\t<tbody>\n\t\t\t<tr class=\"fileName\">\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tName:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td dojoAttachPoint=\"nameNode\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tPath:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td dojoAttachPoint=\"pathNode\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tSize:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<span dojoAttachPoint=\"sizeNode\"></span>&nbsp;bytes.\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tIs Directory:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td dojoAttachPoint=\"directoryNode\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tParent Directory:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td dojoAttachPoint=\"parentDirNode\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<b>\n\t\t\t\t\t\tChildren:\n\t\t\t\t\t</b>\n\t\t\t\t</td>\n\t\t\t\t<td dojoAttachPoint=\"childrenNode\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n"),titleNode:null,descriptionNode:null,imageNode:null,authorNode:null,name:"",path:"",size:0,directory:false,parentDir:"",children:[],postCreate:function(){
this.nameNode.appendChild(document.createTextNode(this.name));
this.pathNode.appendChild(document.createTextNode(this.path));
this.sizeNode.appendChild(document.createTextNode(this.size));
this.directoryNode.appendChild(document.createTextNode(this.directory));
this.parentDirNode.appendChild(document.createTextNode(this.parentDir));
if(this.children&&this.children.length>0){
var i;
for(i=0;i<this.children.length;i++){
var _4=document.createTextNode(this.children[i]);
this.childrenNode.appendChild(_4);
if(i<(this.children.length-1)){
this.childrenNode.appendChild(document.createElement("br"));
}
}
}
}});
});
