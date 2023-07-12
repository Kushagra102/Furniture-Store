const Header = ({ name }) => {
    return (
      <>
        <div className="w-full flex justify-center text-center mb-16">
          <h1 className="sm:text-3xl md:text-4xl text-xl font-bold text-transparent bg-clip-text bg-black">
            {name}
          </h1>
        </div>
      </>
    );
  };
  
  export default Header;