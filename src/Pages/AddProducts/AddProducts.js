import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';


const AddProducts = () => {
    const [success, setSuccess] = useState(false);
    const nameRef = useRef();
    const feature1Ref = useRef();
    const feature2Ref = useRef();
    const feature3Ref = useRef();
    const imageRef = useRef();

    const handleProductAdd = e => {
        const name = nameRef.current.value;
        const feature1 = feature1Ref.current.value;
        const feature2 = feature2Ref.current.value;
        const feature3 = feature3Ref.current.value;
        const img = imageRef.current.value;
        const product = {
            name,
            description: {
                feature1,
                feature2,
                feature3
            },
            img
        }
        console.log(product);

        fetch('https://secure-inlet-19520.herokuapp.com/product', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Successfully Added.')
                    setSuccess(true);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ my: 10 }}>

                <Typography sx={{ color: 'blue', fontWeight: 500 }} variant="h5" gutterBottom>
                    Please Enter Product Information
                </Typography>

                <form onSubmit={handleProductAdd} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Product Name
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={nameRef} type="text" placeholder='Enter Product Name' />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Feature 1
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={feature1Ref} type="text" placeholder='Enter Feature 1' />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Feature 2
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={feature2Ref} type="text" placeholder='Enter Feature 2' />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Feature 3
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={feature3Ref} type="text" placeholder='Enter Feature 3' />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Image URL
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={imageRef} type="text" placeholder='Enter Image URL Size ( 500 * 300 )' />
                    </label>

                    <button style={{ color: 'black', backgroundColor: 'MediumSlateBlue', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', fontWeight: 700 }} type="submit">Submit</button>

                </form>
                {success && <Alert severity="success">Product Added successfully!</Alert>}
            </Box>
        </>
    );
};

export default AddProducts;