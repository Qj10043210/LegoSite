let logs = JSON.parse(localStorage.getItem("log"))||0;

if(logs==0){
logs=11
localStorage.setItem("log", JSON.stringify(logs))
console.log("new")}
else{
    console.log("old")
}

