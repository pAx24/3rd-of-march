function showProj(uri) {
    $('#modal').toggleClass('d-block');
    if(uri[uri.length - 1] == 'f')
    $('#modal-body').append(
     '<object id="modal-data"\
      type="application/pdf"\
      style="aspect-ratio: 16/11; width:100%;"\
      data="./asset/files/'+uri+'"\
      ></object>');
    else if(uri[uri.length - 1] == 'g')
    $('#modal-body').append(
      '<img id="modal-data"\
       style="width:100%;"\
       src="./asset/files/'+uri+'"\
       ></img>');
    else
      $('#modal-body').append('<video controls id="modal-data" style="width:100%";><source src="./asset/files/'+uri+'" type="video/mp4" /></video>');
}

function hideModal() {
  $('#modal').toggleClass('d-block');
  $('#modal-data').remove();
}

$(function() {
  hideModal();
});