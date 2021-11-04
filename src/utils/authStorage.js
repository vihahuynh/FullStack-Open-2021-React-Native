import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem("auth:accessToken");
    return accessToken ? JSON.parse(accessToken) : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem("auth:accessToken", accessToken);
  }

  removeAccessToken() {
    await AsyncStorage.removeItem("auth:accessToken");
  }
}

export default AuthStorage;
