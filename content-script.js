const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

if (window.location.href == link) {
  window.location.href = browser.runtime.getURL("detected.html");
}