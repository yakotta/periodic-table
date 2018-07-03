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
                    cell.html($('<span>').append(num).append(sym).addClass('element'));
                    cell.addClass(elements[k][i]['symbol']);
                    cell.addClass(elements[k][i]['orbital']);
                    cell.addClass('cell');
                }
                row.append(cell);
            }
            $('#periodic-table').append(row);
            $('span.element').hide();
        }
    }

    // Creates a list of element names and numbers
    $('#element-list h1').html('Elements');
    for(i=0; i<elementList.length; i++){
        var item = $('<li>').html((i+1) + '. ' + elementList[i][1]).addClass(elementList[i][0]);
        $('#element-list ul').append(item.addClass('fail'));
        
    }
    $('#element-list').hide()

    // Listens for elements in the guess box
    var points = 0;
    $('#guess-box').on('input', function(){
        var guess = $('#guess-box').val()
        for (i=0; i<elementList.length; i++) {
            if(guess.toUpperCase() == elementList[i][1].toUpperCase()){
                $('#guess-box').val('');

                var str = '.' + elementList[i][0] + ' span';
                $(str).parent().addClass('success')
                $(str).show();

                str = 'li.' + elementList[i][0];
                $(str).removeClass('fail');

                points += 1;
                $('#points').html(points + "/" + elementList.length);
            }
        }
    });

    // Creates the timer
    var timer = new Timer();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#timer .values').html(timer.getTimeValues().toString().slice(3));
    });
    timer.addEventListener('targetAchieved', function (e) {
        $('#timer .values').html("time's up!");
        endgame();
    });

    // Starts the gamees
    $('#start-button').click(function(){
        $('#guess-box').prop('disabled', false)
        $('#start-button').hide();
        $('#ui .info').css('display', 'inline');
        timer.start({countdown: true, startValues: {seconds: 600}});
        $('#timer .values').html(timer.getTimeValues().toString().slice(3));
    });

    // Allows the player to quit
    function endgame(){
        $('#guess-box').prop('disabled', true)
        $('span.element').show();
        $('#element-list').show();
        $('.cell').not('.success').addClass('fail').removeClass('s d p f');
    }

    $('#quit-button').click(function(){
        timer.stop();
        endgame();
    });    
});