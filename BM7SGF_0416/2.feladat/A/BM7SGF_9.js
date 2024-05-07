$(document).ready(function() {
  $('#loadDataBtn').click(function() {
    $.ajax({
      url: 'PK_orarend.json',
      dataType: 'json',
      success: function(data) {
        displayData(data);
      },
      error: function(xhr, status, error) {
        console.error('Hiba történt:', status, error);
      }
    });
  });

  function displayData(data) {
    var container = $('#dataContainer');
    container.empty(); // Törli a tartalmat az új adatok betöltése előtt

    // Lista létrehozása és hozzáadása a konténerhez
    var list = $('<ul id="orarend"></ul>');
    container.append(list);

    // Minden óra adatainak feldolgozása
    data.PK_orarend.ora.forEach(function(ora) {
      var listItem = $('<li></li>');
      listItem.text(ora.kurzus + ' - ' + ora.helyszin + ' - ' + ora.oktato + ' - ' + ora.szak);

      // Osztályok hozzáadása a listaelemekhez
      listItem.addClass('kurzus');
      listItem.addClass('helyszin');
      listItem.addClass('oktato');
      listItem.addClass('szak');

      list.append(listItem);
    });
  }
});
