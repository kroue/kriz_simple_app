import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function RecipeDetails({ route }) {
  const { name, description, image, fullRecipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image source={image} style={styles.recipeImage} />
      
      <View style={styles.textContainer}>
        {/* Recipe Name */}
        <Text style={styles.recipeName}>{name}</Text>
        
        {/* Recipe Description */}
        <Text style={styles.recipeDescription}>{description}</Text>

        {/* Ingredients Section */}
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        <Text style={styles.recipeText}>{fullRecipe.ingredients.join(', ')}</Text>

        {/* Instructions Section */}
        <Text style={styles.sectionTitle}>Instructions:</Text>
        <Text style={styles.recipeText}>{fullRecipe.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  recipeImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  recipeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
});
