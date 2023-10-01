// This will be showd in the Navigation Bar of SpreadSheet
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('InSheet Flow')
      .addItem('Open InSheet Flow', 'showDialog')
      .addToUi();
}

// To include the external files for Javascript and CSS Styling
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


// The Dialog will open up to upload the file
function showDialog() {
  var email = Session.getActiveUser().getEmail(); //Tried to extract the email and display in Dialog, but was not able to display it
  var username = email.split('@')[0];

  var template = HtmlService.createTemplateFromFile('Page'); //Creating the form from the Page.html
  var htmlOutput = template.evaluate().setWidth(500).setHeight(500); //And setting the size
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'InSheet Flow'); //And showing the dialog popup
}

// Importing the data, with the choice (To add in the existing sheet or, to add in the new sheet)
function importDataToSheet(data, choice) {
    try {
        Logger.log("Processing CSV data...");
        var csvData = Utilities.parseCsv(data);  //Parsing the data 
        var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
        var sheet;

        // Creating the choice, whether to add in the new sheet or the current one
        if (choice === "new") {
            var timestamp = new Date().toISOString().replace(/[^0-9]/g, ""); //This was very much important so as to create a unique file each time
            sheet = spreadsheet.insertSheet("Imported Data " + timestamp);
        } else {
            sheet = spreadsheet.getActiveSheet();
        }

        // ******************************* IMPORTANT ********************************************************
        /* For handling the large dataset, the Google Scripts Limits were excedding, so what I have done the data which we have, had breaken into 
        smaller chunks (10 size) and then, instead of adding each of them one by one, I  collect them in an array and write them all at once 
        */
        var CHUNK_SIZE = 10;
        for (var i = 0; i < csvData.length; i += CHUNK_SIZE) {
            var chunk = csvData.slice(i, i + CHUNK_SIZE);
            var range = sheet.getRange(sheet.getLastRow() + 1, 1, chunk.length, chunk[0].length);
            range.setValues(chunk);
            Utilities.sleep(500); //Waiting for half secs, to avoid hitting rates
        }
    } catch (error) {
        Logger.log("Error: " + error.toString());
    }
}
