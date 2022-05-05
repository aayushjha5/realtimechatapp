import { FlatList, StyleSheet } from 'react-native';
import {  View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';


export default function ChatsScreen() {
  return (
    <View style={styles.container}>
       <FlatList
        data={ChatRooms} //renderItem is a function that is called whenever Flatlist calls one chatroom
        renderItem={({item}) => <ChatListItem chatRoom={item} />} 
        keyExtractor={(item) => item.id}
        style={{width: '100%'}}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
