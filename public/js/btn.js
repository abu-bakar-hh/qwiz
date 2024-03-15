const form = document.querySelector(".form")
if(form) {
    form.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const {answer} = e.target
        const {questid} = e.target.dataset
        // const data = {answer:answer.value, questid:id}

        try {

            const res = await fetch(`/category/${questid}`, {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({answer:answer.value, questid:questid})
            })
            const data = await res.json()
            if (data.message == "success") {
                alert('Ответ верный')
            } else {
                alert('Ответ неверный')
            }
        } catch (error) {
            alert(error.message)
        }
    })
}
const content = document.querySelector('.container')
const btnNext = document.querySelector('.nextQuest')

btnNext.addEventListener('click', async(e) => {
    const {questid} = e.target.dataset
        window.location.assign(`${+questid +1}`)
        if(questid>1){
            window.location.assign(`/`)
        }

})