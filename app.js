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
let btnMainOne=document.querySelector('.button-one');
let btnMainTwo=document.querySelector('.button-two');

function firstSecondFetch(){
    if(main==1){
        fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${first}/${second}`).then(res => res.json()).then(data =>{
            secondInp.value = (Number(firstInp.value) * data.conversion_rate).toFixed(5);
            if(firstInp.value == ""){
                secondInp.value = "";
            }
    })
}
else if(main==2){
    fetch(`https://v6.exchangerate-api.com/v6/e3406c822cbde34a6789b861/pair/${second}/${first}`).then(res => res.json()).then(data =>{
        firstInp.value = (Number(secondInp.value) * data.conversion_rate).toFixed(5);
        if(secondInp.value == ""){
            firstInp.value = "";
        }
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
    if(firstInp.value.includes(".")){
        let items=firstInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        firstInp.value=items.join('.');
    }
    firstSecondFetch();
    internetConnection();
});

secondInp.addEventListener('input', () => {
    main=2;
    if(secondInp.value.includes(".")){
        let items=secondInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        secondInp.value=items.join('.');
    }
    firstSecondFetch();
    internetConnection();
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
    if(item[0] == 0){
        for(let i=1;i<=item.length;i++){
            if(item[1] != "."){
        if(item[i] == "1" || item[i] == "2" || item[i] == "3" || item[i] == "4" || item[i] == "5" || item[i] == "6" || item[i] == "7" || item[i] == "8" || item[i] == "9"){
            for(let j=0;j<i;j++){
                item[j]="";
            }
        }
    }
        if(item[i] == "."){
            for(let j=1;j<i;j++){
                item[j-1]="";
            }
        }
    }
    }
    firstInp.value=item.join('');
    internetConnection();

    
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

    if(item[0] == 0){
        for(let i=1;i<=item.length;i++){
            if(item[1] != "."){
        if(item[i] == "1" || item[i] == "2" || item[i] == "3" || item[i] == "4" || item[i] == "5" || item[i] == "6" || item[i] == "7" || item[i] == "8" || item[i] == "9"){
            for(let j=0;j<i;j++){
                item[j]="";
            }
        }
    }
        if(item[i] == "."){
            for(let j=1;j<i;j++){
                item[j-1]="";
            }
        }
    }
    }
    secondInp.value=item.join('');
    internetConnection();
    
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
        internetConnection();
    })
});

btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('click', () =>{
        second=itemTwo.textContent;
        choice(btnTwo,itemTwo);                
        firstSecondFetch();
        footerText();
        internetConnection();
    })
});

let threeLine=document.querySelector(".menu");
let menuThreeLine=document.querySelector(".menu-three-line");
threeLine.addEventListener("touchstart", () =>{
 menuThreeLine.classList.toggle('dis-none') ;  
})

function internetConnection() {
    if (!navigator.onLine) {
        internet.classList.remove("dis-none");
                    let firstOne=btnMainOne.getElementsByClassName('choice')[0];
                    let secondOne=btnMainTwo.getElementsByClassName('choice')[0];

                    if(main==1){
                        if(firstOne.innerHTML==secondOne.innerHTML){
                            secondInp.value=firstInp.value;
                            footerTextOne.textContent ="1 "+firstOne.innerHTML+" = 1 "+secondOne.innerHTML;
                            footerTextTwo.textContent ="1 "+secondOne.innerHTML+" = 1 " + firstOne.innerHTML;
                    }
                    else{
                        secondInp.value='';
                    }
                }
                else if(main==2){
                    if(firstOne.innerHTML==secondOne.innerHTML){
                        firstInp.value=secondInp.value;
                        footerTextOne.textContent ="1 "+firstOne.innerHTML+" = 1 "+secondOne.innerHTML;
                        footerTextTwo.textContent ="1 "+secondOne.innerHTML+" = 1 " + firstOne.innerHTML;
            }
            else{
                firstInp.value='';
            }
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
