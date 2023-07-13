const endDate = "18 June 2024 12:00 PM"

document.getElementById("end_Date").innerHTML = endDate

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/ 1000;

    if (diff < 0) return;
    
    // console.log(diff);
   inputs[0].value = (Math.floor(diff/3600/24));
   inputs[1].value = (Math.floor(diff/3600) % 24);
   inputs[2].value = (Math.floor(diff/60) % 60);
   inputs[3].value = (Math.floor(diff) % 60);
    // Convert into Days
}
clock()

/**
 * 1 day = 24 hrs
 * 1 hrs = 60 minut
 * 60 minut = 3600 second
 */
setInterval(
    ()=>{
        clock()
    },
    1000
)


