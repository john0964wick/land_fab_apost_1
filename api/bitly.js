export default async function handler(req, res) {
  const accessToken = "9e240825b094a3edbcc6de3b651f67d24ed7861b";
  const longUrl = "https://www.profitableratecpm.com/gzc0auku6?key=1c7bc620c901ec892754919ccc314242";

  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: longUrl }),
  });

  const data = await response.json();
  res.status(200).json({ short_url: data.link });
}