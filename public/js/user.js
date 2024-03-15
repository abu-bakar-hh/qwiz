const userForm = document.querySelector("#reg")
if (userForm) {
    userForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const {login,email, password} = e.target
       
        try {
            const res = await fetch(`/reg`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({login: login.value, password: password.value, email : email.value})
            })
            const data = await res.json()
            if (data.message == "успешно") {
              window.location.assign('/');
            } else{
                alert(data.message)
            }
        } catch (error) {
            alert(error.message)
        }


    })
}