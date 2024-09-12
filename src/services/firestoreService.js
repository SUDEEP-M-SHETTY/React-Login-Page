import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

// Save new user data
export const saveUserData = async (userId, data) => {
  try {
    await setDoc(doc(firestore, 'users', userId), data);
    console.log('User data saved successfully!');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

// Fetch user data by user ID
export const fetchUserData = async (userId) => {
  try {
    const userDoc = doc(firestore, 'users', userId);
    const docSnapshot = await getDoc(userDoc);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

// Update user data
export const updateUserData = async (userId, newData) => {
  try {
    const userDoc = doc(firestore, 'users', userId);
    await updateDoc(userDoc, newData);
    console.log('User data updated successfully!');
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

// Delete user data
export const deleteUserData = async (userId) => {
  try {
    await deleteDoc(doc(firestore, 'users', userId));
    console.log('User data deleted successfully!');
  } catch (error) {
    console.error('Error deleting user data:', error);
  }
};

// Example: Fetch users with a specific condition
export const fetchUsersByCondition = async (condition) => {
  try {
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, where('fieldName', '==', condition)); // Replace 'fieldName' and 'condition' with actual values
    const querySnapshot = await getDocs(q);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error('Error fetching users by condition:', error);
    return [];
  }
};