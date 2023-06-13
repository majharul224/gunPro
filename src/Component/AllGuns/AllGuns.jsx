import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import Modal from '../Modal/Modal';

const AllGuns = ({ countIncrease }) => {
    const [guns, setGuns] = useState([])
    const [gunsDetails, setGunsDetiles]=useState({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(req => req.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 className=' text-5xl font-bold'>WellCome To <span className='text-yellow-500'>Fake Guns</span> Store</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    guns.slice(0,8).map(gun => <SingleGun
                        key={gun.id}
                        gun={gun}
                        countIncrease={countIncrease}
                        setGunsDetiles={setGunsDetiles}
                    ></SingleGun>)
                }
            </div>
           {
            gunsDetails &&
            <Modal
            gunsDetails={gunsDetails}
            ></Modal>
            }
        </div>
    );
};

export default AllGuns;