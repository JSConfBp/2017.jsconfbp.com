$(document).ready(function () {
    if (document.querySelector('.teaser__background-check').offsetWidth < 2) {
        document.querySelector('.teaser__background').innerHTML = '<video preload="auto" autoplay muted loop poster="/assets/bg.jpg"><source src="/assets/jsc2017-ambient-bg-4.mp4" type="video/mp4"></video>'
    }


    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }

    var onMapClickHandler = function (event) {
        var that = $(this);
        that.off('click', onMapClickHandler);
        that.find('iframe').css("pointer-events", "auto");
        that.on('mouseleave', onMapMouseleaveHandler);
    }

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.google-map').on('click', onMapClickHandler);
})