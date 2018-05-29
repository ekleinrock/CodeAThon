
// hig-ux-kit JS

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = regex.exec(url);
  if (!results) {
    return null;
  };
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(function() {


  /*$("#spinner")
    .spinner('delay', 200) //delay in ms
    .spinner('changed', function(e, newVal, oldVal) {
      // trigger lazed, depend on delay option.
    })
    .spinner('changing', function(e, newVal, oldVal) {
      // trigger immediately
    });*/

  //btn-showmore
  $.fn.extend({
      toggleText: function(a, b){
          return this.text(this.text() == b ? a : b);
      }
  });

  $('.btn-showmore').click(function() {
    $(this).toggleText('Show Details', 'Hide Details').toggleClass('active');
  });

  //multipanel select
  $('#multiselect').multiselect();

  //multiselect tag
  $('select.chosen').chosen();
  $('.selectAll').click(function() {
    $('.chosen option').prop('selected', true);
    $('select').trigger('chosen:updated');
  });
  $('.dselectAll').click(function() {
    $('.chosen option').prop('selected', false);
    $('select').trigger('chosen:updated');
  });

  //select option char length
  var charLength = 25; //default char limit
  if ($(".select-container").data("length")) {
    charLength = $('.select-container').data("length"); // user defined char limit
  }
  $('.select-container > select > option').text(function(i, text) {
      if (text.length > charLength) {
          return text.substr(0, charLength) + '...';
      }
  });

  // Defining the local dataset
  var data = [
    'Health Insurance', 'Home Insurance', 'Auto Insurance', 'Life Insurance',
    'More about insurance', 'Hartford insurance policy'
  ];

  // Constructing the suggestion engine
  var data = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: data
  });

  // Initializing the typeahead
  $('.typeahead').typeahead({
      hint: true,
      highlight: true, /* Enable substring highlighting */
      minLength: 1 /* Specify minimum characters required for showing result */
  },
  {
      name: 'data',
      source: data
  });

  //bootstrap-table default
  $('#table').bootstrapTable({
      url: '/app/json/data.json'
  });
  //bootstrap-table custom
  $('.table-category-sm').change(function(){
    $("[data-field='notes'], [data-field='author'], [data-field='date']").addClass('displayNone');
    $(".displayBlock").removeClass("displayBlock");
    $("[data-field=" + $(this).val() + "]").addClass('displayBlock');
 });

  //show error fields on click
  $('.show-errors-btn').click(function() {
    $('.form-selectors')[0].reset();
    $('.radio > label').removeClass('radio-active');
    $('.checkbox > label').removeClass('checkbox-active');
    $('.form-group:not(.tile-click-radio, .radio-custom, .percent-field, .optional-field, .disable-states)').addClass('has-error');
  });

  // progress bar complete/active trigger
  $('.progress-list-item').each(function(n) {
    $(this).click(function() {
      if (n == 0) {
        $(this).addClass('active').removeClass('complete');
        $('.progress-list-item-text:eq(0)').html('Active');
      } else {
        $('.progress-list-item:eq(0)').removeClass('active').addClass('complete');
        $('.progress-list-item-text:eq(0)').html('Completed');
      }
    });
  });

  $('#datetimepicker1').datetimepicker({
    viewMode: 'days',
    //minDate: new Date(),
    //debug: true,
    format: 'MM/DD/YYYY',
    icons: {
      next: 'icon icon-caret-right',
      previous: 'icon icon-caret-left'
    }
  });

  /* bootstrap-validator -> start */
  var form = $('form');
  var cbox = $('input[type=checkbox]');

  //checkbox change event
  cbox.on('change', function(e) {
    checkboxValidator(cbox, form, 1);
  });

  //form submit
  // form.on('submit', function(e) {
  //   e.preventDefault();
  // });

  function checkboxValidator(all, form, select) {
    var isChecked = false;
    var select = select || 1; //set count for checkbox selection

    if (all.filter(':checked').length >= select) {
      isChecked = true;
    } else {
      isChecked;
    }
    all.not(':checked').prop('required', !isChecked);
    //form.validator('remove').validator();
  }
  /* bootstrap-validator -> end */

  //bootstrap-select
  $('select.selectpicker').selectpicker();

  //carousel
  $("#hig-carousel").carousel();

  //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //popover
  $('.popover-dismissible').popover();

  $('.popover-toggle').each(function() {
    $(this).popover({
      trigger: 'manual',
    }).click(function(e) {
      $(this).popover('toggle');
      $('.popover-close').click(function(e) {
        $(this).parents().popover('hide');
      });
    });
  });


  $('#load-primary, #load-secondary, #load-tertiary').on('click', function() {
    var $this = $(this);

    $this.button('loading');

    setTimeout(function() {
      $this.button('reset');
    }, 2000);

  });

  //radio selector
  var radioSelector = '.tile-selectors .radio > label';
  $(radioSelector).on('click', function() {
    //checks if radio-disabled class is applied, if it's applied don't add radio-active
    if(!$(this).hasClass('input-disabled')) {
      $(radioSelector).removeClass('radio-active');
      $(this).addClass('radio-active');
    }
  });

  var tileRadioSel = '.tile-click-radio div .radio-inline';
  $(tileRadioSel).on('click', function() {
    $(tileRadioSel).removeClass('tile-radio-active');
    $(this).addClass('tile-radio-active');
  });

  //checkbox selector
  var checkboxSelector = '#demoCheckbox .checkbox input';
  $(checkboxSelector).click(function() {
    $('#demoCheckbox .checkbox > label:has(input:checked)').addClass('checkbox-active');
    $('#demoCheckbox .checkbox > label:has(input:not(:checked))').removeClass('checkbox-active');
    if ($('#demoCheckbox .checkbox > label:has(input:checked)').length > 0) {
      $('#demoCheckbox .checkbox:eq(4) > label').addClass('input-disabled');
    } else {
      $('#demoCheckbox .checkbox:eq(4) > label').removeClass('input-disabled');
    }
  });

  $(".checkbox label span, .radio label span").each(function() {
    if ($(this).find('.icon').length == 0) {
      $(this).addClass('margin-top');
    }
  });
  //toggle selector
  $('.btn-group:eq(0) > .btn').click(function() {
    $('.btn-group:eq(0) > .btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.btn-group:eq(1) > .btn').click(function() {
    $('.btn-group:eq(1) > .btn').removeClass('active');
    $(this).addClass('active');
  });


  jQuery('.carousel-slick').each(function (index, value) {
      var activePhoto = getParameterByName('DataPhotoId');
      var initialPhoto = 0;
      if(activePhoto && activePhoto.match(/^[0-9a-zA-Z]{1,16}$/)){
        //get the index of the item that has matching data-photo-id
        if(jQuery('[data-photo-id="'+activePhoto+'"]',jQuery(this)).length>0){
          initialPhoto = jQuery('[data-photo-id="'+activePhoto+'"]',jQuery(this)).index();
        }
      }
      jQuery(this).slick({
        initialSlide: initialPhoto,
        asNavFor:'.carousel-nav-slick',
        prevArrow:'<button class="scroll-previous"><i class="icon icon-caret-left"></i></button> ',
        nextArrow:'<button class="scroll-next"><i class="icon icon-caret-right"></i></button>'
      });
  });
  jQuery('.carousel-nav-slick').each(function (index, value) {
      jQuery(this).slick({
        slidesToScroll: 6,
        asNavFor: '.carousel-slick',
        //centerMode: true,  //if this is on, then slidesToScroll does not work
        focusOnSelect: true,
        swipeToSlide: false,
        variableWidth: true,
        prevArrow:'<button class="cycle-previous"><i class="icon icon-caret-left"></i></button> ',
        nextArrow:'<button class="cycle-next"><i class="icon icon-caret-right"></i></button>'
      });
    });

});


/* dropzone -> start */
Dropzone.options.dzUpload = {
  paramName: "file", // Must match the name of the HttpPostedFileBase argument that the Upload action expects.
  dictDefaultMessage: "<div class='defaultText'>Drag and drop a file here</div>or &nbsp; <span class='btn btn-primary btn-xs'>choose file</span>",
  //acceptedFiles: "image/*", // Accept images only
  init: function() {
    this.on('success', function(file, resp) {
      $(".dz-image").replaceWith("<div class='dz-image'><i class='glyphicon glyphicon-file'></i><div>");
      $(".dz-success-mark").replaceWith("<div class='dz-success-mark'><i class='icon icon-check-mark'></i></div>");
      $(".dz-details").replaceWith("<div class='dz-success-text'><b>" + file.name + "</b><br> Upload Complete</div>");
    });
    this.on("sending", function(file, xhr, formData) {
      //alert('sending....');
    });
    this.on('error', function(file, errorMessage) {
      $(".dz-error-mark").replaceWith("<div class='dz-error-mark'><i class='icon icon-not-valid'></i></div>");
      $(".dz-image").replaceWith("<div class='dz-image'><i class='icon icon-policy'></i><div>");
      $('.dz-error-message').html('<b>'+ file.name + '</b><br>Your file was not properly uploaded or other copy for an error.');
    });
    //this.on("thumbnail", function(file, dataUrl) {
    //$(".dz-image").replaceWith("<div class='dz-image'><i class='icon icon-document'></i></div>");
    //})x;
  },
  // uploadprogress: function(file, progress, bytesSent) {
  //   // Display the progress
  //   var progressElement = file.previewElement.querySelector("[data-dz-uploadprogress]");
  //       progressElement.style.width = progress + "%";
  //       progressElement.querySelector(".progress-text").textContent = progress + "%";
  // }
};
/* dropzone -> end */

hljs.initHighlightingOnLoad();
