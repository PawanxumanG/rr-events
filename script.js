const events = [
    {
        title: "Annual Cultural Fest",
        date: "25 December 2025",
        time: "10:00 AM",
        venue: "College Auditorium",
        desc: "Music, dance, drama and fun activities for all students."
    },
    {
        title: "Sports Day",
        date: "10 January 2026",
        time: "9:00 AM",
        venue: "College Ground",
        desc: "Inter-department sports competitions."
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