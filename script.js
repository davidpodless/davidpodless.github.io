// Section content
const sections = {
    about: `
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm Ori Ariel, a formal verification engineer specializing in hardware. With extensive experience in System Verilog and formal verification tools, I thrive on solving complex problems and innovating in the tech space.</p>
            <p>Contact me at: <a href="mailto:ori.ariel@mail.huji.ac.il">ori.ariel@mail.huji.ac.il</a></p>
        </section>
    `,
    skills: `
        <section id="technical-skills">
            <h2>Technical Skills</h2>
            <ul>
                <li>HDL: System Verilog</li>
                <li>Formal Verification Tools: VC Formal, Jasper Gold</li>
                <li>Programming Languages: Python, TCL</li>
            </ul>
        </section>
    `,
    experience: `
    <section id="work-experience">
        <h2>Work Experience</h2>
        <h3>Annapurna Labs (Amazon AWS Hardware Division)</h3>
        <p><strong>Role:</strong> Formal Verification Engineer (2019–Present)</p>
        <p>Key focus: Eth and security aspects of the Nitro chip line.</p>
        <ul>
            <li>Full ownership of unit verification.</li>
            <li>Strategies, assertions (SVA/OVL), reductions, coverage, and sign-off.</li>
        </ul>
    </section>
`,
    achievements: `
    <section id="achievements">
        <h2>Achievements</h2>
        <ul>
            <li>
                <strong>One approved patent:</strong> 
                <a href="https://patents.justia.com/patent/11768990" target="_blank">Interconnect Flow Graph for Integrated Circuit Design (Patent #11768990)</a>
            </li>
            <li>Three patents pending approval.</li>
        </ul>
    </section>
`,

    education: `
        <section id="education">
            <h2>Education</h2>
            <p><strong>The Hebrew University of Jerusalem</strong> (2014–2019)</p>
            <p>B.Sc. in Electrical & Computer Engineering</p>
        </section>
    `,
    projects: `
        <section id="projects">
            <h2>Projects</h2>
            <h3>Sound Triangulation Device for the Hearing Impaired</h3>
            <p>Details: Real-time Raspberry Pi software (Python), MUSIC algorithm for voice signal identification.</p>
            <p><a href="https://github.com/davidpodless/Sound-triangulation-device-for-the-hearing-impaired.git" target="_blank">GitHub Repository</a></p>
        </section>
    `,
    "additional-info": `
        <section id="additional-info">
            <h2>Additional Information</h2>
            <ul>
                <li>Languages: Hebrew (native), English (high level).</li>
            </ul>
        </section>
    `,
    military: `
        <section id="military-service">
            <h2>Military Service</h2>
            <p><strong>8200 Unit</strong> (2011–2014)</p>
            <p>Role: Webint Analyst</p>
            <p>Rank: Chief Sergeant</p>
            <p>Honors: Model student, excelling soldier.</p>
        </section>
    `,
};

// Handle section navigation
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const section = event.target.getAttribute("data-section");
        document.getElementById("content").innerHTML = sections[section];
    });
});

// Load default section
document.getElementById("content").innerHTML = sections["about"];
