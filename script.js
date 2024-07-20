/* window.onbeforeunload = function () {
  window.scrollTo(0, 0);
} */



document.body.classList.add("no_scroll");

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  //locoScroll.scrollTo(0, { duration: 0, disableLerp: true });

  // Force update after a short delay
  
}

locomotive();
// Run the initialization after the DOM is fully loaded

  


//loading screen

 let loader = document.querySelector(".loader");

window.addEventListener("load",function(){
    gsap.to(loader,{
        duration: 1,
        y: "-100%",
        ease: "power4.out",
        delay: 1,
        onComplete: function(){
            loader.style.display = "none";
            document.body.classList.remove("no_scroll");
            document.getElementById('loading-overlay').style.display = 'none';
            ScrollTrigger.refresh();
            
        }
    })
    
   
}) 

gsap.from(".loading-name h1",{
    duration: 0.6,
    y:10,
    opacity: "random(0.3, 1)",
    repeat: -1,
    yoyo: true,
    ease: "power4.Out",
    scale:1
});



//canvas

function rendering(){
    const canvas = document.querySelector(".page-3 canvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    let frameCount = 300;
    const images = [];
    let imageSequence ={
    frame: 0,
}


    window.addEventListener("resize",function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    for(let i = 0; i < frameCount; i++){
        const img = new Image();
        img.src = files(i);
        images.push(img);
       
    }
   
    function files(index){
        var data = ` C:/gsap-website/assets/Image1.jpg
      C:/gsap-website/assets/Image2.jpg
     C:/gsap-website/assets/Image3.jpg
     C:/gsap-website/assets/Image4.jpg
     C:/gsap-website/assets/Image5.jpg
     C:/gsap-website/assets/Image6.jpg
     C:/gsap-website/assets/Image7.jpg
     C:/gsap-website/assets/Image8.jpg
     C:/gsap-website/assets/Image9.jpg
     C:/gsap-website/assets/Image10.jpg
     C:/gsap-website/assets/Image11.jpg
     C:/gsap-website/assets/Image12.jpg
     C:/gsap-website/assets/Image13.jpg
     C:/gsap-website/assets/Image14.jpg
     C:/gsap-website/assets/Image15.jpg
     C:/gsap-website/assets/Image16.jpg
     C:/gsap-website/assets/Image17.jpg
     C:/gsap-website/assets/Image18.jpg
     C:/gsap-website/assets/Image19.jpg
     C:/gsap-website/assets/Image20.jpg
     C:/gsap-website/assets/Image21.jpg
     C:/gsap-website/assets/Image22.jpg
     C:/gsap-website/assets/Image23.jpg
     C:/gsap-website/assets/Image24.jpg
     C:/gsap-website/assets/Image25.jpg
     C:/gsap-website/assets/Image26.jpg
     C:/gsap-website/assets/Image27.jpg
     C:/gsap-website/assets/Image28.jpg
     C:/gsap-website/assets/Image29.jpg
     C:/gsap-website/assets/Image30.jpg
     C:/gsap-website/assets/Image31.jpg
     C:/gsap-website/assets/Image32.jpg
     C:/gsap-website/assets/Image33.jpg
     C:/gsap-website/assets/Image34.jpg
     C:/gsap-website/assets/Image35.jpg
     C:/gsap-website/assets/Image36.jpg
     C:/gsap-website/assets/Image37.jpg
     C:/gsap-website/assets/Image38.jpg
     C:/gsap-website/assets/Image39.jpg
     C:/gsap-website/assets/Image40.jpg
     C:/gsap-website/assets/Image41.jpg
     C:/gsap-website/assets/Image42.jpg
     C:/gsap-website/assets/Image43.jpg
     C:/gsap-website/assets/Image44.jpg
     C:/gsap-website/assets/Image45.jpg
     C:/gsap-website/assets/Image46.jpg
     C:/gsap-website/assets/Image47.jpg
     C:/gsap-website/assets/Image48.jpg
     C:/gsap-website/assets/Image49.jpg
     C:/gsap-website/assets/Image50.jpg
     C:/gsap-website/assets/Image51.jpg
     C:/gsap-website/assets/Image52.jpg
     C:/gsap-website/assets/Image53.jpg
     C:/gsap-website/assets/Image54.jpg
     C:/gsap-website/assets/Image55.jpg
     C:/gsap-website/assets/Image56.jpg
     C:/gsap-website/assets/Image57.jpg
     C:/gsap-website/assets/Image58.jpg
     C:/gsap-website/assets/Image59.jpg
     C:/gsap-website/assets/Image60.jpg
     C:/gsap-website/assets/Image61.jpg
     C:/gsap-website/assets/Image62.jpg
     C:/gsap-website/assets/Image63.jpg
     C:/gsap-website/assets/Image64.jpg
     C:/gsap-website/assets/Image65.jpg
     C:/gsap-website/assets/Image66.jpg
     C:/gsap-website/assets/Image67.jpg
     C:/gsap-website/assets/Image68.jpg
     C:/gsap-website/assets/Image69.jpg
     C:/gsap-website/assets/Image70.jpg
     C:/gsap-website/assets/Image71.jpg
     C:/gsap-website/assets/Image72.jpg
     C:/gsap-website/assets/Image73.jpg
     C:/gsap-website/assets/Image74.jpg
     C:/gsap-website/assets/Image75.jpg
     C:/gsap-website/assets/Image76.jpg
     C:/gsap-website/assets/Image77.jpg
     C:/gsap-website/assets/Image78.jpg
     C:/gsap-website/assets/Image79.jpg
     C:/gsap-website/assets/Image80.jpg
     C:/gsap-website/assets/Image81.jpg
     C:/gsap-website/assets/Image82.jpg
     C:/gsap-website/assets/Image83.jpg
     C:/gsap-website/assets/Image84.jpg
     C:/gsap-website/assets/Image85.jpg
     C:/gsap-website/assets/Image86.jpg
     C:/gsap-website/assets/Image87.jpg
     C:/gsap-website/assets/Image88.jpg
     C:/gsap-website/assets/Image89.jpg
     C:/gsap-website/assets/Image90.jpg
     C:/gsap-website/assets/Image91.jpg
     C:/gsap-website/assets/Image92.jpg
     C:/gsap-website/assets/Image93.jpg
     C:/gsap-website/assets/Image94.jpg
     C:/gsap-website/assets/Image95.jpg
     C:/gsap-website/assets/Image96.jpg
     C:/gsap-website/assets/Image97.jpg
     C:/gsap-website/assets/Image98.jpg
     C:/gsap-website/assets/Image99.jpg
     C:/gsap-website/assets/Image100.jpg
     C:/gsap-website/assets/Image101.jpg
     C:/gsap-website/assets/Image102.jpg
     C:/gsap-website/assets/Image103.jpg
     C:/gsap-website/assets/Image104.jpg
     C:/gsap-website/assets/Image105.jpg
     C:/gsap-website/assets/Image106.jpg
     C:/gsap-website/assets/Image107.jpg
     C:/gsap-website/assets/Image108.jpg
     C:/gsap-website/assets/Image109.jpg
     C:/gsap-website/assets/Image110.jpg
     C:/gsap-website/assets/Image111.jpg
     C:/gsap-website/assets/Image112.jpg
     C:/gsap-website/assets/Image113.jpg
     C:/gsap-website/assets/Image114.jpg
     C:/gsap-website/assets/Image115.jpg
     C:/gsap-website/assets/Image116.jpg
     C:/gsap-website/assets/Image117.jpg
     C:/gsap-website/assets/Image118.jpg
     C:/gsap-website/assets/Image119.jpg
     C:/gsap-website/assets/Image120.jpg
     C:/gsap-website/assets/Image121.jpg
     C:/gsap-website/assets/Image122.jpg
     C:/gsap-website/assets/Image123.jpg
     C:/gsap-website/assets/Image124.jpg
     C:/gsap-website/assets/Image125.jpg
     C:/gsap-website/assets/Image126.jpg
     C:/gsap-website/assets/Image127.jpg
     C:/gsap-website/assets/Image128.jpg
     C:/gsap-website/assets/Image129.jpg
     C:/gsap-website/assets/Image130.jpg
     C:/gsap-website/assets/Image131.jpg
     C:/gsap-website/assets/Image132.jpg
     C:/gsap-website/assets/Image133.jpg
     C:/gsap-website/assets/Image134.jpg
     C:/gsap-website/assets/Image135.jpg
     C:/gsap-website/assets/Image136.jpg
     C:/gsap-website/assets/Image137.jpg
     C:/gsap-website/assets/Image138.jpg
     C:/gsap-website/assets/Image139.jpg
     C:/gsap-website/assets/Image140.jpg
     C:/gsap-website/assets/Image141.jpg
     C:/gsap-website/assets/Image142.jpg
     C:/gsap-website/assets/Image143.jpg
     C:/gsap-website/assets/Image144.jpg
     C:/gsap-website/assets/Image145.jpg
     C:/gsap-website/assets/Image146.jpg
     C:/gsap-website/assets/Image147.jpg
     C:/gsap-website/assets/Image148.jpg
     C:/gsap-website/assets/Image149.jpg
     C:/gsap-website/assets/Image150.jpg
     C:/gsap-website/assets/Image151.jpg
     C:/gsap-website/assets/Image152.jpg
     C:/gsap-website/assets/Image153.jpg
     C:/gsap-website/assets/Image154.jpg
     C:/gsap-website/assets/Image155.jpg
     C:/gsap-website/assets/Image156.jpg
     C:/gsap-website/assets/Image157.jpg
     C:/gsap-website/assets/Image158.jpg
     C:/gsap-website/assets/Image159.jpg
     C:/gsap-website/assets/Image160.jpg
     C:/gsap-website/assets/Image161.jpg
     C:/gsap-website/assets/Image162.jpg
     C:/gsap-website/assets/Image163.jpg
     C:/gsap-website/assets/Image164.jpg
     C:/gsap-website/assets/Image165.jpg
     C:/gsap-website/assets/Image166.jpg
     C:/gsap-website/assets/Image167.jpg
     C:/gsap-website/assets/Image168.jpg
     C:/gsap-website/assets/Image169.jpg
     C:/gsap-website/assets/Image170.jpg
     C:/gsap-website/assets/Image171.jpg
     C:/gsap-website/assets/Image172.jpg
     C:/gsap-website/assets/Image173.jpg
     C:/gsap-website/assets/Image174.jpg
     C:/gsap-website/assets/Image175.jpg
     C:/gsap-website/assets/Image176.jpg
     C:/gsap-website/assets/Image177.jpg
     C:/gsap-website/assets/Image178.jpg
     C:/gsap-website/assets/Image179.jpg
     C:/gsap-website/assets/Image180.jpg
     C:/gsap-website/assets/Image181.jpg
     C:/gsap-website/assets/Image182.jpg
     C:/gsap-website/assets/Image183.jpg
     C:/gsap-website/assets/Image184.jpg
     C:/gsap-website/assets/Image185.jpg
     C:/gsap-website/assets/Image186.jpg
     C:/gsap-website/assets/Image187.jpg
     C:/gsap-website/assets/Image188.jpg
     C:/gsap-website/assets/Image189.jpg
     C:/gsap-website/assets/Image190.jpg
     C:/gsap-website/assets/Image191.jpg
     C:/gsap-website/assets/Image192.jpg
     C:/gsap-website/assets/Image193.jpg
     C:/gsap-website/assets/Image194.jpg
     C:/gsap-website/assets/Image195.jpg
     C:/gsap-website/assets/Image196.jpg
     C:/gsap-website/assets/Image197.jpg
     C:/gsap-website/assets/Image198.jpg
     C:/gsap-website/assets/Image199.jpg
     C:/gsap-website/assets/Image200.jpg
     C:/gsap-website/assets/Image201.jpg
     C:/gsap-website/assets/Image202.jpg
     C:/gsap-website/assets/Image203.jpg
     C:/gsap-website/assets/Image204.jpg
     C:/gsap-website/assets/Image205.jpg
     C:/gsap-website/assets/Image206.jpg
     C:/gsap-website/assets/Image207.jpg
     C:/gsap-website/assets/Image208.jpg
     C:/gsap-website/assets/Image209.jpg
     C:/gsap-website/assets/Image210.jpg
     C:/gsap-website/assets/Image211.jpg
     C:/gsap-website/assets/Image212.jpg
     C:/gsap-website/assets/Image213.jpg
     C:/gsap-website/assets/Image214.jpg
     C:/gsap-website/assets/Image215.jpg
     C:/gsap-website/assets/Image216.jpg
     C:/gsap-website/assets/Image217.jpg
     C:/gsap-website/assets/Image218.jpg
     C:/gsap-website/assets/Image219.jpg
     C:/gsap-website/assets/Image220.jpg
     C:/gsap-website/assets/Image221.jpg
     C:/gsap-website/assets/Image222.jpg
     C:/gsap-website/assets/Image223.jpg
     C:/gsap-website/assets/Image224.jpg
     C:/gsap-website/assets/Image225.jpg
     C:/gsap-website/assets/Image226.jpg
     C:/gsap-website/assets/Image227.jpg
     C:/gsap-website/assets/Image228.jpg
     C:/gsap-website/assets/Image229.jpg
     C:/gsap-website/assets/Image230.jpg
     C:/gsap-website/assets/Image231.jpg
     C:/gsap-website/assets/Image232.jpg
     C:/gsap-website/assets/Image233.jpg
     C:/gsap-website/assets/Image234.jpg
     C:/gsap-website/assets/Image235.jpg
     C:/gsap-website/assets/Image236.jpg
     C:/gsap-website/assets/Image237.jpg
     C:/gsap-website/assets/Image238.jpg
     C:/gsap-website/assets/Image239.jpg
     C:/gsap-website/assets/Image240.jpg
     C:/gsap-website/assets/Image241.jpg
     C:/gsap-website/assets/Image242.jpg
     C:/gsap-website/assets/Image243.jpg
     C:/gsap-website/assets/Image244.jpg
     C:/gsap-website/assets/Image245.jpg
     C:/gsap-website/assets/Image246.jpg
     C:/gsap-website/assets/Image247.jpg
     C:/gsap-website/assets/Image248.jpg
     C:/gsap-website/assets/Image249.jpg
     C:/gsap-website/assets/Image250.jpg
     C:/gsap-website/assets/Image251.jpg
     C:/gsap-website/assets/Image252.jpg
     C:/gsap-website/assets/Image253.jpg
     C:/gsap-website/assets/Image254.jpg
     C:/gsap-website/assets/Image255.jpg
     C:/gsap-website/assets/Image256.jpg
     C:/gsap-website/assets/Image257.jpg
     C:/gsap-website/assets/Image258.jpg
     C:/gsap-website/assets/Image259.jpg
     C:/gsap-website/assets/Image260.jpg
     C:/gsap-website/assets/Image261.jpg
     C:/gsap-website/assets/Image262.jpg
     C:/gsap-website/assets/Image263.jpg
     C:/gsap-website/assets/Image264.jpg
     C:/gsap-website/assets/Image265.jpg
     C:/gsap-website/assets/Image266.jpg
     C:/gsap-website/assets/Image267.jpg
     C:/gsap-website/assets/Image268.jpg
     C:/gsap-website/assets/Image269.jpg
     C:/gsap-website/assets/Image270.jpg
     C:/gsap-website/assets/Image271.jpg
     C:/gsap-website/assets/Image272.jpg
     C:/gsap-website/assets/Image273.jpg
     C:/gsap-website/assets/Image274.jpg
     C:/gsap-website/assets/Image275.jpg
     C:/gsap-website/assets/Image276.jpg
     C:/gsap-website/assets/Image277.jpg
     C:/gsap-website/assets/Image278.jpg
     C:/gsap-website/assets/Image279.jpg
     C:/gsap-website/assets/Image280.jpg
     C:/gsap-website/assets/Image281.jpg
     C:/gsap-website/assets/Image282.jpg
     C:/gsap-website/assets/Image283.jpg
     C:/gsap-website/assets/Image284.jpg
     C:/gsap-website/assets/Image285.jpg
     C:/gsap-website/assets/Image286.jpg
     C:/gsap-website/assets/Image287.jpg
     C:/gsap-website/assets/Image288.jpg
     C:/gsap-website/assets/Image289.jpg
     C:/gsap-website/assets/Image290.jpg
     C:/gsap-website/assets/Image291.jpg
     C:/gsap-website/assets/Image292.jpg
     C:/gsap-website/assets/Image293.jpg
     C:/gsap-website/assets/Image294.jpg
     C:/gsap-website/assets/Image295.jpg
     C:/gsap-website/assets/Image296.jpg
     C:/gsap-website/assets/Image297.jpg
     C:/gsap-website/assets/Image298.jpg
     C:/gsap-website/assets/Image299.jpg
     C:/gsap-website/assets/Image300.jpg 
           
        `
        return data.split("\n")[index].trim();
     }

     function scaleImage(img, ctx){
        var canvas = ctx.canvas;
        var hratio = canvas.width / img.width;
        var vratio = canvas.height / img.height;
        var ratio = Math.max(hratio, vratio);
        var centerX = (canvas.width - img.width * ratio) / 2;
        var centerY = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img ,0, 0, img.width, img.height, centerX, centerY, img.width * ratio, img.height * ratio);
    }
    
    function render(){
        scaleImage(images[imageSequence.frame], context);
    
    }

    images[0].onload = render;

    gsap.to(imageSequence,{
     frame: frameCount-1,
     snap: "frame",
     ease: "none",
     scrollTrigger: {
         trigger: ".page-3 canvas",
         start: "top 0%",
         end: "bottom 0%",
         scrub: 2,
        scroller:"#main",
        
     },
     onUpdate: render
 
    })
 
    gsap.to(".page-3 canvas",{
     scrollTrigger: {
         trigger: ".page-3 ",
         start: "bottom 0%",     
         scrub: 2,
         ease: "none",
         scroller:"#main",
        
     }
    })
 
    ScrollTrigger.create({
     trigger: ".page-3",
     pin:true,
     start: "bottom 100%",
     scrub:2,
     scroller: "#main",
    })

}

rendering();



// page-1 content

// Variables initialization
var mousePos = { x: 0, y: 0 };
var galleryPos = { x: 0, y: 0 };
var galleryBounds = { top: 0, right: 0, bottom: 0, left: 0 };

// Execute when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  var gallery = document.querySelector('div#gallery-box');

  // Set variables by default
  galleryPos = { 
    x: gallery.offsetLeft + (gallery.offsetWidth / 2), 
    y: gallery.offsetTop + (gallery.offsetHeight / 2) 
  };
  galleryBounds = { 
    top: gallery.offsetTop, 
    right: gallery.offsetLeft + gallery.offsetWidth, 
    bottom: gallery.offsetTop + gallery.offsetHeight, 
    left: gallery.offsetLeft 
  };

  // Whenever mouse moves (inside div.gallery)
  gallery.addEventListener('mousemove', function(e) {
    mousePos = { x: e.pageX, y: e.pageY }; // Get mouse position coordinates
    calcOffset(); // Calculate the offset
    move(); // Move according to the offset
    parallaxPics(); // Do parallax effect
  });

  // When mouse leaves, reset everything and return to idle
  gallery.addEventListener('mouseleave', function() {
    document.querySelectorAll('div#gallery-box div.gallery').forEach(function(el) {
      el.setAttribute('data-offset-x', '0');
      el.setAttribute('data-offset-y', '0');
    });

    document.querySelectorAll('div.item img').forEach(function(img) {
      img.style.left = '50%';
      img.style.top = '50%';
    });

    move();
  });

  // Recalculate basic variables on window resize
  window.addEventListener('resize', function() {
    galleryPos = { 
      x: gallery.offsetLeft + (gallery.offsetWidth / 2), 
      y: gallery.offsetTop + (gallery.offsetHeight / 2) 
    };
    galleryBounds = { 
      top: gallery.offsetTop, 
      right: gallery.offsetLeft + gallery.offsetWidth, 
      bottom: gallery.offsetTop + gallery.offsetHeight, 
      left: gallery.offsetLeft 
    };
  });

  // Logic for hyperlink hover effect
  document.querySelectorAll('div.overlay a').forEach(function(a) {
    a.addEventListener('mouseleave', function() {
      a.classList.add('leave');
      setTimeout(function() {
        a.classList.remove('leave');
      }, 500);
    });
  });
});

// Calculate offset relative to base position based on mouse position
function calcOffset() {
  var newX = mousePos.x - galleryPos.x;
  newX = invertValue(newX) / 2;
  var newY = mousePos.y - galleryPos.y;
  newY = invertValue(newY);

  document.querySelectorAll('div#gallery-box div.gallery').forEach(function(el) {
    el.setAttribute('data-offset-x', newX);
    el.setAttribute('data-offset-y', newY);
  });
}

// Calculate mouse positions percentage
function calcPercentage() {
  var horizontal = ((mousePos.x - galleryBounds.left) / document.querySelector('div#gallery-box').offsetWidth) * 100;
  var vertical = ((mousePos.y - galleryBounds.top) / document.querySelector('div#gallery-box').offsetHeight) * 100;
  return { h: horizontal, v: vertical };
}

// Move the div.gallery element based on its data-offset attributes
function move() {
  var newX = document.querySelector('div#gallery-box div.gallery').getAttribute('data-offset-x');
  var newY = document.querySelector('div#gallery-box div.gallery').getAttribute('data-offset-y');
  
  document.querySelector('div#gallery-box div.gallery').style.transform = 'translate(-50%, -50%) translate(' + newX + 'px, ' + newY + 'px)';
}

// Parallax effect on pictures
function parallaxPics() {
  var percentages = calcPercentage();
  document.querySelectorAll('div.item img').forEach(function(img) {
    img.style.left = (100 - percentages.h) + '%';
    img.style.top = (100 - percentages.v) + '%';
  });
}

// Invert int / float value
function invertValue(num) {
  if (Math.sign(num) == 1) {
    num = -Math.abs(num);
  } else {
    num = Math.abs(num);
  }
  return num;
}



//page-2 

gsap.registerPlugin(ScrollTrigger);
let page2_img= document.querySelector(".slides img");

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
      scroller: "#main",
    },
  });
});

gsap.to(".right-content h1",{
  color:"white",
  duration: 0.6,
  ease:"none",
  backgroundSize: '100%',
  scrollTrigger: {
    trigger: ".right",
    start: "center 80%",
    end: "center 20%",
    scrub: 2,
    scroller: "#main",
  }
})

//page-3

gsap.to(".page-3-content h1",{
  delay:0.5,
  duration: 2 ,
  ease:"none",
  
 scale:6,
 opacity:0,
 
  scrollTrigger: {
    trigger: ".page-3",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
   
    scroller: "#main",
  }
})



function sendData(){
  
      let name = document.querySelector(".name").value
      let email = document.querySelector(".email").value
      let message = document.querySelector(".msg").value
  

      emailjs.init("1gpQIx0ctpJ-RYuad");

      let templateParams = {
        to_email: "abdullahmukadam21@gmail.com",
        from_name: name,
        from_email: email,
        message: message
      };
    
      emailjs.send("service_2xnkpho", "template_ohw0d1s", templateParams)
        .then(function(response) {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Email sent successfully!");
          
        }, function(error) {
          console.log("Failed to send email.", error);
          alert("Failed to send email.");
        
        });
  }



    

    