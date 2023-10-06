const desc = document.getElementById("api-acess");
let content;

async function setAdvice()
{
    await fetch('https://api.adviceslip.com/advice')
.then(response => {
    if(!response.ok){
        throw new Error("Erro na resposta da Api");
    }
    return response.json()
    })
    .then(data => {
        content = data.slip.advice;
        desc.textContent = content;
    })
    .catch(error => {

        console.log(error);
    })
}

setAdvice();

    