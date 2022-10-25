const countDown = document.getElementById('countDown')
const deadline = 'Oct 30 2022';

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
}



const timer = setInterval(() => {
    var count = getTimeRemaining(deadline)
    if(count.minutes < 0 ){
      countDown.innerHTML = '<h2>החתונה היום !!!</h2>' 
      clearInterval(timer)
      console.log(':)')
    }
    else{
      countDown.innerHTML = ` <span> ${count.days} ימים, </span>
      <span>  ${count.hours} שעות, </span>
      <span>  ${count.minutes} דקות, </span>
      <span>  ${count.seconds} שניות </span>`
    }
}, 1000);




// push api code
// =============================================================

// if('serviceWorker' in navigator ){
//   send().catch(err => console.error(err))
 
// }

// async function send(){
//   console.log('Registering the service worker')
//   const register = await navigator.serviceWorker.register('/ws.js',{
//     scope:'/'
//   });
//   console.log('Service Worker registered ')

//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(pubKey)
//   })

//   //send the sub key to the server
//   await fetch('/sub',{
//     method:'POST',
//     body: JSON.stringify(subscription),
//     headers:{
//       'content-type':'application/json'
//     }
//   })
  
//   console.log('sub key was sent to the server :) ')

// }


// function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }