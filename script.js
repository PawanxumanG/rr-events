// ================================
// RR EVENTS APP - MAINTENANCE MODE
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("events");

    if (!container) {
        console.error("Events container not found");
        return;
    }

    // Clear anything old
    container.innerHTML = "";

    // Maintenance message
    container.innerHTML = `
        <div class="event" style="text-align:center; padding:30px;">
            
            <h2 style="font-size:26px;">🚧 APP UNDER MAINTENANCE 🚧</h2>

            <p style="margin-top:12px; font-size:16px;">
                We are currently updating the RR Events App to serve you better.
            </p>

            <p style="margin-top:16px; font-weight:bold; font-size:18px;">
                ⏰ Please come back at
            </p>

            <p style="font-size:20px; color:#e74c3c; font-weight:bold;">
                6:15 PM <br>
                14 December 2025
            </p>

            <p style="margin-top:20px; font-size:14px; color:#555;">
                Thank you for your patience 🙏
            </p>

        </div>
    `;
});