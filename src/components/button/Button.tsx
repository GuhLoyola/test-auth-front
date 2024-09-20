const Button = ({children, ...props}: any) => {
    return (
      <button {...props} className="px-7 py-3 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-500">
          {children}
      </button>
    )
  }
  
  export default Button