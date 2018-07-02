$(document).ready(function(){
    var table = $('#periodic-table');

    // Generates the periodic table
    for(var k in elements){
        if(elements.hasOwnProperty(k)){
            var row = $('<tr>');

            for(i=1; i<=18; i++){
                var cell = $('<td>');
                if(elements[k][i] != undefined){
                    var span = $('<span>')
                    cell.html(span.html(elements[k][i]['symbol']));
                    cell.attr('id', elements[k][i]['symbol']);
                    cell.addClass(elements[k][i]['orbital']);
                }
                row.append(cell);
            }
            table.append(row);
            $('span').hide()
        }
    }
    // Listens for elements in the guess box
    $('#guess-box').on('input', function(){
        var guess = $('#guess-box').val()
        for (i=0; i<elementList.length; i++) {
            if(guess.toUpperCase() == elementList[i][1].toUpperCase()){
                $('#guess-box').val('');
                var str = '#' + elementList[i][0] + ' span';
                $(str).show();
            }
        }
    });
    
});