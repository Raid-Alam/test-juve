jQuery.juve( {
    url: '/wp-admin/admin-juve.php', // Assuming your WordPress installation is in the web root of your server.
    method: 'POST',
    data: {
        action: 'get_latest_post'
    }
} ).done( function ( response ) {
    console.log('From juve: ' + response);
} );

jQuery.juve( {
    url: wpApiSettings.root + 'wp/v2/posts',
    method: 'GET',
    beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
    }
} ).done( function ( response ) {
    console.log( 'From Rest API: ' + response[0].excerpt.rendered );
} );