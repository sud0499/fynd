// console.log("Hello from JS file");

// // let firstExample = document.getElementById("IdDom").innerText;

// // firstExample = "Lets Change it";
// let firstExample = document.getElementById("IdDom");

// // firstExample.innerText = "Lets Change it";

// function clickHandler() {
//   firstExample.innerText = "Lets Change it";
// }

// let secondExample = document.getElementsByClassName("fsjs");

// // console.log(secondExample);

// for (let index = 0; index < secondExample.length; index++) {
//   //   console.log(`This is ${index} element`);

//   if (index === 2) {
//     function secondclick() {
//       secondExample[index].innerText = "New working on third element";
//       //   console.log(secondExample[index].innerText);
//     }
//   }
//   //   console.log(secondExample[index]);
// }

// let tagExample = document.getElementsByTagName("div");
// console.log(tagExample);

// let elementExample = document.createElement("p");
// elementExample.innerText = "Working on Inner text";
// firstExample.appendChild(elementExample); //appended the para tag on div element  first Example


// let arraytoTest = [
//     {
//         studentsName: "Dazzlercool",
//         favouriteVideoGame: "DOTA2",
//         rank: "divine",
//         randomNumber: 7,
//     },
//     {
//         studentsName: "Mayank",
//         favouriteVideoGame: "Sonic",
//         rank: "Pro",
//         randomNumber: 3,
//     },
//     {
//         studentsName: "Alok",
//         favouriteVideoGame: "Mario",
//         rank: "Expert",
//         randomNumber: 8,
//     },
//     {
//         studentsName: "Satvik",
//         favouriteVideoGame: "Ludo",
//         rank: "Master",
//         randomNumber: 5,
//     },
//     {
//         studentsName: "Deepak",
//         favouriteVideoGame: "PUBG",
//         rank: "Conquerer",
//         randomNumber: 12,
//     },
// ];

// // arraytoTest.sort((a,b)=>a.randomNumber-b.randomNumber);
// console.log(arraytoTest);

// const arr1 = arraytoTest.map(({ studentsName, randomNumber }) => ({ studentsName, randomNumber }));
// console.log(arr1);

// arr1.sort((a, b) => (a.randomNumber - b.randomNumber));
// console.log(arr1);

//

let usersArray = [
  {
    id: 1,
    name: "Satvik",
    leaves: [
      {
        id: 1,
        reason: "Party",
        dates: ["2022-02-25", "2022-02-24"],
      },

      {
        id: 2,
        reason: "Movie",
        dates: ["2022-02-20", "2022-02-21", "2022-02-23"],
      },
    ],
  },
  {
    id: 2,
    name: "Sudhanshu",
    leaves: [
      {
        id: 3,
        reason: "Sick",
        dates: ["2022-02-22", "2022-02-23"],
      },

      {
        id: 4,
        reason: "Break",
        dates: ["2022-02-15", "2022-02-18", "2022-02-17"],
      },
    ],
  },
  {
    id: 3,
    name: "Shreshtha",
    leaves: [
      {
        id: 5,
        reason: "Study",
        dates: ["2022-02-05", "2022-02-10"],
      },
    ],
  },
];

//write a function that gives all user who have taken aleave between two given dates

let d=new Date();

function findDates(x=new Date(d.getFullYear(),d.getMonth(),1), y=new Date(d.getFullYear(),d.getMonth()+1,0)) {

  return (usersArray.map(uA => {
    return {
      id:uA.id,name: uA.name, leave: uA.leaves.map(lv => {
        return { id:lv.id,reason: lv.reason, dates: lv.dates.filter(i => new Date(i) > new Date(x) && new Date(i) < new Date(y)) }
      }).filter(j=> j.dates.length>0)
    }
  }).filter(k=> k.leave.length>0)
  )
}
console.log(findDates("2022-02-11","2022-02-18"));





/* var d = new Date();
function toData(a=new Date(d.getFullYear(),d.getMonth(),1), b=new Date(d.getFullYear(),d.getMonth()+1,0)){
    
    let result = user.map(item=>{
            return {
                id:item.id,
                name:item.name,
                leaves:item.leaves.map((it)=>{
                    let date=it.dates.filter(i=>(new Date(a)<new Date(i))&&(new Date(b)>new Date(i)));
                    if(date.length>0){
                        return {
                            dates:it.dates.filter(i=>new Date(a)<new Date(i)&&new Date(b)>new Date(i)),
                            id:it.id,
                            reason:it.reason
                        };
                    }
                    
                    else{
                        return null;
                    }
                }).filter(x=>!!x)
            };
        }
    );
    return result;
    
}
console.log(toData("2022-02-24"));
*/



