//wraps all the code in this function to be ran once the page is fully loaded

$(document).ready(function() {
  // pulls the 24 hour hour from dayjs to set the past present or future class
  var hourString = dayjs().format('H');
  // converts the dayjs value to a number for the comparisons below
  var currentHour = Number(hourString);
  console.log(currentHour);
  console.log(typeof hourString);
  console.log(typeof currentHour);

  // array to cycle through each of the hours for setting past present or future
  var hoursArray = ['#hour-9', '#hour-10', '#hour-11', '#hour-12', '#hour-13', '#hour-14', '#hour-15', '#hour-16', '#hour-17' ];

  // var btnArray = ['#btn9', '#btn10', '#btn11', '#btn12', '#btn13', '#btn14', '#btn15', '#btn16', '#btn17']


  $(function () {
    // TODO: Add a listener for click events on the save button. 
    // event listeners for each individual button to prevent saving tasks that weren't meant to be saved
    $('#btn9').click(function() {
      var btn9 = $('#9').val();
      localStorage.setItem('text9', btn9);
    })
    $('#btn10').click(function() {
      var btn10 = $('#10').val();
      localStorage.setItem('text10', btn10);
    })
    $('#btn11').click(function() {
      var btn11 = $('#11').val();
      localStorage.setItem('text11', btn11);
    })
    $('#btn12').click(function() {
      var btn12 = $('#12').val();
      localStorage.setItem('text12', btn12);
    })
    $('#btn13').click(function() {
      var btn13 = $('#13').val();
      localStorage.setItem('text13', btn13);
    })
    $('#btn14').click(function() {
      var btn14 = $('#14').val();
      localStorage.setItem('text14', btn14);
    })
    $('#btn15').click(function() {
      var btn15 = $('#15').val();
      localStorage.setItem('text15', btn15);
    })
    $('#btn16').click(function() {
      var btn16 = $('#16').val();
      localStorage.setItem('text16', btn16);
    })
    $('#btn17').click(function() {
      var btn17 = $('#17').val();
      localStorage.setItem('text17', btn17);
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // applies the future class if it is before work hours
    if (currentHour < 9) {
        for (i = 0; i < hoursArray.length; i++) {
          $(hoursArray[i]).addClass('future');
        }
    } else if (currentHour > 8 && currentHour < 18) {
      // applies past future or present when the hour is during work hours
        for (i = 9; i <= 17; i++) {
          var adjustedIndex = i - 9;
            if (i < currentHour) {
              $(hoursArray[adjustedIndex]).addClass('past');
            } else if (i === currentHour) {
              $(hoursArray[adjustedIndex]).addClass('present');
            } else if (i > currentHour) {
              $(hoursArray[adjustedIndex]).addClass('future');
            }
        }
          // applies past when the hour is after working hours
    } else if (currentHour > 17) {
      for (i = 0; i < hoursArray.length; i++) {
        $(hoursArray[i]).addClass('past');
      }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // this code pulls any saved tasks from localstorage and displays them on page load
    var saved9 = localStorage.getItem('text9');
      $('#9').text(saved9);
    var saved10 = localStorage.getItem('text10');
      $('#10').text(saved10);
    var saved11 = localStorage.getItem('text11');
      $('#11').text(saved11);
    var saved12 = localStorage.getItem('text12');
      $('#12').text(saved12);
    var saved13 = localStorage.getItem('text13');
      $('#13').text(saved13);
    var saved14 = localStorage.getItem('text14');
      $('#14').text(saved14);
    var saved15 = localStorage.getItem('text15');
      $('#15').text(saved15);
    var saved16 = localStorage.getItem('text16');
      $('#16').text(saved16);
    var saved17 = localStorage.getItem('text17');
      $('#17').text(saved17);

    // TODO: Add code to display the current date in the header of the page.
    // this code pulls the date from dayjs and formats it to display above the scheduler
    var currentDate = dayjs().format('hh:mm a dddd MMMM DD YYYY');
    var showDay = $('#currentDay');
    showDay.text(currentDate);

  });


});