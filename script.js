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

            <ul style="margin-top:12px; line-height:1.6;">
                <li>
                    <b>📅 15/12/2025 (Monday)</b><br>
                    👗 <b>Kurta & Saree Day</b><br>
                    (Wear Kurta & Saree)
                </li>

                <li>
                    <b>📅 16/12/2025 (Tuesday)</b><br>
                    🕴️ <b>Formals Day</b><br>
                    (Wear Formal Attire)
                </li>

                <li>
                    <b>📅 17/12/2025 (Wednesday)</b><br>
                    👖 <b>Denim Day</b><br>
                    (Wear Denim Attire)
                </li>

                <li>
                    <b>📅 18/12/2025 (Thursday)</b><br>
                    ⚫⚪ <b>Black & White Day</b><br>
                    (Wear Black & White Attire)
                </li>

                <li>
                    <b>📅 19/12/2025 (Friday)</b><br>
                    🧥 <b>Hoodie Day</b><br>
                    (Wear Hoodies)
                </li>

                <li>
                    <b>📅 20/12/2025 (Saturday)</b><br>
                    🎨 <b>Mess & Joy Day</b><br>
                    (Wear old clothes & get markers to write on each other)
                </li>
            </ul>

            <p style="margin-top:14px; color:red; font-weight:bold;">
                ⚠️ ATTENDANCE WILL BE TAKEN FOR THE SAME
            </p>
        </div>
    `;
});