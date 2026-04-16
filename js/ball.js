const ball = document.getElementById("ball")

var pos = [(document.body.clientWidth/2) - 25, 300]
//var dPos = [0, 0]
const moveDist = 100

ball.style.left = pos[0] + "px"
ball.style.top = pos[1] + "px"

document.onmousemove = (e) => {

    const x = Number.parseFloat(ball.style.left.substring(0, ball.style.left.length - 2))
    const y = Number.parseFloat(ball.style.top.substring(0, ball.style.top.length - 2))
    //console.log(x + "  |  " + y)
    const mDist = Math.sqrt(Math.abs(x - e.clientX)^2 + Math.abs(y - e.clientY)^2)
    console.log(mDist)
    /*if (Math.abs(x + 50 - e.clientX) < moveDist) {
        var dist = e.clientX - (x + 50)
        dist = moveDist + dist
        if (dist > moveDist) {dist = dist - (moveDist*2)}
        //console.log(dist)
        //console.log(-dist + moveDist)
        ball.style.left = x + dist + "px"
        //console.log(ball.style.left)
    }*/
}