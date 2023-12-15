
  function filterOptions() {
    var input, filter, dropdown, options, option, i;
    input = document.querySelector('.combobox-input');
    filter = input.value.toUpperCase();
    dropdown = document.getElementById('dropdown');
    options = dropdown.getElementsByClassName('dropdown-option');

    for (i = 0; i < options.length; i++) {
      option = options[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
  }

  function selectOption(value) {
    document.querySelector('.combobox-input').value = value;
    closeDropdown();
  }

  function closeDropdown() {
    document.getElementById('dropdown').style.display = 'none';
  }

  document.addEventListener('click', function (e) {
    var dropdown = document.getElementById('dropdown');
    var input = document.querySelector('.combobox-input');
    if (e.target !== input && e.target.parentNode !== dropdown) {
      closeDropdown();
    }
  });

  document.querySelector('.combobox-input').addEventListener('focus', function () {
    document.getElementById('dropdown').style.display = 'block';
  });

