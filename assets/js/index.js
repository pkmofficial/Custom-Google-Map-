// let map;

// function initMap() {

//     // fixing centre of our map
//     const outr = { lat:20.2758301, lng:85.7766177 };
//     const map = new google.maps.Map(document.getElementById("mapCanvas"), {
//         // center: { lat:20.2758301, lng:85.7766177 } ,
//         center: outr ,
//         zoom: 14,
//         mapId:'b51898b863329aa9'
//     });


//     // icon for the marker
//     const image ="https://img.icons8.com/doodle/40/null/natural-food--v2.png";

//     // array of markers with all their data stored like a shorthand
//     var arrMarkers = [
//         // ['Neem Plants', 20.274443,85.775156]
//         [
//             '<h3>Neem Plant</h3>' +
//             '<p>Owner\'s Name : <i>Pabitra Kumar Mohanty</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Azadirachta_indica" targer="_blank">' +
//             '<i>Azadirachta indica</i></a></p>' +
//             '<p>DOB of Plant: 16/07/21</p>' ,
//             20.274443,
//             85.775156
//         ]
//         ,
//         [   
//             '<h3>Mango Tree</h3>' +
//             '<p>Owner\'s Name : <i>Mitun Kumar Sahu</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Mangifera_indica" targer="_blank">' +
//             '<i>Mangifera indica</i></a></p>' +
//             '<p>DOB of Plant: 04/08/20</p>' ,
//             20.285727,
//             85.770377
//         ]
//         ,
//         [
//             '<h3>Guava Tree</h3>' +
//             '<p>Owner\'s Name : <i>Prateek Das</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Psidium_guajava" targer="_blank">' +
//             '<i>Psidium guajava</i></a></p>' +
//             '<p>DOB of Plant: 26/02/22</p>' ,
//             20.284377 ,
//             85.789823
//         ]
//         ,
//         [
//             '<h3>AloeVera Plant</h3>' +
//             '<p>Owner\'s Name : <i>Priyanka Mohanty</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Aloe_vera" targer="_blank">' +
//             '<i>Aloe vera</i></a></p>' +
//             '<p>DOB of Plant: 11/06/20</p>' ,
//             20.258602 ,
//             85.792064
//         ]
//         ,
//         [
//             '<h3>Peepal Tree</h3>' +
//             '<p>Owner\'s Name : <i>Prasanna Mohanty</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Ficus_religiosa" targer="_blank">' +
//             '<i>Ficus religiosa</i></a></p>' +
//             '<p>DOB of Plant: 19/11/16</p>' ,
//             20.274051, 
//             85.778418
//         ]
//         ,
//         [
//             '<h3>Rose Plant</h3>' +
//             '<p>Owner\'s Name : <i>Sujata Mohanty</i></p>' +
//             '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Rosa_%27Mister_Lincoln%27" targer="_blank">' +
//             '<i>Rosa \'Mister Linoln\'</i></a></p>' +
//             '<p>DOB of Plant: 30/01/17</p>' ,
//             20.275827 , 
//             85.778228
//         ]
//         // [
//         //     '<h3>PLANT_NAME</h3>' +
//         //     '<p>Owner\'s Name : <i>OWNERS_NAME</i></p>' +
//         //     '<p>Scientific Name: <a href="WIKI_LINK" targer="_blank">' +
//         //     '<i>SCIENTIFIC_NAME</i></a></p>' +
//         //     '<p>DOB of Plant: DD/MM/YY</p>' ,
//         //     LAT , 
//         //     LNG
//         // ]
//     ];

//     var infowindow = new google.maps.InfoWindow();

//     let marker, i;
    
//     for (i = 0; i < arrMarkers.length; i++) {  
//       marker = new google.maps.Marker({
//         position: { lat:arrMarkers[i][1], lng:arrMarkers[i][2] },
//         map: map,
//         icon: image 
//       });
      
//       google.maps.event.addListener(marker, 'click', (function(marker, i) {
//         return function() {
//           infowindow.setContent(arrMarkers[i][0]);
//           infowindow.open(map, marker);
//         }
//       })(marker, i));
//     }
    
// }

// window.initMap = initMap;



let map;

function initMap() {

    // fixing centre of our map
    const outr = { lat:20.2758301, lng:85.7766177 };
    const map = new google.maps.Map(document.getElementById("mapCanvas"), {
        // center: { lat:20.2758301, lng:85.7766177 } ,
        center: outr ,
        zoom: 14,
        mapId:'b51898b863329aa9'
    });


    // icon for the marker
    const image ="https://img.icons8.com/doodle/40/null/natural-food--v2.png";

    // array of markers with all their data stored like a shorthand
    var arrMarkers = [
        // ['Neem Plants', 20.274443,85.775156]
        [
            '<h3>Neem Plant</h3>' +
            '<p>Owner\'s Name : <i>Pabitra Kumar Mohanty</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Azadirachta_indica" targer="_blank">' +
            '<i>Azadirachta indica</i></a></p>' +
            '<p>DOB of Plant: 16/07/21</p>' ,
            20.274443,
            85.775156
        ]
        ,
        [   
            '<h3>Mango Tree</h3>' +
            '<p>Owner\'s Name : <i>Mitun Kumar Sahu</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Mangifera_indica" targer="_blank">' +
            '<i>Mangifera indica</i></a></p>' +
            '<p>DOB of Plant: 04/08/20</p>' ,
            20.285727,
            85.770377
        ]
        ,
        [
            '<h3>Guava Tree</h3>' +
            '<p>Owner\'s Name : <i>Prateek Das</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Psidium_guajava" targer="_blank">' +
            '<i>Psidium guajava</i></a></p>' +
            '<p>DOB of Plant: 26/02/22</p>' ,
            20.284377 ,
            85.789823
        ]
        ,
        [
            '<h3>AloeVera Plant</h3>' +
            '<p>Owner\'s Name : <i>Priyanka Mohanty</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Aloe_vera" targer="_blank">' +
            '<i>Aloe vera</i></a></p>' +
            '<p>DOB of Plant: 11/06/20</p>' ,
            20.258602 ,
            85.792064
        ]
        ,
        [
            '<h3>Peepal Tree</h3>' +
            '<p>Owner\'s Name : <i>Prasanna Mohanty</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Ficus_religiosa" targer="_blank">' +
            '<i>Ficus religiosa</i></a></p>' +
            '<p>DOB of Plant: 19/11/16</p>' ,
            20.274051, 
            85.778418
        ]
        ,
        [
            '<h3>Rose Plant</h3>' +
            '<p>Owner\'s Name : <i>Sujata Mohanty</i></p>' +
            '<p>Scientific Name: <a href="https://en.wikipedia.org/wiki/Rosa_%27Mister_Lincoln%27" targer="_blank">' +
            '<i>Rosa \'Mister Linoln\'</i></a></p>' +
            '<p>DOB of Plant: 30/01/17</p>' ,
            20.275827 , 
            85.778228
        ]
        // [
        //     '<h3>PLANT_NAME</h3>' +
        //     '<p>Owner\'s Name : <i>OWNERS_NAME</i></p>' +
        //     '<p>Scientific Name: <a href="WIKI_LINK" targer="_blank">' +
        //     '<i>SCIENTIFIC_NAME</i></a></p>' +
        //     '<p>DOB of Plant: DD/MM/YY</p>' ,
        //     LAT , 
        //     LNG
        // ]
    ];

    
    
    for(let i=0; i<arrMarkers.length ; i++ ) {
        const currentMarker = arrMarkers[i] ;
            
        const marker = new google.maps.Marker({
            map: map,
            icon: image,
            // title : currentMarker[0],
            position: {lat:currentMarker[1],lng:currentMarker[2]}
        });
        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
        });
        marker.addListener("click", () => {
            infowindow.open(map,marker);
        });

    // var infowindow = new google.maps.InfoWindow();

    
    }
    
}

window.initMap = initMap;


// 20.276137, 85.776539