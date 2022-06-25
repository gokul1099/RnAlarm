import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

interface IconProps {
    type: String,
    name: String,
    size: Number,
    color: String,
}

const Icons = (props: IconProps) => {
    const { type, name, color, size } = props
    const getIcon = (type: String) => {
        switch (type) {
            case 'materialCommunity':
                return MaterialCommunityIcons
        }
    };

    const IconType = getIcon(type)
    return <IconType name={name} color={color} size={size} />

}

export default Icons