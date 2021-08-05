function imageEnlarge() {
    var dt = document.getElementById('ruth1');
    dt.style.scale = '1.5';
}

function imageReset()   { 
    var dt = document.getElementById('ruth1');
    dt.style.scale = '1';
}

function onPage(pageId){
    var allpages = document.getElementById('page');
    for(onepage of allpages)
    {
        onepage.style.backgroundColor = "#F7E7BD";
    }
    document.getElementById(pageId).style.backgroundColor = "black";
}