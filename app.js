let firstInp = document.querySelector(".input-one input");
let secondInp = document.querySelector(".input-two input");
let footerTextOne=document.querySelector('.input-footer-text-one')
let footerTextTwo=document.querySelector('.input-footer-text-two')
let btnOne=document.querySelectorAll('.button-one button');
let btnTwo=document.querySelectorAll('.button-two button');
let first='RUB';
let second='USD';
let btns=document.querySelectorAll('.buttons button');
let internet=document.querySelector('.internet');

//click

btns.forEach(item =>{
    item.addEventListener('click',() =>{
        while(!navigator.onLine){
            internet.classList.remove('dis-none');
            break;
        }
        
        while(navigator.onLine){
            if(internet.classList != "dis-none"){
                internet.classList.add('dis-none')
            }
            break;
        }
    })
})

//touchstart
btns.forEach(item =>{
    item.addEventListener('touchstart',() =>{
        while(!navigator.onLine){
            internet.classList.remove('dis-none');
            break;
        }
        
        while(navigator.onLine){
            if(internet.classList != "dis-none"){
                internet.classList.add('dis-none')
            }
            break;
        }
    })
})


firstInp.addEventListener('change', () =>{
    fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${first}/${second}`).then(res => res.json())
    .then(data =>{
        secondInp.value=firstInp.value*data.conversion_rate;
        if (secondInp.value.includes('.')) {
            let item = secondInp.value.split('.');
            if (item[1].length > 5) {
                item[1] = item[1].substring(0, 5);
            }
            secondInp.value = item.join('.');
        }
    })
})
secondInp.addEventListener('change', () =>{
    fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${second}/${first}`).then(res => res.json())
    .then(data =>{
        firstInp.value=secondInp.value*data.conversion_rate;
        if (firstInp.value.includes('.')) {
            let item = firstInp.value.split('.');
            if (item[1].length > 5) {
                item[1] = item[1].substring(0, 5);
            }
            firstInp.value = item.join('.');
        }
    })
})

firstInp.addEventListener('input', () => {
    firstInp.value = firstInp.value.replace(/[^0-9.,]/g, '');
    firstInp.value = firstInp.value.replace(",",".");
});
secondInp.addEventListener('input', () => {
    secondInp.value = secondInp.value.replace(/[^0-9.,]/g, '');
    secondInp.value = secondInp.value.replace(",",".");

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

//click

btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('click', () =>{
        choice(btnOne,itemOne);
                first=itemOne.textContent;
                firstInp.value="";
                secondInp.value="";                    
                fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${first}/${second}`).then(res => res.json())
                .then(data =>{
                    footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
                })
                fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${second}/${first}`).then(res => res.json())
                .then(data =>{
                    footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
                })
    })
})

//touchstart

btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('touchstart', () =>{
        choice(btnOne,itemOne);
                first=itemOne.textContent;
                firstInp.value="";
                secondInp.value="";                    
                fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${first}/${second}`).then(res => res.json())
                .then(data =>{
                    footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
                })
                fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${second}/${first}`).then(res => res.json())
                .then(data =>{
                    footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
                })
    })
})

//click

btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('click', () =>{
        second=itemTwo.textContent
        choice(btnTwo,itemTwo);
        firstInp.value="";
        secondInp.value="";                    
        fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${first}/${second}`).then(res => res.json())
        .then(data =>{
            footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
        })
        fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${second}/${first}`).then(res => res.json())
        .then(data =>{
            footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
        })
})
})

//touchstart

btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('touchstart', () =>{
        second=itemTwo.textContent
        choice(btnTwo,itemTwo);
        firstInp.value="";
        secondInp.value="";                    
        fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${first}/${second}`).then(res => res.json())
        .then(data =>{
            footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
        })
        fetch(`https://v6.exchangerate-api.com/v6/9f6ee5b2aeaaf27ea8c24c14/pair/${second}/${first}`).then(res => res.json())
        .then(data =>{
            footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
        })
})
})
