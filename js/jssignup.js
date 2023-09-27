// signUpButtonBack = $('#signUpButtonBack');
let falseBox = [false, false, false, false, false, false]
let signUpFormStatus = $(".signUpFormStatus")
let tempBox = [];
$(document).on("click", '#signUpButton', function () {
    // console.log($(document.activeElement).attr('id'))
    let buttonRec = $(document.activeElement).attr('id')
    switch (buttonRec) {
        case "signUpButtonBack":
            var node = document.querySelector('#body');
            
            
            domtoimage.toPng(node).then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                console.log(dataUrl)
                $('#yesss').prepend(img);
            }).catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
            
            break;
        case "signUpButtonClear":
            // console.log(buttonRec)
            clearInfobox()
            break;
        case "signUpButtonDone":
            signUpFormStatus.text("")
            $(".signUpFormStatus *").remove()
            checkingInfobox();
            checkingError();
            showingError(); //form check
            if ($(".signUpFormStatus").is(':empty')) {

            }
            break;
    }
})

//form check ☆☆☆☆☆☆☆☆☆☆☆☆//
function checkingInfobox() { //put class infoError on input
    $("td input").each(function () {
        if (!$(this).val()) {
            $(this).addClass("infoError")
            console.log("err")
        }
        else {
            $(this).removeClass("infoError")
            console.log("err")
        }
    })
}

function checkingError() {// make list which one has infoError
    $("td input").each(function () {
        if ($(this).hasClass("infoError")) {

            tempBox.push($(this).parent().prev().text())
        }
    })
}
function showingError() { //make span for alret error
    let tempSource = ``
    tempBox.forEach((value, index) => {

        tempSource += `<span>${value}</span>`

    })
    signUpFormStatus.append(tempSource)
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



//★★★★★★★★★★★★ go link //