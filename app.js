

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

// let url = 'https://deckofcardsapi.com/api/deck/new/draw/'

/**
 * 1
 */
// axios.get(url)
//     .then(res => {
//         let value = console.log(res.data.cards[0].value);
//         let suit = console.log(res.data.cards[0].suit);

//         console.log(`${value} ${suit}`);
//     })
//     .catch(err => console.log('Error:', err));


/**
 * 2
 */



// axios.get(url)
//     .then(res => {
//         let value = res.data.cards[0].value;
//         let suit = res.data.cards[0].suit;

//         console.log(res.data.cards[0].image);
//     })
//     .catch(err => console.log('Error:', err));





/**
 * 3
 */
document.addEventListener("DOMContentLoaded", async function () {
    try {
        // On DOMContentLoaded, refresh the deck of cards, resets to 52
        const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const deckID = res.data.deck_id;
        console.log(deckID);

        const button = document.getElementById('drawCardButton');
        const cardIMG = document.getElementById('cardIMG');
        const cardValueAndSuit = document.getElementById('cardValueAndSuit');

        // When the button is clicked, draw a card.
        button.addEventListener('click', async function () {
            try {
                const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
                console.log(drawRes.data);
                cardValueAndSuit.textContent = `${drawRes.data.cards[0].value} OF ${drawRes.data.cards[0].suit}`;
                cardIMG.src = drawRes.data.cards[0].image;
            } catch (error) {
                console.error("Error drawing a card:", error.message);
            }
        });

    } catch (error) {
        console.error("Error initializing the deck:", error.message);
    }
});





            
        //when the buton is clicked, draw a card.
        
        










