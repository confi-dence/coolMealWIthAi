import axios from "axios";
import OpenAI from 'openai';

const AxiosClient = axios.create({
  baseURL: "http://192.168.65.54:1337/api", // Replace with your API base URL
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_KEY}`,
  },
});

const GetUserByEmail = (email: string) => AxiosClient.get(`/user-lists?filters[email][$eq]=${email}`);

const CreateNewUser = (data:any) => AxiosClient.post("/user-lists", { data:data });
const UpdateUser = (id: string, data:any) => AxiosClient.put(`/user-lists/${id}`, { data:data });
const GetCategoriesList = ()=> AxiosClient.get('categories?populate=*')
const CreateNewRecipe = async (data: any) =>  await AxiosClient.post('/recipes', { data: data });



const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

const AiModel = async (prompt: string) => {
  const response = await openai.chat.completions.create({
model: 'openrouter/free',
    messages: [
      {
        role: 'user' as const,
        content: prompt,
      },
    
    ],
    response_format: { type: 'json_object' },
  });
  return response;
};



const BASE_URL='https://aigurulab.tech';
const GenerateAiImage = async (input)=> await axios.post(BASE_URL+'/api/generate-image',
        {
            width: 1024,
            height: 1024,
            input: input,
            model: 'sdxl',//'flux'
            aspectRatio:"1:1"//Applicable to Flux model only
        },
        {
            headers: {
                'x-api-key': process.env.EXPO_PUBLIC_AIGURULAB_API_KEY, // Your API Key
                'Content-Type': 'application/json', // Content Type
            },

        })






export default {
  GetUserByEmail,
  CreateNewUser,
  UpdateUser,
  GetCategoriesList,
  AiModel,
  GenerateAiImage,
CreateNewRecipe,

};

// export default GlobalApi;
