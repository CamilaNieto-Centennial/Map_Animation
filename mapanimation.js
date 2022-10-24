// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia21pNDQ0NCIsImEiOiJjbDkza2Q3b20wZmR0M25zZzZxM3doMDJkIn0.gj423arvZ2zeVbSRvFvjXA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
  projection: 'globe' // display the map as a 3D globe
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({ "color": "red" })
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

map.on('load', () => {
  // Add an image to use as a custom marker
  map.loadImage(
    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
    (error, image) => {
      if (error) throw error;
      map.addImage('custom-marker', image);
      // Add a GeoJSON source with 2 points
      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              // feature for MIT
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  -71.092761, 42.357575
                ]
              },
              'properties': {
                'title': 'MIT'
              }
            },
            {
              // feature for Harvard
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-71.118340, 42.378036]
              },
              'properties': {
                'title': 'Harvard'
              }
            }
          ]
        }
      });

      // Add a symbol layer
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': 'custom-marker',
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': [
            'Open Sans Semibold',
            'Arial Unicode MS Bold'
          ],
          'text-offset': [0, 1.25],
          'text-anchor': 'top'
        }
      });
    }
  );
});



/* Features for Buses Stops */
const geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 1',
        'iconSize': [6, 6]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.093729, 42.359244]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 2',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.094915, 42.360175]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 3',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.0958, 42.360698]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 4',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.099558, 42.362953]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 5',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.103476, 42.365248]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 6',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.106067, 42.366806]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 7',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.108717, 42.368355]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 8',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.110799, 42.369192]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 9',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.113095, 42.370218]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 10',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.115476, 42.372085]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 11',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.117585, 42.373016]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bus 12',
        'iconSize': [5.5, 5.5]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-71.118625, 42.374863]
      }
    }
  ]
};



// Add markers to the map about the Buses
for (const busMarker of geojson.features) {
  // Create a DOM element for each marker.
  const buses = document.createElement('div');
  const width = busMarker.properties.iconSize[0];
  const height = busMarker.properties.iconSize[1];
  buses.className = 'busMarker';
  buses.style.backgroundImage = `url(https://i.postimg.cc/KjcTwdZR/bus3.png)`;
  buses.style.width = `${width}em`;
  buses.style.height = `${height}em`;
  /*buses.style.backgroundSize = '100%';*/
   
  buses.addEventListener('click', () => {
  window.alert(busMarker.properties.message);
  });
   
  // Add markers to the map.
  new mapboxgl.Marker(buses)
  .setLngLat(busMarker.geometry.coordinates)
  .addTo(map);
  }


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  setTimeout(() => {
    if (counter >= busStops.length) return;
    // Use counter to access bus stops in the array busStops
    marker.setLngLat(busStops[counter]);
    // Make sure you call move() after you increment the counter.
    counter++;
    move()
  }, 1000)

}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
