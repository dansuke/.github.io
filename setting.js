var fileArea = document.getElementById('dragDropArea');
var fileInput = document.getElementById('fileInput');
var containerArea = document.getElementById('container');
fileArea.addEventListener('dragover', function(evt){
  evt.preventDefault();
  fileArea.classList.add('dragover');
  fileArea.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
});
fileArea.addEventListener('dragleave', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragover');
    fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
});
fileArea.addEventListener('drop', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragenter');
    fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    var files = evt.dataTransfer.files;
    console.log("DRAG & DROP");
    console.table(files);
    fileInput.files = files;
    photoPreview('onChenge',files[0]);
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
    document.getElementById('previewImage').style.width = '80%';
    document.getElementById('previewImage').style.border = '#ddd 5px solid';
    document.getElementById('previewImage').draggable = false;
    img.onload = function() {
      // ここに読み込みが完了したら実行したい処理を記述する
      document.getElementById('area').style.height = document.getElementById('container').offsetHeight + document.getElementById('container').offsetTop +'px';
    }
  };
  reader.readAsDataURL(file);
}

console.log(containerArea);
document.getElementById('area').style.height = document.getElementById('container').offsetHeight + document.getElementById('container').offsetTop + 10 + "px";