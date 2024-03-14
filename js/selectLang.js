import {langArray} from './lang.js'


const select = document.querySelector('select');

const allPossibleLangueges = ["ru", "en", "ua"]

console.log(location);
console.log(window.location);

select.addEventListener('change', changeURLLanguege);

// перенаправить на url с указанием языка
function changeURLLanguege(){
let lang = select.value
location.href = window.location.pathname + '#'+lang;
location.reload()
}

function changeLanguage (){
    let hash = window.location.hash
    hash = hash.substring(1)
    console.log(hash);

    if(!allPossibleLangueges.includes(hash)){
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    select.value = hash;
    changeLanguageEverywhere(hash)
    
}
changeLanguage()


function changeLanguageEverywhere(hash){

   
// тайтл всего документа
document.querySelector('title').innerHTML = langArray['title'][hash]


// вариант №1 - по ID (для каждого вручную)
// document.querySelector('#nav-about').innerHTML = langArray['nv-about'][hash]
// document.querySelector('#nav-portfolio').innerHTML = langArray['nv-portfolio'][hash]
// document.querySelector('#nav-conacts').innerHTML = langArray['nv-contacts'][hash]

// вариант№2 -по уникальным дата атрибутам
for(let key in langArray){
const elem = document.querySelector(`[data-lang=${key}]`)
if(elem){
    elem.textContent = langArray[key][hash]
}
}



// Вариант3 - многоиспользуемые по дата атрибутам
document.querySelectorAll('[data-lang2]').forEach((elem) => elem.innerHTML = langArray['nv-portfolio'][hash])



// вариант№3.1 - многоиспользуемым по классам для одинаковых
document.querySelectorAll('.teamProjLink').forEach((elem) => elem.innerHTML = langArray['livePageLink'][hash])
document.querySelectorAll('.teamProjLink2').forEach((elem) => elem.innerHTML = langArray['GithubLink'][hash])

console.log(document.querySelectorAll('.teamProjLink'));
// document.querySelector('#ice-p').innerHTML = langArray['ice-cream-description'][hash]
// document.querySelector('#film-p').innerHTML = langArray['filmoteka-description'][hash]
// document.querySelector('#pet-p').innerHTML = langArray['petly-services-description'][hash]




}


// const keys = Object.keys(langArray)
// console.log(keys);

// const values = Object.values(langArray)
// console.log(values);

// const opla = Object.values(values)
// console.log(opla);