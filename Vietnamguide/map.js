
// キャンパスの要素を取得する
var map;
var map_west_north;

function initialize() {
	// 中心の位置座標を指定する
	var latlng = new google.maps.LatLng( 16 , 107 );
	var latlng_west_north = new google.maps.LatLng( 23.5 , 102 );

	// 地図のオプションを設定する
	var mapOptions = {
		zoom: 5 ,				// ズーム値
		center: latlng ,		// 中心座標 [latlng]
	};
	var mapOptions_west_north = {
		zoom: 7 ,				// ズーム値
		center: latlng_west_north ,		// 中心座標 [latlng]
	};

	map = new google.maps.Map( document.getElementById( 'map-canvas' ) , mapOptions ) ;
	map_west_north = new google.maps.Map( document.getElementById( 'map-canvas-west-north' ) , mapOptions_west_north ) ;
}

//タブ切り替える時にリサイズする必要がある
$("#to-west-north").on('shown.bs.tab', function() {

  	/* Trigger map resize event */
	google.maps.event.trigger(map_west_north, 'resize');
});

initialize();
