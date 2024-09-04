'use client';

import Container from '@/components/Container';
import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomerSchemaType, customerSchema, editCustomerSchema } from '@/schema/customer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type FormType = 'create' | 'edit';

interface CustomerFormProps {
  type: FormType;
  onSubmit: SubmitHandler<CustomerSchemaType>;
  defaultValues?: CustomerSchemaType;
  rootError?: string;
}

function CustomerForm({ type = 'create', onSubmit, defaultValues, rootError }: CustomerFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CustomerSchemaType>({
    resolver: zodResolver(type === 'create' ? customerSchema : editCustomerSchema),
    defaultValues: {
      role: 'user',
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  const submitHandler: SubmitHandler<CustomerSchemaType> = (data) => {
    if (onSubmit(data)) reset();
  };

  return (
    <Container >
      <h1 className="mb-10 text-xl font-bold">
        {type === 'create' ? 'Add Customer' : 'Edit Customer'}
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6">
        <div className="flex w-full gap-6">
          <InputWithLabel
            {...register('firstName')}
            type="text"
            id="firstName"
            label="First Name"
            autoComplete="off"
            error={errors?.firstName?.message}
          />
          <InputWithLabel
            {...register('lastName')}
            error={errors?.lastName?.message}
            type="text"
            id="lastName"
            label="Last Name"
            autoComplete="off"
          />
        </div>
        <InputWithLabel
          {...register('company')}
          error={errors?.company?.message}
          type="text"
          id="company"
          label="Company"
        />
        <Controller
          name="role"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Tabs defaultValue="user" value={value} onValueChange={onChange}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="administrator">Administrator</TabsTrigger>
              </TabsList>
              {error?.message}
            </Tabs>
          )}
        />
        <InputWithLabel
          {...register('email')}
          disabled={type === 'edit'}
          error={errors?.email?.message}
          type="email"
          id="email"
          label="Email"
        />

        {type === 'create' && (
          <InputWithLabel
            {...register('password')}
            type="password"
            id="password"
            label="Password"
            error={errors?.password?.message}
          />
        )}

        {rootError && <p className="text-red-500">{rootError}</p>}
        <Button type="submit" className="w-full bg-[#0EA5E9]">
          Save
        </Button>
      </form>
    </Container>
  );
}

export default CustomerForm;
