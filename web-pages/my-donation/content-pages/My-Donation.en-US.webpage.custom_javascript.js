  // // Function to capture the GUID when a row is clicked
  // function captureRecordGuid(event) {
  //   // Check if the clicked element is a table row (tr)
  //   if (event.target.tagName === 'TR') {
  //     // Assuming the GUID is stored as a data attribute on the row
  //     var recordGuid = event.target.getAttribute('.view-grid');
      
  //     // Check if a GUID was found
  //     if (recordGuid) {
  //       // Use the recordGuid as needed
  //       console.log('Selected Record GUID: ' + recordGuid);
  //       alert("id:" + recordGuid);
  //     }
  //   }
  // }

  // // Attach a click event listener to the parent element containing the list view
  // // Replace 'listViewContainer' with the actual ID or selector for the container
  // var listViewContainer = document.getElementById('.entitylist.entity-grid'); // Update with your container ID or selector
  // if (listViewContainer) {
  //   listViewContainer.addEventListener('click', captureRecordGuid);
  // }


  //---------------------------------------------------
//checks if document is ready
// $(document).ready(function (){
//   //checks if list is loaded
//   $(".entitylist.entity-grid").on("loaded", function () {
//       //loop through all row of list
//       $(this).children(".view-grid").find("tr:even").each(function (){
//          // $(this).css("background-color", "#f2ffcc");
//       });

//       $(this).children(".view-grid").find("tr:odd").each(function (){
//           //$(this).css("background-color", "#c1d48c");
//       });
//   });
// });  




  // $(document).ready(function() {
  //   // Select all rows in the table
  //   var rows = $('.view-grid table tbody tr');

  //   // Iterate through each row and attach a click event listener
  //   rows.each(function() {
  //     $(this).on('click', function() {
  //       // Get the GUID from the clicked row
  //       var guid = $(this).data('id');
        
  //       // Show an alert with the GUID
  //       alert('Record clicked with GUID: ' + guid);

  //       // You can use 'guid' for further actions.
  //     });
  //   });
  // });


//   // Select all rows in the table
// var rows = document.querySelectorAll('.view-grid table tbody tr');

// // Iterate through each row and attach a click event listener
// rows.forEach(function(row) {
//   row.addEventListener('click', function() {
//     // Get the GUID from the clicked row
//     var guid = this.getAttribute('data-id');
    
//     // Show an alert with the GUID
//     alert('Record clicked with GUID: ' + guid);

//     // You can use 'guid' for further actions.
//   });
// });



/* Progress Bar when clicking DownloadReceipt Button   

const replay = document.querySelector("#loader");
const bar = document.querySelector("#bar");
const loader = document.querySelector("#percent");

let load = 0;

setInterval(() => {
  load = load + Math.floor(Math.random() * 5 + 1);
  if (load < 100) {
    loader.textContent = load + "%";
    bar.style.transform = `scalex(${load}%)`;
  } else {
    bar.style.transform = `scalex(100%)`;
    loader.textContent = "100%";
  }
}, 90);

replay.addEventListener("mouseover", function () {
  load = 0;
});

/* End */



