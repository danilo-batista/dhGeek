const gallery = ["banner1.webp", "banner2.webp", "banner3.webp"];

document.getElementById("mainBanner").style.backgroundPosition = "center";
document.getElementById("mainBanner").style.backgroundRepeat = "no-repeat";
document.getElementById("mainBanner").style.backgroundSize = "cover";

document.getElementById("mainBanner").style.background = "url(/public/images/banners-ads/" + gallery[0];

function Carrousel(picture) {
  document.getElementById("mainBanner").style.background = "url('/public/images/banners-ads/" + gallery[picture];
}

let showingPicture = 0;
Carrousel(showingPicture);

setInterval(function() {
  showingPicture++;
  if (showingPicture > 2) {
    showingPicture = 0;
  }

  Carrousel(showingPicture);
}, 5000);

