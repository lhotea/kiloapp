

// JavaScript Document

var worddatabase = [ 'Ente','Ampel','Lama','Limo','Mantel','Melone','Mund','Palme','lila','Tomate' ];	

//var db;
 $(document).ready(function() {
  $('#kilo-more').bind("click",function(event, ui) {
/*	var wordindex = [ Math.floor(Math.random() * worddatabase.length) ];
	wordindex.push(Math.floor(Math.random() * worddatabase.length));
	wordindex.push(Math.floor(Math.random() * worddatabase.length));
*/
    var wordindex = uniquernd(0,worddatabase.length,3);
	myindex= Math.floor(Math.random() * 3);
/* this is crap but jsut to test */
    $('#random-word p').text(worddatabase[wordindex[myindex]]);
	$('#image-1 img').attr('src', 'images/' + worddatabase[wordindex[0]].toLowerCase() + '.jpg');
	$('#image-1 img').unbind('click').bind('click',myindex !== 0 ? function() { $('#tryagain').popup("open"); } : function() {$('#bravo').popup("open");});
	$('#image-2 img').attr('src', 'images/' + worddatabase[wordindex[1]].toLowerCase() + '.jpg');
	$('#image-2 img').unbind('click').bind('click',myindex != 1 ? function() { $('#tryagain').popup("open"); } : function() {$('#bravo').popup("open");});
	$('#image-3 img').attr('src', 'images/' + worddatabase[wordindex[2]].toLowerCase() + '.jpg');
	$('#image-3 img').unbind('click').bind('click',myindex != 2 ? function() { $('#tryagain').popup("open"); } : function() {$('#bravo').popup("open");});
	});
 });

function uniquernd (min,max,count) {
 var seen = {};
 var result = [];
 for (var i=0;i<count;i++) {
  while ( result.length < (i+1) ) {
   var rnd = Math.floor(Math.random() * max + min );
   if ( seen[rnd.toString()] === undefined ) {
    seen[rnd.toString()] = "1";
    result.push(rnd);
   }
  }
 }
 return result;
}
/*$('#createEntry form').submit(createEntry);
	$('#settings form').submit(saveSettings);
	$('#settings').bind('pageAnimationStart', loadSettings);
	$('#dates li a').click(function(){
        var dayOffset = this.id;
        var date = new Date();
        date.setDate(date.getDate() - dayOffset);
        sessionStorage.currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

		var shortName = 'Kilo';
        var version = '1.0';
        var displayName = 'Kilo';
        var maxSize = 65536;
        db = openDatabase(shortName, version, displayName, maxSize);
        db.transaction(
         function(transaction) {
            transaction.executeSql(
                'CREATE TABLE IF NOT EXISTS entries ' +
                ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
                ' date DATE NOT NULL, food TEXT NOT NULL, ' +
                ' calories INTEGER NOT NULL );'
            );
         }
        );
        refreshEntries();
    });
});

function refreshEntries() {
    var currentDate = sessionStorage.currentDate;
    $('#date h1').text(currentDate);
    $('#date ul li:gt(0)').remove();
    db.transaction(
        function(transaction) {
            transaction.executeSql(
                'SELECT * FROM entries WHERE date = ? ORDER BY food;',
                [currentDate],
                function (transaction, result) {
                    for (var i=0; i < result.rows.length; i++) {
                        var row = result.rows.item(i);
                        var newEntryRow = $('#entryTemplate').clone();
                        newEntryRow.removeAttr('id');
                        newEntryRow.removeAttr('style');
                        newEntryRow.data('entryId', row.id);
                        newEntryRow.appendTo('#date ul');
                        newEntryRow.find('.label').text(row.food);
                        newEntryRow.find('.calories').text(row.calories);
                        newEntryRow.find('.delete').click(function(){
                            var clickedEntry = $(this).parent();
                            var clickedEntryId = clickedEntry.data('entryId');
                            deleteEntryById(clickedEntryId);
                            clickedEntry.slideUp();
                        });
                    }
                },
                errorHandler
            );
        }
    );

}


function createEntry() {
    var date = sessionStorage.currentDate;
    var calories = $('#calories').val();
    var food = $('#food').val();
    db.transaction(
        function(transaction) {
            transaction.executeSql(
                'INSERT INTO entries (date, calories, food) VALUES (?, ?, ?);',
                [date, calories, food],
                function(){
                    refreshEntries();
                    jQT.goBack();
                },
                errorHandler
            );
        } //,
        //transactionErrorHandler,
        //transactionSuccessHandler
    );
    return false;
}

function deleteEntryById(id) {
    db.transaction(
        function (transaction) {
            transaction.executeSql('DELETE FROM entries WHERE id=?;', [id], null, errorHandler);
        }
    );
}

function errorHandler(transaction, error) {
    alert('Oops. Error was '+error.message+' (Code '+error.code+')');
    return true; //stop and rollback
    //return false; //continue and commit
}

function saveSettings() {
	localStorage.age = $('#age').val();
	localStorage.budget = $('#budget').val();
	localStorage.weight = $('#weight').val();
	jQT.goBack();
    return false;
}

function loadSettings() {
	$('#age').val(localStorage.age);
	$('#budget').val(localStorage.budget);
	$('#weight').val(localStorage.weight);
}
 
*/
