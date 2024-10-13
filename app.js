CardsArray = [
        {   
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
        },
        {
            name:'hippo',
            icon:'<i class="fa-solid fa-hippo"></i>'
        },
        {
            name:'fish',
            icon:'<i class="fa-solid fa-fish"></i>'
        },
        {
            name:'horse',
            icon:'<i class="fa-solid fa-horse"></i>'
        },
        {
            name:'spider',
            icon:'<i class="fa-solid fa-spider"></i>'
        },
        {
            name:'cat',
            icon:'<i class="fa-solid fa-cat"></i>'
        },
        {
            name:'dog',
            icon:'<i class="fa-solid fa-dog"></i>'
        },
        {
            name:'hippo',
            icon:'<i class="fa-solid fa-hippo"></i>'
        },
        {
            name:'fish',
            icon:'<i class="fa-solid fa-fish"></i>'
        },
        {
            name:'horse',
            icon:'<i class="fa-solid fa-horse"></i>'
        },
        {
            name:'spider',
            icon:'<i class="fa-solid fa-spider"></i>'
        },
        {
            name:'cat',
            icon:'<i class="fa-solid fa-cat"></i>'
        }
]
shuffleCards();
const gameBoard = document.getElementById('gameBoard');
let flipedCard = []
let matchedPairs = 0;
displayCards();
function shuffleCards(){
    for(let i=CardsArray.length-1;i>=0;i--){
        let rand = Math.floor(Math.random()*(i+1));
        [CardsArray[i],CardsArray[rand]]=[CardsArray[rand],CardsArray[i]]
    }
}
function displayCards(){
    CardsArray.forEach((curr,index,arr)=> {
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        card.addEventListener('click',flipCard)
        gameBoard.append(card);
    });
}
function flipCard(){
    if(flipedCard.length<2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flipedCard.push(this);
    this.classList.remove('cardback');
    this.innerHTML = CardsArray[cardId].icon;
    console.log(this)

    if(flipedCard.length==2)
        setTimeout(checkMatch,1000);
    }
}
function checkMatch(){
    const card1Id = flipedCard[0].getAttribute('id');
    const card2Id = flipedCard[1].getAttribute('id');
    if(CardsArray[card1Id].name === CardsArray[card2Id].name){
        flipedCard[0].style.border = 'none';
        flipedCard[0].style.backgroundColor = '#f5e8ba';
        flipedCard[0].innerHTML ='';
        flipedCard[0].classList.remove('active');
        flipedCard[1].style.border = 'none';
        flipedCard[1].style.backgroundColor = '#f5e8ba';
        flipedCard[1].innerHTML ='';
        flipedCard[1].classList.remove('active');
        matchedPairs++;
        checkGameOver();
    }
    else{
        flipedCard[0].classList.add('cardback');
        flipedCard[0].innerHTML = '';
        flipedCard[1].classList.add('cardback');
        flipedCard[1].innerHTML = '';
    }
    flipedCard = [];
}
function checkGameOver(){
    if(matchedPairs==CardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}