cy.on('tap', function(event){
  // target holds a reference to the originator
  // of the event (core or element)
  var evtTarget = event.target;

  if( evtTarget === cy ){
    console.log('tap on background');
    //cy.fit();
  } else {
    console.log('tap on '+evtTarget.id()+', weight:'+evtTarget.data('weight'));
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
