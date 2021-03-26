var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [
  // nodes
  { data: { id: 'a', weight: 75  } },
  { data: { id: 'b', weight: 15  } },
  { data: { id: 'c', weight: 10  } },
  { data: { id: 'd', weight: 90  } },
  { data: { id: 'e', weight: 30  } },
  { data: { id: 'f', weight: 75  } },
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

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        shape: 'square',
        'background-color': 'red',
        'label': 'data(id)'
      }
    },
    {
      selector: 'node:selected',
      style: {
        'border-color': 'black',
        'border-width': '3px',
        'background-color': 'lightgrey'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#aaa',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: 'edge:selected',
      style: {
          'width': 6,
          'line-color': 'black',
          'target-arrow-color': 'black'
      }
    }
  ],

  // initial viewport state:
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 0.1,
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
  pixelRatio: 'auto'

});

