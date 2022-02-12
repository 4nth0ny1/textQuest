import loadGameScreen from './gameScreen.js'

const welcomeDiv = document.querySelector('.welcome-message')
const playerForm = document.querySelector('.player-form')
const playerProfile = document.querySelector('.player-profile')
const playerStats = document.querySelector('.player-stats')
const container = document.querySelector('.container')

const gameStart = (e) => {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Text Quest'
    welcomeDiv.append(welcomeMessage)
    playerMenu()
}

const playerMenu = (e) => {
    const indPlayerForm = document.createElement('div')
    indPlayerForm.innerHTML = `
        <div class="player-form-container">
            <h2>Create your character</h2>
            <br>
            <p>After you enter your name, enter how much of each quality you would like to start with. You have a total of 100 points to use. Split them wisely.</p>
            <form class="player-form">
                <input class="player-name" placeholder="name" type="text" required id="playerName" >
                <input class="player-strength" type="number" required placeholder="strength" id="playerStrength" >
                <input class="player-magic" type="number" required placeholder="magic" id="playerMagic" >
                <input class="player-agility" type="number" required placeholder="agility" id="playerAgility" >
                <input class="player-luck" type="number" required placeholder="luck" id="playerLuck" >
                <hr>
                <button class="create-player-button" onClick="renderPlayer()">create player</button>
            </form>
        </div>
    ` 
    playerForm.append(indPlayerForm)
}

const renderPlayer = () => {
    const name = document.getElementById("playerName").value
    const strength = document.getElementById("playerStrength").value
    const magic = document.getElementById("playerMagic").value
    const agility = document.getElementById("playerAgility").value
    const luck = document.getElementById("playerLuck").value


    playerProfile.innerHTML = 
    `
        <ul class="profile-list">
            <h2>${name}</h2>
            <li>${strength}</li>
            <li>${magic}</li>
            <li>${agility}</li>
            <li>${luck}</li>
        </ul>
    `
    playerForm.remove()
    welcomeDiv.textContent = 'TextQuest'
    container.remove()
    loadGameScreen()
}


playerForm.addEventListener('click', playerMenu => {
    event.preventDefault();                 
})
gameStart()
