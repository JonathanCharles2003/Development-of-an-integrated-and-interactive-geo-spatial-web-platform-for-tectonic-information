// main.js

// Map initialization
var map = L.map("map").setView([26.8401, 88.6169], 10);

/*==============================================
                TILE LAYER and WMS
    ================================================*/
// OSM layer
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

// Dark map
// var dark = L.tileLayer(
//   "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
//   {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//     subdomains: "abcd",
//     maxZoom: 19,
//   }
// );

// Google Street6
// googleStreets = L.tileLayer(
//   "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
//   {
//     maxZoom: 20,
//     subdomains: ["mt0", "mt1", "mt2", "mt3"],
//   }
// );

// // Google Satellite
// googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
//   maxZoom: 20,
//   subdomains: ["mt0", "mt1", "mt2", "mt3"],
// });

// WMS layer
// var wms = L.tileLayer.wms(
//   "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
//   {
//     layers: "geoapp:admin",
//     format: "image/png",
//     transparent: true,
//     attribution: "wms test",
//   }
// );

/*==============================================
                        MARKER
    ================================================*/
// Marker icon
// First marker

/*==============================================
                GEOJSON
    ================================================*/
// Point data (GeoJSON)
// var pointData = L.geoJSON(pointJson, {
//   onEachFeature: function (feature, layer) {
//     // Custom message for each marker
//     if (feature.properties) {
//       var customMessage = `
//         <b>Name:</b> ${feature.properties.name || "No name available"}<br>
//         <b>Description:</b> ${
//           feature.properties.description || "No description available"
//         }<br>
//         <b>Coordinates:</b> ${feature.geometry.coordinates.join(", ")}
//       `;
//       layer.bindPopup(customMessage);
//     } else {
//       layer.bindPopup("No additional information available.");
//     }
//   },
// });

// Add GeoJSON to map
// pointData.addTo(map);

// let geotiffLayer;
// let geotiffLayer1;
// let geotiffLayer2;
// let geojsonLayer;
// let layerControl; // Layer control variable

// Base map layers
var baseMaps = {
  OSM: osm,
};

// Initial overlay layers
var overlayMaps = {};

// Add layer control to the map (initialize it)
layerControl = L.control
  .layers(baseMaps, overlayMaps, { collapsed: true })
  .addTo(map);

// Fetch and add the GeoTIFF raster layer
// fetch("data/10n060e_20101117_gmted_max300.tif")
//   .then((response) => response.arrayBuffer())
//   .then((arrayBuffer) => {
//     parseGeoraster(arrayBuffer).then((georaster) => {
//       geotiffLayer = new GeoRasterLayer({
//         georaster: georaster,
//         opacity: 0.7,
//         pixelValuesToColorFn: function (value) {
//           const min = 50;
//           const max = 220;
//           const normalizedValue = (value - min) / (max - min);
//           if (normalizedValue < 0.2) {
//             return "yellow";
//           } else if (normalizedValue < 0.4) {
//             return "green";
//           } else if (normalizedValue < 0.6) {
//             return "#93E9BE";
//           } else if (normalizedValue < 0.8) {
//             return "red";
//           } else {
//             return "#966400";
//           }
//         },
//         resolution: 128,
//       });

//       // Add the GeoTIFF layer to the map
//       geotiffLayer.addTo(map);

//       // Add the GeoTIFF layer to overlayMaps and update layer control
//       overlayMaps["Raster Layer"] = geotiffLayer;
//       layerControl.remove(); // Remove the old control
//       layerControl = L.control
//         .layers(baseMaps, overlayMaps, { collapsed: true })
//         .addTo(map); // Re-add it
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading GeoTIFF:", error);
//   });

// fetch("data/10n060e_20101117_gmted_max300.tif")
//   .then((response) => response.arrayBuffer())
//   .then((arrayBuffer) => {
//     parseGeoraster(arrayBuffer).then((georaster) => {
//       geotiffLayer1 = new GeoRasterLayer({
//         georaster: georaster,
//         opacity: 0.7,
//         pixelValuesToColorFn: function (value) {
//           const min = 50;
//           const max = 220;
//           const normalizedValue = (value - min) / (max - min);
//           if (normalizedValue < 0.1) {
//             return "yellow";
//           } else if (normalizedValue < 0.3) {
//             return "green";
//           } else if (normalizedValue < 0.5) {
//             return "#93E9BE";
//           } else if (normalizedValue < 0.7) {
//             return "red";
//           } else {
//             return "#966400";
//           }
//         },
//         resolution: 128,
//       });

//       // Add the GeoTIFF layer to the map
//       geotiffLayer1.addTo(map);

//       // Add the GeoTIFF layer to overlayMaps and update layer control
//       overlayMaps["Raster Layer2"] = geotiffLayer1;
//       layerControl.remove(); // Remove the old control
//       layerControl = L.control
//         .layers(baseMaps, overlayMaps, { collapsed: true })
//         .addTo(map); // Re-add it
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading GeoTIFF:", error);
//   });

// fetch("data/10n060e_20101117_gmted_max300.tif")
//   .then((response) => response.arrayBuffer())
//   .then((arrayBuffer) => {
//     parseGeoraster(arrayBuffer).then((georaster) => {
//       geotiffLayer2 = new GeoRasterLayer({
//         georaster: georaster,
//         opacity: 0.7,
//         pixelValuesToColorFn: function (value) {
//           const min = 50;
//           const max = 220;
//           const normalizedValue = (value - min) / (max - min);
//           if (normalizedValue < 0.0) {
//             return "yellow";
//           } else if (normalizedValue < 0.2) {
//             return "green";
//           } else if (normalizedValue < 0.4) {
//             return "#93E9BE";
//           } else if (normalizedValue < 0.6) {
//             return "red";
//           } else {
//             return "#966400";
//           }
//         },
//         resolution: 128,
//       });

//       // Add the GeoTIFF layer to the map
//       geotiffLayer2.addTo(map);

//       // Add the GeoTIFF layer to overlayMaps and update layer control
//       overlayMaps["Raster Layer3"] = geotiffLayer2;
//       layerControl.remove(); // Remove the old control
//       layerControl = L.control
//         .layers(baseMaps, overlayMaps, { collapsed: true })
//         .addTo(map); // Re-add it
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading GeoTIFF:", error);
//   });

// Fetch and add the GeoJSON boundary layer
// fetch(
//   "https://jonathancharles2003.github.io/GEO-SPATIAL-WEB-PLATFORM-FOR-LANDSLIDE-VISUALIZATION/js/foothills.geojson"
// )
//   .then((response) => response.json())
//   .then((geojsonData) => {
//     geojsonLayer = L.geoJSON(geojsonData, {
//       style: function (feature) {
//         return {
//           color: "blue",
//           weight: 2,
//           fillOpacity: 0.2,
//         };
//       },
//       onEachFeature: function (feature, layer) {
//         if (feature.properties && feature.properties.name) {
//           layer.bindPopup(feature.properties.name);
//         }
//       },
//     });

//     // Add the GeoJSON layer to the map
//     geojsonLayer.addTo(map);

//     // Add the GeoJSON layer to overlayMaps and update layer control
//     overlayMaps["Boundary Layer"] = geojsonLayer;
//     layerControl.remove(); // Remove the old control
//     layerControl = L.control
//       .layers(baseMaps, overlayMaps, { collapsed: true })
//       .addTo(map); // Re-add it
//   })
//   .catch((error) => {
//     console.error("Error loading GeoJSON:", error);
//   });

/*==============================================
                    LEAFLET EVENTS
    ================================================*/
// map.on("mouseover", function () {
//   console.log("your mouse is over the map");
// });

// map.on("mousemove", function (e) {
//   document.getElementsByClassName("coordinate")[0].innerHTML =
//     "lat: " + e.latlng.lat + " lng: " + e.latlng.lng;
//   console.log("lat: " + e.latlng.lat, "lng: " + e.latlng.lng);
// });

// Additional leaflet events if needed

var Matiali; // Variable to store the GeoJSON layer

document
  .getElementById("MatialiCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_3.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Matiali = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#29b6f6", // Border color (bright light blue)
                weight: 2, // Border thickness
                fillColor: "#e1f5fe", // Fill color (very light blue)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Matiali.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Matiali) {
        map.removeLayer(Matiali);
      }
    }
  });

var Siwalik; // Variable to store the GeoJSON layer

document
  .getElementById("SiwalikCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_4.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Siwalik = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#388e3c", // Border color (medium green)
                weight: 2, // Border thickness
                fillColor: "#a5d6a7", // Fill color (light green)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Siwalik.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Siwalik) {
        map.removeLayer(Siwalik);
      }
    }
  });

var Kanchenjunga; // Variable to store the GeoJSON layer

document
  .getElementById("KanchenjungaCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_5.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Kanchenjunga = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0d47a1", // Border color (deep dark blue)
                weight: 2, // Border thickness
                fillColor: "#90caf9", // Fill color (light blue for contrast)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Kanchenjunga.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Kanchenjunga) {
        map.removeLayer(Kanchenjunga);
      }
    }
  });

var changthang; // Variable to store the GeoJSON layer

document
  .getElementById("changthangCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_6.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          changthang = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#ec407a", // Border color (bright pink)
                weight: 2, // Border thickness
                fillColor: "#f8bbd0", // Fill color (light pink)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(changthang.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (changthang) {
        map.removeLayer(changthang);
      }
    }
  });

var Lingste; // Variable to store the GeoJSON layer

document
  .getElementById("LingsteCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_7.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Lingste = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#00838f", // Border color (dark cyan)
                weight: 2, // Border thickness
                fillColor: "#80deea", // Fill color (light cyan)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Lingste.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Lingste) {
        map.removeLayer(Lingste);
      }
    }
  });

var Phuentsholing; // Variable to store the GeoJSON layer

document
  .getElementById("PhuentsholingCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_9.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Phuentsholing = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#1b5e20", // Border color (dark forest green)
                weight: 2, // Border thickness
                fillColor: "#81c784", // Fill color (light green for contrast)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Phuentsholing.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Phuentsholing) {
        map.removeLayer(Phuentsholing);
      }
    }
  });

var Gorubathan; // Variable to store the GeoJSON layer

document
  .getElementById("GorubathanCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_12.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Gorubathan = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#fdd835", // Border color (soft yellow)
                weight: 2, // Border thickness
                fillColor: "#fff9c4", // Fill color (light pastel yellow)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Gorubathan.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Gorubathan) {
        map.removeLayer(Gorubathan);
      }
    }
  });

var Reyang = []; // Array to store multiple GeoJSON layers

document
  .getElementById("ReyangCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_11.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_2.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#e67c73", // Border color (rich peach)
                  weight: 2, // Border thickness
                  fillColor: "#ffd8b5", // Fill color (light peach)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            Reyang.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      Reyang.forEach((layer) => map.removeLayer(layer));
      Reyang = []; // Clear stored references
    }
  });

var Chalsa = []; // Array to store multiple GeoJSON layers

document
  .getElementById("ChalsaCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_10.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_1.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_13.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#6a1b9a", // Border color (deep purple)
                  weight: 2, // Border thickness
                  fillColor: "#ce93d8", // Fill color (light purple)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            Chalsa.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      Chalsa.forEach((layer) => map.removeLayer(layer));
      Chalsa = []; // Clear stored references
    }
  });

var Baikunthapur = []; // Array to store multiple GeoJSON layers

document
  .getElementById("BaikunthapurCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_14.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_8.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#f06292", // Border color (soft pink)
                  weight: 2, // Border thickness
                  fillColor: "#fce4ec", // Fill color (very light pink)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            Baikunthapur.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      Baikunthapur.forEach((layer) => map.removeLayer(layer));
      Baikunthapur = []; // Clear stored references
    }
  });

var Darjeeling; // Variable to store the GeoJSON layer

document
  .getElementById("DarjeelingCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Darjeeling = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#006064", // Border color (dark cyan)
                weight: 2, // Border thickness
                fillColor: "#4dd0e1", // Fill color (light cyan)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Darjeeling.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Darjeeling) {
        map.removeLayer(Darjeeling);
      }
    }
  });

var Sub; // Variable to store the GeoJSON layer

document.getElementById("SubCheckbox").addEventListener("change", function () {
  if (this.checked) {
    // Load and display the GeoJSON file
    fetch(
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_3.geojson"
    ) // Replace with actual GeoJSON file path
      .then((response) => response.json())
      .then((data) => {
        Sub = L.geoJSON(data, {
          style: function (feature) {
            return {
              color: "#ad1457", // Border color (dark pink)
              weight: 2, // Border thickness
              fillColor: "#f48fb1", // Fill color (light pink)
              fillOpacity: 0.5, // Transparency
            };
          },
        }).addTo(map);
        map.fitBounds(Sub.getBounds()); // Adjust map to fit the GeoJSON layer
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  } else {
    // Remove the GeoJSON layer when unchecked
    if (Sub) {
      map.removeLayer(Sub);
    }
  }
});

var Alluvial; // Variable to store the GeoJSON layer

document
  .getElementById("AlluvialCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_2.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Alluvial = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#e65100", // Border color (dark peach / burnt orange)
                weight: 2, // Border thickness
                fillColor: "#ffccbc", // Fill color (light peach)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Alluvial.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Alluvial) {
        map.removeLayer(Alluvial);
      }
    }
  });

var GreaterHimalayan = []; // Array to store multiple GeoJSON layers

document
  .getElementById("GreaterHimalayanCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_5.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_6.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#f9a825", // Border color (dark yellow / golden)
                  weight: 2, // Border thickness
                  fillColor: "#fff59d", // Fill color (light yellow)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            GreaterHimalayan.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      GreaterHimalayan.forEach((layer) => map.removeLayer(layer));
      GreaterHimalayan = []; // Clear stored references
    }
  });

var LesserHimalayan = []; // Array to store multiple GeoJSON layers

document
  .getElementById("LesserHimalayanCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_12.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_2.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_7.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_11.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#2e7d32", // Border color (medium-dark green)
                  weight: 2, // Border thickness
                  fillColor: "#a5d6a7", // Fill color (light green)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            LesserHimalayan.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      LesserHimalayan.forEach((layer) => map.removeLayer(layer));
      LesserHimalayan = []; // Clear stored references
    }
  });

var Siwalik1; // Variable to store the GeoJSON layer

document
  .getElementById("Siwalik1Checkbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_4.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Siwalik1 = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0277bd", // Border color (medium blue)
                weight: 2, // Border thickness
                fillColor: "#81d4fa", // Fill color (light blue)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Siwalik1.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Siwalik1) {
        map.removeLayer(Siwalik1);
      }
    }
  });
//
var Quaternary = []; // Array to store multiple GeoJSON layers

document
  .getElementById("QuaternaryCheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_1.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_10.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_13.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_14.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_3.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_8.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_9.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#d84315", // Border color (deep peach / burnt orange)
                  weight: 2, // Border thickness
                  fillColor: "#ffccbc", // Fill color (light peach)
                  fillOpacity: 0.5, // Transparency
                };
              },
            }).addTo(map);
            Quaternary.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      Quaternary.forEach((layer) => map.removeLayer(layer));
      Quaternary = []; // Clear stored references
    }
  });

var Structuralridges; // Variable to store the GeoJSON layer

document
  .getElementById("StructuralridgesCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Structural ridges.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Structuralridges = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#6d4c41", // Border color (medium brown)
                weight: 2, // Border thickness
                fillColor: "#d7ccc8", // Fill color (light brown / taupe)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Structuralridges.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Structuralridges) {
        map.removeLayer(Structuralridges);
      }
    }
  });

var Youngerflood; // Variable to store the GeoJSON layer

document
  .getElementById("YoungerfloodCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Younger floodplain.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Youngerflood = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#880e4f", // Border color (dark magenta)
                weight: 2, // Border thickness
                fillColor: "#f06292", // Fill color (light magenta / pinkish-magenta)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Youngerflood.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Youngerflood) {
        map.removeLayer(Youngerflood);
      }
    }
  });

var Narrowfluvial; // Variable to store the GeoJSON layer

document
  .getElementById("NarrowfluvialCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Narrow fluvial valley.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Narrowfluvial = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#2e7d32", // Border color (rich green)
                weight: 2, // Border thickness
                fillColor: "#81c784", // Fill color (light/medium green)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Narrowfluvial.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Narrowfluvial) {
        map.removeLayer(Narrowfluvial);
      }
    }
  });

var Loweralluvial; // Variable to store the GeoJSON layer

document
  .getElementById("LoweralluvialCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Lower alluvial terraces.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Loweralluvial = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0288d1", // Border color (medium-light blue)
                weight: 2, // Border thickness
                fillColor: "#b3e5fc", // Fill color (light blue)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Loweralluvial.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Loweralluvial) {
        map.removeLayer(Loweralluvial);
      }
    }
  });

var Middlealluvial; // Variable to store the GeoJSON layer

document
  .getElementById("MiddlealluvialCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Middle alluvial terraces.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Middlealluvial = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#c2185b", // Border color (dark pink)
                weight: 2, // Border thickness
                fillColor: "#f06292", // Fill color (medium pink)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Middlealluvial.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Middlealluvial) {
        map.removeLayer(Middlealluvial);
      }
    }
  });

var Higheralluvial; // Variable to store the GeoJSON layer

document
  .getElementById("HigheralluvialCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Higher alluvial terraces.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Higheralluvial = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#e64a19", // Border color (deep peach / burnt orange)
                weight: 2, // Border thickness
                fillColor: "#ffab91", // Fill color (soft peach)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Higheralluvial.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Higheralluvial) {
        map.removeLayer(Higheralluvial);
      }
    }
  });

var Lowdissected; // Variable to store the GeoJSON layer

document
  .getElementById("LowdissectedCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Low dissected structural mountain.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Lowdissected = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#1b5e20", // Border color (dark green)
                weight: 2, // Border thickness
                fillColor: "#66bb6a", // Fill color (medium-light green for contrast)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Lowdissected.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Lowdissected) {
        map.removeLayer(Lowdissected);
      }
    }
  });

var Highdissected; // Variable to store the GeoJSON layer

document
  .getElementById("HighdissectedCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Highly dissected structural mountain.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Highdissected = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0d47a1", // Border color (dark blue)
                weight: 2, // Border thickness
                fillColor: "#64b5f6", // Fill color (light/medium blue for contrast)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Highdissected.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Highdissected) {
        map.removeLayer(Highdissected);
      }
    }
  });

var Mountainfoothills; // Variable to store the GeoJSON layer

document
  .getElementById("MountainfoothillsCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Mountain foothills with traingular facets.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Mountainfoothills = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#03a9f4", // Border color (bright light blue)
                weight: 2, // Border thickness
                fillColor: "#b3e5fc", // Fill color (very light blue)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Mountainfoothills.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Mountainfoothills) {
        map.removeLayer(Mountainfoothills);
      }
    }
  });

var Moderatelydissected; // Variable to store the GeoJSON layer

document
  .getElementById("ModeratelydissectedCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Load and display the GeoJSON file
      fetch(
        "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/geomorphol_Moderately dissected structural mountain.geojson"
      ) // Replace with actual GeoJSON file path
        .then((response) => response.json())
        .then((data) => {
          Moderatelydissected = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#fbc02d", // Border color (golden yellow)
                weight: 2, // Border thickness
                fillColor: "#fff59d", // Fill color (light yellow)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          map.fitBounds(Moderatelydissected.getBounds()); // Adjust map to fit the GeoJSON layer
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    } else {
      // Remove the GeoJSON layer when unchecked
      if (Moderatelydissected) {
        map.removeLayer(Moderatelydissected);
      }
    }
  });

var onecheck = []; // Array to store multiple GeoJSON layers

document.getElementById("onecheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#B71C1C", // Dark Red
                weight: 2,
                fillColor: "#E57373", // Light Red
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          onecheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    onecheck.forEach((layer) => map.removeLayer(layer));
    onecheck = []; // Clear stored references
  }
});

var twocheck = []; // Array to store multiple GeoJSON layers

document.getElementById("twocheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0D47A1", // Dark Blue
                weight: 2,
                fillColor: "#64B5F6", // Light Blue
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          twocheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    twocheck.forEach((layer) => map.removeLayer(layer));
    twocheck = []; // Clear stored references
  }
});

var threecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("threecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#212121", // Dark Gray (Border)
                  weight: 2,
                  fillColor: "#BDBDBD", // Light Gray (Fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            threecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      threecheck.forEach((layer) => map.removeLayer(layer));
      threecheck = []; // Clear stored references
    }
  });

var fourcheck = []; // Array to store multiple GeoJSON layers

document.getElementById("fourcheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#B71C1C", // Dark Red
                weight: 2,
                fillColor: "#E57373", // Light Red
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          fourcheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    fourcheck.forEach((layer) => map.removeLayer(layer));
    fourcheck = []; // Clear stored references
  }
});

var fivecheck = []; // Array to store multiple GeoJSON layers

document.getElementById("fivecheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#0D47A1", // Dark Blue
                weight: 2,
                fillColor: "#64B5F6", // Light Blue
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          fivecheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    fivecheck.forEach((layer) => map.removeLayer(layer));
    fivecheck = []; // Clear stored references
  }
});

var sixcheck = []; // Array to store multiple GeoJSON layers

document.getElementById("sixcheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#212121", // Dark Gray (Border)
                weight: 2,
                fillColor: "#BDBDBD", // Light Gray (Fill)
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          sixcheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    sixcheck.forEach((layer) => map.removeLayer(layer));
    sixcheck = []; // Clear stored references
  }
});

var sevencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("sevencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            sevencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      sevencheck.forEach((layer) => map.removeLayer(layer));
      sevencheck = []; // Clear stored references
    }
  });

var eightcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("eightcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            eightcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      eightcheck.forEach((layer) => map.removeLayer(layer));
      eightcheck = []; // Clear stored references
    }
  });

var ninecheck = []; // Array to store multiple GeoJSON layers

document.getElementById("ninecheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#424242", // Dark Gray
                weight: 2,
                fillColor: "#E0E0E0", // Light Gray
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          ninecheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    ninecheck.forEach((layer) => map.removeLayer(layer));
    ninecheck = []; // Clear stored references
  }
});

var tencheck = []; // Array to store multiple GeoJSON layers

document.getElementById("tencheckbox").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#880E4F", // Dark Pink
                weight: 2,
                fillColor: "#F8BBD0", // Light Pink
                fillOpacity: 0.5,
              };
            },
          }).addTo(map);
          tencheck.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    tencheck.forEach((layer) => map.removeLayer(layer));
    tencheck = []; // Clear stored references
  }
});

var twelvecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twelvecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twelvecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twelvecheck.forEach((layer) => map.removeLayer(layer));
      twelvecheck = []; // Clear stored references
    }
  });

var thirteencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirteencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirteencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirteencheck.forEach((layer) => map.removeLayer(layer));
      thirteencheck = []; // Clear stored references
    }
  });

var fifteencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fifteencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fifteencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fifteencheck.forEach((layer) => map.removeLayer(layer));
      fifteencheck = []; // Clear stored references
    }
  });

var sixteencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("sixteencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            sixteencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      sixteencheck.forEach((layer) => map.removeLayer(layer));
      sixteencheck = []; // Clear stored references
    }
  });

var seventeencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("seventeencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            seventeencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      seventeencheck.forEach((layer) => map.removeLayer(layer));
      seventeencheck = []; // Clear stored references
    }
  });

var eighteencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("eighteencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            eighteencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      eighteencheck.forEach((layer) => map.removeLayer(layer));
      eighteencheck = []; // Clear stored references
    }
  });

var nineteencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("nineteencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            nineteencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      nineteencheck.forEach((layer) => map.removeLayer(layer));
      nineteencheck = []; // Clear stored references
    }
  });

var twentyonecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentyonecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentyonecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentyonecheck.forEach((layer) => map.removeLayer(layer));
      twentyonecheck = []; // Clear stored references
    }
  });

var twentytwocheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentytwocheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentytwocheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentytwocheck.forEach((layer) => map.removeLayer(layer));
      twentytwocheck = []; // Clear stored references
    }
  });

var twentyfourcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentyfourcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentyfourcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentyfourcheck.forEach((layer) => map.removeLayer(layer));
      twentyfourcheck = []; // Clear stored references
    }
  });

var twentyfivecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentyfivecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentyfivecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentyfivecheck.forEach((layer) => map.removeLayer(layer));
      twentyfivecheck = []; // Clear stored references
    }
  });

var twentysixcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentysixcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentysixcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentysixcheck.forEach((layer) => map.removeLayer(layer));
      twentysixcheck = []; // Clear stored references
    }
  });

var twentysevencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentysevencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentysevencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentysevencheck.forEach((layer) => map.removeLayer(layer));
      twentysevencheck = []; // Clear stored references
    }
  });

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

var twentyeightcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentyeightcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentyeightcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentyeightcheck.forEach((layer) => map.removeLayer(layer));
      twentyeightcheck = []; // Clear stored references
    }
  });

var twentyninecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("twentyninecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            twentyninecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      twentyninecheck.forEach((layer) => map.removeLayer(layer));
      twentyninecheck = []; // Clear stored references
    }
  });

var thirtycheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtycheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtycheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtycheck.forEach((layer) => map.removeLayer(layer));
      thirtycheck = []; // Clear stored references
    }
  });

var thirtyonecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtyonecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtyonecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtyonecheck.forEach((layer) => map.removeLayer(layer));
      thirtyonecheck = []; // Clear stored references
    }
  });

var thirtytwocheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtytwocheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtytwocheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtytwocheck.forEach((layer) => map.removeLayer(layer));
      thirtytwocheck = []; // Clear stored references
    }
  });

var thirtythreecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtythreecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtythreecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtythreecheck.forEach((layer) => map.removeLayer(layer));
      thirtythreecheck = []; // Clear stored references
    }
  });

var thirtyfourcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtyfourcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtyfourcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtyfourcheck.forEach((layer) => map.removeLayer(layer));
      thirtyfourcheck = []; // Clear stored references
    }
  });

var thirtyfivecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtyfivecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtyfivecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtyfivecheck.forEach((layer) => map.removeLayer(layer));
      thirtyfivecheck = []; // Clear stored references
    }
  });

var thirtysixcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtysixcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#424242", // Dark Gray
                  weight: 2,
                  fillColor: "#E0E0E0", // Light Gray
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtysixcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtysixcheck.forEach((layer) => map.removeLayer(layer));
      thirtysixcheck = []; // Clear stored references
    }
  });

var thirtysevencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtysevencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtysevencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtysevencheck.forEach((layer) => map.removeLayer(layer));
      thirtysevencheck = []; // Clear stored references
    }
  });

var thirtyeightcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtyeightcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtyeightcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtyeightcheck.forEach((layer) => map.removeLayer(layer));
      thirtyeightcheck = []; // Clear stored references
    }
  });

var thirtyninecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("thirtyninecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            thirtyninecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      thirtyninecheck.forEach((layer) => map.removeLayer(layer));
      thirtyninecheck = []; // Clear stored references
    }
  });

var fortycheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortycheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortycheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortycheck.forEach((layer) => map.removeLayer(layer));
      fortycheck = []; // Clear stored references
    }
  });

var fortyonecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortyonecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortyonecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortyonecheck.forEach((layer) => map.removeLayer(layer));
      fortyonecheck = []; // Clear stored references
    }
  });

var fortytwocheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortytwocheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortytwocheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortytwocheck.forEach((layer) => map.removeLayer(layer));
      fortytwocheck = []; // Clear stored references
    }
  });

var fortythreecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortythreecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortythreecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortythreecheck.forEach((layer) => map.removeLayer(layer));
      fortythreecheck = []; // Clear stored references
    }
  });

var fortyfourcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortyfourcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortyfourcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortyfourcheck.forEach((layer) => map.removeLayer(layer));
      fortyfourcheck = []; // Clear stored references
    }
  });

var fortyfivecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortyfivecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortyfivecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortyfivecheck.forEach((layer) => map.removeLayer(layer));
      fortyfivecheck = []; // Clear stored references
    }
  });

var fortysixcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortysixcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortysixcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortysixcheck.forEach((layer) => map.removeLayer(layer));
      fortysixcheck = []; // Clear stored references
    }
  });

var fortysevencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortysevencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortysevencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortysevencheck.forEach((layer) => map.removeLayer(layer));
      fortysevencheck = []; // Clear stored references
    }
  });

var fortyeightcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortyeightcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortyeightcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortyeightcheck.forEach((layer) => map.removeLayer(layer));
      fortyeightcheck = []; // Clear stored references
    }
  });

var fortyninecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fortyninecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fortyninecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fortyninecheck.forEach((layer) => map.removeLayer(layer));
      fortyninecheck = []; // Clear stored references
    }
  });

var fiftycheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftycheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftycheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftycheck.forEach((layer) => map.removeLayer(layer));
      fiftycheck = []; // Clear stored references
    }
  });

var fiftyonecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftyonecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftyonecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftyonecheck.forEach((layer) => map.removeLayer(layer));
      fiftyonecheck = []; // Clear stored references
    }
  });

var fiftytwocheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftytwocheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Dharla.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (foothills).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FFC107", // Amber (Yellow)
                  weight: 2,
                  fillColor: "#FFF9C4", // Light Yellow
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftytwocheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftytwocheck.forEach((layer) => map.removeLayer(layer));
      fiftytwocheck = []; // Clear stored references
    }
  });

var fiftythreecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftythreecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Gish.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Upper Chel.geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#880E4F", // Dark Pink
                  weight: 2,
                  fillColor: "#F8BBD0", // Light Pink
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftythreecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftythreecheck.forEach((layer) => map.removeLayer(layer));
      fiftythreecheck = []; // Clear stored references
    }
  });

var fiftyfourcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftyfourcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Lower Chel.geojson",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/micr_basin_Tista lower (plainland).geojson",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#0D47A1", // Dark Blue
                  weight: 2,
                  fillColor: "#BBDEFB", // Light Blue
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftyfourcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftyfourcheck.forEach((layer) => map.removeLayer(layer));
      fiftyfourcheck = []; // Clear stored references
    }
  });
///
var fiftyfivecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftyfivecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_14.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_23.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_29.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_3.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_36.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_39.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_4.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_40.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_9.geojsons.json",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#FF69B4", // Hot Pink (stroke)
                  weight: 2,
                  fillColor: "#FFB6C1", // Light Pink (fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftyfivecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftyfivecheck.forEach((layer) => map.removeLayer(layer));
      fiftyfivecheck = []; // Clear stored references
    }
  });

var fiftysixcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftysixcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_32.geojsons.json",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#2E7D32", // Dark Green (stroke)
                  weight: 2,
                  fillColor: "#A5D6A7", // Light Green (fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftysixcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftysixcheck.forEach((layer) => map.removeLayer(layer));
      fiftysixcheck = []; // Clear stored references
    }
  });

var fiftysevencheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftysevencheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_15.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_16.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_17.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_20.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_26.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_32.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_33.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_6.geojsons.json",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#806400", // Darker mustard (stroke)
                  weight: 2,
                  fillColor: "#bfa500", // Mustard yellow (fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftysevencheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftysevencheck.forEach((layer) => map.removeLayer(layer));
      fiftysevencheck = []; // Clear stored references
    }
  });

var fiftyeightcheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftyeightcheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_11.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_2.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_22.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_24.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_28.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_35.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_37.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_38.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_5.geojsons.json",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#1976D2", // Medium/Dark Blue (stroke)
                  weight: 2,
                  fillColor: "#90CAF9", // Light Blue (fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftyeightcheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftyeightcheck.forEach((layer) => map.removeLayer(layer));
      fiftyeightcheck = []; // Clear stored references
    }
  });

var fiftyninecheck = []; // Array to store multiple GeoJSON layers

document
  .getElementById("fiftyninecheckbox")
  .addEventListener("change", function () {
    var geojsonFiles = [
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_12.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_13.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_18.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_21.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_27.geojsons.json",
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_12_34.geojsons.json",
    ]; // Add multiple files here

    if (this.checked) {
      // Load and display each GeoJSON file
      geojsonFiles.forEach((file) => {
        fetch(file)
          .then((response) => response.json())
          .then((data) => {
            let layer = L.geoJSON(data, {
              style: function (feature) {
                return {
                  color: "#cc4c4c", // Darker shade of red-pink for stroke
                  weight: 2,
                  fillColor: "#ff7f7f", // Soft coral (fill)
                  fillOpacity: 0.5,
                };
              },
            }).addTo(map);
            fiftyninecheck.push(layer); // Store the layer reference
            map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));
      });
    } else {
      // Remove all loaded layers when unchecked
      fiftyninecheck.forEach((layer) => map.removeLayer(layer));
      fiftyninecheck = []; // Clear stored references
    }
  });

var checkbox1 = []; // Array to store multiple GeoJSON layers

document.getElementById("checkbox1").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_I_1.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_13.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_14.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_3.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_8.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_10.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#f48fb1", // Border color (light rosy pink)
                weight: 2, // Border thickness
                fillColor: "#fce4ec", // Fill color (very light pastel pink)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          checkbox1.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    checkbox1.forEach((layer) => map.removeLayer(layer));
    checkbox1 = []; // Clear stored references
  }
});

var checkbox2 = []; // Array to store multiple GeoJSON layers

document.getElementById("checkbox2").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_4.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#66bb6a", // Border color (fresh light green)
                weight: 2, // Border thickness
                fillColor: "#dcedc8", // Fill color (very light green)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          checkbox2.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    checkbox2.forEach((layer) => map.removeLayer(layer));
    checkbox2 = []; // Clear stored references
  }
});

var checkbox3 = []; // Array to store multiple GeoJSON layers

document.getElementById("checkbox3").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_5.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_6.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#f9a825", // Border color (dark amber / golden yellow)
                weight: 2, // Border thickness
                fillColor: "#ffe082", // Fill color (warm yellow for contrast)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          checkbox3.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    checkbox3.forEach((layer) => map.removeLayer(layer));
    checkbox3 = []; // Clear stored references
  }
});

var checkbox4 = []; // Array to store multiple GeoJSON layers

document.getElementById("checkbox4").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_4.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#4fc3f7", // Border color (soft light blue)
                weight: 2, // Border thickness
                fillColor: "#e1f5fe", // Fill color (very light blue)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          checkbox4.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    checkbox4.forEach((layer) => map.removeLayer(layer));
    checkbox4 = []; // Clear stored references
  }
});

var checkbox5 = []; // Array to store multiple GeoJSON layers

document.getElementById("checkbox5").addEventListener("change", function () {
  var geojsonFiles = [
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_11.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_12.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_2.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_7.geojson",
    "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/OBJECTID_1_9.geojson",
  ]; // Add multiple files here

  if (this.checked) {
    // Load and display each GeoJSON file
    geojsonFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          let layer = L.geoJSON(data, {
            style: function (feature) {
              return {
                color: "#e57373", // Border color (soft red)
                weight: 2, // Border thickness
                fillColor: "#ffcdd2", // Fill color (light red / pinkish red)
                fillOpacity: 0.5, // Transparency
              };
            },
          }).addTo(map);
          checkbox5.push(layer); // Store the layer reference
          map.fitBounds(layer.getBounds()); // Adjust map to fit new layers
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));
    });
  } else {
    // Remove all loaded layers when unchecked
    checkbox5.forEach((layer) => map.removeLayer(layer));
    checkbox5 = []; // Clear stored references
  }
});

document.querySelectorAll(".color-toggle").forEach((checkbox) => {
  const span = checkbox.nextElementSibling;

  // Set initial visibility based on checked state
  span.style.display = checkbox.checked ? "inline-block" : "none";

  // Update on change
  checkbox.addEventListener("change", () => {
    span.style.display = checkbox.checked ? "inline-block" : "none";
  });
});

var boundary; // Variable to store the GeoJSON layer

document.getElementById("boundary").addEventListener("change", function () {
  if (this.checked) {
    // Load and display the GeoJSON file
    fetch(
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/x_88.5447.geojson"
    ) // Replace with actual GeoJSON file path
      .then((response) => response.json())
      .then((data) => {
        boundary = L.geoJSON(data, {
          style: function (feature) {
            return {
              color: "#000000", // Border color (deep dark blue)
              weight: 2, // Border thickness
              fillColor: "##000000", // Fill color (light blue for contrast)
              fillOpacity: 0.5, // Transparency
            };
          },
        }).addTo(map);
        map.fitBounds(boundary.getBounds()); // Adjust map to fit the GeoJSON layer
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  } else {
    // Remove the GeoJSON layer when unchecked
    if (boundary) {
      map.removeLayer(boundary);
    }
  }
});

var Lineament; // Variable to store the GeoJSON layer

document.getElementById("Lineament").addEventListener("change", function () {
  if (this.checked) {
    // Load and display the GeoJSON file
    fetch(
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/name_Lineament.geojson"
    ) // Replace with actual GeoJSON file path
      .then((response) => response.json())
      .then((data) => {
        Lineament = L.geoJSON(data, {
          style: function (feature) {
            return {
              color: "#FF0000", // Border color (deep dark blue)
              weight: 2, // Border thickness
              fillColor: "##000000", // Fill color (light blue for contrast)
              fillOpacity: 0.5, // Transparency
            };
          },
        }).addTo(map);
        map.fitBounds(Lineament.getBounds()); // Adjust map to fit the GeoJSON layer
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  } else {
    // Remove the GeoJSON layer when unchecked
    if (Lineament) {
      map.removeLayer(Lineament);
    }
  }
});

var Major_fault; // Variable to store the GeoJSON layer

document.getElementById("Major_fault").addEventListener("change", function () {
  if (this.checked) {
    // Load and display the GeoJSON file
    fetch(
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/name_Major fault.geojson"
    ) // Replace with actual GeoJSON file path
      .then((response) => response.json())
      .then((data) => {
        Major_fault = L.geoJSON(data, {
          style: function (feature) {
            return {
              color: "#800000", // Border color (deep dark blue)
              weight: 2, // Border thickness
              fillColor: "##000000", // Fill color (light blue for contrast)
              fillOpacity: 0.5, // Transparency
            };
          },
        }).addTo(map);
        map.fitBounds(Major_fault.getBounds()); // Adjust map to fit the GeoJSON layer
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  } else {
    // Remove the GeoJSON layer when unchecked
    if (Major_fault) {
      map.removeLayer(Major_fault);
    }
  }
});

var Thrust_fault; // Variable to store the GeoJSON layer

document.getElementById("Thrust_fault").addEventListener("change", function () {
  if (this.checked) {
    // Load and display the GeoJSON file
    fetch(
      "https://jonathancharles2003.github.io/Development-of-an-integrated-and-interactive-geo-spatial-web-platform-for-tectonic-information/data/name_Thrust fault.geojson"
    ) // Replace with actual GeoJSON file path
      .then((response) => response.json())
      .then((data) => {
        Thrust_fault = L.geoJSON(data, {
          style: function (feature) {
            return {
              color: "#9C27B0", // Border color (deep dark blue)
              weight: 2, // Border thickness
              fillColor: "##000000", // Fill color (light blue for contrast)
              fillOpacity: 0.5, // Transparency
            };
          },
        }).addTo(map);
        map.fitBounds(Thrust_fault.getBounds()); // Adjust map to fit the GeoJSON layer
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  } else {
    // Remove the GeoJSON layer when unchecked
    if (Thrust_fault) {
      map.removeLayer(Thrust_fault);
    }
  }
});
