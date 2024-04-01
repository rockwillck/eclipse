const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 1024

var frame = 0;
var offsets = new Array(100).fill(0)
var targetOffsets = new Array(100).fill(0)
console.log(offsets)
function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath()
  xFactor = ((frame / 5000 - 0.5) ** 3 * 8)
  for (i = 0; i < offsets.length; i++) {
    theta = 2 * Math.PI / offsets.length * i
    offsets[i] += (targetOffsets[i] - offsets[i]) * 0.2
    targetOffsets[i] = (Math.random()) ** 1000 * (1-Math.abs(xFactor)*0.5)**100*1000
    ctx.lineTo(canvas.width / 2 + Math.cos(theta) * (200 + offsets[i]), canvas.height / 2 + Math.sin(theta) * (200 + offsets[i]))
  }
  // ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fillStyle = "rgb(255, 150, 100)"
  ctx.fill()

  ctx.beginPath()
  ctx.arc(-xFactor * canvas.width * 0.4 + canvas.width * 0.5, canvas.height / 2, 195, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fillStyle = "black"
  ctx.fill()

  frame = (frame + 1) % 5000

  fullTime = (new Date("April 8, 2024, 18:17:21").getTime() - Date.now())
  days = (Math.floor(fullTime / 86400000))
  hours = (Math.floor((fullTime % 86400000) / 3600000))
  minutes = (Math.floor(((fullTime % 86400000) % 3600000) / 60000))
  seconds = (Math.floor((((fullTime % 86400000) % 3600000) % 60000) / 1000))
  document.getElementById("timer").innerText = (`${days}-${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)
}
animate()
