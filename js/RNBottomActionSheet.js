
import { AlertView } from './AlertView'
import { GridView } from './GridView'
import { SheetView } from './SheetView'

class RNBottomActionSheet {

    static AlertView = () => {
        return new AlertView()
    }

    static GridView = () => {
        return new GridView()
    }

    static SheetView = () => {
        return new SheetView()
    }
}

export default RNBottomActionSheet;
