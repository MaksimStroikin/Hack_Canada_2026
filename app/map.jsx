import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { LeafletView } from 'react-native-leaflet-view'
import { leafletHtml } from './leafletHtml'
import { map_styles } from '../styles/pages/map'
import { ui_elements_styles } from '../styles/ui_elements'

const Map = () => {
    return (
        <View style={map_styles.contentContainer}>
            <LeafletView
                style={map_styles.mapContainer}
                mapCenterPosition={{ lat: 0, lng: 0 }}
                source={{ html: leafletHtml }}
                doDebug={false}
            />
            <View style={map_styles.locationInfoContainer}>
                <Text style={ui_elements_styles.locationInfoText}>Location: </Text>
                <Text style={ui_elements_styles.locationInfoText}>Hours of operation: </Text>
            </View>
        </View>
    )
}

export default Map