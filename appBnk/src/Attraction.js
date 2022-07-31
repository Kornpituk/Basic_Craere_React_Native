import axios from 'axios';
import * as React from 'react';
import { SafeAreaView, ScrollView ,StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import AttractionCard from './AttractionCard';

const baseUrl_ID = 'https://powerful-reef-47354.herokuapp.com/members';
const baseUrl_Img = 'https://murmuring-mountain-39162.herokuapp.com/images';


const Attactions = (props) => {

    {/*--------------  State ID & Imge Member  ------------------*/}

    const [memberId, setMemberId] = React.useState([]);
    const [attractions, setAttractions] = React.useState([]);
    const [ImgMember, setImgMember] = React.useState([]);

    {/*--------------  State ID & Imge Member  ------------------*/}


    {/*--------------  State Search  ------------------*/}

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    {/*--------------  State Search  ------------------*/}


    {/*----------------  Fetch API ID Member  ----------------------*/}

    React.useEffect(() => {
        fetch("https://powerful-reef-47354.herokuapp.com/members")
          .then(res => res.json())
          .then(
            (result) => {
              setAttractions(result);
            },
          )
      }, [])

    {/*----------------  Fetch API ID Member  ----------------------*/}


    {/*----------------  Fetch API Image Member  ----------------------*/}

    React.useEffect(() => {
        fetch("https://murmuring-mountain-39162.herokuapp.com/images")
          .then(res => res.json())
          .then(
            (result) => {
                setImgMember(result);
            },
          )
      }, [])

    {/*----------------  Fetch API Image Member  ----------------------*/}


      
  return (
    <SafeAreaView style={styles.BG_Card_A_Color}>
        {/*--------------Searchbar ------------------*/}
        <Searchbar 
        style={styles.BG_Card_A_Color}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
        {/*--------------Searchbar ------------------*/}


        
      <ScrollView >
        {/*--------------Map  attraction API Id Member------------------*/}
        {attractions.map(attraction => (
          <AttractionCard 
          key={attraction.id} 
          navigation={props.navigation}
          attraction={attraction}
          />
        ))}
        {/*--------------Map  attraction API Id Member------------------*/}

        {/*--------------Map  attraction API Imge Member------------------*/}
        {ImgMember.map(img => (
          <AttractionCard 
          key={img.id} 
          navigation={props.navigation}
          img={img}
          />
        ))}
        {/*--------------Map  attraction API Imge Member------------------*/}
      </ScrollView>
    </SafeAreaView>
  );
}

{/*---------------------------- StyleSheet ------------------------------*/}
const styles = StyleSheet.create({
    Text:{
      fontSize:20
    },
    BG_Card_A_Color:{
      backgroundColor:'#AB50AE',
    },
    Serrch:{
        backgroundColor:'#E08CFF',
        textShadowColor:'white'
    }
  })

{/*---------------------------- StyleSheet ------------------------------*/}


export default Attactions;