/********************************************************************************

	SYNCER 〜 知識、感動をみんなと同期(Sync)するブログ

	* 配布場所
	https://syncer.jp/google-maps-javascript-api-matome

	* 最終更新日時
	2015/08/03 19:24

	* 作者
	あらゆ

	** 連絡先
	Twitter: https://twitter.com/arayutw
	Facebook: https://www.facebook.com/arayutw
	Google+: https://plus.google.com/114918692417332410369/
	E-mail: info@syncer.jp

	※ バグ、不具合の報告、提案、ご要望など、お待ちしております。
	※ 申し訳ありませんが、ご利用者様、個々の環境における問題はサポートしていません。

********************************************************************************/

//Topページ

// キャンパスの要素を取得する
var canvas = document.getElementById( 'map-canvas' ) ;
var canvas_west_north = document.getElementById( 'map-canvas-west-north' ) ;

// 中心の位置座標を指定する
var latlng = new google.maps.LatLng( 16 , 107 );
var latlng_west_north = new google.maps.LatLng( 17 , 108 );

// 地図のオプションを設定する
var mapOptions = {
	zoom: 5 ,				// ズーム値
	center: latlng ,		// 中心座標 [latlng]
};
var mapOptions_west_north = {
	zoom: 5 ,				// ズーム値
	center: latlng_west_north ,		// 中心座標 [latlng]
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas , mapOptions ) ;

//西北部
// キャンパスの要素を取得する


// 中心の位置座標を指定する


// 地図のオプションを設定する


// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map_west_north = new google.maps.Map( canvas_west_north , mapOptions_west_north ) ;



$(".tab").click(function(){
    google.maps.event.trigger(map,'resize');
    map.setCenter(latlng);
});
