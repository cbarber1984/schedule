var currentDay = function(){
    var date = dayjs().format("dddd, MM-DD-YYYY");
    $("#currentDay").html(date);
};

// load saved events
var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

// if no events exist in localStorage, create new object
if(!events) {
    events = [
        {
            hour: 9,
            description: ''
        },
        {
            hour: 10,
            description: ''
        },
        {
            hour: 11,
            description: ''
        },
        {
            hour: 12,
            description: ''
        },
        {
            hour: 13,
            description: ''
        },
        {
            hour: 14,
            description: ''
        },
        {
            hour: 15,
            description: ''
        },
        {
            hour: 16,
            description: ''
        },
    ]
}
}

// create events by looping over events array
var createEvents = function() {

    // create elements that make up an event
    var timeblockEl = $("<div>").addClass("row timeblock");

    console.log(timeblockEl);
    
    
    // var eventTimeEl = $('<div class ="col-2 hour"></div>').text(eventTime);
    // var eventDescriptionEl = $('<textarea class="col-8 description"></textarea>').text(eventDescription);
    // var saveButtonEl = $('<div class="col-2 saveBtn p-3 h-100 align-items-center d-flex justify-content-center"><i class="fa-solid fa-floppy-disk"></i></div>')

    // $('<div class="row timeblock"></div>').append(eventTimeEl).append(eventDescriptionEl).append(saveButtonEl).appendTo("#eventContainer");
};

// audit event times and update color
var auditEvent = function(){
    // call using jQuery class selector


};



// save event function
var saveEvent = function(){

};

// display current day in header
currentDay();
loadEvents();