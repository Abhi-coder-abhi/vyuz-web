// Footer data
// Footer data
const footerData = [
    {
        title: "VYUG",
        links: ["What is VYUG?", "VYUG Innovators", { subheading: "Invest", links: ["Invest in VYUG"] }]
    },
    {
        title: "REGIONS",
        links: ["Forest", "Mountain", "Desert", "Education", "Entertainment", "Games/Sports", "Corporate", "Tourism"]
    },
    {
        title: "NEWS & SOCIAL",
        links: ["News Media", "Gallery", { subheading: "CAREERS", links: ["Working at VYUG"] }]
    }
];

// Function to create footer HTML
function createFooterHTML() {
    const footerContainer = document.getElementById('footer');

    const footerSizeDiv = document.createElement('div');
    footerSizeDiv.className = 'footer-size';

    const footerBlock1Div = document.createElement('div');
    footerBlock1Div.className = 'footer-block-1';
    footerBlock1Div.innerHTML = `<img src="../images/Logo.webp" class='footer-logo' alt="ss" />`;

    const footerBlock2Div = document.createElement('div');
    footerBlock2Div.className = 'footer-block-2';

    footerData.forEach(item => {
        const footerContainerDiv = document.createElement('div');
        footerContainerDiv.className = 'footer-container';

        const footerContainerTitleDiv = document.createElement('div');
        footerContainerTitleDiv.className = 'footer-container2-text1';
        footerContainerTitleDiv.textContent = item.title;

        footerContainerDiv.appendChild(footerContainerTitleDiv);

        item.links.forEach(link => {
            if (typeof link === 'string') {
                // Regular link
                const footerContainerLinkDiv = document.createElement('div');
                footerContainerLinkDiv.className = 'footer-container2-text2';
                footerContainerLinkDiv.textContent = link;
                footerContainerDiv.appendChild(footerContainerLinkDiv);
            } else if (typeof link === 'object' && link.subheading && link.links) {
                // Subheading with links
                const footerSubheadingDiv = document.createElement('div');
                footerSubheadingDiv.className = 'footer-container1-text3';
                footerSubheadingDiv.textContent = link.subheading;
                footerContainerDiv.appendChild(footerSubheadingDiv);
                link.links.forEach(sublink => {
                    const footerContainerSublinkDiv = document.createElement('div');
                    footerContainerSublinkDiv.className = 'footer-container2-text2 ';
                    footerContainerSublinkDiv.textContent = sublink;
                    footerContainerDiv.appendChild(footerContainerSublinkDiv);
                });
            }
        });

        footerBlock2Div.appendChild(footerContainerDiv);
    });

    footerSizeDiv.appendChild(footerBlock1Div);
    footerSizeDiv.appendChild(footerBlock2Div);

    footerContainer.appendChild(footerSizeDiv);

    const footerLinkSizeDiv = document.createElement('div');
    footerLinkSizeDiv.className = 'footer-link-size';

    const footerLinksContainer1Div = document.createElement('div');
    footerLinksContainer1Div.className = 'footer-links-container1';
    footerLinksContainer1Div.innerHTML = `
        <div class="footer-link-text">WHERE YOU BELONG</div>
        <div class="horizontal-line"></div>
    `;

    const footerLinksContainerDiv = document.createElement('div');
    footerLinksContainerDiv.className = 'footer-links-container';

    const footerLinksBlock1Div = document.createElement('div');
    footerLinksBlock1Div.className = 'footer-links-block1';
    footerLinksBlock1Div.innerHTML = `
        <a href="https://www.facebook.com/VyugOfficial/" class="contact-page-link" style="color: black;"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/vyugofficial/" style="margin-left: 1vw;color: black;"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/VyugOfficial" style="margin-left: 1vw;color: black;"><i class="fab fa-twitter"></i></a>
    `;

    const footerLinksBlock2Div = document.createElement('div');
    footerLinksBlock2Div.className = 'footer-links-block2';
    footerLinksBlock2Div.innerHTML = `
        <a href="https://discord.com" style="margin-left: 1vw;color: black;"><i class="fab fa-discord"></i></a>
        <a href="https://www.linkedin.com/company/vyugofficial" style="margin-left: 1vw;color: black;"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.youtube.com/@VyugOfficial" style="margin-left: 1vw ;color: black;"><i class="fab fa-youtube"></i></a>
    `;

    footerLinksContainerDiv.appendChild(footerLinksBlock1Div);
    footerLinksContainerDiv.appendChild(footerLinksBlock2Div);

    footerLinkSizeDiv.appendChild(footerLinksContainer1Div);
    footerLinkSizeDiv.appendChild(footerLinksContainerDiv);

    footerContainer.appendChild(footerLinkSizeDiv);
}

// Initialize footer
createFooterHTML();
