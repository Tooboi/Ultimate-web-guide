let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
//check if dark mode enabled
//if enabled turn it off
//if disabled turn on

const enableDarkMode = () => {
    //add class darkmode to body
    document.body.classList.add('darkmode');
    //update darkmode in local storage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    //add class darkmode to body
    document.body.classList.remove('darkmode');
    //update darkmode in local storage
    localStorage.setItem('darkMode', 'null');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});