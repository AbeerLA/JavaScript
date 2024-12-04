let darkmode = localStorage.getItem('darkmode');
const checkbox = document.getElementById('check');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    checkbox.checked = true; 
}

// document.getElementById("check").addEventListener("change", function () {
//     document.body.classList.toggle("darkmode");
//   });

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    checkbox.checked = false; 
}


if (darkmode === "active") {
    enableDarkmode();
}

checkbox.addEventListener("change", () => {
    darkmode = localStorage.getItem('darkmode');
    if (checkbox.checked) {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
