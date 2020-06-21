  d3.select(window).on("input load", function(e) {
    document.querySelectorAll(".frobj").forEach(el => {
      el.setAttribute("width", el.querySelector(".frdiv").scrollWidth +20);
      el.setAttribute("height", el.querySelector(".frdiv").scrollHeight + 20);
    });    
  })
