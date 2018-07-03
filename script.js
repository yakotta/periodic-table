$(document).ready(function(){
    // Generates the periodic table
    for(var k in elements){
        if(elements.hasOwnProperty(k)){
            var row = $('<tr>');

            for(i=1; i<=18; i++){
                var cell = $('<td>');
                if(elements[k][i] != undefined){
                    var num = $('<div>').html(elements[k][i]['atomic_number']).addClass('num');
                    var sym = $('<div>').html(elements[k][i]['symbol']).addClass('sym');
                    // var name = $('<div>').html(elements[k][i]['element']).addClass('name');
                    cell.html($('<span>').append(num).append(sym).addClass('element'));
                    cell.attr('id', elements[k][i]['symbol']);
                    cell.addClass(elements[k][i]['orbital']);
                }
                row.append(cell);
            }
            $('#periodic-table').append(row);
            $('span.element').addClass('red').hide();
        }
    }

    // Listens for elements in the guess box
    var points = elementList.length;
    $('#guess-box').on('input', function(){
        var guess = $('#guess-box').val()
        for (i=0; i<elementList.length; i++) {
            if(guess.toUpperCase() == elementList[i][1].toUpperCase()){
                $('#guess-box').val('');
                var str = '#' + elementList[i][0] + ' span';
                $(str).removeClass('red');
                $(str).show();
                points -= 1;
                $('#remaining').html(points);
            }
        }
    });

    // Allows the player to quit
    function endgame(){
        $('#guess-box').prop('disabled', true)
        $('span.element').show();
    }

    $('#quit-button').click(function(){
        endgame();
    });
    
});