
let compScore = 0
let userScore = 0

function getComuterChoice(){
    choices = ['rock','paper','scissors']
    random_index = Math.floor(Math.random()*3)
    return choices[random_index]
}


function playRound(playrSelection, computerSelection){
    playrSelection = prompt('enter your choice: ').toLowerCase()
    computerSelection = getComuterChoice()
    
    if (playrSelection === computerSelection){
        console.log('it is a draw')
    }
    else if (
        (computerSelection==='rock' && playrSelection==='scissors')||
        (computerSelection==='paper' && playrSelection === 'rock')||
        (computerSelection==='scissors' && playrSelection==='paper')
    ){
        console.log(`You lose! ${computerSelection} beats ${playrSelection} `)
        compScore++
    }else{
        console.log(`You win! ${playrSelection} beats ${computerSelection} `)
        userScore++
    }
    console.log(`current score-  computer: ${compScore}  user: ${userScore}`)


}

function game(){
    while(compScore <5 && userScore <5){
        playRound()
    }
    if (userScore > compScore){
        console.log(`you winned with score ${userScore} to ${compScore}`)
    }else{
        console.log(`you losed with score ${userScore} to ${compScore}`)
    }
}
game()



// if (playrSelection === computerSelection){
//     console.log('it is a draw!')
// }
// else if(playrSelection==='rock'){
//     if (computerSelection === 'paper'){
//         console.log(`You lose! ${computerSelection} beats ${playrSelection}`)
//     }
//     else{
//         console.log(`You win! ${playrSelection} beats ${computerSelection}`)
//     }
// }
// else if(playrSelection==='paper'){
//     if (computerSelection === 'scissors'){
//         console.log(`You lose! ${computerSelection} beats ${playrSelection}`)
//     }
//     else{
//         console.log(`You win! ${playrSelection} beats ${computerSelection}`)
//     }
// }
// else if(playrSelection==='scissors'){
//     if (computerSelection === 'rock'){
//         console.log(`You lose! ${computerSelection} beats ${playrSelection}`)
//     }
//     else{
//         console.log(`You win! ${playrSelection} beats ${computerSelection}`)
//     }
// }