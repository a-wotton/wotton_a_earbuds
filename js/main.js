// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

const hotspots = document.querySelectorAll(".Hotspot");
let earBud = document.querySelector("#earbud"),
hotspot1 = document.querySelector("#hotspot1"),
hotspot2 = document.querySelector("#hotspot2"),
hotspot3 = document.querySelector("#hotspot3"),
annotation = document.querySelector(".HotspotAnnotation"),
annotation1 = document.querySelector("#hotspot-2");
annotation2 = document.querySelector("#hotspot-3");
annotation3 = document.querySelector("#hotspot-4");


function showInfo() {
  let selected = (`#${this.slot}`);
  gsap.to(selected, 0.5, {y:25, autoAlpha: 1});
  console.log(`moused over ${selected}`);
}

function showSpot1() {
  if (annotation1.children.length == 0) {
    let newHeader = document.createElement("h2");
    let touchControls = document.createElement("img");
    touchControls.src = "../images/touch-controls.svg"
    newHeader.innerHTML = "<h2>Touch controls for convience</h2>";
    annotation1.appendChild(touchControls);
    annotation1.appendChild(newHeader);
  }
}

function showSpot2() {
  if (annotation2.children.length == 0) {
    let newHeader = document.createElement("h2");
    let battery = document.createElement("img");
    battery.src = "../images/battery.svg";
    newHeader.innerHTML = "<h2>Strong durable case and long battery life</h2>";
    annotation2.appendChild(battery);
    annotation2.appendChild(newHeader);
  }
}

function showSpot3() {
  if (annotation3.children.length == 0) {
    let newHeader = document.createElement("h2");
    let speaker = document.createElement("img")
    speaker.src = "../images/volume.svg";
    newHeader.innerHTML = "<h2>Comfortable fit with high quality sound</h2>";
    annotation3.appendChild(speaker);
    annotation3.appendChild(newHeader);
  }
}

function hideInfo() {
  let selected = (`#${this.slot}`);
  gsap.to(selected, 0.5, {y:0, autoAlpha: 0})
  console.log(`moused off ${selected}`);
}

function modelLoaded() {
  hotspot.style.display = "block";
}

function modelLoaded() {
  hotspots.forEach(hotspot => {
    hotspot.style.display = "block";
  })
}

hotspots.forEach(hotspot => {
  hotspot.addEventListener("mouseover", showInfo);
  hotspot.addEventListener("mouseout", hideInfo);
})

earBud.addEventListener("load", modelLoaded);
hotspot1.addEventListener("mouseover", showSpot1);
hotspot2.addEventListener("mouseover", showSpot2);
hotspot3.addEventListener("mouseover", showSpot3);

