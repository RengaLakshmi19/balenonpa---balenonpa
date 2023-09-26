/*$(document).ready(function (){
    
    $(".entitylist.entity-grid").on("loaded", function () {
        $(this).children(".view-grid").find("tr").each(function (){
        // do something with each row
        $(this).css("background-color", "yellow");
        });
    });
    fn();
}); 
function fn(){
var id = '{{user.id}}';
  alert(id);
    var acupdate = '{ "contact" : [' +
        '{ "contactid": "' + id + '"} ]}';
    var req = new XMLHttpRequest();
     var url = "PUT THE HTTP Flow URL Here";
     alert(url);
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(acupdate);
    console.log("Login Date has Been Captured");
}
*/

/*
$(document).ready(function (){
   $(".entitylist.entity-grid").on("loaded", function () {
      $(this).children(".view-grid").find("td[data-attribute='msnfp_name']").each(function (i, e){
          var value = $(this).data(value);
          td[data-attribute ="msnfp_name"].text()="test";
         // now that you have the value you can do something to the value
      });
   });
});
*/


//               $(document).ready(function (){
//    $(".entitylist.entity-grid").on("loaded", function () {
      
//       $(this).children(".view-grid").find("td[data-attribute='msnfp_name']").each(function (i, e){
          
//           var value = $(this).data(i);
//                      alert(value);

//           //td[data-attribute ="msnfp_name"].text()="test";8890
//            var statuscell = $(tr).find('td[data-attribute="statecode"]').text();  

//                       //  $(td).css("backgroud.color","#d9f2ea");

//          // now that you have the value you can do something to the value
//       });
//    });
// });

//    $(document).ready(function (){
//    $(".entitylist.entity-grid").on("loaded", function () {
//   // Select all rows in the table
//   var rows = document.querySelectorAll('.view-grid table tbody tr');

//   // Iterate through each row and attach a click event listener
//   rows.forEach(function(row) {
//     row.addEventListener('click', function() {
//       // Get the GUID from the clicked row
//       var guid = this.getAttribute('data-id');
      
//       // Show an alert with the GUID
//       alert('Record clicked with GUID: ' + guid);

//       // You can use 'guid' for further actions.
//     });
//   });
//    });
