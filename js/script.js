// ==================================================================
// This file is intentionally small. It only does two things:
// 1. Keeps the footer year current.
// 2. Hides the "add video/photo" placeholder text automatically
//    once you've actually added a real video or image — you don't
//    need to touch this file when you add your work.
// ==================================================================

document.getElementById("year").textContent = new Date().getFullYear();

function clearPlaceholderIfMediaLoaded(frameSelector, mediaSelector) {
  document.querySelectorAll(frameSelector).forEach((frame) => {
    const media = frame.querySelector(mediaSelector);
    if (!media) return;

    const markLoaded = () => {
      frame.setAttribute("data-empty", "false");
    };

    if (media.tagName === "VIDEO") {
      // A <source> was uncommented and has real data
      if (media.querySelector("source") && media.querySelector("source").getAttribute("src")) {
        media.addEventListener("loadedmetadata", markLoaded);
        media.addEventListener("error", () => {}); // stay in placeholder state
      }
    }

    if (media.tagName === "IMG") {
      media.addEventListener("load", markLoaded);
    }
  });
}

clearPlaceholderIfMediaLoaded(".reel-frame", ".reel-video");
clearPlaceholderIfMediaLoaded(".work-media", ".work-video");
clearPlaceholderIfMediaLoaded(".portrait-frame", "img");
