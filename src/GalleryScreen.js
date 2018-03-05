import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal} from 'react-native';
// import ImageElement from './../res/components/ImageElement';
import ImageElement from './ImageElement';



export default class GalleryScreen extends Component {

  state = {
    modalVisible: false,
    modalImage: require('./../res/img/Img1.png'),
    images: [
        require('./../res/img/Img1.png'),
        require('./../res/img/Img2.png'),
        require('./../res/img/Img3.png'),
        require('./../res/img/Img4.png'),
        require('./../res/img/Img5.png'),
        require('./../res/img/Img6.png'),
        require('./../res/img/Img7.png'),
        require('./../res/img/Img8.png'),
        require('./../res/img/Img9.png'),
        require('./../res/img/Img10.png'),
        require('./../res/img/Img11.png'),
        require('./../res/img/Img12.png'),
        require('./../res/img/Img13.png'),
        require('./../res/img/Img14.png'),
        require('./../res/img/Img15.png')
    ]}

setModalVisible(visible, imageKey) {
  this.setState({ modalImage: this.state.images[imageKey] });
  this.setState({ modalVisible: visible});
}

getImage() {
  return this.state.modalImage;
}

render() {
    let images = this.state.images.map((value, key) => {
      return <TouchableOpacity key={key}
          onPress={() => {this.setModalVisible(true, key)}}>
          <View style={styles.imagewrap}>
              <ImageElement imgsource={value}></ImageElement>
          </View>
      </TouchableOpacity>
    });

    return (
      <ScrollView>
        <View style={styles.container}>
            <Modal style={styles.modal} animationType={'none'}
                  transparent={true} visible={this.state.modalVisible}
                  onRequestClose={() => {}}>
                  <View style={styles.modal}>
                      <Text style={styles.text}
                          onPress={() => {this.setModalVisible(false)}}>
                            Close
                      </Text>
                      <ImageElement imgsource={this.state.modalImage}></ImageElement>
                  </View>
            </Modal>

            {images}
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/4) - 12,
    width: (Dimensions.get('window').width/3) - 4,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    textAlign: 'right',
    color: '#fff'
  }

});









// import React from 'react'
// import {Text, View, Button, Image, TouchableOpacity, AppRegistry, StyleSheet, RefreshControl} from 'react-native'
// import PhotoGrid from 'react-native-photo-grid'
// import PTRView from 'react-native-pull-to-refresh'
//
//
// export default class GalleryScreen extends React.Component{
//
//     static navigationOptions = (props) => ({
//         title:'Gallery',
//         tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_friends.png')}/>,
//     })
//
// constructor(props){
//       super(props);
//       this.state =  {
//         items: [],
//         refreshing: false,
//         }}
//
// _onRefresh(){
//       this.setState({refreshing: true})
//       this.fetchData().then(()=>{
//         this.setState({refreshing: false})
//       });
//     }
//
// fetchData = async() =>{
//           let items = Array.apply(null, Array(18)).map((v, i) => {
//            return { id: i, src: 'http://placehold.it/200x200?text='+(i+1)}
//           });
//           this.setState({ items });
//       };
//
// componentDidMount(){
//         this.fetchData();
//           }
//
// render(){
//     return(
//       <View style={styles.container}>
//         <PhotoGrid
//           data = { this.state.items }
//           itemsPerRow = { 3 }
//           itemMargin = { 1 }
//           renderItem = { this.renderItem }
//           RefreshControl={
//             <RefreshControl
//               refreshing = {this.state.refreshing}
//               onRefresh={this._onRefresh.bind(this)}
//               />
//             }
//         />
//       </View>
// );
//     }
//
//     renderItem(item, itemSize) {
//         return(
//               <TouchableOpacity
//                 key = { item.id }
//                 style = {{ width: itemSize, height: itemSize }}
//                 onPress={() => this.props.screenProps.modalNavigation.navigate('detailedGallery', {imagesource:item.src})}
//                 >
//                 <Image
//                   resizeMode = "cover"
//                   style = {{ flex: 1 }}
//                   source = {{ uri: item.src }}
//                 />
//               </TouchableOpacity>
//           )
//         }
// }
//
// const styles = StyleSheet.create({
//  container:{
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center'
//  }
// })
