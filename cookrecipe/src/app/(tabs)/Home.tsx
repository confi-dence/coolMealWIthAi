
import CategoriesList from "@/component/CategoriesList";
import CreateRecipe from "@/component/CreateRecipe";
import IntroHeader from "@/component/introHeader";
import Colors from "@/services/Colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
   <ScrollView>
      <View style={{padding:20}}>
      {/* Intro */}
      <IntroHeader/>

      {/* Recipe Generator */}
      <CreateRecipe/>
      {/* Category */}

      <CategoriesList/>
    </View>
   </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});