$(document).ready(function() {
  $("#btncal").click(function(){
    $("#myModalBox").modal('show');
  });

});
function callform(){
  $("#sendcal").click(function () {
    var name=$("#name").val();
    var email=$("#email").val();
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var phone= $("#phone").val();
    var fhone = re.test(phone);

    if (name.length < 1) {
        fail = "Введите имя ";
        $("#eroor").text(fail);
        return false;
    }
    if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
        fail = "Введен не корректный email ";
        $("#eroor").text(fail);
        return false;
    }
    if (fhone);
    else {
        fail = "Введен не корекный номер телефона ";
        $("#eroor").text(fail);
        return false;
    }
    $.ajax({
      url:"php/call.php",
      type: "POST",
      data:({
        name:name,email:email,phone:fhone
      }),
      dataType: "html",// тип передачи
      beforeSend: function () {
          $("#eroor").text("Идет обработка данных");
      },
      success: function (data) {
          if (data == "ok") {
              $("#myModalBox").modal('hide');
          }
          else {
              $("#eroor").text(data);
          }
      }
    });
  });
}
