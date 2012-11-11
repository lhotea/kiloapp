

// JavaScript Document
var db;
var worddatabase = [ 'Ente','Ampel','Lama','Limo','Mantel','Melone','Lippe','Palme','lila','Tomate','Tinte' ];	
var numberofimages = 3;
var loadedimages = 0;
var shortName = 'Kilo1';
var version = '0.1';
var displayName = 'Kilo1';
var maxSize = 65536;
db = openDatabase(shortName, version, displayName, maxSize);
db.transaction(
	function(transaction) {
            transaction.executeSql(
                'CREATE TABLE IF NOT EXISTS entries ' +
                ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
                ' word text NOT NULL, image_url TEXT NOT NULL, ' +
                ' level INTEGER NOT NULL );'
            );
         }
        );

initialiseDatabase();

db.transaction(
        function(transaction) {
            transaction.executeSql(
                'SELECT max(id) as "mid" FROM entries;',
                [],
                function (transaction, result) {
					localStorage.maxId = result.rows.item(0).mid;
				},
                errorHandler
            );
        }
);



//var db;
 $(document).ready(function() {
   
   $('#kilo-more').bind("click",function(event, ui) {
    $('#images').slideUp('fast', function () {
    var wordindex = uniquernd(1,localStorage.maxId,3);
	myindex= Math.floor(Math.random() * 3);
/*TO DO: this is crap but jsut to test */



    db.transaction(
        function(transaction) {
            transaction.executeSql(
                'SELECT * FROM entries WHERE id in (?,?,?);',
                wordindex,
                function (transaction, result) {
				$('#random-word p').text(result.rows.item(myindex).word);  
				for (i=0; i < result.rows.length; i++) {
                        var element = '#image-' + (i+1) + ' img'; 
                        var row = result.rows.item(i);
	$(element).replaceWith($('<img />').attr('src', 'images/' + row.image_url).bind("load",allLoaded));
	$(element).bind('tap',myindex !== i ? function() { $('#tryagain').popup("open"); } : function() {$('#bravo').popup("open");});
                        }
                    }
                );},
                errorHandler
            );
        }
    );
 });
});

//TO DO:need to deal with load errors
function allLoaded() { 
			$(this).addClass('loaded');
			if ( $('#images img.loaded').length == 3 ) {$('#images').slideDown('slow');}}
			
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


function initialiseDatabase() {

 db.transaction(
        function(transaction) {
            transaction.executeSql(
                'SELECT max(id) as "mid" FROM entries;',
                [],
                function (transaction, result) {
					if ( result.rows.item(0).mid < 1 ) {
		db.transaction(
        function(transaction) {
		for (i=0; i< worddatabase.length; i++) {
		var word = worddatabase[i] ;
		var image_url = word.toLowerCase() + '.jpg';
		var level = 1;
            transaction.executeSql(
                'INSERT INTO entries (word, image_url, level) VALUES (?, ?, ?);',
                [word,image_url, level],
                function () {},
                errorHandler
            );
        } 
		}
		);
		localStorage.maxId = worddatabase.length;
		}
		else {

                 localStorage.maxId = result.rows.item(0).mid;
				}
		},
                errorHandler
            );
        }
 );
}

function errorHandler(transaction, error) {
    alert('Oops. Error was '+error.message+' (Code '+error.code+')');
    return true; //stop and rollback
    //return false; //continue and commit
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
