import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  itemName: {
    color: '#FFF',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#E23C44',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
