
function initDemoMap(){

    var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: 18,
        minZoom: 1
    }),
    satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
        maxZoom: 18,
        minZoom: 1
    });

	var baseLayers = {
	    "地图": normalMap,
	    "影像": satelliteMap,
	}


    var map = L.map('map', {
        layers: [ satelliteMap ]
    });

    var layerControl = L.control.layers(baseLayers);
    layerControl.addTo(map);
    map.setView([22, 150], 2);

    return {
        map: map,
        layerControl: layerControl
    };
}

// demo map
var mapStuff = initDemoMap();
var map = mapStuff.map;
var layerControl = mapStuff.layerControl;

// load data (u, v grids) from somewhere (e.g. https://github.com/danwild/wind-js-server)
$.getJSON('surface-currents-global.json', function (data) {
	var velocityLayer = L.velocityLayer({
		displayValues: true,
		displayOptions: {
			velocityType: 'Global Current',
			displayPosition: 'bottomleft',
			displayEmptyString: 'No current data'
		},
		data: data,
		maxVelocity: 3
	});
	layerControl.addOverlay(velocityLayer, 'Current - Global');
});


$.getJSON('wind-global.json', function (data) {

	var velocityLayer = L.velocityLayer({
		displayValues: true,
		displayOptions: {
			velocityType: 'Global Wind',
			displayPosition: 'bottomleft',
			displayEmptyString: 'No wind data'
		},
		data: data,
		maxVelocity: 15
	});

	layerControl.addOverlay(velocityLayer, 'Wind - Global');
});



