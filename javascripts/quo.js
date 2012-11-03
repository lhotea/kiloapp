(function(){var a;a=function(){var i,h,b;h=[];b=function(f,n){f=f||h;f.__proto__=b.prototype;f.selector=n||"";return f};i=function(f,n){var p;if(f){p=i.getDOMObject(f,n);if(n)f+=" "+n;return b(p,f)}else return b()};i.extend=function(f){Array.prototype.slice.call(arguments,1).forEach(function(n){var p,s;s=[];for(p in n)s.push(f[p]=n[p]);return s});return f};b.prototype=i.fn={};return i}();window.Quo=a;"$$"in window||(window.$$=a)}).call(this);(function(){(function(a){var i,h,b,f,n,p,s,r;i=[];f=Object.prototype;b=/^\s*<(\w+|!)[^>]*>/;n=document.createElement("table");p=document.createElement("tr");h={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:p,th:p,"*":document.createElement("div")};a.toType=function(j){return f.toString.call(j).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};a.isOwnProperty=function(j,m){return f.hasOwnProperty.call(j,m)};a.getDOMObject=function(j,m){var k,c,d;k=null;c=[1,9,11];d=a.toType(j);if(d==="array")k=
s(j);else if(d==="string"&&b.test(j)){k=a.fragment(j.trim(),RegExp.$1);j=null}else if(d==="string"){k=a.query(document,j);if(m)k=k.length===1?a.query(k[0],m):a.map(function(){return a.query(k,m)})}else if(c.indexOf(j.nodeType)>=0||j===window){k=[j];j=null}return k};a.map=function(j,m){var k,c,d;d=[];k=void 0;if(a.toType(j)==="array")for(k=0;k<j.length;){c=m(j[k],k);c!=null&&d.push(c);k++}else for(k in j){c=m(j[k],k);c!=null&&d.push(c)}return r(d)};a.each=function(j,m){var k;k=void 0;if(a.toType(j)===
"array")for(k=0;k<j.length;){if(m.call(j[k],k,j[k])===false)break;k++}else for(k in j)if(m.call(j[k],k,j[k])===false)break;return j};a.mix=function(){var j,m,k,c,d;k={};j=0;for(c=arguments.length;j<c;){m=arguments[j];for(d in m)if(a.isOwnProperty(m,d)&&m[d]!==undefined)k[d]=m[d];j++}return k};a.fragment=function(j,m){var k;if(m==null)m="*";m in h||(m="*");k=h[m];k.innerHTML=""+j;return a.each(Array.prototype.slice.call(k.childNodes),function(){return k.removeChild(this)})};a.fn.map=function(j){return a.map(this,
function(m,k){return j.call(m,k,m)})};a.fn.instance=function(j){return this.map(function(){return this[j]})};a.fn.filter=function(j){return a([].filter.call(this,function(m){return m.parentNode&&a.query(m.parentNode,j).indexOf(m)>=0}))};a.fn.forEach=i.forEach;a.fn.indexOf=i.indexOf;s=function(j){return j.filter(function(m){return m!==void 0&&m!==null})};r=function(j){return j.length>0?[].concat.apply([],j):j}})(Quo)}).call(this);(function(){(function(a){a.fn.attr=function(i,h){return a.toType(i)==="string"&&h===void 0?this[0].getAttribute(i):this.each(function(){return this.setAttribute(i,h)})};a.fn.data=function(i,h){return this.attr("data-"+i,h)};a.fn.val=function(i){return a.toType(i)==="string"?this.each(function(){return this.value=i}):this.length>0?this[0].value:null};a.fn.show=function(){return this.style("display","block")};a.fn.hide=function(){return this.style("display","none")};a.fn.height=function(){return this.offset().height};
a.fn.width=function(){return this.offset().width};a.fn.offset=function(){var i;i=this[0].getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset,width:i.width,height:i.height}};a.fn.remove=function(){return this.each(function(){if(this.parentNode!=null)return this.parentNode.removeChild(this)})}})(Quo)}).call(this);(function(){(function(a){var i,h,b,f,n,p,s;b=null;i=/WebKit\/([\d.]+)/;h={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,blackberry:/(BlackBerry).*Version\/([\d.]+)/,webos:/(webOS|hpwOS)[\s\/]([\d.]+)/};a.isMobile=function(){b=b||n();return b.isMobile};a.environment=function(){return b=b||n()};a.isOnline=function(){return navigator.onLine};n=function(){var r,j;j=navigator.userAgent;r={};r.browser=f(j);r.os=p(j);r.isMobile=r.os?true:false;r.screen=s();return r};
f=function(r){var j;return(j=r.match(i))?j[0]:r};p=function(r){var j,m,k;j=void 0;for(m in h)if(k=r.match(h[m])){j={name:m==="iphone"||m==="ipad"?"ios":m,version:k[2].replace("_",".")};break}return j};s=function(){return{width:window.innerWidth,height:window.innerHeight}}})(Quo)}).call(this);(function(){(function(a){var i;a.fn.text=function(h){return h||a.toType(h)==="number"?this.each(function(){return this.textContent=h}):this[0].textContent};a.fn.html=function(h){var b;b=a.toType(h);return h||b==="number"||b==="null"?this.each(function(){if(b==="string"||b==="number"||b==="null")return this.innerHTML=h;else{this.innerHTML=null;return this.appendChild(h)}}):this[0].innerHTML};a.fn.append=function(h){return this.each(function(){if(a.toType(h)==="string"){if(h)return this.appendChild(i(h))}else return this.insertBefore(h)})};
a.fn.prepend=function(h){return this.each(function(){var b;if(a.toType(h)==="string")return this.innerHTML=h+this.innerHTML;else{b=this.parentNode;return b.insertBefore(h,b.firstChild)}})};a.fn.replaceWith=function(h){return this.each(function(){var b;if(a.toType(h)==="string")h=i(h);(b=this.parentNode)&&b.insertBefore(h,this);return a(this).remove()})};a.fn.empty=function(){return this.each(function(){this.innerHTML=null})};i=function(h){var b;b=document.createElement("div");b.innerHTML=h;return b.firstChild}})(Quo)}).call(this);(function(){(function(a){var i,h;a.query=function(b,f){var n;n=b.querySelectorAll(f);return n=Array.prototype.slice.call(n)};a.fn.find=function(b){var f;f=this.length===1?Quo.query(this[0],b):this.map(function(){return Quo.query(this,b)});return a(f)};a.fn.parent=function(b){var f;f=b?h(this):this.instance("parentNode");return i(f,b)};a.fn.siblings=function(b){var f;f=this.map(function(n,p){return Array.prototype.slice.call(p.parentNode.children).filter(function(s){return s!==p})});return i(f,b)};
a.fn.children=function(b){var f;f=this.map(function(){return Array.prototype.slice.call(this.children)});return i(f,b)};a.fn.get=function(b){return b===undefined?this:this[b]};a.fn.first=function(){return a(this[0])};a.fn.last=function(){return a(this[this.length-1])};a.fn.closest=function(b,f){var n,p;p=this[0];n=a(b);for(n.length||(p=null);p&&n.indexOf(p)<0;)p=p!==f&&p!==document&&p.parentNode;return a(p)};a.fn.each=function(b){this.forEach(function(f,n){return b.call(f,n,f)});return this};h=function(b){var f;
for(f=[];b.length>0;)b=a.map(b,function(n){if((n=n.parentNode)&&n!==document&&f.indexOf(n)<0){f.push(n);return n}});return f};i=function(b,f){return f===undefined?a(b):a(b).filter(f)}})(Quo)}).call(this);(function(){(function(a){var i,h;a.fn.addClass=function(b){return this.each(function(){if(!h(b,this.className)){this.className+=" "+b;return this.className=this.className.trim()}})};a.fn.removeClass=function(b){return this.each(function(){if(b){if(h(b,this.className))return this.className=this.className.replace(b," ").replace(/\s+/g," ").trim()}else return this.className=""})};a.fn.toggleClass=function(b){return this.each(function(){if(h(b,this.className))return this.className=this.className.replace(b,
" ");else{this.className+=" "+b;return this.className=this.className.trim()}})};a.fn.hasClass=function(b){return h(b,this[0].className)};a.fn.style=function(b,f){return f?this.each(function(){return this.style[b]=f}):this[0].style[b]||i(this[0],b)};h=function(b,f){return f.split(/\s+/g).indexOf(b)>=0};i=function(b,f){return document.defaultView.getComputedStyle(b,"")[f]}})(Quo)}).call(this);(function(){(function(a){var i,h,b,f,n,p,s,r,j,m,k;i={TYPE:"GET",MIME:"json"};b={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"};h=0;a.ajaxSettings={type:i.TYPE,async:true,success:{},error:{},context:null,dataType:i.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};a.ajax=function(c){var d,e,l;e=a.mix(a.ajaxSettings,c);if(e.type===i.TYPE)e.url+=a.serializeParameters(e.data,
"?");else e.data=a.serializeParameters(e.data);if(f(e.url))return a.jsonp(e);l=e.xhr();l.onreadystatechange=function(){if(l.readyState===4){clearTimeout(d);return j(l,e)}};l.open(e.type,e.url,e.async);r(l,e);if(e.timeout>0)d=setTimeout(function(){return k(l,e)},e.timeout);if(e.data){c=_serializeParameters(e.data);e.data=c.substr(1,c.length)}try{l.send(e.data)}catch(q){l=q;p("Resource not found",l,e)}return e.async?l:n(l,e)};a.jsonp=function(c){var d,e,l,q;if(c.async){e="jsonp"+ ++h;l=document.createElement("script");
q={abort:function(){a(l).remove();if(e in window)return window[e]={}}};d=void 0;window[e]=function(v){clearTimeout(d);a(l).remove();delete window[e];return m(v,q,c)};l.src=c.url.replace(/=\?/,"="+e);a("head").append(l);if(c.timeout>0)d=setTimeout(function(){return k(q,c)},c.timeout);return q}else return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")};a.get=function(c,d,e,l){return a.ajax({url:c,data:d,success:e,dataType:l})};a.post=function(c,d,e,l){return s("POST",c,d,e,l)};
a.put=function(c,d,e,l){return s("PUT",c,d,e,l)};a["delete"]=function(c,d,e,l){return s("DELETE",c,d,e,l)};a.json=function(c,d,e){return a.ajax({url:c,data:d,success:e,dataType:i.MIME})};a.serializeParameters=function(c,d){var e,l;if(d==null)d="";l=d;for(e in c)if(c.hasOwnProperty(e)){if(l!==d)l+="&";l+=e+"="+c[e]}return l===d?"":l};j=function(c,d){if(c.status>=200&&c.status<300||c.status===0)d.async&&m(n(c,d),c,d);else p("QuoJS.ajax: Unsuccesful request",c,d)};m=function(c,d,e){e.success.call(e.context,
c,d)};p=function(c,d,e){e.error.call(e.context,c,d,e)};r=function(c,d){var e;if(d.contentType)d.headers["Content-Type"]=d.contentType;if(d.dataType)d.headers.Accept=b[d.dataType];for(e in d.headers)c.setRequestHeader(e,d.headers[e])};k=function(c,d){c.onreadystatechange={};c.abort();p("QuoJS.ajax: Timeout exceeded",c,d)};s=function(c,d,e,l,q){return a.ajax({type:c,url:d,data:e,success:l,dataType:q,contentType:"application/x-www-form-urlencoded"})};n=function(c,d){var e;if(e=c.responseText)if(d.dataType===
i.MIME)try{e=JSON.parse(e)}catch(l){e=l;p("QuoJS.ajax: Parse Error",c,d)}else if(d.dataType==="xml")e=c.responseXML;return e};f=function(c){return/=\?/.test(c)}})(Quo)}).call(this);(function(){(function(a){var i,h;i=/complete|loaded|interactive/;h={touch:"touchstart",tap:"tap"};["touch","tap"].forEach(function(b){a.fn[b]=function(f){return a(document.body).delegate(this.selector,h[b],f)};return this});a.fn.on=function(b,f,n){return f===undefined||a.toType(f)==="function"?this.bind(b,f):this.delegate(f,b,n)};a.fn.off=function(b,f,n){return f===undefined||a.toType(f)==="function"?this.unbind(b,f):this.undelegate(f,b,n)};a.fn.ready=function(b){i.test(document.readyState)?b(a):
a.fn.addEvent(document,"DOMContentLoaded",function(){return b(a)});return this}})(Quo)}).call(this);(function(){(function(a){var i,h,b,f,n,p,s,r,j,m,k;i=1;f={};b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};h={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",tap:"click",doubletap:"dblclick",orientationchange:"resize"};a.Event=function(c,d){var e;e=document.createEvent("Events");e.initEvent(c,true,true,null,null,null,null,null,null,null,null,null,null,null,null);if(d)for(var l in d)e[l]=d[l];return e};
a.fn.bind=function(c,d){return this.each(function(){m(this,c,d)})};a.fn.unbind=function(c,d){return this.each(function(){k(this,c,d)})};a.fn.delegate=function(c,d,e){return this.each(function(l,q){m(q,d,e,c,function(v){return function(y){var x,u;if(u=a(y.target).closest(c,q).get(0)){x=a.extend(n(y),{currentTarget:u,liveFired:q});return v.apply(u,[x].concat([].slice.call(arguments,1)))}}})})};a.fn.undelegate=function(c,d,e){return this.each(function(){k(this,d,e,c)})};a.fn.trigger=function(c,d){if(a.toType(c)===
"string")c=a.Event(c,d);return this.each(function(){this.dispatchEvent(c)})};a.fn.addEvent=function(c,d,e){return c.addEventListener?c.addEventListener(d,e,false):c.attachEvent?c.attachEvent("on"+d,e):c["on"+d]=e};a.fn.removeEvent=function(c,d,e){return c.removeEventListener?c.removeEventListener(d,e,false):c.detachEvent?c.detachEvent("on"+d,e):c["on"+d]=null};m=function(c,d,e,l,q){var v;d=s(d);v=j(c);v=f[v]||(f[v]=[]);q=q&&q(e,d);d={event:d,callback:e,selector:l,proxy:p(q,e,c),delegate:q,index:v.length};
v.push(d);return a.fn.addEvent(c,d.event,d.proxy)};k=function(c,d,e,l){var q;d=s(d);q=j(c);return r(q,d,e,l).forEach(function(v){delete f[q][v.index];return a.fn.removeEvent(c,v.event,v.proxy)})};j=function(c){return c._id||(c._id=i++)};s=function(c){return(a.isMobile()?c:h[c])||c};p=function(c,d,e){d=c||d;return function(l){var q;q=d.apply(e,[l].concat(l.data));q===false&&l.preventDefault();return q}};r=function(c,d,e,l){return(f[c]||[]).filter(function(q){return q&&(!d||q.event===d)&&(!e||q.fn===
e)&&(!l||q.selector===l)})};n=function(c){var d;d=a.extend({originalEvent:c},c);a.each(b,function(e,l){d[e]=function(){this[l]=function(){return true};return c[e].apply(c,arguments)};return d[l]=function(){return false}});return d}})(Quo)}).call(this);(function(){(function(a){var i,h,b,f,n,p,s,r,j,m,k,c,d,e,l,q,v,y,x,u;b={};h=[];i=[];f=void 0;["doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"].forEach(function(g){a.fn[g]=function(o){return this.on(g,o)}});a(document).ready(function(){return e()});e=function(){var g;g=a(document.body);g.bind("touchstart",v);g.bind("touchmove",
q);g.bind("touchend",l);return g.bind("touchcancel",r)};v=function(g){var o,t,w;t=Date.now();o=t-(b.last||t);f&&clearTimeout(f);w=k(g);g=w.length;h=m(w,g);b.el=a(y(w[0].target));b.fingers=g;b.last=t;if(g===1){b.isDoubleTap=o>0&&o<=250;return setTimeout(c,650)}else if(g===2){b.initial_angle=parseInt(n(h),10);b.initial_distance=parseInt(j(h),10);b.angle_difference=0;return b.distance_difference=0}};q=function(g){var o,t;if(b.el){t=k(g);o=t.length;if(o===b.fingers){i=m(t,o);d(g)&&u("swiping");if(o===
2){s();p();g.preventDefault()}}else r()}return true};d=function(){var g,o;g=false;if(i[0]){g=Math.abs(h[0].x-i[0].x)>30;o=Math.abs(h[0].y-i[0].y)>30;g=b.el&&(g||o)}return g};l=function(){var g;if(b.isDoubleTap){u("doubleTap");return r()}else if(b.fingers===1)if(d()){u("swipe");g=x(h[0].x,i[0].x,h[0].y,i[0].y);u("swipe"+g);return r()}else{u("tap");return f=setTimeout(r,250)}else if(b.fingers===2){g=false;if(b.angle_difference!==0){u("rotate",{angle:b.angle_difference});g=b.angle_difference>0?"rotateRight":
"rotateLeft";u(g,{angle:b.angle_difference});g=true}if(b.distance_difference!==0){u("pinch",{angle:b.distance_difference});g=b.distance_difference>0?"pinchOut":"pinchIn";u(g,{distance:b.distance_difference});g=true}if(!g&&i[0])if(Math.abs(h[0].x-i[0].x)>10||Math.abs(h[0].y-i[0].y)>10){u("drag");g=x(h[0].x,i[0].x,h[0].y,i[0].y);u("drag"+g)}return r()}};m=function(g,o){var t,w;w=[];for(t=0;t<o;){w.push({x:g[t].pageX,y:g[t].pageY});t++}return w};s=function(){var g,o,t;g=parseInt(n(i),10);g=parseInt(b.initial_angle-
g,10);if(Math.abs(g)>20||b.angle_difference!==0){o=0;for(t=b.angle_difference<0?"-":"+";Math.abs(g-b.angle_difference)>90&&o++<10;)eval("diff "+t+"= 180;");b.angle_difference=parseInt(g,10);return u("rotating",{angle:b.angle_difference})}};p=function(){var g;g=parseInt(j(i),10);g=b.initial_distance-g;if(Math.abs(g)>10){b.distance_difference=g;return u("pinching",{distance:g})}};u=function(g,o){if(b.el){o=o||{};if(i[0]){o.iniTouch=b.fingers>1?h:h[0];o.currentTouch=b.fingers>1?i:i[0]}return b.el.trigger(g,
o)}};r=function(){h=[];i=[];b={};return clearTimeout(f)};n=function(g){var o;o=g[0];g=g[1];o=Math.atan((g.y-o.y)*-1/(g.x-o.x))*(180/Math.PI);return o<0?o+180:o};j=function(g){var o;o=g[0];g=g[1];return Math.sqrt((g.x-o.x)*(g.x-o.x)+(g.y-o.y)*(g.y-o.y))*-1};k=function(g){return a.isMobile()?g.touches:[g]};y=function(g){return"tagName"in g?g:g.parentNode};x=function(g,o,t,w){return Math.abs(g-o)>=Math.abs(t-w)?g-o>0?"Left":"Right":t-w>0?"Up":"Down"};c=function(){if(b.last&&Date.now()-b.last>=650)return u("hold")}})(Quo)}).call(this);