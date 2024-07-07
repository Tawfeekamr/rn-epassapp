import React from "react";
import { View, Text, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import LoginForm from "../components/LoginForm";
import { useThemeContext } from "../context/themeContext";
import * as SecureStore from "expo-secure-store";
import { themes } from "../theme/theme";
import { useLocaleContext } from "../context/LocaleContext";
import { getCountryCode } from "../utils/helper";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen: React.FC = () => {
  const { theme, setTheme } = useThemeContext();
  const { locale } = useLocaleContext();

  const toggleTheme = async () => {
    if (!theme.dark) {
      setTheme("Dark");
      return;
    }

    const localTheme = getCountryCode(locale);
    setTheme(localTheme as keyof typeof themes);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Icon size={33} name={!theme?.dark ? "moon-o" : "sun-o"} />
      </TouchableOpacity>
      <LoginForm />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  button: {
    padding: 30,
    alignItems: "flex-end",
    borderRadius: 5,
    marginTop: 20,
  },
};

export default LoginScreen;
