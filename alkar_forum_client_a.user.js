//#
// Do not touch the text below!!!
//#
//----------------------------------
var version = "2.285";
var required_updater_version = 4;
//----------------------------------
// Check version of updater
if(typeof(updater_version) == 'undefined' || updater_version < required_updater_version)
{
    var msg = '<h1>Скрипт устарел! Чтобы продолжить использовать скрипт, вы должны <a href="http://alkar-forum-client.googlecode.com/svn/trunk/client_autoupdater.user.js">обновить updater</a> © <b>FelikZ</b></h1>';
    var td = $('#logodesc > table tr > td:nth-child(2):first');
    td.removeAttr('align');
    var msg_block = '<div>'+msg+'</div>';
    td.html(msg_block);
    throw msg;
}
//----------------------------------
var cur_location = 0; // 0 - anywhere, 1 - post or pm, 2 - view topic, 3 - view forum, 4 - view forum list
//----------------------------------
var t_pages = new Array();
var t_cur_page = 1;
var t_twits_per_page = 3;
//----------------------------------
var refreshing_now = false;
var ref_int = null;
//----------------------------------
var loc = "" + window.location.href;
//----------------------------------
(function()
{
    if(loc.search(/http:\/\/games.alkar.net\/phpBB/i) < 0)
    {
        return;
    }
    //----------------------------------
    if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/posting/i) > -1 ||
    loc.search(/http:\/\/games.alkar.net\/phpBB.*\/ucp/i) > -1
    )
    {
        cur_location = 1;
    }
    else if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/viewtopic/i) > -1)
    {
        cur_location = 2;
    }
    else if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/viewforum/i) > -1)
    {
        cur_location = 3;
    }
    else if(loc.search(/http:\/\/games.alkar.net\/phpBB.{0,1}(\/|\/index\.php)$/i) > -1)
    {
        cur_location = 4;
    }
})();

// jStorage plugin
(function(f){if(!f||!(f.toJSON||Object.toJSON||window.JSON)){throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!")}var g={},d={jStorage:"{}"},h=null,j=0,l=f.toJSON||Object.toJSON||(window.JSON&&(JSON.encode||JSON.stringify)),e=f.evalJSON||(window.JSON&&(JSON.decode||JSON.parse))||function(m){return String(m).evalJSON()},i=false;_XMLService={isXML:function(n){var m=(n?n.ownerDocument||n:0).documentElement;return m?m.nodeName!=="HTML":false},encode:function(n){if(!this.isXML(n)){return false}try{return new XMLSerializer().serializeToString(n)}catch(m){try{return n.xml}catch(o){}}return false},decode:function(n){var m=("DOMParser" in window&&(new DOMParser()).parseFromString)||(window.ActiveXObject&&function(p){var q=new ActiveXObject("Microsoft.XMLDOM");q.async="false";q.loadXML(p);return q}),o;if(!m){return false}o=m.call("DOMParser" in window&&(new DOMParser())||window,n,"text/xml");return this.isXML(o)?o:false}};function k(){if("localStorage" in window){try{if(window.localStorage){d=window.localStorage;i="localStorage"}}catch(p){}}else{if("globalStorage" in window){try{if(window.globalStorage){d=window.globalStorage[window.location.hostname];i="globalStorage"}}catch(o){}}else{h=document.createElement("link");if(h.addBehavior){h.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(h);h.load("jStorage");var n="{}";try{n=h.getAttribute("jStorage")}catch(m){}d.jStorage=n;i="userDataBehavior"}else{h=null;return}}}b()}function b(){if(d.jStorage){try{g=e(String(d.jStorage))}catch(m){d.jStorage="{}"}}else{d.jStorage="{}"}j=d.jStorage?String(d.jStorage).length:0}function c(){try{d.jStorage=l(g);if(h){h.setAttribute("jStorage",d.jStorage);h.save("jStorage")}j=d.jStorage?String(d.jStorage).length:0}catch(m){}}function a(m){if(!m||(typeof m!="string"&&typeof m!="number")){throw new TypeError("Key name must be string or numeric")}return true}f.jStorage={version:"0.1.5.0",set:function(m,n){a(m);if(_XMLService.isXML(n)){n={_is_xml:true,xml:_XMLService.encode(n)}}g[m]=n;c();return n},get:function(m,n){a(m);if(m in g){if(typeof g[m]=="object"&&g[m]._is_xml&&g[m]._is_xml){return _XMLService.decode(g[m].xml)}else{return g[m]}}return typeof(n)=="undefined"?null:n},deleteKey:function(m){a(m);if(m in g){delete g[m];c();return true}return false},flush:function(){g={};c();try{window.localStorage.clear()}catch(m){}return true},storageObj:function(){function m(){}m.prototype=g;return new m()},index:function(){var m=[],n;for(n in g){if(g.hasOwnProperty(n)){m.push(n)}}return m},storageSize:function(){return j},currentBackend:function(){return i},storageAvailable:function(){return !!i},reInit:function(){var m,o;if(h&&h.addBehavior){m=document.createElement("link");h.parentNode.replaceChild(m,h);h=m;h.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(h);h.load("jStorage");o="{}";try{o=h.getAttribute("jStorage")}catch(n){}d.jStorage=o;i="userDataBehavior"}b()}};k()})(window.jQuery||window.$);
// jOuter plugin
if(typeof($.fn.outer)=='undefined'){$.fn.outer=function(a){if(a){$(a).insertBefore(this);$(this).remove()}else{return $("<div>").append($(this).clone()).html()}}}
// ColorBox v1.3.17.2 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function bc(b){if(!U){P=b,_(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=Z(K.initialWidth,"x"),K.h=Z(K.initialHeight,"y"),X.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),ba(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}X.load(!0)}}function bb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(X.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(X.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,d),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function ba(b,c){c&&c.call(P),a.event.trigger(b)}function _(b){K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.substring(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function $(a){return K.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function Z(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function Y(c,d,e){e=b.createElement("div"),c&&(e.id=f+c),e.style.cssText=d||"";return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;X=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{};if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&bc(f[0]);return f},X.init=function(){z=a(c),r=Y().attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y("Overlay",o?"position:absolute":"").hide(),s=Y("Wrapper"),t=Y("Content").append(A=Y("LoadedContent","width:0; height:0; overflow:hidden"),C=Y("LoadingOverlay").add(Y("LoadingGraphic")),D=Y("Title"),E=Y("Current"),G=Y("Next"),H=Y("Previous"),F=Y("Slideshow").bind(h,bb),I=Y("Close")),s.append(Y().append(Y("TopLeft"),u=Y("TopCenter"),Y("TopRight")),Y(!1,"clear:left").append(v=Y("MiddleLeft"),t,w=Y("MiddleRight")),Y(!1,"clear:left").append(Y("BottomLeft"),x=Y("BottomCenter"),Y("BottomRight"))).children().children().css({"float":"left"}),B=Y(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),t.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){X.next()}),H.click(function(){X.prev()}),I.click(function(){X.close()}),J=G.add(H).add(E).add(F),t.children().removeClass("hover"),q.click(function(){K.overlayClose&&X.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),X.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})},X.remove=function(){r.add(q).remove(),a("."+g).removeData(e).removeClass(g)},X.position=function(a,c){function g(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var d=0,e=0;z.unbind("resize."+f),r.hide(),K.fixed&&!o?r.css({position:"fixed"}):(d=z.scrollTop(),e=z.scrollLeft(),r.css({position:"absolute"})),K.right!==!1?e+=Math.max(z.width()-K.w-O-M-Z(K.right,"x"),0):K.left!==!1?e+=Z(K.left,"x"):e+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?d+=Math.max(b.documentElement.clientHeight-K.h-N-L-Z(K.bottom,"y"),0):K.top!==!1?d+=Z(K.top,"y"):d+=Math.round(Math.max(b.documentElement.clientHeight-K.h-N-L,0)/2),r.show(),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:d,left:e},{duration:a,complete:function(){g(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",c&&c(),setTimeout(function(){z.bind("resize."+f,X.position)},1)},step:function(){g(this)}})},X.resize=function(a){if(S){a=a||{},a.width&&(K.w=Z(a.width,"x")-O-M),a.innerWidth&&(K.w=Z(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=Z(a.height,"y")-N-L),a.innerHeight&&(K.h=Z(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=A.wrapInner("<div style='overflow:auto'></div>").children();K.h=b.height(),b.replaceWith(b.children())}A.css({height:K.h}),X.position(K.transition==="none"?0:K.speed)}},X.prep=function(b){function h(){K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h;return K.h}function g(){K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w;return K.w}if(!!S){var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y("LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function o(){n&&r[0].style.removeAttribute("filter")}var b,c,g,h,i=y.length,k,l;!S||(l=function(){clearTimeout(W),C.hide(),ba(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show(),i>1?(typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",i)).show(),G[K.loop||Q<i-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),b=Q?y[Q-1]:y[i-1],g=Q<i-1?y[Q+1]:y[0],K.slideshow&&F.show(),K.preloading&&(h=a.data(g,e).href||g.href,c=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,c=a.isFunction(c)?c.call(b):c,$(h)&&(a("<img/>")[0].src=h),$(c)&&(a("<img/>")[0].src=c))):J.hide(),K.iframe?(k=a("<iframe/>").addClass(f+"Iframe")[0],K.fastIframe?l():a(k).one("load",l),k.name=f+ +(new Date),k.src=K.href,K.scrolling||(k.scrolling="no"),n&&(k.frameBorder=0,k.allowTransparency="true"),a(k).appendTo(A).one(m,function(){k.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,o):o())},K.transition==="fade"?r.fadeTo(d,0,function(){X.position(0,c)}):X.position(d,c)}},X.load=function(b){var c,d,e=X.prep;T=!0,R=!1,P=y[Q],b||_(),ba(m),ba(i,K.onLoad),K.h=K.height?Z(K.height,"y")-N-L:K.innerHeight&&Z(K.innerHeight,"y"),K.w=K.width?Z(K.width,"x")-O-M:K.innerWidth&&Z(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=Z(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=Z(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,W=setTimeout(function(){C.show()},100),K.inline?(Y().hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):$(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y("Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){X.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},X.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Q<y.length-1?Q+1:0,X.load())},X.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Q?Q-1:y.length-1,X.load())},X.close=function(){S&&!U&&(U=!0,S=!1,ba(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),ba(m),A.remove(),setTimeout(function(){U=!1,ba(l,K.onClosed)},1)}))},X.element=function(){return a(P)},X.settings=d,V=function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),bc(this))},a.fn.delegate?a(b).delegate("."+g,"click",V):a("."+g).live("click",V),a(X.init)})(jQuery,document,this);
// Load css
$('<style>').html("\
    #colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}\
    #cboxOverlay{position:fixed; width:100%; height:100%;}\
    #cboxMiddleLeft, #cboxBottomLeft{clear:left;}\
    #cboxContent{position:relative;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}\
    #cboxLoadedContent{overflow:auto;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}\
    #cboxTitle{margin:0;}\
    #cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%;}\
    #cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}\
    .cboxPhoto{float:left; margin:auto; border:0; display:block;}\
    .cboxIframe{width:100%; height:100%; display:block; border:0;}\
    \
    #cboxOverlay{background:#000;}\
    #colorbox{}\
    #cboxContent{margin-top:20px;}\
    #cboxError{padding:50px; border:1px solid #ccc;}\
    #cboxLoadedContent{border:5px solid #000; background:#ebebeb;}\
    #cboxTitle{position:absolute; top:-20px; left:0; color:#ccc;}\
    #cboxCurrent{position:absolute; top:-20px; right:0px; color:#ccc;}\
    #cboxSlideshow{position:absolute; top:-20px; right:90px; color:#fff;}\
    #cboxPrevious{position:absolute; top:50%; left:5px; margin-top:-32px; background:url(http://alkar-forum-client.googlecode.com/svn/trunk/settings/images/controls.png) no-repeat top left; width:28px; height:65px; text-indent:-9999px;}\
    #cboxPrevious.hover{background-position:bottom left;}\
    #cboxNext{position:absolute; top:50%; right:5px; margin-top:-32px; background:url(http://alkar-forum-client.googlecode.com/svn/trunk/settings/images/controls.png) no-repeat top right; width:28px; height:65px; text-indent:-9999px;}\
    #cboxNext.hover{background-position:bottom right;}\
    #cboxLoadingOverlay{background:#000;}\
    #cboxLoadingGraphic{background:url(http://alkar-forum-client.googlecode.com/svn/trunk/settings/images/loading.gif) no-repeat center center;}\
    #cboxClose{position:absolute; top:5px; right:5px; display:block; background:url(http://alkar-forum-client.googlecode.com/svn/trunk/settings/images/controls.png) no-repeat top center; width:38px; height:19px; text-indent:-9999px;}\
    #cboxClose.hover{background-position:bottom center;}\
").appendTo('head');
// Load stored data if its exist
if($.jStorage.storageAvailable() && $.jStorage.get('is_stored_options') == 1)
{
    soptions = $.jStorage.get('soptions');
}
//#
// inserting array of 'smiles' into td element
//#
function InsertSmiles(smiles, td)
{
    if(!smiles || !td)
        return;
    //----------------------------------
    var a = null;
    var img = null;
    td.innerHTML += "<br/>";
    //----------------------------------
    for(var i=0; i<smiles.length; i++)
    {
        a = document.createElement("a");
        a.setAttribute("href", "javascript:void(0)");
        a.setAttribute("style", "line-height: 20px;");
        var text = "insert_text('[img]"+smiles[i]+"[/img]', true); return false;";
        a.setAttribute("onclick", text);
        //----------------------------------
        img = document.createElement("img");
        img.setAttribute("hspace", "2");
        img.setAttribute("vspace", "2");
        img.setAttribute("title", "smile");
        img.setAttribute("alt", "smile");
        img.setAttribute("src",smiles[i]);
        //----------------------------------
        a.appendChild(img);
        td.appendChild(a);
    }
}
function CreateSpoiler(parent, id, title)
{
    if(parent == null)
        return null;
    //----------------------------------
    var spoiler = document.createElement('div');
        spoiler.innerHTML = "<div style=\"border-width: 2px 2px 1px; border-style: solid; border-color: rgb(185, 203, 220); font-size: 1em;\"><div style=\"border-bottom: 1px solid rgb(185, 203, 220); background-color: rgb(202, 220, 235); padding: 3px; font-size: 0.9em; font-weight: bold; display: block;\"><span style=\"cursor: pointer;\" onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') {  this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerHTML = '<b><a href=\\\'javascript: void(0);\\\' onClick=\\\'return false;\\\'><img src=\\\'images/icon_minus_1.gif\\\' width=\\\'9\\\' height=\\\'9\\\' border=\\\'0\\\'></a> "+ title +"</b>'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerHTML = '<b><a href=\\\'javascript: void(0);\\\' onClick=\\\'return false;\\\'><img src=\\\'images/icon_plus_1.gif\\\' width=\\\'9\\\' height=\\\'9\\\' border=\\\'0\\\'></a> "+ title +"</b>'; }\"><b><a href=\"javascript: void(0);\" onclick=\"return false;\"><img src=\"images/icon_plus_1.gif\" alt=\"\" border=\"0\" height=\"9\" width=\"9\"></a>&nbsp;"+ title +"</b></span></div><div><div id=\""+id+"\" style=\"display: none; border-bottom: 1px solid rgb(185, 203, 220); padding: 3px;\">&nbsp;</div></div></div>";
    parent.appendChild(spoiler);
    //----------------------------------
    return document.getElementById(id);
}

function InsertSmileContainers(parent)
{
    var qip_container = parent;
    var goha_container = parent;
    var anime_container = parent;
    var yap_container = parent;
    //----------------------------------
    parent.appendChild(document.createElement("br"));
    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Смайлики by FelikZ:"));
    parent.appendChild(b);
    parent.appendChild(document.createElement("br"));
    //----------------------------------
    if(soptions.enable_spoiler)
    {
        qip_container = CreateSpoiler(parent, "fxs_qip", "Qip");
        goha_container = CreateSpoiler(parent, "fxs_goha", "Goha");
        anime_container = CreateSpoiler(parent, "fxs_anime", "Anime");
        yap_container = CreateSpoiler(parent, "fxs_yap", "Yap");
    }
    //----------------------------------
    if(soptions.qip_smiles)
    {
        InsertSmiles(soptions.qip_smiles, qip_container);
    }
    //----------------------------------
    if(soptions.goha_smiles)
    {
        InsertSmiles(soptions.goha_smiles, goha_container);
    }
    //----------------------------------
    if(soptions.anime_smiles)
    {
        InsertSmiles(soptions.anime_smiles, anime_container);
    }
    //----------------------------------
    if(soptions.yap_smiles)
    {
        InsertSmiles(soptions.yap_smiles, yap_container);
    }
}

function SmileIt()
{
    switch(soptions.theme)
    {
        case 0:
            // looking for TD's
            //----------------------------------
            var tds = $('div#wrapcentre > form > table.tablebg > tbody > tr > td.row1 > table > tbody > tr > td:last');
            if(!tds)
                return;
            //----------------------------------
            tds.each(function(i, td)
            {
                if($(td).html().search("insert_text") != -1)
                {
                    InsertSmileContainers(td);
                    return;
                }
            });
            break;
        case 1:
            var div = document.getElementById("smiley-box");
            //----------------------------------
            if(div != null)
            {
                div.setAttribute('style','width:300px;');
                //----------------------------------
                var div2 = document.getElementById("message-box");
                if(div2 != null)
                {
                    div2.setAttribute('style','width:870px;');
                    var div3 = document.getElementById("message");
                    if(div3 != null)
                    {    
                        div3.setAttribute('style','height:500px;');
                    }
                }
                //----------------------------------
                var hrs = div.getElementsByTagName('hr');
                if(hrs != null && hrs.length > 0)
                {
                    var n_div = document.createElement("div");
                    div.insertBefore(n_div,hrs[0]);
                    n_div.setAttribute('style','');
                    //----------------------------------
                    InsertSmileContainers(n_div);
                }
            }
            break;
    }
}
//#
// Vualizator
//#
var vual = new Array('далбаёп',
'далбаеб',
'далбоёп',
'долбоёп',
'долбаёп',
'долпойоп',
'далпайоп',
'долбоё',
'ебаньк',
'ебанут',
'ебанит',
'ебанём',
'песд',
'писд',
'ебу ',
'ебу\
',
'хуит',
'заеб',
'заёб',
'ёбар',
'ебар',
'ёбан',
'ебат',
'бляд',
'бля',
'хуя',
'хую',
'хуй',
'хуё',
'хуйо',
'пизд',
'пезд',
'поебать',
'поебень',
'приебаться',
'проебать',
'проебаться',
'разёбанный',
'разъебай',
'разъебаться',
'еби ',
'еби\
',
'уебать',
'уёбывать',
'сука',
'суке',
'суку',
'пидар',
'пидор',
'пидр',
'педар',
'педор',
'педр',
'педик',
'мудила',
'мудак',
'мудазвон',
'кретин',
'критин',
'далбаёб',
'долбаёб',
'долбоёб',
'далбайоп',
'долбайоп',
'долбойоп',
'далбойоп',
'дебил',
'дибил',
'дыбил',
'сучара',
'мразь',
'уебок',
'ебать',
'ебанько',
'уебан',
'уйобок',
'уйобак',
'уебак',
'уёбак',
'ебаный',
'ёбаный',
'йобаный',
'дура',
'далпайоп',
'долпойоп',
'далбаёб',
'долбоёб',
'долбаёб',
'долбаёп',
'долбоёп',
'далбоёп',
'далбаёп',
'блят',
'безпизды',
'безпезды',
'безпесды',
'беспесды',
'блядки',
'блядовать',
'блядство',
'блядь',
'взъёбка',
'впиздячить',
'всего нихуя',
'вхуярить',
'выебать',
'выёбываться',
'выпиздеться',
'выпиздить',
'дохуя',
'доебаться',
'долбоёб',
'допиздеться',
'допизды',
'дуроёб',
'ебало',
'ебальник',
'ебанатик',
'ебанн',
'ёбанн',
'ебанутый',
'ебануть',
'ёбаный',
'ебаришка',
'ёбарь',
'ебать',
'ебическ',
'еблив',
'ебло',
'еблом',
'еблысь',
'ёбля',
'ебля',
'ебукент',
'запиздет',
'захуярит',
'ебуч',
'испиздит',
'исхуячит',
'коноёбит',
'мозгоёб',
'мудоёб',
'нахуй',
'наебнут',
'напиздит',
'настоебат',
'нахуярит',
'нехуй',
'нихуя',
'отпиздит',
'отъебат',
'охуен',
'охуит',
'хуяч',
'перехуярить',
'хуёв',
'хуяк',
'хуями',
'ахуен',
'хуев',
'еблан',
'ебонат'
);
var vual_new = new Array('д*лб**п',
'д*лб**б',
'д*лб**п',
'д*лб**п',
'д*лб**п',
'д*лпо**п',
'д*лпа**п',
'д*лбо*',
'еб**ьк',
'еб**ут',
'еб**ит',
'еб**ём',
'п**д',
'п**д',
'*бу ',
'*бу\
',
'х**т',
'з**б',
'з**б',
'ё**р',
'е**р',
'ё**н',
'е**т',
'б**д',
'бл*',
'ху*',
'ху*',
'ху*',
'ху*',
'ху**',
'п**д',
'п**д',
'по**ать',
'по**ень',
'при**аться',
'про**ать',
'про**аться',
'раз**анный',
'раз**бай',
'раз**баться',
'еб* ',
'еб*\
',
'уе**ть',
'уё**вать',
'с*ка',
'с*ке',
'с*ку',
'п**ар',
'п**ор',
'п**р',
'п**ар',
'п**ор',
'п**р',
'п*д*к',
'му**ла',
'му**к',
'му**звон',
'кр*т*н',
'кр*т*н',
'д*лб**б',
'д*лб**б',
'д*лб**б',
'д*лб**оп',
'д*лб**оп',
'д*лб**оп',
'д*лб**оп',
'д*б*л',
'д*б*л',
'д*б*л',
'с*чара',
'мр*зь',
'у*б*к',
'е**ть',
'е**нько',
'у**ан',
'у**бок',
'у**бак',
'у**ак',
'у**ак',
'е**ный',
'ё**ный',
'йо**ный',
'д*р*',
'д*лп**оп',
'д*лп**оп',
'д*лб**б',
'д*лб**б',
'д*лб**б',
'д*лб**п',
'д*лб**п',
'д*лб**п',
'д*лб**п',
'бл*т',
'безп**ды',
'безп**ды',
'безп**ды',
'бесп**ды',
'бл*дки',
'бл*довать',
'бл*дство',
'бл*дь',
'взъ**ка',
'впи**ячить',
'всего н**уя',
'вх**рить',
'вы**ать',
'вы**ываться',
'выпи**еться',
'выпи**ить',
'до**я',
'до**аться',
'д*лб**б',
'допи**еться',
'допи**ы',
'д*ро*б',
'е**ло',
'е**льник',
'е**натик',
'е**нн',
'ё**нн',
'е**нутый',
'е**нуть',
'ё**ный',
'е**ришка',
'ё**рь',
'е**ть',
'е**ческ',
'*бл*в',
'*бл*',
'*бл*м',
'*блысь',
'ё**я',
'е**я',
'е*укент',
'запи**ет',
'зах**рит',
'е*уч',
'испи**ит',
'исх**чит',
'коно*б*т',
'мозго**',
'мудо**',
'на**й',
'на**нут',
'напи**ит',
'настое*ат',
'на**ярит',
'не**й',
'ни**я',
'отпи**ит',
'отъе**т',
'ох**н',
'ох**т',
'х**ч',
'перех**рить',
'х**в',
'х**к',
'х**ми',
'ах**н',
'х*ев',
'е*лан',
'е*онат'
);

var form_name = 'postform';
var text_name = 'message';
function VualText(text)
{
    text = ' ' + text;
    var start = 0, end = 0;
    for(var i=0; i<vual.length; i++)
    {
        text = text.replace(new RegExp(vual[i],'g'),vual_new[i]);
    }
    text = text.substring(0,text.length);
    return text;
}
function VualAll()
{
    if(document.forms[form_name] == 'undefined')
        return;
    var txtarea = document.forms[form_name].elements[text_name];
    txtarea.focus();
    var selEnd = txtarea.textLength;
    var selStart = 0;
    var scrollTop = txtarea.scrollTop;
    txtarea.value = VualText(txtarea.value);
    txtarea.selectionStart = selEnd;
    txtarea.selectionEnd = txtarea.selectionStart;
    txtarea.focus();
    txtarea.scrollTop = scrollTop;
}

function SetButtonsAutoVual(is_true)
{
    var preview = document.getElementsByName('preview');
    var post = document.getElementsByName('post');
    if(post.length==0 || preview.length==0)
        return;
    preview = preview[0];
    post = post[0];
    if(is_true)
    {
        preview.setAttribute('onclick','VualAll(); return true;');
        post.setAttribute('onclick','VualAll(); return true;');
    }
    else
    {
        preview.setAttribute('onclick','return true;');
        post.setAttribute('onclick','return true;');
    }
    soptions.enable_auto_vualization = is_true;
}
function OnAutoVualorClick(its)
{
    SetButtonsAutoVual(!soptions.enable_auto_vualization);
}

function AddStyle()
{
    var s = document.createElement('style');
    s.innerHTML = "\
        .row1-hover { background-color: #EFEFEF; padding:4px; }\
        \
    ";
    
    document.getElementsByTagName('head')[0].appendChild(s); 
}
function SetButtonsAutoVual_inner(is_true)
{
    var preview = document.getElementsByName('preview');
    var post = document.getElementsByName('post');

    if(post.length==0 || preview.length==0)
        return;
    preview = preview[0];
    post = post[0];
    if(is_true)
    {
        preview.setAttribute('onclick','VualAll(); return true;');
        post.setAttribute('onclick','VualAll(); return true;');
    }
    else
    {
        preview.setAttribute('onclick','return true;');
        post.setAttribute('onclick','return true;');
    }
    soptions.enable_auto_vualization = is_true;
}
function VualIt()
{
    SetButtonsAutoVual_inner(soptions.enable_auto_vualization);
    
    var td = $('div#wrapcentre form table.tablebg tr td.row2 table tr:nth-child(1) span.genmed.nowrap:first').parent();
    var auto_vual = $("<input>")
    .attr('class','radio')
    .attr('type','checkbox')
    .attr('name','auto_vualor')
    .attr('onclick','OnAutoVualorClick(this); return true;');
    
    if(soptions.enable_auto_vualization)
        auto_vual.attr('checked','checked');
    else
        auto_vual.attr('checked','unchecked');
    
    var span = $("<span>")
    .attr('class','genmed nowrap');
    
    auto_vual.appendTo(span);
    $(document.createTextNode(' Вуализатор')).appendTo(span);
    
    span.appendTo(td);
}
//#
// Style
//#
function StyleIt()
{
    var td = null;
    if(cur_location == 1)
    {
        td = $('table.tablebg tbody tr td.row2 table[border="0"][cellspacing="0"] > tbody > tr:nth-child(3) > td:nth-child(2):last');
    }
    else if(cur_location == 2)
    {
        td = $('table.tablebg tbody tr td.row2 table[border="0"][cellspacing="0"] > tbody > tr:nth-child(2) > td:nth-child(2):last');
    }
    if(td == null)
        return;
    
    td.html('');
    td.attr('bgcolor', soptions.color);
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('style', 'text-decoration: none;style="color:'+soptions.color+';');
    a.setAttribute('onclick', "bbfontstyle('"+soptions.tags_before+"[color="+soptions.color+"]', '[/color]"+soptions.tags_after+"'); return false;");
    a.innerHTML = '<img height="10" width="50" title="FelikZ Color" alt="FelikZ Color" src="images/spacer.gif"/>';

    td.html(a);
}
//#
// Link remaker 
//#
function LinksPass()
{
    reg_youtube = new RegExp('youtube\.com\/watch.{1}v=(.{11})','i');
    reg_rutube = new RegExp('rutube\.ru\/tracks\/[0-9]+\.html.*v=(.{32}).*','i');
    reg_bigmir = new RegExp('video\.bigmir\.net\/show\/([0-9]+)*','i');
    $('a').each(function(i, as)
    {
        var href = $(as).attr('href');
        if(href == null)
            return;
        match = href.match(reg_youtube);
        if(match != null)
        {
            var obj = document.createElement('iframe');
            obj.setAttribute('width','640');
            obj.setAttribute('height', '385');
            obj.setAttribute('type', 'text/html');
            obj.setAttribute('class', 'youtube-player');
            obj.setAttribute('frameborder', '0');
            obj.setAttribute('src', 'http://www.youtube.com/embed/'+match[1]);
            as.parentNode.insertBefore(obj,as);
            as.parentNode.removeChild(as);
            //i--;
        }
        else
        {
            match = href.match(reg_rutube);

            if(match != null)
            {
                var obj = document.createElement('object');
                obj.setAttribute('width','640');
                obj.setAttribute('height', '385');
                obj.innerHTML = "<param name=\"movie\" value=\"http://video.rutube.ru/"+match[1]+"\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://video.rutube.ru/"+match[1]+"\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" wmode=\"window\" allowfullscreen=\"true\" width=\"640\" height=\"385\"></embed>";
                as.parentNode.insertBefore(obj,as);
                as.parentNode.removeChild(as);
                //i--;
            }
            else
            {
                match = href.match(reg_bigmir);

                if(match != null)
                {
                    var obj = document.createElement('object');
                    obj.setAttribute('width','640');
                    obj.setAttribute('height', '385');
                    obj.innerHTML = "<param name=\"movie\" value=\"http://video.bigmir.net/extplayer/"+match[1]+"/\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://video.bigmir.net/extplayer/"+match[1]+"/\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" wmode=\"window\" allowfullscreen=\"true\" width=\"640\" height=\"385\"></embed>";
                    as.parentNode.insertBefore(obj,as);
                    as.parentNode.removeChild(as);
                    //i--;
                }
            }
        }
    });

}
//#
// Linkyfy 
//#
function LinkyfyIt()
{
    
    try {
    var notInTags=['a', 'head', 'noscript', 'option', 'script', 'style', 'title', 'textarea'];
    var res = document.evaluate("//text()[not(ancestor::"+notInTags.join(') and not(ancestor::')+")]",
        document, null,    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
    var i, el, l, m, p, span, txt, 
        urlRE=/((?:https?|ftp):\/\/[^\s'"'<>()]*|[-\w.+]+@(?:[-\w]+\.)+[\w]{2,6})/gi;
    for (var i=0; el=res.snapshotItem(i); i++) {
        //grab the text of this element and be sure it has a URL in it
        txt=el.textContent;
        span=null;
        p=0;
        while (m=urlRE.exec(txt)) {
            if (null==span) {
                //create a span to hold the new text with links in it
                span=document.createElement('span');
            }
            //get the link without trailing dots
            l=m[0].replace(/\.*$/, '');
            //put in text up to the link
            span.appendChild(document.createTextNode(txt.substring(p, m.index)));
            //create a link and put it in the span
            a=document.createElement('a');
            a.className='linkifyplus';
            a.appendChild(document.createTextNode(l));
            if (-1==l.indexOf('://')) l='mailto:'+l;
            a.setAttribute('href', l);
            span.appendChild(a);
            p=m.index+m[0].length;
        }
        if (span) {
            //take the text after the last link
            span.appendChild(document.createTextNode(txt.substring(p, txt.length)));
            //replace the original text with the new span
            el.parentNode.replaceChild(span, el);
        }
    }
    } catch(e) {dump('Linkify Plus Error ('+e.lineNumber+'): '+e+'\n');}
}
//#
function PostPass()
{
    ProfilePass();
}
//#
// Ignore remover 
//#
function IgnoreIt()
{
        var trs = document.getElementsByTagName('tr');
        var is_true = false;
        for(var i=0; i<trs.length; i++)
        {
            if(is_true)
            {
                is_true=false;
                trs[i].parentNode.removeChild(trs[i]);
                i--;
                continue;
            }
            
            var cl = trs[i].getAttribute('class');
            
            if(!(cl == "row1" || cl == "row2"))
                continue;
            
            var tds = trs[i].getElementsByTagName('td');
            
            if(tds)
            {
                for(var j=0; j<tds.length; j++)
                {
                    if(tds[j].getAttribute('class') == "gensmall")
                    {
                        if(tds[j].innerHTML.search("находящийся в вашем чёрном списке.") != -1)
                        {
                            tds[j].parentNode.removeChild(tds[j]);
                            is_true = true;
                            break;
                        }
                    }
                }
            }
        }
}
//#
// Status It
//#
function GetStatusName(month, year)
{
    if("янв" == month){
        month = 1;
    }
    else if("фев" == month){
        month = 2;
    }
    else if("мар" == month){
        month = 3;
    }
    else if("апр" == month){
        month = 4;
    }
    else if("май" == month){
        month = 5;
    }
    else if("июн" == month){
        month = 6;
    }
    else if("июл" == month){
        month = 7;
    }
    else if("авг" == month){
        month = 8;
    }
    else if("сен" == month){
        month = 9;
    }
    else if("окт" == month){
        month = 10;
    }
    else if("ноя" == month){
        month = 11;
    }
    else if("дек" == month){
        month = 12;
    }
    year = parseInt(year);
    var i_date = year * 12 + month;
    var today = new Date();
    var i_today = today.getFullYear() * 12 + (today.getMonth()+1);
    var dif = i_today - i_date;
    if(dif >= -1 && dif < 6){
        return "Твинк";
    }
    else if(dif >= 6 && dif < 12){
        return "Студент";
    }
    else if(dif >= 12 && dif < 24){
        return "Аспирант";
    }
    else if(dif >= 24 && dif < 36){
        return "Доцент";
    }
    else if(dif >= 36 && dif < 48){
        return "Академик";
    }
    else if(dif >= 48 && dif < 60){
        return "Профессор";
    }
    else if(dif >= 60 && dif < 72){
        return "Демагог";
    }
    else if(dif >= 72){
        return "Старый Маразматик";
    }
}
function ProfilePass()
{
    var profile = null;
    var user = null;
    var match = null;
    
    if(soptions.enable_extended_ignore)
    {
        $.each(soptions.ignore_authors.split(','), function(i,pname)
        {
            if(String(pname).length < 1)
            {
                return true;
            }
            $('div#pagecontent > table.tablebg:has("tr > td > b.postauthor"):contains("'+pname+'")').remove();
        });
    }
    
    if(soptions.enable_punisher)
    {
        $.each(soptions.punisher_authors.split(','), function(i,pname)
        {
            if(String(pname).length < 1)
            {
                return true;
            }
            var table = $('div#pagecontent > table.tablebg:has("tr > td > b.postauthor"):contains("'+pname+'")');
            // Update avatar
            $(table).find('tr:nth-child(2) > td > img')
            .attr('src', soptions.punisher_avatar)
            .attr('width', '120')
            .attr('height', '120');
            // Update message
            $(table).find('div.postbody').each(function(t, div)
            {
                div.innerHTML = soptions.punisher_inner_html;
                return false;
            });
            $(table).find('span.postbody,span.gensmall').each(function(u, span)
            {
                span.innerHTML = '';
            });
        });
    }
    $('div#pagecontent table.tablebg tr > td.profile').each(function(i, td)
    {
        $(td).find('td.postdetails').each(function(j, td2)
        {
            user = td2;
            profile = td;
            $(profile).find('span.postdetails').each(function(x, span)
            {
                if(soptions.enable_uncounter)
                {
                    reg = new RegExp('\<br.{0,2}\>\<b\>Сообщения\:\<\/b\> [0-9]*','i');
                    span.innerHTML = span.innerHTML.replace(reg, '');
                }
                return false;
            });
        });
    });
}
//#
// Auto Sort
//#
function TestSpecTrForUnread(tr)
{
    var img = tr.getElementsByTagName('img');
    if(soptions.enable_topic_hover_links)
        UpdateRowStyle(tr);
    for(var i=0; i<img.length; i++)
    {
        if(img[i].getAttribute('src').search("unread") > -1)
            return true;
    }
    return false;
}
function UpdateRowStyle(row)
{
//row.setAttribute('onmouseover', 'this.setAttribute("class", "row1-hover");');

    var tds = row.getElementsByTagName('td');
    
    for(var i=1; i<tds.length;)
    {
        var hrefs = $(tds[i]).find('a:first');
        var href = '#';
        if(typeof(hrefs) != 'undefined' && hrefs != null)
        {
            href = hrefs.attr('href');
        }
        if(tds[i].getAttribute('class') == 'row1')
        {
            tds[i].setAttribute('onclick', 'location.href="'+ href +'"');
            tds[i].setAttribute('onmouseover', "$(this).attr('class', 'row1-hover').css('cursor', 'pointer');");
            tds[i].setAttribute('onmouseout', "$(this).attr('class', 'row1').css('cursor', 'auto');");
        }
        break;
    }
}
function AutoSort()
{
    var tru_table = null;
    var end_table = null;
    var sorted_unread = new Array();
    var sorted_read = new Array();
    $('table.tablebg').each(function(i, table)
    {
        var trs = $(table).find('tr');
        if(trs.length > 3)
        {
            trs.each(function(j, tr)
            {
                tds = tr.getElementsByTagName('td');
                if(tds)
                {
                    if(tds.length>5)
                    {
                        if(TestSpecTrForUnread(tr))
                            sorted_unread[sorted_unread.length] = tr.cloneNode(true);
                        else
                            sorted_read[sorted_read.length] = tr.cloneNode(true);
                            
                        tru_table = tr.parentNode;
                        if(soptions.enable_auto_topic_sort)
                        {
                            tr.parentNode.removeChild(tr);
                            j--;
                        }
                    }
                    else
                    {
                        end_table = tr;
                    }
                }
            });
            return false;
        }
    });
    if(sorted_unread.length > 0 && soptions.enable_auto_topic_sort)
    {
        for(var i=0; i<sorted_unread.length; i++)
        {
            tru_table.insertBefore(sorted_unread[i],end_table);
        }
    }
    if(sorted_read.length > 0 && soptions.enable_auto_topic_sort)
    {
        for(var i=0; i<sorted_read.length; i++)
        {
            tru_table.insertBefore(sorted_read[i],end_table);
        }
    }
}
//#
// Quote pass
//#
function QuotePass()
{
    var reg = new RegExp("(\<object.*\>)|(\<img.*alt\=\"Изображение\")",'i');
    $('div.quotecontent').each(function(i, div)
    {
        if(!soptions.enable_quote_force_hide && div.innerHTML.length < 1000 && div.innerHTML.match(reg) == null)
            return true;
        var sub_div = document.createElement("div");
        sub_div.style.display = 'none';
        sub_div.innerHTML = div.innerHTML;
        div.innerHTML = "<a href=\"javascript: void(0);\" onclick=\"this.parentNode.getElementsByTagName('div')[0].style.display=null; this.parentNode.removeChild(this); return false;\"> [раскрыть цитату] </a>";
        div.appendChild(sub_div);
    });
}
//#
// Hotkeys
//#
function BindCtrlEnter()
{
    $('textarea[name="message"]').keydown(function (e) 
    {
        if (e.ctrlKey && e.keyCode == 13) 
        {
            e.preventDefault();
            $('form[name="postform"] input[type="submit"][value="Отправить"]').click();
        }
    });
}
function SetHotkeys(location)
{
    switch(location)
    {
        case 1:
            // ctrl+enter
            BindCtrlEnter();
            break;
    }
}
//#
// Fast qoute
//#
function SetPageFooterFormFromData(data)
{
    var form = $(data).find('form[name="postform"]:first').outer();
    $('#pagefooter').html(form);
}
//#
// Fast reply
//#
function FastReply()
{
    //----------------------------------
    if(soptions.enable_smiles)
        SmileIt();
    if(soptions.enable_style && soptions.theme == 0)
        StyleIt();
    if(soptions.enable_vualizator && soptions.theme == 0)
        VualIt();
    //----------------------------------
    BindCtrlEnter();
}
//#
// Fast paging
//#
function FastPaging()
{
    var first = true;
    $('table[class!="tablebg"] tr td.gensmall[width="100%"][align="right"] b').each(function()
    {
        if(first)
        {
            $(this).find('a[href!="#"]').click(function()
            {
                $.get($(this).attr('href'), null, _fpCallback);
                return false;
            });
            first = false;
        }
        else
        {
            $(this).find('a[href!="#"]').click(function()
            {
                $.get($(this).attr('href'), null, _fpCallbackToTop);
                return false;
            });
            first = true;
        }
    });
}
//#
function _fpCallback(data)
{
    var content = $(data).find('#pagecontent');
    $('#pagecontent').replaceWith(content);
    if(soptions.theme == 0)
        PostPass();
    if(soptions.enable_ignore_remover && soptions.theme == 0)
        IgnoreIt();
    if(soptions.enable_flash_videos)
        LinksPass();
    if(soptions.enable_quote_hider)
        QuotePass();

    if(soptions.enable_fast_paging)
    {
        FastPaging();
    }
    PostProcess();
}
//#
function _fpCallbackToTop(data)
{
    _fpCallback(data);
    //----------------------------------
    $('html, body').animate( { scrollTop: $("#pageheader").offset().top }, 500);
}
//#
// Fast page refresh
//#
function FastPageRefresh()
{
    $('div#wrapcentre > table.tablebg tr > td.row1 > p.breadcrumbs > a:last-child').click(function()
    {
        if(soptions.enable_auto_page_refresh)
        {
            clearInterval(ref_int);
            ref_int = setInterval(PageRefresh, parseInt(soptions.auto_page_refresh_interval, 10)*1000);
        }
        PageRefresh();
        return false;
    });
}
function PageRefresh()
{
    if(refreshing_now)
        return;
    //----------------------------------
    links = $('div#wrapcentre > table.tablebg tr > td.row1 > p.breadcrumbs > a:last-child');
    if(links == null)
        return;
    //----------------------------------
    refreshing_now = true;
    //----------------------------------
    $('<span id="page_refresh">&nbsp;&raquo;&nbsp;Обновление...</span>').insertAfter(links);
    $.get(links[0].href, function(data) 
    {

        var content = $(data).find('#pagecontent').html();
        $('#pagecontent').html(content);
        if(soptions.enable_auto_topic_sort || soptions.enable_topic_hover_links && soptions.theme == 0)
            AutoSort();
        //----------------------------------
        if(soptions.enable_twitter_block)
        {
            tLoadTwits(parseInt(soptions.twits_count, 10));
        }
        //----------------------------------
        $('div#wrapcentre > table.tablebg tr > td.row1 > p.breadcrumbs > span#page_refresh').html('&nbsp;&raquo;&nbsp;Обновлено').fadeOut(1000, function()
        {
            $(this).remove(); 
            refreshing_now = false; 
        });
    })
    .error(function() 
    { 
        $('div#wrapcentre > table.tablebg tr > td.row1 > p.breadcrumbs > span#page_refresh').remove();
        refreshing_now = false; 
    })
}
//#
// Twitter block
//#
function t_twitterCallback(twitters)
{
    var statusHTML = new Array();
    var i = 0;
    t_pages = new Array();
    //----------------------------------
    for (; i < twitters.length; i++)
    {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url)
        {
            return '<a href="' + url + '">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply)
        {
            return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '">' + reply.substring(1) + '</a>';
        });
        //----------------------------------
        var twit = '<li><span>&rarr; ' + status + '</span> <a style="font-size:85%; color:#778087;" href="http://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '">' + t_relativeTime(twitters[i].created_at) + '</a></li>';
        statusHTML.push(twit);
        //----------------------------------
        if (((i+1) % t_twits_per_page) == 0)
        {
            t_pages.push(statusHTML.slice(0));
            statusHTML = new Array();
        }
    }
    //----------------------------------
    if ((i % t_twits_per_page) != 0)
        t_pages.push(statusHTML);
    //----------------------------------
    var d=new Date();
    var tblock_last_time = $.jStorage.set('tblock_last_time', d.getTime());
    $.jStorage.set('tblock_data', t_pages);
    //----------------------------------
    tShowPage(0);
    //----------------------------------
    tUpdateControls();
}
function tShowPage(page)
{
    $('#twitter_update_list').html(t_pages[page].join(''));
    $('#twitter_block').css('display', 'block');
}
//#
function t_relativeTime(time_value)
{
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    if (delta < 60)
    {
        return '<span style="color: #323D4F; font-weight: bold;">меньше минуты назад</span>';
    }
    else if (delta < 120)
    {
        return '<span style="color: #323D4F; font-weight: bold;">около минуты назад</span>';
    }
    else if (delta < (60 * 60))
    {
        return '<span style="color: #323D4F;">'+(parseInt(delta / 60)).toString() + ' минут назад</span>';
    }
    else if (delta < (120 * 60))
    {
        return '<span style="color: #323D4F;">около часа назад</span>';
    }
    else if (delta < (24 * 60 * 60))
    {
        return 'около ' + (parseInt(delta / 3600)).toString() + ' часов назад';
    }
    else if (delta < (48 * 60 * 60))
    {
        return '1 день назад';
    }
    else
    {
        return (parseInt(delta / 86400)).toString() + ' дней назад';
    }
}
//#
function tInitTwits()
{
    $('head').append("<style type='text/css'>#twitter_update_list {    line-height: 18px;    list-style: none;    }#twitter_update_list li {    padding-bottom: 0;    margin-bottom: 0;    }</style>");
    //----------------------------------
    var td = $('#logodesc > table tr > td:nth-child(2):first');
    td.removeAttr('align');
    var twitter_block = '<div id="twitter_block" style="display: none;"><b><a href="http://twitter.com/thefelikz" target="_blank">FelikZ\'s Mind</a>:</b><br /><ul id="twitter_update_list"><li></li></ul><div id="controls"></div></div>';
    td.html(twitter_block);
}
//#
function tSwitchPageToLeft()
{
    t_cur_page--;
    if(t_cur_page >= 0)
        $('#twitter_update_list').html(t_pages[t_cur_page-1].join(''));
    tUpdateControls();
}
//#
function tSwitchPageToRight()
{
    t_cur_page++;
    if(t_cur_page <= t_pages.length)
        $('#twitter_update_list').html(t_pages[t_cur_page-1].join(''));
    tUpdateControls();
}
//#
function tUpdateControls()
{
    var controls = '';
    //----------------------------------
    if(t_cur_page != 1)
        controls += '<a class="l_page" href="javascript:void(0);" ><b>&larr;</b></a>';
    else
        controls += '<b>&larr;</b>';
    controls += '&nbsp;';
    if(t_cur_page != t_pages.length)
        controls += '<a class="r_page" href="javascript:void(0);" ><b>&rarr;</b></a>';
    else
        controls += '<b>&rarr;</b>';
    //----------------------------------
    if(controls != '')
    {
        $('#twitter_block #controls').html(controls);
        $('#twitter_block #controls a.l_page').click(tSwitchPageToLeft);
        $('#twitter_block #controls a.r_page').click(tSwitchPageToRight);
    }
}
//#
function tLoadTwits(tcount)
{
    if(typeof(tcount) == 'undefined' || tcount == null)
        tcount = 3;
    //----------------------------------
    t_cur_page = 1;
    //----------------------------------
    var is_done = false;
    if($.jStorage.storageAvailable())
    {
        var d=new Date();
        var now = d.getTime();
        var tblock_last_time = $.jStorage.get('tblock_last_time');
        if(tblock_last_time && now - tblock_last_time < 60000)
        {
            var dat = $.jStorage.get('tblock_data');
            if(dat != null)
                t_pages = dat;
            tShowPage(0);
            tUpdateControls();
            is_done = true;
        }
    }
    if(typeof(console) != 'undefined')
    {
        if(is_done)
            console.log('loaded from cache');
        else
            console.log('loaded from web');
    }
    if(!is_done)
    {
        $.ajax({
          url: 'http://twitter.com/statuses/user_timeline/thefelikz.json?callback=?',
          dataType: 'json',
          data: {
                count: parseInt(tcount, 10)+1,
                include_entities: 0
            },
          success: t_twitterCallback,
          cache: true
        });
    }
}
//#
function Eliterization()
{
    var elite_title = 'Элита Алькара';
    
    $('div#wrapcentre > table.tablebg tr > td.row1 > p.breadcrumbs > a:last-child[href^="./viewforum.php?f=112"]').html(elite_title);
    switch(cur_location)
    {
        case 1: // posting
        case 2: // viewing a topic
        case 3: // viewing a forum
            $('div#pageheader h2 a.titles[href^="./viewforum.php?f=112"]').html(elite_title);
            break;
        case 4: // viewing a forum list
            $('div#wrapcentre table.tablebg tr td.row1 a.forumlink[href^="./viewforum.php?f=112"]').html(elite_title).css('color','#BF0000');
            $('div#wrapcentre table.tablebg tr td.row1 a.forumlink[href^="./viewforum.php?f=112"]').parent().parent().find('td.row1:first img').attr('src', 'http://img715.imageshack.us/img715/7088/alkareliteforumlogo.png').attr('width', '50').attr('height', '41');
            break;
    }
}
//#
function ShowSettingsPopup()
{
    $.colorbox({
        open:true,
        returnFocus:false,
        initialWidth: 200,
        initialHeight: 200,
        opacity: 0.4
    });
    $.getScript('http://alkar-forum-client.googlecode.com/svn/trunk/settings/settings.js', function()
    {
        $.colorbox({
            returnFocus:false,
            innerWidth:525,
            innerHeight:684,
            opacity: 0.4,
            html:GetSettingsHtml(),
            onComplete:OnLoadData,
            onCleanup:OnSaveData
        });
    });
}
//#
function AddSettingsButton()
{
    $('<a title="Настройки клиента для форума" id="settings_pop_button" href="javascript:void(0);" onclick="ShowSettingsPopup();" style="margin-right: 12px;"><img src="http://img823.imageshack.us/img823/4684/settingsicon.png" width="12" height="13" alt="*"> Настройки скрипта</a>').insertBefore('div#wrapheader div#menubar td.genmed[align=right] a:first');
}
//#
// General Scripts
//#
function OnPosting()
{
    if(soptions.enable_smiles)
        SmileIt();
    if(soptions.enable_style && soptions.theme == 0)
        StyleIt();
    if(soptions.enable_vualizator && soptions.theme == 0)
        VualIt();
    if(soptions.enable_quote_hider)
        QuotePass();
}
//#
function OnViewTopic()
{
    if(soptions.theme == 0)
        PostPass();
    if(soptions.enable_ignore_remover && soptions.theme == 0)
        IgnoreIt();
    if(soptions.enable_flash_videos)
        LinksPass();
    if(soptions.enable_quote_hider)
        QuotePass();

    FastReply();
    
    if(soptions.enable_fast_paging)
    {
        FastPaging();
    }
}
//#
function OnViewForum()
{
    AddStyle();
    if(soptions.theme == 0)
    {
        if(soptions.enable_auto_topic_sort || soptions.enable_topic_hover_links)
            AutoSort();
        if(soptions.enable_fast_refresh)
            FastPageRefresh();
        if(soptions.enable_auto_page_refresh)
            ref_int = setInterval(PageRefresh, parseInt(soptions.auto_page_refresh_interval, 10)*1000);
    }
}
//#
function PreProcess()
{
    Eliterization();
    AddSettingsButton();
    if(soptions.enable_twitter_block)
    {
        tInitTwits();
        tLoadTwits(parseInt(soptions.twits_count, 10));
    }
    if(soptions.enable_quote_force_hide)
        soptions.enable_quote_hider = true;
}
//#
function PostProcess()
{
    // bind hotkeys
    SetHotkeys(cur_location);
    if(soptions.enable_linkyfy)
        LinkyfyIt();
}
//#
(function() 
{
    document.title = document.title + ' • ForumClient v' + version + ' • by FelikZ';
    var div_info = $(document.createElement('div'));
    div_info.css('float', 'right');
    div_info.html("• Forum client v" + version + " • by <a href='http://thefelikz.blogspot.com/' title='Блог разработчика' target='_blank' style='color:darkred;letter-spacing:1px;'><strong>FelikZ</strong></a>");
    $(div_info).appendTo('#datebar');
    //#
    // Start scripts
    //#
    PreProcess();
    //#
    switch(cur_location)
    {
        case 1:    // posting
            OnPosting();
            break;
        case 2: // viewing a topic
            OnViewTopic();
            break;
        case 3: // viewing a forum
            OnViewForum();
            break;
    }
    //#
    PostProcess();
    //#
})();