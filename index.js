import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
  for (let index = 1; index <= 10; index++) {
    subscriber.next(index)
  }
  setTimeout(() => {
    console.log('time out')
  }, 2000)
  subscriber.next('finished')
  subscriber.complete()
})

const observer = {
  next: (val) => {
    console.log(`received value ${val}`)
  },
  error: (err) => {
    console.error(err)
  },
  complete: () => {
    console.info('completed the task')
  },
}

console.log('subscribing to the observable')
observable.subscribe(observer)
console.log('program finished')

// unicasting       one to one
// multicasting     one to many
