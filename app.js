let firstInp = document.querySelector(".input-one input");
let secondInp = document.querySelector(".input-two input");
let footerTextOne = document.querySelector('.input-footer-text-one')
let footerTextTwo = document.querySelector('.input-footer-text-two')
let btnOne = document.querySelectorAll('.button-one button');
let btnTwo = document.querySelectorAll('.button-two button');
let first = 'RUB';
let second = 'USD';
let btns = document.querySelectorAll('.buttons button');
let internet = document.querySelector('.internet');
let main;

btns.forEach(item => {
    item.addEventListener('click', () => {
        while (!navigator.onLine) {
            internet.classList.remove('dis-none');
            break;
        }

        while (navigator.onLine) {
            if (internet.classList != "dis-none") {
                internet.classList.add('dis-none')
            }
            break;
        }
    })
})

btns.forEach(item => {
    item.addEventListener('touchstart', () => {
        while (!navigator.onLine) {
            internet.classList.remove('dis-none');
            break;
        }

        while (navigator.onLine) {
            if (internet.classList != "dis-none") {
                internet.classList.add('dis-none')
            }
            break;
        }
    })
})


firstInp.addEventListener('input', () => {
    fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${first}/${second}`).then(res => res.json())
        .then(data => {
            secondInp.value = firstInp.value * data.conversion_rate;
            if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
            if (firstInp.value.length > 23) {
                let item = firstInp.value.split('');
                for (let i = 23; i < firstInp.value.length; i++) {
                    item[i] = "";
                }
                firstInp.value = item.join('');
            }
        })
        main=1;
})
secondInp.addEventListener('input', () => {
    fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${second}/${first}`).then(res => res.json())
        .then(data => {
            firstInp.value = secondInp.value * data.conversion_rate;
            if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
            if (secondInp.value.length > 23) {
                let item = secondInp.value.split('');
                for (let i = 23; i < secondInp.value.length; i++) {
                    item[i] = "";
                }
                secondInp.value = item.join('');
            }
        })
        main=2;
})

firstInp.addEventListener('input', () => {
    firstInp.value = firstInp.value.replace(/[^0-9.,]/g, '');
    firstInp.value = firstInp.value.replace(",", ".");
});
secondInp.addEventListener('input', () => {
    secondInp.value = secondInp.value.replace(/[^0-9.,]/g, '');
    secondInp.value = secondInp.value.replace(",", ".");

});

function choice(elements, selectedElement) {
    elements.forEach(element => {
        if (element === selectedElement) {
            element.classList.add("choice");
        } else {
            element.classList.remove("choice");
        }
    });
}

btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('click', () =>{
        choice(btnOne,itemOne);
                first=itemOne.textContent;
                fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${first}/${second}`).then(res => res.json())
                .then(data =>{
                    footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
                    if(main==1){
                        secondInp.value = firstInp.value * data.conversion_rate;
                        if (secondInp.value.includes('.')) {
                            let item = secondInp.value.split('.');
                            if (item[1].length > 5) {
                                item[1] = item[1].substring(0, 5);
                            }
                            secondInp.value = item.join('.');
                        }
                    }
                    else if(main==2){
                        firstInp.value=secondInp.value* data.conversion_rate;
                          if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
                    }    
                })
                fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${second}/${first}`).then(res => res.json())
                .then(data =>{
                    if(main==1){
                        secondInp.value = firstInp.value * data.conversion_rate;
                        if (secondInp.value.includes('.')) {
                            let item = secondInp.value.split('.');
                            if (item[1].length > 5) {
                                item[1] = item[1].substring(0, 5);
                            }
                            secondInp.value = item.join('.');
                        }
                    }
                    else if(main==2){
                        firstInp.value=secondInp.value* data.conversion_rate;
                          if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
                    }    
                    footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
                })
    })
})


btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('touchstart', () =>{
        choice(btnOne,itemOne);
                first=itemOne.textContent;                  
                fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${first}/${second}`).then(res => res.json())
                .then(data =>{
                    footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
                    if(main==1){
                        secondInp.value = firstInp.value * data.conversion_rate;
                        if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
                    }
                    else if(main==2){
                        firstInp.value=secondInp.value* data.conversion_rate;
                          if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
                    }    
                })
                fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${second}/${first}`).then(res => res.json())
                .then(data =>{
                    if(main==1){
                        secondInp.value = firstInp.value * data.conversion_rate;
                        if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
                    }
                    else if(main==2){
                        firstInp.value=secondInp.value* data.conversion_rate;
                          if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
                    }    
                    footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
                })
    })
})


btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('click', () =>{
        second=itemTwo.textContent
        choice(btnTwo,itemTwo);                
        fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${first}/${second}`).then(res => res.json())
        .then(data =>{
            if(main==1){
                secondInp.value = firstInp.value * data.conversion_rate;
                if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
            }
            else if(main==2){
                firstInp.value=secondInp.value* data.conversion_rate;
                  if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
            }    
            footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
        })
        fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${second}/${first}`).then(res => res.json())
        .then(data =>{
            if(main==1){
                secondInp.value = firstInp.value * data.conversion_rate;
                if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
            }
            else if(main==2){
                firstInp.value=secondInp.value* data.conversion_rate;
                  if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
            }    
            footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
        })
})
})



btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('touchstart', () =>{
        second=itemTwo.textContent
        choice(btnTwo,itemTwo);
        fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${first}/${second}`).then(res => res.json())
        .then(data =>{
            if(main==1){
                secondInp.value = firstInp.value * data.conversion_rate;
                if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
            }
            else if(main==2){
                firstInp.value=secondInp.value* data.conversion_rate;
                  if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
            }                   
            footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
        })
        fetch(`https://v6.exchangerate-api.com/v6/702070004d1a5c3b2a65243f/pair/${second}/${first}`).then(res => res.json())
        .then(data =>{
            if(main==1){
                secondInp.value = firstInp.value * data.conversion_rate;
                if (secondInp.value.includes('.')) {
                let item = secondInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                secondInp.value = item.join('.');
            }
            }
            else if(main==2){
                firstInp.value=secondInp.value* data.conversion_rate;
                  if (firstInp.value.includes('.')) {
                let item = firstInp.value.split('.');
                if (item[1].length > 5) {
                    item[1] = item[1].substring(0, 5);
                }
                firstInp.value = item.join('.');
            }
            }    
            footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
        })
})
})