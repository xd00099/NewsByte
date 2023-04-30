import React from 'react';
import './styles/menubar.css';

const MenuBar = ({ selectedItem, setSelectedItem }) => {
    const menuItems = ["All", "Politics", "Sports", "Entertainment","Technology", "Economics", "Public", "Health"];

    return (
        <div className="menu-bar">
            {menuItems.map((item, index) => (
                <div 
                    key={index} 
                    className={`menu-item ${item === selectedItem ? 'selected' : ''}`}
                    onClick={() => setSelectedItem(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default MenuBar;
