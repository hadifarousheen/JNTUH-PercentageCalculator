

document.querySelector(".btn").addEventListener("click",handleclick);
function handleclick(){
    var cgpa=document.getElementById("te").value;
    document.getElementById("te2").value= ((cgpa-0.5)*10.0).toFixed(1);
}