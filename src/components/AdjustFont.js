import { Dimensions, PixelRatio } from "react-native";

// adjust font
const { width } = Dimensions.get("window");
const fontScale = 0.85;

export default function calculateFontSize(baseFont) {
  const adjustFontSize = PixelRatio.roundToNearestPixel(
    (baseFont * width * fontScale) / 360
  );

  return adjustFontSize;
}
