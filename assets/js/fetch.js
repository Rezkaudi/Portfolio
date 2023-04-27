const api = "https://rezk-portfolio.glitch.me/"
let views = document.getElementById('views')

const handlesubmit = (e) => {
    e.preventDefault();
    var message = document.querySelectorAll('.form-input')
    var data = { "name": message[0].value, "email": message[1].value, "message": message[2].value }
    fetch(`${api}/req`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => console.log(data))

    message.forEach((i) => {
        i.value = ''
    })
}

window.onload = () => {
    (async () => {
        const res1 = await fetch(`${api}/views`)
        const data = await res1.json()
        var num = data.counter
        console.log(num)

        await fetch(`${api}/views`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ counter: num + 1 })
        })

        views.innerHTML = num + 1
    })()
}

