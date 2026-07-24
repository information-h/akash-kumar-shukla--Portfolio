document.querySelectorAll('a[href^="#"]')
  .forEach(a=>a.onclick=e=>{e.preventDefault();
      document.querySelector(a.getAttribute('href')).
        scrollIntoView({behavior:'smooth'})});
$('#myForm').on('submit', function(event) {
    event.preventDefault();

   var formData = new FormData(this);

formData.append('service_id', 'service_pb8sx0t');
formData.append('template_id', 'emplate_pjtgfvv');
formData.append('user_id', 'qTfrRcmy6cPFwUVow');

$.ajax({
    url: 'https://api.emailjs.com/api/v1.0/email/send-form',
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    success: function () {
        alert('Email sent successfully!');
    },
    error: function (xhr) {
        console.log(xhr.responseText);
        alert('Failed: ' + xhr.responseText);
    }
});
