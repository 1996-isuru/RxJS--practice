//******pipeapable operator uses */
const { fromEvent } = rxjs;
const { map,throttleTime } = rxjs.operators;

const myObservarble = inteval(1000);

const mySubscription3 = myObservarble.pipe(
    map(value => value*2),
    throttleTime(2000)
)
.subscribe(
    (value) => console.log(value),
    (error) => console.log(error),
    () => console.log('completed')
)