

//shorthand way using AXIOS to retrieve data from API.
//instantiated API url, axios.get, .then, .catch for errors

let url = 'https://swapi.dev/api/planets/1/'
// axios.get(url)
//     .then(res => console.log(res.data))
//     .catch(err => console.log("REJECTED", err));




//this is a more nested version of the example above. 

// axios.get(url)
//     .then(res => {
//         // console.log(res)
//         axios.get(res.data.residents[0])
//             .then(res => {
//                 console.log(res.data.name)
//             })
//             .catch(err => console.log("ERRIRRRRR", err))
//     })

//     .catch(err => {
//         console.log(err)
//     });


//here is a way to "promise chain" using close to the same syntax
//like above, but keeping the syntax short and sweet

axios.get(url)
    .then(res => {
        console.log(res.data)
        return axios.get(res.data.residents[0]) // having this 'return' with another axios.get, it signals a promise chain
    })                                         // meaning every '.then' after will be carried out, one by one                    
    .then(res => {
        console.log(res.data)
        return axios.get(res.data.films[0])
    }) 
    .then(res => {
        console.log(res.data.title)
    })

    .catch(err => console.log(err)); // only need one error in this chain for all promises