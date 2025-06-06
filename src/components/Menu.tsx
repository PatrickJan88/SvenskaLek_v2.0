import React, { useState } from 'react';
import { menuItems, menuCategories } from '../data/menuData';
import { Flame } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('main-dishes');

  const renderSpicyLevel = (level?: number) => {
    if (!level) return null;
    
    return (
      <div className="flex items-center mt-1">
        {Array.from({ length: level }).map((_, index) => (
          <Flame key={index} className="w-4 h-4 text-red-600" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-amber-800">
            Experience the authentic flavors of Thailand with our carefully crafted dishes, 
            made from traditional recipes and the freshest ingredients.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-amber-900">{item.name}</h3>
                    <span className="text-lg font-medium text-amber-700">${item.price.toFixed(2)}</span>
                  </div>
                  {renderSpicyLevel(item.spicyLevel)}
                  <p className="text-amber-800 mt-2">{item.description}</p>
                  <div className="mt-4 flex gap-2">
                    {item.isVegetarian && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Vegetarian</span>
                    )}
                    {item.isGlutenFree && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Gluten Free</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;