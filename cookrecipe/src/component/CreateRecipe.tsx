import { ImageIconPack } from "@/assets/images";
import Colors from "@/services/Colors";

import GlobalApi from "@/services/GlobalApi";
import Prompts from "@/services/prompt";
import { Image } from "@/ui/image";
import { useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import Button from "./Button";
import LoadingDialog from "./LoadingDialog";

const CreateRecipe = () => {
  const [userInput, setUserInput] = useState<string>();
  const [recipeOptions, setRecipeOptions] = useState<any | null>([]);
  const [loading, setLoading] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const OnGenerate = async () => {
    if (!userInput) {
      Alert.alert("please enter details");
      return;
    }

    setLoading(true);

    const result = await GlobalApi.AiModel(
      userInput + Prompts.GENERATE_Recipe_OPTION_PROMPT,
    );

    const content = result?.choices[0].message?.content;

    console.log(result?.choices[0].message);

    if (content) {
      const parsedContent = JSON.parse(content);

      setRecipeOptions(
        Array.isArray(parsedContent)
          ? parsedContent
          : parsedContent.recipes
            ? parsedContent.recipes
            : [parsedContent],
      );
    }

    setLoading(false);

    actionSheetRef.current?.show();
  };

  const GenerateCompleteRecipe = async (option: any) => {
    actionSheetRef.current?.hide();
      await new Promise(resolve => setTimeout(resolve, 400))
    setOpenLoading(true);
    const PROMPT =
      "RecipeName:" +
      option.recipeName +
      "Description:" +
      option.description +
      Prompts.GENERATE_COMPLETE_RECIPE_PROMPT;
    const result = await GlobalApi.AiModel(PROMPT);

    const content:any = result?.choices[0].message?.content;
      const JSONContent: any = JSON.parse(content);  
    console.log(JSONContent?.imagePrompt);
    

    console.log(JSONContent);
 
  const imageUrl =   await GenerateRecipeImage(JSONContent.imagePrompt);
  const insertedRecordResult = await SaveTodb(JSONContent,imageUrl)
  console.log(insertedRecordResult);
  
    setOpenLoading(false);
  };


   
const GenerateRecipeImage = async (imagePrompt: string) => {
  const result = await GlobalApi.GenerateAiImage(imagePrompt);
console.log(result.data.image) 
return result.data.image
};

  const SaveTodb=async (content:any,imageUrl:string)=>{
    const data={
      ...content,
      recipeImage:imageUrl
    }
    const result = await GlobalApi.CreateNewRecipe(data);
    return result.data.data

  }
//   const SaveTodb = async (content: any, imageUrl: string) => {
//   const data = { ...content };

//   // Do not send the generated image as Base64.
//   delete data.recipeImage;

//   // Remove any invalid locale supplied by the AI response.
//   if (data.locale == null || data.locale === "null") {
//     delete data.locale;
//   }

//   console.log("Recipe locale before saving:", data.locale);

//   const result = await GlobalApi.CreateNewRecipe(data);

//   return result.data;
// };
  return (
    <View style={styles.Container}>
      <Image source={ImageIconPack.FreePan} style={styles.panImage} />
      <Text style={styles.heading}>
        Warm up your stove, and let's get cooking!
      </Text>
      <Text style={styles.subheading}>Make something for your Love!</Text>
      <TextInput
        placeholder="What yo want to craete? Add ingredient etc"
        multiline={true}
        numberOfLines={3}
        style={styles.textInput}
        onChangeText={(value) => setUserInput(value)}
      />
      <Button
        label={"Generate Recipe"}
        onPress={() => OnGenerate()}
        icon={"sparkles"}
        loading={loading}
      />
      <LoadingDialog visible={openLoading} />

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.heading}>Select Recipe</Text>
          <View>
            {recipeOptions?.map((item: any, index: any) => (
              <TouchableOpacity
                onPress={() => GenerateCompleteRecipe(item)}
                key={index}
                style={styles.recipeOptionContainer}
              >
                <Text style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
                  {item?.recipeName}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 16,
                    color: Colors.GRAY,
                  }}
                >
                  {item?.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    // justifyContent:"center"
  },
  panImage: {
    width: 80,
    height: 80,
  },
  heading: {
    fontFamily: "outfit",
    fontSize: 23,
    textAlign: "center",
  },
  subheading: {
    fontFamily: "outfit",
    fontSize: 16,
    textAlign: "center",
    marginTop: 6,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    borderRadius: 15,
    height: 120,
    marginTop: 8,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top",
  },
  actionSheetContainer: {
    padding: 25,
  },
  recipeOptionContainer: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 15,
    marginTop: 15,
  },
});

