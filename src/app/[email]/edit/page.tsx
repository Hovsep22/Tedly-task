import EditCustomerForm from '@/components/EditCustomerForm';
import React, { FC } from 'react';

const EditPage: FC<{ params: { email: string } }> = ({ params }) => {
  const email = decodeURIComponent(params?.email);

  return <EditCustomerForm email={email} />;
};

export default EditPage;
