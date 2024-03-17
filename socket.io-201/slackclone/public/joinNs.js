
const joinNs = (elem,nsData) => {
    const nsEndpoint = elem.getAttribute('ns')
        const clickedNs = nsData.find((ns) => { return ns.endpoint === nsEndpoint })
        const rooms = clickedNs.rooms;

    const roomList = document.querySelector('.room-list')
        roomList.innerHTML = ''
        rooms.map((room) => {
        roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>`

    })
}