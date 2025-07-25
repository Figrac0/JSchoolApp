import { StyleSheet, Text, View, Image } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button/Button";
import { ErrorNotification } from "./shared/ErrorNotification/ErrorNotification";
import { useState } from "react";

export default function App() {
    const [error, setError] = useState<string | undefined>();

    const alert = () => {
        setError("Неверный логин и пароль");
        setTimeout(() => {
            setError(undefined);
        }, 4000);
    };

    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("./assets/logo.png")}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" />
                    <Input isPassword placeholder="Пароль" />
                    <Button text="Войти" onPress={alert} />
                </View>
                <Text style={styles.text}>Восстановить пароль</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 55,
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    form: {
        alignSelf: "stretch",
        gap: Gaps.g16,
    },

    logo: {
        width: 400,
        height: 100,
    },
    text: {
        color: Colors.white,
    },
});
