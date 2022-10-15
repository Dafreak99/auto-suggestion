import { useEffect, useState } from 'react';
import Collections from '../data/collections.json';
import Products from '../data/products.json';
import Suggestion from '../data/suggestions.json';

export const useSearch = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (keyword) {
      processingSearch();
    }
  }, [keyword]);

  const processingSearch = () => {
    const regex = new RegExp(keyword, 'gi');

    const matchedSuggestions = Suggestion.filter((suggestion) => {
      return regex.test(suggestion.term);
    });

    const matchedCollections = Collections.filter((collection) => {
      return regex.test(collection.title);
    });

    const matchedProducts = Products.filter((product) => {
      return regex.test(product.title);
    });

    setSuggestions(matchedSuggestions);
    setCollections(matchedCollections);
    setProducts(matchedProducts);
  };

  return [suggestions, collections, products];
};
