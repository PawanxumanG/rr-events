// ================================
// RR EVENTS APP - EVENTS SCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("events");

    if (!container) {
        console.error("Events container not found");
        return;
    }

    container.innerHTML = `
        <div class="event">

            <h2>📣 ATTENTION EVERYONE!!</h2>

            <p class="meta">
                📅 15 – 20 December 2025 &nbsp; | &nbsp; ⏰ All Days
            </p>

            <p class="meta">
                📍 RR INTERNATIONAL COLLEGE
            </p>

            <p style="margin-top:12px; font-weight:bold;">
                AN EXCITING CULTURE WEEK IS WAITING FOR YOUR PRESENCE 🎉<br>
                WHICH IS DEDICATED ON DIFFERENT THEMES.
            </p>

            <ul style="margin-top:14px; line-height:1.7; padding-left:18px;">
                <li><b>📅 15/12/2025 (Monday)</b><br>👗 Kurta & Saree Day</li>
                <li><b>📅 16/12/2025 (Tuesday)</b><br>🕴️ Formals Day</li>
                <li><b>📅 17/12/2025 (Wednesday)</b><br>👖 Denim Day</li>
                <li><b>📅 18/12/2025 (Thursday)</b><br>⚫⚪ Black & White Day</li>
                <li><b>📅 19/12/2025 (Friday)</b><br>🧥 Hoodie Day</li>
                <li><b>📅 20/12/2025 (Saturday)</b><br>🎨 Mess & Joy Day</li>
            </ul>

            <p style="margin-top:16px; color:red; font-weight:bold;">
                ⚠️ ATTENDANCE WILL BE TAKEN FOR THE SAME
            </p>

            <hr style="margin:16px 0;">

          

        </div>
    `;
});