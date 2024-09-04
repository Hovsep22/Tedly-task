'use client';
import { SubmitHandler } from 'react-hook-form';
import CustomerForm from './CustomerForm';
import { CustomerSchemaType, EditCustomerSchemaType } from '@/schema/customer';
import { useDispatch, useSelector } from 'react-redux';
import { edit } from '@/store/slice';
import { FC, useEffect } from 'react';
import { RootState } from '@/store/store';
import { notFound } from 'next/navigation';

interface EditCustomerFormProps {
  email: string;
}

const EditCustomerForm: FC<EditCustomerFormProps> = ({ email }) => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state: RootState) => state?.customers);
  const customer = customers?.find((customer) => customer?.email === email);

  const handleSubmit: SubmitHandler<EditCustomerSchemaType> = (data) => {
    dispatch(edit(data));
    return true;
  };

  if (!customer) notFound();

  return <CustomerForm type="edit" onSubmit={handleSubmit} defaultValues={customer} />;
};

export default EditCustomerForm;
