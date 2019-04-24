var drawMode = false;
var sourceNode = null;

/**
 * click del mouse su un elemento o sul fondo
 */
cy.on('tap', function(event){
  // target holds a reference to the originator
  // of the event (core or element)
  var evtTarget = event.target;

  //se si clicca ovunque resetto la costruzione dell'arco
  resetDraw();

  if( evtTarget === cy ){
    console.log('tap on background');
    
  } else {

    if (evtTarget.isNode()) {
        console.log('tap on node '+evtTarget.id()+', weight:'+evtTarget.data('weight'));

        //non seleziono al click (senza ritardo non funziona)
        deselectNode(evtTarget);
       
      } else
      if (evtTarget.isEdge()) {

        console.log('tap on edge '+evtTarget.id()+', weight:'+evtTarget.data('weight'));
    
      } 

  }
});



