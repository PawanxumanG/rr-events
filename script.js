// =====================================
// RR EVENTS APP - SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("events");
    if (!container) return;

    container.innerHTML = `
        <div class="event">

            <h2>📣 ATTENTION EVERYONE!</h2>

            <p class="meta">
                📅 <b>15 – 20 December 2025</b> | ⏰ All Days
            </p>

            <p class="meta">
                📍 RR INTERNATIONAL COLLEGE
            </p>

            <p style="margin-top:12px; font-weight:bold;">
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

            <p style="margin-top:14px; color:red; font-weight:bold;">
                ⚠️ Attendance will be taken for the above activities.
            </p>

            <p style="margin-top:8px; font-size:13px; color:#555;">
                🕒 Last updated: December 2025
            </p>

            <hr style="margin:18px 0;">

            <button onclick="openTicTacToe()"
                style="
                    width:100%;
                    padding:12px;
                    font-size:16px;
                    background:#2196F3;
                    color:#fff;
                    border:none;
                    border-radius:6px;
                    cursor:pointer;">
                ❌⭕ Play Tic Tac Toe
            </button>

        </div>
    `;
});

// ================================
// Navigation Function
// ================================
function openTicTacToe() {
    window.location.href = "tictactoe.html";
}