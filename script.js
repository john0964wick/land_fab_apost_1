const claimBtn = document.getElementById("claimBtn");
const fbShare = document.getElementById("fb-share");

const backendBitlyUrl = "/api/bitly";
let claimed = false;

async function getShortLink() {
  const res = await fetch(backendBitlyUrl);
  const data = await res.json();
  return data.short_url;
}

async function redirectToShortLink() {
  if (claimed) return;
  claimed = true;
  const shortUrl = await getShortLink();
  window.location.href = shortUrl;
}

claimBtn.addEventListener("click", redirectToShortLink);

window.addEventListener("DOMContentLoaded", async () => {
  const shortUrl = await getShortLink();
  fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`;

  // AUTO CLICK NATURAL (2–5 detik)
  const randomDelay = Math.floor(Math.random() * 3000) + 2000;
  setTimeout(() => {
    if (!claimed) {
      claimBtn.click(); // Simulasikan klik user
    }
  }, randomDelay);
});
