'use client';

import { CustomerSchemaType } from '@/schema/customer';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CustomerForm from './CustomerForm';
import { create } from '@/store/slice';
import { RootState } from '@/store/store';
import { useState } from 'react';

const AddCustomer = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { customers } = useSelector((state: RootState) => state?.customers);
  const handleSubmit: SubmitHandler<CustomerSchemaType> = (data) => {
    const candidate = customers?.find((customer) => customer?.email === data?.email);
    if (candidate) {
      setError('Customer with this email already exists');
      return false;
    } else {
      setError('');
      dispatch(create(data));
      return true;
    }
  };
  return <CustomerForm type="create" onSubmit={handleSubmit} rootError={error} />;
};

export default AddCustomer;
