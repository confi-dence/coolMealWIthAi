import { UserContent } from "@/content/UserContent";
import GlobalApi from "@/services/GlobalApi";
import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const { user, setUser } = useContext(UserContent);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims()
        .then(async (userData) => {
          console.log("User claims:", userData);

          if (userData?.email) {
            const result = await GlobalApi.GetUserByEmail(userData?.email);
            console.log(result.data.data); //to get strapi data in response

            if (!result.data.data || result.data.data.length === 0) {
              // insert new record
              const data = {
                email: userData.email,
                name: userData.name,
                picture: userData.picture,
              };
              const resp = await GlobalApi.CreateNewUser(data);
              console.log(resp.data.data); //to get strapi data in response
              setUser(resp.data.data); // Update the user state with the newly created user data
              router.replace("/(tabs)/Home"); // Redirect to the Home page after creating the user
            } else {
              const existingUser = result.data.data[0];

              const updatedData = {
                name: userData.name || "",
                picture: userData.picture || "",
              };

              const updatedUser = await GlobalApi.UpdateUser(
                existingUser.documentId,
                updatedData,
              );

              console.log("Updated Strapi user:", updatedUser.data.data);

              setUser(updatedUser.data.data);

              router.replace("/(tabs)/Home");
            }
          }
        })
        .catch((err) => {
          console.error("❌ FAILED:", err.message);
          console.error("Full:", err);
          console.error("Response:", err.response?.data);
        });
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>{/* <Redirect href={"/Landing"}/> */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
