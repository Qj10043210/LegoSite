let logs = JSON.parse(localStorage.getItem("log"))||"";

if(logs==""){
logs="11"
localStorage.setItem("log", JSON.stringify(logs))
console.log("new")}
else{
    console.log("old")
}