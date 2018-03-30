import EntypoGlyphMap from "react-native-vector-icons/glyphmaps/Entypo.json";
import EvilIconsGlyphMap from "react-native-vector-icons/glyphmaps/EvilIcons.json";
import FeatherGlyphMap from "react-native-vector-icons/glyphmaps/Feather.json";
import FontAwesomeGlyphMap from "react-native-vector-icons/glyphmaps/FontAwesome.json";
import FoundationGlyphMap from "react-native-vector-icons/glyphmaps/Foundation.json";
import IoniconsGlyphMap from "react-native-vector-icons/glyphmaps/Ionicons.json";
import MaterialCommunityIconsGlyphMap from "react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";
import MaterialIconsGlyphMap from "react-native-vector-icons/glyphmaps/MaterialIcons.json";
import OcticonsGlyphMap from "react-native-vector-icons/glyphmaps/Octicons.json";
import SimpleLineIconsGlyphMap from "react-native-vector-icons/glyphmaps/SimpleLineIcons.json";
import ZocialGlyphMap from "react-native-vector-icons/glyphmaps/Zocial.json";

class RNVectorHelper {
  static Resolve(family, name) {
    let glyph;

    switch (family) {
      case "Entypo":
        glyph = EntypoGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "EvilIcons":
        glyph = EvilIconsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "Feather":
        glyph = FeatherGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "FontAwesome":
        glyph = FontAwesomeGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "Foundation":
        glyph = FoundationGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "Ionicons":
        glyph = IoniconsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "MaterialCommunityIcons":
        glyph = MaterialCommunityIconsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "MaterialIcons":
        glyph = MaterialIconsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "Octicons":
        glyph = OcticonsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "SimpleLineIcons":
        glyph = SimpleLineIconsGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
      case "Zocial":
        glyph = ZocialGlyphMap[name];
        if (typeof glyph === "number") {
          glyph = String.fromCharCode(glyph);
        }

        return glyph;
    }
  }
}

export default RNVectorHelper;
