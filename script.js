
function createFallingLeaf() {
  for(let i=0; i<1; i++){
       const leaf = document.createElement('leaf');
       leaf.className = 'falling-spinning';
       leaf.innerText = '★'; // Simbol daun
       leaf.style.left = Math.random()* window.innerWidth + 'px';
       leaf.style.fontSize = Math.random() * 30 + 5 /2+ 'px';
       leaf.style.animationDuration = Math.random() * 5 + 15 + 's';
       document.body.appendChild(leaf);

       setTimeout(() => {
           leaf.remove();
       },11000);
       }
     }
 createFallingLeaf();
   setInterval(createFallingLeaf, 500);  
    //======================   
function WarnaRandom(){
const letters= '0123456789ABCDEF';
let color='#';
for(let i=0; i<6; i++){
color += letters[Math.floor(Math.random()*16)];}return color;
       }
setInterval(()=>{ document.getElementById('randomText').style.color= WarnaRandom();},1000);
  //=======================
var countDownDate = new Date("Mar 18, 2024");
countDownDate.setFullYear(countDownDate.getFullYear() + 3);

var x = setInterval(function() {
 var now = new Date().getTime();
 var distance = countDownDate - now;
 var distance1 = now- countDownDate;

 var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
 var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
 var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 var years1 = Math.floor(distance1 / (1000 * 60 * 60 * 24 * 365));
 var months1 = Math.floor((distance1 % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
 var days1 = Math.floor((distance1 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
 var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
 var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
 document.getElementById("countdown").innerHTML = years + " Tahun " + months + " Bulan " + days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik ";

 if (distance < 0) {
  document.getElementById("countdown").innerHTML = "-" + years1 + " Tahun " + "-" + months1 + " Bulan " + "-" + days1 + " Hari " + "-" + hours1 + " Jam " + "-" + minutes1 + " Menit " + "-" + seconds1 + " Detik ";
}
 }, 1000);
  //=======================
class PointerParticle {
constructor(spread, speed, component) {
  const { ctx, pointer, hue } = component;

  this.ctx = ctx;
  this.x = pointer.x;
  this.y = pointer.y;
  this.mx = pointer.mx * 0.1;
  this.my = pointer.my * 0.1;
  this.size = Math.random() + 1;
  this.decay = 0.01;
  this.speed = speed * 0.08;
  this.spread = spread * this.speed;
  this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
  this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
  this.color = `hsl(${hue}deg 90% 60%)`;
}

draw() {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  this.ctx.fill();
}

collapse() {
  this.size -= this.decay;
}

trail() {
  this.x += this.spreadX * this.size;
  this.y += this.spreadY * this.size;
}

update() {
  this.draw();
  this.trail();
  this.collapse();
}
}

class PointerParticles extends HTMLElement {
static register(tag = "pointer-particles") {
  if ("customElements" in window) {
    customElements.define(tag, this);
  }
}

static css = `
  :host {
    display: grid;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index:99999;
  }
`;

constructor() {
  super();

  this.canvas=0;
  this.ctx=0;
  this.fps = 60;
  this.msPerFrame = 1000 / this.fps;
  this.timePrevious=0;
  this.particles = [];
  this.pointer = {
    x: 0,
    y: 0,
    mx: 0,
    my: 0
  };
  this.hue = 0;
}

connectedCallback() {
  const canvas = document.createElement("canvas");
  const sheet = new CSSStyleSheet();

  this.shadowroot = this.attachShadow({ mode: "open" });

  sheet.replaceSync(PointerParticles.css);
  this.shadowroot.adoptedStyleSheets = [sheet];

  this.shadowroot.append(canvas);

  this.canvas = this.shadowroot.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.setCanvasDimensions();
  this.setupEvents();
  this.timePrevious = performance.now();
  this.animateParticles();
}

createParticles(event, { count, speed, spread }) {
  this.setPointerValues(event);

  for (let i = 0; i < count; i++) {
    this.particles.push(new PointerParticle(spread, speed, this));
  }
}

setPointerValues(event) {
  this.pointer.x = event.x - this.offsetLeft;
  this.pointer.y = event.y - this.offsetTop;
  this.pointer.mx = event.movementX;
  this.pointer.my = event.movementY;
}

setupEvents() {
  const parent = this.parentNode;

  parent.addEventListener("click", (event) => {
    this.createParticles(event, {
      count: 300,
      speed: Math.random() + 1,
      spread: Math.random() + 50
    });
  });

  parent.addEventListener("pointermove", (event) => {
    this.createParticles(event, {
      count: 20,
      speed: this.getPointerVelocity(event),
      spread: 1
    });
  });

  window.addEventListener("resize", () => this.setCanvasDimensions());
}

getPointerVelocity(event) {
  const a = event.movementX;
  const b = event.movementY;
  const c = Math.floor(Math.sqrt(a * a + b * b));

  return c;
}

handleParticles() {
  for (let i = 0; i < this.particles.length; i++) {
    this.particles[i].update();

    if (this.particles[i].size <= 0.1) {
      this.particles.splice(i, 1);
      i--;
    }
  }
}

setCanvasDimensions() {
  const rect = this.parentNode.getBoundingClientRect();

  this.canvas.width = rect.width;
  this.canvas.height = rect.height;
}

animateParticles() {
  requestAnimationFrame(() => this.animateParticles());

  const timeNow = performance.now();
  const timePassed = timeNow - this.timePrevious;

  if (timePassed < this.msPerFrame) return;

  const excessTime = timePassed % this.msPerFrame;

  this.timePrevious = timeNow - excessTime;

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.hue = this.hue > 360 ? 0 : (this.hue += 3);

  this.handleParticles();
}
}

PointerParticles.register();