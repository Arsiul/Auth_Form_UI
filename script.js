    let box_left = document.getElementById("form_1")
    let box_right = document.getElementById("form_2")
    // let btn = document.getElementById("btn")
    let btn = document.querySelectorAll(".btn_change")
    let state = document.getElementById("state_2")
    let active_container = document.querySelectorAll(".form_1_container")
    let active_stake = document.querySelectorAll(".form_2_container")
    let container_style_1 = document.getElementById("container_style_1")
    let container_style_2 = document.getElementById("container_style_2")
    let form_text_1 = document.getElementById("form_text_1")
    let form_text_2 = document.getElementById("form_text_2")
    let input = document.querySelectorAll("input")
    let inputRadio = document.querySelectorAll("input[type='radio']")
    let eye_icon = document.getElementById("icon_password")

    

btn.forEach(btn =>{
btn.addEventListener("click", ()=>{
        if(box_left.classList.contains("box_left")){
            box_left.classList.remove("box_left")  
            box_right.classList.remove("box_right")
            state.classList.remove("state_change")
            form_text_1.classList.remove("movement_active_right")
            form_text_2.classList.add("movement_active_left")
            container_style_2.classList.add("movement_active_right")
            container_style_1.classList.remove("movement_active_left")
            
            
        }else{
            box_left.classList.remove("box_right")
            box_left.classList.add("box_left")
            box_right.classList.remove("box_left")
            box_right.classList.add("box_right")
            state.classList.add("state_change")
            form_text_1.classList.add("movement_active_right")
            form_text_2.classList.remove("movement_active_left")
            container_style_2.classList.remove("movement_active_right")
            container_style_1.classList.add("movement_active_left")

            // form_text_2.classList.add("movement_active_1")
        }
        active_container.forEach(element => {
            if(element.classList.contains("active")){
                element.classList.remove("active")
                element.classList.add("disable")
            }else{
                element.classList.remove("disable")
                element.classList.add("active")
            }
        });
        input.forEach(element =>{
            element.value=""
        })
        inputRadio.forEach(element =>{
            element.checked = false
        })


    })
})

icon_password.addEventListener("click", ()=>{
    let inputPassword = document.getElementById("input_password_login")
    if(inputPassword.type === "password"){
        inputPassword.type = "text"
    }else{
        inputPassword.type = "password"
    }
})
