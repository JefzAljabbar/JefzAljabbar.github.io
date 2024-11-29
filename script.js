
function createFallingLeaf() {
    for(let i=0; i<1; i++){
         const leaf = document.createElement('leaf');
         leaf.className = 'falling';
         leaf.innerText = '★'; // Simbol daun
         leaf.style.left = Math.random()* window.innerWidth + 'px';
         leaf.style.fontSize = Math.random() * 30 + 5 /2+ 'px';
         leaf.style.animationDuration = Math.random() * 5 + 15 + 's';
         document.body.appendChild(leaf);

         setTimeout(() => {
             leaf.remove();
         },8000);
         }
       }
   createFallingLeaf();
     setInterval(createFallingLeaf, 500);
   
         
         
 function WarnaRandom(){
 const letters= '0123456789ABCDEF';
 let color='#';
 for(let i=0; i<6; i++){
 color += letters[Math.floor(Math.random()*16)];}return color;
         }
 setInterval(()=>{ document.getElementById('randomText').style.color= WarnaRandom();},1000);
         
 var countDownDate = new Date("Mar 18, 2024");
 countDownDate.setFullYear(countDownDate.getFullYear() + 3);

 var x = setInterval(function() {
   var now = new Date().getTime();
   var distance = countDownDate - now;

   var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
   var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
   var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("countdown").innerHTML = years + " Tahun " + months + " Bulan " + days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik ";

   if (distance < 0) {
     clearInterval(x);
     document.getElementById("countdown").innerHTML = "Waktu countdown telah berakhir";
   }
 }, 1000);
    