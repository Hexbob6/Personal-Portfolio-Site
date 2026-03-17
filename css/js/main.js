document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio ready");

});

const favicon = document.getElementById("favicon");

document.addEventListener("visibilitychange", () => {

    const state = document.hidden ? "-away" : "";

    favicon.setAttribute("href", `icons/favicon${state}.png`);

});


