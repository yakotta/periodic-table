$(document).ready(function(){
    var table = $('#periodic-table');

    // Generates the periodic table
    for(var k in elements){
        if(elements.hasOwnProperty(k)){
            var row = $('<tr>');

            for(i=1; i<=18; i++){
                var cell = $('<td>')
                if(elements[k][i] != undefined){
                    cell.html(elements[k][i]['symbol']);
                    cell.addClass(elements[k][i]['orbital'])
                }
                row.append(cell);
            }
            table.append(row);
        }
    }
    
});