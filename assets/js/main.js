$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


$(window).on('pageshow', function() {
    $('[data-toggle="tooltip"]').tooltip('hide')
});

const css = $("#modecss");
const clicker = $("#darkmode");
$("#darkmode").click(function() {
    if (css.attr('href') == "./assets/css/style.css") {
        css.attr('href', './assets/css/dark.css');
        clicker.html('light.');
    } else {
        css.attr('href', './assets/css/style.css')
        clicker.html('dark.');
    }
})

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if(prefersDarkScheme.matches) {
    css.attr('href', './assets/css/dark.css');
    clicker.html('light.');
} else {
    css.attr('href', './assets/css/style.css')
    clicker.html('dark.');
}

$(".ball_tool_tip").hover(
    function() {
        const text = $("#tool_text");
        text.attr('style', 'width: 0%!important;position: relative;display: initial;')
    }, function() {
        const text = $("#tool_text");
        text.attr('style', 'width: 0%!important;position: relative;display: none;')
    }
)