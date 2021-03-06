function GetSettingsHtml()
{
    var html = "<style type=\"text/css\">\
                div#settings_box {\
                    background-color:#ebebeb;\
                    font-family: verdana,helvetica,arial,sans-serif;\
                    font-size: 12px;\
                    text-align: left;\
                    margin: 0 0 30px 0;\
                    padding: 0;\
                    width:508px;\
                }\
                div#settings_box h2 {\
                    font-size: 16px;\
                    color: gray;\
                    margin: 10px 0 0 0;\
                    font-weight: bold;\
                }\
                div#settings_box h2.first {\
                    margin: 0;\
                }\
                div#settings_box form label, div#settings_box form input {\
                    line-height: 14px;\
                    margin: 2px 0 2px 5px;\
                    padding: 0;\
                }\
                div#settings_box div.script_option, div#settings_box div.script_option label {\
                    cursor: pointer;\
                }\
                div#settings_box textarea {\
                    width: 500px;\
                    height: 300px;\
                    font-family: verdana,helvetica,arial,sans-serif;\
                    font-size: 12px !important;\
                }\
                </style>";
    html += "<div id=\"settings_box\">\
    <form id=\"settings\" name=\"settings\" method=\"post\" action=\".\">\
        <h2 class=\"first\">Обычные настройки</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_smiles\" />                <label>Показывать новые смайлы</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_style\" />                <label>Показывать стильную кнопку</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_vualizator\" />            <label>Включить вуализатор</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_linkyfy\" />                <label>Делать текстовые ссылки кликабельными</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_flash_videos\" />        <label>Менять ссылки видео на флеш</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_quote_hider\" />            <label>Прятать цитаты. Прячет длинные цитаты (1000+ символов) / цитаты с картинками, видео</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_quote_force_hide\" />    <label>Прятать все цитаты без разбору</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_ignore_remover\" />        <label>Удалять сообщения игнорируемого пользоватедя, целиком</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_uncounter\" />            <label>Удалять ПК</label></div>\
        <div style=\"clear:both;\"></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_topic_sort\" />        <label>Авто сортировка тем по \"отвечено\" / \"не\"</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_topic_hover_links\" />    <label>Подсветка тем + ссылки</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_extended_ignore\" />        <label>Удалять сообщения описанных ниже пользователей*</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_punisher\" />            <label>FFFFFFFFFFFFFFFUUUUUUUUUUUU mode</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"theme\" value=\"0\" maxlength=\"1\" size=\"1\" />\
        <label>тема на форуме (0-стандартная, 1-prosilver)</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Smile settings\
        -->\
        <h2>Настройка смайлов</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_qip_smiles\" />            <label>Показывать смайлы qip</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_goha_smiles\" />            <label>Показывать смайлы гохи</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_anime_smiles\" />        <label>Показывать смайлы анимэ</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_yap_smiles\" />            <label>Показывать смайлы ЯПлакал.com</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_spoiler\" />             <label>Обернуть смайлы в спойлеры</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Style settings\
        -->\
        <h2>Настройка стиля</h2>\
        <div class=\"script_option\"><input type=\"text\" name=\"tags_before\" value=\"\" />        <label>Теги перед текстом</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"color\" value=\"#220000\" onfocus=\"$('#text_color').css('color', this.value);\" onchange=\"$('#text_color').css('color', this.value);\" maxlength=\"14\" />        <label id=\"text_color\">Цвет текста</label></div> <span style='float:left;'>(<a href=\"http://www.colorpicker.com/\" target=\"_blank\">выбрать цвет</a>)</span>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"tags_after\" value=\"\" />        <label>Теги после текста</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Vualizator settings\
        -->\
        <h2>Настройка вуализатора</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_vualization\" />            <label>Включить авто-вуализацию</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Fast settings\
        -->\
        <h2>Настройки Ajax'а</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_paging\" />         <label>Включить быстрые переходы по теме, без перезагрузки страницы</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_refresh\" />        <label>Включить быстрое обновление списка тем</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_page_refresh\" />   <label>Включить авто-обновление списка тем</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"auto_page_refresh_interval\" value=\"30\" /> <label>Интервал авто-обновления (сек)</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Twitter settings\
        -->\
        <h2>Настройка twitter'а</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_twitter_block\" />       <label>Включить FelikZ's Mind</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"twits_count\" value=\"12\" />     <label>Колличество последних твитов</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Ignore settings\
        -->\
        <h2>Настройка игнора</h2>\
        <div class=\"script_option\"><input type=\"text\" name=\"ignore_authors\" value=\"\" />       <label>Пользователи в игноре</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"punisher_authors\" value=\"\" />       <label>Панишед пользователи</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"text\" name=\"punisher_avatar\" value=\"\" />       <label>Аватара для панишед пользователей</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Qip smiles\
        -->\
        <h2>QIP смайлы</h2>\
        <div class=\"script_option\"><textarea name=\"qip_smiles\" /></textarea></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Goha smiles\
        -->\
        <h2>Goha смайлы</h2>\
        <div class=\"script_option\"><textarea name=\"goha_smiles\" /></textarea></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Anime smiles\
        -->\
        <h2>Anime смайлы</h2>\
        <div class=\"script_option\"><textarea name=\"anime_smiles\" /></textarea></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Yap smiles\
        -->\
        <h2>ЯП смайлы</h2>\
        <div class=\"script_option\"><textarea name=\"yap_smiles\" /></textarea></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Export/Import\
        -->\
        <h2>Управление настройками</h2>\
        <a href=\"javascript:void(0);\" onclick=\"if(confirm('Точно хотите сбросить все настройки на заводские?')){$.jStorage.set('is_stored_options', 0); window.location=window.location;}\">Сброс</a>\
        <a href=\"javascript:void(0);\" onclick=\"$('form#settings #export_import').attr('value', ObjToString(soptions))\" >Экспорт</a>\
        <a href=\"javascript:void(0);\" onclick=\"if(confirm('Точно хотите сделать импорт? Все текущие настройки будут перезаписаны.')){StringToObj($('form#settings #export_import').attr('value')); Show();};\" >Импорт</a>\
        <div class=\"script_option\"><textarea id=\"export_import\" /></textarea></div>\
        <div style=\"clear:both;\"></div>\
    </form>";
    return html;
}
function ObjToString(obj)
{
    var rez = "{";
    var once = false;
    $.each(obj, function(key, val) {
        once = true;
        rez += '"' + key +'":';
        switch(typeof(val))
        {
            case 'boolean':
                if(val)
                {
                    rez += 'true,';
                }
                else
                {
                    rez += 'false,';
                }
                break;
            case 'object':
            case 'array':
                rez += '["' + $.trim(val.toString().replace(/,(.*?)/gi, '","$1')) + '"],';
                break;
            case 'number':
                rez += String(val) + ',';
                break;
            default:
                rez += '"' + $.trim(String(val)) + '",';
                break;
        }
    });
    if(once)
    {
        rez = rez.substring(0, rez.length-1);
    }
    return rez+"}";
}
function StringToObj(str)
{
    eval('var opt = ' + str + ';');
    if(typeof(opt) == 'object')
    {
        soptions = opt;
    }
}
function OnLoadData()
{
    // Load data to window
    $.each(soptions, function(key, val) {
        var field = $('#settings_box form#settings input[name='+key+'], #settings_box form#settings textarea[name='+key+']');
        if(field.length)
        {
            if(typeof(val) == 'boolean')
            {
                if(val)
                {
                    field.attr('checked', true);
                }
                else
                {
                    field.attr('checked', false);
                }
            }
            else if((typeof(val) == 'object' || typeof(val) == 'array') && String(field.get(0).tagName).toLowerCase() == 'textarea')
            {
                field.attr('value', val.toString().replace(/,/g, ',\n'));
            }
            else
            {
                field.attr('value', val);
            }
        }
    });
    // Handle check options
    $('#settings_box form#settings div.script_option:has("input:checkbox")').click(function(e) {
        var cb = $(this).find('input:checkbox');
        if(cb.is(':checked'))
        {
            cb.attr('checked', false);
            eval('soptions.'+cb.attr('name')+' = false;');
        }
        else
        {
            cb.attr('checked', true);
            eval('soptions.'+cb.attr('name')+' = true;');
        }
    });
    $('#settings_box form#settings div.script_option input:checkbox').click(function(e){
        if($(this).is(':checked'))
        {
            $(this).attr('checked', false);
        }
        else
        {
            $(this).attr('checked', true);
        }
    });
    // Handle text options
    $('#settings_box form#settings div.script_option:has("input[type=text]"), #settings_box form#settings .script_option:has("textarea")').change(function(e) {
        var cb = $(this).find('input[type=text], textarea');
        var nm = cb.attr('name');
        var vl = cb.attr('value');
        if(typeof(nm) == 'undefined' || nm == null || nm == '' || typeof(vl) == 'undefined' || vl == null)
        {
            return true;
        }
        switch(nm)
        {
            case 'qip_smiles':
            case 'goha_smiles':
            case 'anime_smiles':
            case 'yap_smiles':
                eval('soptions.' + nm + ' = ["' + $.trim(vl.split(',\n').toString()).replace(/,(.*?)/gi, '","$1') + '"];');
                break;
            default:
                eval('soptions.' + nm + ' = "' + $.trim(vl) + '";');
                break;
        }
    });
}
function OnSaveData()
{
    $.jStorage.set('is_stored_options', 1);
    $.jStorage.set('soptions', soptions);
}
function Show()
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
}