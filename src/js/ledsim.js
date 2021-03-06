// 
// ledsim.js
//   LEDシミュレータ処理
// 

var g_ledplayinfo = null;
var g_timer = null;

// 
// LEDシミュレーション初期化
// 
function initLedSimulation() {
	var d = $('#simdlg');

	// 1ダイアログを初期化（自動オープンしない）
	d.dialog({
		modal: true,
		width: 1024,
		autoOpen: false
	});

	// ボタン・クリック時にダイアログを開く
	$('#simbtn').click(function(e){
		d.dialog('open');
	});

	// Openイベント発生ハンドラ
	d.bind('dialogopen', function(event) {
		// 再生開始
		led_play();
	});

	// Closeイベント発生ハンドラ
	d.bind('dialogclose', function(event) {
		led_stop();
	});
}

// 
// LED演出処理の開始
// 
function led_play(){
	// 演出用のタイマーは停止
	led_timer_stop();

	var cmdArray = [];

	// データのソート処理
	var api = $('#example').DataTable();
	var data = api.data();
	xsort(data, 0, 1);

  // テーブルからコマンドオブジェクトを生成する
	for(var i = 0 ; i < data.length ; i++){
		// Remarksに入っているjsonを取得
		cmdArray.push(CmdFromJson(JSON.parse(data[i][10])));
	}

	// データが存在する場合のみ実施する。
	if(cmdArray.length != 0){

		// 演出情報の設定
		g_ledplayinfo = new PlayInfo(cmdArray);
		
		// LED数の更新
		ledsToUse = g_ledplayinfo.ledlen;
		updateSimLeds();

		//関数led_play_timer()を1ミリ秒間隔で呼び出す
		g_timer = setInterval("led_play_timer()",1);

		$('#simdlg').dialog({width : 50 + ledsToUse*32});
	}
}

// 
// LED演出処理の停止
// 
function led_stop(){
	// 演出用のタイマーは停止
	led_timer_stop();
}

// 
// タイマー内容を定義
// 
function led_play_timer(){

	// LED演出の実施
	g_ledplayinfo.play();

	// 再生終了の場合タイマーを停止する
	if(g_ledplayinfo.is_end()){
		led_timer_stop();
	}
}

// 
// LED演出用のタイマー停止
// 
function led_timer_stop(){
	if(g_timer != null){
		clearInterval(g_timer);
		g_timer = null;
	}
}
