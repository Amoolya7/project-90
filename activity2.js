function back(){
    window.location="activity1_html";
}
function getScore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>Score: " + score +"</h1>";
}