import * as React  from 'react';
import { Avatar, Button, Card, Title, Paragraph,Text,Searchbar } from 'react-native-paper';
import { Linking ,StyleSheet} from 'react-native';
import axios from 'axios' 



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const baseUrl_ID = 'https://powerful-reef-47354.herokuapp.com/members';
const baseUrl_Img = 'https://murmuring-mountain-39162.herokuapp.com/images';



const AttactionDetial = ({route}) => {

      
    const {id} = route.params;
    const {img_id} = route.params;

    const url_img = `${baseUrl_Img}/${id}/s/${img_id}` /// Url API IMGE

    {/*--------------  State ID & Imge Member  ------------------*/}

    const [attraction, setAttraction] = React.useState([null]);
    const [nameMem, setNameMem] = React.useState([null]);

    {/*--------------  State ID & Imge Member  ------------------*/}

    {/*----------------  Fetch API ID Member  ----------------------*/}

    React.useEffect(() => {
      fetch("https://powerful-reef-47354.herokuapp.com/members/"+id)
        .then(res => res.json())
        .then(
          (result) => {
            setAttraction(result);
          },
        )
    }, [])

    {/*----------------  Fetch API ID Member  ----------------------*/}

    // React.useEffect(() => {
    //   const url = `${baseUrl_ID}/${id}`;
    //   axios.get("https://powerful-reef-47354.herokuapp.com/members/"+id)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setNameMem(result.firstname.en);
    //       },
    //     )
    // }, [])

    // console.log(nameMem);

    {/*----------------  Fetch API ID Member  ----------------------*/}

      {/*------------------------------------------------------------------------- Render Card-Detail -----------------------------------------------------------------------------*/}
  
      if(attraction != null){
        return (


          

          <Card style={styles.CardTilt}>

            {/* // -----------------------------------------------------------------------Card Tile------------------------------------------------------------------------- // */}

            <Card.Title style={styles.CardTilt} title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

            {/* // -----------------------------------------------------------------------Card Tile------------------------------------------------------------------------- // */}

            {/* // -----------------------------------------------------------------------Card Content ------------------------------------------------------------------------- // */}

            <Card.Content style={styles.CardContain}>
              {/* <Text>{attraction.lastname.en}</Text> */}
              <Text>Birthday: {attraction.birthDay}</Text>
              <Text>Height: {attraction.height}</Text>
              <Text>Province: {attraction.province}</Text>
              <Text>Likes: {attraction.likes}</Text>
              <Text>Hobbies: {attraction.hobbies}</Text>
              <Text>Instagram: {attraction.instagram}</Text>
              <Text>Generation: {attraction.generation}</Text>
  
  
            </Card.Content>

            {/* // -----------------------------------------------------------------------Card Content ------------------------------------------------------------------------- // */}


            {/* // -----------------------------------------------------------------------Card Cover Imge ------------------------------------------------------------------------- // */}
  
              <Card.Cover source={{ uri: url_img}} />

            {/* // -----------------------------------------------------------------------Card Cover Imge ------------------------------------------------------------------------- // */}
            
          </Card>
        );
        }else{
          return(
            <Text>Loading</Text>
          )
        }

      {/*------------------------------------------------------------------------- Render Card-Detail -----------------------------------------------------------------------------*/}

}

{/*------------------------------------------------------------------------- StyleSheet -----------------------------------------------------------------------------*/}

const styles = StyleSheet.create({
  Text:{
    fontSize:20
  },
  BG_Card_A_Color:{
    backgroundColor:'#AB50AE',
  },
  CardContain:{
    backgroundColor:'#FBF1FF',
    borderWidth:4,
    borderColor:'#F5DAFF',
    justifyContent:'center',
    alignContent:'center',
    fontSize:20,
    fontWeight:200
  },
  CardTilt:{
    backgroundColor:'#FBF1FF',
  }
})

{/*------------------------------------------------------------------------- StyleSheet -----------------------------------------------------------------------------*/}

  

export default AttactionDetial;