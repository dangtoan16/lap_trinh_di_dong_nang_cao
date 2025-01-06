import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const YourSelfPage = ({navigation}:any)=>{
   const [intervalId, setIntervalId] = useState<any>()
   useEffect(() => {
      const interval = setInterval(() => {
        navigation.navigate("HomePage");
      }, 10000);
  
      setIntervalId(interval);
  
      return () => {
        if (intervalId) {
         console.log("clearInterval")
          clearInterval(intervalId);
        }
      };
    }, []); 
    return (
       <View style={{flex:1}}>
            <View style={{backgroundColor:'#ccc',paddingVertical:20}}>
               <Text style={{fontSize:20,paddingHorizontal:12}}>
                  Bài tập 1
               </Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <View>
                  <Text style={{textAlign:'center'}}>
                     Giới thiệu:
                  </Text>
                  <Text style={{textAlign:'center'}}>
                     Họ tên: Đặng Hoàng Toàn
                  </Text>
                  <Text style={{textAlign:'center'}}>
                     Mssv: 21110322
                  </Text>
                  <Text style={{textAlign:'center'}}>
                     Lớp: Lap trinh di dong nang cao_ A4-404_CT2Nhom 02CLC
                  </Text>
               </View>
         </View>
       </View>
     )
   }

export default YourSelfPage;
