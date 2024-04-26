
document.querySelector('.calculate').addEventListener("click",
function(){
    document.querySelector('.output').style.display="none";

// show loader

document.querySelector(".loader").style.display="block";
setTimeout(BMI,2000);

}
);

document.querySelector('.clear').addEventListener("click",Clear)



function BMI(){
  

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    let index = (weight / (((height/100)*height)/100)).toFixed(0);

    if(height&&weight !=0){
        const output = document.querySelector(".output");
        const state = document.querySelector(".state");
        output.innerHTML = "Your BMI is " + index;
        if(index < 15){
            state.innerHTML = "<span style='color:#fcbf49;background-color:white;padding:3px;border-radius:6px;'> Very Severly Underweight!</span>"
        }
        else if(index<16){
            state.innerHTML = "<span style='color:#f77f00;background-color:white;padding:3px;border-radius:6px;'> Severly Underweight!</span>"
        }
        else if(index<18.5){
            state.innerHTML = "<span style='color:#ff006e;background-color:white;padding:3px;border-radius:6px;'>  Underweight!</span>"
        }
        else if(index<25){
            state.innerHTML = "<span style='color:Green;background-color:white;padding:3px;border-radius:6px;'>  Normal (Healthy Weight) </span>"
        }
        else if(index<30){
            state.innerHTML = "<span style='color:orange;background-color:white;padding:3px;border-radius:6px;'>  Overweight</span>"
        }
        else if(index<35){
            state.innerHTML = "<span style='color:#023e8a;background-color:white;padding:3px;border-radius:6px;'>  Obese class I (Moderate Obese)!</span>"
        }
        else if(index<40){
            state.innerHTML = "<span style='color:#03045e;background-color:white;padding:3px;border-radius:6px;'>  Obese class II (Severly Obese)!</span>"
        }
        else if(index>40){
            state.innerHTML = "<span style='color:#001d3d;background-color:white;padding:3px;border-radius:6px;'>  Obese class III (Very Severly Obese)!</span>"
        }
document.querySelector('.output').style.display="block";
document.querySelector('.loader').style.display="none";

    }else{
        alert("Error!");
    }
}


function Clear(){
    document.getElementById('height').value = "";
    document.getElementsByClassName('output').innerHTML = "";
    document.getElementById('weight').value = "";
    document.getElementsByClassName('state').innerHTML = "";
}