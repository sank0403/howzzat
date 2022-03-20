window.localStorage;
if (!localStorage.totalwins){
localStorage.setItem("totalwins",0);
localStorage.setItem("totaltime",0);
}

let i = 60;
window.onload = onTimer();
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0)  {
	if (!gameOver){  
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "Time is up! You lose!\n The player was "+firstname+" "+lastname+".";
		gameOver = true;
	}
  }
  else {
	setTimeout(onTimer, 1000);
  }
}


setTimeout(FetchData1, 5000)
	function FetchData1(){
		if (!gameOver){
		document.getElementById(0).innerText = catg;
		}
	}	

setTimeout(FetchData2, 15000)
	function FetchData2(){
		if (!gameOver){
		document.getElementById(1).innerText = country;
		}
	}

setTimeout(FetchData3, 25000)
	function FetchData3(){
		if (!gameOver){
		document.getElementById(2).innerText = year;
		}
	}

setTimeout(FetchData4, 35000)
	function FetchData4(){
		if (!gameOver){
		document.getElementById(3).innerText = fnfl;
		}
	}

setTimeout(FetchData5, 45000)
	function FetchData5(){
		if (!gameOver){
		document.getElementById(4).innerText = lnfl;
		}
	}	

// *****************************************************************************

var gameOver = false;
var yearList = ["1975","1975","1975","1975","1979","1979","1979","1979","1983","1983","1983","1983","1987","1987","1987","1987","1992","1992","1992","1992","1992","1996","1996","1996","1996","1996","1999","1999","1999","1999","1999","1999","2003","2003","2003","2003","2003","2007","2007","2007","2007","2007","2011","2011","2011","2011","2011","2011","2015","2015","2015","2015","2015","2015","2019","2019","2019","2019","2019"]
var countryList = ["WIN","NZL","AUS","WIN","WIN","WIN","ENG","WIN","IND","ENG","IND","IND","AUS","ENG","AUS","AUS","PAK","NZL","PAK","PAK","NZL","SRL","IND","IND","SRL","SRL","AUS","IND","AUS","NZL","AUS","SAF","AUS","IND","SRL","AUS","IND","AUS","AUS","AUS","AUS","AUS","IND","SRL","PAK","IND","IND","IND","AUS","NZL","AUS","NZL","AUS","AUS","ENG","IND","AUS","ENG","NZL",] 
var catgTypeList = ["WC","MR","MW","MF","WC","MR","MW","MF","WC","MR","MW","MF","WC","MR","MW","MF","WC","MR","MW","MF","PS","WC","MR","MW","MF","PS","WC","MR","MW","MW","MF","PS","WC","MR","MW","MF","PS","WC","MR","MW","MF","PS","WC","MR","MW","MW","MF","PS","WC","MR","MW","MW","MF","PS","WC","MR","MW","MF","PS",]
var firstnameList = ["Clive","Glenn","Gary","Clive","Clive","Gordon","Mike","Vivian","Kapil","David","Roger","Mohinder","Allan","Graham","Craig","David","Imran","Martin","Wasim","Wasim","Martin","Arjuna","Sachin","Anil","Aravinda","Sanath","Steve","Rahul","Shane","Geoff","Shane","Lance","Ricky","Sachin","Chaminda","Ricky","Sachin","Ricky","Matthew","Glenn","Adam","Glenn","Mahendra","Tillakaratne","Shahid","Zaheer","Mahendra","Yuvraj","Michael","Martin","Mitchell","Trent","James","Mitchell","Eoin","Rohit","Mitchell","Ben","Kane",]
var lastnameList = ["Lloyd","Turner","Gilmour","Lloyd","Lloyd","Greenidge","Hendrick","Richards","Dev","Gower","Binny","Amarnath","Border","Gooch","McDermott","Boon","Khan","Crowe","Akram","Akram","Crowe","Ranatunga","Tendulkar","Kumble","deSilva","Jayasuriya","Waugh","Dravid","Warne","Allott","Warne","Klusener","Ponting","Tendulkar","Vaas","Ponting","Tendulkar","Ponting","Hayden","McGrath","Gilchrist","McGrath","Singh Dhoni","Dilshan","Afridi","Khan","Singh Dhoni","Singh","Clarke","Guptill","Starc","Boult","Faulkner","Starc","Morgan","Sharma","Starc","Stokes","Williamson",]
var index = [Math.floor(Math.random()*yearList.length)];
var firstname = firstnameList[index];
var lastname = lastnameList[index];
var year = yearList[index];
var catg = catgTypeList[index];
var fnfl = firstname.slice(0, 1).toUpperCase();
var lnfl = lastname.slice(0, 1).toUpperCase();
/* if (catg == "WC"){
	catg = "Winning Captain";
}
if (catg == "MR"){
	catg = "Most Runs";
}
if (catg == "MW"){
	catg = "Most Wickets";
}
if (catg == "MF"){
	catg = "Finals MOM";
}
if (catg == "PS"){
	catg = "Player of the Series";
} */

var country = countryList[index];
var fnwidth = firstname.length;
var lnwidth = lastname.length;
var width = fnwidth + lnwidth;
var answername = "";
answername = firstname.concat(lastname).toLowerCase();
document.getElementById("answer").style.color = "cyan";
document.getElementById("answer").innerText = "Read the Game Rules to learn about how to play.\n Timer in Progress - Refresh Page to reload!";
var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board

        for (let clueindex = 0; clueindex < 5; clueindex++) {
            // <span id="0-0" class="tile">P</span>
            let clue = document.createElement("span");
            clue.id = clueindex;
            clue.classList.add("clue-ball");
			if (clueindex == 0){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Category</div>';
			}
			else if (clueindex == 1){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
			}
			else if (clueindex == 2){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Year</div>';
			}	
			else if (clueindex == 3){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">FN FL</div>';
			}
			else if (clueindex == 4){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">LN FL</div>';
			}				
            document.getElementById("clue-ball").appendChild(clue);
        }	
		


   // for (let r = 0; r < height; r++) {
	    let f = 1
        for (let c = 0; c < fnwidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = f.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardfirst").appendChild(tile);
        }
    //}
  
	    let l = 1
        for (let c = fnwidth; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = l.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardlast").appendChild(tile);
        }
    //}	
	
    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
	
/*     let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]	 */

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}


function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(1 + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
		document.getElementById("answer").innerText = "";
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(1 + '-' + col.toString());
        currTile.innerText = "";
		document.getElementById("answer").innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(1 + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
	
	
	if (guess == answername) {
		for (let c = 0; c < width; c++) {
			let currTile = document.getElementById(1 + '-' + c.toString());
			currTile.classList.add("correct");
		}		
		document.getElementById("answer").style.color = "green";
		localStorage.totalwins = Number(localStorage.totalwins)+1;
		localStorage.totaltime = Number(localStorage.totaltime)+(60-i);
		let averagetime = Math.round(localStorage.totaltime/localStorage.totalwins);
		document.getElementById("answer").innerText = "You have identified the player successfully.\nCongrats! Total Wins: " + localStorage.totalwins + ". Average Time: " + averagetime + "s.";
		//document.getElementById("answer").innerText = "You have identified the player successfully.\nCongrats! Total Wins: " + localStorage.totalwins + ". Average Time " + (60-i) + "s.";
		gameOver = true;
		var hidecounter = document.getElementById("mycounter");
		hidecounter.style.color = "black";
		
	}	
	else{
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "Incorrect Guess! \n Please try again.";
		for (let c = col-1; c >= 0; c--) {
			let currTile = document.getElementById(1 + '-' + c.toString());
			currTile.innerText = "";
			col -= 1;
		}		
	}

}
