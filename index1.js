// console.log("ll");

const { Observable } = rxjs;

myObservarble = Observable.create(observer => {
  observer.next(53); //next eken wenne data return karanw
  observer.next(25);
  observer.next(335); 

  observer.error('error occured.');
  //error ekak awoth yata eka print wen ne
 //***or***//
  observer.complete('completed.');
  //complete unata passe aye data yawnn be. ethakota yata eka print wen ne

  observer.next(35);
})

// myObservarble.subscribe(); 
//subscribe karam tham value gnn plwn.
//me subscribe eken function ekak pass karl data gnn plwn. thw object ekak pass
//karla data gann plwn

///////*********using obeject*************///////

// const observer = {
//   next: (value) => console.log(value),
//   error: (error) => console.log(error),
//   complete: () => console.log('completed'),
// }
// myObservarble.subscribe(observer);

//////////******using function*******/////

// myObservarble.subscribe(
//   (value) => console.log(value),
//   (error) => console.log(error),
//   () => console.log('completed')
// );

//how to unsubscribe
// const mySubscription = myObservarble.subscribe(
//   (value) => console.log(value),
//   (error) => console.log(error),
//   () => console.log('completed')
// );
// mySubscription.unsubscribe();

// uses of unsubscribe
// myObservarble2 = Observable.create(observer => {
//   const id = setInterval(() => {
//     observer.next('Hi')
//   }, 1000);
// })
// const mySubscription2 = myObservarble2.subscribe(
//   (value) => console.log(value),
//   (error) => console.log(error),
//   () => console.log('completed')
// );
// setTimeout(() => {
//   mySubscription2.unsubscribe();
// }, 3000);




