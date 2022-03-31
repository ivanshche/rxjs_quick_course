import {interval} from "rxjs";
import {filter, map, scan, take} from "rxjs/operators";


const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const displayResult = document.querySelector('#problem .result')

const peoples = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]


btn.addEventListener("click", () => {
  btn.disabled = true
  let i = 0
  const canDo = []
  const interval = setInterval(()=>{
    if (peoples[i]) {
      if (peoples[i].age >= 18){
        canDo.push(peoples[i].name)
      }
      displayResult.textContent = canDo.join(' ')
      i++
    } else {
      clearInterval(interval)
      btn.disabled = false
    }
  },500)
})


rxjsBtn.addEventListener('click', () =>{

  rxjsBtn.disabled = true
  // функція інтервал задає час за яким показувати елементи кожні 500мс
  // на виході ми отримуємо стрім
  // задача: фільтруємо людей та виводимо результат
  interval(300)
      .pipe(
          take(peoples.length),
          filter(someValue => peoples[someValue].age >= 18),
          map(someValue => peoples[someValue].name),
          //для з'ґжнання всього в 1 метод
          // acc це новий масиі, значееея value,
          // acc.concat(value) - додаємо значення до нового масиву
          //а значення за замовчуваннм буде пустим масиваом []
          scan((acc, value) => acc.concat(value),[])
      )
      .subscribe(someResult => {
        // функція для підписання на данний стрім та отримати деякий результат
        // показуємо результат для шаблону в тегі з класом result
        // displayResult.textContent = someResult
        // через метод join можем обробити масив
        displayResult.textContent = someResult.join(' ')
      }, null, () => rxjsBtn.disabled=false);

})
