//funione di comodo che estrae un numero casuale compreso in [a,b]
function randomize(a, b) {
    return Math.round(Math.random() * (+b - +a) + +a);
}

//deseleziona un nodo
function deselectNode(n) {
    if (n != null)
        setTimeout(function () {
            n.unselect();
        }, 25);
}

//resetta la costruzione dell'arco
function resetDraw() {
    drawMode = false;
    if (sourceNode != null) deselectNode(sourceNode);
    sourceNode = null;
}

var lay = {
    name: 'grid'
};

function resetLayout() {

    cy.layout(lay).run();

}

function setLayout() {

    let i = document.getElementById("layouts").selectedIndex;
    let name = document.getElementById("layouts").options[i].value;
    console.log(name);
    switch (name) {
        case 'grid':
            lay = {
                name: 'grid'
            };
            break;
        case 'circle':
            lay = {
                name: 'circle',
                radius: 100
            };
            break;
        case 'random':
            lay = {
                name: 'random'
            };
            break;
        case 'cose':
            lay = {
                name: 'cose'
            };
            break;
        case 'cola':
            lay = {
                name: 'cola'
            };
            break;
        default:
            break;
    }
    console.log(lay);
}

function loadGraphml () {

    url = 'http://127.0.0.1:5500/example-graffoo/ontology-full-template.graphml';

    fetch(url)
    .then(response => response.text())
    .then((data) => {
        var graphStr = data;
        
        cy.elements().remove();
        console.log("graph deleted")
        
        cy.graphml(graphStr); //carica il grafo graphml
        console.log("graphml Loaded")
        
    });

}