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
        <h2 class=\"first\">������� ���������</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_smiles\" />                <label>���������� ����� ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_style\" />                <label>���������� �������� ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_vualizator\" />            <label>�������� ����������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_linkyfy\" />                <label>������ ��������� ������ �������������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_flash_videos\" />        <label>������ ������ ����� �� ����</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_quote_hider\" />            <label>������� ������. ������ ������� ������ (1000+ ��������) / ������ � ����������, �����</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_quote_force_hide\" />    <label>������� ��� ������ ��� �������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_ignore_remover\" />        <label>������� ��������� ������������� ������������, �������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_uncounter\" />            <label>������� ��</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_status\" />                <label>���������� ������ � ����������� �� ���� �����������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_topic_sort\" />        <label>���� ���������� ��� �� \"��������\" / \"��\"</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_topic_hover_links\" />    <label>��������� ��� + ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_extended_ignore\" />        <label>������� ��������� ��������� ���� �������������*</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_punisher\" />            <label>FFFFFFFFFFFFFFFUUUUUUUUUUUU mode</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><select name=\"theme\">\
            <option value=\"0\">�����������</option>\
            <option value=\"1\">Prosilver</option>\
        </select>\
        <label>���� �� ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Smile settings\
        -->\
        <h2>��������� �������</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_qip_smiles\" />            <label>���������� ������ qip</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_goha_smiles\" />            <label>���������� ������ ����</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_anime_smiles\" />        <label>���������� ������ �����</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_yap_smiles\" />            <label>���������� ������ �������.com</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_spoiler\" />             <label>�������� ������ � ��������</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Style settings\
        -->\
        <h2>��������� �����</h2>\
        <div class=\"script_option\"><input type=\"input\" name=\"tags_before\" value=\"\" />        <label>���� ����� �������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"color\" value=\"#220000\" onfocus=\"$('#text_color').css('color', this.value);\" onchange=\"$('#text_color').css('color', this.value);\" maxlength=\"14\" />        <label id=\"text_color\">���� ������</label></div> (<a href=\"http://www.colorpicker.com/\" target=\"_blank\">������� ����</a>)\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"tags_after\" value=\"\" />        <label>���� ����� ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Vualizator settings\
        -->\
        <h2>��������� �����������</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_vualization\" />            <label>�������� ����-����������</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Fast settings\
        -->\
        <h2>��������� Ajax'�</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_reply\" />          <label>�������� ������� ������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_paging\" />         <label>�������� ������� �������� �� ����, ��� ������������ ��������</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_fast_refresh\" />        <label>�������� ������� ���������� ������ ���</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_auto_page_refresh\" />   <label>�������� ����-���������� ������ ���</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"auto_page_refresh_invterval\" value=\"30\" /> <label>�������� ����-���������� (���)</label></div>\
        <div style=\"clear:both;\"></div>\
        <!--\
        Twitter settings\
        -->\
        <h2>��������� twitter'�</h2>\
        <div class=\"script_option\"><input type=\"checkbox\" name=\"enable_twitter_block\" />       <label>�������� FelikZ's Mind</label></div>\
        <div style=\"clear:both;\"></div>\
        <div class=\"script_option\"><input type=\"input\" name=\"twits_count\" value=\"12\" />     <label>����������� ��������� ������</label></div>\
        <div style=\"clear:both;\"></div>\
    </form>\
    <script type=\"text/javascript\">\
        $('.script_option:has(\"input[type=checkbox]\")').click(function(e) {\
            var cb = $(this).find('input[type=checkbox]');\
            if(cb.is(':checked'))\
            {\
                cb.attr('checked', false);\
            }\
            else\
            {\
                cb.attr('checked', true);\
            }\
        });\
    </script>";
    return html;
}