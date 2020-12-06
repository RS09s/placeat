//料理候補
var food = [
  '和食',
  'ラーメン',
  '寿司',
  '中華',
  'イタリアン',
  'アジア',
  '焼肉',
  '洋食',
  '鍋',
  '焼き鳥',
  'ステーキ',
  '海鮮',
  '天ぷら',
  'お好み焼き',
  'カレー',
  'ファストフード'
];
//グローバル変数
var key = 0;
var max_len = food.length - 1;
var randstart;
var keep;
var speed = 60;
//ボタンの状態把握
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
//抽選結果の保持
var forresearch;
// 初期HTML記述をセット
var defaultHTML;
function DefaultSave() {
  defaultHTML = document.body.innerHTML;
}
// HTML記述を初期状態に戻す
function HTMLRestore() {
  document.body.innerHTML = defaultHTML;
}
var randshuffle= function(){
  if(key > max_len) key = 0;
  $('.rand_name').text(food[key]);
  key++;
}
//和食
$(".japanese").on("click", function()  {
  a = 1;
  keep = food.indexOf("和食");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.japanese2').show();
});
$(".japanese2").on("click", function()  {
  a = 0;
  food.push("和食");
  max_len = food.length - 1;
  $(this).hide();
  $('.japanese').show();
});
//ラーメン
$(".noodle").on("click", function()  {
  b = 1;
  keep = food.indexOf("ラーメン");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.noodle2').show();
});
$(".noodle2").on("click", function()  {
  b = 0;
  food.push("ラーメン");
  max_len = food.length - 1;
  $(this).hide();
  $('.noodle').show();
});
//寿司
$(".sushi").on("click", function()  {
  c = 1;
  keep = food.indexOf("寿司");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.sushi2').show();
});
$(".sushi2").on("click", function()  {
  c = 0;
  food.push("寿司");
  max_len = food.length - 1;
  $(this).hide();
  $('.sushi').show();
});
//中華
$(".chinese").on("click", function()  {
  d = 1;
  keep = food.indexOf("中華");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.chinese2').show();
});
$(".chinese2").on("click", function()  {
  d = 0;
  food.push("中華");
  max_len = food.length - 1;
  $(this).hide();
  $('.chinese').show();
});
//イタリアン
$(".italian").on("click", function()  {
  e = 1;
  keep = food.indexOf("イタリアン");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.italian2').show();
});
$(".italian2").on("click", function()  {
  e = 0;
  food.push("イタリアン");
  max_len = food.length - 1;
  $(this).hide();
  $('.italian').show();
});
//アジア
$(".asia").on("click", function()  {
  f = 1;
  keep = food.indexOf("アジア");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.asia2').show();
});
$(".asia2").on("click", function()  {
  f = 0;
  food.push("アジア");
  max_len = food.length - 1;
  $(this).hide();
  $('.asia').show();
});
//焼肉
$(".yakiniku").on("click", function()  {
  g = 1;
  keep = food.indexOf("焼肉");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.yakiniku2').show();
});
$(".yakiniku2").on("click", function()  {
  g = 0;
  food.push("焼肉");
  max_len = food.length - 1;
  $(this).hide();
  $('.yakiniku').show();
});
//洋食
$(".western").on("click", function()  {
  h = 1;
  keep = food.indexOf("洋食");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.western2').show();
});
$(".western2").on("click", function()  {
  h = 0;
  food.push("洋食");
  max_len = food.length - 1;
  $(this).hide();
  $('.western').show();
});
//鍋
$(".nabe").on("click", function()  {
  i = 1;
  keep = food.indexOf("鍋");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.nabe2').show();
});
$(".nabe2").on("click", function()  {
  i = 0;
  food.push("鍋");
  max_len = food.length - 1;
  $(this).hide();
  $('.nabe').show();
});
//焼き鳥
$(".chicken").on("click", function()  {
  j = 1;
  keep = food.indexOf("焼き鳥");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.chicken2').show();
});
$(".chicken2").on("click", function()  {
  j = 0;
  food.push("焼き鳥");
  max_len = food.length - 1;
  $(this).hide();
  $('.chicken').show();
});
//ステーキ
$(".steak").on("click", function()  {
  k = 1;
  keep = food.indexOf("ステーキ");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.steak2').show();
});
$(".steak2").on("click", function()  {
  k = 0;
  food.push("ステーキ");
  max_len = food.length - 1;
  $(this).hide();
  $('.steak').show();
});
//海鮮
$(".seafood").on("click", function()  {
  l = 1;
  keep = food.indexOf("海鮮");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.seafood2').show();
});
$(".seafood2").on("click", function()  {
  l = 0;
  food.push("海鮮");
  max_len = food.length - 1;
  $(this).hide();
  $('.seafood').show();
});
//天ぷら
$(".tempura").on("click", function()  {
  m = 1;
  keep = food.indexOf("天ぷら");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.tempura2').show();
});
$(".tempura2").on("click", function()  {
  m = 0;
  food.push("天ぷら");
  max_len = food.length - 1;
  $(this).hide();
  $('.tempura').show();
});
//お好み焼き
$(".okonomiyaki").on("click", function()  {
  n = 1;
  keep = food.indexOf("お好み焼き");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.okonomiyaki2').show();
});
$(".okonomiyaki2").on("click", function()  {
  n = 0;
  food.push("お好み焼き");
  max_len = food.length - 1;
  $(this).hide();
  $('.okonomiyaki').show();
});
//カレー
$(".curry").on("click", function()  {
  o = 1;
  keep = food.indexOf("カレー");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.curry2').show();
});
$(".curry2").on("click", function()  {
  o = 0
  food.push("カレー");
  max_len = food.length - 1;
  $(this).hide();
  $('.curry').show();
});
//ファストフード
$(".fastfood").on("click", function()  {
  p = 1;
  keep = food.indexOf("ファストフード");
  if(keep >= 0){
    food.splice(keep, 1);
  }
  max_len = food.length - 1;
  $(this).hide();
  $('.fastfood2').show();
});
$(".fastfood2").on("click", function()  {
  p = 0;
  food.push("ファストフード");
  max_len = food.length - 1;
  $(this).hide();
  $('.fastfood').show();
});



//要素のリセット
$(".reset").on("click", function()  {
  if(a == 1){
    a = 0;
    food.push("和食");
    $('.japanese2').hide();
    $('.japanese').show();
  }
  if(b == 1){
    b = 0;
    food.push("ラーメン");
    $('.noodle2').hide();
    $('.noodle').show();
  }
  if(c == 1){
    c = 0;
    food.push("寿司");
    $('.sushi2').hide();
    $('.sushi').show();
  }
  if(d == 1){
    d = 0;
    food.push("中華");
    $('.chinese2').hide();
    $('.chinese').show();
  }
  if(e == 1){
    e = 0;
    food.push("イタリアン");
    $('.italian2').hide();
    $('.italian').show();
  }
  if(f == 1){
    f = 0;
    food.push("アジア");
    $('.asia2').hide();
    $('.asia').show();
  }
  if(g == 1){
    g = 0;
    food.push("焼肉");
    $('.yakiniku2').hide();
    $('.yakiniku').show();
  }
  if(h == 1){
    h = 0;
    food.push("洋食");
    $('.western2').hide();
    $('.western').show();
  }
  if(i == 1){
    i = 0;
    food.push("鍋");
    $('.nabe2').hide();
    $('.nabe').show();
  }
  if(j == 1){
    j = 0;
    food.push("焼き鳥");
    $('.chicken2').hide();
    $('.chicken').show();
  }
  if(k == 1){
    k = 0;
    food.push("ステーキ");
    $('.steak2').hide();
    $('.steak').show();
  }
  if(l == 1){
    l = 0;
    food.push("海鮮");
    $('.seafood2').hide();
    $('.seafood').show();
  }
  if(m == 1){
    m = 0;
    food.push("天ぷら");
    $('.tempura2').hide();
    $('.tempura').show();
  }
  if(n == 1){
    n = 0;
    food.push("お好み焼き");
    $('.okonomiyaki2').hide();
    $('.okonomiyaki').show();
  }
  if(o == 1){
    o = 0;
    food.push("カレー");
    $('.curry2').hide();
    $('.curry').show();
  }
  if(p == 1){
    p = 0;
    food.push("ファストフード");
    $('.fastfood2').hide();
    $('.fastfood').show();
  }
  max_len = food.length - 1;
  $('.rand_name').text(null);
  $('.restart').hide();
  $('.start').show();
  $('.japanese3').hide();
  $('.noodle3').hide();
  $('.sushi3').hide();
  $('.chinese3').hide();
  $('.italian3').hide();
  $('.asia3').hide();
  $('.yakiniku3').hide();
  $('.western3').hide();
  $('.nabe3').hide();
  $('.chicken3').hide();
  $('.steak3').hide();
  $('.seafood3').hide();
  $('.tempura3').hide();
  $('.okonomiyaki3').hide();
  $('.curry3').hide();
  $('.fastfood3').hide();
  $('.research').hide();
  if(q == 0){
    clearInterval(randstart);
    $('.stop').hide();
    $('.research').hide();
  }
  $('.para').hide();
  $('.map').hide();
});

//抽選開始
$('.start').click(function(){
  randstart = setInterval(randshuffle, speed);
  $(this).hide();
  $('.stop').show(); //stopボタンの表示
  $('.restart').hide(); //restartボタンの非表示
});
//抽選ストップ
$('.stop').click(function(){
  var random = Math.floor(Math.random() * (max_len + 1)); //ランダムで配列の数を取得
  $('.rand_name').text(food[random]); //対象の数値に該当する文字を表示
  clearInterval(randstart); //シャッフルストップ
  if(food[random] == "和食"){
    $('.japanese3').show();
    forresearch = "和食";
  }
  else if(food[random] == "ラーメン"){
    $('.noodle3').show();
    forresearch = "ラーメン";
  }
  else if(food[random] == "寿司"){
    $('.sushi3').show();
    forresearch = "寿司";
  }
  else if(food[random] == "中華"){
    $('.chinese3').show();
    forresearch = "中華";
  }
  else if(food[random] == "イタリアン"){
    $('.italian3').show();
    forresearch = "イタリアン";
  }
  else if(food[random] == "アジア"){
    $('.asia3').show();
    forresearch = "アジア料理";
  }
  else if(food[random] == "ステーキ"){
    $('.steak3').show();
    forresearch = "ステーキ";
  }
  else if(food[random] == "洋食"){
    $('.western3').show();
    forresearch = "洋食";
  }
  else if(food[random] == "鍋"){
    $('.nabe3').show();
    forresearch = "鍋";
  }
  else if(food[random] == "焼き鳥"){
    $('.chicken3').show();
    forresearch = "焼き鳥";
  }
  else if(food[random] == "焼肉"){
    $('.yakiniku3').show();
    forresearch = "焼肉";
  }
  else if(food[random] == "海鮮"){
    $('.seafood3').show();
    forresearch = "海鮮";
  }
  else if(food[random] == "天ぷら"){
    $('.tempura3').show();
    forresearch = "天ぷら";
  }
  else if(food[random] == "お好み焼き"){
    $('.okonomiyaki3').show();
    forresearch = "お好み焼き";
  }
  else if(food[random] == "カレー"){
    $('.curry3').show();
    forresearch = "カレー";
  }
  else if(food[random] == "ファストフード"){
    $('.fastfood3').show();
    forresearch = "ファストフード";
  }
  $(this).hide();
  $('.restart').show();
  $('.research').show();
  q = 1;
});
//再抽選
$('.restart').click(function(){
  if (a*b*c*d*e*f*g*h*i*j*k*l*m*n*o != 0){
    alert("候補を選択してください");
  }
  else{
    if(q == 1){
      $('.japanese3').hide();
      $('.noodle3').hide();
      $('.sushi3').hide();
      $('.chinese3').hide();
      $('.italian3').hide();
      $('.asia3').hide();
      $('.yakiniku3').hide();
      $('.western3').hide();
      $('.nabe3').hide();
      $('.chicken3').hide();
      $('.steak3').hide();
      $('.seafood3').hide();
      $('.tempura3').hide();
      $('.okonomiyaki3').hide();
      $('.curry3').hide();
      $('.fastfood3').hide();
    }
    q = 0;
    $(this).hide();
    $('.stop').show();
    $('.research').hide();
    randstart = setInterval(randshuffle, speed); //シャッフル再開
  }
});

//googlemapの表示
function initMap() {
  var target = document.getElementById('researchmap');
  var tokyo = {lat: 35.681167, lng: 139.767052};  //東京駅の緯度経度
  var map = new google.maps.Map(document.getElementById('researchmap'), {
    center: tokyo,
    zoom: 16
  });

  //情報ウィンドウのインスタンスの生成（後でマーカーに紐付け）
  var infowindow = new google.maps.InfoWindow();

  //PlacesService のインスタンスの生成（引数に map を指定）
  var service = new google.maps.places.PlacesService(map);

  if(!navigator.geolocation){
    //情報ウィンドウの位置をマップの中心位置に指定
    infowindow.setPosition(map.getCenter());
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('Geolocation に対応していません。');
    //情報ウィンドウを表示
    infowindow.open(map);
  }

  //ブラウザが対応している場合、position にユーザーの位置情報が入る
  navigator.geolocation.getCurrentPosition(function(position) {
    //position から緯度経度（ユーザーの位置）のオブジェクトを作成し変数に代入
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //情報ウィンドウに現在位置を指定
    infowindow.setPosition(pos);
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('現在位置');
    //情報ウィンドウを表示
    infowindow.open(map);
    //マップの中心位置を指定
    map.setCenter(pos);
    //種類（タイプ）やキーワードをもとに施設を検索（プレイス検索）するメソッド nearbySearch()
    service.nearbySearch({
      location: pos,  //検索するロケーション
      radius: 1000,  //検索する半径（メートル）
      //type: ['store']  //タイプで検索。文字列またはその配列で指定
      name: [forresearch]

    }, callback);  //コールバック関数（callback）は別途定義
    var resultHTML = "1キロ圏内の店舗<ul>";
    //コールバック関数には results, status が渡されるので、status により条件分岐

    function callback(results, status) {
      // status は以下のような定数で判定（OK の場合は results が配列で返ってきます）
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //resultsの中身を高評価順に並べ替える
        results.sort(function(a, b) {
          if (a.rating < b.rating) {
            return 1;
          } else {
            return -1;
          }
        })
        //results の数だけ for 文で繰り返し処理
        for (var i = 0; i < results.length; i++) {
          //createMarker() はマーカーを生成する関数（別途定義）
          createMarker(results[i]);
          var rating = results[i].rating;
          if(rating == 0) rating = "評価無し";
          var content = "[" + rating + "] " + results[i].name;
          resultHTML += "<li>";
          resultHTML += content;
          resultHTML += "</li>";
        }
        var marker2 = new google.maps.Marker({
          map: map,
          position: pos
        });
        resultHTML += "</ul>";
        document.getElementById("results").innerHTML = resultHTML;
      }
    }
  }, function() {  //位置情報の取得をユーザーがブロックした場合のコールバック
    //情報ウィンドウの位置をマップの中心位置に指定
    infowindow.setPosition(map.getCenter());
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('Error: Geolocation が無効です。');
    //情報ウィンドウを表示
    infowindow.open(map);
  });

  //マーカーを生成する関数（引数には検索結果の配列 results[i] が入ってきます）
  function createMarker(place) {
    //var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location  //results[i].geometry.location
    });
    //マーカーにイベントリスナを設定
    marker.addListener('click', function() {
      infowindow.setContent(place.name);  //results[i].name
      infowindow.open(map, this);
    });
  }
}

$(".research").on("click", function(){
  initMap();
  $('.map').show();
  $('.para').show();
});
