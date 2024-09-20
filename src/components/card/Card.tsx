const Card = ({ title, children }: any) => {
    return (
      <div className="bg-white p-4 md:w-96 rounded-md">
        <h2 className="text-center md:text-3xl text-xl mb-3 md:mb-5 pb-2 md:p-4 border-b">{title}</h2>
        {children}
      </div>
    )
  }
  
  export default Card