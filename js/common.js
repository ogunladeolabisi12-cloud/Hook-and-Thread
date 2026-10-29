const header = document.querySelector('header');
const footer = document.querySelector('footer');
const aside = document.querySelector('.sidebar');

header.innerHTML = `
    <div class="wrap">
        <nav class="nav-bar">
            <div class="nav-logo">
                <img class='logo'src="assets/logo.png" alt="logo">
                <p>Hook & Thread</p>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="collection.html">Collections</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <div class="buttons">
                <button class="btn1">Login in</button>
                <button class="btn2">Sign up</button>
            </div>
            <button class="user"><i class="fa-regular fa-user"></i></button>
            <div class="hamburger"><i class="fa-solid fa-bars"></i></div>
        </nav>
    </div>
`;

footer.innerHTML = `
    <div class="footer">
        <div>
            <div class="footer-contentlogo">
                <img class='logo'src="assets/logo.png" alt="logo">
                <p>Hook & Thread</p>
            </div>
            <div class="footer-content1">
                <p>Mindfully handcrafted crochet garments, bags, and lifestyle pieces created with natural fibers and intentional design.</p>
            </div>
        </div>
        <div class="footer-content2">
            <h3>QUICK LINKS</h3>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Collections</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-content3">
            <h3>CONNECT & INQUIRIES</h3>
            <ul>
                <li><a href=""><i class="fa-solid fa-envelope"></i> hello@hookandthread.com</a></li>
                <li><a href=""><i class="fa-brands fa-whatsapp"></i> WhatsApp Enquiry</a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram:@hookandthread</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-content4">
        <p>&copy; 2026 Hook & Thread.Handcrafted with care. All rights reserved. </p>
        <p>Slow Craft & Organic Fibers</p>
    </div>    
`;

aside.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="collection.html">Collections</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
`;