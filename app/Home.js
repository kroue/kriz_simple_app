import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Import local images
import ChickenAdoboImage from '../assets/chickenadobo.jpg';
import LechonKawaliImage from '../assets/lechonkawali.jpg';
import LumpiaImage from '../assets/lumpia.jpg';
import PancitImage from '../assets/pancit.jpg';
import SinigangImage from '../assets/sinigang.jpg';

// Filipino recipes with local image paths and full recipe data
const recipes = [
  { 
    id: 1, 
    name: 'Chicken Adobo', 
    description: 'A savory Filipino dish with soy sauce and vinegar.',
    image: ChickenAdoboImage,
    fullRecipe: {
      ingredients: ['Chicken', 'Soy sauce', 'Vinegar', 'Garlic', 'Bay leaves', 'Pepper'],
      instructions: '1. Marinate chicken in soy sauce, vinegar, garlic, and pepper. 2. Simmer in a pot with bay leaves until tender. 3. Serve with rice.'
    }
  },
  { 
    id: 2, 
    name: 'Sinigang na Baboy', 
    description: 'A sour tamarind-based soup with pork and vegetables.',
    image: SinigangImage,
    fullRecipe: {
      ingredients: ['Pork', 'Tamarind', 'Tomatoes', 'Radish', 'Spinach'],
      instructions: '1. Boil pork and tamarind until tender. 2. Add tomatoes, radish, and spinach. 3. Adjust the sourness and serve.'
    }
  },
  { 
    id: 3, 
    name: 'Pancit Canton', 
    description: 'Stir-fried noodles with vegetables, shrimp, and pork.',
    image: PancitImage,
    fullRecipe: {
      ingredients: ['Noodles', 'Shrimp', 'Pork', 'Carrots', 'Green beans', 'Soy sauce'],
      instructions: '1. Stir-fry pork and shrimp. 2. Add vegetables and noodles. 3. Stir in soy sauce and cook until noodles are soft.'
    }
  },
  { 
    id: 4, 
    name: 'Lechon Kawali', 
    description: 'Crispy pan-fried pork belly served with a dipping sauce.',
    image: LechonKawaliImage,
    fullRecipe: {
      ingredients: ['Pork belly', 'Garlic', 'Salt', 'Pepper', 'Oil'],
      instructions: '1. Boil pork belly with garlic, salt, and pepper. 2. Fry until crispy. 3. Serve with dipping sauce.'
    }
  },
  { 
    id: 5, 
    name: 'Lumpiang Shanghai', 
    description: 'Filipino spring rolls filled with ground pork, shrimp, and vegetables.',
    image: LumpiaImage,
    fullRecipe: {
      ingredients: ['Ground pork', 'Shrimp', 'Carrots', 'Spring roll wrappers', 'Garlic'],
      instructions: '1. Mix ground pork, shrimp, and garlic. 2. Roll mixture in spring roll wrappers. 3. Fry until golden brown.'
    }
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe List</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() =>
              navigation.navigate('RecipeDetails', {
                name: item.name,
                description: item.description,
                image: item.image,
                fullRecipe: item.fullRecipe,
              })
            }
          >
            <Image source={item.image} style={styles.recipeImage} />
            <View style={styles.textContainer}>
              <Text style={styles.recipeName}>{item.name}</Text>
              <Text style={styles.recipeDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recipeItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    alignItems: 'center',
  },
  recipeImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#777',
  },
});
