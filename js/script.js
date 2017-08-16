$(document).ready(function () {
    $(".btnmodal").click(function () {
        $("#myModalBox").modal('show');
    });

});

$(document).ready(function(){
  $(".btncal").click(function () {
      var name = $("#name").val();
      var email = $("#email").val();
      var re = /^\d[\d\(\)\ -]{4,14}\d$/;
      var phone = $("#phone").val();
      var fhone = re.test(phone);

      if (name.length < 1) {
          fail = "Введите имя ";
          alert(fail);
          return false;
      }
      if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
          fail = "Введен не корректный email ";
          alert(fail);
          return false;
      }
      if (fhone) ;
      else {
          fail = "Введен не корекный номер телефона ";
          alert(fail);
          return false;
      }
      $.ajax({
          url: "php/caall.php",
          type: "POST",
          data: ({
              name: name, email: email, phone: phone
          }),
          dataType: "html",// тип передачи
          success: function (data) {
              if (data == "ok") {
                $("#name").val("");
                $("#email").val("");
                $("#phone").val("");
                alert('Сообщение отправлено');
                $("#myModalBox").modal('hide');
              }
              else {
                  $("#eroor").text(data);
              }
          }
      });
  });

  $(".btncal1").click(function () {
      var name = $("#name1").val();
      var email = $("#email1").val();
      var re = /^\d[\d\(\)\ -]{4,14}\d$/;
      var phone = $("#phone1").val();
      var fhone = re.test(phone);

      if (name.length < 1) {
          fail = "Введите имя ";
          alert(fail);
          return false;
      }
      if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
          fail = "Введен не корректный email ";
          alert(fail);
          return false;
      }
      if (fhone) ;
      else {
          fail = "Введен не корекный номер телефона ";
          alert(fail);
          return false;
      }
      $.ajax({
          url: "php/caall.php",
          type: "POST",
          data: ({
              name: name, email: email, phone: phone
          }),
          dataType: "html",// тип передачи
          success: function (data) {
              if (data == "ok") {
                $("#name1").val("");
                $("#email1").val("");
                $("#phone1").val("");
                alert('Сообщение отправлено');
              }
              else {
                  $("#eroor").text(data);
              }
          }
      });
  });

  $(".btncal2").click(function () {
      var name = $("#name2").val();
      var email = $("#email2").val();
      var re = /^\d[\d\(\)\ -]{4,14}\d$/;
      var phone = $("#phone2").val();
      var fhone = re.test(phone);

      if (name.length < 1) {
          fail = "Введите имя ";
          alert(fail);
          return false;
      }
      if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
          fail = "Введен не корректный email ";
          alert(fail);
          return false;
      }
      if (fhone) ;
      else {
          fail = "Введен не корекный номер телефона ";
          alert(fail);
          return false;
      }
      $.ajax({
          url: "php/caall.php",
          type: "POST",
          data: ({
              name: name, email: email, phone: phone
          }),
          dataType: "html",// тип передачи
          success: function (data) {
              if (data == "ok") {
                $("#name2").val("");
                $("#email2").val("");
                $("#phone2").val("");
                alert('Сообщение отправлено');
              }
              else {
                  $("#eroor").text(data);
              }
          }
      });
  });


})

$(function() {

$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toTop').fadeIn();

} else {

$('#toTop').fadeOut();

}

});

$('#toTop').click(function() {

$('body,html').animate({scrollTop:0},800);

});

});
