// ================================
// RR EVENTS APP - CULTURE WEEK
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("events");
    if (!container) return;

    container.innerHTML = `
        <div class="event">

            <h2>📣 ATTENTION EVERYONE!</h2>

            <p class="meta">
                📅 <b>15 – 20 December 2025</b> &nbsp; | &nbsp; ⏰ All Days
            </p>

            <p class="meta">
                📍 RR INTERNATIONAL COLLEGE
            </p>

            <p style="margin-top:12px; font-weight:bold;">
                An exciting <b>Culture Week</b> is waiting for your presence 🎉<br>
                Each day is dedicated to a different theme.
            </p>

            <ul style="margin-top:14px; line-height:1.8; padding-left:18px;">
                <li>
                    <b>📅 Monday – 15/12/2025</b><br>
                    👗 <b>Kurta & Saree Day</b><br>
                    (Wear Kurta & Saree)
                </li>

                <li>
                    <b>📅 Tuesday – 16/12/2025</b><br>
                    🕴️ <b>Formals Day</b><br>
                    (Wear Formal Attire)
                </li>

                <li>
                    <b>📅 Wednesday – 17/12/2025</b><br>
                    👖 <b>Denim Day</b><br>
                    (Wear Denim Attire)
                </li>

                <li>
                    <b>📅 Thursday – 18/12/2025</b><br>
                    ⚫⚪ <b>Black & White Day</b><br>
                    (Wear Black & White Attire)
                </li>

                <li>
                    <b>📅 Friday – 19/12/2025</b><br>
                    🧥 <b>Hoodie Day</b><br>
                    (Wear Hoodies)
                </li>

                <li>
                    <b>📅 Saturday – 20/12/2025</b><br>
                    🎨 <b>Mess & Joy Day</b><br>
                    (Wear old clothes & bring markers to write on each other)
                </li>
            </ul>

            <p style="margin-top:16px; color:red; font-weight:bold;">
                ⚠️ Attendance will be taken for the above activities.
            </p>

            <p style="margin-top:10px; font-size:13px; color:#555;">
                🕒 Last updated: December 2025
            </p>

        </div>
    `;
});