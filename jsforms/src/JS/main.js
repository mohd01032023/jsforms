function calcResult(){
    let age = document.getElementById('main__age').value;
    const weight = document.getElementById('main__weight').value;
    let result = document.getElementById('main__result');

    if(age == "" || weight == ""){
        result.innerHTML = "Empty feilds"
        return;
    }

    if(age < 5 || age > 20){ //Validation begins here
        result.innerHTML = "Please enter an age between 5 and 20";
    }
    else if(weight < 10 || weight > 120){
        result.innerHTML = "Please enter a valid weight";
    }
    else{ //Data is valid
        age = Math.round(parseInt(age));
        result.style.color = "red";

        // Checks all possible overweight cases
        if((age < 8 && weight > 20) || (age > 7 && age < 11 && weight > 25) || (age > 10 && age < 16 && weight > 30) || (age > 15 && weight > 40)){
            result.innerHTML = "You are overweight"; return;
        }

        // Checks all possible underweight cases
        if((age < 8 && weight < 15) || (age > 7 && age < 11 && weight < 21) || (age > 10 && age < 16 && weight < 26) || (age > 15 && weight < 31)){
            result.innerHTML = "You are underweight"; return;
        }

        // Everything is fine
        result.style.color = "green";
        result.innerHTML = "You are fit";
    }
}