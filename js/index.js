// Yeah! No Javascript.
// Inspired by https://dribbble.com/shots/343597-Switch-button

// Works better with Google Chrome
// QQdevice
typeof Array.prototype.forEach!="function"&&(Array.prototype.forEach=function(b,c){for(var a=0,d=this.length;a<d;a++){typeof b==="function"&&Object.prototype.hasOwnProperty.call(this,a)&&b.call(c,this[a],a,this)}});typeof Array.prototype.map!="function"&&(Array.prototype.map=function(b,d){var c=[];if(typeof b==="function"){for(var a=0,e=this.length;a<e;a++){c.push(b.call(d,this[a],a,this))}}return c});typeof Array.prototype.filter!="function"&&(Array.prototype.filter=function(b,d){var c=[];if(typeof b==="function"){for(var a=0,e=this.length;a<e;a++){b.call(d,this[a],a,this)&&c.push(this[a])}}return c});typeof Array.prototype.indexOf!="function"&&(Array.prototype.indexOf=function(d,b){var c=-1;b=b*1||0;for(var a=0,e=this.length;a<e;a++){if(a>=b&&this[a]===d){c=a;break}}return c});typeof Array.prototype.lastIndexOf!="function"&&(Array.prototype.lastIndexOf=function(e,b){var c=-1,d=this.length;b=b*1||d-1;for(var a=d-1;a>-1;a--){if(a<=b&&this[a]===e){c=a;break}}return c});window.JsBridge=function(a,i){a=a||{};a=a||{};a.iOS=/iPad|iPhone|iPod/.test(navigator.userAgent);a.android=navigator.userAgent.indexOf("Android")>=0;a.iOS&&a.android&&(a.iOS=false);var e=[];function j(){var k=document.createElement("iframe");k.className="_jsb";k.style.cssText="position:absolute;left:0;top:0;width:0;height:0;visibility:hidden;";k.frameBorder="0";document.body.appendChild(k);return k}a._createMultiCallback=function(k,l){return function(m){k.result[l]=m;k.count--;k.count==0&&k.callback&&(m=k.callback(k.result),m&&typeof m=="object"&&a.multiCall.apply(a,[m].concat(k.callbackChain)))}};a._callWithScheme=a.callWithScheme=function(l){e=document.querySelectorAll("iframe._jsb");var k;for(var m=0;k=e[m];m++){if(!k._busy){break}}(!k||k._busy)&&(k=j());k._busy=true;k.src=l;setTimeout(function(){k._busy=false},0);window.device&&device.log(decodeURIComponent(l),"#0ff")};var b=[],f=function(k){b=[k]};a.onResume=f;a.addResumeEventListener=function(k){var l=b.indexOf(k);l<0&&b.push(k)};a.removeResumeEventListener=function(l){var k=b.indexOf(l);k>=0&&(b=b.slice(0,k).concat(b.slice(k+1)))};a._onResume=function(){a.onResume!=f?typeof a.onResume=="function"?a.onResume():b=[]:b.slice(0).forEach(function(k){k()})};a.ready=false;var g=[];a.onReady=function(k){a.ready?k&&k():k&&g.push(k)};a._readyCallback=function(){if(a.ready){return}a.ready=true;g.slice(0).forEach(function(k){k()})};a._coreReadyCallback=a._readyCallback;var d=1,c={},h=a._call=a.call=function(n){var o=[],m=[],p=false;[].slice.call(arguments,1).forEach(function(q){typeof q=="function"?(m.push(q),p=true):!p&&o.push(q)});var l=["jsbridge:/",n];l.push(d);if(/^deviceapp\/.+/.test(n)&&m[0]){var k=o[0];typeof k=="object"&&k.callback==undefined&&(k[k.callbackKey||"callback"]="JsBridge.callback"+d,delete k.callbackKey);a["callback"+d]=function(q,r){return function(){if(n=="deviceapp/uniAgent"){var s=arguments[0]||{};s.code==undefined&&(s.code=s.businessRet);if(typeof s.data=="string"){try{s.data=JSON.parse(s.data)}catch(u){}}}var t=c[q].callback;t&&t.apply(null,arguments);!r&&delete a["callback"+q]}}(d,k.keepCallback);delete k.keepCallback}o.forEach(function(q){l.push(encodeURIComponent(typeof q=="object"?JSON.stringify(q):q+""))});l=l.join("/");c[d++]={callback:m[0],callbackChain:m.slice(1)};a._callWithScheme(l)};a.multiCall=function(k,o){var l={callback:o,callbackChain:[].slice.call(arguments,2),count:0,result:{}};for(var m in k){var n=k[m];l.count++;h.apply(null,[n.name].concat(n.args||[]).concat([a._createMultiCallback(l,m)]))}};a.callback=function(n,k){if(n=="resume"){a._onResume();return}var l,m,o;k&&k.r==0&&(isFinite(n)?c[n]&&(l=c[n],o=l.callbackChain,m=l.callback&&l.callback(k.result),delete c[n]):k.guid&&c[k.guid]&&(l=c[k.guid],o=l.callbackChain,m=l.callback&&l.callback(k.data),delete c[k.guid]));m&&typeof m=="object"&&h.apply(null,[m.name].concat(m.args||[]).concat(o||[]))};i.QzoneApp={fire:function(k,l){a.callback(k,l)}};a._coreReadyCallback();return a}(window.JsBridge,window);window.Stat=function(o){var d="http://fusionbase.qq.com/cgi-bin/appstage/light_app_report",e=function(r,s,t){var u=new RegExp("(?:^|[?&#])"+r+"=([^?&#]*)","i"),p=u.exec(s||window.location.href),q=p?p[1]:"";return t?q:decodeURIComponent(q)},f=function(q){var p=[];for(var r in q){p.push(encodeURIComponent(r)+"="+encodeURIComponent(q[r]))}p=p.concat([].slice.call(arguments,1));return p.join("&")},h=function(q){var p=document.createElement("img");p.onload=p.onerror=function(){p=null};p.src=q;setTimeout(function(){},1000)},i=function(p){p=p||{};var q=new XMLHttpRequest();q.open("POST",p.url,true);q.withCredentials=true;q.setRequestHeader("Content-Type","application/x-www-form-urlencoded");q.send(f(p.params))},j=function(q){var s=new RegExp("(?:^|;+|\\s+)"+q+"=([^;]*)"),p=document.cookie.match(s);return p?p[1]:""},k=function(){var p=j("uin").match(/\d+/);return p?+p[0]:0},c=navigator.userAgent,a;c.indexOf("Android")>-1?a=1:/iPhone|iPad|iPod/.test(c)?a=2:/Windows Phone|WPDesktop/.test(c)?a=3:a=4;var l=/QQ\/([\d\.]+)/,m=function(p){return p?p[1]:"0"}(c.match(l)),b={platform:a+"",version:m,pid:e("productId"),din:e("din"),uin:k()+""},n={100:{tid:0,list:[]},200:{tid:0,list:[]}},g=function(t,p,r){if(!p||!t){return}var q=n[t];typeof p=="string"&&(p=p.split(","));typeof r=="string"&&(r=r.split(","));for(var s=0,v=p.length;s<v;s++){if(p[s]){var u={platform:b.platform,version:b.version,pid:b.pid,din:b.din,uin:b.uin,via:p[s],reserve1:t};r&&r[s]&&(u.reserve2=r[s]);q.list.push(u)}}!q.tid&&(q.tid=setTimeout(function(){var w=q.list.length;if(!w){return}var x={data:JSON.stringify({list:q.list}),r:Math.random()};w>4?i({url:d,params:x}):h(d+"?"+f(x));q.tid=0;q.list=[]},200))};return{exposure:function(p,q){g(100,p,q)},click:function(p,q){g(200,p,q)}}}(window);window.device=function(e,b,j){var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(ao){var ar=typeof Uint8Array!=="undefined"?Uint8Array:Array,at="+".charCodeAt(0),au="/".charCodeAt(0),an="0".charCodeAt(0),ap="a".charCodeAt(0),aq="A".charCodeAt(0),av="-".charCodeAt(0),aw="_".charCodeAt(0);function k(aA){var az=aA.charCodeAt(0);if(az===at||az===av){return 62}if(az===au||az===aw){return 63}if(az<an){return-1}if(az<an+10){return az-an+26+26}if(az<aq+26){return az-aq}if(az<ap+26){return az-ap+26}}function ax(az){var aA,aF,aG,aB,aD,aE;if(az.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var aH=az.length;aD="="===az.charAt(aH-2)?2:"="===az.charAt(aH-1)?1:0;aE=new ar(az.length*3/4-aD);aG=aD>0?az.length-4:az.length;var aI=0;function aC(aJ){aE[aI++]=aJ}for(aA=0,aF=0;aA<aG;aA+=4,aF+=3){aB=k(az.charAt(aA))<<18|k(az.charAt(aA+1))<<12|k(az.charAt(aA+2))<<6|k(az.charAt(aA+3));aC((aB&0xFF0000)>>16);aC((aB&0xFF00)>>8);aC(aB&0xFF)}aD===2?(aB=k(az.charAt(aA))<<2|k(az.charAt(aA+1))>>4,aC(aB&0xFF)):aD===1&&(aB=k(az.charAt(aA))<<10|k(az.charAt(aA+1))<<4|k(az.charAt(aA+2))>>2,aC(aB>>8&0xFF),aC(aB&0xFF));return aE}function ay(az){var aD,aE=az.length%3,aA="",aB,aF;function aC(aH){return G.charAt(aH)}function aG(aH){return aC(aH>>18&0x3F)+aC(aH>>12&0x3F)+aC(aH>>6&0x3F)+aC(aH&0x3F)}for(aD=0,aF=az.length-aE;aD<aF;aD+=3){aB=(az[aD]<<16)+(az[aD+1]<<8)+az[aD+2];aA+=aG(aB)}switch(aE){case 1:aB=az[az.length-1];aA+=aC(aB>>2);aA+=aC(aB<<4&0x3F);aA+="==";break;case 2:aB=(az[az.length-2]<<8)+az[az.length-1];aA+=aC(aB>>10);aA+=aC(aB>>4&0x3F);aA+=aC(aB<<2&0x3F);aA+="=";break}return aA}ao.toByteArray=ax;ao.fromByteArray=ay}(typeof d==="undefined"?this.base64={}:d);var H=navigator.userAgent;e.QQVersion=function(){var k=H.match(/QQ\/([\d\.]+)/);return k?k[1]:"0"}();var s=function(an,ao){an=String(an).split(".");ao=String(ao).split(".");try{for(var k=0,ar=Math.max(an.length,ao.length);k<ar;k++){var ap=isFinite(an[k])&&Number(an[k])||0,aq=isFinite(ao[k])&&Number(ao[k])||0;if(ap<aq){return-1}else if(ap>aq){return 1}}}catch(at){return-1}return 0},t=function(k){return typeof k=="string"?document.getElementById(k):k},a=function(k){return null===k?"null":void 0===k?"undefined":Object.prototype.toString.call(k).slice(8,-1).toLowerCase()},g=function(ao,ap,aq){var ar=new RegExp("(?:^|[?&#])"+ao+"=([^?&#]*)","i"),k=ar.exec(ap||window.location.href),an=k?k[1]:"";return aq?an:decodeURIComponent(an)},u=function(an){var k=[];for(var ao in an){k.push(encodeURIComponent(ao)+"="+encodeURIComponent(an[ao]))}k=k.concat([].slice.call(arguments,1));return k.join("&")},I=function(an){var ao=new RegExp("(?:^|;+|\\s+)"+an+"=([^;]*)"),k=document.cookie.match(ao);return k?k[1]:""},J=function(ao,ap,aq,ar,k){if(k){var an=new Date();an.setTime(an.getTime()+3600000*k)}var at=k?"expires="+an.toGMTString()+"; ":"",au="path="+(ar||"/")+"; ",av="domain="+(aq||document.domain)+";";document.cookie=ao+"="+ap+"; "+at+au+av},o=function(k,an,ap,aq){if((k=String(k)).length<an){var ao=new Array(an-k.length);ao[aq?"unshift":"push"](k);k=ao.join(ap||"0")}return k},v=function(k){var an=new XMLHttpRequest();k.method=(k.method||"GET").toUpperCase();k.method=="GET"&&(k.url+=(k.url.indexOf("?")>-1?"&":"?")+u(k.params));an.open(k.method,k.url,true);an.onload=function(){var ao;try{ao=JSON.parse(an.responseText)}catch(ap){ao={code:-998,msg:"??бу???иибьбъ????бшб└иибфгд",responseText:an.responseText}}ao.code==undefined&&(ao.code=ao.ret);k.onSuccess&&k.onSuccess(ao);k.callback&&k.callback(ao)};an.onerror=function(){var ao={code:-999,msg:"иибебд?б└??бшб└иибфгд"};k.onError&&k.onError(ao);k.callback&&k.callback(ao)};k.withCredentials&&(an.withCredentials=true);k.method=="POST"?k.requestType=="json"?(an.setRequestHeader("Content-Type","text/plain"),an.send(JSON.stringify(k.params))):window.FormData&&k.params instanceof window.FormData?an.send(k.params):(an.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),an.send(u(k.params))):an.send(null)};var K=["log","checkApi","xhr","sso","getLocation","getPicture","getLocalImage","showActionSheet","operateSendFile","screenShot"],x={"5.4":["onReceive","onChange","send","startVideoChat","startVideoMessage","showToast","query","openApi"],"5.5":["sendPicture","takePicture","openDeviceMsg"],"5.6":["openCameraControl","sendShareMsg"],"5.7":["openCameraControlEx"],"5.8":["onPushData"],"5.9":["onServerPush"],"6.2":["setTitlebar","sendFile","onAVSessionConnect","sendCameraCmd"]},y={"5.6":["onReceive","onChange","send","startVideoChat","startVideoMessage","showToast"],"5.8":["openDeviceMsg","openCameraControl","onPushData","query","openApi"],"5.9":["onServerPush","sendPicture","takePicture","sendShareMsg"],"6.2":["setTitlebar","sendFile"]},z=function(ao,an){for(var ap in an){if(an[ap].indexOf(ao)>-1){return true}}return false},c={success:0,args:-1,version:-2,iOS:-3,platform:-4},l={0:"?быбьии??????бе?","-1":"??o?бубо??бнии|?????????бу??иC?????буижб▒?иибебе","-2":"??o?o???бф?гд???бу????б▒бзиибегд???ии?????иибебд?бн??бу??бы???oQQ????oбь??бу??А?иCбу?бы????","-3":"иибегд???ии?????????б▒бе???iOS?бы??????бе?бн?????б▒бзAndroid?бы???oQQ??б░ижa?","-4":"иибегд???ии?????????б▒бе???иибегд?13??бу???иибебд????б▒бз??А?иCбуAndroid/iOS?бы???oQQиж??иибе?"},f=function(an,aq){if(device.debug!==true){return}an=a(an)!="string"?JSON.stringify(an):an;e.console&&e.console.log("%c"+an,"color:"+(aq||""));var k=t("device-log-dialog");if(!k){document.body.lastElementChild.insertAdjacentHTML("afterEnd",['<div id="device-log-dialog" draggable="true" style="position: fixed;z-index: 99999;top: 10px;left: 10px;font-size: 14px;width: 300px;background-color: rgba(0,0,0,.8);color: #FFF;word-break: break-all;text-shadow: none;">','<div style="padding: 5px;background-color: #000;font-weight: bold;">',"<span>иибу?иибе??бз????</span>",'<span id="device-log-close" style="float: right;color: yellow;">?бн3ижбк-</span>','<span ontouchend="location.reload(true);" style="float: right;color: yellow;margin-right: 10px;">??бд?иCбу</span>','<span ontouchend="device.log(location.href);" style="float: right;color: yellow;margin-right: 10px;">??бу??А</span>',"</div>",'<div style="padding: 5px;max-height: 300px;overflow: auto;"><p style="float: right;">End</p></div>',"</div>"].join(""));k=t("device-log-dialog");var au=t("device-log-close");au.addEventListener("touchend",function(av){av.preventDefault();k.parentNode.removeChild(k)},false);var ar=0,at=0;k.firstElementChild.addEventListener("touchstart",function(aw){var av=aw.changedTouches[0];ar=av.clientX-k.offsetLeft;at=av.clientY-k.offsetTop},false);k.firstElementChild.addEventListener("touchmove",function(av){av.preventDefault();var aw=av.changedTouches[0];k.style.left=aw.clientX-ar+"px";k.style.top=Math.max(0,aw.clientY-at)+"px"},false);var ap=0;k.lastElementChild.addEventListener("touchstart",function(av){var aw=av.changedTouches[0];ap=aw.clientY},false);k.lastElementChild.addEventListener("touchmove",function(av){av.stopPropagation();var aw=av.changedTouches[0];(aw.clientY>ap&&this.scrollTop<=0||aw.clientY<ap&&this.scrollTop+this.offsetHeight>=this.scrollHeight)&&av.preventDefault()},false)}var ao=new Date();k.lastElementChild.insertAdjacentHTML("afterBegin",['<p style="border-bottom: 1px dashed gray;width: 290px;">','<span style="font-weight:bold;">'+(o(ao.getHours(),2)+":"+o(ao.getMinutes(),2)+":"+o(ao.getSeconds(),2)+"."+o(ao.getMilliseconds(),3))+"</span>: ",'<span style="color:'+(aq||"")+';">'+an+"</span>","</p>"].join(""))},A=function(k){if(a(k)!="object"||a(k.list)!="array"||a(k.onSuccess)!="function"){return c.args}var an={},ao=b.iOS?y:b.android?x:{};k.list.forEach(function(ap){an[ap]=false;if(K.indexOf(ap)>-1){an[ap]=true}else{for(var aq in ao){if(s(e.QQVersion,aq)>=0&&ao[aq].indexOf(ap)>-1){an[ap]=true;break}}}});k.onSuccess(an)},L=function(an,ao){var k;device.noCheck?k=ao?ao():0:A({list:[an],onSuccess:function(ap){ap[an]?k=ao?ao():0:b.iOS&&z(an,x)&&!z(an,y)?(k=c.iOS,n(l[k])):b.android||b.iOS?(k=c.version,n(l[k])):(k=c.platform,f(l[k],"red"))}});k=k||c.success;return{code:k,msg:l[k]}},h=I("iot_send_id")||0,p=h,B=[],C=[],D=[],E=[],F=[],w=0,i={},m={},q={};e.pushData=function(k){k=a(k)=="string"?JSON.parse(k):k;f("pushData: "+JSON.stringify(k),"yellow");B.forEach(function(an){an(k)})};e.serverPush=function(k){k=a(k)=="string"?JSON.parse(k):k;f("serverPush: "+JSON.stringify(k),"yellow");C.forEach(function(an){an(k)})};e.onReceiveDataPoint=function(k){k=a(k)=="string"?JSON.parse(k):k;k.type=="bytearray"&&(k.value=base64.toByteArray(k.value));f("onReceiveDataPoint: "+JSON.stringify(k),"lime");D.forEach(function(ao){ao(k)});var an=k.seq;an&&i[an]&&(k.msg="??гд?б▒???????",i[an](k),delete i[an])};e.onDeviceInfoChange=function(k){k=a(k)=="string"?JSON.parse(k):k;f("onDeviceInfoChange: "+JSON.stringify(k),"yellow");E.forEach(function(an){an(k)})};e.onSendDataPointResult=function(k){k=a(k)=="string"?JSON.parse(k):k;var an=k.cookie;k.sendResult==1?(k.msg=k.msg||"??боижА???????",f("onSendDataPointResult: "+JSON.stringify(k),"lime"),i[an]&&(i[an](k),m[an]&&delete i[an])):(k.msg=k.msg||(k.sendResult==2?"??боижА?ижбщбо???ии??иж??":"??боижА??бшб└иибфгд"),f("onSendDataPointResult: "+JSON.stringify(k),"red"),q[an]&&(q[an](k),delete q[an]))};e.onAckDataPoint=function(k){k=a(k)=="string"?JSON.parse(k):k;var an=k.cookie;k.msg=k.msg||"??гд?б▒???????";f("onAckDataPoint: "+JSON.stringify(k),"lime");m[an]&&(m[an](k),delete m[an])};e.AVSessionConnect=function(k){k=a(k)=="string"?JSON.parse(k):k;w=k.code||0;k.msg=k.msg||(w==1?"иибь?ижбщбоии????гд?бд2??o???":"иибь?ижбщбоии????гд??a??o???");f("AVSessionConnect: "+JSON.stringify(k),"yellow");F.forEach(function(an){an(k)});w!=1&&n("иибь?ижбщбоии????гдии???2???o?????????ии??????б▒бзиибегд???ии??")};var am=function(k){if(a(k)!="function"){return c.args}B.push(k)},M=function(k){if(a(k)!="function"){return c.args}C.push(k)},N=function(k){if(a(k)!="function"){return c.args}D.push(k)},O=function(k){if(a(k)!="function"){return c.args}E.push(k)},P=function(k,an,ao,ap){a(an)=="function"&&(i[k]=an);a(ao)=="function"&&(m[k]=ao);a(ap)=="function"&&(q[k]=ap)},Q=function(k){if(a(k)!="function"){return c.args}F.push(k)},R=function(k){if(a(k)!="object"||a(k.datapoint)!="array"&&a(k.datapoint)!="object"){return c.args}++p==Math.pow(2,16)&&(p=0);++h==Math.pow(2,16)&&(h=0);J("iot_send_id",h,null,null,0.1);var an={};a(k.datapoint)=="object"?an.datapoint=[k.datapoint]:an.datapoint=k.datapoint;if(s(e.QQVersion,"5.8")>=0){an.cookie=h;a(k.onAck)=="function"&&(an.ack=1)}else if(an.datapoint[0].type==undefined||a(k.onAck)=="function"){n(l[c.version]);return c.version}an.datapoint.forEach(function(ao){s(e.QQVersion,"5.8")<0&&(ao.seq=p,ao.cookie=h,ao.apiName=ao.apiName||"set_data_point",ao.type==undefined&&(a(ao.value)=="number"?ao.type="int32":a(ao.value)=="array"?ao.type="bytearray":ao.type="string"));ao.type=="bytearray"&&(ao.seq=ao.seq!=undefined?ao.seq:p,ao.value=base64.fromByteArray(ao.value))});k.vibrate!=undefined&&(an.vibrate=k.vibrate);k.nfc!=undefined&&(an.nfc=k.nfc);k.lifetime!=undefined&&(an.lifetime=Math.max(1,Math.min(k.lifetime,604800))||604800);P(h,k.onSuccess,k.onAck,k.onError);b.call("deviceapp/sendDataPoint",an)},S=function(k){if(a(k)!="object"||a(k.list)!="array"||a(k.onSuccess)!="function"||k.onError!==undefined&&a(k.onError)!="function"){return c.args}k.interval!=undefined&&(k.interval=Math.max(1000,k.interval));var an=[];k.list.forEach(function(ap){a(ap)=="object"?(ap.propertyid=+ap.id,delete ap.id,ap.num!=undefined?(ap.num=ap.num+"",ap.type="1"):ap.begin_time!=undefined||ap.end_time!=undefined?ap.type="2":(ap.num="1",ap.type="1"),an.push(ap)):an.push({propertyid:+ap,type:"1",num:"1"})});var ao=function(){v({url:"http://device.qq.com/cgi-bin/appstage/app_get_datapoint_v3",params:{din:g("din"),appid:g("appid"),openid:g("openId"),openkey:g("openkey"),data:JSON.stringify({data:an}),_r:Math.random()},onSuccess:function(ap){ap.code==0?k.onSuccess(ap):k.onError&&k.onError(ap)},onError:k.onError})};ao();k.interval&&setTimeout(function(){ao();setTimeout(arguments.callee,k.interval)},k.interval)},T=function(k){if(a(k)!="object"||a(k.name)!="string"||k.params!==undefined&&a(k.params)!="object"||a(k.onSuccess)!="function"||k.onError!==undefined&&a(k.onError)!="function"){return c.args}k.params=k.params||{};v({method:"POST",requestType:"json",url:"https://yun.tim.qq.com/v4/SmartDeviceApi/"+k.name+"?apn=0",params:{din:g("din"),appid:g("appid"),pid:g("productId"),openid:g("openId"),openkey:g("openkey"),params:u(k.params)},onSuccess:function(an){an.code==0?k.onSuccess(an):k.onError&&k.onError(an)},onError:k.onError})},n=function(k){k=k||"";b.call("deviceapp/showToast",k)},U=function(k){b.call("deviceapp/startVideoChat",k||"");j.click("QQCONNECT_VIDEO_CALL")},V=function(k){b.call("deviceapp/startVideoMessage",k||"");j.click("QQCONNECT_VIDEO_MESSAGE")},W=function(k){b.call("deviceapp/sendPicture",k||"");j.click("QQCONNECT_PICTURE_UPLODE")},X=function(k){b.call("deviceapp/takePicture",k||"");j.click("QQCONNECT_PHOTO_UPLODE")},Y=function(k){b.call("deviceapp/openDeviceMsg",k||"")},Z=function(k){b.call("deviceapp/openCameraControl",k||"")},aa=function(k){b.call("deviceapp/openCameraControlEx",k||"")},ab=function(k){b.call("deviceapp/sendShareMsg",k||"")},ac=function(k){k=k||{};k.jumpTab=k.jumpTab||0;b.call("deviceapp/sendFile",k)},ad=function(k){b.call("deviceapp/setTitlebar",k||"")},ae=function(k){b.call("deviceapp/sendCameraCmd",k||"")},af=function(k){if(a(k)!="object"||a(k.params)!="object"||k.callback!==undefined&&a(k.callback)!="function"){return c.args}b.iOS&&window.qw?qw.sso.uniAgent(k.params,k.callback):b.call("deviceapp/uniAgent",k.params,k.callback)},ag=function(k){if(a(k)!="object"||k.params!==undefined&&a(k.params)!="object"||a(k.callback)!="function"){return c.args}k.params=k.params||{};b.iOS&&window.mqq?mqq.sensor.getLocation(k.params,k.callback):b.call("deviceapp/getLocation",k.params,k.callback)},ah=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return c.args}b.call("deviceapp/getPicture",k.params,k.callback)},ai=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return c.args}b.iOS&&window.mqq?mqq.media.getLocalImage(k.params,k.callback):b.call("deviceapp/getLocalImage",k.params,k.callback)},aj=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return c.args}b.iOS&&window.mqq?mqq.ui.showActionSheet(k.params,k.callback):(k.params.callbackKey="onclick",b.call("deviceapp/showActionSheet",k.params,k.callback))},ak=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return c.args}k.params.keepCallback=true;b.call("deviceapp/operateSendFile",k.params,k.callback)},al=function(k){if(a(k)!="object"||k.params!==undefined&&a(k.params)!="object"||a(k.callback)!="function"){return c.args}k.params=k.params||{};b.call("deviceapp/screenShot",k.params,k.callback)};j.exposure("QQCONNECT_APP_SHOW");var d={log:f,checkApi:A,onServerPush:M,onReceive:N,onChange:O,send:R,query:S,openApi:T,startVideoChat:U,startVideoMessage:V,showToast:n,sendPicture:W,takePicture:X,openDeviceMsg:Y,openCameraControl:Z,sendShareMsg:ab,setTitlebar:ad,sendFile:ac,onAVSessionConnect:Q,sendCameraCmd:ae};/(qq\.com)$/.test(window.location.hostname)&&(d.openCameraControlEx=aa,d.xhr=v,d.sso=af,d.getLocation=ag,d.getPicture=ah,d.getLocalImage=ai,d.showActionSheet=aj,d.operateSendFile=ak,d.screenShot=al);for(var r in d){a(d[r])=="function"&&(d[r]=function(an,ao){return function(){var k=arguments;return L(an,function(){return ao.apply(d,k)})}}(r,d[r]))}return d}(window,window.JsBridge,window.Stat);/*  |xGv00|b2eae93a81b1dcf0fe46752a9be7c17f */





// light
function light_ON()
{ 
    device.send(
    {
        datapoint : [{ id : 500005, value : "{\"text\":\"ON\"}"}],
        vibrate : 0, // 1为发送时振动，可选
        nfc : 1, // 1为近场通信方式，可选
        lifetime : 20, // 生命期，范围1到604800秒，可选
        onSuccess : function (ret)
                    { // 发送成功回调
                        //device.log('onSuccess: ' + JSON.stringify(ret));
                        //device.showToast("success.");
                        setTimeout("document.getElementById('switch1').disabled=false", 5000);
                    },
        onAck : function (ret)
                { // 接收响应成功回调
                    //device.log('onAck: ' + JSON.stringify(ret));
                    setTimeout("document.getElementById('switch1').disabled=false", 1000);
                    //change_switch_value("switch1","ON");
                },
        onError:function (ret)
                { // 发送失败回调
                  device.log('onError: ' + JSON.stringify(ret));
                  //setTimeout("light_ON()",500);
                  //setTimeout("query_data_point()",3000);
                  device.showToast("ON_F");
                  //change_switch_value("switch1","OFF");
                  setTimeout("document.getElementById('switch1').disabled=false", 1000);
                }
    });
}

function light_OFF()
{ 
    device.send(
    {
        datapoint : [{ id : 500005, value : "{\"text\":\"OFF\"}"}],
        vibrate : 0, // 1为发送时振动，可选
        nfc : 1, // 1为近场通信方式，可选
        lifetime : 20, // 生命期，范围1到604800秒，可选
        onSuccess : function (ret)
                    { // 发送成功回调
                        //device.log('onSuccess: ' + JSON.stringify(ret));
                        //device.showToast("success.");
                        setTimeout("document.getElementById('switch1').disabled=false", 5000);
                    },
        onAck : function (ret)
                { // 接收响应成功回调
                    //device.log('onAck: ' + JSON.stringify(ret));
                    setTimeout("document.getElementById('switch1').disabled=false", 1000);
                    //query_data_point();
                    //change_switch_value("switch1","OFF");
                },
        onError:function (ret)
                {   // 发送失败回调
                    device.log('onError: ' + JSON.stringify(ret));
                    //setTimeout("light_OFF()",500);
                    device.showToast("OFF_F");
                    //setTimeout("query_data_point()",3000);
                    //change_switch_value("switch1","ON");
                    setTimeout("document.getElementById('switch1').disabled=false", 1000);
                    //query_data_point();
                }
    });
}

// query_data_point
function query_data_point()
{
    //var query_id;
    device.query
    ({
        list : [100002293],
        onSuccess : function (ret)
                    { // 查询成功回调
                        //device.log('onSuccess: ' + JSON.stringify(ret));
                        ret.list.forEach(
                                        function (data)
                                        {
                                            switch (data.id)
                                            {
                                                case 100002293:
                                                    change_switch_value("switch1",data.val_list[0].val);
                                                    //document.getElementById('switch1').disabled=false;
                                                break;
                                            }
                                        }
                                        );
                    },
        onError :   function (ret)
                    { // 查询失败回调
                        device.log('onError: ' + JSON.stringify(ret));
                        device.showToast("QUERY_F");
                        setTimeout("query_data_point()",500);
                        
                    }
    });
}

// change switch value
function change_switch_value(id,value)
{
    var value;
    var id;
    var obj = document.getElementById(id);
    if(value=="ON")
        obj.checked=true;
    else
        obj.checked=false;
}

// get switch value
function get_switch_value(id)
{
    var id;
    var obj = document.getElementById(id);
    return obj.checked;
}

// on change switch
function on_change_switch(id)
{
    var id;
    var obj = document.getElementById(id);
    obj.disabled=true;
    if(get_switch_value(id))
        light_ON();    
    else
        light_OFF();
    setTimeout("query_data_point()",1500);
    //setTimeout("document.getElementById('switch1').disabled=false", 5000);
}

//online check
function online_check()
{
    device.onChange(function (data) {
        device.log(JSON.stringify(data));
        if (data.online == 0 || data.unbind)
        {   // do something
            device.showToast("online change.");
        }
    }); 
}



