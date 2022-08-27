

const SelectButton = ({ children, selected, onClick }) => {
 
 

  return (
    <button onClick={onClick} className = {`select-button ${selected} `}>
      {children}
    </button>
  );
};

export default SelectButton;
