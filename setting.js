var fileArea = document.getElementById("dragDropArea");
var fileInput = document.getElementById("fileInput");
var containerArea = document.getElementById("container");
fileArea.addEventListener("dragover", function(evt){
  evt.preventDefault();
  fileArea.classList.add("dragover");
  fileArea.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});
fileArea.addEventListener("dragleave", function(evt){
    evt.preventDefault();
    fileArea.classList.remove("dragover");
    fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
});
fileArea.addEventListener("drop", function(evt){
    evt.preventDefault();
    fileArea.classList.remove("dragenter");
    fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    var files = evt.dataTransfer.files;
    console.log("DRAG & DROP");
    console.table(files);
    fileInput.files = files;
    photoPreview("onChenge",files[0]);
});
function photoPreview(event, f = null) {
  var file = f;
  if(file === null){
      file = event.target.files[0];
  }
  var reader = new FileReader();
  var preview = document.getElementById("previewArea");
  var previewImage = document.getElementById("previewImage");

  if(previewImage != null) {
    preview.removeChild(previewImage);
  }
  reader.onload = function(event) {
    var img = document.createElement("img");
    img.setAttribute("src", reader.result);
    img.setAttribute("id", "previewImage");
    preview.appendChild(img);
    document.getElementById("previewImage").style.width = "80%";
    document.getElementById("previewImage").style.border = "#ddd 5px solid";
    document.getElementById("previewImage").draggable = false;
    img.onload = function() {
      // ここに読み込みが完了したら実行したい処理を記述する
      document.getElementById("area").style.height = document.getElementById("container").offsetHeight + document.getElementById("container").offsetTop +"px";
    }
  };
  reader.readAsDataURL(file);
}

console.log(containerArea);
document.getElementById("area").style.height = document.getElementById("container").offsetHeight + document.getElementById("container").offsetTop + 10 + "px";

function resizeWindow(){
  document.getElementById("area").style.height = document.getElementById("container").offsetHeight + document.getElementById("container").offsetTop + 10 + "px";
}

// アニメーションに付属させたい関数
const circleList = document.querySelectorAll(".circle");
var fontNameList = ["nicoca", "karakaze", "Corporate-Mincho-ver2", "GenEiLateGoN_v2",
 "gomarice_mukasi_mukasi", "Kaisotai", "DotGothic16", "Hina Mincho",
  "Kaisei Opti", "Mochiy Pop P One", "New Tegomin", "Noto Serif JP", 
  "Otomanopee One", "Palette Mosaic", "Potta One", "Reggae One",
   "Sawarabi Mincho", "Stick", "Train One", "Yomogi", "Yuji Mai",
    "Zen Maru Gothic", "GenEiLateGoN_v2", "gomarice_mukasi_mukasi" ];
for (i=0; i<circleList.length; i++){
  var randomSize      = Math.floor( Math.random() * 150 ) + 10;
  var randomPosition  = Math.floor( Math.random() * 100);
  var randomDelay     = Math.random() * 20 + 3;
  var randomDuration  = Math.random() * 20 + 20;
  var randomFontName  = Math.floor(Math.random() * fontNameList.length);
  circleList[i].style.width             = randomSize + "px";
  circleList[i].style.height            = randomSize + "px";
  circleList[i].style.display           = "block";
  circleList[i].style.fontSize          = randomSize + "px";
  circleList[i].style.fontFamily        = fontNameList[randomFontName];
  circleList[i].style.left              = randomPosition + "%";
  circleList[i].style.animationDelay    = randomDelay + "s";
  circleList[i].style.animationDuration = randomDuration + "s";
}
// リサイズ時にレスポンシブに対応できるようにする
window.onresize = resizeWindow; 