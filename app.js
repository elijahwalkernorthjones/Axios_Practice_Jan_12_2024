

//shorthand way using AXIOS to retrieve data from API.
//instantiated API url, axios.get, .then, .catch for errors

// let url = 'https://swapi.dev/api/planets/1/'
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

// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//         return axios.get(res.data.residents[0]) // having this 'return' with another axios.get, it signals a promise chain
//     })                                         // meaning every '.then' after will be carried out, one by one                    
//     .then(res => {
//         console.log(res.data)
//         return axios.get(res.data.films[0])
//     }) 
//     .then(res => {
//         console.log(res.data.title)
//     })

//     .catch(err => console.log(err)); // only need one error in this chain for all promises





/**
 * NUMBERS API QUESTIONS
 */


// let url = 'http://numbersapi.com/4/'

/**
* 1
**/

// axios.get(url)
//     .then(res => console.log(res.data));     // gives random fact about the number four.



/**
* 2
**/
//the long way...
// let fiveNumberFacts = [];

// for(let i=1; i < 6; i++){
//     fiveNumberFacts.push(
//         axios.get(`http://numbersapi.com/${i}/`)
//     )
// }
// Promise.all(fiveNumberFacts)
//     .then(numArr => (numArr.forEach(n => console.log(n.data))
//     ))
// the short way using the API's built in method


/**
* 3
**/

// axios.get('http://numbersapi.com/4')
//     .then(res => {
//         console.log(res.data)
//         return axios.get('http://numbersapi.com/4')
//     })
//     .then(res => {
//         console.log(res.data)
//         return axios.get('http://numbersapi.com/4')
//     })
//     .then(res => {
//         console.log(res.data)
//         return axios.get('http://numbersapi.com/4')
//     })
//     .then(res => {
//         console.log(res.data)
//     })

//     Promise.all()

//     .catch(err => console.log('ERROR', err))

//3 revised 

// const requests = [
//     axios.get('http://numbersapi.com/4'),
//     axios.get('http://numbersapi.com/4'),
//     axios.get('http://numbersapi.com/4'),
//     axios.get('http://numbersapi.com/4')
// ];

// Promise.all(requests)
//     .then(responses => {
//         responses.forEach(res => {
//             console.log(res.data);
//         });
//     })
//     .catch(err => console.log('ERROR', err));


/** 
 * DECK OF CARDS API QUESTIONS
 */
// const shuffleCards = function(){
//     axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then(res => console.log(res.data.deck_id))
//     }
    // shuffleCards()

let url = 'https://deckofcardsapi.com/api/deck/new/draw/'

/**
 * 1
 */
axios.get(url)
    .then(res => {
        let value = console.log(res.data.cards[0].value);
        let suit = console.log(res.data.cards[0].suit);

        console.log(`${value} ${suit}`);
    })
    .catch(err => console.log('Error:', err));






/**
 * 2
 */







/**
 * 3
 */