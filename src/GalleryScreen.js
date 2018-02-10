import React from 'react'
import {Text, View, Button, Image, TouchableOpacity, AppRegistry, StyleSheet, RefreshControl} from 'react-native'
import PhotoGrid from 'react-native-photo-grid'
import PTRView from 'react-native-pull-to-refresh'

//Navigation for Picture Slide Show
import {StackNavigator} from 'react-navigation'
import ParentScreen from './GalleryScreen'
import ChildScreen from './PictureSlideShow'

const slideshow = StackNavigator({
  ParentScreen: {screen: ParentScreen}
  ChildScreen: {screen: ChildScreen}
});


export default class GalleryScreen extends React.Component{



    static navigationOptions = (props) => ({
        title:'Gallery',
        tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_friends.png')}/>,
    })

    constructor(props){
      super(props);
      this.state =  {
        items: [],

        }}



_onRefresh(){
      this.setState({refreshing: true})
      this.fetchData().then(()=>{
        this.setState({refreshing: false})
      });
    }

fetchData = async() =>{
          let items = Array.apply(null, Array(18)).map((v, i) => {
           return { id: i, src: 'https://picsum.photos/200'}
          });
          this.setState({ items });

      };
    componentDidMount(){
          		this.fetchData();
          }
render(){
      return(
        <View style={styles.container}>
        <PhotoGrid
          data = { this.state.items }
          itemsPerRow = { 3 }
          itemMargin = { 1 }
          renderItem = { this.renderItem }
    RefreshControl={
      <RefreshControl
        refreshing = {this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
        />
            }
        />
      </View>
);
    }
    renderItem(item, itemSize) {
        return(
              <TouchableOpacity
                key = { item.id }
                style = {{ width: itemSize, height: itemSize }}
                onPress={() => navigate('ChildScreen', { name: 'Slide Show' })}
                >
                <Image
                  resizeMode = "cover"
                  style = {{ flex: 1 }}
                  source = {{ uri: item.src }}
                />
              </TouchableOpacity>
          )
        }
}
const styles = StyleSheet.create({
 container:{
    flex: 1,
       flexDirection: 'column',
   justifyContent: 'center'


 }
})
