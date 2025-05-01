const sitemap = {
  "Home": "/",
  "About": "/about",
  "Speakers": "/speakers",
  "Funding": "/funding"
}
document.getElementsByClassName("content")[0].innerHTML = `<div class="section">
      <div class="text">
      ${Object.keys(sitemap).map(key => `<a href="${sitemap[key]}">${key}</a>`).join(" :: ")}
      </div>
    </div>` + document.getElementsByClassName("content")[0].innerHTML + `
    <br>
    <h2>Directory</h2>
    <div class="manifest">
      ${Object.keys(sitemap).map(key => `<a href="${sitemap[key]}">${key}</a>`).join("")}
    </div>
    <br>
    <footer>

      <small>© <script>document.write(new Date().getFullYear())</script> TEDxCypress Youth. All Rights Reserved. This independent TEDx event is operated under license from TED.</small>
  
    </footer>`

document.body.innerHTML += `<div class="banner"><p>Speaker applications are now open until April 27, 2025! <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkpA6MsC7nX0aL6OKK_zbeqqS5j3c-JwLYzb_To-AwTYEMUA/viewform">Apply Here</a></p></div>`

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