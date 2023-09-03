import React from 'react';
import {useForm} from 'react-hook-form';

const Inscription = () => {

    //récupération du hook
    const {handleSubmit, register, formState:{errors}} = useForm()
    //affichage de la data
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            FORMULAIRE D'INSCRIPTION
            {/* handleSubmit récupère les données si il n'y a pas d'erreur */}
            <form onSubmit={handleSubmit(onSubmit)}> 
            <label>Nom </label>
                <input name='Lastname' {...register('lastName',{required:true})}/>
            <label>Prénom </label>
                <input name='Firstname' {...register('firstName',{required:true})}/>
            <label>Pseudo </label>
                <input name='Pseudo' {...register('pseudo',{required:true})}/>
            <label>Date de naissance </label>
                <input name='Birthday' {...register('birthday',{required:true})}/>  
            <label>Email </label>
                <input name='Email' {...register('email',{required:true})}/>   
            <label>Mot de passe </label>
                <input name='Password' {...register('password',{required:true})}/>
            </form>
        </div>
    );
};

export default Inscription;