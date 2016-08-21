var map;
var map_west_north;

function initialize() {
	// 中心の位置座標を指定する
	var latlng = new google.maps.LatLng( 16 , 107 );
	var latlng_west_north = new google.maps.LatLng( 24.2 , 102 );

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

	//Mapインスタンス生成
	map = new google.maps.Map( document.getElementById( 'map-canvas' ) , mapOptions ) ;
	map_west_north = new google.maps.Map( document.getElementById( 'map-canvas-west-north' ) , mapOptions_west_north ) ;


	//-----------------------------------------------------------
	//ポリらアイン
	//ポリラインの座標
	var flightPlanCoordinates = [
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

	//ポリラインの構造
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
		geodesic: true,
	  strokeColor: '#FF0000',
	  strokeOpacity: 1.0,
	  strokeWeight: 2
  });
  flightPath.setMap(map_west_north);


	//------------------------------------------------------
	//Marker
	var markers = [];

	markers[0] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(22.3475, 103.8175),
	});
	markers[1] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(22.324306, 103.652972),
	});
	markers[2] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(20.8625, 104.603056),
	});
	markers[3] = new google.maps.Marker({
		map: map_west_north,
		position: new google.maps.LatLng(21.886111, 104.906111),
	});
}


//タブ切り替える時にリサイズする必要がある
$("#to-west-north").on('shown.bs.tab', function() {
  	/* Trigger map resize event */
	google.maps.event.trigger(map_west_north, 'resize');
});


initialize();
