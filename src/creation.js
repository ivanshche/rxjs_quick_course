import {of, from, observable, Observable, fromEvent, interval} from "rxjs";
import * as stream from "stream";
import {map} from "rxjs/operators";

//of це метод в який ми передаємо данні 12457
// const stream$ = of(1,21,44,55555,7)
// //метод оф досзволяє створювати стріми з любих даних
// stream$.subscribe(value => {
//     console.log('value ', value)
// })


//============ method from
// const arr$ = from([1,2,3,555])
// const arr$ = from([1,2,3,555])
// arr$.subscribe(v => console.log(v))


//========MAIN CONSEPT LIBRARY RXJS   OBSERVEBLE
//create obl stream$ робимо її як новий ексземпляр класу обсервебл
//це функція яка примає параметер обсер
const stream$ = new Observable(obser => {
    //звертаємось до об'єкту та визиваємо метод next
    obser.next('first Value 1')

    //add asinhrony
    setTimeout(() => obser.next('test settimeout after 1000ms'),1000)
    setTimeout(() => obser.complete(),2500)
    // setTimeout(() => obser.error('brocen settimout on 3000ms'),3000)
    setTimeout(() => obser.next('test settimeout after 1000ms'),5000)
})

//підписуємось на об'єкт stream$ та виводимо його значеня в консоль
// stream$.subscribe(
//     value => console.log('value: ', value),
//     err => console.log(err),
//     () => console.log('test option complete')
// )


//також можна передати у метод subscribe об'єкт
//у об'єкта є 3 ключа
// stream$.subscribe({
//     next(val) {
//      console.log(val)
//     },
//     error(err){
//         console.log(err)
//     },
//     complete(){
//         console.log('something here complete))')
//     }
// })


// //============ method fromevent створює стрім з подій(собитие)
// fromEvent(document.querySelector("canvas"), "mousemove")
//   // додаємо метод pipe
//   .pipe(
//     // передаємо метод map щоб подія eventoo мала читабельний формат
//     // map — это оператор, который преобразует данные, применяя функцию
//     map(e=>({
//       o: e.offsetX,
//       g: e.offsetY,
//       // завдяки контексту ми вже можемо рисувати
//       ctx: e.target.getContext('2d')
//
//     }))
//   )
//   .subscribe(eventoo =>{
//       // console.log(eventoo)
//     eventoo.ctx.fillRect(eventoo.o, eventoo.g, 3,3)
//     eventoo.ctx.fillStyle = "#FF0000";
//   })
//
// const btnclaer$ = fromEvent(document.getElementById('clear'),'click')
// btnclaer$.subscribe(()=>{
//   const pic = document.querySelector("canvas")
//   pic.getContext('2d').clearRect(0,0,pic.width,pic.height)
// })


// ====== method interval
const somesubscription = interval(500).subscribe(somevalue =>{
  console.log(somevalue)
})

setTimeout(()=>{
  somesubscription.unsubscribe()
}, 3000)
