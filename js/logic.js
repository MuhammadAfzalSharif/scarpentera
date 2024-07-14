
//cursor k sath jo chal raha ha
let cursor=document.querySelector("#cursor");
let blur=document.querySelector("#blur");

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x-1+"px";
    cursor.style.top=dets.y-1+"px"; 

});

document.addEventListener("mousemove",(dets)=>{
    blur.style.left=dets.x-100+"px";
    blur.style.top=dets.y-100+"px"; 

});

// nav bar par jo Animation ha 

let anchor=document.querySelectorAll("#navbar a");
     anchor.forEach((element)=>{
        
        element.addEventListener("mouseenter",()=>{
            cursor.style.scale=3; 
            cursor.style.border="1px solid white";
            cursor.style.backgroundColor="transparent";
        });

        element.addEventListener("mouseleave",()=>{
            cursor.style.scale=1; 
            cursor.style.border="0px solid white";
            cursor.style.backgroundColor="transparent";
        });
        
     
    });






gsap.to("#navbar",{
    backgroundColor: "rgba(0, 0, 0, 0.61)",
    backdropFilter:" blur(5px)",
    duration:0.5,
    zIndex:100,
    // delay:1,
    height:"110px",
    scrollTrigger:
    {
        trigger:"#navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%", // animation start from when 
        end:"top -11%",
        scrub:1, //speed of animation
    }
});


gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:
    {
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:1,
        
    }
});


gsap.from("#aboutus img,#about_us_txt",{
    y:100, //kitney pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#aboutus", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 60%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 57%", //end
        scrub:3,// smoothness or kitney time main perform

    }
});

gsap.from("#card1",{
    y:60, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#cards-part", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 60%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 50%", //end//end
        scrub:3// smoothness or kitney time main perform

    }
});


gsap.from("#card2",{
    y:120, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#cards-part", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 60%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 50%", //end//end
        scrub:3// smoothness or kitney time main perform

    }
});

gsap.from("#card3",{
    y:180, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#cards-part", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 60%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 50%", //end//end
        scrub:3// smoothness or kitney time main perform

    }
});





gsap.from("#banner",{
    x:-2000, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#banner", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 70%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 68%", //end
        scrub:3,// smoothness or kitney time main perform

    }
});


gsap.from("#com1",{
    x:-50, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    y:-50,
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#page3", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 30%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 32%", //end
        scrub:3,// smoothness or kitney time main perform

    }
});


gsap.from("#com2",{
    x:50, //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    y:50,
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#page3", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 20%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 17%", //end
        scrub:3,// smoothness or kitney time main perform

    }
});


gsap.from(".ftf",{
     //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
    y:50,
    opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
    // Stagger:2, // yani kintye waqfay k baad dusi animation aye
    scrollTrigger:
    {
        trigger:"#page4", //about us jaisay he body par aye ga ye trigger hoga
        scroller:"body", //wrt to body
        start:"top 50%", //jaisay he about us 55% par aye tu aniamtion start
        end:"top 46%", //end
        scrub:3,// smoothness or kitney time main perform

    }
});


gsap.from(".sf",{
    //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
   y:-50,
   opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
   // Stagger:2, // yani kintye waqfay k baad dusi animation aye
   scrollTrigger:
   {
       trigger:"#page4", //about us jaisay he body par aye ga ye trigger hoga
       scroller:"body", //wrt to body
       start:"top 50%", //jaisay he about us 55% par aye tu aniamtion start
       end:"top 46%", //end
       scrub:3,// smoothness or kitney time main perform

   }
});


gsap.from("#a,#c,#e",{
    //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
   x:-400,
   opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
   // Stagger:2, // yani kintye waqfay k baad dusi animation aye
   scrollTrigger:
   {
       trigger:"#page4", //about us jaisay he body par aye ga ye trigger hoga
       scroller:"body", //wrt to body
       start:"top 30%", //jaisay he about us 55% par aye tu aniamtion start
       end:"top 25%", //end
       scrub:3,// smoothness or kitney time main perform

   }
});

gsap.from("#b,#d,#f",{
    //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
   x:400,
   opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
   // Stagger:2, // yani kintye waqfay k baad dusi animation aye
   scrollTrigger:
   {
       trigger:"#page4", //about us jaisay he body par aye ga ye trigger hoga
       scroller:"body", //wrt to body
       start:"top 30%", //jaisay he about us 55% par aye tu aniamtion start
       end:"top 25%", //end
       scrub:3,// smoothness or kitney time main perform

   }
});


gsap.from("#submit",{
    //kitney, pixels y axis say animation show hogi like 100px k nichy sy ab animation show hogi 
   y:300,
   opacity:0, //starting main mazer nagi aye ga jaisay he viewport par aboutus aye ga
   // Stagger:2, // yani kintye waqfay k baad dusi animation aye
   scrollTrigger:
   {
       trigger:"#page4", //about us jaisay he body par aye ga ye trigger hoga
       scroller:"body", //wrt to body
       start:"top 55", //jaisay he about us 55% par aye tu aniamtion start
       end:"top 52%", //end
       scrub:4,// smoothness or kitney time main perform

   }
});


// // menu bar
var menubar = document.querySelector("#menu-bar");
var menu = document.querySelector("#menu");
var screenWidth = window.screen.width; // get initial screen width
menu.style.left =  screenWidth + "px"; // start with menu off-screen

menubar.addEventListener("click", (ele) => {
    if (menu.style.left == "0px") {
        menu.style.left = screenWidth + "px"; // hide menu off-screen
    } else {
        menu.style.left = "0px"; // bring menu on-screen
    }
});


// var menu =   document.getElementById("menu");
// var menubar =document.getElementById("menu-bar");

// menu.style.top="-250px";
// menubar.onclick = function()
// {
//     if(menu.style.top=="-250px")
//     {
//         menu.style.top="100px";
//     }
//     else
//     {
//         menu.style.top="-250px";
//     }
// }





