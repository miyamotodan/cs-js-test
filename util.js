//funione di comodo che estrae un numero casuale compreso in [a,b]
function randomize(a, b) {
    return Math.round(Math.random() * (+b - +a) + +a);
}

//deseleziona un nodo
function deselectNode(n) {
    if (n!=null)
        setTimeout(function(){
            n.unselect();
        }, 25);
}

//resetta la costruzione dell'arco
function resetDraw() {
    drawMode = false;
    if (sourceNode!=null) deselectNode(sourceNode);
    sourceNode = null;
}

function test() {
    
  var layout = cy.layout({
        name: 'cola'
  });
      
  layout.run();

}






  //lista dei nodi 
  //console.log(cy.nodes());
          
  //lista degli archi
  //console.log(cy.edges());


  /*
  var nodeId = randomize(1000,2000) + "";  
          var edgeId = ele.id()+nodeId;
          var eles = cy.add([
            { group: 'nodes', data: { id: nodeId }, renderedPosition: { x: 100, y: 100 } },
            { group: 'edges', data: { id: edgeId, source: ele.id(), target: nodeId } }
          ]);
*/

//mostra tutto il grafo
    //cy.fit();
    //console.log(cy.json());



    /*
//aggiunge 10 nodi che puntano ad 'a' e 'b'
for (var i = 0; i < 10; i++) {
    cy.add({
        data: { id: 'node' + i, weight: i*10 }
        }
    );
    var source = 'node' + i;
    cy.add({
        data: {
            id: i+'-'+(i % 2 == 0 ? 'a' : 'b'),
            source: source,
            target: (i % 2 == 0 ? 'a' : 'b')
        }
    });
}

var layout = cy.layout({
      name: layout
});
    
layout.run();
*/