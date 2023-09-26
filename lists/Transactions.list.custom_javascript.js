/*
$(document).ready(function (){
             var entityList = $(".entitylist.entity-grid").eq(0);
    //checks if list is loaded
    entityList.on("loaded", function () {
        //loop through all row of list
         $(this).children(".view-grid").find("tr:even").each(function (){
             $(this).children(".vi")
            $(this).css("background-color", "#f2ffcc");
            var value = $(this).data(value);
        //alert(value);            
        });

        $(this).children(".view-grid").find("tr:odd").each(function (){
            $(this).css("background-color", "#c1d48c");
        });
    });
}); 


/*
$(document).ready(function() {
  // Find all list items in the table
  $('.list-item').each(function(i) {
    // Get the text content of the "Status" column for each row
    var status = $(this).find('.msnfp_name').text().trim();
    alert(status(i));
    
    // Check the status and apply background color accordingly
    //if (status === "Completed") {
      $(this).css('background-color', 'yellow');
    //} else if (status === "In Progress") {
    //  $(this).css('background-color', 'yellow');
    //}
  });
});
 

               $(document).ready(function (){
    $(".entitylist.entity-grid").on("loaded", function () {
       $(this).children(".view-grid").find("td[data-attribute='msnfp_name']").each(function (i, e){
//alert("test");

           var value = $(this).data(i);
                    //  alert(value);

           //td[data-attribute ="msnfp_name"].text()="test";8890
            var statuscell = $(tr).find('td[data-attribute="statecode"]').text();

                       //  $(td).css("backgroud.color","#d9f2ea");

//          // now that you have the value you can do something to the value
       });
    });
 });

*/

$(document).ready(function () {
    DisplayDownloadReceiptButton();

    // or
    //SetLinkAllCells();
});


//dynamically create text in td - 20/9/2023
DisplayDownloadReceiptButton = function () {
    var entityList = $(".entitylist.entity-grid").eq(0);

    entityList.on("loaded", function () {
        //Number of Records
           // alert($(entityList).find('table tbody tr').length);

        //$(this).children(".view-grid").find("tr").each(function (index, tr) {
                    $(entityList).find('table tbody tr').each(function (index, tr) {


 //alert(index,tr);
            //var primaryColumn = $(tr).find('td')[0];
             var TransactionId = $(this).attr("data-id");
            //alert(id);

            var tr = $(this);
                var Receipt = $(tr).find('td[data-attribute="msnfp_name"]').attr("data-value");
                //alert(Receipt);
                //var newElement = '<a href="www.google.com" class="details-link has-tooltip" data-toggle="tooltip">' + "Download Receipt" + '</a>';
                //var newElement = '<input type="button" onclick="DownloadReceiptFn("'+TransactionId+'")" value="Download Receipt">';
                var newElement = $('<input/>').attr({
                type: "button",
                id: "DownloadReceiptFn",
                class:"DownloadButton",
                value: "Download Receipt",
               
                onclick: "DownloadReceiptFn('"+TransactionId+"')"
            });
 
               // $(tr).find('td[data-attribute="msnfp_name"]').append(newElement);
                //$(tr).find('td[data-attribute="msnfp_name"]').text("123");
                               // $(tr).find('td[data-attribute="baleno_downloadreceipt"]').text("123");

                $(tr).find('td[data-attribute="baleno_downloadreceipt"]').text("");

                $(tr).find('td[data-th="Download Receipt"]').append(newElement);

 
               // $(tr).find('td[data-attribute="msnfp_name"]').text("Download Receipt");
 
 //alert("3");
            /// or retrieve column by name
            /* var primaryColumn = tr.find('td[data-attribute="msnfp_name"]');
alert("4");
            var url = $(primaryColumn).find("a")[0].href;
           alert("5");
            console.log("URL: " + url);
            if (!!url) {
                $(tr).css("cursor", "pointer")
                // remove menu dropdown
                $(tr).find('td[aria-label="action menu"]').remove();

                $(tr).click(function () {
                    window.location.href = url;
                });
            }*/
        });
    });
};


//Function to download the Receipt from Notes - 20/9/2023
function DownloadReceiptFn(TransactionId){
//alert(TransactionId);
var TransactionId = TransactionId;

             //var FlowUrL = "https://prod-06.centralindia.logic.azure.com:443/workflows/44c0f44e2a4b4bb69084e305c70a8e52/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ckN_strPlcQe9m2lJQozQiaMOB_MqukHwDMTm18ViIQ";
            var FlowUrL = "https://prod-08.centralindia.logic.azure.com:443/workflows/0fadedbe66b14a14a47715b82b8aac90/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tjup4jx8YTrRR7xpeWPTAGiwCmIsq6a36Rey9JDxwdI";
            let body = {
                     "TransactionId" : TransactionId
                };
                CallPowerAutomateFlow(FlowUrL, body);         
        //alert("Success");
        }


function CallPowerAutomateFlow(flowURL, RequestData) {
    //debugger;
     let req = new XMLHttpRequest();
    req.open("POST", flowURL, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            /*if (this.status === 200) {
                let resultJson = JSON.parse(this.response);

                
            } else {
                console.log(this.statusText);
             }*/

             if (this.status === 200) { 
                    var result = JSON.parse(this.response); 
 
                    var fileName = result.Name; 
                    var fileCont = result.ContentBytes; 
                     var filebyte = base64ToBufferArray(fileCont); 
                    downloadFile(fileName, [filebyte]); 
                    alert("Receipt successfully downloaded.");
            } else { 
                Xrm.Utility.alertDialog(this.responseText); 
            } 

        }
    };
    req.send(JSON.stringify(RequestData));
}

function base64ToBufferArray(base64content) { 
    var binaryString = window.atob(base64content); 
    var binaryLen = binaryString.length; 
    var bytes = new Uint8Array(binaryLen); 
    for (var i = 0; i < binaryLen; i++) { 
        var ascii = binaryString.charCodeAt(i); 
        bytes[i] = ascii; 
    } 
    return bytes; 
} 
  
function downloadFile(name,data) { 
        var blob = new Blob(data, { type: "octet/stream" }), 
            url = window.URL.createObjectURL(blob); 
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { 
            window.navigator.msSaveOrOpenBlob(blob, name); 
        } else { 
            const url = window.URL.createObjectURL(blob); 
            const a = document.createElement('a'); 
            document.body.appendChild(a); 
            a.href = url; 
            a.download = name; 
            a.click(); 
            window.URL.revokeObjectURL(url); 
            document.body.removeChild(a); 
        } 
}

