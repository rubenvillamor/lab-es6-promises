// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  console.log(step1)
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    console.log(step1)
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      console.log(step3)
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        }, (error) => {
          console.log(error)
        })
      }, (error) => {
        console.log(error)
      })
    }, (error) => {
      console.log(error)
    })
  }, (error) => {
    console.log(error)
  })
}, (error) => {
  console.log(error)
})
      

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    console.log(Response)
    return obtainInstruction("steak", 1)
  })
  .then( (step1 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    console.log(Response)
    return obtainInstruction("steak", 2)
  })
  .then( (step2 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    console.log(Response)
    return obtainInstruction("steak", 3)
  })
  .then( (step3 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    console.log(Response)
    return obtainInstruction("steak", 4)
  })
  .then( (step4 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    console.log(Response)
    return obtainInstruction("steak", 5)
  })
  .then( (step5 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    console.log(Response)
    return obtainInstruction("steak", 6)
  })
  .then( (step6 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    console.log(Response)
    return obtainInstruction("steak", 7)
  })
  .then( (step7 ) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    console.log(Response)
  })


// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const response1 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;

    const response2 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;

    const response3 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;

    const response4 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;

    const response5 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;

    const response6 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;

    const response7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${response7}</li>`;
     
  } catch( error) {
    console.log(error)
  }
}
makeBroccoli()

// Bonus 1



// Bonus 2 - Promise all

Promise.all ([
  obtainInstruction("brusselsSprouts", 0 ),
  obtainInstruction("brusselsSprouts", 1 ),
  obtainInstruction("brusselsSprouts", 2 ),
  obtainInstruction("brusselsSprouts", 3 ),
  obtainInstruction("brusselsSprouts", 4 ),
  obtainInstruction("brusselsSprouts", 5 ),
  obtainInstruction("brusselsSprouts", 6 )
])
.then((response) =>{
  console.log(response)
})
.catch((error) => {
  console.log(error)
})