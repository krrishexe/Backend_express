const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

const wikiNs = new Namespace(0,'wiki','https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png','/wiki')

const mozNs = new Namespace(1,'mozilla','https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png','/mozilla')

const linuxNs = new Namespace(2,'linux','https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/linux')


wikiNs.addRoom(new Room(0,'Overlord',0))
wikiNs.addRoom(new Room(1,'SCSE LPU',0))
wikiNs.addRoom(new Room(2,'Kishan Seth',0))

mozNs.addRoom(new Room(0,'FireFox',1))
mozNs.addRoom(new Room(1,'SeaMonkey',1))
mozNs.addRoom(new Room(2,'SpiderMonkey',1))
mozNs.addRoom(new Room(3,'Rust',1))


linuxNs.addRoom(new Room(0,'Debian',2))
linuxNs.addRoom(new Room(1,'Red Hat',2))
linuxNs.addRoom(new Room(2,'Slackware',2))
linuxNs.addRoom(new Room(3,'Ubuntu',2))

const namespaces = [wikiNs,mozNs,linuxNs]

module.exports = namespaces