
// ==UserScript==
// @name           ForumClient 2 [Alkar]
// @namespace      FelikZ
// @description    enjoy it :)
// @include        http://games.alkar.net/phpBB*
// @version        3
// @author         FelikZ ( http://thefelikz.blogspot.com/ )
// ==/UserScript==

(function() 
{
    //---------------------------------------------------------------------------------------------------
    // Settings
    //---------------------------------------------------------------------------------------------------
    /***************************************************
    General settings
    ***************************************************/
    function Script()
    {
        var updater_version = 3;
        var soptions = {
            "enable_smiles": true,                //Показывать новые смайлы
            "enable_style": true,                //Показывать стильную кнопку
            "enable_vualizator": true,            //Включить вуализатор
            "enable_linkyfy": true,                //Делать текстовые ссылки кликабельными
            "enable_flash_videos": true,            //Менять ссылки видео на флеш

            "enable_quote_hider": true,            //Прятать цитаты. Прячет длинные цитаты (1000+ символов) / цитаты с картинками, видео
            "enable_quote_force_hide": false,    //Прятать все цитаты без разбору

            "enable_ignore_remover": true,        //Удалять сообщения игнорируемого пользоватедя, целиком
            "enable_uncounter": false,            //Удалять ПК
            "enable_status": true,                //Показывать статус в зависимости от даты регистрации
            "enable_auto_topic_sort": true,        //Авто сортировка тем по "отвечено" / "не"
            "enable_topic_hover_links": true,    //Подсветка тем + ссылки
            "enable_extended_ignore": false,        //Удалять сообщения описанных ниже пользователей*
            "enable_punisher": false,            //FFFFFFFFFFFFFFFUUUUUUUUUUUU mode
            "theme": 0,                            //Тема на форуме: 0 - стандартная, 1 - prosilver
            /***************************************************
            Smile settings
            ***************************************************/
            "enable_qip_smiles": true,            //Показывать смайлы qip
            "enable_goha_smiles": true,            //Показывать смайлы гохи
            "enable_anime_smiles": true,            //Показывать смайлы анимэ
            "enable_yap_smiles": true,            //Показывать смайлы ЯПлакал.com
            "enable_spoiler": true,
            /***************************************************
            Style settings
            ***************************************************/
            "tags_before": "",                    //Теги перед текстом
            "color": "#220000",                    //Цвет текста
            "tags_after": "",                    //Теги после текста
            /***************************************************
            Vualizator settings
            ***************************************************/
            "enable_auto_vualization": true,            //Включить авто-вуализацию
            /***************************************************
            Fast settings
            ***************************************************/
            "enable_fast_reply": true,              //Включить быстрые ответы
            "enable_fast_paging": true,             //Включить быстрые переходы по теме, без перезагрузки страницы
            "enable_fast_refresh": true,            //Включить быстрое обновление списка тем
            "enable_auto_page_refresh": true,       //Включить авто-обновление списка тем
            "auto_page_refresh_interval": 30,       //Интервал авто-обновления (сек)
            /***************************************************
            Twitter settings
            ***************************************************/
            "enable_twitter_block": true,               //ключить FelikZ's Mind
            "twits_count": 12,                          //Колличество последних твитов
            //---------------------------------------------------------------------------------------------------
            // Ignore arrays
            //---------------------------------------------------------------------------------------------------
            "ignore_authors": "",                                                     //Пользователи в игноре
            "punisher_authors": "",                                                   //Панишед
            "punisher_avatar": "http://img405.imageshack.us/img405/994/ffffuuuu.gif", //Аватара для панишед
            "punisher_inner_html": "<span style='font-weight: bold,'><span style='font-size: 150%; line-height: normal;'>Я нубъ и апазорился.ок</span></span>",
            // Smile arrays
            //------------------------------------------------------------------------------------------------------
            "qip_smiles": [
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
            ],
            //----------------------------------
            "goha_smiles": [
                "http://img16.imageshack.us/img16/8338/emolol.gif",
                "http://img16.imageshack.us/img16/1853/goplol.gif",
                "http://img16.imageshack.us/img16/5534/greenlol.gif",
                "http://img16.imageshack.us/img16/2186/hapydancsmil.gif",
                "http://img16.imageshack.us/img16/644/pandaredlol.gif",
                "http://img16.imageshack.us/img16/8002/redlol.gif",
                "http://img132.imageshack.us/img132/4035/plus1.gif",
                "http://img132.imageshack.us/img132/5029/eusathink.gif"
            ],
            //----------------------------------
            "anime_smiles": [
                "http://img8.imageshack.us/img8/7531/112gzr.gif",
                "http://img8.imageshack.us/img8/162/51503725.gif",
                "http://img8.imageshack.us/img8/66/26332379.gif",
                "http://img27.imageshack.us/img27/6862/81266344.gif",
                "http://img8.imageshack.us/img8/4416/61583659.gif",
                "http://img16.imageshack.us/img16/1905/57567350.gif",
                "http://img15.imageshack.us/img15/3682/38114373.gif",
                "http://img13.imageshack.us/img13/2637/17759245.gif",
                "http://img15.imageshack.us/img15/7315/24336725.gif"
            ],
            "yap_smiles": [
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
            ]
        };
    }
    //---------------------------------------------------------------------------------------------------
    // /End of Settings
    //---------------------------------------------------------------------------------------------------
    
    var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
    // load jQuery
    //----------------------------------
    var jq = document.createElement('script');
    jq.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js');
    jq.setAttribute('charset', 'utf-8');
    jq.setAttribute('type', 'text/javascript');
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(jq);
    //----------------------------------
    var scr = root.document.createElement('script');
    var fstring = Script.toString(); 
    var code   = /\{([\S\s]*)\}$/i.exec(fstring)[1]; 
    
    scr.setAttribute('type', 'text/javascript');
    scr.setAttribute('charset', 'utf-8');
    scr.innerHTML = "eval(unescape('" +escape(code)+ "'));"; 
    //----------------------------------
    head.appendChild(scr);
    
    var scr2 = root.document.createElement('script');
    scr2.setAttribute('type', 'text/javascript');
    scr2.setAttribute('charset', 'utf-8');
    scr2.setAttribute('src', 'http://alkar-forum-client.googlecode.com/svn/trunk/alkar_forum_client.user.js');
    head.appendChild(scr2);
})();