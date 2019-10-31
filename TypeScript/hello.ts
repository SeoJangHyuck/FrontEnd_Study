// let myNickname: string = 'happy';
// let thisYear: number = 17;

// let arr: number[] = [1,2,3];
// let arrA: [string, number];
// arrA = ["tuple",100];

// enum weekDay {Mon, Tue, Wed, Thu = Tue + Wed};
// let thu2: number = 10 * 2;
// enum weekDay2 {Mon = 10, Tue, Wed = 10 << 2, Thu = thu2};
// enum weekDay3 {Mon = "Monday", Tue= "Tuesday"};
// console.log("1. " + JSON.stringify(weekDay));
// console.log("2. " + JSON.stringify(weekDay2));
// console.log("3. " + JSON.stringify(weekDay3));
// console.log(`4.  Mon=${weekDay.Mon}, Tue=${weekDay["Tue"]}, Wed=${weekDay.Wed}`);
// console.log(`5. 0=${weekDay[0]} 1=${weekDay[1]} 3=${weekDay[weekDay.Wed]}`)

// let day2: weekDay3 = weekDay3.Mon;
// console.log(day2); 

// let number = 50;
// console.log(typeof number, number.toFixed(1));

// let number2: Object = 50;
// console.log(typeof number2);

// let number3: any = 50;
// console.log(typeof number3, number3.toFixed(1));

// let number4: any = "hi";
// console.log(typeof number4, number4.charAt(0));

// let mArr: any[] = [1, "hi", true];
// let mArr2: (number|string|boolean)[] = [1, "hi", true];

// console.log(mArr2)

// let text:string = "";
// let statusActive:number = 0;
// let isEnabled: boolean = true;
// if(statusActive || text){
//     console.log("1");
// }
// if(isEnabled && 2 > 1){
//     console.log("2");
// }

// let com: any = "hi";

// switch(com){
//     case "hi":
//         console.log("hi");
//         break;
//     case 0:
//         console.log(0);
//         break;
// }

// let islands = ["je","geo","jin","gang","nam"];

// for(let index in islands){
//     console.log(index, islands[index]);
// }

// let fruits: any = {"a": "apple", "b": "banana", "c": "cherry"};

// for(let property in fruits){
//     console.log(property, fruits[property]);
// }

// let itMap = new Map([["one", 1],["one", 2]]);
// itMap.set("one", 3);
// for(let entry of itMap){
//     console.log(entry);
// }
// console.log(itMap.get("one"));

// let map: {[key: string]: number;} = {};
// map["one"] = 1;
// map["one"] = 2;
// map["one"] = 3;
// for(let entry in map){
//     console.log(entry);
// }
// console.log(map["one"]);

// let {id: nameN1, phoneN: nameN2} = {id: "sjh", phoneN: 111};
// console.log(nameN1, nameN2);

// function printPro(obj){
//     let name = "";
//     let nationality = "";

//     name = (obj.name == undefined) ? "anonymous" : obj.name;
//     nationality = (obj.nationality == undefined) ? "?" : obj.nationality;

//     console.log(name);
//     console.log(nationality);
// }
// printPro({name: "sjh"});

// function printPro2({name, nationality = "?"}){
//     console.log(name);
//     console.log(nationality);
// }
// printPro2({name: "happy"});

// type C = { a: string, b?: number};
// function fruit({a,b}:C): void{
//     console.log(a,b);
// }
// fruit({a: "apple", b:10});
// fruit({a: "apple"});

// let NN = ["one","two","three","four","five"];
// let num1 = NN[0];
// let num2 = NN[1];

// function f([first, second]:[number, string]){
//     console.log(first);
//     console.log(second);
// }
// f([100, "hello"]);

// let[first, ...second] = [1, 2, 3, 4];
// console.log(first);
// console.log(second);

// let arrN: number[] = [1, 2];
// let arrN2: number[] = [...arrN, 3, 4];
// console.log("1번: ", arrN2);
// let [firstItem, ...rest]: [number, number, number] = [10, 20, 30];
// console.log("2번: ", firstItem);
// console.log("3번: ", rest);
// console.log("4번: ", rest[0]);

// function pow(x: number, n:number = 2):number{
//     return x**n;
// }
// console.log(pow(10));
// console.log(pow(10,4));

// function concat(...restParameter){
//     return restParameter.join('');
// }
// console.log(concat("a", "b", 1, 2, true, false))

// let person = {
//     name: "Happy",
//     hello: function(name2: string){
//         return `Hello, ${this.name + name2}`;
//     } 
// };
// console.log(person.hello("World"));

// interface PersonType{
//     name: string;
//     hello(this: PersonType, name2: string): string;
// };
// let typedPerson: PersonType = {
//     name: "Happy",
//     hello: function(this: PersonType, name2: string): string{
//         let message = `Hello, ${this.name + name2}`;
//         return message;
//     }
// };
// console.log(typedPerson.hello("World"));

// type EchoCallbackType = (message: string) => void;
// let callbackEcho:EchoCallbackType = message => message;
// let callbackEchoWithLength: EchoCallbackType = message => `${message}(${message.length})`;
// function echoFunction2(message: string, callback){
//     return callback(message);
// }
// let responseEcho = echoFunction2("hello", callbackEcho);
// let responseEcho2 = echoFunction2("hello", callbackEchoWithLength);
// console.log(responseEcho);
// console.log(responseEcho2);

// function concat3<T>(strs: T, strs2: T): T;
// function concat3(strs: any, stars2: any){
//     return strs + stars2;
// }
// console.log(concat3<string>("abc", "123"));

// function concat6<T extends string | number>(strs: T, strs2: T): T;
// function concat6(strs: any, strs2: any){
//     return strs + strs2;
// }
// console.log(concat6<string | number>("abc", 123));

// let mapArr: any = [];
// function put<T, T2>(strs: T, strs2: T2): T;
// function put(idx: any, str: any){
//     mapArr[idx] = str;
// }
// function get<T, T2>(idx: T): T2;
// function get(idx: any){
//     return mapArr[idx];
// }
// put<number, string>(1, "hello");
// console.log(get<number, string>(1));

// let myMap = new Map();
// myMap.set(1, "one");
// myMap.set("2", "two");
// for(let v of myMap){
//     console.log(v);
// }
// let mapIter = myMap[Symbol.iterator]();
// console.log(mapIter.next().value);
// console.log(mapIter.next().value);

// let list: Map<number, string> = new Map<number, string>();
// list.set(1, "one");
// list.set(2, "two");
// list.set(3, "three");
// console.log(list);
// if(list.delete(2)){
//     console.log(list);
// }
// list.clear();
// console.log(list); 

// const mPromise = new Promise((resolve, reject) => {
//     resolve(1);
// });
// mPromise.then(res =>{
//     console.log(typeof res, res);
// });

// const basicPromise = new Promise((resolve, reject) => {
//     reject("Error!");
// }).catch(err => {
//     console.log(err);
// });

// let chainingPromise = new Promise((resolve, reject) => {
//     resolve(1);
// }).then(value => {
//     console.log(value);
//     return 2;
// }).then(value => {
//     console.log(value);
//     throw "Exeption!";
// }).catch(err => {
//     console.log(err);
// });

// const promiseAsync = new Promise((resolve, reject) => {
//     let sec: number = (Math. floor(Math.random() * 5) + 1);
//     setTimeout(isTrue => {
//         if(isTrue){
//             resolve(sec);
//         }
//     }, sec * 1000, true);
// }).then(res => {
//     console.log(res + "s");
// });

// function delay(msg) {
//     let ms: number = Math.floor(Math.random() * 1000) + 1;
//     setTimeout(function(){
//         console.log(msg);
//     },ms);
// };
// function async(){
//     delay("hi1");
//     delay("hi2");
//     delay("hi3");
// }
// async();

// function asyncDelay(order:number){
//     return new Promise((resolve,reject) => {
//         let ms: number = Math.floor(Math.random() * 1000)+ 1;
//         setTimeout(function(){
//             console.log("작업 완료: " + order);
//             resolve(order);
//         }, ms);
//     }).then();
// }
// function syncResultPromise(){
//     let p1 = asyncDelay(1);
//     let p2 = asyncDelay(2);
//     let p3 = asyncDelay(3);
//     let p4 = asyncDelay(4);

//     Promise.all([p1, p2, p3, p4]).then(order => {
//         console.log(`동기화된 출력: ${order}`);
//     });
// }
// syncResultPromise();

import * as Rx from "@reactivex/rxjs";

// Rx.Observable.of("a","b","c").subscribe(v => console.log(v));

// const hello$ = Rx.Observable.create(observer => {
//     observer.next("a");
//     observer.next("b");
// });
// const subscribeHello = hello$.map(val => val + val).subscribe(val => console.log(val));

// Rx.Observable.of(1, 2, 3).subscribe(val => console.log(val));
// Rx.Observable.of("a", "b", "c").subscribe(val => console.log(val));
// Rx.Observable.of(["a", "b"]).subscribe(val => console.log(val));

Rx.Observable.from([1,2,3]).subscribe(val => console.log(val));
Rx.Observable.from(new Promise(resolve => resolve("Hello!"))).subscribe(val => console.log(val));
// 맨 마지막에 출력되는 이유는 프로미스 처리후 구독함수로 넘어 가기 때문에
const arr = Array.from([100, 200, 300], x => x + x);
Rx.Observable.from(arr).subscribe(val => console.log(val));

// const streamData$ = Rx.Observable.from([1, 2, 3, 4, 5]);
// const map = streamData$.map(val => val + 10);
// const mapSubscribe = map.subscribe(val => console.log(val));

// const one = Rx.Observable.of(1, 2, 3);
// const two = Rx.Observable.of('a', 'b', 'c');
// const sum = one.concat(two);
// const sub = sum.subscribe(val => console.log(val));

// const source = Rx.Observable.of(1, 10, 20 ,30, 40);
// const $every = source.every(val => val % 2 ===0);
// $every.subscribe(val => console.log(val));

// const interval = Rx.Observable.interval(100);
// const take$ = interval.take(3);
// take$.subscribe(val => console.log(val));

// function getFoo(msg){
//     setTimeout(function(){
//         console.log(msg);
//     }, 2000);
// }
// function getBar(msg){
//     setTimeout(function(){
//         console.log(msg);
//     }, 1000);
// }
// function getFirstUser(){
//     getFoo("foo");
//     getBar("bar");
// }
// getFirstUser()

// function getFoo(msg){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log(msg);
//             resolve(msg);
//         }, 3000);
//     })
// }
// function getBar(msg){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log(msg);
//             resolve(msg);
//         }, 2000);
//     })
// }
// function getWoo(msg){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log(msg);
//             resolve(msg);
//         }, 1000);
//     })
// }
// async function getFirstUser() {
//     let f = await getFoo("foo");
//     let b = await getBar("bar");
//     // let c = await Promise.all([getFoo("foo"), getBar("bar")]);
//     // console.log(c);
//     // let b = await getWoo("Woo");
// }
// getFirstUser()

// function promise1(){
//     return new Promise((resolve, reject) => {
//         resolve(4)
//     });
// }
// function promise2(a){
//     return new Promise((resolve, reject) => {
//         resolve(a+1)
//     });
// }
// function promise3(a, b){
//     return new Promise((resolve, reject) => {
//         resolve(a+b)
//     });
// }

// const makeRequest = () => {
//     return promise1()
//         .then(value1 => {
//             console.log(value1);
//             return promise2(value1)
//             .then(value2 => {
//                 console.log(value2);
//                 return promise3(value1, value2)
//             })
//         })
// }

// const makeRequest = () => {
//     return promise1()
//         .then(value1 => {
//             console.log(value1)
//             return Promise.all([value1, promise2(value1)])
//         })
//         .then(([value1, value2]) => {
//         console.log([value1, value2])       
//         return promise3(value1, value2)
//         })
// }

// const makeRequest = async () => {
//     const value1 = await promise1()
//     console.log(value1)
//     const value2 = await promise2(value1)
//     console.log(value2)
//     return promise3(value1, value2)
// }
// makeRequest().then(value3 => {
//     console.log(value3);
// })

// function promise4(msg: number){
// 	return new Promise((resolve, reject) => {
// 		if(msg > 0){
// 			resolve("good");
// 		}else{
// 			reject("err");
// 		}
// 	})
// }
// function TryCatch(msg: number) {
//     try{
// 		let a = promise4(msg);
// 		console.log(a);
//   	}catch(e){
//     	console.log(e);
//   	}
// }
// async function TryCatch(msg: number) {
//   	try{
// 		let a = await promise4(msg);
// 		console.log(a);
//   	}catch(e){
//     	console.log(e);
//   	}
// }
// TryCatch(-1);

// function promise5(){
// 	return new Promise((resolve, reject) => {
// 		resolve(1);
// 	})
// }
// function promise6(msg){
// 	return new Promise((resolve, reject) => {
// 		resolve(msg + 3);
// 	})
// }
// const Ifexample = () => {
// 	return promise5()
// 		.then((a: any) => {
// 			if(a > 0){
// 				return promise6(a)
// 					.then((b) => {
// 						console.log(b);
// 						return b;
// 					});
// 			}else{
// 				console.log(a);
// 				return a;
// 			}
// 		});
// }
// const Ifexample = async () => {
// 	const a: any = await promise5();
// 	if(a > 0){
// 		const b = await promise6(a);
// 		console.log(b)
// 		return b;
// 	}else{
// 		console.log(a)
// 		return a;
// 	}
// }
// Ifexample()