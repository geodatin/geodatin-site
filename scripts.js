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

$(".sectionWrapper").scroll(function () {
  var navHeight = $(".navbar").outerHeight();

  if (0 >= $("#sectionContact").offset().top - navHeight) {
    $("#navbarBackground").css("background-color", "transparent");
  } else if (0 >= $("#sectionTeam").offset().top - navHeight) {
    $("#navbarBackground").css("background-color", "#1f1f1f");
  } else if (0 >= $("#sectionProjects").offset().top - navHeight) {
    $("#navbarBackground").css("background-color", "#2a2a2a");
  } else if (0 >= $("#sectionAbout").offset().top - navHeight) {
    $("#navbarBackground").css("background-color", "#1f1f1f");
  } else {
    $("#navbarBackground").css("background-color", "transparent");
  }
});
