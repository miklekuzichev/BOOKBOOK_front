function InputData({ InputDataText, onClick }) {
    return (
        <button 
          className="mobile-navigation__data-input"
          type="button"
          onClick={onClick}
          >
          <p className="mobile-navigation__data-input_text">{ InputDataText }</p>
        </button>
    );
}

export default InputData;












