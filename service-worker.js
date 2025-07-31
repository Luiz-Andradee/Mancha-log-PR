const CACHE_NAME = 'mancha-log-cache-v2';
const urlsToCache = [
  '/index.html',
  '/service-worker.js',
  // CSS
  '/resources/ol.css',
  '/resources/fontawesome-all.min.css',
  '/resources/photon-geocoder-autocomplete.min.css',
  '/resources/ol-layerswitcher.css',
  '/resources/qgis2web.css',
  // JS principais
  '/resources/qgis2web_expressions.js',
  '/resources/functions.js',
  '/resources/ol.js',
  '/resources/ol-layerswitcher.js',
  '/resources/photon-geocoder-autocomplete.min.js',
  '/resources/Autolinker.min.js',
  '/resources/qgis2web.js',
  // Layers
  '/layers/RotaCuritibaMetropolitana_1.js',
  '/layers/RotaParanagua_2.js',
  '/layers/RotaCuritiba3_3.js',
  '/layers/RotaCuritiba2_4.js',
  '/layers/RotaSoMateusdoSul_5.js',
  '/layers/RotaPontaGrossa_6.js',
  '/layers/RotaSantoAntoniodaPlatina_7.js',
  '/layers/RotaQuatigua_8.js',
  '/layers/RotaPalmeira_9.js',
  '/layers/RotaWenceslauBraz_10.js',
  '/layers/RotaTelemacoBorba_11.js',
  '/layers/RotaPrudentopolis_12.js',
  '/layers/RotaPitanga_13.js',
  '/layers/RotaFlorestopolis_14.js',
  '/layers/RotaLondrinaeRegio_15.js',
  '/layers/RotaParanava_16.js',
  '/layers/RotaDiamantedoNorte_17.js',
  '/layers/RotaMaring_18.js',
  '/layers/RotaCascavel_19.js',
  '/layers/RotaDionisioCerqueira_20.js',
  '/layers/RotaNovaEsperanadoSudoeste_21.js',
  '/layers/RotaUmuarama_22.js',
  '/layers/RotaToledo_23.js',
  '/layers/RotaFozdoIguau_24.js',
  '/layers/Cliente_25.js',
  '/layers/Bases_26.js',
  '/layers/layers.js',
  // Styles
  '/styles/RotaCuritibaMetropolitana_1_style.js',
  '/styles/RotaParanagua_2_style.js',
  '/styles/RotaCuritiba3_3_style.js',
  '/styles/RotaCuritiba2_4_style.js',
  '/styles/RotaSoMateusdoSul_5_style.js',
  '/styles/RotaPontaGrossa_6_style.js',
  '/styles/RotaSantoAntoniodaPlatina_7_style.js',
  '/styles/RotaQuatigua_8_style.js',
  '/styles/RotaPalmeira_9_style.js',
  '/styles/RotaWenceslauBraz_10_style.js',
  '/styles/RotaTelemacoBorba_11_style.js',
  '/styles/RotaPrudentopolis_12_style.js',
  '/styles/RotaPitanga_13_style.js',
  '/styles/RotaFlorestopolis_14_style.js',
  '/styles/RotaLondrinaeRegio_15_style.js',
  '/styles/RotaParanava_16_style.js',
  '/styles/RotaDiamantedoNorte_17_style.js',
  '/styles/RotaMaring_18_style.js',
  '/styles/RotaCascavel_19_style.js',
  '/styles/RotaDionisioCerqueira_20_style.js',
  '/styles/RotaNovaEsperanadoSudoeste_21_style.js',
  '/styles/RotaUmuarama_22_style.js',
  '/styles/RotaToledo_23_style.js',
  '/styles/RotaFozdoIguau_24_style.js',
  '/styles/Cliente_25_style.js',
  '/styles/Bases_26_style.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
