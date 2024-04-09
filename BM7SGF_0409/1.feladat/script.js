$(document).ready(function() {
    $('#start-animation').click(function() {
        // Első animáció: Mozgatás balra, méret és betűméret csökkenése
        $('#animated-box').animate({
            left: '300px',
            width: '350px',
            fontSize: '18pt'
        }, 1000)
        // Második animáció: Mozgatás lefelé, méret csökkenése
        .animate({
            top: '500px',
            width: '50px',
            left: '450px'
        }, 1000, function() {
            // Harmadik animáció: Mozgatás vissza, átlátszóság csökkentése
            $(this).animate({
                left: '50px',
                opacity: '0.4'
            }, 1000, function() {
                // Negyedik animáció: Visszatérés a kezdeti állapothoz, betűméret növelése
                $(this).animate({
                    opacity: '1',
                    fontSize: '30pt'
                }, 1000, function() {
                    // Vége: Visszatérés a kezdeti állapothoz, betűméret visszaállítása
                    $(this).animate({
                        left: '50px',
                        width: '300px',
                        top: '300px',
                        fontSize: '30pt',
                        opacity: '1'
                    }, 1000, function() {
                        // Végső lépés: Értesítés a végről
                        alert("Vége");
                    });
                });
            });
        });
    });
    $("#toggleButton").click(function(){
        $("#paragraph").toggle();
        var buttonText = $("#toggleButton").text() == "Bekezdés Elrejtése" ? "Bekezdés Megjelenítése" : "Bekezdés Elrejtése";
        $("#toggleButton").text(buttonText);
        alert("Művelet elvégezve");
      });

      $("#close-box").click(function(){
        $('#animated-box').animate({
          height: 'toggle',
          left: '300px',
          width: '300px',
          top: '300px',
          fontSize: '30pt',
          opacity: '1'
        },1000);
      }); 
});
