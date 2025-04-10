const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 1024

var frame = 0;
var offsets = new Array(100).fill(0)
var targetOffsets = new Array(100).fill(0)
function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = "#EB0028"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath()
  for (i = 0; i < offsets.length; i++) {
    theta = 2 * Math.PI / offsets.length * i
    offsets[i] += (targetOffsets[i] - offsets[i]) * 0.2
    targetOffsets[i] = (Math.random()) ** 1000 * (1 - frame/2000)**3*1000
    ctx.lineTo(canvas.width / 2 + Math.cos(theta) * (400 + offsets[i]), canvas.height / 2 + Math.sin(theta) * (400 + offsets[i]))
  }
  ctx.closePath()
  ctx.fillStyle = "white"
  ctx.fill()

  ctx.beginPath()
  ctx.arc(canvas.width * 0.5 - Math.sin(frame/2000*2*Math.PI)*canvas.width*0.05, canvas.height / 2 - - Math.sin(frame/2000*2*Math.PI)*canvas.width*0.05, 390, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fillStyle = "#EB0028"
  ctx.fill()

  frame = (frame + 1) % 5000
}
animate()
