<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zaher Alashker's Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: var(--text-color, #333);
            background-color: var(--bg-color, #f4f4f4);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        h1 {
            color: var(--header-color, #333);
        }
        h2 {
            color: var(--subheader-color, #555);
        }
        h3 {
            color: var(--subsubheader-color, #777);
        }
        p, ul, ol {
            margin-bottom: 10px;
        }
        ul, ol {
            padding-left: 20px;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background-color: var(--section-bg-color, #fff);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .section-title {
            margin-top: 0;
        }
    </style>
</head>
<body>
    <button onclick="toggleDarkMode()">Dark Mode On/Off</button>

    <div class="section">
        <div class="photo">
             <img src="https://drive.google.com/thumbnail?id=1KelRcJB88M5jfh-HTBrYwtDN2mvM_3_E&sz=w100" alt="Page Image">
        </div>
        <h1>Zaher Alashker</h1>
        <p>GAZIANTEP-TURKEY / TEL: +90-535 290 6622</p>
        <p>E-MAIL: ZAHER.ALAS@GMAIL.COM - SKYPE: ZAHER ALAS</p>
    </div>

    <div class="section">
        <h2 class="section-title">Career Objective</h2>
        <p>To obtain a position that would best fit my qualification and develop further my talent and skills for continuous career improvement.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Personal Information</h2>
        <ul>
            <li><strong>Date and place of Birth:</strong> 1/1/1984 / Damascus</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Marital Status:</strong> Married</li>
            <li><strong>Nationality:</strong> Syrian / Turkish</li>
            <li><strong>Languages:</strong> Arabic: Native / English: Advanced / Turkish: Fair</li>
        </ul>
    </div>

    <div class="section">
        <h2 class="section-title">Work Experience</h2>
        <h3>Senior Operations Assistant (Beneficiary Data Management) 2020-2024/ IOM – Gaziantep</h3>
        <p>Duties and responsibilities:</p>
        <ul>
            <li>Support the Emergency Operations Officer in the implementation of the IOM SNFI/WASH program activities...</li>
            <!-- Add more details for each work experience -->
        </ul>
    </div>

    <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <p><strong>Databases Management and visualization:</strong> MS Office programs (Excel, Access, Visio, Word, Power BI, PowerPoint), MS SQL Server. Data collection: kobo Collect Toolbox, ODK. Mapping: ArcGIS, MS Power BI. Websites Design: WordPress. Graphic Design: (Adobe Photoshop, Adobe Illustrator, Corel Draw). Programming: Python and Java Basics. IT Skills: Good knowledge of general IT and networking management, software and hardware maintenance.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Education</h2>
        <ul>
            <li>University Of the People, American accredited online university (Bachelor Degree in Computer Science) Currently studying</li>
            <li>Damascus University, Syria (Open Learning – English/Translation Department) 2012</li>
            <li>Ministry of Education, Damascus, Syria TTI (Teachers Training Institute – English Section) 2007</li>
        </ul>
    </div>

    <div class="section">
        <h2 class="section-title">Training</h2>
        <p><strong>Self-Learning and Online Training Courses:</strong> Attended a lot of online courses related to various topics like: Excel, Power Bi, kobo, SQL and SQL server, IT. (Countless hours) (IOM). BSAFE, Preparing and Responding to Active Shooter Incidents, I know gender, IOM ethics training, Data Protection, Prevention of Sexual Exploitation and Abuse. (CALP): Core Cash and Voucher Assistance Skills for Program Staff.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Qualifications</h2>
        <ul>
            <li>Demonstrated interest in volunteering and human rights, commitment to confidentiality and neutrality.</li>
            <li>Good understanding of humanitarian principles.</li>
            <li>Field and office environment work experience.</li>
            <li>Excellent communication and inter-personal skills.</li>
            <li>Proficient in written and oral communication in Arabic and English.</li>
            <li>Strong ability to deal with software and hardware maintenance, strong ability to learn new programs very fast.</li>
            <li>Strong ability to meet deadlines and respect of time frames and work plans.</li>
            <li>Work effectively with diverse group of people and with minimum supervision.</li>
            <li>Highly trainable and fast learner. Adapt well to changes and pressures in the workplace.</li>
            <li>Friendly, Diligent and Trustworthy. A team player and a proven leader.</li>
        </ul>
    </div>

    <script>
        function toggleDarkMode() {
            const body = document.body;
            const isDarkMode = body.classList.toggle('dark-mode');
            if (isDarkMode) {
                setDarkMode();
            } else {
                setLightMode();
            }
            localStorage.setItem('dark-mode', isDarkMode);
        }

        function setDarkMode() {
            document.body.style.setProperty('--bg-color', '#333');
            document.body.style.setProperty('--text-color', '#eee');
            document.body.style.setProperty('--header-color', '#eee');
            document.body.style.setProperty('--subheader-color', '#ccc');
            document.body.style.setProperty('--subsubheader-color', '#999');
            document.body.style.setProperty('--section-bg-color', '#444');
        }

        function setLightMode() {
            document.body.style.setProperty('--bg-color', '#f4f4f4');
            document.body.style.setProperty('--text-color', '#333');
            document.body.style.setProperty('--header-color', '#333');
            document.body.style.setProperty('--subheader-color', '#555');
            document.body.style.setProperty('--subsubheader-color', '#777');
            document.body.style.setProperty('--section-bg-color', '#fff');
        }

        // Check if dark mode is set in local storage
        const darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'true') {
            document.body.classList.add('dark-mode');
            setDarkMode();
        }
    </script>
</body>
</html>
