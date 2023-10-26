var wms_layers = [];

var format_ADMINISTRASI_LN_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_0 = format_ADMINISTRASI_LN_25K_0.readFeatures(json_ADMINISTRASI_LN_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_0.addFeatures(features_ADMINISTRASI_LN_25K_0);
var lyr_ADMINISTRASI_LN_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_0, 
                style: style_ADMINISTRASI_LN_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_0.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Atangsenjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Babakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Babakanpasar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Balumbangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Bantarjati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Baranagsiang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Batutulis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Bitungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Bojongkerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Bondongan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Bubulak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Cadasngampar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Ciawi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Cibadak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Cibalung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Cibanon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Cibogor<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Cibuluh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Ciherang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Ciherangpondok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Cikarawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Cikaret<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Cilebut Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Cilebut Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Cilendek Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Cilendek Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Ciluar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Cimahpar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Cimandala<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Cimangis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Ciomas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Ciomasrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Cipaku<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Ciparigi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Cipicung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Ciwaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Cujujung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Curug<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Curugmekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Dramaga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Empang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Genteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Gudang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Gunungbatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Harjasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Katulampa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Kayumanis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Kebonkalapa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Kebonpedes<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Kedungbadak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Kedunghalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Kedungjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Kedungwaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Kencana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Kertamaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Kotabatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Laladon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Lawanggintung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Loji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Margajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Mekarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> Mekarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> Menteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> Muarasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> Mulyaharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> Pabaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> Pakuan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> Palasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> Paledang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> Pamoyanan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> Panaragan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> Pandansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> Parakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> Parakanjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> Pasiraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> Pasirjambu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> Pasirjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> Pasirkuda<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> Pasirlaja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> Pasirmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> Rancamaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> Ranggamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> Semplak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> Semplak Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> Sempur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> Sindangbarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> Sindangrasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> Sindangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> Situgede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> Sukadamai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> Sukaharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> Sukamantri<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> Sukaresmi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> Sukasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> Tajur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> Tanah Baru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> Tanahsareal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> Tegalega<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> Tegalgundil<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> Telukpinang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> Waringinjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> <br />'
        });

lyr_ADMINISTRASI_LN_25K_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_ADMINISTRASI_LN_25K_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASI_LN_25K_0.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldLabels', {'KARKTR': 'inline label', 'STSBTS': 'inline label', 'FCODE': 'inline label', 'KELAS': 'inline label', 'UUPP': 'inline label', 'LOKASI': 'inline label', 'REMARK': 'inline label', 'NAMOBJ': 'inline label', 'ADMIN1': 'inline label', 'ADMIN2': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'WAKLD1': 'inline label', 'WAKLD2': 'inline label', 'WADKC1': 'inline label', 'WADKC2': 'inline label', 'WAKBK1': 'inline label', 'WAKBK2': 'inline label', 'WAPRO1': 'inline label', 'WAPRO2': 'inline label', 'TIPTBT': 'inline label', 'PJGBTS': 'inline label', 'KLBADM': 'header label', 'TIPLOK': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'header label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});