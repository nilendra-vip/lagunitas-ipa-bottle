
gsap.to("#bottle",{
  scrollTrigger: {
    trigger: "#bottle",
    scroller: "body",
    start:"top 5%",
    end:"top -330%",
    pin:true,
    scrub: 1,
    markers: true
},
rotate: -15
})

gsap.to("#bottle",{
  scrollTrigger: {
    trigger: "#bottle",
    scroller: "body",
    start:"top 4.8%",
    end:"top -56%",
    scrub: 1.2,
    pin:true,
    markers: true
},  
scale: .7,
},)

