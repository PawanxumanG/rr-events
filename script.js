const events = [
  {
    title: "📣 ATTENTION EVERYONE!!",
    date: "15–20 December 2025",
    time: "All Day",
    venue: "RR INTERNATIONAL COLLEGE",
    desc: `
    <strong>AN EXCITING CULTURE WEEK</strong> is waiting for your presence 🎉<br><br>

    <strong>📅 15/12/2025 (Monday)</strong><br>
    👗 <b>Kurta & Saree Day</b><br>
    (Wear Kurta & Saree)<br><br>

    <strong>📅 16/12/2025 (Tuesday)</strong><br>
    🕴️ <b>Formals Day</b><br>
    (Wear Formal Attire)<br><br>

    <strong>📅 17/12/2025 (Wednesday)</strong><br>
    👖 <b>Denim Day</b><br>
    (Wear Denim Attire)<br><br>

    <strong>📅 18/12/2025 (Thursday)</strong><br>
    ⚫⚪ <b>Black & White Day</b><br>
    (Wear Black & White Attire)<br><br>

    <strong>📅 19/12/2025 (Friday)</strong><br>
    🧥 <b>Hoodie Day</b><br>
    (Wear Hoodies)<br><br>

    <strong>📅 20/12/2025 (Saturday)</strong><br>
    🎨 <b>Mess & Joy Day</b><br>
    (Wear old clothes & bring markers to write on each other)<br><br>

    <strong style="color:red;">⚠️ ATTENDANCE WILL BE TAKEN FOR THE SAME</strong>
    `
  }
];

const container = document.getElementById("events");

events.forEach(e => {
  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <h2>${e.title}</h2>
    <div class="meta">📅 ${e.date} | ⏰ ${e.time}</div>
    <div class="meta">📍 ${e.venue}</div>
    <p>${e.desc}</p>
  `;

  container.appendChild(div);
});