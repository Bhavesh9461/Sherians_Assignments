function Sec1() {
  var tl = gsap.timeline();

  gsap.from("#sec1 .info h1,#sec1 .info h3", {
    y: 100,
    opacity: 0,
    scale: 0.6,
    duration: 0.8,
  });

  gsap.from("#sec1 #MainVdos", {
    y: 100,
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
  });

  gsap.from("#sec1 .homeVdo", {
    y: 30,
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
  });

  gsap.to("#sec1 .imgs", {
    y: 20,
    duration: 0.9,
    scale: 0.9,
    scrollTrigger: {
      trigger: "#sec1 .imgs",
      scroller: "body",
      scrub: 1,
    },
  });
}

function Sec4() {
  gsap.to("#sec4 #imgDiv img", {
    scale: 1.1,
    y: -30,
    scrollTrigger: {
      trigger: "#sec4 #imgDiv img",
      scroller: "body",
      scrub: 0.5,
      start: "top 70%",
      ease: "none",
    },
  });
}

function Sec5() {
  gsap.from("#sec5 #head1", {
    opacity: 0,
    duration: 1,
    y: 100,
    // scale:0.8,

    scrollTrigger: {
      trigger: "#sec5 #head1",
      scroller: "body",
      start: "top 96%",
    },
  });

  gsap.from("#sec5 .gridBoxes .box, .gridBoxes .box h1", {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    stagger: 0.25,

    scrollTrigger: {
      trigger: "#sec5 #head1",
      scroller: "body",
      start: "top 96%",
    },
  });
}

function Sec6() {
  gsap.from("#sec6 #innerDiv", {
    y: 80,
    opacity: 0,
    duration: 0.72,
    delay: 0.7,

    scrollTrigger: {
      trigger: "#sec6",
      scroller: "body",
    },
  });
}

function Sec7() {
  gsap.from("#sec7 #grdBox2", {
    y: 100,
    duration: 0.9,
    delay: 0.4,
    opacity: 0,

    scrollTrigger: {
      trigger: "#sec7",
      scroller: "body",
      start: "top 95%",
    },
  });
}

Sec1()
Sec4()
Sec5()
Sec6()
Sec7()