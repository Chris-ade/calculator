import '../css/UIcons.css'

const CategorySelection = ({ onSelectCategory }) => {

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="calculator-body-container">
      <div className="calculator-body converter">
      <div className="category">
        <div className="title">Select a category</div>
        <div className="category-buttons">
        <div className="category-button" key={"Area"} onClick={() => handleCategoryClick('Area')}>
        <i className="fi fi-rr-land-layers"></i> Area
        </div>

        <div className="category-button" key={"Data"} onClick={() => handleCategoryClick('Data')}>
        <i className="fi fi-rr-data-transfer"></i> Data
        </div>

        <div className="category-button" key={"Discount"} onClick={() => handleCategoryClick('Discount')}>
        <i className="fi fi-rr-percentage"></i> Discount
        </div>

        <div className="category-button" key={"Length"} onClick={() => handleCategoryClick('Length')}>
        <i className="fi fi-rr-ruler-horizontal"></i> Length
        </div>

        <div className="category-button" key={"Mass"} onClick={() => handleCategoryClick('Mass')}>
        <i className="fi fi-rr-gym"></i> Mass
        </div>

        <div className="category-button" key={"Speed"} onClick={() => handleCategoryClick('Speed')}>
        <i className="fi fi-rr-tachometer-fast"></i> Speed
        </div>

        <div className="category-button" key={"Temperature"} onClick={() => handleCategoryClick('Temperature')}>
        <i className="fi fi-rr-temperature-high"></i> Temperature
        </div>

        <div className="category-button" key={"Time"} onClick={() => handleCategoryClick('Time')}>
        <i className="fi fi-rr-time-twenty-four"></i> Time
        </div>

        <div className="category-button" key={"Volume"} onClick={() => handleCategoryClick('Volume')}>
        <i className="fi fi-rr-cube"></i> Volume
        </div>
      </div>
      </div>
      </div>
      <div className="is-credits">Created By <strong>Chris Adebiyi</strong></div>
    </div>
  );
};

export default CategorySelection;
