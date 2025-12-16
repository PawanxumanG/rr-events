const gradients = [
  ["#ff512f", "#dd2476"],
  ["#36d1dc", "#5b86e5"],
  ["#11998e", "#38ef7d"],
  ["#fc4a1a", "#f7b733"],
  ["#8e2de2", "#4a00e0"],
  ["#00c6ff", "#0072ff"]
];

function applyRandomColor(id) {
  const btn = document.getElementById(id);
  if (!btn) return;

  const g = gradients[Math.floor(Math.random() * gradients.length)];
  btn.style.background = `linear-gradient(90deg, ${g[0]}, ${g[1]})`;
  btn.style.boxShadow = `0 6px 16px ${g[0]}55`;
}

window.onload = function () {
  applyRandomColor("btnKarmanya");
  applyRandomColor("btnAlbum");
  applyRandomColor("btnEvents");
};