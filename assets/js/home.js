const ListButton = document.querySelectorAll(".list_button");


  for (const i in ListButton) {
    if (ListButton[i].value == "PERSONAL") {
      ListButton[i].style.backgroundColor = "orange";
    } else if (ListButton[i].value == "SCHOOL") {
      ListButton[i].style.backgroundColor = "lightcoral";
    } else if (ListButton[i].value == "WORK") {
      ListButton[i].style.backgroundColor = "purple";
    } else if (ListButton[i].value == "CLEANING") {
      ListButton[i].style.backgroundColor = "blue";
    } else if (ListButton[i].value == "OTHER") {
      ListButton[i].style.backgroundColor = "maroon";
    }
  }

