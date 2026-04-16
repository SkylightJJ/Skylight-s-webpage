const srcollTxt = document.getElementsByClassName("scroll")

for (const txt of srcollTxt) {

    var fontSize = 12
    txt.style.fontSize = fontSize

    var trueMsg = txt.textContent
    txt.textContent = txt.textContent + "    "
    var trueLength = txt.clientWidth
    var t = (Math.ceil(screen.width / txt.clientWidth) * 2) + 1 //the multiplication of either an even or odd value by 2 will always result in an even number, so we must add 1 to account for the bit of text already present
    for (let i = 0; i < t; i++) {
        txt.textContent = txt.textContent + trueMsg + "    "
    }

    const speed = txt.getAttribute("data-speed")

    var frames
    if (speed < 0) {
        frames = [
            { transform: "translateX(0px)" },
            { transform: `translateX(-50%)` },
        ]
    } else {
        frames = [
            { transform: `translateX(-50%)` },
            { transform: "translateX(0px)" },
        ]
    }

    txt.animate(frames,
        {
            duration: Math.abs(Number.parseFloat(speed)) * txt.clientWidth / 5,
            iterations: Infinity,
        },
    )
}

const tipTxt = document.getElementById("tip")
if (tipTxt != null) {
    const tips = [
        "Stick around. You won't wanna miss a thing.",
        "Let the epsom salt baths wash your abberations away.",
        "Steel blue. Forever true.",
        "The weather is cloudy today.",
        "The weather is sunny today.",
        
    ]

    const tipNum = Math.floor(Math.random() * (tips.length))
    if (tipNum == tips.length) tipNum = 0
    tipTxt.textContent = tips.at(tipNum)
}