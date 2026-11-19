# Why aren’t India’s students talking to ChatGPT?

A product teardown of ChatGPT’s voice input for Indian college students, and a proposed fix: a **live, editable transcript** that lets students correct misheard words before the question reaches the model.

## What’s here

| Path | What it is |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | The case study site (static, no build step) |
| `docs/milestone-3-prd.pdf` | PRD: Live, Editable Transcript for ChatGPT Voice (India) |
| `docs/milestone-2-research.pdf` | Segment, user research and problem canvas |
| `docs/voice-adoption-deck.pdf` | India voice landscape, UX teardown and KPI tree |
| `netlify.toml` | Netlify config (publishes the repo root) |

## Links

- Working prototype: https://protochatgpt.netlify.app/
- Figma wireframes: https://www.figma.com/design/u7Hsj7LgJUx6V7YCOfWZeW

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx http-server . -p 5173
```

## Deploy

Connect this repo in Netlify (no build command, publish directory `.`), or drag the folder onto app.netlify.com/drop.

---

Case study by Jyotiraditya Bordoloi. Independent work, not affiliated with OpenAI.
