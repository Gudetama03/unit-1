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