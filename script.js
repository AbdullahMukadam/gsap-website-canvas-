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
      var data = ` ./assets/Image1.jpg
      ./assets/Image2.jpg
      ./assets/Image3.jpg
      ./assets/Image4.jpg
      ./assets/Image5.jpg
      ./assets/Image6.jpg`;

  for (let i = 7; i <= 300; i++) {
      data += `
      ./assets/Image${i}.jpg`;
  }

  // The existing lines are split and added to preserve the original structure
  var dataArray = data.split('\n');
  return dataArray[index];
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



    

    