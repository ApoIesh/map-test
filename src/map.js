import React, { Component } from 'react';
import { Dimensions, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getLocation, GOOGLE_MAPS_APIKEY } from './Functions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 30;
const LONGITUDE = 30;
const LATITUDE_DELTA = 20;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region:{},
            userLocation: {},
            coordinates: [],
        };
        this.currentPossition()
        this.mapView = null;
    }

    async currentPossition() {
        const region = await getLocation()
        console.log('region',region);
        if (region) {
            this.setState({
                userLocation: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                },
            })
        }
    }

    onMapPress = (e) => {
        // console.log(e.nativeEvent);
        this.setState({
            coordinates: [
                // ...this.state.coordinates,
                e.nativeEvent.coordinate,
            ],
        });
    }

    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                rotateEnabled={true}
                pitchEnabled={true}
                provider={PROVIDER_GOOGLE}
                showsIndoorLevelPicker={true}
                // showsTraffic={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                userLocationCalloutEnabled={true}
                showsPointsOfInterest={true}
                showsCompass={true}
                loadingEnabled={true}
                loadingIndicatorColor='#000'
                showsUserLocation={true}
                zoomControlEnabled={true}
                // camera={this.state.userLocation}
                style={StyleSheet.absoluteFill}
                ref={c => this.mapView = c}
                onPress={this.onMapPress}
            >
                {this.state.coordinates.map((coordinate, index) =>
                    <Marker
                        key={`coordinate_${index}`}
                        coordinate={coordinate}
                        description={'description test'}
                        title={'test'}
                    />
                )}
                {(this.state.coordinates.length >= 0) && (
                    <MapViewDirections
                        origin={this.state.userLocation}
                        // waypoints={(this.state.coordinates.length > 0) ? this.state.coordinates.slice(1, -1) : undefined}
                        destination={this.state.coordinates[this.state.coordinates.length - 1]}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={5}
                        strokeColor="#5fa9d9"
                        optimizeWaypoints={true}
                        splitWaypoints={true}
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)

                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (width / 20),
                                    bottom: (height / 20),
                                    left: (width / 20),
                                    top: (height / 20),
                                }
                            });
                        }}
                        onError={(errorMessage) => {
                            console.log('GOT AN ERROR',errorMessage);
                        }}
                    />
                )}
            </MapView>
        );
    }
}

export default Map;