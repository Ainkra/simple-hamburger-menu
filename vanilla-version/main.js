document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    let isOpen = false;
    let hasStarted = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
        hasStarted = true;
        updateMenuState();
    };

    const closeMenu = () => {
        isOpen = false;
        hasStarted = true;
        updateMenuState();
    };

    const updateMenuState = () => {
        if (hasStarted) {
            if (!isOpen) {
                overlay.classList.add("close");
                overlay.classList.remove("open");
                menu.classList.add("close");
                menu.classList.remove("open");
            } else {
                overlay.classList.add("open");
                overlay.classList.remove("close");
                menu.classList.add("open");
                menu.classList.remove("close");
            }
        }
    };

    const handleClickOutside = (event) => {
        if (
            !menu.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            closeMenu();
        }
    };

    menuIcon.addEventListener("click", toggleMenu);
    document.addEventListener("mousedown", handleClickOutside);
});

function closeMenu() {
    const event = new Event('closeMenuEvent');
    document.dispatchEvent(event);
}

document.addEventListener('closeMenuEvent', () => {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    menu.classList.add("close");
    menu.classList.remove("open");
    overlay.classList.add("close");
    overlay.classList.remove("open");
});
