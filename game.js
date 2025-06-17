let gold = 100;
let cropPlanted = false;
let timer;

function plantCrop() {
  if (cropPlanted) {
    alert("A crop is already growing!");
    return;
  }

  cropPlanted = true;
  document.getElementById("crop-status").textContent =
    "🌱 Crop planted... will be ready in 10 seconds.";

  timer = setTimeout(() => {
    document.getElementById("crop-status").innerHTML =
      "✅ Crop is ready! <button onclick='harvestCrop()'>Harvest</button>";
  }, 10000);
}

function harvestCrop() {
  gold += 50;
  document.getElementById("gold").textContent = gold;
  document.getElementById("crop-status").textContent =
    "🌾 Crop harvested. You can plant again!";
  cropPlanted = false;
}
