import{u as t,v as o,w as r,gr as p}from"./index-a6c97245.js";let e=class extends p{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const s=this.get("tileStore.tileScheme.spatialReference");return s&&s.toJSON()||null}};t([o({readOnly:!0})],e.prototype,"supportsTileUpdates",null),t([o({constructOnly:!0})],e.prototype,"remoteClient",void 0),t([o({constructOnly:!0})],e.prototype,"service",void 0),t([o()],e.prototype,"spatialReference",null),t([o({constructOnly:!0})],e.prototype,"tileInfo",void 0),t([o({constructOnly:!0})],e.prototype,"tileStore",void 0),e=t([r("esri.views.2d.layers.features.processors.BaseProcessor")],e);const i=e;export{i as p};