$.ajax("http://localhost:3000/destaque", {
    crossDomain: true,
    contentType: '*/*',
    method: 'GET',
    Accept: '*/*',
    accessControlAllowOrigin: "*"
}).done(function (data) {
    $('.titulo').text(data.titulo + " - " + data.data)
});

