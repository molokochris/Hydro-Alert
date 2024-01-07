export default function generateUniqueColor(userId) {
  // Convert the user ID to an array of character codes
  const userCodes = userId.split("").map((char) => char.charCodeAt(0));

  // Calculate a checksum using the first character code
  const checksum = userCodes[0] % 256;

  // Extract RGB values from the remaining character codes
  let red = userCodes[1] % 256;
  let green = userCodes[2] % 256;
  let blue = userCodes[3] % 256;

  // Adjust values based on the checksum for additional variation
  red = (red + checksum) % 256;
  green = (green + checksum / 2) % 256;
  blue = (blue + checksum / 4) % 256;

  // Format and return the hex color code
  return (
    "#" +
    red.toString(16).padStart(2, "0") +
    green.toString(16).padStart(2, "0") +
    blue.toString(16).padStart(2, "0")
  );
}
