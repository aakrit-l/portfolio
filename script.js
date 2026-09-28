// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle (remembers choice when storage is available)
const root = document.documentElement;
const toggle = document.getElementById("theme");

function setTheme(mode) {
  root.dataset.theme = mode;
  toggle.textContent = mode === "dark" ? "Light" : "Dark";
  try { localStorage.setItem("theme", mode); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

// Typed C++ intro in the hero
const lines = [
  '<span class="k">#include</span> <span class="s">&lt;iostream&gt;</span>',
  '',
  '<span class="k">int</span> main() {',
  '  std::cout &lt;&lt; <span class="s">"Aakrit Lamichhane"</span>;',
  '  std::cout &lt;&lt; <span class="s">"BSc.CSIT, Tribhuvan University"</span>;',
  '  <span class="k">return</span> 0;',
  '}'
];
const target = document.getElementById("typed");
const html = lines.join("\n");

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  target.innerHTML = html;
} else {
  // Type character by character, keeping HTML tags and entities intact
  let i = 0;
  const tokens = html.match(/<[^>]+>|&[a-z]+;|[\s\S]/g);
  const timer = setInterval(() => {
    target.innerHTML += tokens[i++];
    if (i >= tokens.length) clearInterval(timer);
  }, 35);
}