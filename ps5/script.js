let cartBtn = document.getElementById('cart')
let hideCartBtn = document.getElementById('hideCartBtn')


cartBtn.onclick = () => {
    gsap.timeline().to('.blurView', {
        duration:  1,
        filter: "blur(2px)", 
        ease: "power2.inOut",
        pointerEvents: "all"
        }).to('.cartContainer', {
        delay: -.5,
        duration:  0.5,

        y: 0
    })
}


hideCartBtn.onclick = () => {
    gsap.timeline().to('.cartContainer', {
        duration:  0.5,

        y: "120%"
    }).to('.blurView', {
        delay: -.5,
        duration:  1,
        pointerEvents: "none",
        filter: "blur(0px)", // Set the blur value
        ease: "power2.inOut", // Use a specific easing function
    })
}

let white = document.getElementById('white')
let purple = document.getElementById('purple')
let black = document.getElementById('black')

// colorsChooser = document.querySelectorAll('.colorChooser > div') 

// colorsChooser.forEach(el => {
//     el.onclick = () => {
//         alert('hello')
//     }
// })

toggleBetweenSelectedColor = (active = 0) => {
    active == 1 ? white.classList.add('active') : white.classList.remove('active')
    active == 2 ? black.classList.add('active') : black.classList.remove('active')
    active == 3 ? purple.classList.add('active') : purple.classList.remove('active')
}

CurrentIndexPic = 1

white.onclick = () => {
    toggleBetweenSelectedColor(1)

    gsap.timeline().to('#leftArrow', {
        duration: 1,
        opacity: CurrentIndexPic> 1 ? 1 : 0,
        x: 0

    }).to('#leftArrow', {
        opacity:  0,
        x: 10

    }).to('.inner', {
        duration:  1,
        x: 0,
        ease: "power2.inOut", // Use a specific easing function
    })
    CurrentIndexPic = 1

}

black.onclick = () => {
    
    toggleBetweenSelectedColor(2)
    gsap.timeline().to(   CurrentIndexPic == 1  ? '#rightArrow' : CurrentIndexPic!= 2 ?'#leftArrow' : null, {
        duration: 1,
        opacity:  1 ,
        x: 0

    }).to(CurrentIndexPic!= 2 && CurrentIndexPic == 1 ? '#rightArrow' : '#leftArrow' , {
        opacity:  0,
        x: 10

    }).to('.inner', {
        duration:  1,
        x: "-123%",
        ease: "power2.inOut", // Use a specific easing function
    })
    CurrentIndexPic = 2
}


purple.onclick = () => {
    toggleBetweenSelectedColor(3)

    gsap.timeline().to('#rightArrow', {
        duration: 1,
        opacity: CurrentIndexPic< 3 ? 1 : 0,
        x: 0

    }).to('#rightArrow', {
        opacity:  0, 
        x: -10

    }).to('.inner', {
        duration:  1,
        x: "-247%",
        ease: "power2.inOut", // Use a specific easing function
    })
    CurrentIndexPic = 3

}


let hamburgerMenu = document.getElementById('hamburgerMenu')
let isOpenedMenu = false 

hamburgerMenu.onclick = () => {

    gsap.to('.mainContent', {
        duration:  1,
        x: isOpenedMenu ? -7 : "50%",
        ease: "power2.inOut", // Use a specific easing function
    })

    gsap.to('.leftMenu', {
        duration:  1,
        x: isOpenedMenu ? "-102%" : 0,
        ease: "power2.inOut", // Use a specific easing function
    })

    isOpenedMenu = !isOpenedMenu
}

navBtn = document.querySelectorAll('.navButton > li')

navBtn.forEach(el => {
    el.onclick = () => {

        navBtn.forEach(elm => {
            elm.classList.remove('active')
        })

        el.classList.add('active')


        gsap.to('.mainContent', {
            delay: .3,
            duration:  1,
            x: -7 ,
            ease: "power2.inOut", // Use a specific easing function
        })
    
        gsap.to('.leftMenu', {
            delay: .3,
            duration:  1,
            x:  "-102%" ,
            ease: "power2.inOut", // Use a specific easing function
        })
        isOpenedMenu = false
        
    }
    
});