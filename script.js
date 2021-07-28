// console.log("Hello World");

/**
 * How To Calculate:
 * Tip = (percentage * cost) / number of persons
 * Total = (percentage+1 * cost) / number of persons
 */

var tip = 0;
var total = 0;
var percentage = 0;
var cost = 0;
var people = 0;


var btns = document.querySelector(".btns").getElementsByTagName("button");

function round(num, places) {
    num = parseFloat(num);
    places = (places ? parseInt(places, 10) : 0)
    if (places > 0) {
        let length = places;
        places = "1";
        for (let i = 0; i < length; i++) {
            places += "0";
            places = parseInt(places, 10);
        }
    } else {
        places = 1;
    }
    return Math.round((num + Number.EPSILON) * (1 * places)) / (1 * places)
}

Array.prototype.forEach.call(btns, item => {
    // console.log(item.innerHtml);
    item.addEventListener('click', function() {
        //console.log(this.innerHTML.trim());


        try {
            document.querySelector(".clicked").classList.remove('clicked');
        } catch {}

        this.classList.add("clicked");

        //console.log(round(tip, 2), round(total, 2));
        percentage = eval(this.innerHTML.trim().replace('%', '/100'))
            // console.log(percentage);
    })
})



function calculateTip() {
    cost = document.querySelector("#bill").value;
    people = document.querySelector("#people").value;
    //console.log(cost);


    tip = round((percentage * cost) / people, 2);
    total = round(((1 + percentage) * cost) / people, 2);

    document.querySelector("#tip-amt").innerHTML = tip;
    document.querySelector("#total-amt").innerHTML = total;
}