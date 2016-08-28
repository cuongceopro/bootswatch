var map;
var map_west_north;
var map_east_north;
var map_red_river_delta;
var map_world;
var map_center_north;

function initialize() {
	// 中心の位置座標を指定する
	var latlng = new google.maps.LatLng( 16 , 107 );
	var latlng_west_north = new google.maps.LatLng( 24.2 , 102 );
	var latlng_east_north = new google.maps.LatLng( 24.2 , 103.5 );
	var latlng_red_river_delta = new google.maps.LatLng( 24.2 , 103.8 );
	var latlng_world = new google.maps.LatLng( 26 , 98 );
	var latlng_center_north = new google.maps.LatLng( 23.5 , 101.5 );

	// 地図のオプションを設定する
	var mapOptions = {
		zoom: 5 ,				// ズーム値
		center: latlng ,		// 中心座標 [latlng]
	};
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
	var mapOptions_world = {
		zoom: 5 ,				// ズーム値
		center: latlng_world ,		// 中心座標 [latlng]
	};
	var mapOptions_center_north = {
		zoom: 6 ,				// ズーム値
		center: latlng_center_north ,		// 中心座標 [latlng]
	};

	//Mapインスタンス生成
	map = new google.maps.Map( document.getElementById( 'map-canvas' ) , mapOptions ) ;
	//map.data.loadGeoJson('https://data.opendevelopmentmekong.net/vi/dataset/40a9f762-d942-43bb-93bd-e70981e9735c/resource/df3b5e86-4d9b-4f7a-87df-fe6608918d5a/download/Diagioi.geojson');
	//map.data.loadGeoJson('./geojson.geojson');
	//map.data.loadGeoJson('./Diagioi.geojson');
	map.data.loadGeoJson('GeoJson/westen-north0.json');
	//map.data.loadGeoJson('GeoJson/geojson.json');

	map_west_north = new google.maps.Map( document.getElementById( 'map-canvas-west-north' ) , mapOptions_west_north ) ;
	map_east_north = new google.maps.Map( document.getElementById( 'map-canvas-east-north' ) , mapOptions_east_north ) ;
	map_red_river_delta = new google.maps.Map( document.getElementById( 'map-canvas-red-river-delta' ) , mapOptions_red_river_delta ) ;
	map_world = new google.maps.Map( document.getElementById( 'map-canvas-world' ) , mapOptions_world ) ;
	map_center_north = new google.maps.Map( document.getElementById( 'map-canvas-center-north' ) , mapOptions_center_north ) ;

	//-----------------------------------------------------------
	//ポリらアイン
	//ポリラインの座標
	var polyline_west_north = [
		{lat: 22.676331, lng: 104.392778},
		{lat: 22.605107, lng: 104.453053},
		{lat: 22.509825, lng: 104.410666},
		{lat: 22.462489, lng: 104.472325},
		{lat: 22.336520, lng: 104.584530},
		{lat: 22.262367, lng: 104.552472},
		{lat: 22.240114, lng: 104.584530},
		{lat: 22.284617, lng: 104.624603},
		{lat: 22.240114, lng: 104.728794},
		{lat: 22.165910, lng: 104.768867},
		{lat: 22.173332, lng: 104.840999},
		{lat: 22.069387, lng: 104.905116},
		{lat: 22.032245, lng: 104.993277},
		{lat: 21.868705, lng: 105.033350},
		{lat: 21.801749, lng: 105.097467},
		{lat: 21.697531, lng: 105.033350},
		{lat: 21.593239, lng: 104.881072},
		{lat: 21.429198, lng: 104.905116},
		{lat: 21.347109, lng: 104.889087},
		{lat: 21.324713, lng: 104.820962},
		{lat: 21.162240, lng: 104.857028},
		{lat: 21.065044, lng: 104.921145},
		{lat: 20.982752, lng: 105.073423},
		{lat: 20.945331, lng: 105.217687},
		{lat: 20.960300, lng: 105.337906},
		{lat: 21.012681, lng: 105.321877},
		{lat: 20.992105, lng: 105.410038},
		{lat: 20.917259, lng: 105.554301},
		{lat: 20.812413, lng: 105.642462},
		{lat: 20.668129, lng: 105.674521},
		{lat: 20.555605, lng: 105.770697},
		{lat: 20.427978, lng: 105.854850},
		{lat: 20.445815, lng: 105.752664},
		{lat: 20.378212, lng: 105.748656},
		{lat: 20.412017, lng: 105.696561},
		{lat: 20.344400, lng: 105.720605},
		{lat: 20.310580, lng: 105.668510},
		{lat: 20.363185, lng: 105.536268},
		{lat: 20.385725, lng: 105.428071},
		{lat: 20.398872, lng: 105.337906},
		{lat: 20.436427, lng: 105.259763},
		{lat: 20.490866, lng: 105.245738},
		{lat: 20.517141, lng: 105.171602},
		{lat: 20.569675, lng: 105.107485},
		{lat: 20.564516, lng: 105.044370},
		{lat: 20.575772, lng: 104.986264},
		{lat: 20.632037, lng: 104.956209},
		{lat: 20.671878, lng: 104.887083},
		{lat: 20.655006, lng: 104.838995},
		{lat: 20.585620, lng: 104.798922},
		{lat: 20.578117, lng: 104.740816},
		{lat: 20.604376, lng: 104.716772},
		{lat: 20.649615, lng: 104.636625}
  ];
	var polyline_east_north = [
		{lat: 22.676331, lng: 104.392778},
		{lat: 22.605107, lng: 104.453053},
		{lat: 22.509825, lng: 104.410666},
		{lat: 22.462489, lng: 104.472325},
		{lat: 22.336520, lng: 104.584530},
		{lat: 22.262367, lng: 104.552472},
		{lat: 22.240114, lng: 104.584530},
		{lat: 22.284617, lng: 104.624603},
		{lat: 22.240114, lng: 104.728794},
		{lat: 22.165910, lng: 104.768867},
		{lat: 22.173332, lng: 104.840999},
		{lat: 22.069387, lng: 104.905116},
		{lat: 22.032245, lng: 104.993277},
		{lat: 21.868705, lng: 105.033350},
		{lat: 21.801749, lng: 105.097467},
		{lat: 21.697531, lng: 105.033350},
		{lat: 21.593239, lng: 104.881072},
		{lat: 21.429198, lng: 104.905116},
		{lat: 21.347109, lng: 104.889087},
		{lat: 21.324713, lng: 104.820962},
		{lat: 21.162240, lng: 104.857028},
		{lat: 21.065044, lng: 104.921145},
		{lat: 20.982752, lng: 105.073423},
		{lat: 20.945331, lng: 105.217687},
		{lat: 20.960300, lng: 105.337906},
		{lat: 21.012681, lng: 105.321877},
		{lat: 21.137806, lng: 105.315371},
		{lat: 21.313515, lng: 105.357259},
		{lat: 21.498758, lng: 105.325843},
		{lat: 21.497780, lng: 105.419905},
		{lat: 21.573503, lng: 105.545714},
		{lat: 21.433284, lng: 105.687160},
		{lat: 21.374817, lng: 105.781356},
		{lat: 21.338264, lng: 105.891252},
		{lat: 21.221232, lng: 106.040396},
		{lat: 21.168054, lng: 106.179199},
		{lat: 21.173167, lng: 106.321245},
		{lat: 21.206503, lng: 106.397859},
		{lat: 21.216026, lng: 106.500010},
		{lat: 21.111238, lng: 106.469365},
		{lat: 21.063583, lng: 106.446381},
		{lat: 21.023064, lng: 106.609823},
		{lat: 20.994455, lng: 106.750281},
		{lat: 20.883763, lng: 106.751787},
		{lat: 20.834679, lng: 106.813694}
	];
	var polyline_red_river_delta = [
		{lat: 20.834679, lng: 106.813694},
		{lat: 20.883763, lng: 106.751787},
		{lat: 20.994455, lng: 106.750281},
		{lat: 21.023064, lng: 106.609823},
		{lat: 21.063583, lng: 106.446381},
		{lat: 21.111238, lng: 106.469365},
		{lat: 21.216026, lng: 106.500010},
		{lat: 21.206503, lng: 106.397859},
		{lat: 21.173167, lng: 106.321245},
		{lat: 21.168054, lng: 106.179199},
		{lat: 21.221232, lng: 106.040396},
		{lat: 21.338264, lng: 105.891252},
		{lat: 21.374817, lng: 105.781356},
		{lat: 21.433284, lng: 105.687160},
		{lat: 21.573503, lng: 105.545714},
		{lat: 21.497780, lng: 105.419905},
		{lat: 21.498758, lng: 105.325843},
		{lat: 21.313515, lng: 105.357259},
		{lat: 21.137806, lng: 105.315371},
		{lat: 21.012681, lng: 105.321877},
		{lat: 20.992105, lng: 105.410038},
		{lat: 20.917259, lng: 105.554301},
		{lat: 20.812413, lng: 105.642462},
		{lat: 20.668129, lng: 105.674521},
		{lat: 20.555605, lng: 105.770697},
		{lat: 20.427978, lng: 105.854850},
		{lat: 20.445815, lng: 105.752664},
		{lat: 20.378212, lng: 105.748656},
		{lat: 20.412017, lng: 105.696561},
		{lat: 20.344400, lng: 105.720605},
		{lat: 20.310580, lng: 105.668510},
		{lat: 20.363185, lng: 105.536268},
		{lat: 20.385725, lng: 105.428071},
		{lat: 20.342013, lng: 105.515896},
		{lat: 20.292091, lng: 105.603180},
		{lat: 20.267327, lng: 105.654807},
		{lat: 20.215185, lng: 105.723226},
		{lat: 20.164074, lng: 105.812339},
		{lat: 20.112945, lng: 105.901452},
		{lat: 20.061800, lng: 106.005417},
		{lat: 20.064125, lng: 106.072252},
		{lat: 20.001334, lng: 106.042547},
		{lat: 19.958726, lng: 106.026735}
];
var polyline_center_north_1 = [
	{lat: 20.649615, lng: 104.636625},
	{lat: 20.604376, lng: 104.716772},
	{lat: 20.578117, lng: 104.740816},
	{lat: 20.585620, lng: 104.798922},
	{lat: 20.655006, lng: 104.838995},
	{lat: 20.671878, lng: 104.887083},
	{lat: 20.632037, lng: 104.956209},
	{lat: 20.575772, lng: 104.986264},
	{lat: 20.564516, lng: 105.044370},
	{lat: 20.569675, lng: 105.107485},
	{lat: 20.517141, lng: 105.171602},
	{lat: 20.490866, lng: 105.245738},
	{lat: 20.436427, lng: 105.259763},
	{lat: 20.398872, lng: 105.337906},
	{lat: 20.385725, lng: 105.428071},
	{lat: 20.385725, lng: 105.428071},
	{lat: 20.342013, lng: 105.515896},
	{lat: 20.292091, lng: 105.603180},
	{lat: 20.267327, lng: 105.654807},
	{lat: 20.215185, lng: 105.723226},
	{lat: 20.164074, lng: 105.812339},
	{lat: 20.112945, lng: 105.901452},
	{lat: 20.061800, lng: 106.005417},
	{lat: 20.064125, lng: 106.072252},
	{lat: 20.001334, lng: 106.042547},
	{lat: 19.958726, lng: 106.026735}
];
	var polyline_center_north_2 = [
		{lat: 16.027009, lng: 107.464233},
		{lat: 16.040421, lng: 107.487490},
		{lat: 16.011362, lng: 107.522374},
		{lat: 16.018068, lng: 107.561911},
		{lat: 16.047126, lng: 107.557259},
		{lat: 16.058301, lng: 107.620052},
		{lat: 16.026540, lng: 107.628192},
		{lat: 15.994081, lng: 107.698543},
		{lat: 16.039449, lng: 107.756325},
		{lat: 16.056093, lng: 107.815263},
		{lat: 16.109384, lng: 107.855318},
		{lat: 16.177456, lng: 107.870724},
		{lat: 16.210004, lng: 107.916941},
		{lat: 16.186333, lng: 107.963159},
		{lat: 16.210004, lng: 107.993970},
		{lat: 16.177456, lng: 108.098730},
		{lat: 16.207045, lng: 108.194245}
	];

	//ポリラインの構造
  var flightPath_west_north = new google.maps.Polyline({
    path: polyline_west_north,
		geodesic: true,
	  strokeColor: '#FF0000',
	  strokeOpacity: 1.0,
	  strokeWeight: 2
  });
	var flightPath_east_north = new google.maps.Polyline({
		path: polyline_east_north,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var flightPath_red_river_delta = new google.maps.Polyline({
		path: polyline_red_river_delta,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var flightPath_center_north_1 = new google.maps.Polyline({
		path: polyline_center_north_1,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var flightPath_center_north_2 = new google.maps.Polyline({
		path: polyline_center_north_2,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

  flightPath_west_north.setMap(map_west_north);
	flightPath_east_north.setMap(map_east_north);
	flightPath_red_river_delta.setMap(map_red_river_delta);
	flightPath_center_north_1.setMap(map_center_north);
	flightPath_center_north_2.setMap(map_center_north);


	//------------------------------------------------------
	//Marker
	var west_north_markers = [];
	var east_north_markers = [];
	var world_markers = [];

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

}


//タブ切り替える時にリサイズする必要がある
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
$("#to-world").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_world, 'resize');
});
$("#to-center-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_center_north, 'resize');
});
$("#from-local-to-center-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_center_north, 'resize');
});





initialize();
