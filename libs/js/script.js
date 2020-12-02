$('#postcodebtn').click(function() {

    $.ajax({
        url: "libs/php/postcodeLookup.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalcode: $('#pcode').val(),
            country: $('#selCountry').val()
            
        },
        success: function(result) {
            console.log(result);

            if (result.status.name == "ok") {

                $('#countryCode').html(result['data'][0]['countryCode']);
                $('#placeName').html(result['data'][0]['placeName']);
                $('#adminName2').html(result['data'][0]['adminName2']);
                
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
});

$('#icaobtn').click(function() {

    $.ajax({
        url: "libs/php/icaoCodeLookup.php",
        type: 'POST',
        dataType: 'json',
        data: {
            ICAO: $('#icaoCode').val()
            
        },
        success: function(result) {
            console.log(result);

            if (result.status.name == "ok") {

                $('#clouds').html(result['data']['clouds']);
                $('#stationName').html(result['data']['stationName']);
                $('#humidity').html(result['data']['humidity']);
                $('#temperature').html(result['data']['temperature']);
                $('#windDirection').html(result['data']['windDirection']);
                
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
        
        }
    });
});

$('#oceanbtn').click(function() {

    $.ajax({
        url: "libs/php/oceanName.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#longitude').val(),
            lat: $('#latitude').val()
        },
        success: function(result) {
            console.log(result);

            if (result.status.name == "ok") {
                
                $('#name').html(result['data']['name']);
                
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
        
        }
    });
});