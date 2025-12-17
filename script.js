// =====================================
// RR EVENTS APP - SCRIPT (CLEAN & SAFE)
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    var eventsContainer = document.getElementById("events");

    // Exit safely if page doesn't have events container
    if (!eventsContainer) return;

    // Inject Events Content (TABLE FORMAT)
    eventsContainer.innerHTML = `
        <div class="event">

            <h2>📣 CULTURAL WEEK – SCHEDULE</h2>

            <p class="meta">
                📍 RR INTERNATIONAL COLLEGE <br>
                📅 <b>15 – 20 December 2025</b>
            </p>

            <div style="overflow-x:auto; margin-top:14px;">
                <table style="
                    width:100%;
                    border-collapse: collapse;
                    font-size:14px;
                ">
                    <thead>
                        <tr style="background:#1e2330; color:#ffcc80;">
                            <th style="padding:10px; border-radius:8px 0 0 8px;">Date</th>
                            <th style="padding:10px;">Day</th>
                            <th style="padding:10px; border-radius:0 8px 8px 0;">Theme</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px;">15/12/2025</td>
                            <td style="padding:10px;">Monday</td>
                            <td style="padding:10px;">👗 Kurta & Saree Day</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">16/12/2025</td>
                            <td style="padding:10px;">Tuesday</td>
                            <td style="padding:10px;">🕴️ Formals Day</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">17/12/2025</td>
                            <td style="padding:10px;">Wednesday</td>
                            <td style="padding:10px;">👖 Denim Day</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">18/12/2025</td>
                            <td style="padding:10px;">Thursday</td>
                            <td style="padding:10px;">⚫⚪ Black & White Day</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">19/12/2025</td>
                            <td style="padding:10px;">Friday</td>
                            <td style="padding:10px;">🧥 Hoodie Day</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">20/12/2025</td>
                            <td style="padding:10px;">Saturday</td>
                            <td style="padding:10px;">🎨 Mess & Joy Day</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p style="margin-top:14px; color:#ff5252; font-weight:600;">
                ⚠️ Attendance will be taken for all the above activities.
            </p>

            <p style="margin-top:8px; font-size:13px; color:#aaaaaa;">
                🕒 Last updated: December 2025
            </p>

        </div>
    `;
});

// ================================
// Navigation (WebView Safe)
// ================================

// Open Events page
function openEvents() {
    window.location.href = "events.html";
}

// Back to Notices (COLOR WILL CHANGE AUTOMATICALLY)
function goBack() {
    window.location.href = "index.html";
}