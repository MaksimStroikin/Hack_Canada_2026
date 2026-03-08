import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { LeafletView } from 'react-native-leaflet-view'
import { leafletHtml } from '../utils/leafletHtml'
import { map_styles } from '../styles/pages/map'
import { ui_elements_styles } from '../styles/ui_elements'
import API from '../API'
import * as Location from 'expo-location'
import { useLocalSearchParams } from 'expo-router'
import LoadingBadge from '../components/loading_badge'

const Map = () => {

    const { apiEndpoint } = useLocalSearchParams();
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [errorStatus, setErrorStatus] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    function handleMessage(message) {
        if (message.event === 'onMapMarkerClicked') {
            const clickedId = message.payload.mapMarkerID;
            let location = null;
            if (clickedId === 'currentLocation') {
                location = {
                    siteName: "Your location",
                    hoursOfOperation: []
                };
            } else {
                location = locations.find((loc, index) => (loc._id || index.toString()) === clickedId);
            }
            setSelectedLocation(location);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setErrorStatus(true);
                    setLoading(false);
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setCurrentLocation(location);
                setSelectedLocation(location);

                fetch(`${API}${apiEndpoint}?lat=${location.coords.latitude}&lng=${location.coords.longitude}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then(response => response.json())
                    .then(data => setLocations(data))
                    .catch(error => setErrorStatus(true))
                    .finally(() => setLoading(false));
            } catch (err) {
                setErrorStatus(true);
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            {loading ? <LoadingBadge /> :
                <View style={map_styles.contentContainer}>
                    <LeafletView
                        style={map_styles.mapContainer}
                        mapCenterPosition={
                            selectedLocation?.coords ? { lat: selectedLocation.coords.latitude, lng: selectedLocation.coords.longitude } :
                                selectedLocation?.geolocation ? { lat: selectedLocation.geolocation[0], lng: selectedLocation.geolocation[1] } :
                                    { lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude }
                        }
                        source={{ html: leafletHtml }}
                        doDebug={false}
                        onMessageReceived={handleMessage}
                        mapMarkers={[...locations.map((location, index) => ({
                            id: location._id || index.toString(),
                            position: {
                                lat: location.geolocation[0],
                                lng: location.geolocation[1],
                            },
                            icon: '🟢',
                        })), {
                            id: 'currentLocation',
                            position: {
                                lat: currentLocation.coords.latitude,
                                lng: currentLocation.coords.longitude,
                            },
                            icon: '🔴'
                        }]}
                    />
                    <View style={map_styles.locationInfoContainer}>
                        <Text style={ui_elements_styles.locationInfoText}>Location: {selectedLocation ? selectedLocation.siteName : 'N/A'}</Text>
                        <Text style={ui_elements_styles.locationInfoText}>Hours of operation: {selectedLocation ? (() => {
                            if (!selectedLocation.hoursOfOperation || selectedLocation.hoursOfOperation.length === 0) {
                                return "N/A"
                            }
                            let firstValue = selectedLocation.hoursOfOperation[0];
                            let secondValue = selectedLocation.hoursOfOperation[1];
                            let firstStr = "";
                            let secondStr = "";
                            if (firstValue === 0 && secondValue === 24) {
                                return "24/7";
                            }
                            if (firstValue === 24 || firstValue < 12) {
                                if (firstValue === 24)
                                    firstValue = 0;
                                firstStr = `${firstValue}:00 AM`
                            }
                            else {
                                firstStr = `${firstValue - 12}:00 PM`
                            }

                            if (secondValue === 24 || secondValue < 12) {
                                if (secondValue === 24)
                                    secondValue = 0;
                                secondStr = `${secondValue}:00 AM`
                            }
                            else {
                                secondStr = `${secondValue - 12}:00 PM`
                            }

                            return `${firstStr} - ${secondStr}`;
                        })() : ''}</Text>
                    </View>
                </View>}
            {errorStatus && <Text>An error occured. Please, try again later.</Text>}
        </>
    )
}

export default Map