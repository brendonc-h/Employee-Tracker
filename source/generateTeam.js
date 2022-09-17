module.exports = teamArray => {


    teamNames = teamArray.map(member => {
        switch (member.getRole()) {
            case ("Manager"):
                return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-header name">${member.getName()}</h2>
            <h2 class="fas fa-mug-hot"> ${member.getRole()} </h2>
        </div>
            <p class="id">ID: ${member.getId()}</p>
            <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
            <p class="office">Office: ${member.getOfficeNumber()}</p>
        </div>
        `;
            case ("Intern"):
                return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-header name">${member.getName()}</h2>
            <h2 class="fas fa-user-graduate""> ${member.getRole()} </h2>
        </div>
            <p class="id">ID: ${member.getId()}</p>
            <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
            <p class="school">School: ${member.getSchool()}</p>
        </div>
        `;
            case ("Engineer"):
                return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-header name">${member.getName()}</h2>
            <h2 class="fas fa-glasses""> ${member.getRole()} </h2>
        </div>
            <p class="id">ID: ${member.getId()}</p>
            <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
            <p>GitHub: <span><a href="https://gitgub.com/${member.getGitHub()}" target="_blank">https://github.com/${member.getGitHub()}</a></span></p>
        </div>
        `;

            case ("Engineer"):
                return `
        <div class="card">
        <div class="card-header>
        <h2 class="card-header name"></h2>
        <h2 class="card-header"> Engineer</h2>
        
        <p>ID: ${member.getId()}</p>
        <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
        <p>GitHub: ${member.getGitHub()}</p>
        </div>
        </div>
        `;
            default:
                return;
        }
    });

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <title>My Team</title>
    </head>
    <body>
    <header><h1>My Team</h1></header>
    <section>
    ${teamNames.join("")}
    </section>
    </body>
    </html>`
};

