document.addEventListener("DOMContentLoaded", function () {

    const bars = document.querySelectorAll(".bar");

    setInterval(() => {

        bars.forEach(bar => {

            const randomHeight =
                Math.floor(Math.random() * 120) + 40;

            bar.style.height =
                randomHeight + "px";

        });
