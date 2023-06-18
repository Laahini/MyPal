function clickToClose(e) {
    const element =  document.getElementById("navbar-right-mobile");
    if (element.display !== 'none') {
      NavClose();
    }
  }
function NavOpen(e) {
    document.getElementById("navbar-right-mobile").style.width = "300px";
    document.getElementById("navbar-right-mobile").style.visibility = "visible";
    document.body.addEventListener("click", clickToClose);
    e.stopPropagation();
}
function NavClose() {
    document.getElementById("navbar-right-mobile").style.width = "0";
    document.getElementById("navbar-right-mobile").style.visibility = "hidden";
    document.body.removeEventListener("click", clickToClose);
}
window.addEventListener('resize', clickToClose);

function openShop() {
  location.href= "shop.html";
}
function openMotivation(){
  location.href= "motivation.html";
}
function openJournal(){
  location.href = "journely.html";
}
function openUpcoming(){
  location.href = "upcoming.html";
}
function openYoga(){
  location.href = "https://www.youtube.com/watch?v=_8kV4FHSdNA"
}
