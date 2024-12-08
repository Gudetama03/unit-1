/* 
Simple breakdown of how the game works:
1. Game starts with a player, and a dealer(cpu)
2. the player gets 2 cards face up, while the dealer gets one card face up and one face down
3. if dealer gets blackjack(score of 21) he reveals card and wins unless the player also has blackjack(score of 21), then it is a push(which basically means no one wins)
4. if the dealer has no blackjack, his second card remains hidden, and the player is presented with options
    a. Stand – End your turn with the current score, it goes to the dealer then
    b.Hit – Draw another card face up, if you dont get blackjack(21) or bust(over 21) you can keep hitting
5.Then its the dealers turn, 
    a.if he has lower than 17, he has to keep drawing until he reaches atleast 17. 
    b.If he is 17 or over he has to stand

6. Whoever has highest score<=21  will win

*/


/* 
Game logic(pseudocode):
1. Setup game deck(playing cards in array)
2. Setup liveDeck(cards remaining in play)
3. Setup used cards(cards no longer in play)
4. Create a score counter for player, and for dealer
5. Player counter visible, while dealer counter only shows the score of the face up cards
6. Create the play option buttons (hit and stand)
7. Setup play area 
    a.section for player cards
    b.section for dealer cards
8. Start game
    a. Give two random cards from deck to player
    b. Push the used cards into in usedCards array, and then push the remaining cards into the liveDeck
    c. Take the value of cards and add them to player counter
    d. Give two random cards to dealer, one face up and one face down, do same logic to cards.
    e. Only take the value of face up cards to counter
    f. Give player 2 options, hit or stand
        a. If hit, add a random card from liveDeck to hand
        b. Check if score>=21, if false then bust, otherwise add value to player counter, and allow to hit or stand again
        c. If stand, reveal dealer face down card
            a.If counter<17 must hit until reach 17+
            b.If councter>=17, stand
    g. check win, compare values of dealer and player
        a. If dealer>player (no more than 21) dealer win
        b. if player>dealer (no more than 21 ) player win
        c. if player==dealer push (no one wins)

*/

const deck = [  
    // Hearts  
    { id: 0, card: "Ace of Hearts", link: "./resources/cards/ace_of_hearts.png" },  
    { id: 1, card: "2 of Hearts", link: "" },  
    { id: 2, card: "3 of Hearts", link: "" },  
    { id: 3, card: "4 of Hearts", link: "" },  
    { id: 4, card: "5 of Hearts", link: "" },  
    { id: 5, card: "6 of Hearts", link: "" },  
    { id: 6, card: "7 of Hearts", link: "" },  
    { id: 7, card: "8 of Hearts", link: "" },  
    { id: 8, card: "9 of Hearts", link: "" },  
    { id: 9, card: "10 of Hearts", link: "" },  
    { id: 10, card: "Jack of Hearts", link: "" },  
    { id: 11, card: "Queen of Hearts", link: "" },  
    { id: 12, card: "King of Hearts", link: "" },  

    // Diamonds  
    { id: 13, card: "Ace of Diamonds", link: "" },  
    { id: 14, card: "2 of Diamonds", link: "" },  
    { id: 15, card: "3 of Diamonds", link: "" },  
    { id: 16, card: "4 of Diamonds", link: "" },  
    { id: 17, card: "5 of Diamonds", link: "" },  
    { id: 18, card: "6 of Diamonds", link: "" },  
    { id: 19, card: "7 of Diamonds", link: "" },  
    { id: 20, card: "8 of Diamonds", link: "" },  
    { id: 21, card: "9 of Diamonds", link: "" },  
    { id: 22, card: "10 of Diamonds", link: "" },  
    { id: 23, card: "Jack of Diamonds", link: "" },  
    { id: 24, card: "Queen of Diamonds", link: "" },  
    { id: 25, card: "King of Diamonds", link: "" },  

    // Clubs  
    { id: 26, card: "Ace of Clubs", link: "" },  
    { id: 27, card: "2 of Clubs", link: "" },  
    { id: 28, card: "3 of Clubs", link: "" },  
    { id: 29, card: "4 of Clubs", link: "" },  
    { id: 30, card: "5 of Clubs", link: "" },  
    { id: 31, card: "6 of Clubs", link: "" },  
    { id: 32, card: "7 of Clubs", link: "" },  
    { id: 33, card: "8 of Clubs", link: "" },  
    { id: 34, card: "9 of Clubs", link: "" },  
    { id: 35, card: "10 of Clubs", link: "" },  
    { id: 36, card: "Jack of Clubs", link: "" },  
    { id: 37, card: "Queen of Clubs", link: "" },  
    { id: 38, card: "King of Clubs", link: "" },  

    // Spades  
    { id: 39, card: "Ace of Spades", link: "" },  
    { id: 40, card: "2 of Spades", link: "" },  
    { id: 41, card: "3 of Spades", link: "" },  
    { id: 42, card: "4 of Spades", link: "" },  
    { id: 43, card: "5 of Spades", link: "" },  
    { id: 44, card: "6 of Spades", link: "" },  
    { id: 45, card: "7 of Spades", link: "" },  
    { id: 46, card: "8 of Spades", link: "" },  
    { id: 47, card: "9 of Spades", link: "" },  
    { id: 48, card: "10 of Spades", link: "" },  
    { id: 49, card: "Jack of Spades", link: "" },  
    { id: 50, card: "Queen of Spades", link: "" },  
    { id: 51, card: "King of Spades", link: "" }  
]


// Change image 
const imageTest=document.getElementById("test")
imageTest.src=deck[0].link
