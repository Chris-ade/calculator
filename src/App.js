import { useState } from 'react';
import './css/App.css';
import Calculator from './components/Calculator';
import Converter from './components/Converter';
import CategorySelection from './components/CategorySelection';
import DiscountConverter from './components/DiscountConverter';

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
    if (category === "Discount") {
      return <DiscountConverter toggleApps={toggleApps} />;
    } else {
      return <Converter toggleApps={toggleApps} category={category} />;
    };
};

export default App;
