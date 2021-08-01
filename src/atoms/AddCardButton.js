const AddCardButton = () => {
  return (  
    <button>
      <svg className="plus-sign-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 3V45" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 24H45" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default AddCardButton;