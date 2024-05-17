$(document).ready(function() {
    $('#back-arrow').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Form submit handler
    $('form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/submit_form',
            data: $(this).serialize(),
            success: function(response) {
                alert('Űrlap sikeresen elküldve!');
            },
            error: function() {
                alert('Hiba történt az űrlap elküldésekor.');
            }
        });
    });

    // Load games from JSON
    $.getJSON('games.json', function(data) {
        var datalist = $('#games');
        data.forEach(function(game) {
            datalist.append('<option value="' + game.name + '">');
        });
    });
});
