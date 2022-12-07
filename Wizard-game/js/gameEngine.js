
function start(state,game){
    game.createWizard(state);
    window.requestAnimationFrame(gameLoop.bind(null,state,game))
}

function gameLoop (state,game){
    let {wizard} = state
    let {wizardElemnt} = game;
    console.log('gameLoop');

    modifyWizardPos(state,game)

    //render wizard
    wizardElemnt.style.top = wizard.posY + 'px';
    wizardElemnt.style.left = wizard.posX + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null,state,game))
}

function modifyWizardPos(state,game){
    let {wizard} = state

    if(state.keys.ArrowUp){
        wizard.posY = wizard.posY - wizard.speed;
    }
    if(state.keys.ArrowDown){
        wizard.posY = wizard.posY + wizard.speed;
    }
    if(state.keys.ArrowLeft){
        wizard.posX = wizard.posX - wizard.speed;
    }
    if(state.keys.ArrowRight){
        wizard.posX = wizard.posX + wizard.speed;
    }
}