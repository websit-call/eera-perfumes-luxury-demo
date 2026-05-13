const fs = require('fs');
const https = require('https');

const dir = './public';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const images = [
  {
    name: "pouring.jpg",
    prompt: "Ultra realistic luxury perfume oil pouring scene, dark luxury background, warm gold lighting, shallow depth of field, premium reflections, sophisticated fragrance photography, subtle smoke atmosphere, black and gold color harmony"
  },
  {
    name: "flatlay.jpg",
    prompt: "A luxury perfume bottle flat-lay composition, premium perfume bottle, elegant black and gold styling, perfume surrounded by fragrance ingredients, soft flower petals, luxury reflective surface, cinematic soft lighting, premium editorial photography look"
  },
  {
    name: "kannauj.jpg",
    prompt: "traditional luxury Kannauj attar craftsmanship image, elegant copper distillation vessels, dark luxury cinematic mood, warm amber highlights, rich texture, heritage craftsmanship atmosphere, premium fragrance storytelling, sophisticated lighting"
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300) {
         reject(new Error(`Status Code: ${response.statusCode}`));
         return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(img.prompt)}?width=800&height=800&nologo=true`;
    console.log(`Downloading ${img.name}...`);
    try {
      // add a small delay to avoid rate limit
      await new Promise(r => setTimeout(r, 2000));
      await download(url, `${dir}/${img.name}`);
      console.log(`Saved ${img.name}`);
    } catch(e) {
      console.error(`Failed ${img.name}:`, e);
    }
  }
}

run();
