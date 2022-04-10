import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";


document.addEventListener("click", ()=>{

  // const stream$ = new Subject()

  // other construct BehaviorSubject and send in them some text
  // const stream$ = new BehaviorSubject('some text')

  // other streem replay subject
  // if 1 so despach 1 meaning Kamradovich
  const stream$ = new ReplaySubject(1)

  // stream$.subscribe(y=>console.log("some text: ",y))
  stream$.next('hello')
  stream$.next('Kamrad')
  stream$.next('Kamradovich')
  stream$.subscribe(y=>console.log("some text: ",y))

})
