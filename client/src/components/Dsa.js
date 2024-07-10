import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function DSA(props) {
  const [items, setItems] = useState(() => {
    // Retrieve items from localStorage if available
    const savedItems = localStorage.getItem('dsaItems');
    return savedItems ? JSON.parse(savedItems) : props.items;
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemLink, setNewItemLink] = useState('');

  useEffect(() => {
    // Update localStorage whenever items change
    localStorage.setItem('dsaItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!newItemTitle || !newItemDescription || !newItemLink) {
      setShowAddForm(false);
      alert('Please provide valid information');
      return;
    }
    const newItem = {
      title: newItemTitle,
      description: newItemDescription,
      link: newItemLink,
    };
    setItems([...items, newItem]);
    setNewItemTitle('');
    setNewItemDescription('');
    setNewItemLink('');
    setShowAddForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className={`text-2xl font-bold ${props.mode ? 'text-white' : 'text-gray-900'} mb-4 transition-all duration-500`}>{props.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className={`relative rounded-lg ${props.mode ? 'bg-gray-900' : 'bg-white'} shadow-md p-4 hover:shadow-xl transition-all duration-400 ease-in-out`}>
            <h3 className={`text-lg font-semibold ${props.mode ? 'text-white' : 'text-gray-900'} mb-2`}>{item.title}</h3>
            <p className={`${props.mode ? 'text-white' : 'text-gray-900'}`}>{item.description}</p>
            <a href={item.link} className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500">
              <FaArrowRight className={`${props.mode ? 'text-white' : 'text-gray-900'} transition-all duration-500`} />
            </a>
          </div>
        ))}
      </div>
      {!showAddForm && (
        <button className={`btn py-2 px-2 bg-blue-600 mt-4 rounded-lg ${props.mode ? 'text-white' : 'text-gray-900'}`} onClick={() => setShowAddForm(true)}>Add Element</button>
      )}
      {showAddForm && (
        <div className="mt-4">
          <div className="mt-4">
            <label className={`block text-sm font-medium ${props.mode ? 'text-white' : 'text-gray-900'}`}>Title</label>
            <input
              type="text"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              className={`mt-1 block sm:w-96 px-3 py-2 ${props.mode ? 'text-white' : 'text-gray-900'} ${props.mode ? 'bg-gray-900' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
          </div>
          <div className="mt-4">
            <label className={`block text-sm font-medium ${props.mode ? 'text-white' : 'text-gray-900'}`}>Description</label>
            <textarea
              value={newItemDescription}
              onChange={(e) => setNewItemDescription(e.target.value)}
              className={`mt-1 h-20 sm:h-auto sm:w-96 block px-3 py-2 ${props.mode ? 'text-white' : 'text-gray-900'} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${props.mode ? 'bg-gray-900' : 'bg-white'}`}
            />
          </div>
          <div className="mt-4">
            <label className={`block text-sm font-medium ${props.mode ? 'text-white' : 'text-gray-900'}`}>Link</label>
            <input
              type="text"
              value={newItemLink}
              onChange={(e) => setNewItemLink(e.target.value)}
              className={`mt-1 sm:w-96 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${props.mode ? 'bg-gray-900' : 'bg-white'} ${props.mode ? 'text-white' : 'text-gray-900'}`}
            />
          </div>
          <button className={`btn py-2 px-2 bg-blue-600 mt-4 rounded-lg ${props.mode ? 'text-white' : 'text-gray-900'}`} onClick={addItem}>Add Element</button>
        </div>
      )}
    </div>
  );
}

export default DSA;
