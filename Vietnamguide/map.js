var map;
var map_world;
var map_local;
var map_festival;

var map_food_east_north;
var map_food_west_north;
var map_food_red_river_delta;
var map_food_center_north;
var map_food_center_southern;
var map_food_taynguyen;
var map_food_east_north;
var map_food_mekong_delta;

var map_west_north;
var map_east_north;
var map_red_river_delta;
var map_center_north;
var map_center_southern;
var map_east_southern;
var map_mekong_delta;

function initialize() {
	// 中心の位置座標を指定する
	var latlng = new google.maps.LatLng( 16 , 107 );
	var latlng_world = new google.maps.LatLng( 26 , 98 );
	var latlng_local = new google.maps.LatLng( 26 , 98);

	var latlng_west_north = new google.maps.LatLng( 24.2 , 102 );
	var latlng_east_north = new google.maps.LatLng( 24.2 , 103.5 );
	var latlng_red_river_delta = new google.maps.LatLng( 24.2 , 103.8 );
	var latlng_center_north = new google.maps.LatLng( 23.5 , 101.5 );
	var latlng_center_southern = new google.maps.LatLng( 18 , 103.5 );
	var latlng_taynguyen = new google.maps.LatLng( 18 , 103.5 );
	var latlng_east_southern = new google.maps.LatLng( 12.5 , 105.5 );
	var latlng_mekong_delta = new google.maps.LatLng( 12.5 , 103.5 );

	// 地図のオプションを設定する
	var mapOptions = {
		zoom: 5 ,				// ズーム値
		center: latlng ,		// 中心座標 [latlng]
	};
	var mapOptions_local = {
		zoom: 5 ,				// ズーム値
		center: latlng_local ,		// 中心座標 [latlng]
	};
	var mapOptions_world = {
		zoom: 5 ,				// ズーム値
		center: latlng_world ,		// 中心座標 [latlng]
	};
	/*
	var mapOptions_food = {
		zoom: 5 ,				// ズーム値
		center: latlng_food ,		// 中心座標 [latlng]
	};
	*/

	var mapOptions_west_north = {
		zoom: 7 ,				// ズーム値
		center: latlng_west_north ,		// 中心座標 [latlng]
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapOptions_east_north = {
		zoom: 7 ,				// ズーム値
		center: latlng_east_north ,		// 中心座標 [latlng]
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapOptions_red_river_delta = {
		zoom: 7 ,				// ズーム値
		center: latlng_red_river_delta ,		// 中心座標 [latlng]
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapOptions_center_north = {
		zoom: 6 ,				// ズーム値
		center: latlng_center_north ,		// 中心座標 [latlng]
	};
	var mapOptions_center_southern = {
		zoom: 6 ,				// ズーム値
		center: latlng_center_southern ,		// 中心座標 [latlng]
	};
	var mapOptions_taynguyen = {
		zoom: 6 ,				// ズーム値
		center: latlng_taynguyen ,		// 中心座標 [latlng]
	};
	var mapOptions_east_southern = {
		zoom: 8 ,				// ズーム値
		center: latlng_east_southern ,		// 中心座標 [latlng]
	};
	var mapOptions_mekong_delta = {
		zoom: 7 ,				// ズーム値
		center: latlng_mekong_delta ,		// 中心座標 [latlng]
	};

	//Mapインスタンス生成
	map = new google.maps.Map( document.getElementById( 'map-canvas' ) , mapOptions ) ;
	//map.data.loadGeoJson('https://data.opendevelopmentmekong.net/vi/dataset/40a9f762-d942-43bb-93bd-e70981e9735c/resource/df3b5e86-4d9b-4f7a-87df-fe6608918d5a/download/Diagioi.geojson');
	//map.data.loadGeoJson('./geojson.geojson');
	//map.data.loadGeoJson('./Diagioi.geojson');
	map.data.loadGeoJson('GeoJson/country.json');
	map.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});

	//map.data.loadGeoJson('GeoJson/geojson.json');
	map_local = new google.maps.Map( document.getElementById( 'map-canvas-local' ) , mapOptions_local ) ;
	map_local.data.loadGeoJson('GeoJson/all.json');
	map_local.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});

  	map_world = new google.maps.Map( document.getElementById( 'map-canvas-world' ) , mapOptions_world ) ;
	map_world.data.loadGeoJson('GeoJson/country.json');
	map_world.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});

  	map_festival = new google.maps.Map( document.getElementById( 'map-canvas-festival' ) , mapOptions_world ) ;
	map_festival.data.loadGeoJson('GeoJson/country.json');
	map_festival.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});

  	map_food_center_north = new google.maps.Map( document.getElementById( 'map-canvas-food-center-north' ) , mapOptions_center_north ) ;
	map_food_center_north.data.loadGeoJson('GeoJson/center-north.json');
	map_food_center_north.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_east_north = new google.maps.Map( document.getElementById( 'map-canvas-food-east-north' ) , mapOptions_east_north ) ;
	map_food_east_north.data.loadGeoJson('GeoJson/east-north.json');
	map_food_east_north.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_west_north = new google.maps.Map( document.getElementById( 'map-canvas-food-west-north' ) , mapOptions_west_north ) ;
	map_food_west_north.data.loadGeoJson('GeoJson/westen-north.json');
	map_food_west_north.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_red_river_delta = new google.maps.Map( document.getElementById( 'map-canvas-food-red-river-delta' ) , mapOptions_red_river_delta ) ;
	map_food_red_river_delta.data.loadGeoJson('GeoJson/red-river-delta.json');
	map_food_red_river_delta.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_center_southern = new google.maps.Map( document.getElementById( 'map-canvas-food-center-southern' ) , mapOptions_center_southern ) ;
	map_food_center_southern.data.loadGeoJson('GeoJson/center-southern.json');
	map_food_center_southern.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_taynguyen = new google.maps.Map( document.getElementById( 'map-canvas-food-taynguyen' ) , mapOptions_taynguyen ) ;
	map_food_taynguyen.data.loadGeoJson('GeoJson/taynguyen.json');
	map_food_taynguyen.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_east_southern = new google.maps.Map( document.getElementById( 'map-canvas-food-east-southern' ) , mapOptions_east_southern ) ;
	map_food_east_southern.data.loadGeoJson('GeoJson/east-southern.json');
	map_food_east_southern.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});
  	map_food_mekong_delta = new google.maps.Map( document.getElementById( 'map-canvas-food-mekong-delta' ) , mapOptions_mekong_delta ) ;
	map_food_mekong_delta.data.loadGeoJson('GeoJson/mekong-delta.json');
	map_food_mekong_delta.data.setStyle({
    	strokeColor: '#FF3300',
    	strokeWeight: 3
  	});


	map_west_north = new google.maps.Map( document.getElementById( 'map-canvas-west-north' ) , mapOptions_west_north ) ;
	map_west_north.data.loadGeoJson('GeoJson/westen-north.json');
	map_west_north.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_east_north = new google.maps.Map( document.getElementById( 'map-canvas-east-north' ) , mapOptions_east_north ) ;
	map_east_north.data.loadGeoJson('GeoJson/east-north.json');
	map_east_north.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_red_river_delta = new google.maps.Map( document.getElementById( 'map-canvas-red-river-delta' ) , mapOptions_red_river_delta ) ;
	map_red_river_delta.data.loadGeoJson('GeoJson/red-river-delta.json');
	map_red_river_delta.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_center_north = new google.maps.Map( document.getElementById( 'map-canvas-center-north' ) , mapOptions_center_north ) ;
	map_center_north.data.loadGeoJson('GeoJson/center-north.json');
	map_center_north.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_center_southern = new google.maps.Map( document.getElementById( 'map-canvas-center-southern' ) , mapOptions_center_southern ) ;
	map_center_southern.data.loadGeoJson('GeoJson/center-southern.json');
	map_center_southern.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_taynguyen = new google.maps.Map( document.getElementById( 'map-canvas-taynguyen' ) , mapOptions_taynguyen ) ;
	map_taynguyen.data.loadGeoJson('GeoJson/taynguyen.json');
	map_taynguyen.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_east_southern = new google.maps.Map( document.getElementById( 'map-canvas-east-southern' ) , mapOptions_east_southern ) ;
	map_east_southern.data.loadGeoJson('GeoJson/east-southern.json');
	map_east_southern.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	map_mekong_delta = new google.maps.Map( document.getElementById( 'map-canvas-mekong-delta' ) , mapOptions_mekong_delta ) ;
	map_mekong_delta.data.loadGeoJson('GeoJson/mekong-delta.json');
	map_mekong_delta.data.setStyle({
    	strokeColor: '#0033CC',
    	strokeWeight: 3
  	});

	//------------------------------------------------------
	//Marker
	var west_north_markers = [];
	var east_north_markers = [];
	var red_river_delta_markers = [];
	var center_north_markers = [];
	var center_southern_markers = [];
	var taynguyen_markers = [];
	var east_southern_markers = [];
	var mekong_delta_markers = [];
	var world_markers = [];

	var food_east_north_markers = [];
	var food_west_north_markers = [];
	var food_red_river_data_markers = [];
	var food_center_north_markers = [];
	var food_center_southern_markers = [];
	var food_taynguyen_markers = [];
	var food_east_southern_markers = [];
	var food_mekong_delta_markers = [];

	west_north_markers[0] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(22.3475, 103.8175),
	});
	west_north_markers[1] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(22.324306, 103.652972),
	});
	west_north_markers[2] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(20.8625, 104.603056),
	});
	west_north_markers[3] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(21.886111, 104.906111),
	});
	west_north_markers[4] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(21.365848, 105.324417),
	});
	west_north_markers[5] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(21.381730, 103.014997),
	});
	west_north_markers[6] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(20.773745, 105.200263),
	});


	east_north_markers[0] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(22.847222, 106.734444),
	});
	east_north_markers[1] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(20.723889, 107.057778),
	});
	east_north_markers[2] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(20.918056, 107.502778),
	});
	east_north_markers[3] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(22.405278, 105.615278),
	});
	east_north_markers[4] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(23.279712, 105.256269),
	});
	east_north_markers[5] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.851555, 106.966803),
	});
	east_north_markers[6] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.775431, 105.477481),
	});
	east_north_markers[7] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.579444, 105.693889),
	});
	east_north_markers[8] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.071846, 107.424574),
	});
	east_north_markers[8] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.489224, 108.046502),
	});
	east_north_markers[9] = new google.maps.Marker({
		map: map_east_north,
		position: new google.maps.LatLng(21.472296, 105.588387),
	});


	red_river_delta_markers[0] = new google.maps.Marker({
		map: map_red_river_delta,
		position: new google.maps.LatLng(21.152439, 106.381463),
	});
	red_river_delta_markers[1] = new google.maps.Marker({
		map: map_red_river_delta,
		position: new google.maps.LatLng(21.159591, 105.384574),
	});
	red_river_delta_markers[2] = new google.maps.Marker({
		map: map_red_river_delta,
		position: new google.maps.LatLng(20.564173, 105.810991),
	});



	world_markers[0] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(20.876777, 107.137184),
	});
	world_markers[1] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(17.5, 106.175),
	});
	world_markers[2] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(20.077778, 105.604722),
	});
	world_markers[3] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(21.028333, 105.853333),
	});
	world_markers[4] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(16.462622, 107.585217),
	});
	world_markers[5] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(15.878605, 108.33483),
	});
	world_markers[6] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(15.790422, 108.107886),
	});
	world_markers[7] = new google.maps.Marker({
		map: map_world,
		position: new google.maps.LatLng(20.259276, 105.950441),
	});

	center_north_markers[0] = new google.maps.Marker({
		map: map_center_north,
		position: new google.maps.LatLng(18.674478, 105.554602),
	});
	center_north_markers[1] = new google.maps.Marker({
		map: map_center_north,
		position: new google.maps.LatLng(18.275874, 106.105414),
	});
	center_north_markers[2] = new google.maps.Marker({
		map: map_center_north,
		position: new google.maps.LatLng(16.247139, 108.075819),
	});


	center_southern_markers[0] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(16.007471, 107.988077),
	});
	center_southern_markers[1] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(15.961254, 108.507783),
	});
	center_southern_markers[2] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(16.060835, 108.247576),
	});
	center_southern_markers[3] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(13.784081, 109.274969),
	});
	center_southern_markers[4] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(13.404511, 109.271659),
	});
	center_southern_markers[5] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(11.929331, 109.138707),
	});
	center_southern_markers[6] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(11.588556, 109.056503),
	});
	center_southern_markers[7] = new google.maps.Marker({
		map: map_center_southern,
		position: new google.maps.LatLng(10.965746, 108.310597),
	});

	taynguyen_markers[0] = new google.maps.Marker({
		map: map_taynguyen,
		position: new google.maps.LatLng(14.581763, 108.274824)
	});
	taynguyen_markers[1] = new google.maps.Marker({
		map: map_taynguyen,
		position: new google.maps.LatLng(11.901930, 108.429744)
	});
	taynguyen_markers[2] = new google.maps.Marker({
		map: map_taynguyen,
		position: new google.maps.LatLng(12.019591, 108.384685)
	});
	taynguyen_markers[3] = new google.maps.Marker({
		map: map_taynguyen,
		position: new google.maps.LatLng(12.702351, 107.716250)
	});

	east_southern_markers[0] = new google.maps.Marker({
		map: map_east_southern,
		position: new google.maps.LatLng(11.384160, 106.175780)
	});
	east_southern_markers[1] = new google.maps.Marker({
		map: map_east_southern,
		position: new google.maps.LatLng(10.534401, 106.844745)
	});
	east_southern_markers[2] = new google.maps.Marker({
		map: map_east_southern,
		position: new google.maps.LatLng(10.399444, 107.236111)
	});
	east_southern_markers[3] = new google.maps.Marker({
		map: map_east_southern,
		position: new google.maps.LatLng(8.682374, 106.607208)
	});

	mekong_delta_markers[0] = new google.maps.Marker({
		map: map_mekong_delta,
		position: new google.maps.LatLng(10.332091, 106.323759)
	});
	mekong_delta_markers[1] = new google.maps.Marker({
		map: map_mekong_delta,
		position: new google.maps.LatLng(10.310231, 103.984879)
	});
	mekong_delta_markers[2] = new google.maps.Marker({
		map: map_mekong_delta,
		position: new google.maps.LatLng(8.789640, 104.996870)
	});
	mekong_delta_markers[3] = new google.maps.Marker({
		map: map_mekong_delta,
		position: new google.maps.LatLng(10.637096, 106.461127)
	});

	food_east_north_markers[0] = new google.maps.Marker({
		map: map_food_east_north,
		position: new google.maps.LatLng(22.806144, 104.980875)
	});
	food_east_north_markers[1] = new google.maps.Marker({
		map: map_food_east_north,
		position: new google.maps.LatLng(21.848465, 106.767413)
	});
	food_east_north_markers[2] = new google.maps.Marker({
		map: map_food_east_north,
		position: new google.maps.LatLng(20.977586, 107.049246)
	});

	food_west_north_markers[0] = new google.maps.Marker({
		map: map_food_west_north,
		position: new google.maps.LatLng(22.286858, 103.905935)
	});
	food_west_north_markers[1] = new google.maps.Marker({
		map: map_food_west_north,
		position: new google.maps.LatLng(22.403339, 103.451385)
	});
	food_west_north_markers[2] = new google.maps.Marker({
		map: map_food_west_north,
		position: new google.maps.LatLng(21.539375, 104.079828)
	});
	food_west_north_markers[3] = new google.maps.Marker({
		map: map_food_west_north,
		position: new google.maps.LatLng(20.829031, 105.341163)
	});

	food_red_river_data_markers[0] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(21.026317, 105.838409)
	});
	food_red_river_data_markers[1] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(20.818844, 105.992017)
	});
	food_red_river_data_markers[2] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(20.437122, 106.165675)
	});
	food_red_river_data_markers[3] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(20.935937, 106.317115)
	});
	food_red_river_data_markers[4] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(20.841613, 106.689404)
	});
	food_red_river_data_markers[5] = new google.maps.Marker({
		map: map_food_red_river_delta,
		position: new google.maps.LatLng(20.247796, 105.976376)
	});

	food_center_north_markers[0] = new google.maps.Marker({
		map: map_food_center_north,
		position: new google.maps.LatLng(16.448501, 107.569647)
	});
	food_center_north_markers[1] = new google.maps.Marker({
		map: map_food_center_north,
		position: new google.maps.LatLng(19.813528, 105.798294)
	});
	food_center_north_markers[2] = new google.maps.Marker({
		map: map_food_center_north,
		position: new google.maps.LatLng(18.681698, 105.677399)
	});
	food_center_north_markers[3] = new google.maps.Marker({
		map: map_food_center_north,
		position: new google.maps.LatLng(18.356903, 105.909113)
	});

	food_center_southern_markers[0] = new google.maps.Marker({
		map: map_food_center_southern,
		position: new google.maps.LatLng(16.072184, 108.210358)
	});
	food_center_southern_markers[1] = new google.maps.Marker({
		map: map_food_center_southern,
		position: new google.maps.LatLng(15.875770, 108.353370)
	});
	food_center_southern_markers[2] = new google.maps.Marker({
		map: map_food_center_southern,
		position: new google.maps.LatLng(15.381929, 109.120782)
	});
	food_center_southern_markers[3] = new google.maps.Marker({
		map: map_food_center_southern,
		position: new google.maps.LatLng(12.233787, 109.205947)
	});
	food_center_southern_markers[4] = new google.maps.Marker({
		map: map_food_center_southern,
		position: new google.maps.LatLng(10.981241, 108.271207)
	});

	food_taynguyen_markers[0] = new google.maps.Marker({
		map: map_food_taynguyen,
		position: new google.maps.LatLng(12.890253, 107.791517)
	});
	food_taynguyen_markers[1] = new google.maps.Marker({
		map: map_food_taynguyen,
		position: new google.maps.LatLng(12.661996, 108.038003)
	});
	food_taynguyen_markers[2] = new google.maps.Marker({
		map: map_food_taynguyen,
		position: new google.maps.LatLng(12.218598, 107.642382)
	});
	food_taynguyen_markers[3] = new google.maps.Marker({
		map: map_food_taynguyen,
		position: new google.maps.LatLng(11.927753, 108.467543)
	});

	food_east_southern_markers[0] = new google.maps.Marker({
		map: map_food_east_southern,
		position: new google.maps.LatLng(10.768052, 106.653125)
	});
	food_east_southern_markers[1] = new google.maps.Marker({
		map: map_food_east_southern,
		position: new google.maps.LatLng(10.402166, 107.128049)
	});
	food_east_southern_markers[2] = new google.maps.Marker({
		map: map_food_east_southern,
		position: new google.maps.LatLng(11.358845, 106.092266)
	});
	food_east_southern_markers[3] = new google.maps.Marker({
		map: map_food_east_southern,
		position: new google.maps.LatLng(11.208992, 106.664731)
	});

	food_mekong_delta_markers[0] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(10.307191, 103.986252)
	});
	food_mekong_delta_markers[1] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(9.562149, 105.934674)
	});
	food_mekong_delta_markers[2] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(9.260652, 105.716184)
	});
	food_mekong_delta_markers[3] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(10.676565, 105.092895)
	});
	food_mekong_delta_markers[4] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(8.634354, 105.005800)
	});
	food_mekong_delta_markers[5] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(9.360733, 104.954347)
	});
	food_mekong_delta_markers[6] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(9.018844, 105.062412)
	});
	food_mekong_delta_markers[7] = new google.maps.Marker({
		map: map_food_mekong_delta,
		position: new google.maps.LatLng(10.553032, 105.666377)
	});


}


//タブ切り替える時にリサイズする必要がある
$("#to-world").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_world, 'resize');
});
$("#to-local").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_local, 'resize');
});
$("#to-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food, 'resize');
});
$("#to-festival").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_festival, 'resize');
});

$("#to-west-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_west_north, 'resize');
});
$("#from-local-to-west-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_west_north, 'resize');
});
$("#to-east-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_east_north, 'resize');
});
$("#from-local-to-east-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_east_north, 'resize');
});
$("#to-red-river-delta").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_red_river_delta, 'resize');
});
$("#from-local-to-red-river-delta").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_red_river_delta, 'resize');
});
$("#to-center-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_center_north, 'resize');
});
$("#from-local-to-center-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_center_north, 'resize');
});
$("#to-center-southern").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_center_southern, 'resize');
});
$("#to-taynguyen").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_taynguyen, 'resize');
});
$("#to-east-southern").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_east_southern, 'resize');
});
$("#to-mekong-delta").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_mekong_delta, 'resize');
});


$("#to-center-north-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_center_north, 'resize');
});
$("#to-east-north-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_east_north, 'resize');
});
$("#to-west-north-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_west_north, 'resize');
});
$("#to-red-river-delta-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_red_river_delta, 'resize');
});
$("#to-center-southern-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_center_southern, 'resize');
});
$("#to-taynguyen-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_taynguyen, 'resize');
});
$("#to-east-southern-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_east_southern, 'resize');
});
$("#to-mekong-delta-in-food").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_food_mekong_delta, 'resize');
});




initialize();
