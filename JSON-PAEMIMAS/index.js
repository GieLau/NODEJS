console.log('Labas Pasauli')

// //sinchroninis requestas
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => {
//     return response.json() 
//     //konvertuojam json info atgal i objekta
// })    
// .then(dataObject => {
//     // console.log(dataObject)
//     //is gauto json objekto paimama message reiksme ir atvaizduojama
//     document.getElementById('root').innerHTML = `<img src="${dataObject.message}" alt="">`
// })


// //Nuotraukos paemimas pagal suns veisle
// const veisle = "borzoi"

// fetch(`https://dog.ceo/api/breed/${veisle}/images/random`) 
// .then(response => response.json())
// .then(dataObject => {
//     console.log(dataObject)
//     if (dataObject.status == 'success') {
//     document.getElementById('root').innerHTML = `<img src="${dataObject.message}" alt="">`
//     }
// })


// Nuotraukos radimas ivedus suns veisle i input lauka
document.getElementById('submit').addEventListener('click', () => {
    const breed = document.getElementById('breed').value
    
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then((dataObject) => {
        if (dataObject.status === 'success') {
          document.getElementById('root').innerHTML = 
          `<img src="${dataObject.message}" alt="">`
        } else {
          document.getElementById('root').innerHTML = 
          `<h2>Pagal įvestą šuns veislę nuotraukos rasti nepavyko"`
        }
      })
  })
    