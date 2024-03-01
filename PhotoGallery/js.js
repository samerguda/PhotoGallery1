
function upDate(previewPic){
 
    
    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";

    imageDiv.innerHTML = previewPic.alt;
  
	}
