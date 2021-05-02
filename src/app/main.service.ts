import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
declare let SockJS: any;
declare let Stomp : any;
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  websocket : WebSocket;

  checkGame  = new BehaviorSubject(false);

  randomArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,
      83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];

  randomNumber;

  newNumber;

  message;

  stompClient = null;
  

  setUserName(name)
  {
    sessionStorage.setItem('username',name);
  }

  clearUserName()
  {
    sessionStorage.removeItem('username');
  }

  isUserLoggedIn()
  {
    return (sessionStorage.getItem('username') != null && sessionStorage.getItem('username') != "")
  }

  getCheckGame()
  {
    return this.checkGame.asObservable();
  }

  setCheckGame(data)
  {
    this.checkGame.next(data);
  }

//   startGame()
//   {
//     this.websocket = new WebSocket("ws://localhost:8080/housiegame");
//     this.websocket.onopen = (event) =>{
//       console.log("opened");
//      // this.checkGame.next(true);
//     }

//     this.websocket.onmessage = (event) => {
//       this.checkGame.next(true);
//       console.log("triggered");
//         console.log(event);
//         console.log(event.data);
//         console.log(this.newNumber);
//        // event.data = this.newNumber;
//         this.randomNumber = event.data;
//         //console.log(this.numberArray);
//     }

//     this.websocket.onclose = (event) => {

//     }

//   }

//   sendNumber()
//   {
//     console.log("triggering number");  
//     this.newNumber = this.randomArray[Math.floor(Math.random() * this.randomArray.length)];
//     //console.log(JSON.stringify(this.randomNumber));
//     console.log(this.newNumber);
//     this.websocket.send(JSON.stringify(this.newNumber));
    
//   }

//   connect() 
//   {
//     var that = this;
//       console.log("connecting to backend...");
//         var socket = new SockJS('http://localhost:8080/ws');
//         this.stompClient = Stomp.over(socket);
//         this.stompClient.connect({}, function (frame) {
//           console.log('Connected: ');
//           that.stompClient.subscribe('http://localhost:8080/topic/public', greeting => {
//             console.log("received message...");
//               console.log(greeting);
//           });
//       }, function (err) {
//           console.log('err', err);
//       });
//       //  this.stompClient.connect({}, this.onConnected, this.onError);
//   }


//   onConnected() {
//     // Subscribe to the Public Topic
//     this.stompClient.subscribe('http://localhost:8080/topic/public', this.onMessageReceived);

//     // Tell your username to the server
//     this.stompClient.send("http://localhost:8080/app/chat.addUser",
//         {},
//         JSON.stringify({sender: "praveen", type: 'JOIN'})
//     )

// }

//  onError(error) 
//  {

//  }


//  onMessageReceived(payload) 
//  {
//    console.log("message received");
//   this.message = JSON.parse(payload.body);
//   console.log(this.message);
//  }


//  sendMessage(){
//       console.log("sending message");
//       var chatMessage = {
//           sender: "praveen",
//           content: "hello",
//           type: 'CHAT'
//       };
//       this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
 
// }


}
