import{u as s,v as i,w as h,L as o,m as d,s as l}from"./index-a6c97245.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(o(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(a=>{d(a)||l.getLogger(this).error(a)})}),"RefreshableLayerView")}};return s([i()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};
