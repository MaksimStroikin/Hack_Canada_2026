import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <View>
            <Text>app_provider</Text>
        </View>
    )
}

export default AppProvider;
