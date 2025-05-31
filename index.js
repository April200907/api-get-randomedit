const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// TikTok links + desc
const tiktokVideos = [{ url: "https://vt.tiktok.com/ZSk8csr1n/" }, 
{ url: "https://vt.tiktok.com/ZSk8c9EwM/" }, 
{ url: "https://vt.tiktok.com/ZSk8cvxRM/" }, 
{ url: "https://vt.tiktok.com/ZSk8cwAJX/" }, 
{ url: "https://vt.tiktok.com/ZSk8c4BXW/" }, 
{ url: "https://vt.tiktok.com/ZSk8cVYcn/" }, 
{ url: "https://vt.tiktok.com/ZSk8cbqdC/" }, 
{ url: "https://vt.tiktok.com/ZSk8cQMuK/" }, 
{ url: "https://vt.tiktok.com/ZSk8cnTyr/" }, 
{ url: "https://vt.tiktok.com/ZSk8cwQrV/" }, 
{ url: "https://vt.tiktok.com/ZSk8cV3RS/" }, 
{ url: "https://vt.tiktok.com/ZSk8cTFfV/" }, 
{ url: "https://vt.tiktok.com/ZSk8c9Q1s/" }, 
{ url: "https://vt.tiktok.com/ZSk8cwXqY/" }, 
{ url: "https://vt.tiktok.com/ZSk8cnQoE/" }, 
{ url: "https://vt.tiktok.com/ZSk8cHBB1/" }, 
{ url: "https://vt.tiktok.com/ZSk8cmY3o/" }, 
{ url: "https://vt.tiktok.com/ZSk83Jp3E/" }, 
{ url: "https://vt.tiktok.com/ZSk831qCh/" }, 
{ url: "https://vt.tiktok.com/ZSk8329Ph/" }, 
{ url: "https://vt.tiktok.com/ZSk83UkeT/" }, 
{ url: "https://vt.tiktok.com/ZSk83FQpA/" }, 
{ url: "https://vt.tiktok.com/ZSk83AYKs/" }, 
{ url: "https://vt.tiktok.com/ZSk83djWP/" }, 
{ url: "https://vt.tiktok.com/ZSk83LS4L/" }, 
{ url: "https://vt.tiktok.com/ZSk83rVtV/" }, 
{ url: "https://vt.tiktok.com/ZSk831c8R/" }, 
{ url: "https://vt.tiktok.com/ZSk8cKDsY/" }, 
{ url: "https://vt.tiktok.com/ZSk83eEQn/" }, 
{ url: "https://vt.tiktok.com/ZSk83rNeP/" }, 
{ url: "https://vt.tiktok.com/ZSk83k8jM/" }, 
{ url: "https://vt.tiktok.com/ZSk83Dy4p/" }, 
{ url: "https://vt.tiktok.com/ZSk83djWP/" }, 
{ url: "https://vt.tiktok.com/ZSk83LS4L/" }, 
{ url: "https://vt.tiktok.com/ZSk83rVtV/" }, 
{ url: "https://vt.tiktok.com/ZSk831c8R/" }, 
{ url: "https://vt.tiktok.com/ZSk8cKDsY/" }, 
{ url: "https://vt.tiktok.com/ZSk83eEQn/" }, 
{ url: "https://vt.tiktok.com/ZSk83rNeP/" }, 
{ url: "https://vt.tiktok.com/ZSk83k8jM/" }, 
{ url: "https://vt.tiktok.com/ZSk83Dy4p/" }, 
{ url: "https://vt.tiktok.com/ZSk83Yfpt/" }, 
{ url: "https://vt.tiktok.com/ZSk838bRV/" }, 
{ url: "https://vt.tiktok.com/ZSk83rWsm/" }, 
{ url: "https://vt.tiktok.com/ZSk838oyL/" }, 
{ url: "https://vt.tiktok.com/ZSk83kxxB/" }, 
{ url: "https://vt.tiktok.com/ZSk83NHpj/" }, 
{ url: "https://vt.tiktok.com/ZSk83YdLq/" }, 
{ url: "https://vt.tiktok.com/ZSk8TJ1WH/" }, 
{ url: "https://vt.tiktok.com/ZSk8T2VpJ/" }, 
{ url: "https://vt.tiktok.com/ZSk8TrHAJ/" }, 
{ url: "https://vt.tiktok.com/ZSk83v6c8/" }, 
{ url: "https://vt.tiktok.com/ZSk8TND64/" }, 
{ url: "https://vt.tiktok.com/ZSk8TJKYa/" }, ];

app.get("/tikrandom", async (req, res) => {
  try {
    const random = tiktokVideos[Math.floor(Math.random() * tiktokVideos.length)];
    const videoUrl = random.url;

    const encodedURL = encodeURIComponent(videoUrl);
    const apiURL = `https://www.tikwm.com/api/?url=${encodedURL}`;

    const response = await axios.get(apiURL, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const data = response.data;

    if (!data.data || !data.data.play) {
      return res.status(500).json({ error: "Failed to fetch no watermark video" });
    }

    return res.json({
      url: data.data.play,
      desc: random.desc,
      title: data.data.title || "Random Edit"
    });

  } catch (err) {
    console.error("❌ API error:", err.message);
    return res.status(500).json({ error: "Failed to fetch no watermark video" });
  }
});

app.get("/", (req, res) => {
  res.send("🎥 Welcome to Alight Motion TikTok Random Video Edit API with no watermark (Tikwm)!");
});

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
