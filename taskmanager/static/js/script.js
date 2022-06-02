document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);


  //datepicker initialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
    
  });

  // select initialization
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

});
