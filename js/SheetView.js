import { NativeModules } from "react-native";

const { RNBottomActionSheet } = NativeModules;


class SheetView {
    constructor () {
        this.items = new Array()
    }
    
    setTitle (title) {
        this.title = title
    }

    addItem (title, subTitle, icon) {
        this.items.push({
            title: title,
            subTitle: subTitle,
            icon: icon
        })
    }

    show () {
        RNBottomActionSheet.SheetView({
            title: this.title,
            items: this.items
        })
    }
}

export { SheetView };
