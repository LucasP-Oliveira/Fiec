import { Text, View } from "react-native";

//Traditional Function
// export function HelloWorld(props) {
//     return (
//         <View>
//             <Text>Olá</Text>
//             <Text>{props.name}</Text>
//         </View>
//     );
// }

//Arrow Function

// const HelloWorld = (props) => {
//     return  (
//         <View>
//             <Text>Olá</Text>
//             <Text>{props.name}</Text>
//         </View>
//     );
// }

//Arrow Function sem manipulation dados, somente JSX

const Helloworld = (props) => (
    <View>
        <Text>Olá</Text>
        <Text>{props.name}</Text>
    </View>
)

export default Helloworld;