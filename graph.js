var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [
    // nodes
    {
      data: {
        id: 'a',
        weight: 75
      }
    },
    {
      data: {
        id: 'b',
        weight: 15
      }
    },
    {
      data: {
        id: 'c',
        weight: 10
      }
    },
    {
      data: {
        id: 'd',
        weight: 90
      }
    },
    {
      data: {
        id: 'e',
        weight: 30
      }
    },
    {
      data: {
        id: 'f',
        weight: 75
      }
    },
    // edges
    {
      data: {
        id: 'a-b',
        source: 'a',
        target: 'b'
      }
    },
    {
      data: {
        id: 'c-d',
        source: 'c',
        target: 'd'
      }
    },
    {
      data: {
        id: 'e-f',
        source: 'e',
        target: 'f'
      }
    },
    {
      data: {
        id: 'a-c',
        source: 'a',
        target: 'c'
      }
    },
    {
      data: {
        id: 'b-e',
        source: 'b',
        target: 'e'
      }
    }
  ],

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
        'border-color': 'balck',
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