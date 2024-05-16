$(document).ready(function() {
    $('#back-arrow').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/submit_form.php',
            data: $(this).serialize(),
            success: function(response) {
                alert('Űrlap sikeresen elküldve!');
            },
            error: function() {
                alert('Hiba történt az űrlap elküldésekor.');
            }
        });
    });
});
