let pattern = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const targetUrl = browser.runtime.getURL("detected.html");
console.log(targetUrl)

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url} to ${targetUrl}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["main_frame", "sub_frame"]},
  ["blocking"]
);