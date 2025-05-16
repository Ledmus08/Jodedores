const countries = [
  { name: "Argentina", zone: "America/Argentina/Buenos_Aires", flag: "https://flagcdn.com/ar.svg" },
  { name: "México", zone: "America/Mexico_City", flag: "https://flagcdn.com/mx.svg" },
  { name: "Chile", zone: "America/Santiago", flag: "https://flagcdn.com/cl.svg" },
  { name: "Colombia", zone: "America/Bogota", flag: "https://flagcdn.com/co.svg" },
  { name: "Perú", zone: "America/Lima", flag: "https://flagcdn.com/pe.svg" },
  { name: "Uruguay", zone: "America/Montevideo", flag: "https://flagcdn.com/uy.svg" },
  { name: "Paraguay", zone: "America/Asuncion", flag: "https://flagcdn.com/py.svg" },
  { name: "Venezuela", zone: "America/Caracas", flag: "https://flagcdn.com/ve.svg" },
  { name: "Ecuador", zone: "America/Guayaquil", flag: "https://flagcdn.com/ec.svg" },
  { name: "Bolivia", zone: "America/La_Paz", flag: "https://flagcdn.com/bo.svg" },
  { name: "Panamá", zone: "America/Panama", flag: "https://flagcdn.com/pa.svg" },
  { name: "Guatemala", zone: "America/Guatemala", flag: "https://flagcdn.com/gt.svg" },
  { name: "Honduras", zone: "America/Tegucigalpa", flag: "https://flagcdn.com/hn.svg" },
  { name: "El Salvador", zone: "America/El_Salvador", flag: "https://flagcdn.com/sv.svg" },
  { name: "Costa Rica", zone: "America/Costa_Rica", flag: "https://flagcdn.com/cr.svg" },
  { name: "República Dominicana", zone: "America/Santo_Domingo", flag: "https://flagcdn.com/do.svg" }
];


function updateTime() {
  const container = document.getElementById("timeList");
  container.innerHTML = "";

  countries.forEach(country => {
    const time = new Date().toLocaleTimeString("es-ES", {
      timeZone: country.zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const entry = document.createElement("div");
    entry.className = "time-entry";
    entry.innerHTML = `
    <span class="label">
      <img src="${country.flag}" alt="Bandera de ${country.name}" style="width: 24px; vertical-align: middle; margin-right: 8px;">
      ${country.name}
    </span>
    <span>${time}</span>
  `;  
    container.appendChild(entry);
  });
}

updateTime();
setInterval(updateTime, 1000);
