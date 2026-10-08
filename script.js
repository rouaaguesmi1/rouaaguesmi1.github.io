/* ===== Config ===== */
// Optional: paste your Google Calendar "Appointment schedule" public link here.
// Calendar > Create > Appointment schedule > Share > copy booking page link.
const APPOINTMENT_URL = "";
const OWNER_EMAIL = "rouaaguesmi@gmail.com";
const GH = "https://github.com/rouaaguesmi1/";

/* ===== Data ===== */
const SKILLS = {
  "Programming and data": ["Python", "SQL", "R", "TypeScript", "Java", "C++", "PostgreSQL", "MongoDB", "MySQL", "ETL", "Data Cleaning", "Data Validation", "Feature Engineering"],
  "Machine learning": ["Scikit-learn", "TensorFlow", "PyTorch", "JAX", "Statistical Analysis", "Predictive Modeling", "Classification", "Ensemble Modeling", "Anomaly Detection", "Model Evaluation", "Reinforcement Learning"],
  "Deep learning and vision": ["3D CNNs", "U-Net", "CBAM Attention", "ResNet3D", "DenseNet3D", "OCR", "Image Classification", "Image Segmentation", "NLP"],
  "Data engineering and BI": ["Apache Airflow", "Web Scraping", "Data Pipelines", "PostgreSQL", "MongoDB", "Tableau", "Power BI", "Data Quality", "Deduplication", "GDPR-compliant Anonymization"],
  "Generative AI": ["RAG", "Hybrid Retrieval (BM25 + Dense)", "LoRA / QLoRA", "Hugging Face Transformers", "LangChain", "LLaMA3", "Embeddings", "LLM Evaluation", "AI Agents"],
  "Cloud and MLOps": ["Docker", "Kubernetes", "MLflow", "GitHub Actions", "AWS", "Azure", "GCP", "FastAPI", "Flask", "Django", "REST APIs", "Microservices", "Redis", "Prometheus", "Grafana"]
};

const PROJECTS = [
  {
    name: "FinLLM", cat: "AI and LLM", feat: true,
    desc: "Locally run financial AI assistant. A hybrid RAG and tools architecture routes each question either to an internal document knowledge base or to live Yahoo Finance data, with accuracy and latency tracked in MLflow.",
    stack: ["Python", "LLaMA3", "Ollama", "ChromaDB", "RAG", "FastAPI", "Docker", "Redis", "MLflow"]
  },
  {
    name: "AutoGPT", cat: "AI and LLM", feat: true,
    desc: "AutoGPT+, a local-first platform of specialized autonomous agents (Planner, Researcher, Coder, Visualizer, Writer) with a RAG memory that learns from prior outputs.",
    stack: ["Python", "Ollama", "Multi-agent", "RAG", "MCP", "n8n", "Docker"]
  },
  {
    name: "ai-system-cegid", cat: "AI and LLM", feat: true,
    desc: "Dual-mode RAG system over multimodal documents: classic retrieve-rerank-generate or a bounded agentic plan-and-refine loop. Bilingual English and French.",
    stack: ["Python", "BM25", "Dense embeddings", "RRF", "Cross-encoder", "Tesseract OCR"]
  },
  {
    name: "PneumaTect", cat: "Computer vision", feat: true,
    desc: "Early detection and classification of pulmonary nodules from CT scans, built as an ESPRIT team capstone on the public LIDC-IDRI dataset, with an inference API and DICOM viewer.",
    stack: ["Jupyter", "3D U-Net", "CBAM", "ResNet3D", "DenseNet3D", "Flask", "DICOM"]
  },
  {
    name: "PixCard", cat: "Data and ML", feat: true,
    desc: "AI-powered SaaS platform for automated credit scoring, IFRS 9 risk forecasting, financial document ingestion (OCR/NLP), customer segmentation and compliance reporting.",
    stack: ["Jupyter", "XGBoost", "LightGBM", "SHAP / LIME", "spaCy", "FinBERT", "Tesseract OCR"]
  },
  {
    name: "dna-visualization-tool", cat: "Web and tools", feat: true,
    desc: "Interactive bioinformatics tool for 3D DNA visualization and sequence analysis: GC content, ORFs, CpG islands, promoter prediction and live mutation simulation.",
    stack: ["HTML", "JavaScript", "3D visualization", "Bioinformatics"]
  },
  {
    name: "Vehicles-Theft-in-New-Zealand", cat: "Data and ML",
    desc: "Interactive Power BI dashboard on vehicle theft in New Zealand: regional hotspots, monthly and yearly trends, vehicle types and drill-through pages.",
    stack: ["Power BI", "Data visualization", "Time series"]
  },
  {
    name: "Air-Quality", cat: "Data and ML",
    desc: "Air Quality Index prediction with linear regression in R: data cleaning, EDA, statistical assumption tests and model evaluation on pollutant and vehicle-density data.",
    stack: ["R", "Linear regression", "EDA", "Statistics"]
  },
  {
    name: "Green-Menu-Web-Application", cat: "Web and tools",
    desc: "Front-end web application for a digital green menu, styled in CSS.",
    stack: ["CSS", "HTML"]
  },
  {
    name: "rouaaguesmi1.github.io", cat: "Web and tools", live: "https://rouaaguesmi1.github.io/",
    desc: "This portfolio: a static, responsive site with a live network animation, filterable projects and Google Calendar interview booking.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  },
  {
    name: "rouaaguesmi1", cat: "Web and tools",
    desc: "GitHub profile README: AI systems, LLM engineering, AI infrastructure and selected work.",
    stack: ["Markdown", "GitHub"]
  }
];

/* ===== Helpers ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Nav, progress, active link ===== */
const nav = $("#nav"), bar = $("#bar"), menu = $("#menu"), burger = $("#burger");
function onScroll() {
  nav.classList.toggle("stuck", scrollY > 30);
  const h = document.documentElement;
  bar.style.width = (scrollY / (h.scrollHeight - innerHeight) * 100) + "%";
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("#menu a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));
const links = $$('#menu a[href^="#"]:not([data-book])');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));
$("#yr").textContent = new Date().getFullYear();

/* ===== Rotating line ===== */
const words = ["hybrid RAG pipelines", "3D medical vision models", "LLM agents with memory", "production ML APIs", "ETL and data-quality pipelines"];
const rotor = $("#rotor");
if (reduce) { rotor.textContent = words[0]; }
else {
  let wi = 0, ci = words[0].length, del = true;
  (function tick() {
    const w = words[wi];
    if (del) { ci--; } else { ci++; }
    rotor.textContent = w.slice(0, ci);
    let t = del ? 35 : 70;
    if (!del && ci === w.length) { del = true; t = 1800; }
    else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; t = 300; }
    setTimeout(tick, t);
  })();
}

/* ===== Count-up stats (single reveal) ===== */
const counters = $$(".count");
const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; co.unobserve(e.target);
  const el = e.target, to = +el.dataset.to, dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || "";
  if (reduce) { el.textContent = to.toFixed(dec) + suf; return; }
  const t0 = performance.now(), d = 1400;
  (function step(t) {
    const p = Math.min((t - t0) / d, 1), v = to * (1 - Math.pow(1 - p, 3));
    el.textContent = v.toFixed(dec) + (p === 1 ? suf : "");
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}), { threshold: .6 });
counters.forEach(c => co.observe(c));

/* ===== Skills tabs ===== */
const tabs = $("#skillTabs"), panel = $("#skillPanel");
Object.keys(SKILLS).forEach((k, i) => {
  const b = document.createElement("button");
  b.className = "tab"; b.role = "tab"; b.textContent = k;
  b.setAttribute("aria-selected", i === 0);
  b.addEventListener("click", () => showSkills(k));
  tabs.appendChild(b);
});
function showSkills(k) {
  $$(".tab", tabs).forEach(b => b.setAttribute("aria-selected", b.textContent === k));
  panel.innerHTML = "";
  SKILLS[k].forEach((s, i) => {
    const el = document.createElement("span");
    el.className = "skill"; el.textContent = s; el.style.animationDelay = (i * 30) + "ms";
    panel.appendChild(el);
  });
}
showSkills(Object.keys(SKILLS)[0]);

/* ===== Projects ===== */
const grid = $("#grid"), filters = $("#filters"), empty = $("#empty");
const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
let active = "All";
cats.forEach(c => {
  const b = document.createElement("button");
  b.className = "tab"; b.textContent = c; b.setAttribute("aria-pressed", c === "All");
  b.addEventListener("click", () => { active = c; $$(".tab", filters).forEach(x => x.setAttribute("aria-pressed", x === b)); renderProjects(); });
  filters.appendChild(b);
});
function renderProjects() {
  grid.innerHTML = "";
  let list = PROJECTS.filter(p => active === "All" || p.cat === active);
  if (active === "All") list = [...list.filter(p => p.feat), ...list.filter(p => !p.feat)];
  empty.hidden = list.length > 0;
  const plain = list.filter(p => !(p.feat && active === "All")).length, left = plain % 3;
  list.forEach((p, i) => {
    const isPlain = !(p.feat && active === "All");
    const fromEnd = list.length - i;
    const card = document.createElement("article");
    card.className = "card" + (!isPlain ? " feat" : "") + (isPlain && left && fromEnd <= left ? (left === 1 ? " w6" : " w3") : "");
    card.style.animationDelay = (i * 45) + "ms";
    const url = GH + p.name;
    card.innerHTML = `
      <a class="stretch" href="${url}" target="_blank" rel="noopener" aria-label="Open ${p.name} on GitHub"></a>
      <div class="card-top"><span class="cat">${p.cat}</span><span>${p.name === "rouaaguesmi1.github.io" ? "live site" : "public repo"}</span></div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <ul class="stack">${p.stack.map(s => `<li>${s}</li>`).join("")}</ul>
      <div class="links"><a href="${url}" target="_blank" rel="noopener">View on GitHub</a>${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live site</a>` : ""}</div>`;
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
    grid.appendChild(card);
  });
}
renderProjects();

/* ===== Booking ===== */
const form = $("#bookForm"), err = $("#formErr");
const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone || "your local time zone";
$("#tz").textContent = "Times are in your time zone: " + tzName + ". I am in Tunisia (Africa/Tunis).";
const d = new Date(); d.setDate(d.getDate() + 1);
form.date.min = new Date().toISOString().slice(0, 10);
form.date.value = d.toISOString().slice(0, 10);
if (APPOINTMENT_URL) {
  const a = $("#apptLink"); a.href = APPOINTMENT_URL; a.hidden = false;
  $$("[data-book]").forEach(b => { b.href = APPOINTMENT_URL; b.target = "_blank"; b.rel = "noopener"; });
}
const pad = n => String(n).padStart(2, "0");
const fmt = dt => `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`;
function readForm() {
  const f = Object.fromEntries(new FormData(form));
  if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.date || !f.time) {
    err.textContent = "Enter your name, a valid email, a date and a time."; err.hidden = false; return null;
  }
  const start = new Date(`${f.date}T${f.time}`);
  if (isNaN(start) || start < new Date()) { err.textContent = "Choose a date and time in the future."; err.hidden = false; return null; }
  err.hidden = true;
  const end = new Date(start.getTime() + (+f.len) * 60000);
  const title = `Interview with Rouaa Guesmi${f.company ? " | " + f.company.trim() : ""}`;
  const details = `Interview with Rouaa Guesmi (Data Scientist and AI Engineer).\n\nBooked by: ${f.name} <${f.email}>${f.company ? "\nCompany: " + f.company : ""}${f.msg ? "\n\nNotes: " + f.msg : ""}\n\nPortfolio: https://rouaaguesmi1.github.io/`;
  return { f, start, end, title, details };
}
form.addEventListener("submit", e => {
  e.preventDefault();
  const r = readForm(); if (!r) return;
  const q = new URLSearchParams({
    action: "TEMPLATE", text: r.title, details: r.details,
    dates: `${fmt(r.start)}/${fmt(r.end)}`, ctz: tzName, add: OWNER_EMAIL
  });
  window.open("https://calendar.google.com/calendar/render?" + q.toString(), "_blank", "noopener");
});
$("#icsBtn").addEventListener("click", () => {
  const r = readForm(); if (!r) return;
  const z = dt => dt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const esc = s => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//rouaaguesmi1.github.io//EN", "BEGIN:VEVENT",
    `UID:${Date.now()}@rouaaguesmi1.github.io`, `DTSTAMP:${z(new Date())}`, `DTSTART:${z(r.start)}`, `DTEND:${z(r.end)}`,
    `SUMMARY:${esc(r.title)}`, `DESCRIPTION:${esc(r.details)}`,
    `ATTENDEE;CN=Rouaa Guesmi:mailto:${OWNER_EMAIL}`, `ATTENDEE;CN=${esc(r.f.name)}:mailto:${r.f.email}`,
    "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = "interview-rouaa-guesmi.ics"; a.click(); URL.revokeObjectURL(a.href);
});

/* ===== Hero network canvas ===== */
(function () {
  const cv = $("#net"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 }, run = true, raf;
  const DPR = Math.min(devicePixelRatio || 1, 2);
  function size() {
    const r = cv.parentElement.getBoundingClientRect();
    W = r.width; H = r.height; cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.round(Math.min(95, W * H / 14000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8 }));
  }
  function draw() {
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, dd = dx * dx + dy * dy;
      if (dd < 16000) { const f = (1 - dd / 16000) * .6; p.x += dx * f * .02; p.y += dy * f * .02; }
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, dist = dx * dx + dy * dy;
        if (dist < 17000) { ctx.strokeStyle = `rgba(108,180,255,${(1 - dist / 17000) * .32})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const mx = a.x - mouse.x, my = a.y - mouse.y, md = mx * mx + my * my;
      if (md < 30000) { ctx.strokeStyle = `rgba(255,255,255,${(1 - md / 30000) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      ctx.fillStyle = "rgba(190,220,255,.85)"; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
    }
    if (run) raf = requestAnimationFrame(draw);
  }
  size(); addEventListener("resize", size);
  cv.parentElement.addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  cv.parentElement.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  new IntersectionObserver(es => { if (reduce) return; run = es[0].isIntersecting; if (run) draw(); else cancelAnimationFrame(raf); }).observe(cv.parentElement);
  if (reduce) { run = false; draw(); } else draw();
})();
