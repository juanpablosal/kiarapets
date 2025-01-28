
  // Configurar la fecha mínima como el día de hoy
  const dateInput = document.getElementById("cita");

  // Función para obtener la fecha de hoy en formato YYYY-MM-DD
  function setMinDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const minDate = `${year}-${month}-${day}`;
    dateInput.setAttribute("min", minDate);
  }

  // Ejecutamos la función al cargar la páginaconsole.log("Configurando la fecha mínima como el día de hoy");
console.log("Fecha mínima:", minDate);
  setMinDate();