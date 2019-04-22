var layout = 'cola'; //cola grid
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
      id: 'ab',
      source: 'a',
      target: 'b'
    }
  },
  {
    data: {
      id: 'cd',
      source: 'c',
      target: 'd'
    }
  },
  {
    data: {
      id: 'ef',
      source: 'e',
      target: 'f'
    }
  },
  {
    data: {
      id: 'ac',
      source: 'a',
      target: 'c'
    }
  },
  {
    data: {
      id: 'be',
      source: 'b',
      target: 'e'
    }
  }
],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        shape: 'circle',
        'background-color': 'red',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'aaa',
        'curve-style': 'straight',
        'target-arrow-shape': 'vee'
      }
    }
  ],

  layout: {
    name: layout,
    rows: 1
  },

  // initial viewport state:
  zoom: 1,
  pan: { x: 0, y: 0 },

  // interaction options:
  minZoom: 1e-50,
  maxZoom: 1e50,
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
  wheelSensitivity: 1,
  pixelRatio: 'auto'

});
