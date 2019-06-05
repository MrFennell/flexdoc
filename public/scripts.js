function flex(){

    let ex = document.getElementById("ex-block-container-displayflex");
    let exButton = document.getElementById("buttonFlex");
    let code = document.getElementById("ex-block-container-displayflex-code");

    if (ex.style.display === ""){
        ex.style.display = "block";
        exButton.innerHTML = "Reflex";
        code.innerHTML="display: block;"
    }
    else if (ex.style.display === "flex"){
        ex.style.display = "block";
        exButton.innerHTML = "Reflex";
        code.innerHTML="display: block;"
    }
    else{
        ex.style.display = "flex";
        exButton.innerHTML = "Unflex";
        code.innerHTML="display: flex;"
    }

}