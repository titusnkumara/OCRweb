( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // add scroll event
    // function stopSidebar() {
    //     console.log("You scrolled in div.");

    // }
    // document.getElementsByClassName('container')[0].addEventListener("scroll", stopSidebar);

    // Events
    $( controller.events ).on( 'init', function () {
        console.log( 'Init event' );
    } );

    $( controller.events ).on( 'exit', function () {
        console.log( 'Exit event' );
    } );

    $( controller.events ).on( 'css', function () {
        console.log( 'CSS event' );
    } );

    $( controller.events ).on( 'opening', function ( event, id ) {
        console.log( 'Opening event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'opened', function ( event, id ) {
        console.log( 'Opened event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closing', function ( event, id ) {
        console.log( 'Closing event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closed', function ( event, id ) {
        console.log( 'Closed event of slidebar with id ' + id );
    } );

    // Initialize Slidebars
    controller.init();



    // Bottom Slidebar controls
    $( '.js-open-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-4' );
    } );

    $( '.js-close-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-4' );
    } );

    $( '.js-toggle-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-4' );
    } );
	

    // actually open the feature sidebar
	$( '#featureselection' ).on( 'click', function ( event ) {
        event.stopPropagation();


        controller.open( 'slidebar-feature' );
        vex.dialog.alert({
                message: 'Testing the default theme.',
                className: 'vex-theme-default'
            })
        $(".vex-overlay").css({
                'height': ($("body").height()-$('#featurediv').height()-10 + 'px')
            });
        $(".vex-dialog-message").html($('#featureSelection').html());
        

    } );

    // open the table side bar
    $( '#tableimage' ).on( 'click', function ( event ) {
        event.stopPropagation();

        controller.open( 'slidebar-table' );

        vex.dialog.alert({
                message: 'Testing the default theme.',
                className: 'vex-theme-default'
            })
        $(".vex-overlay").css({
                'height': ($("body").height()-$('#tablediv').height()-10 + 'px')
            });
        $(".vex-dialog-message").html($('#tabledescreption').html());
  
        

    } );


    // open language detection sidebar
    $( '#languagedetectBox' ).on( 'click', function ( event ) {
        event.stopPropagation();

        // open a specifi side bar
        controller.open( 'slidebar-language' );


        vex.dialog.alert({
                message: '',
                className: 'vex-theme-default'
            })
        // setting the overlay size as total height - specific sidebar height
        $(".vex-overlay").css({
                'height': ($("body").height()-$('#languagedetectdiv').height()-10 + 'px')
            });

        // read non visible html part and set the content on description
        $(".vex-dialog-message").html($('#languagedetect').html());
  
        

    } );


    // open number detection sidebar
    $( '#numberdetectImg' ).on( 'click', function ( event ) {
        event.stopPropagation();

        // open a specifi side bar
        controller.open( 'slidebar-numbers' );


        vex.dialog.alert({
                message: '',
                className: 'vex-theme-default'
            })
        // setting the overlay size as total height - specific sidebar height
        $(".vex-overlay").css({
                'height': ($("body").height()-$('#numberdetectdiv').height()-10 + 'px')
            });

        // read non visible html part and set the content on description
        $(".vex-dialog-message").html($('#numberdetect').html());
  
        

    } );

    // open font recognition sidebar
    $( '#fontrecogImg' ).on( 'click', function ( event ) {
        event.stopPropagation();

        // open a specifi side bar
        controller.open( 'slidebar-fontrec' );


        vex.dialog.alert({
                message: '',
                className: 'vex-theme-default'
            })
        // setting the overlay size as total height - specific sidebar height
        $(".vex-overlay").css({
                'height': ($("body").height()-$('#fontrecognitiondiv').height()-10 + 'px')
            });

        // read non visible html part and set the content on description
        $(".vex-dialog-message").html($('#fontRecognition').html());
  
        

    } );


    // open pre-processing info box
    $( '#preprocessingImg' ).on( 'click', function ( event ) {
        event.stopPropagation();

        vex.dialog.alert({
                message: '',
                className: 'vex-theme-default'
            })
        // setting the overlay size as total height - specific sidebar height
        $(".vex-overlay").css({
                'height': ($("body").height() + 'px')
            });

        // read non visible html part and set the content on description
        $(".vex-dialog-message").html($('#preprocessing').html());
  
        

    } );


    // on any scroll even, I am closing my sidebars
	$('.container').scroll(function(event){
        console.log("scrolling");
        event.stopPropagation();
        controller.close();
    });
	

    // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

    // Initilize, exit and css reset
    $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init();
    } );

    $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit();
    } );

    $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css();
    } );

    // Is and get
    $( '.js-is-active' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.isActive() );
    } );

    $( '.js-is-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.isActiveSlidebar( id ) );
    } );

    $( '.js-get-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getActiveSlidebar() );
    } );

    $( '.js-get-all-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getSlidebars() );

    } );

    $( '.js-get-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.getSlidebar( id ) );
    } );

    // Callbacks
    $( '.js-init-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init( function () {
            console.log( 'Init callback' );
        } );
    } );

    $( '.js-exit-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit( function () {
            console.log( 'Exit callback' );
        } );
    } );

    $( '.js-css-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css( function () {
            console.log( 'CSS callback' );
        } );
    } );

    $( '.js-open-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-1', function () {
            console.log( 'Open callback' );
        } );
    } );

    $( '.js-close-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( function () {
            console.log( 'Close callback' );
        } );
    } );

    $( '.js-toggle-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1', function () {
            console.log( 'Toggle callback' );
        } );
    } );
} ) ( jQuery );