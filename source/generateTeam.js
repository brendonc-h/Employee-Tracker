module.exports = teamArray => {


    teamNames = teamArray.map(member => {
        switch (member.getRole()) {
            case ("Manager"):
                return `
        <div class="card">
        <div class="card-header>
        <h2 class="card-header name"></h2>
        <h2 class="card-header"> ${member.getRole()}</h2>
        
        <p>ID: ${member.getId()}</p>
        <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
        <p>Office: ${member.getOfficeNumber()}</p>
        </div>
        </div>
        `;
            case ("Intern"):
                return `
        <div class="card">
        <div class="card-header>
        <h2 class="card-header name"></h2>
        <h2 class="card-header"> Intern</h2>
        
        <p>ID: ${member.getId()}</p>
        <p>Email: <span><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
        <p>School: ${member.getSchool()}</p>
        </div>
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

