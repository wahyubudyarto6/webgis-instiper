var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> 0<br />\
    <img src="styles/legend/Jalan_1_1.png" /> <br />' });
var format_Instiper_2 = new ol.format.GeoJSON();
var features_Instiper_2 = format_Instiper_2.readFeatures(json_Instiper_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Instiper_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Instiper_2.addFeatures(features_Instiper_2);
var lyr_Instiper_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Instiper_2, 
                style: style_Instiper_2,
                popuplayertitle: 'Instiper',
                interactive: true,
    title: 'Instiper<br />\
    <img src="styles/legend/Instiper_2_0.png" /> Area Gedung Rektorat<br />\
    <img src="styles/legend/Instiper_2_1.png" /> Area kebun dan greenhouse<br />\
    <img src="styles/legend/Instiper_2_2.png" /> Area Menwa<br />\
    <img src="styles/legend/Instiper_2_3.png" /> Area Perpustakaan<br />\
    <img src="styles/legend/Instiper_2_4.png" /> Area Pilot plant dan Pabrik<br />\
    <img src="styles/legend/Instiper_2_5.png" /> Bapka dan PMB<br />\
    <img src="styles/legend/Instiper_2_6.png" /> Fakultas Kehutanan<br />\
    <img src="styles/legend/Instiper_2_7.png" /> Fakultas Pertanian<br />\
    <img src="styles/legend/Instiper_2_8.png" /> Fakultas Teknologi Pertanian<br />\
    <img src="styles/legend/Instiper_2_9.png" /> Gazebo Instiper<br />\
    <img src="styles/legend/Instiper_2_10.png" /> Graha Instiper<br />\
    <img src="styles/legend/Instiper_2_11.png" /> Hutan Fakultas Kehutanan<br />\
    <img src="styles/legend/Instiper_2_12.png" /> Hutan Instiper<br />\
    <img src="styles/legend/Instiper_2_13.png" /> Kantin Instiper<br />\
    <img src="styles/legend/Instiper_2_14.png" /> Laboraturium<br />\
    <img src="styles/legend/Instiper_2_15.png" /> Lapangan<br />\
    <img src="styles/legend/Instiper_2_16.png" /> Lapangan Basket<br />\
    <img src="styles/legend/Instiper_2_17.png" /> Lapangan Voly<br />\
    <img src="styles/legend/Instiper_2_18.png" /> Masjid<br />\
    <img src="styles/legend/Instiper_2_19.png" /> Parkiran 1<br />\
    <img src="styles/legend/Instiper_2_20.png" /> Parkiran 2<br />\
    <img src="styles/legend/Instiper_2_21.png" /> <br />' });
var format_pointinstiper_3 = new ol.format.GeoJSON();
var features_pointinstiper_3 = format_pointinstiper_3.readFeatures(json_pointinstiper_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointinstiper_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointinstiper_3.addFeatures(features_pointinstiper_3);
var lyr_pointinstiper_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointinstiper_3, 
                style: style_pointinstiper_3,
                popuplayertitle: 'pointinstiper',
                interactive: true,
                title: '<img src="styles/legend/pointinstiper_3.png" /> pointinstiper'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Instiper_2.setVisible(true);lyr_pointinstiper_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Jalan_1,lyr_Instiper_2,lyr_pointinstiper_3];
lyr_Jalan_1.set('fieldAliases', {'Id': 'Id', });
lyr_Instiper_2.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', });
lyr_pointinstiper_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nama': 'Nama', });
lyr_Jalan_1.set('fieldImages', {'Id': 'Range', });
lyr_Instiper_2.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', });
lyr_pointinstiper_3.set('fieldImages', {'fid': '', 'Id': '', 'Nama': '', });
lyr_Jalan_1.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_Instiper_2.set('fieldLabels', {'Id': 'inline label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_pointinstiper_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Id': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_pointinstiper_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});