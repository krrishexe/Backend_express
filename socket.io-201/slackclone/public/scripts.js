
// const username = prompt("Enter your username")
// const password = prompt("Enter your password")


const socket = io('http://localhost:5000');

socket.on('connect', () => {
    console.log("Connected to the server")
    socket.on('message', (data) => {
        console.log(data.data)
    })
})

socket.on('namespaces', (nsData) => {
    const namespaces = document.querySelector('.namespaces')
    namespaces.innerHTML = ''

    nsData.map((ns) => {
        namespaces.innerHTML += `<div class="namespace" ns=${ns.endpoint}><img src=${ns.image}></div>`
    })
    const namespaceDivs = Array.from(document.querySelectorAll('.namespace'))
    namespaceDivs.map((elem) => {
        console.log(elem)

        elem.addEventListener('click', (e) => {
            joinNs(elem, nsData)
        })
        joinNs(namespaceDivs[0], nsData)
    })
})

socket.emit('messageFromClient', { data: "hello from client" })