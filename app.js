window.onload = function() {

    var button = document.querySelector('btn');
    var request;
    var url = "http://localhost/info2180-lab4/superheroes.php";
    var res
  
    button.addEventListener('click', function(e) {
      e.preventDefault();
  
    request = new XMLHttpRequest();
  
     
      request.onreadystatechange = function(){
          if (request.readyState == XMLHttpRequest.DONE){
              if (request.status == 200){
                  res = request.responseText
                  alert(res)
              }else{
                  alert("There was a problem with the request ")
              }
              
            }
      }
    request.open('GET', url);
    request.send();
    });
 
}












