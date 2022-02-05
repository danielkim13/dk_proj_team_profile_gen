function employeeCard(teamData) {
  const cardArray = [];

  const managerCard = teamData
    .filter((employee) => employee.constructor.name === "Manager")
    .map(({ name, id, email, officeNumber }) => {
      return `
          <div class="column is-one-quarter">
             <div class="card">
               <div class="card-content">
                 <div class="media">
                   <div class="media-left has-text-centered">
                     <figure class="image is-48x48">
                       <i class="fas fa-coffee fa-1x"></i>
                     </figure>
                   </div>
                   <div class="media-content">
                     <p class="title is-4">Manager</p>
                     <p class="title is-4">${name}</p>
                     <p class="subtitle is-6">ID # : ${id}</p>
                   </div>
                 </div>
   
                 <div class="content">
                   <p>E-mail: <a href="mailto:${email}">${email}</a></p>
                   <p>Office Number : ${officeNumber}</p>
                 </div>
               </div>
             </div>
           </div>
  `;
    });

  cardArray.push(managerCard);

  const engineerCard = teamData
    .filter((employee) => employee.constructor.name === "Engineer")
    .map(({ name, id, email, github }) => {
      return `
      <div class="column is-one-quarter">
             <div class="card">
               <div class="card-content">
                 <div class="media">
                   <div class="media-left has-text-centered">
                     <figure class="image is-48x48">
                       <i class="fas fa-code-branch fa-1x"></i>
                     </figure>
                   </div>
                   <div class="media-content">
                     <p class="title is-4">Engineer</p>
                     <p class="title is-4">${name}</p>
                     <p class="subtitle is-6">ID # : ${id}</p>
                   </div>
                 </div>
  
                 <div class="content">
                   <p>E-mail: <a href="mailto:${email}">${email}</a></p>
                   <p>GitHub username : <a href="https://github.com/${github}">${github}</a></p>
                 </div>
               </div>
             </div>
           </div>
  `;
    })
    .join("");

  cardArray.push(engineerCard);

  const internCard = teamData
    .filter((employee) => employee.constructor.name === "Intern")
    .map(({ name, id, email, school }) => {
      return `
    <div class="column is-one-quarter">
             <div class="card">
               <div class="card-content">
                 <div class="media">
                   <div class="media-left has-text-centered">
                     <figure class="image is-48x48">
                       <i class="fas fa-user-graduate fa-1x"></i>
                     </figure>
                   </div>
                   <div class="media-content">
                     <p class="title is-4">Intern</p>
                     <p class="title is-4">${name}</p>
                     <p class="subtitle is-6">ID # : ${id}</p>
                   </div>
                 </div>
   
                 <div class="content">
                   <p>E-mail: <a href="mailto:${email}">${email}</a></p>
                   <p>School : ${school}</p>
                 </div>
               </div>
             </div>
           </div>
    `;
    })
    .join("");

  cardArray.push(internCard);

  return cardArray.join("");
}

module.exports = (teamData) => {
  return `
  <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
         integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"
       />
       <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"
         integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"
       />
       <title>Team Profile Page</title>
     </head>
     <body>
       <nav class="navbar is-info">
         <div class="navbar-brand is-flex is-align-items-center pl-5">
           <p>My Awesome Team</p>
         </div>
       </nav>
       <main>
         <div class="columns m-1">
         ${employeeCard(teamData)} 
         </div>
       </main>
     </body>
   </html>
   `;
};
