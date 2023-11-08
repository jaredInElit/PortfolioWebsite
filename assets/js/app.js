const scrollUp = document.querySelector("#scroll-up");

const navigation = document.getElementById('navigation');
const burgerMenu = document.getElementById('burger-menu');
burgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open');
});

var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
  var button = dropdown.querySelector('.dropdown-btn');
  var content = dropdown.querySelector('.dropdown-content');
  content.style.display = 'none';

  button.addEventListener('click', function () {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});