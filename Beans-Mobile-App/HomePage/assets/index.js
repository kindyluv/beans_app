// console.log(document.getElementsByTagName("Body")[0].innerHTML);

document.addEventListener("DOMContentLoaded", () => {

    let registerObject = {}
    let loginObject = {}

    // ButtonElement
    function confirmRegisteration(){
        if(Object.keys(registerObject).length === 4){
            try {
                let userRepository = localStorage.getItem("userNames")
                if(userRepository === null){
                    let repository = [registerObject]
                    localStorage.setItem("userNames", JSON.stringify(repository))
                    location.href = "../RegistrationPage/login.html"
                }else{
                    let previousRepository = JSON.parse(userRepository)
                    let updatedRepository = [...previousRepository, registerObject]
                    localStorage.setItem("userNames", JSON.stringify(updatedRepository))
                    location.href = "../RegistrationPage/login.html"
                }
            }catch (error){
                console.log(error)
            }
    
           
    }else{
        alert("Incomplete User Info")
    }
}

    if(document.getElementsByClassName('register_btn').length > 0){
        let button = document.getElementsByClassName("register_btn")[0]
        // button.addEventListener("click", () => console.log(registerObject));
        button.addEventListener("click", () => confirmRegisteration())
    }
  

    // InputFields
    function handleInputChange(e) {
        // console.log(e.target.name, e.target.value)
        //
        registerObject = {...registerObject, [e.target.name]: e.target.value}
    }

    function handleLoginChange(e) {
        // console.log(e.target.name, e.target.value)
        //
        loginObject = {...loginObject, [e.target.name]: e.target.value}
    }

    if(document.getElementsByClassName('register_btn').length >0){
        let registerInputFields = document.getElementsByClassName("register_input")
        // for (let i = 0; i < inputFields.length; i++) {
        //     inputFields[i].addEventListener("input", (e) => handleInputChange(e))
        // }
        Array.from(registerInputFields).forEach((inputField) => 
            inputField.addEventListener('input', (e) => handleInputChange(e)))
    }
   

    if(document.getElementsByClassName('login_input').length >0){
        let loginInputFields = document.getElementsByClassName('login_input')
        Array.from(loginInputFields).forEach((inputField) => 
            inputField.addEventListener('input', (e) => handleLoginChange(e)))
    }


function confirmLogin(){
    let userRepository = JSON.parse(localStorage.getItem("userNames"))
    let {email, password} = loginObject
    let userObject = userRepository.find(user => user.email === email)
    if(userRepository.findIndex(user => user.email === email) !== -1){
        if (userObject.password === password){
            localStorage.setItem("userName", JSON.stringify(userObject))
            location.href = "../HomePage/home.html"
        }else{
            alert("Please enter a correct password")
        }
    }else{
        alert("User Does Not Exist")
    }
}

if(document.getElementsByClassName('login_input').length >0){
   let loginButton = document.getElementsByClassName("login_btn")[0]
    // button.addEventListener("click", () => console.log(registerObject));
   loginButton.addEventListener("click", () => confirmLogin())
}

})

function myFunction(){
    let userDetail = JSON.parse(localStorage.getItem("username"))
    document.getElementById("user_name_popUp").innerHTML = "Hey " + userDetail.last_name
}

myFunction()

