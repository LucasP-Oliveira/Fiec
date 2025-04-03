/*import { View } from "react-native";

const DimensoesFixas = () => {
    return (
        <View>
            <View style={{width: 50, height: 50, backgroundColor: "powderblue"}} />
            <View style={{width: 100, height: 100, backgroundColor: "skyblue"}}/>
            <View  style={{width:150, height: 150, backgroundColor: "steelblue"}}/>
        </View>
    )
}

export default DimensoesFixas;*/

import { View } from "react-native";

const DimensoesFixas = () => {
    return (
        <View style={{width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItens: "stretch"}}>
            <View style={{/*flexGrow: 1*/ flexShrink: 1, flexBasis: 300, backgroundColor: "powderblue"}} />
            <View style={{flexShrink: 3, flexBasis: 300, backgroundColor: "skyblue"}}/>
            <View style={{flexShrink: 1, flexBasis: 300, backgroundColor: "steelblue"}}/>
        </View>
    )
}

export default DimensoesFixas;