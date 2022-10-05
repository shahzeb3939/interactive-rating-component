function changeColor() {
    let element = document.querySelector("body");
    element.classList.add("yellow-color")
  }

  function displaySecondScreen() {
    document.querySelector(".firstContainer").classList.add("none")
    document.querySelector(".secondContainer").classList.remove("none")
  }

  function saveRating(element) {
    let rating = element.querySelector("span").innerHTML;
    document.querySelector(".secondContainer div").innerHTML = `You selected ${rating} out of 5`
  }