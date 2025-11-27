const scrollers = document.querySelectorAll(".scroller");

for (var i = 0; i < scrollers.length; i++) {
  var scroller = scrollers[i];
  console.log("scroller: ", scroller);
  const track = scroller.querySelector(".scroller__track");
  const firstGroup = track.querySelector(".scroller__group");

  // Clone group
  const clone = firstGroup.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);

  // Set duration based on total width (bigger content, longer scroll)
  const totalWidth = firstGroup.scrollWidth * 2; // A + clone
  const pxPerSecond = 130;
  const duration = totalWidth / pxPerSecond;
  track.style.setProperty("--marquee-duration", `${duration}s`);
}
