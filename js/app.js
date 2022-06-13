

function openTab(evt, tabb) {

  let i , popularContent , tablinks;

  popularContent = document.getElementsByClassName("popular__content");

  for (i = 0; i < popularContent.length; i++) {
    popularContent[i].style.display = "none";

    console.log('aaa', popularContent[i].style);
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active","");
  }

  document.querySelector(tabb).style.display = "block";
  evt.currentTarget.className += " active";
}




 