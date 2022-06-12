$('body').on('click.offcanvas.data-api', '[data-bs-toggle=offcanvas]', function() {
  var $raw_id = $(this).attr("id");

  var id = $raw_id.split("-")[1];

  $('#num-ombrellone').html(id);
});