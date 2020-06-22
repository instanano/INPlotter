  d3.select(window).on("input load change", function(e) {
    document.querySelectorAll(".frobj").forEach(el => {
      el.setAttribute("width", el.querySelector(".frdiv").scrollWidth + 30);
      el.setAttribute("height", el.querySelector(".frdiv").scrollHeight + 20);
    });    
  })
