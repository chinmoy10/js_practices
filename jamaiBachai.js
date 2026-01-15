const boysData = [
  {
    name: "Rahim",
    jobType: "sorkari",
    position: "Office Assistant",
    salary: 19500
  },
  {
    name: "Karim",
    jobType: "besorkari",
    position: "Web Developer",
    salary: 42000
  },
  {
    name: "Sajid",
    jobType: "sorkari",
    position: "Clerk",
    salary: 20500
  },
  {
    name: "Imran",
    jobType: "besorkari",
    position: "Graphic Designer",
    salary: 55500
  },
  {
    name: "Hasan",
    jobType: "sorkari",
    position: "Junior Officer",
    salary: 22000
  },
  {
    name: "Rafi",
    jobType: "besorkari",
    position: "Digital Marketer",
    salary: 39500
  }
];

// sorkari >= 20000 or besorkari >= 40000

const jamais = boysData.filter((pola)=>{
   const selectedJamai = (pola.jobType === "sorkari" && pola.salary >= 20000) ||
    (pola.jobType === "besorkari" && pola.salary >= 40000)
    return selectedJamai;
})
// console.log(jamais.length);

const oneJamai = jamais.map(jamai=>{
    // console.log(jamai.name);
})

const jamaiLottery = Math.floor(Math.random()*jamais.length);
const selectJamai = jamais[jamaiLottery]?.name
console.log(selectJamai);
