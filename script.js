// // ================================
// RR EVENTS APP - MAINTENANCE SCRIPT
// ================================

// 🔧 Maintenance message
const maintenanceMessage = `
    <strong style="font-size: 24px;">🚧 This app is under maintenance 🚧</strong><br><br>
    <strong>Please come back at:</strong> 6:15 PM on 14th December 2025<br><br>
    <strong style="color:red;">⚠️ We apologize for the inconvenience.</strong>
`;

// ================================
// Render Maintenance Message
// ================================

const container = document.getElementById("events");

container.innerHTML = ""; // clear old content (safety)

const div = document.createElement("div");
div.className = "event";

div.innerHTML = maintenanceMessage;

container.appendChild(div);