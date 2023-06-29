// FOOTER YPF

function initializeFooter() {
  const buttons = document.querySelectorAll('#footer button');

  const handleClick = ({ currentTarget }) =>
    buttons.forEach((button) => {
      const list = document.querySelector(
        `#footer ul[data-index="${button.dataset.index}"]`
      );
      if (button.dataset.index === currentTarget.dataset.index) {
        list.classList.toggle('active');
        button.classList.toggle('active');
      } else {
        list.classList.remove('active');
        button.classList.remove('active');
      }
    });

  buttons.forEach((button) => button.addEventListener('click', handleClick));
}

initializeFooter();

// VIDEO MODAL

//YOUTUBE VIDEO

var url = $('#videoyoutube').attr('src');

// Open Modal
jQuery('.to-video').click(function () {
  jQuery('.modal').show();
  $('#videoyoutube').attr('src', url);
  $('body').addClass('stop');
});

// Close Modal
jQuery('.modal .close').click(function () {
  jQuery('.modal').hide();
  $('#videoyoutube').attr('src', '');
  $('body').removeClass('stop');
});

// TABS

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
