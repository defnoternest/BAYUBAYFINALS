import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            console.log(response.data); // Log the response to check if it contains the necessary fields
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsFormVisible(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${id}/`);
            fetchItems();
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    const handleSuccess = () => {
        setIsFormVisible(false);
        setSelectedItem(null);
        fetchItems();
    };

    return (
        <div>
            <h1>Item List</h1>
            <button onClick={() => {
                setSelectedItem(null);
                setIsFormVisible(true);
            }}>Add New Item</button>
            {items.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <p><strong>First Name:</strong> {item.first_name}</p>
                    <p><strong>Middle Name:</strong> {item.middle_name}</p>
                    <p><strong>Last Name:</strong> {item.last_name}</p>
                    <p><strong>Address:</strong> {item.address}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Phone:</strong> {item.phone}</p>
                    <p><strong>Birthday:</strong> {item.birthday}</p>
                    <p><strong>Birthplace:</strong> {item.birthplace}</p>
                    <p><strong>Age:</strong> {item.age}</p>
                    <p><strong>Gender:</strong> {item.gender}</p>
                    <p><strong>Nationality:</strong> {item.nationality}</p>
                    <p><strong>Civil Status:</strong> {item.civil_status}</p>
                    <p><strong>Religion:</strong> {item.religion}</p>
                    <p><strong>Height:</strong> {item.height_CM}</p>
                    <p><strong>Weight:</strong> {item.weight_KG}</p>
                    <p><strong>Blood Type:</strong> {item.blood_type}</p>
                    <p><strong>SSS Number:</strong> {item.sss_number}</p>
                    <p><strong>TIN Number:</strong> {item.tin_number}</p>
                    <p><strong>ZIP Code:</strong> {item.zip_code}</p>
                    <p><strong>Citizenship:</strong> {item.citizenship}</p>
                    <p><strong>Mother's Name:</strong> {`${item.mother_first_name} ${item.mother_middle_name} ${item.mother_last_name}`}</p>
                    <p><strong>Father's Name:</strong> {`${item.father_first_name} ${item.father_middle_name} ${item.father_last_name}`}</p>
                    <p><strong>Primary Level:</strong> {item.primary}</p>
                    <p><strong>Secondary Level:</strong> {item.secondary}</p>
                    <p><strong>Tertiary Level:</strong> {item.tertiary}</p>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
            {isFormVisible && (
                <ItemForm item={selectedItem} onSuccess={handleSuccess} />
            )}
        </div>
    );
};

export default ItemList;
