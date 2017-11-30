$(function() {


  if (sessionStorage.getItem('ageIsOk')) {
    $('.popup-age').css('display', "none");
    console.log("on rentre pas");
  }

  if (!sessionStorage.getItem('ageIsOk')) {
    $('#sender').click((e) => {
      e.preventDefault();

      var age = $('#age').val();
      console.log(age)

      if (age >= 18 || sessionStorage.getItem('ageIsOk') === "yes") {

        console.log("on rentre dedans")
        $('.popup-age').css("display", "none");
        sessionStorage.setItem("ageIsOk", "yes")
      }
      else if (age < 18 || sessionStorage.getItem('ageIsOk') === "no"){
        disableScreen();
        sessionStorage.setItem("ageIsOk", "no")
      }
    });
  }


  if (sessionStorage.getItem('cookieAccepted')) {
    $('#popup').css("display", "none");
    console.log("nada");
  }

  if (!sessionStorage.getItem('cookieAccepted')) {
    $('#agreed').click((e) => {
      console.log("agreed");
      $('#popup').css('display', 'none');
      sessionStorage.setItem('cookieAccepted', 'yes');
    });
    $('#refused').click((e) => {
      console.log("refused");
      $('#popup').css("display", "none");
      sessionStorage.setItem('cookieAccepted', "no");
    });

  }

  function disableScreen() {
    // creates <div class="overlay"></div> and
    // adds it to the DOM
    var div= document.createElement("div");
    div.className += "overlay";
    document.body.appendChild(div);
  }


  $('#right-button').click((e) => {
    var tab = ['assets/img/tarzan.jpg', 'assets/img/slider1.jpg', 'assets/img/slider2.jpg'];
    console.log(tab);

    $('.banner').css('background-image', "url('assets/img/slider1.jpg')");

  });

  $('#left-button').click((e) => {
    var tab = ['assets/img/tarzan.jpg', 'assets/img/slider1.jpg', 'assets/img/slider2.jpg'];
    console.log(tab);

    $('.banner').css('background-image', "url('assets/img/tarzan.jpg')");

  });

});
