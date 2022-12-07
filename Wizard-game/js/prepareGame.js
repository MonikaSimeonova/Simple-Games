function prepareGame(){

    let playScreen = document.getElementsByClassName('play-game')[0];

    return {
        createWizard(initState){
            
            let wizardElement = document.createElement('div');
            wizardElement.style.backgroundImage = "url('./resourses/wizard.png')";
            wizardElement.style.position = 'absolute';
            wizardElement.style.width= initState.wizard.width + 'px';
            wizardElement.style.height= initState.wizard.height + 'px';
            wizardElement.style.top = initState.wizard.posY + 'px';
            wizardElement.style.left = initState.wizard.posX + 'px';
            
            playScreen.appendChild(wizardElement);
            this.wizardElement = wizardElement
            return wizardElement
        }
    }
}