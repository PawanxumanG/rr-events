// =====================================
// RR EVENTS APP - SCRIPT (CLEAN & SAFE)
// =====================================

// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    var eventsContainer = document.getElementById("events");

    // If this page doesn't have events container, exit safely
    if (!eventsContainer) {
        return;
    }

    // Inject Events Content
    eventsContainer.innerHTML = `
        <div class="event">

            <h2>📣 ATTENTION EVERYONE!</h2>

            <p class="meta">
                📅 <b>15 – 20 December 2025</b> | ⏰ All Days
            </p>

            <p class="meta">
                📍 RR INTERNATIONAL COLLEGE
            </p>

            <p style="margin-top:12px; font-weight:600;">
                An exciting <b>Culture Week</b> is waiting for your presence 🎉<br>
                Each day is dedicated to a different theme.
            </p>

            <ul style="margin-top:14px; line-height:1.8; padding-left:18px;">
                <li><b>Monday – 15/12/2025</b><br>👗 Kurta & Saree Day</li>
                <li><b>Tuesday – 16/12/2025</b><br>🕴️ Formals Day</li>
                <li><b>Wednesday – 17/12/2025</b><br>👖 Denim Day</li>
                <li><b>Thursday – 18/12/2025</b><br>⚫⚪ Black & White Day</li>
                <li><b>Friday – 19/12/2025</b><br>🧥 Hoodie Day</li>
                <li><b>Saturday – 20/12/2025</b><br>🎨 Mess & Joy Day</li>
            </ul>

            <p style="margin-top:14px; color:#d32f2f; font-weight:bold;">
                ⚠️ Attendance will be taken for the above activities.
            </p>

            <p style="margin-top:8px; font-size:13px; color:#666;">
                🕒 Last updated: December 2025
            </p>

        </div>
    `;
});

// ================================
// Navigation (SAFE FOR WEBVIEW)
// ================================

// Open Events page
function openEvents() {
    window.location.href = "events.html";
}

// Go back to Home
function goBack() {
    window.location.href = "index.html";
}