// signUpButtonBack = $('#signUpButtonBack');
let falseBox = [false, false, false, false, false, false]
let signUpFormStatus = $(".signUpFormStatus")

let imageValue = "";
$(document).on("click", '#signUpButton', function () {
    // console.log($(document.activeElement).attr('id'))
    let buttonRec = $(document.activeElement).attr('id')
    switch (buttonRec) {
        case "signUpButtonBack":
            
        //go to index


            break;
        case "signUpButtonClear":
            // console.log(buttonRec)
            clearInfobox()
            break;
        case "signUpButtonDone":
            checkingValueInfobox()
            checkingValueEmail()
            takeShot()
            //need to show complete
            break;
    }
})

//form check ☆☆☆☆☆☆☆☆☆☆☆☆//
function checkingValueInfobox(){
    $('.infovalue').each(function(index){
        if(!$(this).val()){
            $(this).addClass("infoError")
            $(this).removeClass("infoDone")
            
            
            falseBox[index]=true
            $(`.signUpFormStatus li:eq(${index})`).addClass("infoError")
            $(`.signUpFormStatus li:eq(${index})`).removeClass("infoDone")
        }
        else{
            $(this).removeClass("infoError")
            $(this).addClass("infoDone")
            console.log(index)
            
            falseBox[index]=false
            $(`.signUpFormStatus li:eq(${index})`).removeClass("infoError")
            $(`.signUpFormStatus li:eq(${index})`).addClass("infoDone")
        }


    })
    console.log(falseBox)
}
function checkingValueEmail(){
    if (!falseBox[2]){
        let tempBox = $('#signUpFormEmail').val()
        let tempSource = 0;
        
             tempSource += tempBox.indexOf('@')
            tempSource += tempBox.indexOf('.')
    if (tempSource < 0) {
        $(`.signUpFormStatus li:eq(2)`).addClass("infoError")
        $(`.signUpFormStatus li:eq(2)`).removeClass("infoDone")
        $('.emailcheck').addClass("infoError")
        $('.emailcheck').removeClass("infoDone")
        $('#signUpFormEmail').addClass("infoError")
        $('#signUpFormEmail').removeClass("infoDone")
        
    }else{
        $('.emailcheck').removeClass("infoError")
        $('.emailcheck').addClass("infoDone")
        $(`.signUpFormStatus li:eq(2)`).removeClass("infoError")
        $(`.signUpFormStatus li:eq(2)`).addClass("infoDone")
        $('#signUpFormEmail').removeClass("infoError")
        $('#signUpFormEmail').addClass("infoDone")
    }
    
    }
}
//★★★★★★★★★★★★ form check //

//clear ☆☆☆☆☆☆☆☆☆☆☆☆//
function clearInfobox() {
    $("td input").each(function () {
        $(this).val("")
    })
}
//★★★★★★★★★★★★ clear //

//go link ☆☆☆☆☆☆☆☆☆☆☆☆//
function makeInfoListonLocal() {
    let infoes = {
        id: $('#signUpFormName').val(),
        password: $('#signUpFormPassword').val(),
        email: $('#signUpFormEmail').val(),
        phone: $('#signUpFormPhone').val(),
        gender: $('#signUpFormGender').val(),
        picture: imageValue
    }
    console.log(infoes)
    let infoList = JSON.parse(localStorage.getItem("signupdata")) || [];
    infoList.push()
}
function takeShot() {
    var node = document.querySelector('#body');
    domtoimage.toPng(node).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;

        imageValue = img.src
        console.log(imageValue)
        let infoes = {
            id: $('#signUpFormName').val(),
            password: $('#signUpFormPassword').val(),
            email: $('#signUpFormEmail').val(),
            phone: $('#signUpFormPhone').val(),
            gender: $('#signUpFormGender').val(),
            picture: imageValue
        }
        console.log(infoes)
        let infoList = JSON.parse(localStorage.getItem("signupdata")) || [];
        infoList.push(infoes);
        localStorage.setItem("signupdata", JSON.stringify(infoList))
        // $('#yesss').prepend(img);
    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}


//★★★★★★★★★★★★ go link //



//input modify ☆☆☆☆☆☆☆☆☆☆☆☆//
function isNumber(evt) { //<input type="text" onkeypress="return isNumber(event)>
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
$('#signUpFormName').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});
$('input[type="password"]').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});
$('#signUpFormGender').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z]/g, ''))
});
$('#signUpFormPhone').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''))
});
$('#signUpFormEmail').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9^@^.]/g, ''))
});


//★★★★★★★★★★★★ input modify//