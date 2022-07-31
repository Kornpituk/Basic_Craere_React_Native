import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph,View } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native'
import axios from 'axios';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const AttractionCard = (props) => (

  <Card style={styles.BG_Card_Color}>

    {/*------------------------------------------------------------------------  Card Title  ---------------------------------------------------------------------*/}

    <Card.Title title={props.attraction.nickname.en+"BNK48"} subtitle={props.attraction.firstname.th+"  "+props.attraction.lastname.th} left={LeftContent} />

    {/*------------------------------------------------------------------------  Card Title  ---------------------------------------------------------------------*/}


    {/*------------------------------------------------------------------------  Card Content  ---------------------------------------------------------------------*/}

    <Card.Content>
      <Paragraph numberOfLines={2}>
        </Paragraph>
        <Paragraph numberOfLines={2}>
        </Paragraph>
      <Card.Cover source={{ uri: 'https://murmuring-mountain-39162.herokuapp.com/images/'+props.attraction.id+'/s/'+props.attraction.image_name}} />
    </Card.Content>

    {/*------------------------------------------------------------------------  Card Content  ---------------------------------------------------------------------*/}

    {/*------------------------------------------------------------------------  Card Action  ---------------------------------------------------------------------*/}

    <Card.Actions>
      <Button style={styles.btn}
      onPress={() => props.navigation.navigate('Attraction Details',{
        id:props.attraction.id,
        img_id:props.attraction.image_name
      })}
      >See More</Button>
    </Card.Actions>

    {/*------------------------------------------------------------------------  Card Action  ---------------------------------------------------------------------*/}

  </Card>
);

{/*------------------------------------------------------------------------- StyleSheet -----------------------------------------------------------------------------*/}

const styles = StyleSheet.create({
  Text:{
    fontSize:20
  },
  BG_Card_Color:{
    backgroundColor:'#FBF1FF',
    borderWidth:4,
    borderColor:'#B900FF',
    justifyContent:'center',
    alignContent:'center',
  },
  btn:{
    backgroundColor:'#E08BFF',
    fontSize:25,
    textShadowColor:'#6C6C6C'
  }
})

{/*------------------------------------------------------------------------- StyleSheet -----------------------------------------------------------------------------*/}

export default AttractionCard;