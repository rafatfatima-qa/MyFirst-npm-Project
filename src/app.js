/* Fetch all users name and email */
// fetch ('https://jsonplaceholder.typicode.com/users'). then( function (response){
//     //console.log(response, 'Response');
//     return response.json();

// }).then (function (usersArray){
//     document.getElementById('allUsers').innerHTML = usersArray.map(user => 
//         `<div>
//             <div class="user-card">
//             <h3>${user.username}</h3>
//             <div class = "user-email">${user.email}</div>
//             <button id="btnMore" onclick = "alert('Id:${user.id} - Address:${user.address.street} - Phone:${user.phone} - Website:${user.website} Company:${user.company.name}')">More...</button>
//             </div>
//         </div>`
//     ).join('')
    
// });

fetch ('https://jsonplaceholder.typicode.com/users'). then( function (response){
    //console.log(response, 'Response');
    return response.json();

}).then (function (usersArray){
    document.getElementById('allUsers').innerHTML = usersArray.map(user => 
        `<div>
            <div id="user-card">
            <h3>${user.username}</h3>
            <div class = "user-email">${user.email}</div>
            <button id = "btnMore" onclick = "getElementById('moreInfo').innerHTML='ID: ${user.id}<br> Address: ${user.address.street} <br> Phone: ${user.phone} <br> Website: ${user.website} <br> Company: ${user.company.name}'">More...</button>
            <div id = "demo"></div>
            </div>
        </div>`
    ).join('')
    
});




     



   
   