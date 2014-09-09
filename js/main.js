$(function(){
  $('#ItemList').mixItUp({
    load: {
      sort: 'random'
    },
    callbacks: {
      onMixEnd: function(state){
        var catString = $('[data-filter="'+state.activeFilter+'"]').html();
       
        if (catString !== undefined) {
           $('#filter-name').html('<i class="fa fa-filter"></i>'+catString).show('fast');
        }
        
      }
    }
  });
  $(document).scroll(function () {
    var y = $(document).scrollTop();
    var t = $('.container').offset().top;

    if (y > t) {
        $('.controls').fadeIn();
    } else {
        $('.controls').fadeOut();
    }
});
  $('.dropdown label').click(function() {
    if ($(this).parent().hasClass('active')) {
      $('.dropdown').removeClass('active');
    } else {
      $('.dropdown label i').removeClass('fa-times').addClass('fa-ellipsis-h');
      $('.dropdown').removeClass('active');
      $(this).parent().toggleClass('active');
    }

    $(this).find('i').toggleClass('fa-ellipsis-h').toggleClass('fa-times');
  });
  $('.filter').click(function() {
      $('.dropdown').removeClass('active');
      $('.dropdown label i').removeClass('fa-times').addClass('fa-ellipsis-h');
  });
  
  $('#filter-name').click(function() {
      $(this).hide();
  });
  
  $('#filter-name').hover(function() {
    $(this).find('i').toggleClass('fa-filter').toggleClass('fa-close');
  });
    
});
/*
  var photoList = Array('001', '002', '003', '004', '005', '006', '007', '008', '013', '014', '015', '009', '010', '016', '011', '012', '017', '026', '021', '024', '022', '033', '030', '018', '031', '023', '025', '034', '019', '020', '035', '032', '050', '058', '051', '059', '046', '040', '060', '036', '047', '045', '041', '061', '105', '111', '083', '068', '086', '076', '073', '066', '103', '084', '102', '069', '080', '091', '094', '106', '077', '101', '093', '110', '098', '118');
  
  var numLow = 1,
      numHigh = 66;

  imageID = rand(photoList,numHigh,numLow);
  imagePath = 'http://www.kristenzirkler.com/wp-content/uploads/wes/wes-char-'+imageID+'.jpg';
  
  $('.intro').delay(1000,'slow').append('<div class="bg" style="background-image: url('+imagePath+');"></div>');  
*/
/*
function rand(list,numHigh,numLow) {

  var choosePhoto,
      adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1,
      numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);

  if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
    choosePhoto = list[numRand];
    return choosePhoto;
  } else {
    return '001';
  }
}
function IsNumeric(n){
    return !isNaN(n);
}
*/