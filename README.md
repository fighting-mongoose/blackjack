Problem this app solves: Boredom it's a game!

This project is a Blackjack game using Node.js, express
and mySQL. It is also using Handlebars as a template to display the HTML page.
This project will be deployed on Heroku.

Players will be able to play blackjack on multiple devices at once. Players will place bets against the dealer, choose to hit or stay and possibly split bets.

We may send funny tweets as a result of winning or losing to the dealer.
________________________________________________________________________

# BlackJack: Project 2 

## PSUEDO CODE:

1. Player signs in
2. Types in name.
3. Player is assigned to a group of players (active games, or start new game group)
4. Starting “wallet”
5. Dealer has starting “pot”
6. Players place a “bet”
7. Cards are shuffled
8. Two cards dealt to players and dealer
9. Second card is displayed
10. First player chooses: hit || stay
    • time limit for hit || stay
11. Loops through all players
12. Then dealer chooses: hit || stay
13. Dealer must “hit” if total score is under 16
14. If ACE , can equal 1 or 11
15. Face cards equal 10
16. If player gets two 10’s , option to “split”

17. If split: 
• Player places be on secondhand. Then chooses to “hit” || “stay”
• If one “busts” (over 21) player chooses to play next hand.
• If player wins, double “bet”
• If dealer wins: player loses “bet”

18. Game over:
Dealer “pot” == 0; || player “wallet” == 0;