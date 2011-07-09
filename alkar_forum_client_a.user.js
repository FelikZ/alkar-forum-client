//#
// Do not touch the text below!!!
//#
var version = "2.190";
//----------------------------------

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
// Load css
$('<link />').appendTo('head').attr({
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://sites.google.com/site/thefelikz/colorbox/colorbox.css'
});
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
    b.appendChild(document.createTextNode(unescape("%u0421%u043C%u0430%u0439%u043B%u0438%u043A%u0438")+" by FelikZ:"));
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
            var tds = $('td[align="center"]');
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
    break;
}
//#
// Style
//#
function StyleIt()
{
    var td = $('table.tablebg tbody tr td.row2 table[border="0"][cellspacing="0"] > tbody > tr:nth-child(3) > td:nth-child(2):last');
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
        document, null,	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
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
    var tables = document.getElementsByTagName('table');
    $('table.tablebg').each(function(i, table)
    {
        if(ProfilePass(table) == -1)
        {
            table.parentNode.removeChild(table);
            return;
        }
    });
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
                        if(tds[j].innerHTML.search(unescape("%u043D%u0430%u0445%u043E%u0434%u044F%u0449%u0438%u0439%u0441%u044F%20%u0432%20%u0432%u0430%u0448%u0435%u043C%20%u0447%u0451%u0440%u043D%u043E%u043C%20%u0441%u043F%u0438%u0441%u043A%u0435.")) != -1)
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
    if(unescape('%u044F%u043D%u0432') == month){
        month = 1;
    }
    else if(unescape('%u0444%u0435%u0432') == month){
        month = 2;
    }
    else if(unescape('%u043C%u0430%u0440') == month){
        month = 3;
    }
    else if(unescape('%u0430%u043F%u0440') == month){
        month = 4;
    }
    else if(unescape('%u043C%u0430%u0439') == month){
        month = 5;
    }
    else if(unescape('%u0438%u044E%u043D') == month){
        month = 6;
    }
    else if(unescape('%u0438%u044E%u043B') == month){
        month = 7;
    }
    else if(unescape('%u0430%u0432%u0433') == month){
        month = 8;
    }
    else if(unescape('%u0441%u0435%u043D') == month){
        month = 9;
    }
    else if(unescape('%u043E%u043A%u0442') == month){
        month = 10;
    }
    else if(unescape('%u043D%u043E%u044F') == month){
        month = 11;
    }
    else if(unescape('%u0434%u0435%u043A') == month){
        month = 12;
    }
    year = parseInt(year);
    var i_date = year * 12 + month;
    var today = new Date();
    var i_today = today.getFullYear() * 12 + (today.getMonth()+1);
    var dif = i_today - i_date;
    if(dif >= -1 && dif < 6){
        return unescape("%u0422%u0432%u0438%u043D%u043A");
    }
    else if(dif >= 6 && dif < 12){
        return unescape("%u0421%u0442%u0443%u0434%u0435%u043D%u0442");
    }
    else if(dif >= 12 && dif < 24){
        return unescape("%u0410%u0441%u043F%u0438%u0440%u0430%u043D%u0442");
    }
    else if(dif >= 24 && dif < 36){
        return unescape("%u0414%u043E%u0446%u0435%u043D%u0442");
    }
    else if(dif >= 36 && dif < 48){
        return unescape("%u0410%u043A%u0430%u0434%u0435%u043C%u0438%u043A");
    }
    else if(dif >= 48 && dif < 60){
        return unescape("%u041F%u0440%u043E%u0444%u0435%u0441%u0441%u043E%u0440");
    }
    else if(dif >= 60 && dif < 72){
        return unescape("%u0414%u0435%u043C%u0430%u0433%u043E%u0433");
    }
    else if(dif >= 72){
        return unescape("%u0421%u0442%u0430%u0440%u044B%u0439 %20%u041C%u0430%u0440%u0430%u0437%u043C%u0430%u0442%u0438%u043A");
    }
}
function ProfilePass(table)
{
        var profile = null;
        var user = null;
        var user_name = null;
        var match = null;
        var is_punisher_target = false;
        $(table).find('td').each(function(i, td)
        {
            if(td.getAttribute('class') == "profile")
            {
                $(td).find('td.postdetails').each(function(j, td2)
                {
                    user = td2;
                    profile = td;
                    $(profile).find('span.postdetails').each(function(x, span)
                    {
                        if(soptions.enable_status && user.innerHTML == unescape('%u041F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044C'))
                        {
                            reg = new RegExp('\<b\>'+unescape('%u0417%u0430%u0440%u0435%u0433%u0438%u0441%u0442%u0440%u0438%u0440%u043E%u0432%u0430%u043D')+'\:\<\/b\> (['+unescape('%u0430-%u044F%u0410-%u042F')+']{2}) (['+unescape('%u0430-%u044F%u0410-%u042F')+']{3}) ([0-9]{2})\, ([0-9]{4}) ([0-9]{1,2})\:([0-9]{2})','i');

                            match = span.innerHTML.match(reg);
                            if(match != null)
                            {
                                user.innerHTML = GetStatusName(match[2], match[4]);
                            }
                            else
                            {
                                reg = new RegExp('\<b\>'+unescape('%u0417%u0430%u0440%u0435%u0433%u0438%u0441%u0442%u0440%u0438%u0440%u043E%u0432%u0430%u043D')+'\:\<\/b\> ([0-9]{2}) (['+unescape('%u0430-%u044F%u0410-%u042F')+']{3}) ([0-9]{4})\, ([0-9]{1,2})\:([0-9]{2})','i');
                                match = span.innerHTML.match(reg);
                                if(match != null)
                                {
                                    user.innerHTML = GetStatusName(match[2], match[3]);
                                }
                            }
                        }
                        if(soptions.enable_uncounter)
                        {
                            reg = new RegExp('\<br.{0,2}\>\<b\>'+unescape('%u0421%u043E%u043E%u0431%u0449%u0435%u043D%u0438%u044F')+'\:\<\/b\> [0-9]*','i');
                            span.innerHTML = span.innerHTML.replace(reg, '');
                        }
                        return false;
                    });
                });
            }
            else
            {
                var b = $(td).find('b.postauthor:first');

                user_name = b.innerHTML;
                if(soptions.enable_extended_ignore)
                {
                    for(var u=0; u<soptions.ignore_authors.length; u++)
                    {
                        if(user_name == soptions.ignore_authors[u])
                        {
                            return -1;
                        }
                    }
                }
                
                if(soptions.enable_punisher)
                {
                    $(td).find('img[alt="' + unescape('%u0410%u0432%u0430%u0442%u0430%u0440%u0430%20%u043F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044F') + '"]').each(function(i, img)
                    {
                        for(var y=0; y<soptions.punisher_authors.length; y++)
                        {
                            if(soptions.punisher_authors[y] == user_name)
                            {
                                img.setAttribute('src', soptions.punisher_avatar);
                                img.setAttribute('width', "120");
                                img.setAttribute('height', "120");
                                is_punisher_target = true;
                                break;
                            }
                        }
                    });
                    
                    if(is_punisher_target)
                    {
                        $(td).find('div.postbody').each(function(t, div)
                        {
                            div.innerHTML = soptions.punisher_inner_html;
                        
                            $(td).find('span.postbody,span.gensmall').each(function(u, span)
                            {
                                span.innerHTML = '';
                            });
                            return false;
                        });
                    }
                }
            }
        });
        return 0;
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
    var reg = new RegExp("(\<object.*\>)|(\<img.*alt\=\""+unescape('%u0418%u0437%u043E%u0431%u0440%u0430%u0436%u0435%u043D%u0438%u0435')+"\")",'i');
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
            $('form[name="postform"] input[type="submit"][value="'+unescape("%u041E%u0442%u043F%u0440%u0430%u0432%u0438%u0442%u044C")+'"]').click();
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
function FastQuote()
{
    $('table.tablebg div[class="gensmall"][style="float: right;"] a:last-child').click(function(e)
    { 
        $.get($(this).attr('href'), null, function(data)
        {
            var quote = $(data).find('form[name="postform"]:first table.tablebg textarea').html();
            var area = $('form[name="postform"]:first table.tablebg textarea');
            var old_txt = area.attr('value');
            var new_txt = old_txt;
            if(new_txt.length > 0 && new_txt.charAt(new_txt.length-1) != '\n')
                new_txt += '\n';
            new_txt += quote;
            area.attr('value', new_txt);
            $('table.tablebg textarea').focus();
        });
        return false; 
    }); 
}
//#
// Fast reply
//#
function FastReply()
{
    $('head').append('<script type="text/javascript">var form_name = "postform";var text_name = "message";var bbcode = new Array();var bbtags = new Array(\'[b]\',\'[/b]\',\'[i]\',\'[/i]\',\'[u]\',\'[/u]\',\'[quote]\',\'[/quote]\',\'[code]\',\'[/code]\',\'[list]\',\'[/list]\',\'[list=]\',\'[/list]\',\'[img]\',\'[/img]\',\'[url]\',\'[/url]\',\'[flash=]\', \'[/flash]\',\'[size=]\',\'[/size]\', \'[a_center]\', \'[/a_center]\', \'[a_right]\', \'[/a_right]\', \'[frame]\', \'[/frame]\', \'[line]\', \'[/line]\', \'[offtopic]\', \'[/offtopic]\', \'[s]\', \'[/s]\', \'[spoiler2=]\', \'[/spoiler2]\', \'[spoiler=]\', \'[/spoiler]\', \'[youtube]\', \'[/youtube]\');var imageTag = false;var help_line = {			b:unescape(\'%u0416%u0438%u0440%u043D%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bb%5Dtext%5B/b%5D\'),			i:unescape(\'%u041D%u0430%u043A%u043B%u043E%u043D%u043D%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bi%5Dtext%5B/i%5D\'),			u:unescape(\'%u041F%u043E%u0434%u0447%u0435%u0440%u043A%u043D%u0443%u0442%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bu%5Dtext%5B/u%5D\'),			q:unescape(\'%u0426%u0438%u0442%u0430%u0442%u0430%3A%20%5Bquote%5Dtext%5B/quote%5D\'),			c:unescape(\'%u041A%u043E%u0434%3A%20%5Bcode%5Dcode%5B/code%5D\'),			l:unescape(\'%u0421%u043F%u0438%u0441%u043E%u043A%3A%20%5Blist%5Dtext%5B/list%5D\'),			o:unescape(\'%u041D%u0443%u043C%u0435%u0440%u043E%u0432%u0430%u043D%u043D%u044B%u0439%20%u0441%u043F%u0438%u0441%u043E%u043A%3A%20%5Blist%3D%5Dtext%5B/list%5D\'),			p:unescape(\'%u0412%u0441%u0442%u0430%u0432%u0438%u0442%u044C%20%u0438%u0437%u043E%u0431%u0440%u0430%u0436%u0435%u043D%u0438%u0435%3A%20%5Bimg%5Dhttp%3A//image_url%5B/img%5D\'),			w:unescape(\'%u0412%u0441%u0442%u0430%u0432%u0438%u0442%u044C%20%u0441%u0441%u044B%u043B%u043A%u0443%3A%20%5Burl%5Dhttp%3A//url%5B/url%5D%20%u0438%u043B%u0438%20%5Burl%3Dhttp%3A//url%5DURL%20text%5B/url%5D\'),			s:unescape(\'%u0426%u0432%u0435%u0442%20%u0448%u0440%u0438%u0444%u0442%u0430%3A%20%5Bcolor%3Dred%5Dtext%5B/color%5D%20%u0421%u043E%u0432%u0435%u0442%3A%20%u0412%u044B%20%u043C%u043E%u0436%u0435%u0442%u0435%20%u0438%u0441%u043F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u044C%20%u0442%u0430%u043A%u0436%u0435%20%u043A%u043E%u043D%u0441%u0442%u0440%u0443%u043A%u0446%u0438%u044E%20color%3D%23FF0000\'),			f:unescape(\'%u0420%u0430%u0437%u043C%u0435%u0440%20%u0448%u0440%u0438%u0444%u0442%u0430%3A%20%5Bsize%3D85%5Dsmall%20text%5B/size%5D\'),			e:unescape(\'%u0421%u043F%u0438%u0441%u043E%u043A%3A%20%u0434%u043E%u0431%u0430%u0432%u0438%u0442%u044C%20%u044D%u043B%u0435%u043C%u0435%u043D%u0442%20%u0441%u043F%u0438%u0441%u043A%u0430\'),			d:unescape(\'%u0424%u043B%u044D%u0448%3A%20%5Bflash%3Dwidth%2Cheight%5Dhttp%3A//url%5B/flash%5D\'),			t:unescape(\'%7B%20BBCODE_T_HELP%20%7D\'),			tip:unescape(\'%u0421%u043E%u0432%u0435%u0442%3A%20%u043C%u043E%u0436%u043D%u043E%20%u0431%u044B%u0441%u0442%u0440%u043E%20%u043F%u0440%u0438%u043C%u0435%u043D%u0438%u0442%u044C%20%u0441%u0442%u0438%u043B%u0438%20%u043A%20%u0432%u044B%u0434%u0435%u043B%u0435%u043D%u043D%u043E%u043C%u0443%20%u0442%u0435%u043A%u0441%u0442%u0443.\')							,cb_22:unescape(\'%u0412%u044B%u0440%u0430%u0432%u043D%u0438%u0432%u0430%u043D%u0438%u0435%20%u043F%u043E%20%u0446%u0435%u043D%u0442%u0440%u0443%3A%20%5Ba_center%5Dtext%5B/a_center%5D\')							,cb_24:unescape(\'%u0412%u044B%u0440%u0430%u0432%u043D%u0438%u0432%u0430%u043D%u0438%u0435%20%u043F%u043E%20%u043F%u0440%u0430%u0432%u043E%u043C%u0443%20%u043A%u0440%u0430%u044E%3A%20%5Ba_right%5Dtext%5B/a_right%5D\')							,cb_26:unescape(\'%u0422%u0435%u043A%u0441%u0442%20%u0432%20%u0440%u0430%u043C%u043A%u0435%3A%20%5Bframe%5Dtext%5B/frame%5D\')							,cb_28:unescape(\'%u0413%u043E%u0440%u0438%u0437%u043E%u043D%u0442%u0430%u043B%u044C%u043D%u0430%u044F%20%u043B%u0438%u043D%u0438%u044F\')							,cb_30:unescape(\'%u041E%u0444%u0444%u0442%u043E%u043F%3A%20%5Bofftopic%5Dtext%5B/offtopic%5D\')							,cb_32:unescape(\'%u0417%u0430%u0447%u0451%u0440%u043A%u043D%u0443%u0442%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bs%5Dtext%5B/s%5D\')							,cb_34:unescape(\'%u0421%u043A%u0440%u044B%u0432%u0430%u0435%u043C%u043E%u0435%20%u0441%u043E%u0434%u0435%u0440%u0436%u0438%u043C%u043E%u0435%3A%20%5Bspoiler2%3D%u043D%u0430%u0437%u0432%u0430%u043D%u0438%u0435%20%u0441%u043F%u043E%u0439%u043B%u0435%u0440%u0430%5Dtext%5B/spoiler2%5D\')							,cb_36:unescape(\'%u0421%u043A%u0440%u044B%u0432%u0430%u0435%u043C%u043E%u0435%20%u0441%u043E%u0434%u0435%u0440%u0436%u0438%u043C%u043E%u0435%3A%20%5Bspoiler%3D%u043D%u0430%u0437%u0432%u0430%u043D%u0438%u0435%20%u0441%u043F%u043E%u0439%u043B%u0435%u0440%u0430%5Dtext%5B/spoiler%5D\')							,cb_38:unescape(\'%u0412%u0441%u0442%u0440%u043E%u0435%u043D%u043D%u044B%u0439%20%u043F%u043B%u0435%u0435%u0440%3A%20%5Byoutube%5D%u0421%u0441%u044B%u043B%u043A%u0430%20%u043D%u0430%20%u0441%u0442%u0440%u0430%u043D%u0438%u0446%u0443%20%u0432%u0438%u0434%u0435%u043E%5B/youtube%5D\')					};</script>')
            .append('<script type="text/javascript" src="/phpBB/styles/subsilver2/template/editor.js"></script>');
    //----------------------------------
    var url = $('div#pagecontent table tr td[align="left"][valign="middle"][nowrap="nowrap"]:last a:nth-child(2)').attr('href');
    $.get(url, null, function(data)
    {
        SetPageFooterFormFromData(data);
        //----------------------------------
        if(soptions.enable_smiles)
            SmileIt();
        if(soptions.enable_style && soptions.theme == 0)
            StyleIt();
        if(soptions.enable_vualizator && soptions.theme == 0)
            VualIt();
        //----------------------------------
        BindCtrlEnter();
    });
    
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
    if(soptions.enable_fast_reply)
    {
        //FastReply();
        FastQuote();
    }
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
            ref_int = setInterval(PageRefresh, soptions.auto_page_refresh_interval*1000);
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
            tLoadTwits(soptions.twits_count);
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
    $('head').append("<style type='text/css'>#twitter_update_list {	line-height: 18px;	list-style: none;	}#twitter_update_list li {	padding-bottom: 0;	margin-bottom: 0;	}</style>");
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
                count: tcount+1,
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
		case 1:	// posting
			break;
		case 2: // viewing a topic
			break;
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
function _ShowSettingsPopup()
{
    $.colorbox({href: 'http://alkar-forum-client.googlecode.com/svn/trunk/settings/settings.html'});
}
//#
function ShowSettingsPopup()
{
    var script_url = 'https://sites.google.com/site/thefelikz/colorbox/jquery.colorbox-min.js';
    if($('head script[src="'+script_url+'"]').length == 0)
    {
        $.getScript(script_url, function() {
            _ShowSettingsPopup();
        });
    }
    else
    {
        _ShowSettingsPopup();
    }
}
//#
function AddSettingsButton()
{
    $('<a id="settings_pop_button" href="javascript:void(0);" onclick="ShowSettingsPopup();" style="margin-right: 12px;"><img src="http://img849.imageshack.us/img849/796/settingsicong.png" width="12" alt="*"> Настройки скрипта</a>').insertBefore('div#wrapheader div#menubar td.genmed[align=right] a:first');
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
    if(soptions.enable_fast_reply)
    {
        FastReply();
        FastQuote();
    }
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
            ref_int = setInterval(PageRefresh, soptions.auto_page_refresh_interval*1000);
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
        tLoadTwits(soptions.twits_count);
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
		case 1:	// posting
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