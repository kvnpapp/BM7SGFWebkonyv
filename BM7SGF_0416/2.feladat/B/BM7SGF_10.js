$(document).ready(function() {
  $('#loadDataBtn').click(function() {
    $.getJSON('PK_orarendobject.json', function(data) {
      displayData(data);
    })
    .fail(function(xhr, status, error) {
      console.error('Hiba történt:', status, error);
    });
  });

  function displayData(data) {
    var container = $('#dataContainer');
    container.empty(); // Törli a tartalmat az új adatok betöltése előtt

    // TERULET cím megjelenítése
    container.append('<h3>Tokaj-Hegyalja Egyetem</h3>');
    container.append('<p><strong>Irányítószám:</strong> ' + data.PK_orarend.Cim["Irányítószám"] + '</p>');
    container.append('<p><strong>Város:</strong> ' + data.PK_orarend.Cim.Város + '</p>');
    container.append('<p><strong>Utca:</strong> ' + data.PK_orarend.Cim.Utca + '</p>');
    container.append('<p><strong>Telefonszám:</strong></p>');
    data.PK_orarend.Telefonszam.forEach(function(telefonszam) {
      container.append('<p><strong>' + telefonszam.típus + ':</strong> ' + telefonszam.szám + '</p>');
    });

    // Órarend cím megjelenítése
    container.append('<h3>Órarend - 2024 tavasz</h3>');

    // Lista létrehozása és hozzáadása a konténerhez
    var list = $('<ul id="orarend"></ul>');
    container.append(list);

    // Minden óra adatainak feldolgozása és megjelenítése animációval
    data.PK_orarend.ora.forEach(function(ora, index) {
      var listItem = $('<li class="ora" style="display:none"></li>');
      listItem.append('<p><strong>Nap:</strong> ' + ora.idopont.nap + '</p>');
      listItem.append('<p><strong>Kezdés:</strong> ' + ora.idopont.kezdet + '</p>');
      listItem.append('<p><strong>Befejezés:</strong> ' + ora.idopont.veg + '</p>');
      listItem.append('<p><strong>Kurzus:</strong> ' + ora.kurzus + '</p>');
      listItem.append('<p><strong>Oktató:</strong> ' + ora.oktato + '</p>');
      listItem.append('<p><strong>Helyszín:</strong> ' + ora.helyszin + '</p>');
      listItem.append('<p><strong>Szak:</strong> ' + ora.szak + '</p>');

      // Animáció: Fade-in
      listItem.hide().appendTo(list).fadeIn(800 + index * 200);
    });
  }
});
