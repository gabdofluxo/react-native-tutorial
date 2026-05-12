import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'expo-router';

export default function CardUser({ avatar, name, email, id }) {

  const { users, setUsers, setUserToEdit } = useUserStore();
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/user/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Usuário deletado com sucesso', data);
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers);
    } else {
      console.log('Erro ao deletar usuário', data);
    }
  };


  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} 
      />

      <View style={styles.actions}>
        <FontAwesome name="edit" size={24} color="black" onPress={() => {setUserToEdit({ avatar, name, email, id }); router.push('/edit-user')}}   />
        <FontAwesome name="trash-o" size={24} color="black" style={styles.trash} onPress={handleDelete} />
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  info: { 
    flex: 1,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 14,
    color: 'gray',
  },

  actions: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
    gap: 14,

  },

  trash: {
    marginBottom: 2
  }
});