'use strict';(function(){function m(a,b){c?self.postMessage(a,b):n.postMessage(a,b)}function p(a,b){a||console.error("workerapi: No callback was provided to onMessage!");if(b)if(c)b.onmessage=a;else b.on("message",a);else if(c)self.onmessage=a;else n.on("message",a)}function d(a,b,r){b||(b=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10),k++,b=`${b}-${k}`,1E5<k&&(k=0));return{workerId:r,messageId:b,message:a}}let c="undefined"!==typeof self,n;c||(n=require("worker_threads").parentPort);
let k=0,q=a=>{a=(a-1)/127-1;.008>Math.abs(a)&&(a=0);return a/2.5},l,t=a=>{const b=a.data?a.data:a;if(b.message)switch(b.message.type){case "GET_CONSTANTS_DONE":m(d(b.message,b.messageId));break;case "UPDATED":{const a={type:"UPDATED",numberOfSamples:b.message.numberOfSamples,fps:b.message.fps,allowFastSpeedStretching:b.message.allowFastSpeedStretching},c=[];["audioBuffer","channel1Buffer","channel2Buffer","channel3Buffer","channel4Buffer"].forEach(d=>{if(b.message[d]){{var f=new Uint8Array(b.message[d]);
var g=b.message.numberOfSamples;const a=new Float32Array(g);var h=new Float32Array(g);let c=0;g*=2;for(var e=0;e<g;e+=2)a[c]=q(f[e]),c++;c=0;for(e=1;e<g;e+=2)h[c]=q(f[e]),c++;f=a.buffer;h=h.buffer}a[d]={};a[d].left=f;a[d].right=h;c.push(f);c.push(h)}});m(d(a),c)}}};p(a=>{a=a.data?a.data:a;switch(a.message.type){case "CONNECT":l=a.message.ports[0];p(t,l);m(d(void 0,a.messageId));break;case "GET_CONSTANTS":l.postMessage(d(a.message,a.messageId));break;case "AUDIO_LATENCY":l.postMessage(d(a.message,
a.messageId));break;default:console.log(a)}})})()
