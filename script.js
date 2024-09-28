function strikeItem(checkbox) {
  if (checkbox.checked) {
      checkbox.parentElement.classList.add('strike');
  } else {
      checkbox.parentElement.classList.remove('strike');
  }
}
