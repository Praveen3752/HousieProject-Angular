import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { MainService } from '../main.service';
import { WebSocketAPI } from '../WebSocketAPI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title="title";
  houseTicket = true;
  randomNumberData;
  numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
	41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,
  83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
  subscriptionData : Subscription;
  constructor(private elemRef : ElementRef,private service:MainService) { }


  webSocketAPI: WebSocketAPI;
  greeting = "hello";
  name: string;
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI();
	//this.fun();
	this.connect();
	setTimeout(()=>{                         
      this.fun();
 		}, 3000);

		
		 setTimeout(()=>{   
			if(sessionStorage.getItem('username') == "praveen")
			{                      
			this.getMessage();
			}
			   }, 10000);
		 

	 this.webSocketAPI.msg.subscribe(data => {
		  this.greeting = data;
		  console.log(data);
	  })
  }

  cellClicked(data)
  {
	  data.target.classList.add('selectedNumber');
	  console.log(data.target);
  }

  getMessage()
  {
	  console.log("entered get message...");
	  setInterval(() => {
		this.sendMessage();
	  },5000);
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
	var randomNumberDiv = this.elemRef.nativeElement.querySelectorAll("#randomNumberDiv");
	randomNumberDiv[0].classList.add('rotateDiv');
    this.webSocketAPI._send("praveen");
  }

  handleMessage(message){
	  console.log("message received in home ");
	  this.webSocketAPI.msg.subscribe(data => {
		  console.log("message came");
		  console.log(data);
	  })
    this.greeting = message;
	this.greeting = "hey you";
	console.log(this.greeting);
  }

//   ngOnInit() {
// 	this.service.connect();
// 	// this.subscriptionData = this.service.getCheckGame().subscribe(data => {
// 	// 	//console.log(data);
// 	// 	if(data == true)
// 	// 	{
// 	// 		this.fun();
// 	// 		this.randomNumberData = this.numberArray[Math.floor(Math.random() * this.numberArray.length)];
// 	// 		this.service.sendNumber();
// 	// 		this.numberArray.filter(e => e!= this.randomNumberData);
// 	// 		this.service.setCheckGame(false);
// 	// 		this.stopSubscription();
// 	// 	}
// 	// })
//   }

//   startGame()
//   {
// 	//this.service.setCheckGame(true);
// 	this.service.sendMessage();
//   }

//   stopSubscription()
//   {
// 	this.subscriptionData.unsubscribe();
//   }

  removeStyleData()
  {
	var randomNumberDiv = this.elemRef.nativeElement.querySelectorAll("#randomNumberDiv");
    randomNumberDiv[0].classList.remove('rotateDiv');
  }

  fun()
	{
	//	this.service.setCheckGame();
		//$("#maindiv").show();
		//$(".numberBallons").parent().show();
    
    var rowdataElement  = this.elemRef.nativeElement.querySelectorAll('.rowsdata');
		for(var i=0;i<3;i++)
		{
			for(var j=0;j<9;j++)
			{
				rowdataElement[i].children[j].innerText = "";
			}
		}

		var count = 0;
		var boolarr = [true,false];
		var outputarr = [];
		var rowdata = [0,1,2];
		var numberdata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

		while(count < 15)
		{
			for(var i=0;i<9;i++)
			{
				if(count >= 15)
				{
					break;
				}

				var boolvar = boolarr[Math.floor(Math.random() * boolarr.length)];
				if(boolvar)
				{
					var rowvar = rowdata[Math.floor(Math.random() * rowdata.length)];
					var temparr = numberdata.slice(i*10,(i*10)+9);
					var printdata = temparr[Math.floor(Math.random() * temparr.length)];

					while(printdata == 0)
					{
						printdata = temparr[Math.floor(Math.random() * temparr.length)];
					}

					if(rowdataElement[rowvar].children[i].innerText == "")
					{
						var gotocheck = 0;
						var rr = rowvar;
						for(var b=0;b<3;b++)
						{
							var temp1 = rowdataElement[b].children[i].innerText;
							var temp2 = Number(rowdataElement[b].children[i].innerText);

							if((temp1 != "" && rr < b && printdata > temp2) || (temp1 != "" && rr > b && printdata < temp2))
							{
								gotocheck = 1;
								break;
							}

						}
						if(gotocheck == 1)
						{
							continue;
						}

						var tempcount = 0;

						for(var t=0;t<rowdataElement[rowvar].children.length;t++)
						{
							if(rowdataElement[rowvar].children[t].innerText != "")
							{
								tempcount = tempcount + 1;
							}
						}

						if(tempcount >= 5)
						{
							continue;
						}

						rowdataElement[rowvar].children[i].innerText = printdata;
						
						var nullindex = numberdata.indexOf(printdata);
						numberdata[nullindex] = 0;
						//outputarr.push(printdata);

						count = count + 1;

					}

				}
			}
		}
		
	}


}
