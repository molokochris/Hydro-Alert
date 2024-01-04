import * as SecureStore from "expo-secure-store";

// Function for saving data
export async function saveData(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    // Handle any errors that occur during saving
    console.error("Error saving data:", error);
  }
}

// Function for retrieving data
export async function getData(key) {
  try {
    const result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    // Handle any errors that occur during retrieval
    console.error("Error retrieving data:", error);
    return undefined;
  }
}

export async function deleteData(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error:", error);
  }
}
