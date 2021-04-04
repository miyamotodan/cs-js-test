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
        case 'preset':
        case 'grid':
        case 'random':
        case 'cose':
        case 'cola':
        case 'breadthfirst':
        case 'dagre':
            lay = {
                name: name,
                animate: false
            };
            break;
        case 'elk':
            lay = {
                name: 'elk',
                nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
                fit: true, // Whether to fit
                padding: 20, // Padding on fit
                animate: false, // Whether to transition the node positions
                animateFilter: function (node, i) {
                    return true;
                }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
                animationDuration: 500, // Duration of animation in ms if enabled
                animationEasing: undefined, // Easing of animation if enabled
                transform: function (node, pos) {
                    return pos;
                }, // A function that applies a transform to the final node position
                ready: undefined, // Callback on layoutready
                stop: undefined, // Callback on layoutstop
                elk: {
                    algorithm: 'layered'
                },
                priority: function (edge) {
                    return null;
                }, // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
            };
            break;
        case 'circle':
            lay = {
                name: 'circle',
                radius: 100,
                animate: false
            };
            break;
        default:
            break;
    }
    console.log(lay);
}

function loadGraphml() {

    url = 'http://127.0.0.1:5500/example-graffoo/ontology-full-template.graphml';

    let i = document.getElementById("graphs").selectedIndex;
    let name = document.getElementById("graphs").options[i].value;
    console.log(name);

    switch (name) {
        case 'demo':
            cy.elements().remove();
            console.log("graph deleted");

            cy.add(demo); //carica il grafo graphml
            console.log("graphml Loaded")

            resetLayout();

            break;
        case 'graphml':
            fetch(url)
                .then(response => response.text())
                .then((data) => {
                    var graphStr = data;

                    cy.elements().remove();
                    console.log("graph deleted")

                    cy.graphml(graphStr); //carica il grafo graphml
                    console.log("graphml Loaded")

                    resetLayout();

                });


            break;
    }


}