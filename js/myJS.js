function copyText(){
    var url = "http://www.myurl.com/viewReport.php?id=";
    var text = document.getElementById("myText").innerHTML;
    var textCopy = document.getElementById("myText");
    textCopy.value = url + text;    
    document.execCommand("copy");
}
function opn(myImgId){
    var modal = document.getElementById("myModal");
    var img = document.getElementById(myImgId);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
