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
    const matchedSuggestions = Suggestion.filter((suggestion) => {
      return suggestion.term.toLowerCase().includes(keyword);
    });

    const matchedCollections = Collections.filter((suggestion) => {
      return suggestion.title.toLocaleLowerCase().includes(keyword);
    });

    const matchedProducts = Products.filter((suggestion) => {
      return suggestion.title.toLowerCase().includes(keyword);
    });

    setSuggestions(matchedSuggestions);
    setCollections(matchedCollections);
    setProducts(matchedProducts);
  };

  return [suggestions, collections, products];
};
