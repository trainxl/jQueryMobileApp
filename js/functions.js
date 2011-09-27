var Wordpress = {};

Wordpress.getCategories = function() {
    $.getJSON('http://192.168.178.57/mobile-api/', function(data){
//        console.log(data);

    var items = "";

    $.each(data, function(key, val) {
        items += ('<li><a href="#details"><img class="ui-li-thumb" src=' + val['image'] + ' /><h2>' + val['title'] + '</h2><p>' + val['short'] + '</p></a></li>');
    });

    console.log(items);
    
    $('#dates-list').html(items);
    
    $('#dates-list').listview('refresh');






    })
}

$('a[href=#dates]').click(function(){
    Wordpress.getCategories();
})