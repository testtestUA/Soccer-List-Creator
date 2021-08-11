//Test Api 
// "https://bonus-api.betkanyon100.com/SearchEvent.php?search="
const input = document.getElementById("test");
const submit = document.getElementById("submit");
const select = document.querySelector(".select");
const choose = document.querySelector(".choose");
const test = document.querySelector(".test");
const query = document.querySelector(".query");
const print = document.querySelector(".print");
const loader = document.querySelector(".loader");


let key = true;
let chooseDel = true;
let delGame = false;
let limit;
let game;
//vars for game info!
let hostName = "";
let guestName = "";
let hostOdd = "";
let guestOdd = "";
let midOdds = "";
let leftLogoNum = "";
let rightLogoNum = "";
let gameDateInfo = "";
//Use Api Several Times.
function apiFactory(name) {
    const api = "https://www.bahisalcdn.com/api/index.php?takimAdi=" + name;
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            //cs means leagues. You can access to leagues from there.
            // console.log(data.data[0].cs[0].sns[0].fs)
            
            game = data.data[0].cs;
            // game = data.data[0].cs[0].sns[0].fs;
            game.forEach(game => {
                submit.addEventListener("click", () => {
                    option.remove();
                })

                
                this.addEventListener("keydown", () => {

                        if(event.keyCode === 13){
                            option.remove();
                        }
                    
                })
                // acN
                // console.log(game.sns[0].fs);
                const option = document.createElement("option");
                option.innerText = option.innerText = game.sns[0].lName
                if (option.innerText.includes(undefined)) {
                    option.style.display = "none"
                }
                select.appendChild(option)
                option.value = "Hey"
                let chooseGame;
                //Empty the game list after choosing the each leage. 
                option.addEventListener("click", ()=>{
                    if(document.querySelector(".chooseOp")){
                        const del = document.querySelectorAll(".chooseOp");
                        del.forEach(element => {
                            element.remove();
                         });
                     }
                })
                /////////////////////////////////////Option events///////////////////////////////////////////////////
                option.addEventListener("click", () => {

                    //test
                    // testText = document.createElement("h1");
                    // testText.innerHTML = game.sns[0].fs.btgs
                    let league = game.sns
                    let dateInfo = "";
                    // for(let i = 0; i < league; i++){
                        
                    league.forEach(league => {
                        //if its champ league & europe league
                        // console.log(league.sns[0].fs[0]);
                        //if its normal league
                        submit.addEventListener("click", () => {

                            if (chooseGame) {
                                document.querySelector(".chooseOp").remove();
                            }
                            
                        })

                        

                        this.addEventListener("keydown", () => {

                            if(event.keyCode === 13){
                                if (chooseGame) {
                                    document.querySelector(".chooseOp").remove();
                                    
                                }
                            }
                        
                    })

                   

                    chooseGame = document.createElement("option");
                    chooseGame.setAttribute("class", "chooseOp");
                   
                    console.log(league);
                    
                        //UEFA LEAGUE
                        
                        if (league.lName== "Dünya Şampiyonası Elemeler,Avrupa") {
                           
                            console.log(league);
                            chooseGame.innerHTML = league.sns[0].fs[0].hcN + " " + league.sns[0].fs[0].acN;
                            
                            if (chooseGame.innerHTML.includes("undefined")) {
                                chooseGame.style.display = "none";
                            }
                            choose.appendChild(chooseGame);
                            chooseGame.addEventListener("click", () => {
                                
                                console.log(league.sns[0].fs);
                                hostName = String(league.sns[0].fs[0].hcN);
                                //guest name
                                guestName = league.sns[0].fs[0].acN;
                                //host odd
                                hostOdd = league.sns[0].fs[0].btgs[0].fos[0].hO;
                                guestOdd = league.sns[0].fs[0].btgs[0].fos[2].hO;
                                midOdds = league.sns[0].fs[0].btgs[0].fos[1].hO;
                                // host and guest logos
                                leftLogoNum = league.sns[0].fs[0].hcBId;
                                rightLogoNum = league.sns[0].fs[0].acBId;
                                dateInfo = new Date(league.sns[0].fs[0].fsd)
                                // set date info here!
                                console.log(dateInfo, dateInfo.getDate(), dateInfo.getMonth(), dateInfo.getDay(), dateInfo.getHours(), dateInfo.getMinutes());
                                const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
                                const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                                let minute = dateInfo.getMinutes();
                                if (dateInfo.getMinutes() == 0) {
                                    minute = dateInfo.getMinutes() + "0";
                                    console.log(minute);
                                }

                                gameDateInfo = `${dateInfo.getDate()} ${months[dateInfo.getMonth()]} ${days[dateInfo.getDay()]}` + " " + dateInfo.getHours() + ":" + minute;
                                console.log(gameDateInfo);
                                if (limit) {
                                    alert("THE MAX LIMIT EXCEED!")
                                }
                                create();
                            })
                        } else {
                            // || league.lName === "Avrupa Şampiyonası" 
                            if(league.lName != "UEFA Uluslar Ligi" ){
                                chooseGame.innerHTML = league.fs[0].hcN + " " + league.fs[0].acN;
                                if (chooseGame.innerHTML.includes("undefined")) {
                                    chooseGame.style.display = "none";
                                }
                                choose.appendChild(chooseGame);
                                chooseGame.addEventListener("click", () => {
                                    hostName = String(league.fs[0].hcN);
                                    // //guest name
                                    guestName = league.fs[0].acN;
                                    // //host odd
                                    hostOdd = league.fs[0].btgs[0].fos[0].hO;
                                    guestOdd = league.fs[0].btgs[0].fos[2].hO;
                                    midOdds = league.fs[0].btgs[0].fos[1].hO;
                                    // // host and guest logos
                                    leftLogoNum = league.fs[0].hcBId;
                                    rightLogoNum = league.fs[0].acBId;
                                    console.log(league.fs[0]);
                                    dateInfo = new Date(league.fs[0].fsd)
                                    
                                    
    
                                    // set date info here!
    
                                    console.log(dateInfo, dateInfo.getDate(), dateInfo.getMonth(), dateInfo.getDay(), dateInfo.getHours(), dateInfo.getMinutes());
                                    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
                                    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                                    let minute = dateInfo.getMinutes();
                                    if (dateInfo.getMinutes() == 0) {
                                        minute = dateInfo.getMinutes() + "0";
                                        console.log(minute);
                                    }
    
                                    gameDateInfo = `${dateInfo.getDate()} ${months[dateInfo.getMonth()]} ${days[dateInfo.getDay()]}` + " " + dateInfo.getHours() + ":" + minute;
                                    console.log(gameDateInfo);
                                    if (limit) {
                                        alert("THE MAX LIMIT EXCEED!")
                                    }
                                    create();
                                })
                                //Delete chooses everytime they click.
                                
                                

                                
                                
                            }
                            
                        }
                        
                       
                        //if its normal league
                    })
                    // }
                    // query.appendChild(testText);
                    //host name
                    // console.log(game.acBId +" "+ game.hcBId);
                    if (limit) {
                        alert("THE MAX LIMIT EXCEED!")
                    }
                    
                })
                //Game names
                console.log(game.acN + " " + game.hcN);
                loader.style.display ="none";
                //Odds
                
            });

           
            // text.innerText = data.P[0].AT + " " + data.P[0].HT;
            function create() {
                if (limit) return;
                //Main
                const main = document.querySelector(".main");
                //Game Holder -> inside main
                const gameHolder = document.createElement("div");
                gameHolder.setAttribute("class", "game-holder");
                main.appendChild(gameHolder);
                //left-logo-holder -> inside gameHolder
                const leftLogoHolder = document.createElement("div");
                leftLogoHolder.setAttribute("class", "left-logo-holder");
                gameHolder.appendChild(leftLogoHolder)
                //left logo -> inside leftLogoHolder
                const leftLogo = document.createElement("img");
                leftLogo.setAttribute("class", "left-logo");
                leftLogo.src = "https://assets.b365api.com/images/team/b/" + leftLogoNum + ".png";
                leftLogoHolder.appendChild(leftLogo);
                //Game info -> inside gameHolder
                const gameInfo = document.createElement("div");
                gameInfo.setAttribute("class", "game-info");
                gameHolder.appendChild(gameInfo);
                //Name holder -> inside gameInfo
                const nameHolder = document.createElement("div");
                nameHolder.setAttribute("class", "name-holder");
                gameInfo.appendChild(nameHolder)
                //host -> inside nameHolder
                const host = document.createElement("div");
                host.setAttribute("contenteditable", "true");
                host.setAttribute("class", "host");
                host.innerText = hostName.toUpperCase();
                nameHolder.appendChild(host)
                //guest -> inside nameHolder
                const guest = document.createElement("div");
                guest.setAttribute("contenteditable", "true");
                guest.setAttribute("class", "guest");
                guest.innerText = guestName.toUpperCase();
                nameHolder.appendChild(guest)
                //odd holder -> inside gameInfo
                const oddHolder = document.createElement("div");
                oddHolder.setAttribute("class", "odd-holder flex");
                gameInfo.appendChild(oddHolder)
                //left odd -> inside oddHolder
                const leftOdd = document.createElement("div");
                leftOdd.setAttribute("contenteditable", "true");
                leftOdd.setAttribute("class", "left-odd flex sb");
                oddHolder.appendChild(leftOdd)
                //one odd -> inside leftOdd
                const one = document.createElement("div");
                one.setAttribute("class", "one");
                one.innerText = "1";
                leftOdd.appendChild(one)
                //odd left -> inside leftOdd
                const oddLeft = document.createElement("div");
                oddLeft.setAttribute("class", "odd-left");
                oddLeft.setAttribute("contenteditable", "true");
                oddLeft.innerText = hostOdd;
                leftOdd.appendChild(oddLeft);

                //mid odd -> inside oddHolder
                const midOdd = document.createElement("div");
                midOdd.setAttribute("contenteditable", "true");
                midOdd.setAttribute("class", "mid-odd flex sb");
                oddHolder.appendChild(midOdd)
                //x odd -> inside midOdd
                const x = document.createElement("div");
                x.setAttribute("class", "mid");
                x.innerText = "X";
                midOdd.appendChild(x)
                //odd Mid -> inside midOdd
                const oddMid = document.createElement("div");
                oddMid.setAttribute("class", "odd-mid  mid-x");
                oddMid.setAttribute("contenteditable", "true");
                oddMid.innerText = midOdds;
                midOdd.appendChild(oddMid);

                //two odd -> inside oddHolder
                const twoOdd = document.createElement("div");
                twoOdd.setAttribute("contenteditable", "true");
                twoOdd.setAttribute("class", "right-odd flex sb");
                oddHolder.appendChild(twoOdd)
                //two odd -> inside twoOdd
                const two = document.createElement("div");
                two.setAttribute("class", "odd-right");
                two.innerText = "2";
                twoOdd.appendChild(two)
                //odd two -> inside twoOdd
                const oddTwo = document.createElement("div");
                oddTwo.setAttribute("class", "odd-mid left");
                oddTwo.setAttribute("contenteditable", "true");
                oddTwo.innerText = guestOdd;
                twoOdd.appendChild(oddTwo);
                //Game date -> inside gameInfo
                const gameDate = document.createElement("div");
                gameDate.setAttribute("class", "game-date");
                gameDate.setAttribute("contenteditable", "true");
                gameDate.innerText = gameDateInfo;
                gameInfo.appendChild(gameDate);
                //cross icon to delete -> inside gameDate
                const cross = document.createElement("i");
                cross.setAttribute("class", "fas fa-times cross")
                gameDate.appendChild(cross);
                //Right-logo-holder -> inside gameHolder
                const rightLogoHolder = document.createElement("div");
                rightLogoHolder.setAttribute("class", "right-logo-holder");
                gameHolder.appendChild(rightLogoHolder)
                //left logo -> inside leftLogoHolder
                const rightLogo = document.createElement("img");
                rightLogo.setAttribute("class", "left-logo");
                rightLogo.src = "https://assets.b365api.com/images/team/b/" + rightLogoNum + ".png";
                rightLogoHolder.appendChild(rightLogo);
                //Check whether more than 10!
                if (main.childElementCount > 9) {
                    limit = true;
                } else {
                    limit = false;
                }
                //Loader
                
                //Delete spesific column by trash icon!
                cross.style.display = "none"
                gameHolder.onmouseover = () => {
                    cross.style.display = "inline-block"
                }
                gameHolder.onmouseleave = () => {
                    cross.style.display = "none"
                }
                cross.addEventListener("click", () => {
                    gameHolder.remove();
                    limit = false;
                })
            }
        })
}
submit.addEventListener("click", () => {
    loader.style.display ="block";
    apiFactory(input.value)
    
})


    this.addEventListener("keydown", () => {

    if(key){  
        
        if(event.keyCode === 13){
            loader.style.display ="block";
            apiFactory(input.value)  
            key = false;    
            
        }

        setTimeout(() => {
            key = true;
        }, 900);

    }

})

    

       



print.addEventListener("click", ()=>{
    let captureThis = document.querySelector(".capture");
    
    if(captureThis){
        captureThis.remove();
        
    }
    
    
    html2canvas(document.querySelector("#capture"), {
    
        logging: true, 
        letterRendering: 1, 
        allowTaint: true
        
        
    
      } ).then(canvas => {
        canvas.setAttribute("class", "capture")
        document.body.appendChild(canvas)
        document.querySelector(".capture").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        
    });
 
  
    
})

