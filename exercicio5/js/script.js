
var banners = ["img/banner1.png", "img/banner2.png", "img/banner3.png"];
var bannerAtual = 0;
var intervalo;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % banners.length;
  document.getElementById('imgBanner').src = banners[bannerAtual];
}

function iniciarRotacao() {
  intervalo = setInterval(trocaBanner, 4000);
}

function pausarRotacao() {
  clearInterval(intervalo);
}
  
iniciarRotacao();
