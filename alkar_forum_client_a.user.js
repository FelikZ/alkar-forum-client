// ==UserScript==
// @name           ForumClient 2 [Alkar]
// @namespace      FelikZ
// @description    enjoy it :)
// @include        http://games.alkar.net/phpBB*
// ==/UserScript==
(function() 
{
	//---------------------------------------------------------------------------------------------------
	// Do not touch the text below!!!
	//---------------------------------------------------------------------------------------------------
	var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	// 0 - anywhere, 1 - post or pm, 2 - view topic
	var cur_location = 0;
	var version = "2.91";
	var loc = "" + window.location;
	//----------------------------------
	if(loc.search(/http:\/\/games.alkar.net\/phpBB/) < 0)
	{
		return;
	}
	//----------------------------------
	if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/posting/) > -1 ||
	loc.search(/http:\/\/games.alkar.net\/phpBB.*\/ucp/) > -1
	)
	{
		cur_location = 1;
	}
	else if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/viewtopic/) > -1)
	{
		cur_location = 2;
	}
	else if(loc.search(/http:\/\/games.alkar.net\/phpBB.*\/viewforum/) > -1)
	{
		cur_location = 3;
	}
	if(typeof(enable_fast_reply) == 'undefined') 
		enable_fast_reply = true;
    if(typeof(enable_fast_reply) == 'undefined') 
        enable_fast_paging = true;
	//------------------------------------------------------------------------------------------------------
	// jQuery outer plugin
	//------------------------------------------------------------------------------------------------------
	if(typeof ($.fn.outer) == 'undefined')
	{
		$.fn.outer = function(val)
		{
			if(val)
			{
				$(val).insertBefore(this);
				$(this).remove();
			}
			else{ return $("<div>").append($(this).clone()).html(); }
		}
	}
	//------------------------------------------------------------------------------------------------------
	// inserting array of 'smiles' into td element
	//------------------------------------------------------------------------------------------------------
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
			a = root.document.createElement("a");
			a.setAttribute("href", "javascript:void(0)");
			a.setAttribute("style", "line-height: 20px;");
			var text = "insert_text('[img]"+smiles[i]+"[/img]', true); return false;";
			a.setAttribute("onclick", text);
			//----------------------------------
			img = root.document.createElement("img");
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
		var spoiler = root.document.createElement('div');
			spoiler.innerHTML = "<div style=\"border-width: 2px 2px 1px; border-style: solid; border-color: rgb(185, 203, 220); font-size: 1em;\"><div style=\"border-bottom: 1px solid rgb(185, 203, 220); background-color: rgb(202, 220, 235); padding: 3px; font-size: 0.9em; font-weight: bold; display: block;\"><span style=\"cursor: pointer;\" onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') {  this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerHTML = '<b><a href=\\\'javascript: void(0);\\\' onClick=\\\'return false;\\\'><img src=\\\'images/icon_minus_1.gif\\\' width=\\\'9\\\' height=\\\'9\\\' border=\\\'0\\\'></a> "+ title +"</b>'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerHTML = '<b><a href=\\\'javascript: void(0);\\\' onClick=\\\'return false;\\\'><img src=\\\'images/icon_plus_1.gif\\\' width=\\\'9\\\' height=\\\'9\\\' border=\\\'0\\\'></a> "+ title +"</b>'; }\"><b><a href=\"javascript: void(0);\" onclick=\"return false;\"><img src=\"images/icon_plus_1.gif\" alt=\"\" border=\"0\" height=\"9\" width=\"9\"></a>&nbsp;"+ title +"</b></span></div><div><div id=\""+id+"\" style=\"display: none; border-bottom: 1px solid rgb(185, 203, 220); padding: 3px;\">&nbsp;</div></div></div>";
		parent.appendChild(spoiler);
		//----------------------------------
		return root.document.getElementById(id);
	}
	
	function InsertSmileContainers(parent)
	{
		var qip_container = parent;
		var goha_container = parent;
		var anime_container = parent;
		var yap_container = parent;
		//----------------------------------
		parent.appendChild(root.document.createElement("br"));
		var b = root.document.createElement("b");
		b.appendChild(root.document.createTextNode(unescape("%u0421%u043C%u0430%u0439%u043B%u0438%u043A%u0438")+" by FelikZ:"));
		parent.appendChild(b);
		parent.appendChild(root.document.createElement("br"));
		//----------------------------------
		if(enable_spoiler)
		{
			qip_container = CreateSpoiler(parent, "fxs_qip", "Qip");
			goha_container = CreateSpoiler(parent, "fxs_goha", "Goha");
			anime_container = CreateSpoiler(parent, "fxs_anime", "Anime");
			yap_container = CreateSpoiler(parent, "fxs_yap", "Yap");
		}
		//----------------------------------
		if(enable_qip_smiles)
		{
			InsertSmiles(qip_smiles, qip_container);
		}
		//----------------------------------
		if(enable_goha_smiles)
		{
			InsertSmiles(goha_smiles, goha_container);
		}
		//----------------------------------
		if(enable_anime_smiles)
		{
			InsertSmiles(anime_smiles, anime_container);
		}
		//----------------------------------
		if(enable_yap_smiles)
		{
			InsertSmiles(yap_smiles, yap_container);
		}
	}
	
	function SmileIt()
	{
		switch(theme)
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
				var div = root.document.getElementById("smiley-box");
				//----------------------------------
				if(div != null)
				{
					div.setAttribute('style','width:300px;');
					//----------------------------------
					var div2 = root.document.getElementById("message-box");
					if(div2 != null)
					{
						div2.setAttribute('style','width:870px;');
						var div3 = root.document.getElementById("message");
						if(div3 != null)
						{	
							div3.setAttribute('style','height:500px;');
						}
					}
					//----------------------------------
					var hrs = div.getElementsByTagName('hr');
					if(hrs != null && hrs.length > 0)
					{
						var n_div = root.document.createElement("div");
						div.insertBefore(n_div,hrs[0]);
						n_div.setAttribute('style','');
						//----------------------------------
						InsertSmileContainers(n_div);
					}
				}
				break;
		}
	}
	//---------------------------------------------------------------------------------------------------
	// Vualizator
	//---------------------------------------------------------------------------------------------------
	var scr = "var auto_vualization=";
	if(auto_vualization)
		scr += "true;";
	else
		scr += "false;";
	scr += "\
	var vual = new Array('далбаёп',\
	'далбаеб',\
'далбоёп',\
'долбоёп',\
'долбаёп',\
'долпойоп',\
'далпайоп',\
'долбоё',\
'ебаньк',\
'ебанут',\
'ебанит',\
'ебанём',\
'песд',\
'писд',\
'ебу ',\
'ебу\
',\
'хуит',\
'заеб',\
'заёб',\
'ёбар',\
'ебар',\
'ёбан',\
'ебат',\
'бляд',\
'бля',\
'хуя',\
'хую',\
'хуй',\
'хуё',\
'хуйо',\
'пизд',\
'пезд',\
'поебать',\
'поебень',\
'приебаться',\
'проебать',\
'проебаться',\
'разёбанный',\
'разъебай',\
'разъебаться',\
'еби ',\
'еби\
',\
'уебать',\
'уёбывать',\
'сука',\
'суке',\
'суку',\
'пидар',\
'пидор',\
'пидр',\
'педар',\
'педор',\
'педр',\
'педик',\
'мудила',\
'мудак',\
'мудазвон',\
'кретин',\
'критин',\
'далбаёб',\
'долбаёб',\
'долбоёб',\
'далбайоп',\
'долбайоп',\
'долбойоп',\
'далбойоп',\
'дебил',\
'дибил',\
'дыбил',\
'сучара',\
'мразь',\
'уебок',\
'ебать',\
'ебанько',\
'уебан',\
'уйобок',\
'уйобак',\
'уебак',\
'уёбак',\
'ебаный',\
'ёбаный',\
'йобаный',\
'дура',\
'далпайоп',\
'долпойоп',\
'далбаёб',\
'долбоёб',\
'долбаёб',\
'долбаёп',\
'долбоёп',\
'далбоёп',\
'далбаёп',\
'блят',\
'безпизды',\
'безпезды',\
'безпесды',\
'беспесды',\
'блядки',\
'блядовать',\
'блядство',\
'блядь',\
'взъёбка',\
'впиздячить',\
'всего нихуя',\
'вхуярить',\
'выебать',\
'выёбываться',\
'выпиздеться',\
'выпиздить',\
'дохуя',\
'доебаться',\
'долбоёб',\
'допиздеться',\
'допизды',\
'дуроёб',\
'ебало',\
'ебальник',\
'ебанатик',\
'ебанн',\
'ёбанн',\
'ебанутый',\
'ебануть',\
'ёбаный',\
'ебаришка',\
'ёбарь',\
'ебать',\
'ебическ',\
'еблив',\
'ебло',\
'еблом',\
'еблысь',\
'ёбля',\
'ебля',\
'ебукент',\
'запиздет',\
'захуярит',\
'ебуч',\
'испиздит',\
'исхуячит',\
'коноёбит',\
'мозгоёб',\
'мудоёб',\
'нахуй',\
'наебнут',\
'напиздит',\
'настоебат',\
'нахуярит',\
'нехуй',\
'нихуя',\
'отпиздит',\
'отъебат',\
'охуен',\
'охуит',\
'хуяч',\
'перехуярить',\
'хуёв',\
'хуяк',\
'хуями',\
'ахуен',\
'хуев',\
'еблан',\
'ебонат'\
);\
	var vual_new = new Array('д*лб**п',\
	'д*лб**б',\
'д*лб**п',\
'д*лб**п',\
'д*лб**п',\
'д*лпо**п',\
'д*лпа**п',\
'д*лбо*',\
'еб**ьк',\
'еб**ут',\
'еб**ит',\
'еб**ём',\
'п**д',\
'п**д',\
'*бу ',\
'*бу\
',\
'х**т',\
'з**б',\
'з**б',\
'ё**р',\
'е**р',\
'ё**н',\
'е**т',\
'б**д',\
'бл*',\
'ху*',\
'ху*',\
'ху*',\
'ху*',\
'ху**',\
'п**д',\
'п**д',\
'по**ать',\
'по**ень',\
'при**аться',\
'про**ать',\
'про**аться',\
'раз**анный',\
'раз**бай',\
'раз**баться',\
'еб* ',\
'еб*\
',\
'уе**ть',\
'уё**вать',\
'с*ка',\
'с*ке',\
'с*ку',\
'п**ар',\
'п**ор',\
'п**р',\
'п**ар',\
'п**ор',\
'п**р',\
'п*д*к',\
'му**ла',\
'му**к',\
'му**звон',\
'кр*т*н',\
'кр*т*н',\
'д*лб**б',\
'д*лб**б',\
'д*лб**б',\
'д*лб**оп',\
'д*лб**оп',\
'д*лб**оп',\
'д*лб**оп',\
'д*б*л',\
'д*б*л',\
'д*б*л',\
'с*чара',\
'мр*зь',\
'у*б*к',\
'е**ть',\
'е**нько',\
'у**ан',\
'у**бок',\
'у**бак',\
'у**ак',\
'у**ак',\
'е**ный',\
'ё**ный',\
'йо**ный',\
'д*р*',\
'д*лп**оп',\
'д*лп**оп',\
'д*лб**б',\
'д*лб**б',\
'д*лб**б',\
'д*лб**п',\
'д*лб**п',\
'д*лб**п',\
'д*лб**п',\
'бл*т',\
'безп**ды',\
'безп**ды',\
'безп**ды',\
'бесп**ды',\
'бл*дки',\
'бл*довать',\
'бл*дство',\
'бл*дь',\
'взъ**ка',\
'впи**ячить',\
'всего н**уя',\
'вх**рить',\
'вы**ать',\
'вы**ываться',\
'выпи**еться',\
'выпи**ить',\
'до**я',\
'до**аться',\
'д*лб**б',\
'допи**еться',\
'допи**ы',\
'д*ро*б',\
'е**ло',\
'е**льник',\
'е**натик',\
'е**нн',\
'ё**нн',\
'е**нутый',\
'е**нуть',\
'ё**ный',\
'е**ришка',\
'ё**рь',\
'е**ть',\
'е**ческ',\
'*бл*в',\
'*бл*',\
'*бл*м',\
'*блысь',\
'ё**я',\
'е**я',\
'е*укент',\
'запи**ет',\
'зах**рит',\
'е*уч',\
'испи**ит',\
'исх**чит',\
'коно*б*т',\
'мозго**',\
'мудо**',\
'на**й',\
'на**нут',\
'напи**ит',\
'настое*ат',\
'на**ярит',\
'не**й',\
'ни**я',\
'отпи**ит',\
'отъе**т',\
'ох**н',\
'ох**т',\
'х**ч',\
'перех**рить',\
'х**в',\
'х**к',\
'х**ми',\
'ах**н',\
'х*ев',\
'е*лан',\
'е*онат'\
);\
	var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;\
	var form_name = 'postform';\
	var text_name = 'message';\
	function VualText(text)\
	{\
		text = ' ' + text;\
		var start = 0, end = 0;\
		for(var i=0; i<vual.length; i++)\
		{\
			text = text.replace(new RegExp(vual[i],'g'),vual_new[i]);\
		}\
		text = text.substring(0,text.length);\
		return text;\
	}\
	function VualAll()\
	{\
	if(root.document.forms[form_name] == 'undefined')\
		return;\
		var txtarea = root.document.forms[form_name].elements[text_name];\
		txtarea.focus();\
		var selEnd = txtarea.textLength;\
		var selStart = 0;\
		var scrollTop = txtarea.scrollTop;\
		txtarea.value = VualText(txtarea.value);\
		txtarea.selectionStart = selEnd;\
		txtarea.selectionEnd = txtarea.selectionStart;\
		txtarea.focus();\
		txtarea.scrollTop = scrollTop;\
	}\
	function VualPart()\
	{\
	if(root.document.forms[form_name] == 'undefined')\
		return;\
	var txtarea = root.document.forms[form_name].elements[text_name];\
		txtarea.focus();\
\
	\
	var selLength = txtarea.textLength;\
	var selStart = txtarea.selectionStart;\
	var selEnd = txtarea.selectionEnd;\
	var scrollTop = txtarea.scrollTop;\
\
	if (selEnd == 1 || selEnd == 2) \
	{\
		selEnd = selLength;\
	}\
	\
	var s1 = (txtarea.value).substring(0,selStart);\
	var s2 = VualText((txtarea.value).substring(selStart, selEnd));\
	var s3 = (txtarea.value).substring(selEnd, selLength);\
	txtarea.value = s1 + s2 + s3;\
	txtarea.selectionStart = selEnd;\
	txtarea.selectionEnd = txtarea.selectionStart;\
	txtarea.focus();\
	txtarea.scrollTop = scrollTop;\
	}\
	\
	function SetButtonsAutoVual(is_true)\
	{\
		var preview = root.document.getElementsByName('preview');\
		var post = root.document.getElementsByName('post');\
		if(post.length==0 || preview.length==0)\
			return;\
		preview = preview[0];\
		post = post[0];\
		if(is_true)\
		{\
			preview.setAttribute('onclick','VualAll(); return true;');\
			post.setAttribute('onclick','VualAll(); return true;');\
		}\
		else\
		{\
			preview.setAttribute('onclick','return true;');\
			post.setAttribute('onclick','return true;');\
		}\
		auto_vualization = is_true;\
	}\
	function OnAutoVualorClick(its)\
	{\
		SetButtonsAutoVual(!auto_vualization);\
	}\
	";
	function AddStyle()
	{
		var s = document.createElement('style');
		s.innerHTML = "\
			.row1-hover { background-color: #EFEFEF; padding:4px; }\
			\
		";
		//alert(s);
		root.document.getElementsByTagName('head')[0].appendChild(s); 
	}
	function SetButtonsAutoVual_inner(is_true)
	{
		var preview = root.document.getElementsByName('preview');
		var post = root.document.getElementsByName('post');
		//alert(post);
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
		auto_vualization = is_true;
	}
	function VualIt()
	{
		var s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		s.text = scr;
		//alert(s);
		root.document.getElementsByTagName('head')[0].appendChild(s); 
		SetButtonsAutoVual_inner(auto_vualization);
		
		var tds = root.document.getElementsByTagName("td");
		
		if(!tds)
			return;
		var is_found = false;
		
		for(var i=0; i<tds.length; i++)
		{
			for(var j=0; j<tds[i].childNodes.length; j++)
			{
				
				if(tds[i].childNodes[j].attributes)
				{
					if(tds[i].childNodes[j].getAttribute('class') == 'btnbbcode')
					{
						is_found = true;
						//alert(1);
						break;
					}
				}
			}
			if(is_found)
			{
				var auto_vual = root.document.createElement("input");
				auto_vual.setAttribute('class','radio');
				auto_vual.setAttribute('type','checkbox');
				auto_vual.setAttribute('name','auto_vualor');
				auto_vual.setAttribute('onclick','OnAutoVualorClick(this); return true;');
				
				if(auto_vualization)
					auto_vual.setAttribute('checked','checked');
				else
					auto_vual.setAttribute('checked','unchecked');
				
				var span = root.document.createElement("span");
				span.setAttribute('class','genmed nowrap');
				span.appendChild(auto_vual);
				span.appendChild(root.document.createTextNode(' Вуализатор'));
				
				var in1 = root.document.createElement("input");
				in1.setAttribute('class','btnbbcode');
				in1.setAttribute('type','button');
				in1.setAttribute('style','width: 52px;');
				in1.setAttribute('value','VualAll');
				in1.setAttribute('name','vual_all');
				in1.setAttribute('onclick','VualAll();');
				
				var in2 = root.document.createElement("input");
				in2.setAttribute('class','btnbbcode');
				in2.setAttribute('type','button');
				in2.setAttribute('style','width: 40px;');
				in2.setAttribute('value','Vual');
				in2.setAttribute('name','vual_one');
				in2.setAttribute('onclick','VualPart();');
				
				if(enable_vual_part_button)
				tds[i].appendChild(in2);
				
				if(enable_vual_all_button)
				tds[i].appendChild(in1);
				
				tds[i].appendChild(span);
				break;
			}
		}
		
	}
	//---------------------------------------------------------------------------------------------------
	// Style
	//---------------------------------------------------------------------------------------------------
    function StyleIt()
	{
		var td = $('table.tablebg tbody tr td.row2 table[border="0"][cellspacing="0"] > tbody > tr:nth-child(3) > td:nth-child(2)');
        if(td == null)
            return;
            
        td.html('');
        td.attr('bgcolor', color);
        var a = root.document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('style', 'text-decoration: none;style="color:'+color+';');
        a.setAttribute('onclick', "bbfontstyle('"+tags_before+"[color="+color+"]', '[/color]"+tags_after+"'); return false;");
        a.innerHTML = '<img height="10" width="50" title="FelikZ Color" alt="FelikZ Color" src="images/spacer.gif"/>';
 
        td.html(a);
	}
	//---------------------------------------------------------------------------------------------------
	// Link remaker 
	//---------------------------------------------------------------------------------------------------
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
				var obj = root.document.createElement('iframe');
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
					var obj = root.document.createElement('object');
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
						var obj = root.document.createElement('object');
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
	//---------------------------------------------------------------------------------------------------
	// Linkyfy 
	//---------------------------------------------------------------------------------------------------
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
	//---------------------------------------------------------------------------------------------------
	function PostPass()
	{
		var tables = root.document.getElementsByTagName('table');
		$('table.tablebg').each(function(i, table)
		{
			if(ProfilePass(table) == -1)
			{
				table.parentNode.removeChild(table);
				return;
			}
		});
	}
	//---------------------------------------------------------------------------------------------------
	// Ignore remover 
	//---------------------------------------------------------------------------------------------------
	function IgnoreIt()
	{
			var trs = root.document.getElementsByTagName('tr');
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
	//---------------------------------------------------------------------------------------------------
	// Status It
	//---------------------------------------------------------------------------------------------------
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
							if(enable_status && user.innerHTML == unescape('%u041F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044C'))
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
							if(enable_uncounter)
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
					if(enable_extended_ignore)
					{
						for(var u=0; u<ignore_authors.length; u++)
						{
							if(user_name == ignore_authors[u])
							{
								return -1;
							}
						}
					}
					
					if(enable_punisher)
					{
						$(td).find('img[alt="' + unescape('%u0410%u0432%u0430%u0442%u0430%u0440%u0430%20%u043F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044F') + '"]').each(function(i, img)
						{
							for(var y=0; y<punisher_authors.length; y++)
							{
								if(punisher_authors[y] == user_name)
								{
									img.setAttribute('src', punisher_avatar);
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
								div.innerHTML = punisher_inner_html;
							
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
	//---------------------------------------------------------------------------------------------------
	// Auto Sort
	//---------------------------------------------------------------------------------------------------
	function TestSpecTrForUnread(tr)
	{
		var img = tr.getElementsByTagName('img');
		if(enable_topic_hover_links)
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
							if(enable_auto_topic_sort)
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
		if(sorted_unread.length > 0 && enable_auto_topic_sort)
		{
			for(var i=0; i<sorted_unread.length; i++)
			{
				tru_table.insertBefore(sorted_unread[i],end_table);
			}
		}
		if(sorted_read.length > 0 && enable_auto_topic_sort)
		{
			for(var i=0; i<sorted_read.length; i++)
			{
				tru_table.insertBefore(sorted_read[i],end_table);
			}
		}
	}
	//---------------------------------------------------------------------------------------------------
	// Quote pass
	//---------------------------------------------------------------------------------------------------
	function QuotePass()
	{
		var reg = new RegExp("(\<object.*\>)|(\<img.*alt\=\""+unescape('%u0418%u0437%u043E%u0431%u0440%u0430%u0436%u0435%u043D%u0438%u0435')+"\")",'i');
		$('div.quotecontent').each(function(i, div)
		{
			if(!enable_quote_force_hide && div.innerHTML.length < 1000 && div.innerHTML.match(reg) == null)
				return true;
			var sub_div = root.document.createElement("div");
			sub_div.style.display = 'none';
			sub_div.innerHTML = div.innerHTML;
			div.innerHTML = "<a href=\"javascript: void(0);\" onclick=\"this.parentNode.getElementsByTagName('div')[0].style.display=null; this.parentNode.removeChild(this); return false;\"> [раскрыть цитату] </a>";
			div.appendChild(sub_div);
		});
	}
	//---------------------------------------------------------------------------------------------------
	// Hotkeys
	//---------------------------------------------------------------------------------------------------
	function BindCtrlEnter()
	{
		$('textarea[name="message"]').keydown(function (e) 
		{
			if (e.ctrlKey && e.keyCode == 13) 
			{
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
	//---------------------------------------------------------------------------------------------------
	// Fast qoute
	//---------------------------------------------------------------------------------------------------
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
                var new_txt = area.attr('value') + '\n' +quote;
                area.attr('value', new_txt);
				$('table.tablebg textarea').focus();
			});
			return false; 
		}); 
	}
	//---------------------------------------------------------------------------------------------------
	// Fast reply
	//---------------------------------------------------------------------------------------------------
	function FastReply()
	{
		$('head').append('<script type="text/javascript">var form_name = "postform";var text_name = "message";var bbcode = new Array();var bbtags = new Array(\'[b]\',\'[/b]\',\'[i]\',\'[/i]\',\'[u]\',\'[/u]\',\'[quote]\',\'[/quote]\',\'[code]\',\'[/code]\',\'[list]\',\'[/list]\',\'[list=]\',\'[/list]\',\'[img]\',\'[/img]\',\'[url]\',\'[/url]\',\'[flash=]\', \'[/flash]\',\'[size=]\',\'[/size]\', \'[a_center]\', \'[/a_center]\', \'[a_right]\', \'[/a_right]\', \'[frame]\', \'[/frame]\', \'[line]\', \'[/line]\', \'[offtopic]\', \'[/offtopic]\', \'[s]\', \'[/s]\', \'[spoiler2=]\', \'[/spoiler2]\', \'[spoiler=]\', \'[/spoiler]\', \'[youtube]\', \'[/youtube]\');var imageTag = false;var help_line = {			b:unescape(\'%u0416%u0438%u0440%u043D%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bb%5Dtext%5B/b%5D\'),			i:unescape(\'%u041D%u0430%u043A%u043B%u043E%u043D%u043D%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bi%5Dtext%5B/i%5D\'),			u:unescape(\'%u041F%u043E%u0434%u0447%u0435%u0440%u043A%u043D%u0443%u0442%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bu%5Dtext%5B/u%5D\'),			q:unescape(\'%u0426%u0438%u0442%u0430%u0442%u0430%3A%20%5Bquote%5Dtext%5B/quote%5D\'),			c:unescape(\'%u041A%u043E%u0434%3A%20%5Bcode%5Dcode%5B/code%5D\'),			l:unescape(\'%u0421%u043F%u0438%u0441%u043E%u043A%3A%20%5Blist%5Dtext%5B/list%5D\'),			o:unescape(\'%u041D%u0443%u043C%u0435%u0440%u043E%u0432%u0430%u043D%u043D%u044B%u0439%20%u0441%u043F%u0438%u0441%u043E%u043A%3A%20%5Blist%3D%5Dtext%5B/list%5D\'),			p:unescape(\'%u0412%u0441%u0442%u0430%u0432%u0438%u0442%u044C%20%u0438%u0437%u043E%u0431%u0440%u0430%u0436%u0435%u043D%u0438%u0435%3A%20%5Bimg%5Dhttp%3A//image_url%5B/img%5D\'),			w:unescape(\'%u0412%u0441%u0442%u0430%u0432%u0438%u0442%u044C%20%u0441%u0441%u044B%u043B%u043A%u0443%3A%20%5Burl%5Dhttp%3A//url%5B/url%5D%20%u0438%u043B%u0438%20%5Burl%3Dhttp%3A//url%5DURL%20text%5B/url%5D\'),			s:unescape(\'%u0426%u0432%u0435%u0442%20%u0448%u0440%u0438%u0444%u0442%u0430%3A%20%5Bcolor%3Dred%5Dtext%5B/color%5D%20%u0421%u043E%u0432%u0435%u0442%3A%20%u0412%u044B%20%u043C%u043E%u0436%u0435%u0442%u0435%20%u0438%u0441%u043F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u044C%20%u0442%u0430%u043A%u0436%u0435%20%u043A%u043E%u043D%u0441%u0442%u0440%u0443%u043A%u0446%u0438%u044E%20color%3D%23FF0000\'),			f:unescape(\'%u0420%u0430%u0437%u043C%u0435%u0440%20%u0448%u0440%u0438%u0444%u0442%u0430%3A%20%5Bsize%3D85%5Dsmall%20text%5B/size%5D\'),			e:unescape(\'%u0421%u043F%u0438%u0441%u043E%u043A%3A%20%u0434%u043E%u0431%u0430%u0432%u0438%u0442%u044C%20%u044D%u043B%u0435%u043C%u0435%u043D%u0442%20%u0441%u043F%u0438%u0441%u043A%u0430\'),			d:unescape(\'%u0424%u043B%u044D%u0448%3A%20%5Bflash%3Dwidth%2Cheight%5Dhttp%3A//url%5B/flash%5D\'),			t:unescape(\'%7B%20BBCODE_T_HELP%20%7D\'),			tip:unescape(\'%u0421%u043E%u0432%u0435%u0442%3A%20%u043C%u043E%u0436%u043D%u043E%20%u0431%u044B%u0441%u0442%u0440%u043E%20%u043F%u0440%u0438%u043C%u0435%u043D%u0438%u0442%u044C%20%u0441%u0442%u0438%u043B%u0438%20%u043A%20%u0432%u044B%u0434%u0435%u043B%u0435%u043D%u043D%u043E%u043C%u0443%20%u0442%u0435%u043A%u0441%u0442%u0443.\')							,cb_22:unescape(\'%u0412%u044B%u0440%u0430%u0432%u043D%u0438%u0432%u0430%u043D%u0438%u0435%20%u043F%u043E%20%u0446%u0435%u043D%u0442%u0440%u0443%3A%20%5Ba_center%5Dtext%5B/a_center%5D\')							,cb_24:unescape(\'%u0412%u044B%u0440%u0430%u0432%u043D%u0438%u0432%u0430%u043D%u0438%u0435%20%u043F%u043E%20%u043F%u0440%u0430%u0432%u043E%u043C%u0443%20%u043A%u0440%u0430%u044E%3A%20%5Ba_right%5Dtext%5B/a_right%5D\')							,cb_26:unescape(\'%u0422%u0435%u043A%u0441%u0442%20%u0432%20%u0440%u0430%u043C%u043A%u0435%3A%20%5Bframe%5Dtext%5B/frame%5D\')							,cb_28:unescape(\'%u0413%u043E%u0440%u0438%u0437%u043E%u043D%u0442%u0430%u043B%u044C%u043D%u0430%u044F%20%u043B%u0438%u043D%u0438%u044F\')							,cb_30:unescape(\'%u041E%u0444%u0444%u0442%u043E%u043F%3A%20%5Bofftopic%5Dtext%5B/offtopic%5D\')							,cb_32:unescape(\'%u0417%u0430%u0447%u0451%u0440%u043A%u043D%u0443%u0442%u044B%u0439%20%u0442%u0435%u043A%u0441%u0442%3A%20%5Bs%5Dtext%5B/s%5D\')							,cb_34:unescape(\'%u0421%u043A%u0440%u044B%u0432%u0430%u0435%u043C%u043E%u0435%20%u0441%u043E%u0434%u0435%u0440%u0436%u0438%u043C%u043E%u0435%3A%20%5Bspoiler2%3D%u043D%u0430%u0437%u0432%u0430%u043D%u0438%u0435%20%u0441%u043F%u043E%u0439%u043B%u0435%u0440%u0430%5Dtext%5B/spoiler2%5D\')							,cb_36:unescape(\'%u0421%u043A%u0440%u044B%u0432%u0430%u0435%u043C%u043E%u0435%20%u0441%u043E%u0434%u0435%u0440%u0436%u0438%u043C%u043E%u0435%3A%20%5Bspoiler%3D%u043D%u0430%u0437%u0432%u0430%u043D%u0438%u0435%20%u0441%u043F%u043E%u0439%u043B%u0435%u0440%u0430%5Dtext%5B/spoiler%5D\')							,cb_38:unescape(\'%u0412%u0441%u0442%u0440%u043E%u0435%u043D%u043D%u044B%u0439%20%u043F%u043B%u0435%u0435%u0440%3A%20%5Byoutube%5D%u0421%u0441%u044B%u043B%u043A%u0430%20%u043D%u0430%20%u0441%u0442%u0440%u0430%u043D%u0438%u0446%u0443%20%u0432%u0438%u0434%u0435%u043E%5B/youtube%5D\')					};</script>')
				.append('<script type="text/javascript" src="/phpBB/styles/subsilver2/template/editor.js"></script>');

		var url = $('div#pagecontent table tr td[align="left"][valign="middle"][nowrap="nowrap"]:last a:nth-child(2)').attr('href');
		$.get(url, null, function(data)
		{
			SetPageFooterFormFromData(data);

			if(enable_smiles)
				SmileIt();
			if(enable_style && theme == 0)
				StyleIt();
			if(enable_vualizator && theme == 0)
				VualIt();
			BindCtrlEnter();
		});
		
	}
	//---------------------------------------------------------------------------------------------------
	// Fast paging
	//---------------------------------------------------------------------------------------------------
    function FastPaging()
    {
        var first = true;
        $('table[class!="tablebg"] tr td.gensmall[width="100%"][align="right"] b').each(function()
        {
            if(first)
            {
                $(this).find('a[href!="#"]').click(function()
                {
                    $.get($(this).attr('href'), null, _FPCallback);
                    return false;
                });
                first = false;
            }
            else
            {
                $(this).find('a[href!="#"]').click(function()
                {
                    $.get($(this).attr('href'), null, _FPCallbackToTop);
                    return false;
                });
                first = true;
            }
        });
    }
    function _FPCallback(data)
    {
        var content = $(data).find('#pagecontent');
        $('#pagecontent').replaceWith(content);
        FastPaging();
        if(enable_fast_reply)
            FastQuote();
    }
    function _FPCallbackToTop(data)
    {
        _FPCallback(data);
        $('html, body').animate( { scrollTop: $("#pageheader").offset().top }, 500);
    }
    
	//---------------------------------------------------------------------------------------------------
	// General Scripts
	//---------------------------------------------------------------------------------------------------
	function insertAfter(newElement,targetElement) {
		//target is what you want it to go after. Look for this elements parent.
		var parent = targetElement.parentNode;
	 
		//if the parents lastchild is the targetElement...
		if(parent.lastchild == targetElement) {
			//add the newElement after the target element.
			parent.appendChild(newElement);
			} else {
			// else the target has siblings, insert the new element between the target and it's next sibling.
			parent.insertBefore(newElement, targetElement.nextSibling);
			}
	}
	root.document.title = root.document.title + ' • ForumClient v' + version + ' • by FelikZ';
	var datebar = root.document.getElementById('datebar');
	var div_info = root.document.createElement('div');
	div_info.setAttribute('style', 'float:right;');
	div_info.innerHTML = "• Forum client v" + version + " • by <a href='http://thefelikz.blogspot.com/' title='Блог разработчика' style='color:darkred;letter-spacing:1px;'><strong>FelikZ</strong></a>";
	datebar.appendChild(div_info);
	//---------------------------------------------------------------------------------------------------
	// Start scripts
	//---------------------------------------------------------------------------------------------------
	if(enable_quote_force_hide)
		enable_quote_hider = true;
	switch(cur_location)
	{
		case 1:	// posting
			if(enable_smiles)
				SmileIt();
			if(enable_style && theme == 0)
				StyleIt();
			if(enable_vualizator && theme == 0)
				VualIt();
			if(enable_quote_hider)
				QuotePass();
			break;
		case 2: // viewing a topic
			if(theme == 0)
				PostPass();
			if(enable_ignore_remover && theme == 0)
				IgnoreIt();
			if(enable_flash_videos)
				LinksPass();
			if(enable_quote_hider)
				QuotePass();
			if(enable_fast_reply)
			{
				FastReply();
				FastQuote();
			}
            if(enable_fast_paging)
            {
                FastPaging();
            }
			break;
		case 3: // viewing a forum
			AddStyle();
			if(enable_auto_topic_sort || enable_topic_hover_links && theme == 0)
				AutoSort();
			break;
	}
	// bind hotkeys
	SetHotkeys(cur_location);
	
	if(enable_linkyfy)
		LinkyfyIt();
	//---------------------------------------------------------------------------------------------------
})();