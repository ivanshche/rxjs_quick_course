import {fromEvent, interval, switchMap} from "rxjs";
import {filter, map, tap, take, takeLast, takeWhile} from "rxjs/operators";
import {scan, reduce} from "rxjs/operators";


// const stream$ = interval(1000)
//   // use perators starting from method pipe
//   .pipe(
//     //tap use for debagg or for (put some value
//     // tap(v => console.log('tap: ', v)),
//     // operator map
//     // map(value => value * 3),
//     // if value/2 bez ostatka to ostalyaem
//     // filter(v=>v%2===0),
//     // for stopping interval
//     // take(5)
//     // take(7),
//     // takeLast(2)
//     // takeWhile(value => value<5)
//
//     //metod scan like method Redus in arrays
//     // scan((acc, value) => acc + value, 100)
//     // method reduce work with a finished stream.
//
//     take(5),
//     reduce((acc, value) => acc + value, 10)
//   )

// stream$.subscribe({
//   // next: i=> {
//   //   console.log('Next: ', i)
//   // },
//   next: i=> console.log('Next: ', i),
//   complete: () => console.log("completed")
// })


// for fromEvent
// fromEvent(document, 'click')
//   .subscribe(()=>{
//     const stream$ = interval(500)
//       .pipe(
//         tap(v => console.log('tap: ', v)),
//         take(3),
//         reduce((acc, value) => acc + value, 0)
//       )
//     stream$.subscribe({
//       next: i=> console.log('Next: ', i),
//       complete: () => console.log("completed")
//     })
//   })
//change 1 stream to another for no double subscribes
fromEvent(document, 'click')
  .pipe(
    switchMap(e=>{
      return interval(500)
        .pipe(
          tap(v => console.log('tap: ', v)),
          take(3),
          reduce((acc, value) => acc + value, 0)
        )
    })
  )
  .subscribe({
      next: i=> console.log('Next: ', i),
      complete: () => console.log("completed")
  })
