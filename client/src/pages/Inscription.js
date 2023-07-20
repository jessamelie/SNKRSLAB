import React from 'react';
import {useForm} from 'react-hook-form';

const Inscription = () => {

    //récupération du hook
    const {register, handleSubmit} = useForm()
    //affichage de la data
    const onSubmit = data => console.log(data)

    return (
        <div>
            FORMULAIRE D'INSCRIPTION
            <form onSubmit={handleSubmit(onSubmit)}> 
                <input name='Firstname' {...register('firstName',{required:true})}/>
                <input pseudo='Pseudo'/>

            </form>
        </div>
    );
};

export default Inscription;