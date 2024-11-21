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

function firstSecondFetch(){
    if(main==1){
        fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${first}/${second}`).then(res => res.json()).then(data =>{
            secondInp.value = (Number(firstInp.value) * data.conversion_rate).toFixed(5);
    })
}
else if(main==2){
    fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${second}/${first}`).then(res => res.json()).then(data =>{
        firstInp.value = (Number(secondInp.value) * data.conversion_rate).toFixed(5);
    })
}
};

function footerText(){
    fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${first}/${second}`).then(res => res.json()).then(data =>{
        footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
    })
    fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${second}/${first}`).then(res => res.json()).then(data =>{
        footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
    })
};

firstInp.addEventListener('input', () => {
    main=1;
    firstSecondFetch();
});

secondInp.addEventListener('input', () => {
    main=2;
    firstSecondFetch();
});

firstInp.addEventListener('input', () => {
    firstInp.value = firstInp.value.replace(/[^0-9.,]/g, '');
    firstInp.value = firstInp.value.replace(",", ".");
    let item = firstInp.value.split('');
    let count=0;
    if (item[0] == '.') {
        item[0]="0.";
    }
    for (let i = 0; i < item.length ; i++) {
        if (item[i] === '.') {
            count++;
            if (count > 1) {
                item[i]="";
            }
        }
    }
    firstInp.value=item.join('');
    if(firstInp.value.includes(".")){
        let items=firstInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        firstInp.value=items.join('.');
    }
    firstInp.value = firstInp.value.toFixed(5);
    
});

secondInp.addEventListener('input', () => {
    secondInp.value = secondInp.value.replace(/[^0-9.,]/g, '');
    secondInp.value = secondInp.value.replace(",", ".");
    let item = secondInp.value.split('');
    let count=0;
    if (item[0] == '.') {
        item[0]="0.";
    }
    for (let i = 0; i < item.length ; i++) {
        if (item[i] === '.') {
            count++;
            if (count > 1) {
                item[i]="";
            }
        }
    }
    secondInp.value=item.join('');
    if(secondInp.value.includes(".")){
        let items=secondInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        secondInp.value=items.join('.');
    }
    secondInp.value=secondInp.value.toFixed(5);
    
    
});

function choice(elements, selectedElement) {
    elements.forEach(element => {
        if (element === selectedElement) {
            element.classList.add("choice");
        } else {
            element.classList.remove("choice");
        }
    });
};

btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('click', () =>{
        choice(btnOne,itemOne);
        first=itemOne.textContent;
        firstSecondFetch();
        footerText();
    })
});

btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('click', () =>{
        second=itemTwo.textContent
        choice(btnTwo,itemTwo);                
        firstSecondFetch();
        footerText();
    })
});

function internetConnection() {
    if (!navigator.onLine) {
        internet.classList.remove("dis-none");
        if(main == 1){
            secondInp.value="";
        }
        else{
            firstInp.value="";
        }
    } else {
        internet.classList.add("dis-none");
        firstSecondFetch();
        footerText();
    }
};

internetConnection();

window.addEventListener('online', internetConnection);
window.addEventListener('offline', internetConnection);

let threeLine=document.querySelector(".menu");
let menuThreeLine=document.querySelector(".menu-three-line");
threeLine.addEventListener("touchstart", () =>{
 menuThreeLine.classList.toggle('dis-none') ;  
})