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


function validateInput(inputElement) {
    var inputValue = inputElement.value;

    // Use the pattern property to check if the input matches the regex pattern
    if (!inputElement.checkValidity()) {

        // console.log("Valid input: " + inputValue);
        // Add your logic for valid input here
        inputElement.value = inputValue.slice(0, -1);
    } 
    
    // else {
    //     // console.log("Invalid input: " + inputValue);
    //     // Add your logic for invalid input here
    // }
}


var btns = document.querySelector(".btns").getElementsByTagName("button");

function round(num, places) {
    num = parseFloat(num);
    // console.log(num);
    if (!num) {
        return 0.00
    }
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
    var res = Math.round((num + Number.EPSILON) * (1 * places)) / (1 * places)
    return res === Infinity ? 0.00 : res;
}

const getVal = (value) => {
    return value === '' ? 0 : value
}


function calculateTip() {


    cost = getVal(document.querySelector("#bill").value);
    percentage = getVal(percentage);


    people = getVal(document.querySelector("#people").value);
    //console.log(cost);


    if (!useRequire("#people")) {
        // console.log("Resturns");
        return
    }

    // console.log("No Resturns");
    tip = round((percentage * cost) / people, 2);
    total = round(((1 + percentage) * cost) / people, 2);

    document.querySelector("#tip-amt").innerHTML = tip;
    document.querySelector("#total-amt").innerHTML = total;
    document.getElementById("reset").classList.add("active")

}


function reset() {
    var inputs = document.getElementsByTagName('input');
    [...inputs].forEach(elem => {
        elem.value = '';
    })

    document.querySelector("#tip-amt").innerHTML = "0.00";
    document.querySelector("#total-amt").innerHTML = "0.00";
    document.getElementById("reset").classList.remove("active")
}

// Check Event on bill input
document.getElementById("bill").addEventListener('blur', calculateTip);


// Check Event on buttons
Array.prototype.forEach.call(btns, item => {
    // console.log(item.innerHtml);
    item.addEventListener('click', function() {
        //console.log(this.innerHTML.trim());


        try {
            document.querySelector(".clicked").classList.remove('clicked');
        } catch {}

        this.classList.add("clicked");

        //console.log(round(tip, 2), round(total, 2));
        var getpercentage = eval(this.innerHTML.trim().replace('%', '/100'));
        percentage = getpercentage === undefined ? 0 : getpercentage;
        // console.log(percentage)
        calculateTip();
        // console.log(percentage);
    })
})

// Check Event on people input

function useRequire(selector) {
    let peeps = document.querySelector(selector);


    //var val = peeps.value === '' ? null : peeps.value;
    // console.log(val);
    // console.log(this.parentElement.parentElement.parentElement.classList)
    if (peeps.value === '') {
        // console.log(val);
        peeps.parentElement.parentElement.parentElement.classList.add("focus-err");
        return false;


    } else {
        // console.log(val);
        peeps.parentElement.parentElement.parentElement.classList.remove("focus-err");
        // people = peeps.value;
        return true;
    }
}


const peeps = document.querySelector("#people");
//console.log(peeps)
peeps.addEventListener('blur', function() {
    // var res = useRequire("#people");
    // if (res) {
    //     calculateTip();
    // }


    calculateTip();
})


document.getElementById("reset").addEventListener('click', reset)