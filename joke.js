import { Axios } from 'axios'
import { from, Observable, of } from 'rxjs'

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
of(numbers).subscribe({
  next: (x) => console.log(x),
  complete: console.log('complete'),
})

// If the of() operator is not used.
// const numberObservable = new Observable((s) => {
//   let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//   for (const n of nums) {
//     s.next(n)
//   }
//   s.complete()
// })

const jokeObservable = from(fetch('https://api.chucknorris.io/jokes/random'))
const subscription = jokeObservable.subscribe({
  next: (joke) => console.log(joke),
  error: (err) => console.error(err),
})
