$("a").on("click", function (event) {
  event.preventDefault();
  var hash = this.hash;
  var position =
    $(".sectionWrapper").scrollTop() +
    $(hash).offset().top -
    $(".navbar").outerHeight();

  $(".sectionWrapper").animate(
    {
      scrollTop: position,
    },
    400
  );
});
