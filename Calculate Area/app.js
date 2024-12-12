

function calc(){
    event.preventDefault();
    let h = document.querySelector("#height").value
    let w = document.getElementById("width").value
    var a = h*w;
    // console.log(a);
    document.getElementById("area").value=a;
    // alert(a);
}
function clr(){
    event.preventDefault();
    document.getElementById("area").value=null;
    document.getElementById("width").value=null;
    document.getElementById("height").value=null;
}
