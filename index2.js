//***********example 1

//*****normaly use
// document.addEventListener('click', () => console.log('clicked'));

//*****using rxjs
// const { fromEvent } = rxjs;
// fromEvent(document, 'click').subscribe(() => console.log('clicked.'));

//*************exmple 2

//using vanilla JS
// let count = 0;
// document.addEventListener('click', () => console.log('clicked $(++count) times'));

//using rxjs
// const { fromEvent } = rxjs;
// const { scan } = rxjs.operators;

// fromEvent(document, 'click')
//     .pipe(scan(count => count + 1, 0))
//     .subscribe(count => console.log('clicked ${count} times.'));

