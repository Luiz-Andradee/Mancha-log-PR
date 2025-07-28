var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RotaCuritibaMetropolitana_1 = new ol.format.GeoJSON();
var features_RotaCuritibaMetropolitana_1 = format_RotaCuritibaMetropolitana_1.readFeatures(json_RotaCuritibaMetropolitana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaCuritibaMetropolitana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaCuritibaMetropolitana_1.addFeatures(features_RotaCuritibaMetropolitana_1);
var lyr_RotaCuritibaMetropolitana_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaCuritibaMetropolitana_1, 
                style: style_RotaCuritibaMetropolitana_1,
                popuplayertitle: 'Rota Curitiba Metropolitana',
                interactive: true,
                title: '<img src="styles/legend/RotaCuritibaMetropolitana_1.png" /> Rota Curitiba Metropolitana'
            });
var format_RotaParanagua_2 = new ol.format.GeoJSON();
var features_RotaParanagua_2 = format_RotaParanagua_2.readFeatures(json_RotaParanagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaParanagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaParanagua_2.addFeatures(features_RotaParanagua_2);
var lyr_RotaParanagua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaParanagua_2, 
                style: style_RotaParanagua_2,
                popuplayertitle: 'Rota Paranagua',
                interactive: true,
                title: '<img src="styles/legend/RotaParanagua_2.png" /> Rota Paranagua'
            });
var format_RotaCuritiba3_3 = new ol.format.GeoJSON();
var features_RotaCuritiba3_3 = format_RotaCuritiba3_3.readFeatures(json_RotaCuritiba3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaCuritiba3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaCuritiba3_3.addFeatures(features_RotaCuritiba3_3);
var lyr_RotaCuritiba3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaCuritiba3_3, 
                style: style_RotaCuritiba3_3,
                popuplayertitle: 'Rota Curitiba 3',
                interactive: true,
                title: '<img src="styles/legend/RotaCuritiba3_3.png" /> Rota Curitiba 3'
            });
var format_RotaCuritiba2_4 = new ol.format.GeoJSON();
var features_RotaCuritiba2_4 = format_RotaCuritiba2_4.readFeatures(json_RotaCuritiba2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaCuritiba2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaCuritiba2_4.addFeatures(features_RotaCuritiba2_4);
var lyr_RotaCuritiba2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaCuritiba2_4, 
                style: style_RotaCuritiba2_4,
                popuplayertitle: 'Rota Curitiba 2',
                interactive: true,
                title: '<img src="styles/legend/RotaCuritiba2_4.png" /> Rota Curitiba 2'
            });
var format_RotaSoMateusdoSul_5 = new ol.format.GeoJSON();
var features_RotaSoMateusdoSul_5 = format_RotaSoMateusdoSul_5.readFeatures(json_RotaSoMateusdoSul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaSoMateusdoSul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaSoMateusdoSul_5.addFeatures(features_RotaSoMateusdoSul_5);
var lyr_RotaSoMateusdoSul_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaSoMateusdoSul_5, 
                style: style_RotaSoMateusdoSul_5,
                popuplayertitle: 'Rota São Mateus do Sul',
                interactive: true,
                title: '<img src="styles/legend/RotaSoMateusdoSul_5.png" /> Rota São Mateus do Sul'
            });
var format_RotaPontaGrossa_6 = new ol.format.GeoJSON();
var features_RotaPontaGrossa_6 = format_RotaPontaGrossa_6.readFeatures(json_RotaPontaGrossa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaPontaGrossa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaPontaGrossa_6.addFeatures(features_RotaPontaGrossa_6);
var lyr_RotaPontaGrossa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaPontaGrossa_6, 
                style: style_RotaPontaGrossa_6,
                popuplayertitle: 'Rota Ponta Grossa',
                interactive: true,
                title: '<img src="styles/legend/RotaPontaGrossa_6.png" /> Rota Ponta Grossa'
            });
var format_RotaSantoAntoniodaPlatina_7 = new ol.format.GeoJSON();
var features_RotaSantoAntoniodaPlatina_7 = format_RotaSantoAntoniodaPlatina_7.readFeatures(json_RotaSantoAntoniodaPlatina_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaSantoAntoniodaPlatina_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaSantoAntoniodaPlatina_7.addFeatures(features_RotaSantoAntoniodaPlatina_7);
var lyr_RotaSantoAntoniodaPlatina_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaSantoAntoniodaPlatina_7, 
                style: style_RotaSantoAntoniodaPlatina_7,
                popuplayertitle: 'Rota Santo Antonio da Platina',
                interactive: true,
                title: '<img src="styles/legend/RotaSantoAntoniodaPlatina_7.png" /> Rota Santo Antonio da Platina'
            });
var format_RotaQuatigua_8 = new ol.format.GeoJSON();
var features_RotaQuatigua_8 = format_RotaQuatigua_8.readFeatures(json_RotaQuatigua_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaQuatigua_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaQuatigua_8.addFeatures(features_RotaQuatigua_8);
var lyr_RotaQuatigua_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaQuatigua_8, 
                style: style_RotaQuatigua_8,
                popuplayertitle: 'Rota Quatigua',
                interactive: true,
                title: '<img src="styles/legend/RotaQuatigua_8.png" /> Rota Quatigua'
            });
var format_RotaPalmeira_9 = new ol.format.GeoJSON();
var features_RotaPalmeira_9 = format_RotaPalmeira_9.readFeatures(json_RotaPalmeira_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaPalmeira_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaPalmeira_9.addFeatures(features_RotaPalmeira_9);
var lyr_RotaPalmeira_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaPalmeira_9, 
                style: style_RotaPalmeira_9,
                popuplayertitle: 'Rota Palmeira',
                interactive: true,
                title: '<img src="styles/legend/RotaPalmeira_9.png" /> Rota Palmeira'
            });
var format_RotaWenceslauBraz_10 = new ol.format.GeoJSON();
var features_RotaWenceslauBraz_10 = format_RotaWenceslauBraz_10.readFeatures(json_RotaWenceslauBraz_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaWenceslauBraz_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaWenceslauBraz_10.addFeatures(features_RotaWenceslauBraz_10);
var lyr_RotaWenceslauBraz_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaWenceslauBraz_10, 
                style: style_RotaWenceslauBraz_10,
                popuplayertitle: 'Rota Wenceslau Braz',
                interactive: true,
                title: '<img src="styles/legend/RotaWenceslauBraz_10.png" /> Rota Wenceslau Braz'
            });
var format_RotaTelemacoBorba_11 = new ol.format.GeoJSON();
var features_RotaTelemacoBorba_11 = format_RotaTelemacoBorba_11.readFeatures(json_RotaTelemacoBorba_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaTelemacoBorba_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaTelemacoBorba_11.addFeatures(features_RotaTelemacoBorba_11);
var lyr_RotaTelemacoBorba_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaTelemacoBorba_11, 
                style: style_RotaTelemacoBorba_11,
                popuplayertitle: 'Rota Telemaco Borba',
                interactive: true,
                title: '<img src="styles/legend/RotaTelemacoBorba_11.png" /> Rota Telemaco Borba'
            });
var format_RotaPrudentopolis_12 = new ol.format.GeoJSON();
var features_RotaPrudentopolis_12 = format_RotaPrudentopolis_12.readFeatures(json_RotaPrudentopolis_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaPrudentopolis_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaPrudentopolis_12.addFeatures(features_RotaPrudentopolis_12);
var lyr_RotaPrudentopolis_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaPrudentopolis_12, 
                style: style_RotaPrudentopolis_12,
                popuplayertitle: 'Rota Prudentopolis',
                interactive: true,
                title: '<img src="styles/legend/RotaPrudentopolis_12.png" /> Rota Prudentopolis'
            });
var format_RotaPitanga_13 = new ol.format.GeoJSON();
var features_RotaPitanga_13 = format_RotaPitanga_13.readFeatures(json_RotaPitanga_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaPitanga_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaPitanga_13.addFeatures(features_RotaPitanga_13);
var lyr_RotaPitanga_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaPitanga_13, 
                style: style_RotaPitanga_13,
                popuplayertitle: 'Rota Pitanga',
                interactive: true,
                title: '<img src="styles/legend/RotaPitanga_13.png" /> Rota Pitanga'
            });
var format_RotaFlorestopolis_14 = new ol.format.GeoJSON();
var features_RotaFlorestopolis_14 = format_RotaFlorestopolis_14.readFeatures(json_RotaFlorestopolis_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaFlorestopolis_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaFlorestopolis_14.addFeatures(features_RotaFlorestopolis_14);
var lyr_RotaFlorestopolis_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaFlorestopolis_14, 
                style: style_RotaFlorestopolis_14,
                popuplayertitle: 'Rota Florestopolis',
                interactive: true,
                title: '<img src="styles/legend/RotaFlorestopolis_14.png" /> Rota Florestopolis'
            });
var format_RotaLondrinaeRegio_15 = new ol.format.GeoJSON();
var features_RotaLondrinaeRegio_15 = format_RotaLondrinaeRegio_15.readFeatures(json_RotaLondrinaeRegio_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaLondrinaeRegio_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaLondrinaeRegio_15.addFeatures(features_RotaLondrinaeRegio_15);
var lyr_RotaLondrinaeRegio_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaLondrinaeRegio_15, 
                style: style_RotaLondrinaeRegio_15,
                popuplayertitle: 'Rota Londrina e Região',
                interactive: true,
                title: '<img src="styles/legend/RotaLondrinaeRegio_15.png" /> Rota Londrina e Região'
            });
var format_RotaParanava_16 = new ol.format.GeoJSON();
var features_RotaParanava_16 = format_RotaParanava_16.readFeatures(json_RotaParanava_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaParanava_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaParanava_16.addFeatures(features_RotaParanava_16);
var lyr_RotaParanava_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaParanava_16, 
                style: style_RotaParanava_16,
                popuplayertitle: 'Rota Paranavaí',
                interactive: true,
                title: '<img src="styles/legend/RotaParanava_16.png" /> Rota Paranavaí'
            });
var format_RotaDiamantedoNorte_17 = new ol.format.GeoJSON();
var features_RotaDiamantedoNorte_17 = format_RotaDiamantedoNorte_17.readFeatures(json_RotaDiamantedoNorte_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaDiamantedoNorte_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaDiamantedoNorte_17.addFeatures(features_RotaDiamantedoNorte_17);
var lyr_RotaDiamantedoNorte_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaDiamantedoNorte_17, 
                style: style_RotaDiamantedoNorte_17,
                popuplayertitle: 'Rota Diamante do Norte',
                interactive: true,
                title: '<img src="styles/legend/RotaDiamantedoNorte_17.png" /> Rota Diamante do Norte'
            });
var format_RotaMaring_18 = new ol.format.GeoJSON();
var features_RotaMaring_18 = format_RotaMaring_18.readFeatures(json_RotaMaring_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaMaring_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaMaring_18.addFeatures(features_RotaMaring_18);
var lyr_RotaMaring_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaMaring_18, 
                style: style_RotaMaring_18,
                popuplayertitle: 'Rota Maringá',
                interactive: true,
                title: '<img src="styles/legend/RotaMaring_18.png" /> Rota Maringá'
            });
var format_RotaCascavel_19 = new ol.format.GeoJSON();
var features_RotaCascavel_19 = format_RotaCascavel_19.readFeatures(json_RotaCascavel_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaCascavel_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaCascavel_19.addFeatures(features_RotaCascavel_19);
var lyr_RotaCascavel_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaCascavel_19, 
                style: style_RotaCascavel_19,
                popuplayertitle: 'Rota Cascavel',
                interactive: true,
                title: '<img src="styles/legend/RotaCascavel_19.png" /> Rota Cascavel'
            });
var format_RotaDionisioCerqueira_20 = new ol.format.GeoJSON();
var features_RotaDionisioCerqueira_20 = format_RotaDionisioCerqueira_20.readFeatures(json_RotaDionisioCerqueira_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaDionisioCerqueira_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaDionisioCerqueira_20.addFeatures(features_RotaDionisioCerqueira_20);
var lyr_RotaDionisioCerqueira_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaDionisioCerqueira_20, 
                style: style_RotaDionisioCerqueira_20,
                popuplayertitle: 'Rota Dionisio Cerqueira',
                interactive: true,
                title: '<img src="styles/legend/RotaDionisioCerqueira_20.png" /> Rota Dionisio Cerqueira'
            });
var format_RotaNovaEsperanadoSudoeste_21 = new ol.format.GeoJSON();
var features_RotaNovaEsperanadoSudoeste_21 = format_RotaNovaEsperanadoSudoeste_21.readFeatures(json_RotaNovaEsperanadoSudoeste_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaNovaEsperanadoSudoeste_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaNovaEsperanadoSudoeste_21.addFeatures(features_RotaNovaEsperanadoSudoeste_21);
var lyr_RotaNovaEsperanadoSudoeste_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaNovaEsperanadoSudoeste_21, 
                style: style_RotaNovaEsperanadoSudoeste_21,
                popuplayertitle: 'Rota Nova Esperança do Sudoeste',
                interactive: true,
                title: '<img src="styles/legend/RotaNovaEsperanadoSudoeste_21.png" /> Rota Nova Esperança do Sudoeste'
            });
var format_RotaUmuarama_22 = new ol.format.GeoJSON();
var features_RotaUmuarama_22 = format_RotaUmuarama_22.readFeatures(json_RotaUmuarama_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaUmuarama_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaUmuarama_22.addFeatures(features_RotaUmuarama_22);
var lyr_RotaUmuarama_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaUmuarama_22, 
                style: style_RotaUmuarama_22,
                popuplayertitle: 'Rota Umuarama',
                interactive: true,
                title: '<img src="styles/legend/RotaUmuarama_22.png" /> Rota Umuarama'
            });
var format_RotaToledo_23 = new ol.format.GeoJSON();
var features_RotaToledo_23 = format_RotaToledo_23.readFeatures(json_RotaToledo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaToledo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaToledo_23.addFeatures(features_RotaToledo_23);
var lyr_RotaToledo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaToledo_23, 
                style: style_RotaToledo_23,
                popuplayertitle: 'Rota Toledo',
                interactive: true,
                title: '<img src="styles/legend/RotaToledo_23.png" /> Rota Toledo'
            });
var format_RotaFozdoIguau_24 = new ol.format.GeoJSON();
var features_RotaFozdoIguau_24 = format_RotaFozdoIguau_24.readFeatures(json_RotaFozdoIguau_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotaFozdoIguau_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotaFozdoIguau_24.addFeatures(features_RotaFozdoIguau_24);
var lyr_RotaFozdoIguau_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotaFozdoIguau_24, 
                style: style_RotaFozdoIguau_24,
                popuplayertitle: 'Rota Foz do Iguaçu',
                interactive: true,
                title: '<img src="styles/legend/RotaFozdoIguau_24.png" /> Rota Foz do Iguaçu'
            });
var format_Cliente_25 = new ol.format.GeoJSON();
var features_Cliente_25 = format_Cliente_25.readFeatures(json_Cliente_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cliente_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cliente_25.addFeatures(features_Cliente_25);
var lyr_Cliente_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cliente_25, 
                style: style_Cliente_25,
                popuplayertitle: 'Cliente ',
                interactive: true,
                title: '<img src="styles/legend/Cliente_25.png" /> Cliente '
            });
var format_Bases_26 = new ol.format.GeoJSON();
var features_Bases_26 = format_Bases_26.readFeatures(json_Bases_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bases_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bases_26.addFeatures(features_Bases_26);
var lyr_Bases_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bases_26, 
                style: style_Bases_26,
                popuplayertitle: 'Bases',
                interactive: true,
                title: '<img src="styles/legend/Bases_26.png" /> Bases'
            });
var group_Cascavel = new ol.layer.Group({
                                layers: [lyr_RotaCascavel_19,lyr_RotaDionisioCerqueira_20,lyr_RotaNovaEsperanadoSudoeste_21,lyr_RotaUmuarama_22,lyr_RotaToledo_23,lyr_RotaFozdoIguau_24,],
                                fold: 'close',
                                title: 'Cascavel '});
var group_Camb = new ol.layer.Group({
                                layers: [lyr_RotaFlorestopolis_14,lyr_RotaLondrinaeRegio_15,lyr_RotaParanava_16,lyr_RotaDiamantedoNorte_17,lyr_RotaMaring_18,],
                                fold: 'close',
                                title: 'Cambé'});
var group_Prudentopolis = new ol.layer.Group({
                                layers: [lyr_RotaPontaGrossa_6,lyr_RotaSantoAntoniodaPlatina_7,lyr_RotaQuatigua_8,lyr_RotaPalmeira_9,lyr_RotaWenceslauBraz_10,lyr_RotaTelemacoBorba_11,lyr_RotaPrudentopolis_12,lyr_RotaPitanga_13,],
                                fold: 'close',
                                title: 'Prudentopolis'});
var group_JaraguadoSul = new ol.layer.Group({
                                layers: [lyr_RotaCuritibaMetropolitana_1,lyr_RotaParanagua_2,lyr_RotaCuritiba3_3,lyr_RotaCuritiba2_4,lyr_RotaSoMateusdoSul_5,],
                                fold: 'close',
                                title: 'Jaragua do Sul '});

lyr_GoogleMaps_0.setVisible(true);lyr_RotaCuritibaMetropolitana_1.setVisible(true);lyr_RotaParanagua_2.setVisible(true);lyr_RotaCuritiba3_3.setVisible(true);lyr_RotaCuritiba2_4.setVisible(true);lyr_RotaSoMateusdoSul_5.setVisible(true);lyr_RotaPontaGrossa_6.setVisible(true);lyr_RotaSantoAntoniodaPlatina_7.setVisible(true);lyr_RotaQuatigua_8.setVisible(true);lyr_RotaPalmeira_9.setVisible(true);lyr_RotaWenceslauBraz_10.setVisible(true);lyr_RotaTelemacoBorba_11.setVisible(true);lyr_RotaPrudentopolis_12.setVisible(true);lyr_RotaPitanga_13.setVisible(true);lyr_RotaFlorestopolis_14.setVisible(true);lyr_RotaLondrinaeRegio_15.setVisible(true);lyr_RotaParanava_16.setVisible(true);lyr_RotaDiamantedoNorte_17.setVisible(true);lyr_RotaMaring_18.setVisible(true);lyr_RotaCascavel_19.setVisible(true);lyr_RotaDionisioCerqueira_20.setVisible(true);lyr_RotaNovaEsperanadoSudoeste_21.setVisible(true);lyr_RotaUmuarama_22.setVisible(true);lyr_RotaToledo_23.setVisible(true);lyr_RotaFozdoIguau_24.setVisible(true);lyr_Cliente_25.setVisible(true);lyr_Bases_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,group_JaraguadoSul,group_Prudentopolis,group_Camb,group_Cascavel,lyr_Cliente_25,lyr_Bases_26];
lyr_RotaCuritibaMetropolitana_1.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaParanagua_2.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaCuritiba3_3.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaCuritiba2_4.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaSoMateusdoSul_5.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaPontaGrossa_6.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaSantoAntoniodaPlatina_7.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaQuatigua_8.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaPalmeira_9.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaWenceslauBraz_10.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaTelemacoBorba_11.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaPrudentopolis_12.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaPitanga_13.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaFlorestopolis_14.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaLondrinaeRegio_15.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaParanava_16.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaDiamantedoNorte_17.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaMaring_18.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaCascavel_19.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaDionisioCerqueira_20.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaNovaEsperanadoSudoeste_21.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaUmuarama_22.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaToledo_23.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RotaFozdoIguau_24.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Cliente_25.set('fieldAliases', {'client_name': 'client_name', 'city': 'city', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Bases_26.set('fieldAliases', {'id': 'id', 'Base': 'Base', });
lyr_RotaCuritibaMetropolitana_1.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaParanagua_2.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaCuritiba3_3.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaCuritiba2_4.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaSoMateusdoSul_5.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaPontaGrossa_6.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaSantoAntoniodaPlatina_7.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaQuatigua_8.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaPalmeira_9.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaWenceslauBraz_10.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaTelemacoBorba_11.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaPrudentopolis_12.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaPitanga_13.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaFlorestopolis_14.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaLondrinaeRegio_15.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaParanava_16.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaDiamantedoNorte_17.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaMaring_18.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaCascavel_19.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaDionisioCerqueira_20.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaNovaEsperanadoSudoeste_21.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaUmuarama_22.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaToledo_23.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_RotaFozdoIguau_24.set('fieldImages', {'NM_MUN': '', 'NM_UF': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_Cliente_25.set('fieldImages', {'client_name': '', 'city': '', 'latitude': '', 'longitude': '', });
lyr_Bases_26.set('fieldImages', {'id': '', 'Base': '', });
lyr_RotaCuritibaMetropolitana_1.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaParanagua_2.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaCuritiba3_3.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaCuritiba2_4.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaSoMateusdoSul_5.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaPontaGrossa_6.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaSantoAntoniodaPlatina_7.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaQuatigua_8.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaPalmeira_9.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaWenceslauBraz_10.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaTelemacoBorba_11.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaPrudentopolis_12.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaPitanga_13.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaFlorestopolis_14.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaLondrinaeRegio_15.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaParanava_16.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaDiamantedoNorte_17.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaMaring_18.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaCascavel_19.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaDionisioCerqueira_20.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaNovaEsperanadoSudoeste_21.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaUmuarama_22.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaToledo_23.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_RotaFozdoIguau_24.set('fieldLabels', {'NM_MUN': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Cliente_25.set('fieldLabels', {'client_name': 'no label', 'city': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_Bases_26.set('fieldLabels', {'id': 'inline label - always visible', 'Base': 'no label', });
lyr_Bases_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});