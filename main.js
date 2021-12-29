$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip('hide')
});

const css = $("#modecss");
const clicker = $("#darkmode");
$("#darkmode").click(function() {
    if (css.attr('href') == "style.css") {
        css.attr('href', 'dark.css');
        clicker.html('light.');
    } else {
        css.attr('href', 'style.css')
        clicker.html('dark.');
    }
})

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if(prefersDarkScheme.matches) {
    css.attr('href', 'dark.css');
    clicker.html('light.');
} else {
    css.attr('href', 'style.css')
    clicker.html('dark.');
}