import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [birthplace, setBirthPlace] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [height_CM, setHeight] = useState('');
    const [weight_KG, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [sssNumber, setSSSNumber] = useState('');
    const [tinNumber, setTINNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [momFN, setMomFirstName] = useState('');
    const [momMN, setMomMiddleName] = useState('');
    const [momLN, setMomLastName] = useState('');
    const [momOcc, setMomOccupation] = useState('');
    const [fathFN, setFathFirstName] = useState('');
    const [fathMN, setFathMiddleName] = useState('');
    const [fathLN, setFathLastName] = useState('');
    const [fathOcc, setFathOccupation] = useState('');
    const [primary, setPrimaryLevel] = useState('');
    const [secondary, setSecondaryLevel] = useState('');
    const [tertiary, setTertiaryLevel] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setBirthday(item.birthday);
            setBirthPlace(item.birthplace);
            setAge(item.age);
            setGender(item.gender);
            setNationality(item.nationality);
            setCivilStatus(item.civil_status);
            setReligion(item.religion);
            setHeight(item.height_CM);
            setWeight(item.weight_KG);
            setBloodType(item.blood_type);
            setSSSNumber(item.sss_number);
            setTINNumber(item.tin_number);
            setZipCode(item.zip_code);
            setCitizenship(item.citizenship);
            setMomFirstName(item.mother_first_name);
            setMomMiddleName(item.mother_middle_name);
            setMomLastName(item.mother_last_name);
            setMomOccupation(item.mother_occupation);
            setFathFirstName(item.father_first_name);
            setFathMiddleName(item.father_middle_name);
            setFathLastName(item.father_last_name);
            setFathOccupation(item.father_occupation);
            setPrimaryLevel(item.primary);
            setSecondaryLevel(item.secondary);
            setTertiaryLevel(item.tertiary);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            email,
            phone,
            birthday,
            birthplace,
            age,
            gender,
            nationality,
            civil_status,
            religion,
            height_CM: height_CM,
            weight_KG: weight_KG,
            blood_type: bloodType,
            sss_number: sssNumber,
            tin_number: tinNumber,
            zip_code: zipCode,
            citizenship,
            mother_first_name: momFN,
            mother_middle_name: momMN,
            mother_last_name: momLN,
            mother_occupation: momOcc,
            father_first_name: fathFN,
            father_middle_name: fathMN,
            father_last_name: fathLN,
            father_occupation: fathOcc,
            primary,
            secondary,
            tertiary
        };

        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
            } else {
                await axios.post('http://localhost:8000/api/items/', formData);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form inputs for each field */}
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Birthplace:</label>
                <input type="text" value={birthplace} onChange={(e) => setBirthPlace(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <label>Nationality:</label>
                <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Religion:</label>
                <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
            </div>
            <div>
                <label>Height (cm):</label>
                <input type="number" value={height_CM} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type="number" value={weight_KG} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div>
                <label>SSS Number:</label>
                <input type="text" value={sssNumber} onChange={(e) => setSSSNumber(e.target.value)} />
            </div>
            <div>
                <label>TIN Number:</label>
                <input type="text" value={tinNumber} onChange={(e) => setTINNumber(e.target.value)} />
            </div>
            <div>
                <label>ZIP Code:</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={momFN} onChange={(e) => setMomFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={momMN} onChange={(e) => setMomMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type="text" value={momLN} onChange={(e) => setMomLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Occupation:</label>
                <input type="text" value={momOcc} onChange={(e) => setMomOccupation(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fathFN} onChange={(e) => setFathFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fathMN} onChange={(e) => setFathMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={fathLN} onChange={(e) => setFathLastName(e.target.value)} />
            </div>
            <div>
                <label>Father's Occupation:</label>
                <input type="text" value={fathOcc} onChange={(e) => setFathOccupation(e.target.value)} />
            </div>
            <div>
                <label>Primary Level:</label>
                <input type="text" value={primary} onChange={(e) => setPrimaryLevel(e.target.value)} />
            </div>
            <div>
                <label>Secondary Level:</label>
                <input type="text" value={secondary} onChange={(e) => setSecondaryLevel(e.target.value)} />
            </div>
            <div>
                <label>Tertiary Level:</label>
                <input type="text" value={tertiary} onChange={(e) => setTertiaryLevel(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;
