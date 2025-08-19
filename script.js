const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable,isAgeAbove50.hasAadharCard);
  if(isSeatAvailable){
    console.log("seat is available");
    if (isAgeAbove50){
      console.log("aged above 50");
      if (hasAadharCard){
        console.log("has aadhar card");
        alert("please come inside the bus sir /madam");
        confirm("are u sure come into the bus");
        
      }else{
        console.log("does not have aadhar card");
        passengerStatus.textContent= "seat is available ,aged above 50,don't have aadhar card";
      }
    }else{
      console.log("but your age is below 5o years");
      passengerStatus.textContent="you are not eligible to enter the bus as your age is below 50 years";

    }
  }else{
    console.log("seat is not available");
    passengerStatus.textContent="sorry seat is not available";
  }

      });
  

