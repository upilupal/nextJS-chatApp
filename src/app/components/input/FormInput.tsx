'use client'

import { Input } from '@/components/ui/input';
import clsx from 'clsx';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const FormInput: React.FC<InputProps> = ({
    label,
    id,
    type,
    placeholder,
    required,
    register,
    errors,
    disabled,
}) => {
  return (
    <div>
        <label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-900'>
            {label}
        </label>

        <div className='mt-2'>
            <Input 
            placeholder={placeholder}
            type={type}
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...register(id, {required})} />
        </div>
    </div>
  )
}

export default FormInput