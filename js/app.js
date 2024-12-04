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





*/