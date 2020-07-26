// import React from 'react';
// // const fetch = require('node-fetch')

// class Film extends React.Component {
//     state = {
//         indexes: [2, 6, 9],
//         films: []
//     }

//     index = async (index) => {
//         try {
//             let swApi = await fetch(`https://swapi.co/api/planets/${index}`);
//             console.log("hello")
//             swApi = await swApi.json();
//             swApi.residents.forEach(async (residentUrl) => {
//                 console.log("swApi")
//                 let residentApi = await fetch(`${residentUrl}`);
//                 residentApi = await residentApi.json()
//                 residentApi.films.forEach(async (filmUrl) => {
//                     console.log("residentApi")
//                     let filmApi = await fetch(`${filmUrl}`);
//                     filmApi = await filmApi.json();
//                     console.log(filmApi.title)
//                     if (this.state.films.indexOf(filmApi.title) === -1) {
//                         this.setState({
//                             films: [...this.state.films, filmApi.title]
//                         })
//                     }
//                 })
//             })
//         }
//         catch (error) {
//             console.error(error)
//         }
//     }
//     componentDidMount = () => {
//         this.index(2)
//     }

//     render() {
//         return (
//             <ul>

//                 {this.state.films.map((value, index) => {
//                     return (<li key={index}> {value}</li>)
//                 })}
//             </ul>
//         );
//     }
// }

// export default Film;