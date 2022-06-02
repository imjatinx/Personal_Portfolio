// For Srolling navbar
onscroll = function () {
  scroll_navbar()
  scroll_top()
};

function scroll_navbar() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("custom_navbar").className = "sticky";
  } else {
    document.getElementById("custom_navbar").className = "navbar";
  }
}

function scroll_top() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("gototop").className = "gototop";
  } else {
    document.getElementById("gototop").className = "hide";
  }
}

// typing script

var typed = new Typed(".typing", {
  strings: ["Developer","Freelancer", "Designer", "Creator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2", {
  strings: ["Developer","Freelancer", "Designer", "Creator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


// For Menu button toggle/bar
function navToggle() {
  var x = document.getElementById("myNav");
  if (x.style.left == '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}