document.addEventListener("DOMContentLoaded", function () {

    const gradients = [
        ["#2196f3", "#00bcd4"],
        ["#ff6a00", "#ff9800"],
        ["#8e24aa", "#d81b60"],
        ["#43a047", "#66bb6a"],
        ["#e53935", "#fb8c00"],
        ["#3949ab", "#1e88e5"],
        ["#00897b", "#26a69a"],
        ["#5e35b1", "#9575cd"],
        ["#c2185b", "#ec407a"]
    ];

    // SELECT ALL BUTTONS
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        const g = gradients[Math.floor(Math.random() * gradients.length)];

        btn.style.background = `linear-gradient(90deg, ${g[0]}, ${g[1]})`;
        btn.style.color = "#ffffff";
        btn.style.border = "none";
        btn.style.borderRadius = "10px";
        btn.style.boxShadow = "0 6px 14px rgba(0,0,0,0.35)";
        btn.style.transition = "transform 0.12s ease, box-shadow 0.12s ease";
    });

});