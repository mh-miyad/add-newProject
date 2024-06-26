const box1 = document.querySelector(".box_text-1");
const box2 = document.querySelector(".box_text-2");

box1.addEventListener("click", () => {
  box1.classList.add("active-box-1");
  box2.classList.remove("active-box-2");
});
box2.addEventListener("click", () => {
  box2.classList.add("active-box-1");
  box1.classList.remove("active-box-2");
});

//! Here Start Calender and Upcoming Event
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const monthSelector = document.querySelector(".dynamic-month");

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthSelector.textContent = month[new Date().getMonth()];

prevBtn.addEventListener("click", () => {
  let currentMonthIndex = month.indexOf(monthSelector.textContent);
  currentMonthIndex = (currentMonthIndex - 1 + month.length) % month.length;
  monthSelector.textContent = month[currentMonthIndex];
});

nextBtn.addEventListener("click", () => {
  let currentMonthIndex = month.indexOf(monthSelector.textContent);
  currentMonthIndex = (currentMonthIndex + 1) % month.length;
  monthSelector.textContent = month[currentMonthIndex];
});

!(function ($) {
  "use strict";

  var CalendarApp = function () {
    this.$body = $("body");
    (this.$calendar = $("#calendar")),
      (this.$event = "#calendar-events div.calendar-events"),
      (this.$categoryForm = $("#add-new-event form")),
      (this.$extEvents = $("#calendar-events")),
      (this.$modal = $("#my-event")),
      (this.$saveCategoryBtn = $(".save-category")),
      (this.$calendarObj = null);
  };

  /* on drop */
  (CalendarApp.prototype.onDrop = function (eventObj, date) {
    var $this = this;
    // retrieve the dropped element's stored Event Object
    var originalEventObject = eventObj.data("eventObject");
    var $categoryClass = eventObj.attr("data-class");
    // we need to copy it, so that multiple events don't have a reference to the same object
    var copiedEventObject = $.extend({}, originalEventObject);
    // assign it the date that was reported
    copiedEventObject.start = date;
    if ($categoryClass) copiedEventObject["className"] = [$categoryClass];
    // render the event on the calendar
    $this.$calendar.fullCalendar("renderEvent", copiedEventObject, true);
    // is the "remove after drop" checkbox checked?
    if ($("#drop-remove").is(":checked")) {
      // if so, remove the element from the "Draggable Events" list
      eventObj.remove();
    }
  }),
    /* on click on event */

    (CalendarApp.prototype.onEventClick = function (calEvent, jsEvent, view) {
      var $this = this;
      $this.$modal.show();
      $this.$modal.find(".close-dialog").click(function () {
        $this.$modal.hide("hide");
        $(".bckdrop").addClass("hide");
        $(".bckdrop").removeClass("show");
      });
      $.CalendarApp.$modal.show();
      $("body").addClass("modal-open");
      $(".bckdrop").addClass("show");
      $(".bckdrop").removeClass("hide");
    }),
    /* on select */
    (CalendarApp.prototype.onSelect = function (start, end, allDay) {
      var $this = this;
      $this.$modal.show();
      $(".bckdrop").addClass("show");
      $(".bckdrop").removeClass("hide");
      var form = $("<form></form>");
      form.append("<div class='row'></div>");
      form
        .find(".row")
        .append(
          "<div class='col-md-6'><div class='form-group'><label class='control-label'>Event Name</label><input class='form-control' placeholder='Insert Event Name' type='text' name='title'/></div></div>"
        )
        .append(
          "<div class='col-md-6'><div class='form-group'><label class='control-label'>Category</label><select class='form-select' name='category'></select></div></div>"
        )
        .find("select[name='category']")
        .append("<option value='bg-danger'>Danger</option>")
        .append("<option value='bg-success'>Success</option>")
        .append("<option value='bg-primary'>Primary</option>")
        .append("<option value='bg-info'>Info</option>")
        .append("<option value='bg-warning'>Warning</option></div></div>");
      $this.$modal
        .find(".delete-event")
        .hide()
        .end()
        .find(".save-event")
        .show()
        .end()
        .find(".modal-body")
        .empty()
        .prepend(form)
        .end()
        .find(".save-event")
        .unbind("click")
        .click(function () {
          form.submit();
          $(".bckdrop").addClass("hide");
          $(".bckdrop").removeClass("show");
        });
      $this.$modal.find(".close-dialog").click(function () {
        $this.$modal.hide("hide");
        $(".bckdrop").addClass("hide");
        $(".bckdrop").removeClass("show");
      });
      $("body").addClass("modal-open");
      $this.$modal.find("form").on("submit", function () {
        var title = form.find("input[name='title']").val();
        var beginning = form.find("input[name='beginning']").val();
        var ending = form.find("input[name='ending']").val();
        var categoryClass = form
          .find("select[name='category'] option:checked")
          .val();
        if (title !== null && title.length != 0) {
          $this.$calendarObj.fullCalendar(
            "renderEvent",
            {
              title: title,
              start: start,
              end: end,
              allDay: false,
              className: categoryClass,
            },
            true
          );
          $this.$modal.hide("hide");
          $(".bckdrop").addClass("hide");
          $(".bckdrop").removeClass("show");
        } else {
          alert("You have to give a title to your event");
        }
        return false;
      });
      $this.$calendarObj.fullCalendar("unselect");
    }),
    (CalendarApp.prototype.enableDrag = function () {
      //init events
      $(this.$event).each(function () {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()), // use the element's text as the event title
        };
        // store the Event Object in the DOM element so we can get to it later
        $(this).data("eventObject", eventObject);
        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex: 999,
          revert: true, // will cause the event to go back to its
          revertDuration: 0, //  original position after the drag
        });
      });
    });
  /* Initializing */
  (CalendarApp.prototype.init = function () {
    this.enableDrag();
    /*  Initialize the calendar  */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var form = "";
    var today = new Date($.now());

    var defaultEvents = [
      {
        title: "Meeting #3",
        start: new Date($.now() + 506800000),
        className: "bg-info",
      },
      {
        title: "Submission #1",
        start: today,
        end: today,
        className: "bg-danger",
      },
      {
        title: "Meetup #6",
        start: new Date($.now() + 848000000),
        className: "bg-info",
      },
      {
        title: "Seminar #4",
        start: new Date($.now() - 1099000000),
        end: new Date($.now() - 919000000),
        className: "bg-warning",
      },
      {
        title: "Event Conf.",
        start: new Date($.now() - 1199000000),
        end: new Date($.now() - 1199000000),
        className: "bg-purple",
      },
      {
        title: "Meeting #5",
        start: new Date($.now() - 399000000),
        end: new Date($.now() - 219000000),
        className: "bg-info",
      },
      {
        title: "Submission #2",
        start: new Date($.now() + 868000000),
        className: "bg-danger",
      },
      {
        title: "Seminar #5",
        start: new Date($.now() + 348000000),
        className: "bg-success",
      },
    ];

    var $this = this;
    $this.$calendarObj = $this.$calendar.fullCalendar({
      slotDuration: "00:15:00",
      /* If we want to split day time each 15minutes */
      minTime: "08:00:00",
      maxTime: "19:00:00",
      defaultView: "month",
      handleWindowResize: true,

      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay",
      },
      events: defaultEvents,
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar !!!
      eventLimit: true, // allow "more" link when too many events
      selectable: true,
      drop: function (date) {
        $this.onDrop($(this), date);
      },
      select: function (start, end, allDay) {
        $this.onSelect(start, end, allDay);
      },
      eventClick: function (calEvent, jsEvent, view) {
        $this.onEventClick(calEvent, jsEvent, view);
      },
    });

    //on new event
    this.$saveCategoryBtn.on("click", function () {
      var categoryName = $this.$categoryForm
        .find("input[name='category-name']")
        .val();
      var categoryColor = $this.$categoryForm
        .find("select[name='category-color']")
        .val();
      if (categoryName !== null && categoryName.length != 0) {
        $this.$extEvents.append(
          '<div class="calendar-events mb-3" data-class="bg-' +
            categoryColor +
            '" style="position: relative;"><i class="fa fa-circle text-' +
            categoryColor +
            ' me-2" ></i>' +
            categoryName +
            "</div>"
        );
        $this.enableDrag();
      }
    });
  }),
    //init CalendarApp
    ($.CalendarApp = new CalendarApp()),
    ($.CalendarApp.Constructor = CalendarApp);
})(window.jQuery),
  //initializing CalendarApp
  $(window).on("load", function () {
    $.CalendarApp.init();
  });
const createEventBtn = document.getElementById("create-new-event");

var CalendarApp = function () {
  this.$body = $("body");
  this.$calendar = $("#calendar");
  this.$event = "#calendar-events div.calendar-events";
  this.$categoryForm = $("#add-new-event form");
  this.$extEvents = $("#calendar-events");
  this.$modal = $("#my-event2");
  this.$saveCategoryBtn = $(".save-category");
  this.$calendarObj = null;
};
function showModal($this) {
  $this.$modal.show();
  $(".bckdrop").addClass("show");
  $(".bckdrop").removeClass("hide");

  var form = $("<form></form>");
  form.append("<div class='row'></div>");
  form
    .find(".row")
    .append(
      "<div class='col-md-6'><div class='form-group'><label class='control-label'>Event Name</label><input class='form-control' placeholder='Insert Event Name' type='text' name='title'/></div></div>"
    )
    .append(
      "<div class='col-md-6'><div class='form-group'><label class='control-label'>Category</label><select class='form-select' name='category'></select></div></div>"
    )
    .find("select[name='category']")
    .append("<option value='bg-danger'>Danger</option>")
    .append("<option value='bg-success'>Success</option>")
    .append("<option value='bg-primary'>Primary</option>")
    .append("<option value='bg-info'>Info</option>")
    .append("<option value='bg-warning'>Warning</option></div></div>");

  $this.$modal
    .find(".delete-event")
    .hide()
    .end()
    .find(".save-event")
    .show()
    .end()
    .find(".modal-body")
    .empty()
    .prepend(form)
    .end()
    .find(".save-event")
    .unbind("click")
    .click(function () {
      form.submit();
      $(".bckdrop").addClass("hide");
      $(".bckdrop").removeClass("show");
    });

  $this.$modal.find(".close-dialog").click(function () {
    $this.$modal.hide("hide");
    $(".bckdrop").addClass("hide");
    $(".bckdrop").removeClass("show");
  });

  $("body").addClass("modal-open");

  $this.$modal.find("form").on("submit", function () {
    var title = form.find("input[name='title']").val();
    var categoryClass = form
      .find("select[name='category'] option:checked")
      .val();
    if (title !== null && title.length != 0) {
      $this.$calendarObj.fullCalendar(
        "renderEvent",
        {
          title: title,
          start: new Date(), // Replace with appropriate start date
          end: new Date(), // Replace with appropriate end date
          allDay: false,
          className: categoryClass,
        },
        true
      );
      $this.$modal.hide("hide");
      $(".bckdrop").addClass("hide");
      $(".bckdrop").removeClass("show");
    } else {
      alert("You have to give a title to your event");
    }
    return false;
  });

  $this.$calendarObj.fullCalendar("unselect");
}
(CalendarApp.prototype.init = function () {
  /*  Initialize the calendar  */
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var form = "";
  var today = new Date($.now());

  var defaultEvents = [
    {
      title: "Meeting #3",
      start: new Date($.now() + 506800000),
      className: "bg-info",
    },
    {
      title: "Submission #1",
      start: today,
      end: today,
      className: "bg-danger",
    },
    {
      title: "Meetup #6",
      start: new Date($.now() + 848000000),
      className: "bg-info",
    },
    {
      title: "Seminar #4",
      start: new Date($.now() - 1099000000),
      end: new Date($.now() - 919000000),
      className: "bg-warning",
    },
    {
      title: "Event Conf.",
      start: new Date($.now() - 1199000000),
      end: new Date($.now() - 1199000000),
      className: "bg-purple",
    },
    {
      title: "Meeting #5",
      start: new Date($.now() - 399000000),
      end: new Date($.now() - 219000000),
      className: "bg-info",
    },
    {
      title: "Submission #2",
      start: new Date($.now() + 868000000),
      className: "bg-danger",
    },
    {
      title: "Seminar #5",
      start: new Date($.now() + 348000000),
      className: "bg-success",
    },
  ];

  var $this = this;
  $this.$calendarObj = $this.$calendar.fullCalendar({
    slotDuration: "00:15:00",
    /* If we want to split day time each 15minutes */
    minTime: "08:00:00",
    maxTime: "19:00:00",
    defaultView: "month",
    handleWindowResize: true,

    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },
    events: defaultEvents,
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar !!!
    eventLimit: true, // allow "more" link when too many events
    selectable: true,
    drop: function (date) {
      $this.onDrop($(this), date);
    },
    select: function (start, end, allDay) {
      $this.onSelect(start, end, allDay);
    },
    eventClick: function (calEvent, jsEvent, view) {
      $this.onEventClick(calEvent, jsEvent, view);
    },
  });
}),
  // Event handler for createEventBtn
  createEventBtn.addEventListener("click", function () {
    var $this = new CalendarApp();
    $this.init(); // Initialize CalendarApp
    showModal($this);
  });
