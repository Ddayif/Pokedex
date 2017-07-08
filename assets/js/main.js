/*$(document).ready(function() {

    for (var i = 1; i < 152; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
        $('div.pokemon').append(pokePic);
    }

    $('img', this).click(function() {

        var uniqueId = $(this).attr('id');

        var webAddress = "http://pokeapi.co/api/v1/pokemon/" + uniqueId;

        var types = " ";

        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";

            }
        }, 'json');

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types +
                "</ul>" +
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
    });
});*/

$(document).ready(function(){// obtengo
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon",
        type: "GET",
        dataType: "json",
        data: {"limit": "719"},
    })
    .done(function(res) {
        console.log("success");
        for (var i = 1; i < 719; i++) {
        var pokePic = $("<a class='waves-effect waves-light btn mi-btn' href='#caja-modal'><div class= 'col s4 m4'><img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "><img class=iconos src=assets/icon/pokeball_gray.png><img class=icon-2 src=assets/icon/valentines-heart.png><img class=icon-3 src=assets/icon/data.png></div>");
            $("div.pokemon").append(pokePic);
        }


        $("#caja-modal").modal("open");
            $("#caja-modal").modal("close");

        $(".mi-btn").click(function(){
        var uniqueId = $(this).attr('id');
        var webAddress = "http://pokeapi.co/api/v2/pokemon" + uniqueId;
        var types = " ";

        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";

            }
        }, "json");

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types +
                "</ul>" +
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
     })
})            
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete');
        });
    });






/*
    $("img").click(function() {
        var miModal = $(".caja-modal");   
        event.preventDefault();
        miModal.append($(this)); 

        var uniqueId = $(this).attr('id');
        var webAddress = "http://pokeapi.co/api/v2/pokemon" + uniqueId;
        var types = " ";

        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";

            }
        }, "json");

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types +
                "</ul>" +
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
    })
   }); 

 })*/