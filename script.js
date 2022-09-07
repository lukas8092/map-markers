$(document).ready(function(){
  console.log(array);
  var m = new SMap(JAK.gel("m"));
  m.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na změnu velikosti průhledu */
  m.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */
  var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
  m.addControl(mouse);

  var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";

    var znacky = [];
var souradnice = [];

for (var i = 0;i < array.length;i++) { /* Vyrobit značky */
    var c = SMap.Coords.fromWGS84(array[i][0]); /* Souřadnice značky, z textového formátu souřadnic */
    
    var options = {
        url:obrazek,
        title:"Test",
        anchor: {left:10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
    }
    
    var znacka = new SMap.Marker(c, null, options);
    souradnice.push(c);
    znacky.push(znacka);
}


/* Křivoklát ukotvíme za střed značky, přestože neznáme její velikost */
var options = {
    anchor: {left:0.5, top:0.5}
}
if(znacky.length > 0){
    znacky[0].decorate(SMap.Marker.Feature.RelativeAnchor, options);
}


var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
m.addLayer(vrstva);                          /* Přidat ji do mapy */
vrstva.enable();                         /* A povolit */
for (var i=0;i<znacky.length;i++) {
    vrstva.addMarker(znacky[i]);
}

var cordText = $("#cord");
function click(e, elm) { /* Došlo ke kliknutí, spočítáme kde */
    var coords = SMap.Coords.fromEvent(e.data.event, m);
    cordText.text(coords.toWGS84(2).reverse().join(""));
}
m.getSignals().addListener(window, "map-click", click); /* Při signálu kliknutí volat tuto funkci */ 


$("#btn").click(function(){
    var postData = cordText.text();
    $.ajax({
        url:"addMarker.php",
        method:"POST",

        data:{
          cord: postData,
        },
        success:function(response) {
            var c = SMap.Coords.fromWGS84(postData); /* Souřadnice značky, z textového formátu souřadnic */
            var options = {
                url:obrazek,
                title:"Test2",
                anchor: {left:10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
            }
    
            var znacka = new SMap.Marker(c, null, options);
            souradnice.push(c);
            vrstva.addMarker(znacka);

        // alert("Ulozeno"+ response);
       },
       error:function(){
        alert("error");
       }

      });
})


});