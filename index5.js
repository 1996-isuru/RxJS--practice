//******uses of subject *****////

// console.log("ss");
// const { Subject } = rxjs;

// const mySubject = new Subject();

// const consumer1 = mySubject.subscribe({
//     next: (v) => console.log('observer1: ${v}')
// })

// const consumer2 = mySubject.subscribe({
//     next: (v) => console.log('observer2: ${v}')
// })

// mySubject.next(24);
// mySubject.next(35);

////////////////////////////////////////////////////////////////
//***********uses of behaviousubject *********////

const { BehaviouSubject } = rxjs;

const mySubject3 = new BehaviouSubject(0);
//methandi BehaviouSubject(0) se initial value ekak denn one "string int ona ekk wenn plwn"

const consumer3 = mySubject.subscribe({
    next: (v) => console.log('observer3: ${v}')
})

mySubject.next(1);
mySubject.next(3);

const consumer4 = mySubject.subscribe({
    next: (v) => console.log('observer4: ${v}')
})

mySubject.next(4);
//methnadi consumer4 3th print karnw 4th print krnw

