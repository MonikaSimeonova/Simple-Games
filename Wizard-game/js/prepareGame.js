function prepareGame(){

    let playScreen = document.getElementsByClassName('play-game')[0];

    return {
        createWizard(initState){
            
            let wizardElemnt = document.createElement('div');
            wizardElemnt.style.backgroundImage = "url('./resourses/wizard.png')";
            wizardElemnt.style.position = 'absolute';
            wizardElemnt.style.width= initState.wizard.width + 'px';
            wizardElemnt.style.height= initState.wizard.height + 'px';
            wizardElemnt.style.top = initState.wizard.posY + 'px';
            wizardElemnt.style.left = initState.wizard.posX + 'px';
            
            playScreen.appendChild(wizardElemnt);
            this.wizardElemnt = wizardElemnt
            return wizardElemnt
        }
    }
}