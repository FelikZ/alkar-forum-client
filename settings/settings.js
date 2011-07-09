function GetSettingsHtml()
{
    var html = "<style type=\"text/css\">\
                div#settings_box {\
                    background-color:#ebebeb;\
                    font-family: verdana,helvetica,arial,sans-serif;\
                    font-size: 12px;\
                    text-align: left;\
                    margin: 0;\
                    padding: 0;\
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
                div#settings_box label {\
                    cursor: pointer;\
                }\
                </style>";
    html += "<div id=\"settings_box\">\
    <form id=\"settings\" method=\"post\" action=\".\">\
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
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_status\" />                <label>Показывать статус в зависимости от даты регистрации</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_topic_sort\" />        <label>Авто сортировка тем по \"отвечено\" / \"не\"</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_topic_hover_links\" />    <label>Подсветка тем + ссылки</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_extended_ignore\" />        <label>Удалять сообщения описанных ниже пользователей*</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_punisher\" />            <label>FFFFFFFFFFFFFFFUUUUUUUUUUUU mode</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><select name=\"theme\">\
            <option value=\"0\">Стандартная</option>\
            <option value=\"1\">Prosilver</option>\
        </select>\
        <label>тема на форуме</label></div>\
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
        <div class=\"script_option\"><input type=\"input\" name=\"tags_before\" value=\"\" />        <label>Теги перед текстом</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"color\" value=\"#220000\" onfocus=\"$('#text_color').css('color', this.value);\" onchange=\"$('#text_color').css('color', this.value);\" maxlength=\"14\" />        <label id=\"text_color\">Цвет текста</label></div> <span style='float:left;'>(<a href=\"http://www.colorpicker.com/\" target=\"_blank\">выбрать цвет</a>)</span>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"tags_after\" value=\"\" />        <label>Теги после текста</label></div>\
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
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_reply\" />          <label>Включить быстрые ответы</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_paging\" />         <label>Включить быстрые переходы по теме, без перезагрузки страницы</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_refresh\" />        <label>Включить быстрое обновление списка тем</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_page_refresh\" />   <label>Включить авто-обновление списка тем</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"auto_page_refresh_invterval\" value=\"30\" /> <label>Интервал авто-обновления (сек)</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Twitter settings\
        -->\
        <h2>Настройка twitter'а</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_twitter_block\" />       <label>Включить FelikZ's Mind</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"twits_count\" value=\"12\" />     <label>Колличество последних твитов</label></div>\
        <div style=\"clear:both;\"></div>\
    </form>";
    return html;
}
function OnCompleteLoad()
{
    $('.script_option:has(\"input[type=checkbox]\")').click(function(e) {
        var cb = $(this).find('input[type=checkbox]');
        if(cb.is(':checked'))
        {
            cb.attr('checked', false);
        }
        else
        {
            cb.attr('checked', true);
        }
    });
}