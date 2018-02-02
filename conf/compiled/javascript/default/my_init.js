$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "VOID SOFTWARE");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label" id="default-label"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br><div data-bind="attr: {style: sub_style}">	<p class="secondary-info">Humidity:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_humidity"></p>	<p class="secondary-info">%</p>	<br>	<p class="secondary-info">Apparent Temp:&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature"></p>	<p class="secondary-info" data-bind="html: unit"></p>	<br>	<p class="secondary-info">Rain:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">&nbsp;%</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">in</p>	<br>	<p class="secondary-info">Wind:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_wind_speed"></p>	<p class="secondary-info">&nbsp;Mph</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_wind_bearing"></p>	<p class="secondary-info">&nbsp;&deg;</p>	<br>	<p class="secondary-info">Pressure:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_pressure"></p>	<p class="secondary-info">&nbsp;Mbar</p></div></div></li>', 2, 2, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-workspace-room" id="default-workspace-room"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 2, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-hifi-room" id="default-hifi-room"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-lounge-entrance" id="default-lounge-entrance"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-bh-pc" id="default-bh-pc"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-kitchen-room" id="default-kitchen-room"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-lounge-coffee" id="default-lounge-coffee"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-work-scene" id="default-work-scene"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-meetting-room" id="default-meetting-room"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-terrace" id="default-terrace"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-wc" id="default-wc"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-lounge-middle" id="default-lounge-middle"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-hall" id="default-hall"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-byebye-scene" id="default-byebye-scene"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-lounge-room" id="default-lounge-room"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-lounge-meeting" id="default-lounge-meeting"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-label"] = new basedisplay("default-label", "", "default", {'icons': [], 'widget_type': 'basedisplay', 'static_icons': [], 'use_hass_icon': 1, 'precision': 1, 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'css': {}, 'fields': {'title': '', 'state_text': '', 'title2': '', 'value': 'VOID SOFTWARE', 'unit': ''}, 'use_comma': 0})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'icons': [], 'widget_type': 'baseclock', 'static_icons': [], 'use_hass_icon': 1, 'static_css': {'date_style': 'color: white;', 'time_style': 'color: white;', 'widget_style': 'background-color: #444;'}, 'precision': 1, 'date_style': 'color: white;', 'time_style': 'color: white;', 'css': {}, 'fields': {'date': '', 'time': ''}, 'use_comma': 0})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'icons': [], 'widget_type': 'baseweather', 'static_icons': [], 'use_hass_icon': 1, 'units': '&deg;c', 'precision': 1, 'static_css': {'widget_style': 'background-color: #444;', 'sub_style': 'color: #00aaff;', 'title_style': 'color: #00aaff;', 'main_style': 'color: #ffaa00;', 'unit_style': 'color: #ffaa00;'}, 'css': {}, 'fields': {'title': '', 'dark_sky_wind_speed': '', 'dark_sky_humidity': '', 'dark_sky_apparent_temperature': '', 'dark_sky_precip_intensity': '', 'dark_sky_temperature': '', 'dark_sky_wind_bearing': '', 'dark_sky_icon': '', 'dark_sky_precip_probability': '', 'dark_sky_pressure': '', 'unit': ''}, 'use_comma': 0})
    
        widgets["default-workspace-room"] = new baseswitch("default-workspace-room", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'icon_style_inactive': 'font-size: 800%;', 'state_active': 'on', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;font-size: 800%;', 'icon_style_active': 'color: #aaff00;font-size: 800%;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'icon_on': 'mdi-lightbulb-on-outline', 'fields': {'title': 'Workspace', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'post_service_active': {'entity_id': 'group.workspace_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.workspace_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.workspace_room', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'font-size: 800%;'})
    
        widgets["default-hifi-room"] = new baseswitch("default-hifi-room", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-pound-box', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-pound', 'icon_on': 'mdi-pound-box'}, 'icon_off': 'mdi-pound', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.hi_fi_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.hi_fi_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.hi_fi_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'root', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-lounge-entrance"] = new baseswitch("default-lounge-entrance", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'light.lounge_entrance', 'service': 'homeassistant/turn_on'}, 'entity': 'light.lounge_entrance', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'light.lounge_entrance', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Lounge Entrance', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-bh-pc"] = new baseswitch("default-bh-pc", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-desktop-mac', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-desktop-mac', 'icon_on': 'mdi-desktop-mac'}, 'icon_off': 'mdi-desktop-mac', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'switch.brunos_imac', 'service': 'homeassistant/turn_on'}, 'entity': 'switch.brunos_imac', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'switch.brunos_imac', 'service': 'homeassistant/turn_off'}, 'fields': {'title': "Bruno's PC", 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-kitchen-room"] = new baseswitch("default-kitchen-room", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.kitchen_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.kitchen_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.kitchen_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Kitchen', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-lounge-coffee"] = new baseswitch("default-lounge-coffee", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'light.lounge_coffee', 'service': 'homeassistant/turn_on'}, 'entity': 'light.lounge_coffee', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'light.lounge_coffee', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Lounge Coffee', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-work-scene"] = new baseswitch("default-work-scene", "", "default", {'widget_type': 'baseswitch', 'ignore_state': 1, 'state_active': 'stillscening', 'enable': 1, 'momentary': 1000, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'static_icons': [], 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'scene.work', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.work', 'state_inactive': 'scening', 'precision': 1, 'post_service_inactive': {'entity_id': 'scene.work', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Work', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-meetting-room"] = new baseswitch("default-meetting-room", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.meetting_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.meetting_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.meetting_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Meeting', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-terrace"] = new baseswitch("default-terrace", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.terrace_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.terrace_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.terrace_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Terrace', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-wc"] = new baseswitch("default-wc", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.wc_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.wc_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.wc_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'WC', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-lounge-middle"] = new baseswitch("default-lounge-middle", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'light.lounge_middle', 'service': 'homeassistant/turn_on'}, 'entity': 'light.lounge_middle', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'light.lounge_middle', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Lounge Middle', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-hall"] = new baseswitch("default-hall", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.hall_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.hall_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.hall_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Hall', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-byebye-scene"] = new baseswitch("default-byebye-scene", "", "default", {'widget_type': 'baseswitch', 'ignore_state': 1, 'state_active': 'stillscening', 'enable': 1, 'momentary': 1000, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'static_icons': [], 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'scene.bye_bye', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.bye_bye', 'state_inactive': 'scening', 'precision': 1, 'post_service_inactive': {'entity_id': 'scene.bye_bye', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Bye Bye', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-lounge-room"] = new baseswitch("default-lounge-room", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'group.lounge_room', 'service': 'homeassistant/turn_on'}, 'entity': 'group.lounge_room', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'group.lounge_room', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Lounge', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    
        widgets["default-lounge-meeting"] = new baseswitch("default-lounge-meeting", "", "default", {'widget_type': 'baseswitch', 'precision': 1, 'state_active': 'on', 'icon_on': 'mdi-lightbulb-on-outline', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-on-outline'}, 'icon_off': 'mdi-lightbulb-outline', 'use_hass_icon': 1, 'post_service_active': {'entity_id': 'light.lounge_meeting', 'service': 'homeassistant/turn_on'}, 'entity': 'light.lounge_meeting', 'state_inactive': 'off', 'static_icons': [], 'post_service_inactive': {'entity_id': 'light.lounge_meeting', 'service': 'homeassistant/turn_off'}, 'fields': {'title': 'Lounge Meeting', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "VOID SOFTWARE", widgets);

});