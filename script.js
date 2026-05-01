function start() {

  // screen change
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");

  document.getElementById("music").play();
  function start() {
  let music = document.getElementById("music");
  music.play();
}
music.muted = false;
music.play().catch(() => {
  console.log("Autoplay blocked");
});

  // cake show
  setTimeout(() => {
    document.getElementById("cake").classList.add("showCake");
  }, 500);

  // typing text
  typeText("🎉 Happy Birthday Ayushi 🎉", "text", 80, () => {

    // ✅ typing complete hone ke baad hi shayari show hogi
    document.getElementById("shayari").classList.add("show2");

  });

  // confetti
  confetti();
}

/* typing effect WITH CALLBACK */
function typeText(text, id, speed, callback) {
  let i = 0;
  let el = document.getElementById(id);
  el.innerHTML = "";

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      if (callback) callback(); // 👈 yahi main fix hai
    }
  }
  typing();
}

/* confetti */
function confetti() {
  for (let i = 0; i < 80; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = ["red","yellow","blue","green"][Math.floor(Math.random()*4)];
    c.style.animationDuration = (Math.random()*3+2)+"s";
    document.body.appendChild(c);
  }
}
// random floating movement
function floatImages() {
  const imgs = document.querySelectorAll(".floating");

  imgs.forEach(img => {
    setInterval(() => {
      let x = (Math.random() - 0.5) * 100;
      let y = (Math.random() - 0.5) * 100;
      img.style.transform = `translate(${x}px, ${y}px)`;
    }, 3000);
  });
}