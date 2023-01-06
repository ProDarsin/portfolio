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
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputAdd2.value )){
        document.querySelector(".required2").classList.remove("invalid")
        document.querySelector(".required3").classList.add("invalid")
        document.querySelector(".required3").innerHTML = "invalid email"
    }
    else{
    
        var values = {
            from_name: inputEmail.value,
            email_id: inputAdd2.value,
            subject: inputPass.value,
            message: inputAdd.value
        }
        

        emailjs.send("service_qj2ufwh","template_d61l555",values).then(function (res) {
            document.querySelector(".required").classList.remove("invalid")
            document.querySelector(".required1").classList.remove("invalid")
            document.querySelector(".required2").classList.remove("invalid")
            document.querySelector(".required3").classList.remove("invalid")
            document.querySelector(".required").classList.add("valid")
            document.querySelector(".required1").classList.add("valid")
            document.querySelector(".required2").classList.add("valid")
            document.querySelector(".required3").classList.add("valid")

            document.querySelector(".success").innerHTML="Message sent succesfully!!"


            document.getElementById("form").reset();

            setTimeout(function(){
                document.querySelector(".success").innerHTML = ""
            },5000)
        })
        
    }

}



//SEND EMAIL


