// nav toggle----------------------------------------------------------------------

//capture classes in variables
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-menu')[0]
let menuOpen = false;

//toggle event listener
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')

    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});


//section1 toggle------------------------------------------------------------------

//capture classes in variables
const tabToggleButton = document.getElementsByClassName('tablinks');
const bookmarkLi = document.getElementById('bookmark');
const searchingLi = document.getElementById('searching');
const sharingLi = document.getElementById('sharing');

[...tabToggleButton].forEach((button) => {
    button.addEventListener('click', (e) => {
        [...tabToggleButton].forEach((button) => {
            button.classList.remove('active');
        });

        e.target.classList.add('active');

        const id = e.target.id;

        const tab = document.getElementsByClassName(id)[0];
        
        const getRid = document.querySelectorAll('.tabcontent');

        [...getRid].forEach((tab) => {
            tab.classList.remove('active');
        });

        tab.classList.add('active');
    });
});

//toggle event listener
//tabToggleButton.addEventListener('click', () => {
    
//});


//section3 accordion toggle--------------------------------------------------------

//capture classes in variables
const acc = document.getElementsByClassName('accordion');

document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', (e) => {
        //toggle between adding and removing active class
        e.target.classList.toggle("active");

        //capture panel
        const panel = e.target.nextElementSibling;

        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }

    });
})