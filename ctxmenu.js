// the default values of each option are outlined below:
let defaultsNode = {
    menuRadius: 100, // the radius of the circular menu in pixels
    selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
    commands: [ // an array of commands to list in the menu or a function that returns the array

      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-edit fa-2x"><span class="fa-edit-text icon-text">Edit</span></span>', // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected
          console.log( ele.id() ) // `ele` holds the reference to the active element
        },
        enabled: true // whether the command is selectable
      },
      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-trash fa-2x"><span class="fa-trash-text icon-text">Delete</span></span>', // html/text content to be displayed in the menu
        contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected

          console.log( ele.id() ) // `ele` holds the reference to the active element

          //cancellazione del nodo
          cy.remove( ele );
          resetDraw();

        },
        enabled: true // whether the command is selectable
      },
      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-external-link fa-2x"><span class="fa-external-link-text icon-text">Link</span></span>', // html/text content to be displayed in the menu
        contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected
            console.log( ele.id() ) // `ele` holds the reference to the active element

            if (drawMode) {
                //chiudo l'arco
                var edgeId = sourceNode.id()+'-'+ele.id();
                var eles = cy.add([
                                    { group: 'edges', data: { id: edgeId, source:sourceNode.id(), target: ele.id() } }
                                ]);
                resetDraw();
            } else {
                //apro l'arco
                drawMode=true;
                sourceNode=ele;
                ele.select();
            }

        },
        enabled: true // whether the command is selectable
      }

    ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
    fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
    activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
    activePadding: 20, // additional size in pixels for the active command
    indicatorSize: 24, // the size in pixels of the pointer to the active command
    separatorWidth: 3, // the empty spacing in pixels between successive commands
    spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
    minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight
    maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
    openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
    itemColor: 'white', // the colour of text in the command's content
    itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
    zIndex: 9999, // the z-index of the ui div
    atMouse: false // draw menu at mouse position
  };

  let menuNode = cy.cxtmenu( defaultsNode );

  let defaultsEdge = {
    menuRadius: 100, // the radius of the circular menu in pixels
    selector: 'edge', // elements matching this Cytoscape.js selector will trigger cxtmenus
    commands: [ // an array of commands to list in the menu or a function that returns the array

      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-edit fa-2x"><span class="fa-edit-text icon-text">Edit</span></span>', // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected
          console.log( ele.id() ) // `ele` holds the reference to the active element
        },
        enabled: true // whether the command is selectable
      },
      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-trash fa-2x"><span class="fa-trash-text icon-text">Delete</span></span>', // html/text content to be displayed in the menu
        contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected
          console.log( ele.id() ) // `ele` holds the reference to the active element

          //cancellazione dell'arco
          cy.remove( ele );

        },
        enabled: true // whether the command is selectable
      }

    ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
    fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
    activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
    activePadding: 20, // additional size in pixels for the active command
    indicatorSize: 24, // the size in pixels of the pointer to the active command
    separatorWidth: 3, // the empty spacing in pixels between successive commands
    spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
    minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight
    maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
    openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
    itemColor: 'white', // the colour of text in the command's content
    itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
    zIndex: 9999, // the z-index of the ui div
    atMouse: false // draw menu at mouse position
  };

  let menuEdge = cy.cxtmenu( defaultsEdge );

  let defaultsBackground = {
    menuRadius: 100, // the radius of the circular menu in pixels
    selector: 'core', // elements matching this Cytoscape.js selector will trigger cxtmenus
    commands: [ // an array of commands to list in the menu or a function that returns the array

      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-check fa-2x"><span class="fa-check-text icon-text">Layout</span></span>', // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected
            resetLayout();
        },
        enabled: true // whether the command is selectable
      },
      { // example command
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<span class="fa fa-plus-square fa-2x"><span class="fa-plus-square-text icon-text">Add</span></span>', // html/text content to be displayed in the menu
        contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
        select: function(ele){ // a function to execute when the command is selected

            //aggiungo un nodo con ID random (da verificare se esiste)
            var nodeId = randomize(1000,2000) + "";
            var eles = cy.add([
              { group: 'nodes', data: { id: nodeId }, renderedPosition: { x: 100, y: 100 } }
            ]);


        },
        enabled: true // whether the command is selectable
      }

    ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
    fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
    activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
    activePadding: 20, // additional size in pixels for the active command
    indicatorSize: 24, // the size in pixels of the pointer to the active command
    separatorWidth: 3, // the empty spacing in pixels between successive commands
    spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
    minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight
    maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
    openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
    itemColor: 'white', // the colour of text in the command's content
    itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
    zIndex: 9999, // the z-index of the ui div
    atMouse: false // draw menu at mouse position
  };

  let menuBackground = cy.cxtmenu( defaultsBackground );
