class game {
    constructor(parentElement, size = 4) {
        let gameFieldElement = document.createElement('div', {class: 'game'});
        parentElement.appendChild(gameFieldElement);

        let headerElement = document.createElement('div', {class: 'header'});
        gameFieldElement.appendChild(headerElement);

        this.rating = 0;

        headerElement.innerHTML = 'Rating ' + this.rating;

        let fieldElement = document.createElement('div', {class: 'field'});
        gameFieldElement.appendChild(headerElement);

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                let cellElement = document.createElement('div', {class: 'cell'});

                if(Math.random() > 0.8) {
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }

                gameFieldElement.appendChild(headerElement);
            }
        }
    }
}