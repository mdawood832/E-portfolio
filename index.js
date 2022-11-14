
let isModalOpen = false
let contrastToggle=false

function toggleContrast (){
    contrastToggle= !contrastToggle

    if(contrastToggle){
        document.body.classList += "dark-theme"
    }

    else{
        document.body.classList.remove("dark-theme")
    }
}

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    // console.log("toggleModal")
    isModalOpen = true
    document.body.classList += "modal--open"
}

