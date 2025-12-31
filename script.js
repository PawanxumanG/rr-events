// =====================================
// RR EVENTS APP - SCRIPT (THEME ENHANCED)
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    var eventsContainer = document.getElementById("events");

    // Exit safely if page doesn't have events container
    if (!eventsContainer) return;

    // Inject Events Content (TABLE FORMAT)
    eventsContainer.innerHTML = `
        <div class="event" style="
            animation: fadeUp 0.6s ease;
        ">

            <h2>📣 CULTURAL WEEK – SCHEDULE</h2>

            <p class="meta" style="opacity:.9;">
                📍 RR INTERNATIONAL COLLEGE <br>
                📅 <b>15 – 20 December 2025</b>
            </p>

            <div style="overflow-x:auto; margin-top:16px;">
                <table style="
                    width:100%;
                    border-collapse: collapse;
                    font-size:14px;
                    border-spacing:0;
                ">
                    <thead>
                        <tr style="
                            background: linear-gradient(90deg,#1e2330,#2a3042);
                            color:#ffcc80;
                        ">
                            <th style="padding:12px; border-radius:10px 0 0 10px;">Date</th>
                            <th style="padding:12px;">Day</th>
                            <th style="padding:12px; border-radius:0 10px 10px 0;">Theme</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${row("15/12/2025","Monday","👗 Kurta & Saree Day")}
                        ${row("16/12/2025","Tuesday","🕴️ Formals Day")}
                        ${row("17/12/2025","Wednesday","👖 Denim Day")}
                        ${row("18/12/2025","Thursday","⚫⚪ Black & White Day")}
                        ${row("19/12/2025","Friday","🧥 Hoodie Day")}
                        ${row("20/12/2025","Saturday","🎨 Mess & Joy Day")}
                    </tbody>
                </table>
            </div>

            <p style="
                margin-top:16px;
                color:#ff6b6b;
                font-weight:600;
            ">
                ⚠️ Attendance will be taken for all the above activities.
            </p>

            <p style="
                margin-top:8px;
                font-size:13px;
                color:#aaaaaa;
            ">
                🕒 Last updated: December 2025
            </p>

        </div>
    `;

    // Helper to create animated rows
    function row(date, day, theme) {
        return `
        <tr style="
            transition: background 0.2s ease;
        "
        onmouseenter="this.style.background='rgba(255,255,255,0.04)'"
        onmouseleave="this.style.background='transparent'"
        >
            <td style="padding:12px;">${date}</td>
            <td style="padding:12px;">${day}</td>
            <td style="padding:12px;">${theme}</td>
        </tr>`;
    }
});

// ================================
// Navigation (WebView Safe)
// ================================

// Open Events page
function openEvents() {
    window.location.href = "events.html";
}

// Back to Notices
function goBack() {
    window.location.href = "index.html";
}