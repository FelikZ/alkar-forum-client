// ==UserScript==
// @name           ForumClient [Alkar]
// @namespace      FelikZ
// @description    enjoy it :)
// @include        http://games.alkar.net/phpBB*
// ==/UserScript==
(function() 
{
	//---------------------------------------------------------------------------------------------------
	// Settings
	//---------------------------------------------------------------------------------------------------
	/***************************************************
	General settings
	***************************************************/
	var enable_smiles = true;				//Показывать новые смайлы
	var enable_style = true;				//Показывать стильную кнопку
	var enable_vualizator = true;			//Включить вуализатор
	var enable_linkyfy = true;				//Делать текстовые ссылки кликабельными
	var enable_flash_videos = true;			//Менять ссылки видео на флеш
	
	var enable_quote_hider = true;			//Прятать цитаты. Прячет длинные цитаты (1000+ символов) / цитаты с картинками, видео
	var enable_quote_force_hide = false;	//Прятать все цитаты без разбору
	
	var enable_ignore_remover = true;		//Удалять сообщения игнорируемого пользоватедя, целиком
	var enable_uncounter = true;			//Удалять ПК
	var enable_status = true;				//Показывать статус в зависимости от даты регистрации
	var enable_auto_topic_sort = true;		//Авто сортировка тем по "отвечено" / "не"
	var enable_topic_hover_links = true;	//Подсветка тем + ссылки
	var enable_extended_ignore = false;		//Удалять сообщения описанных ниже пользователей*
	var enable_punisher = false;			//FFFFFFFFFFFFFFFUUUUUUUUUUUU mode
	var theme = 0;							//Тема на форуме: 0 - стандартная, 1 - prosilver
	/***************************************************
	Smile settings
	***************************************************/
	var enable_qip_smiles = true;			//Показывать смайлы qip
	var enable_goha_smiles = true;			//Показывать смайлы гохи
	var enable_anime_smiles = true;			//Показывать смайлы анимэ
	var enable_yap_smiles = true;			//Показывать смайлы ЯПлакал.com
	var enable_spoiler = true;
	/***************************************************
	Style settings
	***************************************************/
	var tags_before = "";					//Теги перед текстом
	var color = "#220000";					//Цвет текста
	var tags_after = "";					//Теги после текста
	/***************************************************
	Vualizator settings
	***************************************************/
	var enable_vual_all_button = false;		//Показывать кнопку "завуалировать все"
	var enable_vual_part_button = false;	//Показывать кнопку "завуалировать часть"
	var auto_vualization = true;			//Включить авто-вуализацию
	
	//---------------------------------------------------------------------------------------------------
	// Ignore arrays
	//---------------------------------------------------------------------------------------------------
	var ignore_authors = new Array();			//("Felikz");
	var punisher_authors = new Array();			//("Felikz");
	var punisher_avatar = "http://img405.imageshack.us/img405/994/ffffuuuu.gif";
	var punisher_inner_html = "<span style=\"font-weight: bold;\"><span style=\"font-size: 150%; line-height: normal;\">Я нубъ и апазорился.ок</span></span>";
	//---------------------------------------------------------------------------------------------------
	// Smiles
	//---------------------------------------------------------------------------------------------------
	
	// Smile arrays
	//------------------------------------------------------------------------------------------------------
	var qip_smiles = new Array(
	"http://img16.imageshack.us/img16/1474/59588970.gif",
	"http://img16.imageshack.us/img16/3651/21328387.gif",
	"http://img16.imageshack.us/img16/636/60126107.gif",
	"http://img16.imageshack.us/img16/603/15063209.gif",
	"http://img16.imageshack.us/img16/149/63022318.gif",
	"http://img16.imageshack.us/img16/6841/27440985.gif",
	"http://img16.imageshack.us/img16/3858/70081607.gif",
	"http://img16.imageshack.us/img16/7379/98295683.gif",
	"http://img16.imageshack.us/img16/9664/11638824.gif",
	"http://img16.imageshack.us/img16/3098/72183619.gif",
	"http://img16.imageshack.us/img16/2166/21957296.gif",
	"http://img16.imageshack.us/img16/2677/48482627.gif",
	"http://img16.imageshack.us/img16/7307/72825764.gif",
	"http://img16.imageshack.us/img16/5913/18928027.gif",
	"http://img16.imageshack.us/img16/4060/75574763.gif",
	"http://img16.imageshack.us/img16/4589/22956234.gif",
	"http://img16.imageshack.us/img16/2065/35121820.gif",
	"http://img16.imageshack.us/img16/9445/31228367.gif",
	"http://img16.imageshack.us/img16/1545/57928042.gif",
	"http://img16.imageshack.us/img16/5500/71617807.gif",
	"http://img16.imageshack.us/img16/7691/21563409.gif",
	"http://img16.imageshack.us/img16/2193/94102077.gif",
	"http://img16.imageshack.us/img16/626/85925404.gif",
	"http://img16.imageshack.us/img16/223/52489547.gif",
	"http://img16.imageshack.us/img16/5862/63315924.gif",
	"http://img16.imageshack.us/img16/9052/51061320.gif",
	"http://img16.imageshack.us/img16/6523/63604431.gif",
	"http://img16.imageshack.us/img16/6821/79846507.gif",
	"http://img16.imageshack.us/img16/6595/68945793.gif",
	"http://img16.imageshack.us/img16/8851/23635877.gif",
	"http://img16.imageshack.us/img16/8169/91434478.gif",
	"http://img16.imageshack.us/img16/7159/41456276.gif",
	"http://img16.imageshack.us/img16/9687/13868181.gif",
	"http://img16.imageshack.us/img16/6792/25108241.gif",
	"http://img16.imageshack.us/img16/7153/66946959.gif",
	"http://img16.imageshack.us/img16/1843/69678388.gif",
	"http://img16.imageshack.us/img16/967/45744481.gif",
	"http://img16.imageshack.us/img16/8415/35620811.gif",
	"http://img16.imageshack.us/img16/7824/bobrp.gif",
	"http://img16.imageshack.us/img16/9003/bowk.gif",
	"http://img16.imageshack.us/img16/8965/18437069.gif",
	"http://img16.imageshack.us/img16/5715/84485976.gif",
	"http://img16.imageshack.us/img16/1835/11105684.gif",
	"http://img16.imageshack.us/img16/2963/brberbrb.gif",
	"http://img16.imageshack.us/img16/822/46713123.gif",
	"http://img16.imageshack.us/img16/5604/65020210.gif",
	"http://img16.imageshack.us/img16/1574/94538708.gif",
	"http://img16.imageshack.us/img16/4231/41686570.gif",
	"http://img16.imageshack.us/img16/6111/62331137.gif",
	"http://img16.imageshack.us/img16/9068/28202384.gif",
	"http://img14.imageshack.us/img14/9389/82277031.gif",
	"http://img205.imageshack.us/img205/1787/kysmiles.gif",
	"http://img8.imageshack.us/img8/5299/cry29004875.gif",
	"http://img13.imageshack.us/img13/778/m16xjdjfvi9583613.jpg",
	"http://img382.imageshack.us/img382/6701/smileloh.gif",
	"http://img7.imageshack.us/img7/2930/159953570.gif",
	"http://img29.imageshack.us/img29/4210/starwarsmb.gif",
	"http://img33.imageshack.us/img33/5576/81236651.png",
	"http://img130.imageshack.us/img130/5639/lolcrybyfel.gif",
	"http://img682.imageshack.us/img682/615/7b6e0c0140aa.gif",
	"http://savepic.org/439821.gif"
	//"http://img97.imageshack.us/img97/6443/cooltext444338987.gif"
	);
	//----------------------------------
	var goha_smiles = new Array(
	"http://img16.imageshack.us/img16/8338/emolol.gif",
	"http://img16.imageshack.us/img16/1853/goplol.gif",
	"http://img16.imageshack.us/img16/5534/greenlol.gif",
	"http://img16.imageshack.us/img16/2186/hapydancsmil.gif",
	"http://img16.imageshack.us/img16/644/pandaredlol.gif",
	"http://img16.imageshack.us/img16/8002/redlol.gif",
	"http://img132.imageshack.us/img132/4035/plus1.gif",
	"http://img132.imageshack.us/img132/5029/eusathink.gif"
	);
	//----------------------------------
	var anime_smiles = new Array(
	"http://img8.imageshack.us/img8/7531/112gzr.gif",
	"http://img8.imageshack.us/img8/162/51503725.gif",
	"http://img8.imageshack.us/img8/66/26332379.gif",
	"http://img27.imageshack.us/img27/6862/81266344.gif",
	"http://img8.imageshack.us/img8/4416/61583659.gif",
	"http://img16.imageshack.us/img16/1905/57567350.gif",
	"http://img15.imageshack.us/img15/3682/38114373.gif",
	"http://img13.imageshack.us/img13/2637/17759245.gif",
	"http://img15.imageshack.us/img15/7315/24336725.gif"
	);
	var yap_smiles = new Array(
	"http://yaplakal.com/html/emoticons/agree.gif",
     "http://yaplakal.com/html/emoticons/alk.gif",
     "http://yaplakal.com/html/emoticons/alkash.gif",
     "http://yaplakal.com/html/emoticons/ass.gif",
     "http://yaplakal.com/html/emoticons/cranky.gif",
     "http://yaplakal.com/html/emoticons/cry.gif",
     "http://yaplakal.com/html/emoticons/dead.gif",
     "http://yaplakal.com/html/emoticons/deal.gif",
     "http://yaplakal.com/html/emoticons/disgust.gif",
     "http://yaplakal.com/html/emoticons/figa.gif",
     "http://yaplakal.com/html/emoticons/fight.gif",
     "http://yaplakal.com/html/emoticons/fuck.gif",
     "http://yaplakal.com/html/emoticons/fucking.gif",
     "http://yaplakal.com/html/emoticons/gigi.gif",
     "http://yaplakal.com/html/emoticons/lol.gif",
     "http://yaplakal.com/html/emoticons/moral.gif",
     "http://yaplakal.com/html/emoticons/poke.gif",
     "http://yaplakal.com/html/emoticons/rulez.gif",
     "http://yaplakal.com/html/emoticons/spy.gif",
     "http://yaplakal.com/html/emoticons/why.gif",
     "http://yaplakal.com/html/emoticons/zombie.gif",
     "http://yaplakal.com/html/emoticons/disco.gif",
     "http://yaplakal.com/html/emoticons/shum_lol.gif",
     "http://yaplakal.com/html/emoticons/banan.gif",
     "http://yaplakal.com/html/emoticons/bananfuck.gif",
     "http://yaplakal.com/html/emoticons/bud.gif",
     "http://yaplakal.com/html/emoticons/inv.gif",
     "http://yaplakal.com/html/emoticons/maniac.gif",
     "http://yaplakal.com/html/emoticons/rap.gif",
     "http://yaplakal.com/html/emoticons/tango.gif",
     "http://yaplakal.com/html/emoticons/bravo.gif",
     "http://yaplakal.com/html/emoticons/bayan.gif",
     "http://yaplakal.com/html/emoticons/divide.gif",
     "http://yaplakal.com/html/emoticons/iq0.gif",
     "http://yaplakal.com/html/emoticons/lalala.gif",
     "http://yaplakal.com/html/emoticons/murdered.gif",
     "http://yaplakal.com/html/emoticons/rip.gif",
     "http://yaplakal.com/html/emoticons/rofl.gif",
     "http://yaplakal.com/html/emoticons/scary.gif",
     "http://yaplakal.com/html/emoticons/shoot.gif",
     "http://yaplakal.com/html/emoticons/slava.gif",
     "http://yaplakal.com/html/emoticons/cheer.gif",
     "http://yaplakal.com/html/emoticons/fear.gif",
     "http://yaplakal.com/html/emoticons/fekaloid.gif",
     "http://yaplakal.com/html/emoticons/bdsm.gif",
     "http://yaplakal.com/html/emoticons/old.gif",
     "http://yaplakal.com/html/emoticons/faceoff.gif"
	);
	//---------------------------------------------------------------------------------------------------
	// Do not touch the text below!!!
	//---------------------------------------------------------------------------------------------------
	
	var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	// 0 - anywhere, 1 - post or pm, 2 - view topic
	var cur_location = 0;
	var version = "2.0"
	var loc = "" + window.location;
	//----------------------------------
	if(loc.search(/http:\/\/games.alkar.net\/phpBB/) < 0)
	{
		//alert(2);
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
	//----------------------------------
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
				//------------------------------------------------------------------------------------------------------
				var tds = document.getElementsByTagName("td");
				if(!tds)
					return;
				var first_td = null;
				var pos = 0;
				//----------------------------------
				for(var i=0; i<tds.length; i++)
				{
					if(tds[i].getAttribute("align") != "center")
						continue;
					//----------------------------------	
					first_td = tds[i];
					if(!first_td.innerHTML)
						continue;
					//----------------------------------
					if(first_td.innerHTML.search("insert_text") != -1)
					{
						InsertSmileContainers(first_td);
						break;
					}
				}
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
		var td = root.document.getElementsByTagName('td');
	    for (i = 0, l = td.length; i < l; i++) 
		{
	        if ('Цвет шрифта' == td[i].innerHTML) 
			{
	            td[i].innerHTML = "";
	            td[i].setAttribute('bgcolor',color);
	            var a = root.document.createElement('a');
	            a.setAttribute('href', '#');
	            a.setAttribute('style', 'text-decoration: none;style="color:'+color+';');
				a.setAttribute('onclick', "bbfontstyle('"+tags_before+"[color="+color+"]', '[/color]"+tags_after+"'); return false;");
	            a.innerHTML = '<img height="10" width="50" title="FelikZ Color" alt="FelikZ Color" src="images/spacer.gif"/>';
				
	            td[i].appendChild(a);
	            break;
	        }
	    }
	}
	//---------------------------------------------------------------------------------------------------
	// Link remaker 
	//---------------------------------------------------------------------------------------------------
	function LinksPass()
	{
		var as = root.document.getElementsByTagName('a');
		reg_youtube = new RegExp('youtube\.com\/watch.{1}v=(.{11})','i');
		reg_rutube = new RegExp('rutube\.ru\/tracks\/[0-9]+\.html.*v=(.{32}).*','i');
		reg_bigmir = new RegExp('video\.bigmir\.net\/show\/([0-9]+)*','i');

		for(var i=0; i<as.length; i++)
		{
			var href = as[i].getAttribute('href');
			if(href == null)
				continue;
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
				as[i].parentNode.insertBefore(obj,as[i]);
				as[i].parentNode.removeChild(as[i]);
				i--;
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
					as[i].parentNode.insertBefore(obj,as[i]);
					as[i].parentNode.removeChild(as[i]);
					i--;
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
						as[i].parentNode.insertBefore(obj,as[i]);
						as[i].parentNode.removeChild(as[i]);
						i--;
					}
				}
			}
		}

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
		
		for(var i=0; i<tables.length; i++)
		{
			if(tables[i].getAttribute('class') == 'tablebg')
			{
				var r = ProfilePass(tables[i]);
				if(r == -1)
				{
					tables[i].parentNode.removeChild(tables[i]);
					i--;
					continue;
				}
			}
		}
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
			
			var td = table.getElementsByTagName('td');
			var profile = null;
			var user = null;
			var user_name = null;
			var match = null;
			var is_punisher_target = false;
			for(var i=0; i<td.length; i++)
			{
				if(td[i].getAttribute('class') == "profile")
				//if(td.getAttribute('class') == "profile")
				{
					td2 = td[i].getElementsByTagName('td');
					//td2 = td.getElementsByTagName('td');
					for(var j=0; j<td2.length; j++)
					{
						if(td2[j].getAttribute('class') == "postdetails")
						{
								user = td2[j];
								profile = td[i];
								//profile = td;
								var spans = profile.getElementsByTagName('span');
								for(x=0; x<spans.length; x++)
								{
									if(spans[x].getAttribute('class') == 'postdetails')
									{
										if(enable_status && user.innerHTML == unescape('%u041F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044C')){
											reg = new RegExp('\<b\>'+unescape('%u0417%u0430%u0440%u0435%u0433%u0438%u0441%u0442%u0440%u0438%u0440%u043E%u0432%u0430%u043D')+'\:\<\/b\> (['+unescape('%u0430-%u044F%u0410-%u042F')+']{2}) (['+unescape('%u0430-%u044F%u0410-%u042F')+']{3}) ([0-9]{2})\, ([0-9]{4}) ([0-9]{1,2})\:([0-9]{2})','i');

											match = spans[x].innerHTML.match(reg);
											if(match != null)
											{
												user.innerHTML = GetStatusName(match[2], match[4]);
											}
											else
											{
												reg = new RegExp('\<b\>'+unescape('%u0417%u0430%u0440%u0435%u0433%u0438%u0441%u0442%u0440%u0438%u0440%u043E%u0432%u0430%u043D')+'\:\<\/b\> ([0-9]{2}) (['+unescape('%u0430-%u044F%u0410-%u042F')+']{3}) ([0-9]{4})\, ([0-9]{1,2})\:([0-9]{2})','i');
												match = spans[x].innerHTML.match(reg);
												if(match != null)
												{
													user.innerHTML = GetStatusName(match[2], match[3]);
												}
											}
										}
										if(enable_uncounter)
										{
											reg = new RegExp('\<br.{0,2}\>\<b\>'+unescape('%u0421%u043E%u043E%u0431%u0449%u0435%u043D%u0438%u044F')+'\:\<\/b\> [0-9]*','i');
											spans[x].innerHTML = spans[x].innerHTML.replace(reg, '');
										}
										break;
									}
								}
						}
					}
				}
				else
				{
					
					var bs = td[i].getElementsByTagName('b');
					if(bs != null && bs.length > 0)
					{
						if(bs[0].getAttribute('class') == 'postauthor')
						{
							user_name = bs[0].innerHTML;
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
							continue;
						}
					}
					//alert(enable_punisher);
					//alert(1);
					
					if(enable_punisher)
					{
						var imgs = td[i].getElementsByTagName('img');
						if(imgs != null && imgs.length == 1)
						{
							
							if(imgs[0].getAttribute('alt') == unescape( '%u0410%u0432%u0430%u0442%u0430%u0440%u0430%20%u043F%u043E%u043B%u044C%u0437%u043E%u0432%u0430%u0442%u0435%u043B%u044F'))
							{
								for(var y=0; y<punisher_authors.length; y++)
								{
									if(punisher_authors[y] == user_name)
									{
										imgs[0].setAttribute('src', punisher_avatar);
										imgs[0].setAttribute('width', "120");
										imgs[0].setAttribute('height', "120");
										is_punisher_target = true;
										break;
									}
								}
							}
						}
						
						var divs = td[i].getElementsByTagName('div');
						//alert(1);
						
						if(divs != null && divs.length > 0 && is_punisher_target)
						{
							for(var t=0; t<divs.length; t++)
							{
								if(divs[t].getAttribute('class') != 'postbody')
									continue;
								divs[t].innerHTML = punisher_inner_html;
							
								var spans = td[i].getElementsByTagName('span');
								if(spans != null)
								{
									for(var u=0; u<spans.length; u++)
									{
										if(spans[u].getAttribute('class') == 'postbody' || spans[u].getAttribute('class') == 'gensmall')
										{
											spans[u].innerHTML = '';
											//break;
										}
									}
								}
								break;
							}
						}
					}
				}
			}
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
			var hrefs = tds[i].getElementsByTagName('a');
			var href = '#';
			if(typeof(hrefs[0]) != 'undefined')
			{
				href = hrefs[0].getAttribute('href');
			}
			if(tds[i].getAttribute('class') == 'row1')
			{
				tds[i].setAttribute('onclick', 'location.href="'+ href +'"');
				tds[i].setAttribute('onmouseover', 'this.setAttribute("class", "row1-hover"); this.style.cursor = "pointer"');
				tds[i].setAttribute('onmouseout', 'this.setAttribute("class", "row1");this.style.cursor = "auto";');
			}
			break;
		}
	}
	function AutoSort()
	{
		var table = root.document.getElementsByTagName('table');
		var tru_table = null;
		var end_table = null;
		var sorted_unread = new Array();
		var sorted_read = new Array();
		if(table)
		{
			for(var i=0; i<table.length; i++)
			{
				if(table[i].getAttribute('class') == "tablebg")
				{
					var trs = table[i].getElementsByTagName('tr');
					if(trs)
					{
						if(trs.length > 3)
						{
							for(var j=0; j<trs.length; j++)
							{
								tds = trs[j].getElementsByTagName('td');
								if(tds)
								{
									if(tds.length>5)
									{
										if(TestSpecTrForUnread(trs[j]))
											sorted_unread[sorted_unread.length] = trs[j].cloneNode(true);
										else
											sorted_read[sorted_read.length] = trs[j].cloneNode(true);
											
										tru_table = trs[j].parentNode;
										if(enable_auto_topic_sort)
										{
											trs[j].parentNode.removeChild(trs[j]);
											j--;
										}
									}
									else
									{
										end_table = trs[j];
									}
								}
							}
							break;
						}
					}
				}
			}
		}
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
		var divs = root.document.getElementsByTagName('div');

		var reg = new RegExp("(\<object.*\>)|(\<img.*alt\=\""+unescape('%u0418%u0437%u043E%u0431%u0440%u0430%u0436%u0435%u043D%u0438%u0435')+"\")",'i');
		for(var i=0; i<divs.length; i++)
		{
			if(divs[i].getAttribute('class') == 'quotecontent')
			{
				if(!enable_quote_force_hide && divs[i].innerHTML.length < 1000 && divs[i].innerHTML.match(reg) == null)
					continue;
				var div = root.document.createElement("div");
				div.style.display = 'none';
				div.innerHTML = divs[i].innerHTML;
				divs[i].innerHTML = "<a href=\"javascript: void(0);\" onclick=\"this.parentNode.getElementsByTagName('div')[0].style.display=null; this.parentNode.removeChild(this); return false;\"> [раскрыть цитату] </a>";
				divs[i].appendChild(div);
			}
		}
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
	// Start sripts
	//---------------------------------------------------------------------------------------------------
	if(enable_quote_force_hide)
		enable_quote_hider = true;
	switch(cur_location)
	{
		case 1:	// posting
			if(enable_style && theme == 0)
				StyleIt();
			if(enable_vualizator && theme == 0)
				VualIt();
			if(enable_smiles)
				SmileIt();
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
			break;
		case 3: // viewing a forum
			AddStyle();
			if(enable_auto_topic_sort || enable_topic_hover_links && theme == 0)
				AutoSort();
			break;
	}
	if(enable_linkyfy)
		LinkyfyIt();
	//---------------------------------------------------------------------------------------------------
})();