import{g9 as p,bf as c,bz as m,g6 as F,ag as f,bY as g,eX as E}from"./index-a6c97245.js";const a="Layer does not support extent calculation.";function j(o,e){var u,s;const r=o.geometry,t=o.toJSON(),n=t;if(r!=null&&(n.geometry=JSON.stringify(r),n.geometryType=E(r),n.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(n.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(s=t.topFilter)!=null&&s.orderByFields&&(n.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(n.topFilter=JSON.stringify(n.topFilter)),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","):delete n.outFields,t.outSR?n.outSR=t.outSR.wkid||JSON.stringify(t.outSR):r&&t.returnGeometry&&(n.outSR=n.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const y=t.timeExtent,{start:i,end:l}=y;i==null&&l==null||(n.time=i===l?i:`${i??"null"},${l??"null"}`),delete t.timeExtent}return n}async function O(o,e,r,t){const n=await d(o,e,"json",t);return p(e,r,n.data),n}async function S(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",r,{returnIdsOnly:!0})}async function b(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(a);if(n.hasOwnProperty("count"))throw new Error(a);return t})}function w(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,r,t={},n={}){const u=typeof o=="string"?c(o):o,s=e.geometry?[e.geometry]:[];return t.responseType=r==="pbf"?"array-buffer":"json",m(s,null,t).then(y=>{const i=y&&y[0];i!=null&&((e=e.clone()).geometry=i);const l=F({...u.query,f:r,...n,...j(e,n)});return f(g(u.path,"queryTopFeatures"),{...t,query:{...l,...t.query}})})}export{S as d,w as m,b as p,O as y};