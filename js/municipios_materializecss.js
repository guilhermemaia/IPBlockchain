$(document).ready(function () {

  // estado e cidades
  // https://gist.github.com/ografael/2037135
  $.getJSON('data/estados_cidades.json', function (data) {

    var items = [];
    var options = '<option value="" disabled selected>Selecione um Estado</option>';

    $.each(data, function (key, val) {
      options += '<option value="' + val.nome + '">' + val.nome + '</option>';
    });
    $("#estados").html(options);

    // montando form materializecss estados
    // https://materializecss.com/select.html 
    $('select').formSelect();



    $("#estados").change(function () {

      var options_cidades = '';
      var str = "";

      $("#estados option:selected").each(function () {
        str += $(this).text();
      });

      $.each(data, function (key, val) {
        if (val.nome == str) {
          $.each(val.cidades, function (key_city, val_city) {
            options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
          });
        }
      });

      $("#cidades").html(options_cidades);

      // montando form materializecss cidades
      // https://materializecss.com/select.html 
      $('select').formSelect();


    }).change();

  });

});

