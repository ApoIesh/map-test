// import React, { Component } from 'react';
// import { Button, Image, PermissionsAndroid, StyleSheet, Alert, View, Text } from "react-native";
// import MapView, { AnimatedRegion, Animated, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import styles from './Assets/style/styles';
// import Geolocation from "react-native-geolocation-service";



// class map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             rotate: 0,
//             initialRegion: {
//                 latitude: 30,
//                 longitude: 30,
//                 latitudeDelta: 10,
//                 longitudeDelta: 10,
//             },
//             marker: [],
//         }; this.currentPossition()
//     }
//     async currentPossition() {
//         const region = await this.requestLocationPermission()
//         if (region) {
//             this.setState({
//                 pickupCords: {
//                     latitude: region.latitude,
//                     longitude: region.longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 },
//             })
//         }
//     }
//     requestLocationPermission = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log("You can use the Location");
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };
//     onMapPress(e) {
//         this.setState({
//             marker: [
//                 {
//                     coordinate: e.nativeEvent.coordinate,
//                     latitude: e.nativeEvent.coordinate.latitude,
//                     longitude: e.nativeEvent.coordinate.longitude,
//                     id: e?.nativeEvent?.id,
//                     x: e.nativeEvent.position.x,
//                     y: e.nativeEvent.position.y,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 },
//             ],
//         }
//         );
//     }
//     // getInitialState() {
//     //     return {
//     //         region: new AnimatedRegion({
//     //             latitude: LATITUDE,
//     //             longitude: LONGITUDE,
//     //             latitudeDelta: LATITUDE_DELTA,
//     //             longitudeDelta: LONGITUDE_DELTA,
//     //         }),
//     //     };
//     // }
//     // onRegionChange(region) {
//     //     this.state.region.setValue(region);
//     // }


//     render() {


//         return (
//             <View style={styles.container}>

//                 <MapView
//                     showsUserLocation={true}
//                     showsMyLocationButton={true}
//                     followsUserLocation={true}
//                     onPress={e => this.onMapPress(e)}
//                     showsTraffic={true}
//                     zoomControlEnabled={true}
//                     scrollDuringRotateOrZoomEnabled={true}
//                     scrollEnabled={true}
//                     provider={PROVIDER_GOOGLE}
//                     style={styles.map}
//                     initialRegion={this.state.initialRegion}
//                 >
//                     {this.state.marker.map((marker, index) => (
//                         <Marker
//                             key={index}
//                             coordinate={marker.coordinate}
//                             title={'marker.title'}
//                             description={'marker.description'}
//                             pinColor='gold'
//                             draggable={true}
//                             showCallout
//                             onPress={e => console.log(e.nativeEvent)}
//                             onCalloutPress={e => console.log(e.nativeEvent)}
//                             onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}

//                         >

//                         </Marker>
//                     ))}
//                 </MapView>
//                 {/* <Button title="request permissions" onPress={this.requestLocationPermission} /> */}

//             </View>
//         );
//     }
// }



// export default map;







