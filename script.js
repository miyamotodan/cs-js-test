function randomize(a, b) {
  return Math.round(Math.random() * (+b - +a) + +a);
}

var drawMode = false;
var sourceNode = null;

cy.on('tap', function(event){
  // target holds a reference to the originator
  // of the event (core or element)
  var evtTarget = event.target;

  if( evtTarget === cy ){
    console.log('tap on background');
    
    //mostra tutto il grafo
    //cy.fit();
    //console.log(cy.json());

    drawMode=false;

  } else {
    console.log('tap on '+evtTarget.id()+', weight:'+evtTarget.data('weight'));

    if (drawMode) {
      //chiudo l'arco
      var edgeId = sourceNode.id()+'-'+evtTarget.id();
      var eles = cy.add([
        { group: 'edges', data: { id: edgeId, source:sourceNode.id(), target: evtTarget.id() } }
      ]);
      drawMode=false;
    } else {
      //apro l'arco
      drawMode=true;
      sourceNode=evtTarget;
    }



  }
});


//aggiunge 10 nodi che punta ad 'a' e 'b'
for (var i = 0; i < 10; i++) {
    cy.add({
        data: { id: 'node' + i, weight: i*10 }
        }
    );
    var source = 'node' + i;
    cy.add({
        data: {
            id: 'edge' + i,
            source: source,
            target: (i % 2 == 0 ? 'a' : 'b')
        }
    });
}

var layout = cy.layout({
      name: layout
});
    
layout.run();




// the default values of each option are outlined below:
let defaults = {
  menuRadius: 100, // the radius of the circular menu in pixels
  selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
  commands: [ // an array of commands to list in the menu or a function that returns the array
    
    { // example command
      fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
      content: '<span class="fa fa-undo fa-2x"></span>', // html/text content to be displayed in the menu
      contentStyle: {}, // css key:value pairs to set the command's css in js if you want
      select: function(ele){ // a function to execute when the command is selected
        console.log( ele.id() ) // `ele` holds the reference to the active element
      },
      enabled: true // whether the command is selectable
    },
    { // example command
      fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
      content: '<span class="fa fa-trash fa-2x"></span>', // html/text content to be displayed in the menu
      contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
      select: function(ele){ // a function to execute when the command is selected
        console.log( ele.id() ) // `ele` holds the reference to the active element

        //cancellazione del nodo 
        cy.remove( ele );
        
        //lista dei nodi 
        //console.log(cy.nodes());
        
        //lista degli archi
        //console.log(cy.edges());

      },
      enabled: true // whether the command is selectable
    },
    { // example command
      fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
      content: '<span class="fa fa-plus-square fa-2x"></span>', // html/text content to be displayed in the menu
      contentStyle: {'background-image': 'PushSubscriptionOptions.gif' }, // css key:value pairs to set the command's css in js if you want
      select: function(ele){ // a function to execute when the command is selected
        console.log( ele.id() ) // `ele` holds the reference to the active element

        var nodeId = randomize(1000,2000) + "";  
        var edgeId = ele.id()+nodeId;
        var eles = cy.add([
          { group: 'nodes', data: { id: nodeId }, renderedPosition: { x: 100, y: 100 } },
          { group: 'edges', data: { id: edgeId, source: ele.id(), target: nodeId } }
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

let menu = cy.cxtmenu( defaults );