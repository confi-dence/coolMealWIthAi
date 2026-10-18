import { StyleSheet, Text, View } from "react-native";

export default function CookbookScreen() {
  return (
    <View style={styles.container}>
      <Text>Cookbook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});