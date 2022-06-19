export default function initApp(color) {
    
    const changeColorButton = document.createElement('button');
    changeColorButton.className = 'button';
    changeColorButton.textContent = 'Изменить цвет страницы';
    document.body.append(changeColorButton);

    const colorButton = document.querySelector('.button');
    colorButton.addEventListener('click', (event)=>{
        const { target } = event;
        if(target){
            document.body.style.background = color;           
        };
    });
};