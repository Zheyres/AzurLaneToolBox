
  // Fetch the content of the .txt file
  fetch('Assets/main_message.txt')
    .then(response => response.text())
    .then(data => {
      // Display the text in the specified container
      var textContainer = document.getElementById('main-text');
      if (textContainer) {
        textContainer.innerText = data;
      }
    });