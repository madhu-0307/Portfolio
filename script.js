* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --bg: #09070d;
    --card: #110d18;
    --purple: #8b5cf6;
    --light-purple: #a78bfa;
    --white: #f5f3f7;
    --text: #d6d1dc;
    --muted: #938c9d;
    --border: rgba(167, 139, 250, 0.18);
}

body {
    font-family: "Inter", sans-serif;
    background: var(--bg);
    color: var(--white);
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}


/* NAVBAR */

.navbar {
    width: 100%;
    padding: 22px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(9, 7, 13, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
}

.logo {
    font-size: 22px;
    font-weight: 700;
}

.logo span {
    color: var(--purple);
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    font-size: 14px;
    color: var(--muted);
    transition: 0.3s;
}

nav a:hover,
nav a.active {
    color: var(--light-purple);
}

.menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
}


/* HERO */

.hero {
    min-height: 90vh;
    padding: 80px 10%;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 70px;
}

.small-title,
.section-heading p {
    font-family: "DM Mono", monospace;
    color: var(--light-purple);
    font-size: 12px;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(50px, 7vw, 85px);
    line-height: 1;
    margin: 15px 0;
}

.hero h2 {
    font-size: 22px;
    font-weight: 500;
    color: var(--light-purple);
    margin-bottom: 20px;
}

.hero-text {
    max-width: 600px;
    color: var(--muted);
    font-size: 15px;
}

.hero-buttons {
    margin-top: 32px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 22px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    transition: 0.3s;
}

.primary {
    background: var(--purple);
    color: white;
}

.primary:hover {
    transform: translateY(-3px);
    background: var(--light-purple);
}

.secondary {
    border: 1px solid var(--border);
    color: var(--text);
}

.secondary:hover {
    border-color: var(--purple);
    color: var(--light-purple);
}


/* PROFILE */

.hero-image {
    display: flex;
    justify-content: center;
}

.image-box {
    width: 300px;
    height: 360px;
    padding: 8px;
    border: 1px solid var(--border);
    position: relative;
}

.image-box::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--purple);
    top: 15px;
    left: 15px;
    z-index: -1;
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* SECTIONS */

.section {
    padding: 100px 10%;
}

.section-heading {
    margin-bottom: 55px;
}

.section-heading h2 {
    font-size: 42px;
    margin-top: 8px;
}


/* ABOUT */

.about-container {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;
}

.about-title h3 {
    font-family: "Playfair Display", serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
}

.about-text p {
    color: var(--muted);
    margin-bottom: 18px;
}

.traits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 30px;
}

.traits div {
    border-top: 1px solid var(--border);
    padding-top: 12px;
    color: var(--text);
    font-size: 14px;
}


/* SKILLS */

.skills-section {
    background: #0d0a12;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.skill-card {
    border: 1px solid var(--border);
    padding: 30px;
    background: var(--card);
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--purple);
}

.skill-card span {
    font-family: "DM Mono", monospace;
    color: var(--purple);
    font-size: 12px;
}

.skill-card h3 {
    margin-top: 20px;
    font-size: 21px;
}

.skill-card p {
    color: var(--muted);
    font-size: 13px;
}


/* PROJECTS */

.projects-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.project-card {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 25px;
    padding: 30px;
    border: 1px solid var(--border);
    background: var(--card);
    transition: 0.3s;
}

.project-card:hover {
    border-color: var(--purple);
}

.project-number {
    font-family: "DM Mono", monospace;
    color: var(--purple);
    font-size: 14px;
}

.project-card h3 {
    font-size: 22px;
    margin-bottom: 8px;
}

.project-card p {
    color: var(--muted);
    max-width: 750px;
}

.project-card span {
    display: inline-block;
    margin-top: 12px;
    font-family: "DM Mono", monospace;
    color: var(--light-purple);
    font-size: 11px;
}


/* EDUCATION */

.education-section {
    background: #0d0a12;
}

.education-list {
    max-width: 850px;
}

.education-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 40px;
    padding: 30px 0;
    border-bottom: 1px solid var(--border);
}

.year {
    font-family: "DM Mono", monospace;
    color: var(--purple);
    font-size: 12px;
}

.education-item h3 {
    font-size: 20px;
}

.education-item p {
    color: var(--muted);
}


/* CONTACT */

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.contact-info h3 {
    font-size: 28px;
    margin-bottom: 15px;
}

.contact-info > p {
    color: var(--muted);
    max-width: 500px;
}

.contact-detail {
    margin-top: 30px;
}

.contact-detail span {
    font-family: "DM Mono", monospace;
    color: var(--purple);
    font-size: 11px;
}

.contact-detail p {
    color: var(--text);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 14px;
    background: var(--card);
    border: 1px solid var(--border);
    color: white;
    outline: none;
    font-family: "Inter", sans-serif;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--purple);
}

.contact-form button {
    border: none;
    cursor: pointer;
    width: fit-content;
}


/* FOOTER */

footer {
    border-top: 1px solid var(--border);
    padding: 25px 8%;
    display: flex;
    justify-content: space-between;
    color: var(--muted);
    font-size: 12px;
}


/* MOBILE */

@media (max-width: 800px) {

    .navbar {
        padding: 18px 6%;
    }

    .menu-btn {
        display: block;
    }

    nav {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--bg);
        display: none;
        flex-direction: column;
        padding: 25px 8%;
        border-bottom: 1px solid var(--border);
    }

    nav.open {
        display: flex;
    }

    .hero {
        grid-template-columns: 1fr;
        padding: 70px 7%;
        text-align: left;
    }

    .hero-image {
        order: -1;
    }

    .image-box {
        width: 230px;
        height: 280px;
    }

    .section {
        padding: 75px 7%;
    }

    .about-container,
    .contact-container {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .skills-grid {
        grid-template-columns: 1fr 1fr;
    }

    .project-card {
        grid-template-columns: 50px 1fr;
    }

    .education-item {
        grid-template-columns: 1fr;
        gap: 8px;
    }

    footer {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }
}


@media (max-width: 500px) {

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 52px;
    }

    .section-heading h2 {
        font-size: 34px;
    }

    .traits {
        grid-template-columns: 1fr;
    }
}
