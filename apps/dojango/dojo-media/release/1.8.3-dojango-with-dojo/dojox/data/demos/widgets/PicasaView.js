//>>built
define("dojox/data/demos/widgets/PicasaView",["dojo","dijit","dojox","dojo/require!dijit/_Templated,dijit/_Widget"],function(_1,_2,_3){
_1.provide("dojox.data.demos.widgets.PicasaView");
_1.require("dijit._Templated");
_1.require("dijit._Widget");
_1.declare("dojox.data.demos.widgets.PicasaView",[_2._Widget,_2._Templated],{templateString:_1.cache("dojox","data/demos/widgets/templates/PicasaView.html","<table class=\"picasaView\">\n\t<tbody>\n\t\t<tr class=\"picasaTitle\">\n\t\t\t<td>\n\t\t\t\t<b>\n\t\t\t\t\tTitle:\n\t\t\t\t</b>\n\t\t\t</td>\n\t\t\t<td dojoAttachPoint=\"titleNode\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<b>\n\t\t\t\t\tAuthor:\n\t\t\t\t</b>\n\t\t\t</td>\n\t\t\t<td dojoAttachPoint=\"authorNode\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t\t<b>\n\t\t\t\t\tSummary:\n\t\t\t\t</b>\n\t\t\t\t<span class=\"picasaSummary\" dojoAttachPoint=\"descriptionNode\"></span>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td dojoAttachPoint=\"imageNode\" colspan=\"2\">\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n"),titleNode:null,descriptionNode:null,imageNode:null,authorNode:null,title:"",author:"",imageUrl:"",iconUrl:"",postCreate:function(){
this.titleNode.appendChild(document.createTextNode(this.title));
this.authorNode.appendChild(document.createTextNode(this.author));
this.descriptionNode.appendChild(document.createTextNode(this.description));
var _4=document.createElement("a");
_4.setAttribute("href",this.imageUrl);
_4.setAttribute("target","_blank");
var _5=document.createElement("img");
_5.setAttribute("src",this.iconUrl);
_4.appendChild(_5);
this.imageNode.appendChild(_4);
}});
});
