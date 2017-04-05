
$('#showButton').on('click',function(event){
    event.preventDefault();
    var line = $("#lineInput").val();
    getData(line);
});

function getData(line){
    window.location.href = '/?line='+line;
}
