import { useState } from 'react';
import './css/App.css';
import Calculator from './components/Calculator';
import Converter from './components/Converter';
import CategorySelection from './components/CategorySelection';

function App() {
  const [isCalculatorActive, setCalculatorActive] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleApps = () => {
    setCalculatorActive((prev) => !prev);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {isCalculatorActive ? (
        <Calculator toggleApps={toggleApps} />
      ) : (
        selectedCategory ? (
          // Render the specific converter component based on the selected category
          renderConverterComponent(selectedCategory, toggleApps)
        ) : (
          // Render the category selection screen
          <CategorySelection onSelectCategory={handleCategorySelect} />
        )
      )}
    </>
  );
}

// Helper function to render the appropriate converter component based on the category
const renderConverterComponent = (category, toggleApps) => {
  switch (category) {
    case 'Time':
      return <Converter toggleApps={toggleApps} category={category} />;
    // Add cases for other categories and import their corresponding components
    default:
      return null;
  }
};

export default App;
