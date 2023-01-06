const handle=(e)=>{
    e.preventDefault()

    const inputEmail=document.querySelector("#inputEmail4")
    const inputPass=document.querySelector("#inputPassword4")
    const inputAdd=document.querySelector("#inputAddress")
    const inputAdd2=document.querySelector("#inputAddress2")

    if(inputEmail.value === ""){
        document.querySelector(".required").classList.remove("valid")
        document.querySelector(".required").classList.add("invalid")
    }
    else if(inputPass.value === ""){
        document.querySelector(".required").classList.remove("invalid")
        document.querySelector(".required1").classList.remove("valid")
        document.querySelector(".required1").classList.add("invalid")
    }
    else if(inputAdd.value === ""){
        document.querySelector(".required").classList.remove("invalid")
        document.querySelector(".required1").classList.remove("invalid")
        document.querySelector(".required2").classList.remove("valid")
        document.querySelector(".required2").classList.add("invalid")
    }
    else if(inputAdd2.value === ""){
        document.querySelector(".required").classList.remove("invalid")
        document.querySelector(".required1").classList.remove("invalid")
        document.querySelector(".required2").classList.remove("invalid")
        document.querySelector(".required3").classList.remove("valid")
        document.querySelector(".required3").classList.add("invalid")
    }
    else{
        document.querySelector(".required").classList.remove("invalid")
        document.querySelector(".required1").classList.remove("invalid")
        document.querySelector(".required2").classList.remove("invalid")
        document.querySelector(".required3").classList.remove("invalid")
        document.querySelector(".required").classList.add("valid")
        document.querySelector(".required1").classList.add("valid")
        document.querySelector(".required2").classList.add("valid")
        document.querySelector(".required3").classList.add("valid")
        
    }

}