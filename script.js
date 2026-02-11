setTimeout(() => {
  document.getElementById("mensaje").innerHTML +=
    "<br><br>ℐ𝓁ℴ𝓋ℯ 𝓎ℴ𝓊 ฅᨐฅ";
}, 3000);
function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.innerText = "🌸"; // puedes cambiar por 🌹 🍂 💖 ⭐
  petalo.style.position = "fixed";
  petalo.style.top = "-20px";
  petalo.style.left = Math.random() * window.innerWidth + "px";
  petalo.style.fontSize = Math.random() * 20 + 15 + "px";
  petalo.style.opacity = Math.random();
  petalo.style.animation = "caer 6s linear";

  document.body.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 6000);
}

setInterval(crearPetalo, 400);
