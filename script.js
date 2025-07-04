const claimBtn = document.getElementById("claimBtn");
const fbShare = document.getElementById("fb-share");

const backendBitlyUrl = "/api/bitly";

async function getShortLink() {
  const res = await fetch(backendBitlyUrl);
  const data = await res.json();
  return data.short_url;
}

claimBtn.addEventListener("click", async () => {
  const shortUrl = await getShortLink();
  window.location.href = shortUrl;
});

window.addEventListener("DOMContentLoaded", async () => {
  const shortUrl = await getShortLink();
  fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`;
});