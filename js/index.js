let logs = JSON.parse(sessionStorage.getItem("log")) || 0;

if (logs == 0) {
    logs = 11
    sessionStorage.setItem("log", JSON.stringify(logs))
    console.log("new")
    let infoes = {
        id: "no one can't know this id ",
        password: "becuase there is blank lol",
        email: "",
        phone: "",
        picture: ""
    }
    console.log(infoes)
    let infoList = JSON.parse(localStorage.getItem("signupdata")) || [];
    if(infoList.length==0){
    infoList.push(infoes);
    localStorage.setItem("signupdata", JSON.stringify(infoList))
    console.log("sdfas")}
}
else {
    console.log("old")
}

