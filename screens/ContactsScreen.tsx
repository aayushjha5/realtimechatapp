import { FlatList, StyleSheet } from 'react-native';
import {  View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';
import users from '../data/Users';


export default function ContactsScreen() {
  return (
    <View style={styles.container}>
       <FlatList
        data={users} //renderItem is a function that is called whenever Flatlist calls one chatroom
        renderItem={({item}) => <ContactListItem user={item} />} 
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
