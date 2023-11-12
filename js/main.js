(() => {

gsap.registerPlugin(ScrollTrigger);
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


//Creates Hotspots
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



//xray placeholder 

    //variables
    let imageCon = document.querySelector("#imageCon"),
        drag = document.querySelector(".image-drag"),
        left = document.querySelector(".image-left"),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

        function onDown() {
            dragging = true;
            console.log("on Down");
            max = imageCon.offsetWidth;
        }

        function onUp() {
            dragging = false;
            console.log("on Up");
            max = imageCon.offsetWidth;
        }

        function onMove(event) {
            if (dragging===true) {
                let x = event.clientX - imageCon.getBoundingClientRect().left;

                if (x < min) {
                    x = min;

                } else if (x > max) {
                    x = max-10;
                    debugger;
                }

                drag.style.left = x + "px";
                left.style.width = x + "px";    
        }
        }


        //event listener
        drag.addEventListener("mousedown", onDown);
        document.body.addEventListener("mouseup", onUp);
        document.body.addEventListener("mousemove", onMove);

        //Scroll Animation 
        const canvas = document.querySelector("#scroll-animation");
        const context = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;
        const frameCount = 190; 
        const images = []; //array that holds the images
        const buds = {
            frame: 0
        }

        //run a for loop to populate our images array
        for (let i=0; i<frameCount; i++) {
          console.log(i);
          const img = document.createElement("img");
          img.src =`scrolling-animation/scrolling-animation${(i+1).toString().padStart(4, "0")}.jpg`
          console.log(img)
          images.push(img);
          console.log(images);
        }

        gsap.to(buds, {
          frame: 189,
          snap: "frame",
          scrollTrigger: {
              trigger: "#scroll-animation",
              pin: true,
              scrub: 1,
              start: "top top"
          },
          onUpdate: render
      });
      
      images[0].addEventListener("onload", render)
      
      function render() {
          console.log(buds.frame);
          console.log(images[buds.frame]) //square brackets grab specific object from array
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[buds.frame], 0, 0);
      }
    

 })();

