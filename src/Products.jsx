import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Products = () => {
  const ProductData = [
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
    {
      img: "SubCupboard.png",
      name: "Bedside Table",
      price: "Rs 100",
    },
    
  ];

  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigateToProductPage = () => {
    navigate("/products");
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const productsContainer = document.querySelector(".products-container");

      if (navbar && productsContainer) {
        const navbarHeight = navbar.offsetHeight;
        const productsContainerTop = productsContainer.offsetTop;

        if (window.pageYOffset >= productsContainerTop - navbarHeight) {
          productsContainer.style.position = "fixed";
          productsContainer.style.top = `${navbarHeight}px`;
        } else {
          productsContainer.style.position = "static";
          productsContainer.style.top = "auto";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-5">
      <Header name="Products" />

      <div className="products-container">
        <div className="flex flex-wrap pt-14 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          {ProductData &&
            ProductData.map((data, index) => (
              <div
                key={index}
                className="p-4 md:w-72 w-72 sm:mb-0 mb-6 cursor-pointer"
                onClick={navigateToProductPage}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <div
                    className="object-cover object-center h-full w-full"
                    style={{
                      backgroundImage: `url(${data.img})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      filter: `brightness(${
                        hoveredIndex === index ? "100%" : "100%"
                      })`,
                      transition: "filter 0.3s ease",
                    }}
                  >
                    {hoveredIndex === index && (
                      <div className="flex flex-col items-center justify-end h-full bg-black bg-opacity-80 px-2 py-4">
                        <h3 className="text-white text-lg font-medium mb-1">
                          {data.name}
                        </h3>
                        <p className="text-white text-sm">{data.price}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
