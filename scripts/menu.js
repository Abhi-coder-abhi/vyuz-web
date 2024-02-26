// Define menu icons
const menu0Icon = './images/menu_0.svg';
const menu1Icon = './images/menu_1.svg';

// Define modal state
let isModalOpen = false;

// Function to toggle modal
function toggleModal() {
    isModalOpen = !isModalOpen;
    const modal = document.getElementById('landingpage-modal');
    modal.style.display = isModalOpen ? 'block' : 'none';
}

// Function to handle navigation
function navigate(path) {
    console.log("Navigating to:", path);
    window.location.href = path;
    // Implement navigation logic here
}

// Render modal content
function renderModal() {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'landingpage-modal-card';
    modalContainer.id = 'landingpage-modal';
    modalContainer.style.display = 'none';
  

    modalContainer.innerHTML = `
        <div class='landingpage-modal-container'>
            <div style="margin-left: 1.25vw; margin-top: 3.5vh;align-items:flex-start;text-align:right;">
                <div class='landingpage-modal-content' onclick="navigate('/')">Home</div>
                <div class='landingpage-modal-content1' onclick="navigate('/about.html')">About Us</div>
                <div class='landingpage-modal-content1' onclick="navigate('/contact.html')">Contact Us</div>
                <div class='landingpage-modal-button' onclick="toggleModal()"><svg viewBox="0 0 512 512" width="20" height="20"><path fill="currentColor" d="M336 176L256 256 176 176c-21.3-21.3-55.9-21.3-77.3 0-21.3 21.3-21.3 55.9 0 77.3l80 80-80 80c-21.3 21.3-21.3 55.9 0 77.3 21.3 21.3 55.9 21.3 77.3 0l80-80 80 80c21.3 21.3 55.9 21.3 77.3 0 21.3-21.3 21.3-55.9 0-77.3l-80-80 80-80c21.3-21.3 21.3-55.9 0-77.3-21.3-21.3-55.9-21.3-77.3 0z"></path></svg></div>
            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);
}

// Initialize modal
renderModal();

// Define MenuIcon function
function MenuIcon() {
    const menuIconContainer = document.getElementById('menu-icon-container');
    let imageSource = menu0Icon;

    const render = () => {
        menuIconContainer.innerHTML = `
            <img src="${imageSource}" class="App-menu-button" alt="f" />
            <div class="ring"></div>
        `;
    };

    const handleClick = () => {
        imageSource = isModalOpen ? menu0Icon : menu1Icon;
        toggleModal();
        render();
    };

    menuIconContainer.addEventListener('click', handleClick);

    // Render initial state
    render();
}

// Initialize MenuIcon
MenuIcon();
