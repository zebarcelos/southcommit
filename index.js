document.getElementById("edit-button").addEventListener("click", function() {
    var reservaText = document.getElementById("reserva-text");
    reservaText.setAttribute("contenteditable", "true");
    reservaText.focus();
  });

  document.getElementById("reserva-text").addEventListener("blur", function() {
    this.setAttribute("contenteditable", "false");
  });

  document.getElementById("reserva-text").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.blur();
    }
  });