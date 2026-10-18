import GlobalApi from '@/services/GlobalApi';
import { Image } from '@/ui/image';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function CategoriesList() {

    const [categoryList, setCategoryList] = useState([])
 
    useEffect(()=>{
        GetCategories();
    },[])

    const GetCategories = async () =>{
        const result = await GlobalApi.GetCategoriesList();
        // console.log(result.data.data);
        setCategoryList(result?.data?.data)
        
    }

  return (
    <View>
      <Text style={styles.heading}>Category</Text>
      <FlatList
      data={categoryList}
      numColumns={4}
       scrollEnabled={false} // 👈 Add this line!
         keyExtractor={(item, index) => index.toString()} // <-- Add this
      renderItem={({item, index}:any)=>(
        <View style={styles.categoriesContainer}>
            
            <Image source={{uri:item?.image?.url}} style={{width:40, height:40}}/>
            <Text style={{fontFamily:'outfit', marginTop:3}}>{item?.name}</Text>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontFamily:'outfit-bold',
        fontSize:17,
        marginTop:20
    },
    categoriesContainer:{
        flex:1,
        display:'flex',
        alignItems:'center',
        marginTop:8
    }
})