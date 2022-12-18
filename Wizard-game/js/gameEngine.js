
function start(state,game){
    game.createWizard(state);
    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function gameLoop (state,game){
    let {wizard} = state
    let {wizardElement} = game;
    console.log('gameLoop');

    

    modifyWizardPos(state,game)
    if(state.keys.Space){
        game.wizardElement.style.backgroundImage = "url('./resourses/wizard-fire.png')";
        game.createFireball(wizard,state.fireball)
    }else{
        game.wizardElement.style.backgroundImage = "url('./resourses/wizard.png')";
    }

    //render wizard
    wizardElement.style.top = wizard.posY + 'px';
    wizardElement.style.left = wizard.posX + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null,state,game))
}

function modifyWizardPos(state,game){
    let {wizard} = state

    if(state.keys.ArrowUp){
        wizard.posY = Math.max(wizard.posY - wizard.speed,0);
    }
    if(state.keys.ArrowDown){
        wizard.posY = Math.min(wizard.posY + wizard.speed,document.body.clientHeight - wizard.height);
    }
    if(state.keys.ArrowLeft){
        wizard.posX = Math.max(wizard.posX - wizard.speed,0);
    }
    if(state.keys.ArrowRight){
        wizard.posX = Math.min(wizard.posX + wizard.speed, document.body.clientWidth - wizard.width);
    }
}