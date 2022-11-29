/*! Package:geoview-layers-panel: 0.1.0 - "de4de757ec9eb7f388fd5c914ee5a5b24e08bea5" - 2022-11-29T13:23:49.082Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{34249:(e,t,n)=>{var r=n(7886),a=n(1116),i=n(71120),o=n(33756),s=n(81770),c=n(23078),u=n(3),l=n(43337),p=n(90755),d=n(93780),f=n(10835),h=n.n(f),v=n(45202);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=window;const g=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=m.cgpv,a=r.api,i=r.react,o=r.ui,s=a.layerTypes,c=s.ESRI_DYNAMIC,u=s.ESRI_FEATURE,f=s.GEOJSON,b=s.WMS,g=s.WFS,x=s.OGC_FEATURE,j=s.XYZ_TILES,O=s.GEOCORE,E=i.useState,S=o.elements,w=S.Select,C=S.Stepper,P=S.TextField,L=S.Button,k=S.ButtonGroup,N=S.Autocomplete,A=S.CircularProgressBase,I=S.Box,Z=E(0),R=(0,p.Z)(Z,2),T=R[0],F=R[1],U=E(""),W=(0,p.Z)(U,2),B=W[0],D=W[1],G=E(""),_=(0,p.Z)(G,2),M=_[0],V=_[1],Y=E([]),J=(0,p.Z)(Y,2),K=J[0],X=J[1],Q=E(""),q=(0,p.Z)(Q,2),$=q[0],z=q[1],H=E([]),ee=(0,p.Z)(H,2),te=ee[0],ne=ee[1],re=E(!1),ae=(0,p.Z)(re,2),ie=ae[0],oe=ae[1],se={buttonGroup:{paddingTop:12,gap:6}},ce=function(){return M===c},ue=[[c,"ESRI Dynamic Service"],[u,"ESRI Feature Service"],[f,"GeoJSON"],[b,"OGC Web Map Service (WMS)"],[g,"OGC Web Feature Service (WFS)"],[x,"OGC API Features"],[j,"XYZ Raster Tiles"],[O,"GeoCore"]],le=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case u:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},pe=function(e){oe(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," cannot be empty")}))},de=function(e){oe(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"URL is not a valid ".concat(e," Server")}))},fe=function(e,n,r){oe(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}))},he=function(){var e=(0,d.Z)(h().mark((function e(){var n,r,i,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.projection.projections[a.map(t).currentProjection].getCode(),r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(B,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(z(o[0][1]),ne([{layerId:o[0][0]}])):X(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0.message?fe("WMS",n,r):de("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,d.Z)(h().mark((function e(){var t,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(B);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(z(n[0][1]),ne([{layerId:n[0][0]}])):X(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),de("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,d.Z)(h().mark((function e(){var t,n,r,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(B,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(z(a[0][1]),ne([{layerId:a[0][0]}])):X(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),de("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,d.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,-1===B.indexOf("/")&&32===B.replaceAll("-","").length){e.next=4;break}throw new Error("err");case 4:z(""),ne([{layerId:B}]),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),de("GeoCore UUID"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,d.Z)(h().mark((function e(t){var n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(B);case 3:if(!(n=e.sent).capabilities.includes(le(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(z(r[0][1]),ne([{layerId:r[0][0]}])):X(r):(z(n.name),ne([{layerId:n.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),de(le(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){for(var e=a.projection.projections[a.map(t).currentProjection].getCode(),n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!B.includes(n[r]))return de("XYZ Tile"),!1;if("EPSG:3857"!==e)return fe("XYZ Tiles",e,["EPSG:3857"]),!1;var i=B;return z(""),ne([{layerId:B,source:{dataAccessPath:{en:i,fr:i}}}]),!0},xe=function(){var e=(0,d.Z)(h().mark((function e(){var t,n,r,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(B);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:r=B.split("/").pop(),a=B.replace(r,""),z(r),ne([{layerId:r,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),de("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=(0,d.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe(!0),t=!0,void 0!==M){e.next=8;break}t=!1,oe(!1),pe("Service Type"),e.next=52;break;case 8:if(M!==b){e.next=14;break}return e.next=11,he();case 11:t=e.sent,e.next=52;break;case 14:if(M!==g){e.next=20;break}return e.next=17,ve();case 17:t=e.sent,e.next=52;break;case 20:if(M!==x){e.next=26;break}return e.next=23,be();case 23:t=e.sent,e.next=52;break;case 26:if(M!==j){e.next=30;break}t=ge(),e.next=52;break;case 30:if(M!==c){e.next=36;break}return e.next=33,me(c);case 33:t=e.sent,e.next=52;break;case 36:if(M!==u){e.next=42;break}return e.next=39,me(u);case 39:t=e.sent,e.next=52;break;case 42:if(M!==f){e.next=48;break}return e.next=45,xe();case 45:t=e.sent,e.next=52;break;case 48:if(M!==O){e.next=52;break}return e.next=51,ye();case 51:t=e.sent;case 52:t&&(oe(!1),F(2));case 53:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){oe(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),oe(!1),n(!1)}),t,e);var r=!0,i=$,o=B;M!==c&&M!==u||(o=a.geoUtilities.getMapServerUrl(B)),""===$&&(r=!1,pe(ce()?"Name":"Layer"));var s={geoviewLayerId:e,geoviewLayerName:{en:i,fr:i},geoviewLayerType:M,metadataAccessPath:{en:o,fr:o},listOfLayerEntryConfig:te};M!==f&&M!==j||(s.metadataAccessPath={en:"",fr:""}),M===O&&delete s.metadataAccessPath,r&&(M===O&&setTimeout((function(){oe(!1),n(!1)}),3e3),a.map(t).layer.addGeoviewLayer(s))},Ee=function(){F((function(e){return e-1}))},Se=function(e){z(e.target.value)};function we(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return ie?(0,v.jsx)(I,{sx:{padding:10},children:(0,v.jsx)(A,{})}):(0,v.jsxs)(k,{sx:se.buttonGroup,children:[(0,v.jsx)(L,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,v.jsx)(L,{variant:"contained",type:"text",onClick:Ee,children:"Back"})]})}return(0,v.jsx)(C,{activeStep:T,orientation:"vertical",steps:[{stepLabel:{children:"Enter URL / UUID"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P,{sx:{width:"100%"},label:"URL",variant:"standard",value:B,onChange:function(e){D(e.target.value),V(""),X([]),z(""),ne([])}}),(0,v.jsx)("br",{}),(0,v.jsx)(we,{isFirst:!0,handleNext:function(){var e,t,n=!0;""===B.trim()&&(n=!1,pe("URL")),n&&(e=B.toUpperCase().split("/"),t=parseInt(e[e.length-1],10),B.toUpperCase().endsWith("MAPSERVER")||B.toUpperCase().endsWith("MAPSERVER/")?V(c):-1!==B.toUpperCase().indexOf("FEATURESERVER")||-1!==B.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(t)?V(u):-1!==e.indexOf("WFS")?V(g):B.toUpperCase().endsWith(".JSON")||B.toUpperCase().endsWith(".GEOJSON")?V(f):-1!==B.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==B.toUpperCase().indexOf("{Z}/{Y}/{X}")?V(j):-1===B.indexOf("/")&&32===B.replaceAll("-","").length&&V(O),F(1))}})]})}},{stepLabel:{children:"Select format"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{fullWidth:!0,labelId:"service-type-label",value:M,onChange:function(e){V(e.target.value),X([]),z(""),ne([])},label:"Service Type",inputLabel:{id:"service-type-label"},menuItems:ue.map((function(e){var t=(0,p.Z)(e,2),n=t[0];return{key:n,item:{value:n,children:t[1]}}}))}),(0,v.jsx)(we,{handleNext:je})]})}},{stepLabel:{children:"Configure layer"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[0===K.length&&(0,v.jsx)(P,{label:"Name",variant:"standard",value:$,onChange:Se}),K.length>1&&(0,v.jsx)(N,{fullWidth:!0,multiple:ce(),disableCloseOnSelect:!0,disableClearable:!ce(),id:"service-layer-label",options:K,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,v.jsx)("span",y(y({},e),{},{children:t[1]}))},onChange:function(e,t){ce()?(ne(t.map((function(e){return{layerId:e[0]}}))),z(t.map((function(e){return e[1]})).join(", "))):(ne([{layerId:t[0]}]),z(t[1]))},renderInput:function(e){return(0,v.jsx)(P,y(y({},e),{},{label:"Select Layer"}))}}),(0,v.jsx)("br",{}),(0,v.jsx)(we,{isLast:!ce(),handleNext:ce()?function(){var e=!0;0===te.length&&(e=!1,pe("Layer")),e&&F(3)}:Oe})]})}},ce()?{stepLabel:{children:"Enter Name"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P,{sx:{width:"100%"},label:"Name",variant:"standard",value:$,onChange:Se}),(0,v.jsx)("br",{}),(0,v.jsx)(we,{isLast:!0,handleNext:Oe})]})}}:null]})};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=window;const O=function(e){var t=e.mapId,n=e.buttonPanel,r=j.cgpv,a=r.api,i=r.react,o=r.ui,s=i.useState,c=i.useEffect,d=s(!1),f=(0,p.Z)(d,2),h=f[0],b=f[1],y=s({}),m=(0,p.Z)(y,2),O=(m[0],m[1]),E=o.elements,S=E.Typography,w=E.IconButton,C=E.AddIcon,P=E.Box,L=a.map(t).displayLanguage,k=(0,l.ZQJ)({en:{addLayer:"Add Layer"},fr:{addLayer:"Ajouter Couche"}}),N={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},A=a.map(t).legend.createLegend();return c((function(){return O((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.map(t).layer.geoviewLayers)})),a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,(function(){b(!1)}),t,n.buttonPanelId),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,t,n.buttonPanelId)}}),[a,n.buttonPanelId,t]),(0,v.jsxs)(P,{sx:N.mainContainer,children:[h&&(0,v.jsx)(g,{mapId:t,setAddLayerVisible:b}),(0,v.jsx)("div",{style:{display:h?"none":"block"},children:(0,v.jsx)(A,{})}),(0,v.jsxs)(P,{sx:N.addLayerSection,onClick:function(){return b((function(e){return!e}))},children:[(0,v.jsx)(S,{children:k[L].addLayer}),(0,v.jsx)(w,{children:(0,v.jsx)(C,{})})]})]})},E=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),S=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var C=window,P=function(e){(0,o.Z)(n,e);var t=w(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,u.Z)((0,i.Z)(o),"schema",(function(){return E})),(0,u.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,l.ZQJ)(S)})),(0,u.Z)((0,i.Z)(o),"translations",(0,l.ZQJ)({en:{layersPanel:"Layers"},fr:{layersPanel:"Couches"}})),(0,u.Z)((0,i.Z)(o),"added",(function(){var e,t,n,r,a,i=o.pluginProps.mapId,s=C.cgpv,c=s.api,u=s.ui.elements.LayersOutlinedIcon,l=c.map(i).displayLanguage;a=null===(e=o.configObj)||void 0===e||null===(t=e.isOpen)||void 0===t?void 0:t.large;var p={id:"layersPanelButton",tooltip:o.translations[l].layersPanel,tooltipPlacement:"right",children:(0,v.jsx)(u,{}),visible:!0},d={title:o.translations[l].layersPanel,icon:'<i class="material-icons">layers</i>',width:200,status:a};o.buttonPanel=c.map(i).appBarButtons.createAppbarPanel(p,d,null),null===(n=o.buttonPanel)||void 0===n||null===(r=n.panel)||void 0===r||r.changeContent((0,v.jsx)(O,{buttonPanel:o.buttonPanel,mapId:i}))})),o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=C.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(l.Vw$);C.plugins=C.plugins||{},C.plugins["layers-panel"]=(0,l.RFZ)(P)}},e=>{var t;t=34249,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map