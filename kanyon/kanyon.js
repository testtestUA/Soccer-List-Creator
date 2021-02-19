
let n = 1;

document.getElementById("gameSearch").addEventListener("keyup", (event)=>{
    console.log(event.keyCode);
  })
async function getStakeData() {

    
      let gN = document.getElementById("gameSearch").value;
      let searchValue = document.getElementById("searchValue");


      
  
      const API_URL2 = "https://bonus-api.betkanyon100.com/SearchEvent.php?search="+gN;
      const response2 = await fetch(API_URL2)
      var json2 = await response2.json();
      console.log(json2);
      console.log(json2.P[0].Id);
     
    

      json2.P.forEach(json => {
          const list = document.createElement("option")
          list.setAttribute("id", "optionId")
          const select = document.getElementById("select")
          select.appendChild(list)
          list.innerText=json.HT +" "+ json.AT
          
          console.log(json.HT);
          searchValue.value = "Choose a game"

         
        
          list.addEventListener("click", (e)=>{
              searchValue.value = json.Id
              const dataNum = json.D
              console.log(dataNum);
              const date = new Date(Number(dataNum))
              const date1 = new Date();
             
              
              const months = ['Ocak','Şubat','Mart','Nİsan','Mayıs','Hazİran','Temmuz','Ağustos','Eylül','Ekİm','Kasım','Aralık'];
              document.getElementById("date").innerHTML=dataNum.slice(8,10).replace('0' , '') + ' '+ months[date1.getMonth()].toUpperCase()
            
             
          })

          //if there is no logo dont show
        //   if(json.ASh==0){
        //       list.remove()
        //   }
         
         

          document.getElementById("gameSearch").addEventListener("keypress", function(e){

            if (e.keyCode === 13) {
                list.remove()
            }
            
                

        })
  
         
         
         

      });

      // CREATE ELEMENT

      
}
document.getElementById("gameSearch").addEventListener("keypress", function(e){
    
   
    if (e.keyCode === 13) {
        getStakeData()
    }
})




// LOG DATE
const date = new Date();




const months = ['Ocak','Şubat','Mart','Nİsan','Mayıs','Hazİran','Temmuz','Ağustos','Eylül','Ekİm','Kasım','Aralık'];


document.getElementById("date").innerHTML=date.getDate().toString() + " " +months[date.getMonth()].toUpperCase()

// API HERE! 
async function getStakeData1(){ 
    


const e1 = document.getElementById("e1").value;
let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e1;
let response = await fetch(API_URL)
let json = await response.json();
// var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;

// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
const name1 = json[0].AT.toUpperCase()
const name2 = json[0].HT.toUpperCase()
const logo1 = json[0].ASh
const logo2= json[0].HSh






// Maç Sonucu 1X2
// var for all

document.getElementById("team-2").innerHTML=name1
document.getElementById("team-1").innerHTML=name2
document.getElementById("odd-1").innerHTML=result1
document.getElementById("odd-x").innerHTML=resultx
document.getElementById("odd-2").innerHTML=result2
document.getElementById("logo-2").src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
document.getElementById("logo-1").src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
}
async function getStakeData2(){ 
    const e2 = document.getElementById("e2").value;
    let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e2;
    let response = await fetch(API_URL)
    let json = await response.json();
    // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;
console.log(check)
// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
    const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
    const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
    const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
    const name1 = json[0].AT.toUpperCase()
    const name2 = json[0].HT.toUpperCase()
    const logo1 = json[0].ASh
    const logo2= json[0].HSh
 
    document.querySelectorAll("#team-2")[1].innerHTML=name1
    document.querySelectorAll("#team-1")[1].innerHTML=name2
    document.querySelectorAll("#odd-1")[1].innerHTML=result1
    document.querySelectorAll("#odd-x")[1].innerHTML=resultx
    document.querySelectorAll("#odd-2")[1].innerHTML=result2
    document.querySelectorAll("#logo-2")[1].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
    document.querySelectorAll("#logo-1")[1].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
    }
    async function getStakeData3(){ 
        const e3 = document.getElementById("e3").value;
        let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='
        +e3;
        let response = await fetch(API_URL)
        let json = await response.json();
        // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;
console.log(check)
// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
        const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
        const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
        const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
        const name1 = json[0].AT.toUpperCase()
        const name2 = json[0].HT.toUpperCase()
        const logo1 = json[0].ASh
        const logo2= json[0].HSh
   
        document.querySelectorAll("#team-2")[2].innerHTML=name1
        document.querySelectorAll("#team-1")[2].innerHTML=name2
        document.querySelectorAll("#odd-1")[2].innerHTML=result1
        document.querySelectorAll("#odd-x")[2].innerHTML=resultx
        document.querySelectorAll("#odd-2")[2].innerHTML=result2
        document.querySelectorAll("#logo-2")[2].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
        document.querySelectorAll("#logo-1")[2].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
        }
        async function getStakeData4(){ 
            const e4 = document.getElementById("e4").value;
            let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e4;
            let response = await fetch(API_URL)
            let json = await response.json();
            // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;
console.log(check)

// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
            const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
            const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
            const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
            const name1 = json[0].AT.toUpperCase()
            const name2 = json[0].HT.toUpperCase()
            const logo1 = json[0].ASh
            const logo2= json[0].HSh
       
            document.querySelectorAll("#team-2")[3].innerHTML=name1
            document.querySelectorAll("#team-1")[3].innerHTML=name2
            document.querySelectorAll("#odd-1")[3].innerHTML=result1
            document.querySelectorAll("#odd-x")[3].innerHTML=resultx
            document.querySelectorAll("#odd-2")[3].innerHTML=result2
            document.querySelectorAll("#logo-2")[3].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
            document.querySelectorAll("#logo-1")[3].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
            }
            async function getStakeData5(){ 
                const e5 = document.getElementById("e5").value;
                let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e5;
                let response = await fetch(API_URL)
                let json = await response.json();
                // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;


// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
                const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
                const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
                const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
                const name1 = json[0].AT.toUpperCase()
                const name2 = json[0].HT.toUpperCase()
                const logo1 = json[0].ASh
                const logo2= json[0].HSh
                document.querySelectorAll("#team-2")[4].innerHTML=name1
                document.querySelectorAll("#team-1")[4].innerHTML=name2
                document.querySelectorAll("#odd-1")[4].innerHTML=result1
                document.querySelectorAll("#odd-x")[4].innerHTML=resultx
                document.querySelectorAll("#odd-2")[4].innerHTML=result2
                document.querySelectorAll("#logo-2")[4].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
                document.querySelectorAll("#logo-1")[4].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
                }
                async function getStakeData6(){ 
                    const e6 = document.getElementById("e6").value;
                    let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e6;
                    let response = await fetch(API_URL)
                    let json = await response.json();
    // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;


// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
                    const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
                    const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
                    const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
                    const name1 = json[0].AT.toUpperCase()
                    const name2 = json[0].HT.toUpperCase()
                    const logo1 = json[0].ASh
                    const logo2= json[0].HSh
                    document.querySelectorAll("#team-2")[5].innerHTML=name1
                    document.querySelectorAll("#team-1")[5].innerHTML=name2
                    document.querySelectorAll("#odd-1")[5].innerHTML=result1
                    document.querySelectorAll("#odd-x")[5].innerHTML=resultx
                    document.querySelectorAll("#odd-2")[5].innerHTML=result2
                    document.querySelectorAll("#logo-2")[5].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
                    document.querySelectorAll("#logo-1")[5].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
                    }
                    async function getStakeData7(){ 
                        const e7 = document.getElementById("e7").value;
                        let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e7;
                        let response = await fetch(API_URL)
                        let json = await response.json();
     // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;


// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
                        const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
                        const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
                        const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
                        const name1 = json[0].AT.toUpperCase()
                        const name2 = json[0].HT.toUpperCase()
                        const logo1 = json[0].ASh
                        const logo2= json[0].HSh
                        document.querySelectorAll("#team-2")[6].innerHTML=name1
                        document.querySelectorAll("#team-1")[6].innerHTML=name2
                        document.querySelectorAll("#odd-1")[6].innerHTML=result1
                        document.querySelectorAll("#odd-x")[6].innerHTML=resultx
                        document.querySelectorAll("#odd-2")[6].innerHTML=result2
                        document.querySelectorAll("#logo-2")[6].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
                        document.querySelectorAll("#logo-1")[6].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
                        }
                        async function getStakeData8(){ 
                            const e8 = document.getElementById("e8").value;
                            let API_URL = 'https://bonus-api.betkanyon100.com/GetEvent.php?id='+e8;
                            let response = await fetch(API_URL)
                            let json = await response.json();
             // var for all
let type = 1;
const check = json[0].StakeTypes[Number(type)].N;


// var for all
if(check === "Çifte Şans"){
    type = 0
}else{
    type=1
}
                            const result1 = json[0].StakeTypes[Number(type)].Stakes[0].F
                            const resultx = json[0].StakeTypes[Number(type)].Stakes[1].F
                            const result2 = json[0].StakeTypes[Number(type)].Stakes[2].F
                            const name1 = json[0].AT.toUpperCase()
                            const name2 = json[0].HT.toUpperCase()
                            const logo1 = json[0].ASh
                            const logo2= json[0].HSh
                            document.querySelectorAll("#team-2")[7].innerHTML=name1
                            document.querySelectorAll("#team-1")[7].innerHTML=name2
                            document.querySelectorAll("#odd-1")[7].innerHTML=result1
                            document.querySelectorAll("#odd-x")[7].innerHTML=resultx
                            document.querySelectorAll("#odd-2")[7].innerHTML=result2
                            document.querySelectorAll("#logo-2")[7].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo1+".png"
                            document.querySelectorAll("#logo-1")[7].src="https://cdn-sp.kertn.net/assets/team-logos/"+logo2+".png"
                            }
                            

// API HERE! 

// DOM ELEMENTS

// DOM ELEMENTS

function myLoop(){
let output = [];

let bN = document.getElementById("bannerNum").value
for (let i = 0; i<Number(bN)+1; i++){
output.push(i);

// RANDOM ORDERS
let a = (Math.floor(Math.random()*8))
console.log(a)
// RANDOM ORDERS

if(output.includes(1)){
    document.getElementById("banner-1").style.display="flex";
    document.getElementById("e1").style.display="block"
   
}
else{
    document.getElementById("banner-1").style.display="none";
    document.getElementById("e1").style.display="none"
}
if(output.includes(2)){
    document.getElementById("e2").style.display="block"
    document.getElementById("banner-2").style.display="flex";
    
    
}
else{
    document.getElementById("banner-2").style.display="none";
    document.getElementById("e2").style.display="none"
}
if(output.includes(3)){
    document.getElementById("e3").style.display="block"
    document.getElementById("banner-3").style.display="flex";
}
else{
    document.getElementById("banner-3").style.display="none";
    document.getElementById("e3").style.display="none"
}
if(output.includes(4)){
    document.getElementById("e4").style.display="block"
    document.getElementById("banner-4").style.display="flex";
}
else{
    document.getElementById("banner-4").style.display="none";
    document.getElementById("e4").style.display="none"
}
if(output.includes(5)){
    document.getElementById("e5").style.display="block"
    document.getElementById("banner-5").style.display="flex";
}
else{
    document.getElementById("banner-5").style.display="none";
    document.getElementById("e5").style.display="none"
}
if(output.includes(6)){
    document.getElementById("e6").style.display="block"
    document.getElementById("banner-6").style.display="flex";
}
else{
    document.getElementById("banner-6").style.display="none";
    document.getElementById("e6").style.display="none"
}
if(output.includes(7)){
    document.getElementById("e7").style.display="block"
    document.getElementById("banner-7").style.display="flex";
}
else{ 
    document.getElementById("banner-7").style.display="none";
    document.getElementById("e7").style.display="none"
}
if(output.includes(8)){
    document.getElementById("e8").style.display="block"
    document.getElementById("banner-8").style.display="flex";
}
else{
    document.getElementById("banner-8").style.display="none";
    document.getElementById("e8").style.display="none"
}



}

}

document.getElementById("btn").addEventListener("click",function(){

    myLoop()
})

document.getElementById("btn1").addEventListener("click", function(){

    
getStakeData8()         
getStakeData7()                         
getStakeData6()                             
getStakeData5()                            
getStakeData4()
getStakeData3()
getStakeData2()
getStakeData1()
})

document.getElementById("mix").addEventListener("click",function(){
    document.getElementById("banner-1").style.order=7;
    document.getElementById("banner-2").style.order=3;
    document.getElementById("banner-3").style.order=2;
    document.getElementById("banner-4").style.order=-1;
    document.getElementById("banner-6").style.order=-6;
    document.getElementById("banner-8").style.order=-8;
})

// JUMP TO WINXBET 
// 1- Change BG picture
// 2- Change text colors 
// 3- Edit orange banner, delete middle area.

function changeStyle(){

    const bg = document.getElementById("background");
    const date = document.getElementById("date");
    const textM = document.getElementById("text-m");
    const motto = document.getElementById("motto");
    const logo = document.getElementById("logoBK");
    
    // TEAMS ALIGN

    // var teams = document.querySelectorAll(".teams");
    // for(let a=0; teams.length; a++){
    //     teams[a].style.backgroundColor="red"
    // };

    // LOOP FOR ORANGE BANNER

    var elements = document.querySelectorAll('.orange-banner');
    for(var i=0; i<elements.length; i++){
        elements[i].style.backgroundColor="unset";
        elements[i].style.color="#ffe400";
        elements[i].style.justifyContent="center"
        
    }
    var elements2 = document.querySelectorAll('.o-middle');
    for(var i=0; i<elements2.length; i++){
        elements2[i].style.backgroundColor="unset";
        elements2[i].style.border=0;
        
    }
    var oddX= document.querySelectorAll('#odd-x');
    for(var i=0; i<elements2.length; i++){
        oddX[i].style.color="yellow";
      
        
    }
    // BG
    bg.style.backgroundImage="url(images/wxBG.jpg)"
    // HEADER FONT
    date.style.fontStyle="italic";
    textM.style.fontStyle="italic";
    textM.style.color="#ffe100"
    motto.style.color="#fff"
    
    logo.src="images/wxLogo.png"
    logo.style.marginBottom=-15+"px"
    document.body.style.fontFamily='Montserrat'
}

document.getElementById("changeStyle").addEventListener("click", function(){
    changeStyle()
    let padding = document.querySelectorAll(".logo-area-1");
    let padding1 = document.querySelectorAll(".logo-area-2");
    var teams = document.querySelectorAll(".teams");
    let bannerColor = document.querySelectorAll(".banner-1");
    for(let a=0; teams.length; a++){
        bannerColor[a].style.backgroundColor="rgba(117, 117, 117, 0.2)"
   teams[a].style.justifyContent="center";
   padding[a].style.position="relative";
   padding[a].style.left=30+"px";
   padding1[a].style.position="relative";
   padding1[a].style.right=30+"px";
   var text = document.createElement("h3");
   
   let content = document.createTextNode("-"); 
   text.style.color="gray";
   text.style.order=1;
   text.className = "marginH";
   text.appendChild(content)
   teams[a].appendChild(text)
   
    };
    
})
