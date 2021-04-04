var demo = [
  // nodes
  {
    data: {
      id: 'a',
      d5: 'nodo a',
      width: 30,
      height: 30,
      weight: 75
    }
  },
  {
    data: {
      id: 'b',
      d5: 'nodo b',
      width: 30,
      height: 30,
      weight: 15
    }
  },
  {
    data: {
      id: 'c',
      d5: 'nodo c',
      width: 30,
      height: 30,
      weight: 10
    }
  },
  {
    data: {
      id: 'd',
      d5: 'nodo d',
      width: 30,
      height: 30,
      weight: 90
    }
  },
  {
    data: {
      id: 'e',
      d5: 'nodo e',
      width: 30,
      height: 30,
      weight: 30
    }
  },
  {
    data: {
      id: 'f',
      d5: 'nodo f',
      width: 30,
      height: 30,
      weight: 75
    }
  },
  // edges
  {
    data: {
      id: 'a-b',
      d9: 'a-b',
      source: 'a',
      target: 'b'
    }
  },
  {
    data: {
      id: 'c-d',
      d9: 'c-d',
      source: 'c',
      target: 'd'
    }
  },
  {
    data: {
      id: 'e-f',
      d9: 'e-f',
      source: 'e',
      target: 'f'
    }
  },
  {
    data: {
      id: 'a-c',
      d9: 'a-c',
      source: 'a',
      target: 'c'
    }
  },
  {
    data: {
      id: 'b-e',
      d9: 'b-e',
      source: 'b',
      target: 'e'
    }
  }
];

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: demo,

  style: [{
      selector: 'node',
      style: {
        'content': 'data(d5)',
        'label': 'data(d5)',
        'width': 'data(width)',
        'height': 'data(height)',
        'text-opacity': 1,
        'text-valign': 'center',
        'text-halign': 'center',
        'text-wrap': 'wrap',
        'font-size': 12
      }
    },

    {
      selector: 'node:selected',
      style: {
        'border-color': 'black',
        'border-width': '3px',
        'background-color': 'black'
      }
    },

    {
      selector: '.rectangle',
      style: {
        'background-color': 'yellow',
        'shape': 'rectangle',
        'width': 1,
        'height': 1
      }
    },

    {
      selector: '.ellipse',
      style: {
        'shape': 'ellipse',
        'background-color': 'fuchsia',
        'border-color': 'black',
        'border-width': 3
      }
    },

    {
      selector: '.roundrectangle',
      style: {
        'background-color': 'yellow',
        'border-color': 'blue',
        'border-width': 1,
        'shape': 'round-rectangle'
      }
    },

    {
      selector: '.parallelogram',
      style: {
        'background-color': 'lightgreen',
        'border-color': 'black',
        'border-width': 1,
        'shape': 'rhomboid'
      }
    },

    {
      selector: 'edge',
      style: {
        'target-arrow-shape': 'triangle',
        'label': 'data(d9)',
        'width': 3,
        'curve-style': 'bezier',
        'line-color': 'gray',
        'target-arrow-color': 'gray'
      }
    },
    {
      selector: 'edge:selected',
      style: {
        'width': 3,
        'line-color': 'black',
        'target-arrow-color': 'black'
      }
    }

  ],

  // initial viewport state:
  zoom: 1,
  pan: {
    x: 0,
    y: 0
  },

  // interaction options:
  minZoom: 0.01,
  maxZoom: 5.0,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: false,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,

  // rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 0.2,
  pixelRatio: 'auto',

  ready: function () {

    console.log("ready");

    console.log(this);

    //this.graphml(graphStr); //carica il grafo graphml
  }

});

/**
 * click del mouse su un elemento o sul fondo
 */
cy.on('tap', function (event) {
  // target holds a reference to the originator
  // of the event (core or element)
  var evtTarget = event.target;

  //non si capisce perché this è diventato quello che doveva essere this.cy
  //probabilmente perché sto dentro ad una funzione legata a this.cy
  if (evtTarget === this) {
    console.log('tap on background');
  } else {
    console.log('tap on ', evtTarget.data());
  }

});
