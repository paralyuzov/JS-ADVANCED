function playingCards(cardFace, cardSuite) {
    let validCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if (!validCard.includes(cardFace)) {
        throw new Error
    }
    if (!cardFace.toUpperCase()) {
        throw new Error;
    }

    if (!validSuits.hasOwnProperty(cardSuite)) {
        throw new Error;
    }

    return `${cardFace}${validSuits[cardSuite].toString()}`

}
console.log(playingCards('1', 'H'))