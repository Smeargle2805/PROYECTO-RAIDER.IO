import {View, Image} from 'react-native'

export const Logo = () => {
    return <View style={{paddingBottom: 15}}>
        <Image 
            style={{width: 400, height: 200}}
            source={{uri: "https://wowvendor.com/app/uploads/2023/08/thumb-5.jpg"}}
        />
    </View>
}