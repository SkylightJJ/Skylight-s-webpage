const iframe = document.getElementById("frame")

function switchFrame(filePath, title) {
    iframe.src = filePath
    document.title = title
}

function getCurFrameDoc() {
    const frame = document.getElementById("frame")
    console.log(frame.contentWindow.document)
}

function dispatchClick() {
    iframe.contentWindow.origin
}




/////////////
/// CODES ///
/////////////

//AYE YOU. YES, YOU. YOU'RE A FILTHY CHEATER!
//STOP LOOKING AT THESE! FIND THEM AROUND THE SITE LIKE THE REST OF US!
//i mean feel free to look at the rest of my code, maybe you'll learn some neat stuff!
//BUT THESE CODES ARE NOT TO SEE!!!
const codes = [
    {code: "cooltest", action: () => {unlockSong(3)}, unlockable: true},
    {code: "e", action: () => {boomUnlocked = true}, unlockable: true},
    {code: "uuddlrlrbas", action: () => {console.log("THIS CODE IS GONNA BE A JOKE")}, unlockable: false},
    {code: "imtiredofallthistyping", action: () => {
        for (let i = 0; i < codes.length; i++) {
            if (codes[i].unlockable == true) {
                codes[i].action()
            }
        }
    }, unlockable: false},
]



var progs = []
for (let i = 0; i < codes.length; i++) {progs[i] = -1}

addEventListener("keydown", function(e){
    for (let i = 0; i < codes.length; i++) {

        // do two seperate checks so that if the key pressed was not the next key, it resets, but if it was the first key, you go right back to the first letter
        if (codes.at(i).code.at(progs[i] + 1) != e.key) {
            progs[i] = -1
        }

        if (codes.at(i).code.at(progs[i] + 1) == e.key) {
            progs[i] = progs[i] + 1
        }

        if (progs[i] == codes.at(i).code.length - 1) {
            console.log("SECRET CODE SUCCESSFULLY ENTERED: " + codes.at(i).code)
            codes.at(i).action()
        }
    }
});









/////////////
/// MUSIC ///
/////////////

const songs = [
    {name: "Epsom Bathhouse", artist: "Skylight JJ", bpm: 80, locked: false, file: "epsom"},
    {name: "Pause Screen", artist: "Skylight JJ", bpm: 100, locked: false, file: "pause"},
    {name: "POWER PLANT (Cover)", artist: "2 (Cover by Skylight JJ)", bpm: 150, locked: false, file: "power"},
    {name: "Cool Test", artist: "Skylight JJ", bpm: 60, locked: true, file: "test"},
]

var beatTimeout
var loopTimeout

var curSong = -1
var curSel = -1

var audio = new Audio();
audio.loop = true


const radioText = document.getElementById("radioname")

function togglePlay() {
    if (curSong != curSel) {
        audio.pause()
        audio.currentTime = 0
        curSong = curSel
        audio.src = 'https://github.com/SkylightJJ/Skylight-s-webpage/raw/refs/heads/main/music/' + songs.at(curSong).file + '.mp3'
    }

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}

function rewind() {
    audio.pause()
    audio.currentTime = 0
    audio.play()
}

function changeSel(change) {
    curSel += change
    if (curSel > songs.length - 1) {
        curSel = 0
    }
    if (curSel < 0) {
        curSel = songs.length - 1
    }
    if (songs.at(curSel).locked == true){
        changeSel(change)
    } else {
        fixText()
    }
}

function fixText() {
    radioText.textContent = songs.at(curSel).name + "  |  " + songs.at(curSel).artist + "      "

    frames = [
        { transform: "translateX(0px)" },
        { transform: 'translateX(-' + radioText.scrollWidth +'px)' },
    ]

    radioText.textContent = radioText.textContent + radioText.textContent

    radioText.animate(frames,
        {
            duration: radioText.scrollWidth * 20,
            iterations: Infinity,
        },
    )
}

function unlockSong(pos) {
    console.log("UNLOCKING SONG: " + songs.at(pos).name)
    if (songs.at(pos).locked == true) {
        songs.at(pos).locked = false
        new Audio('sound/newtrack.mp3').play()
    }
}










///////////////////
/// EXPLOSIONS! ///
///////////////////

var boomUnlocked = false
var boomenabled = false

/*addEventListener("click", function(e) {
    if (boomenabled && boomUnlocked) {
        makeBoom(e.clientX, e.clientY)
    }
})*/

document.onclick = function(ev) {
    console.log(ev)
}

function makeBoom(x, y) {
    var boom = new Image()
    boom.src = "images/boom/1.png"
    boom.style.position = "absolute"
    boom.style.scale = (Math.random() * 2) + 3
    boom.style.left = (x - (71 / 2)) + "px"
    boom.style.top = (y - (100 / 2)) + "px"
    boom.setAttribute("f", 1)
    document.getElementById("boomcontainer").appendChild(boom)

    var audio = new Audio("sound/boom.mp3")
    audio.play()

    setTimeout(function() {updateBoom(boom, audio)}, "80")
}

function toggleBoom() {
    boomenabled = !boomenabled
}

function updateBoom(boom, audio) {
    var frame = Number.parseInt(boom.getAttribute("f"))
    frame += 1
    if (frame == 18) {
        audio.remove()
        boom.remove()
    } else {
        boom.src = "images/boom/" + frame + ".png"
        boom.setAttribute("f", frame)
        setTimeout(function() {updateBoom(boom, audio)}, "80")
    }
}






addEventListener("frame-test", function(e){
    console.log("YAY!")
})
