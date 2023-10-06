function printDeckOfCards(cards) {
    let result = []
    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substring(card.length - 1);
        let valid = createCard(face, suit);
        result.push(valid)

    }


    function createCard(cardFace, cardSuite) {
        let validCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        }

        if (!validCard.includes(cardFace)) {
            console.log(`Invalid card: ${cardFace}${cardSuite}`);
            return
        }
        if (!cardFace.toUpperCase()) {
            console.log(`Invalid card: ${cardFace}${cardSuite}`);
            return
        }

        if (!validSuits.hasOwnProperty(cardSuite)) {
            console.log(`Invalid card: ${cardFace}${cardSuite}`)
            return
        }

        return `${cardFace}${validSuits[cardSuite].toString()}`

    }

    return `${result.join(" ")}`

}


console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']))
