'use client';

import React from 'react';
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import editButton from '../images/Edit.svg';
import trash from '../images/Trash.svg';
import Image from 'next/image';
import { delate, edit } from '@/store/slice';
// @ts-ignore
import Jdenticon from 'react-jdenticon';

const Customers = () => {
  const { customers } = useSelector((state: RootState) => state.customers);
  const dispatch = useDispatch();

  return (
    <Container className="flex-[2] p-6 md:overflow-y-auto md:p-12 ">
      <h1 className="mb-10 text-xl font-bold">Customers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.email}>
              <TableCell className="font-medium flex gap-1 items-center overflow-hidden">
                <div className="bg-[#F1F5F9] p-1 rounded-lg">
                  <Jdenticon size="24" value={customer.email} />
                </div>
                {customer.firstName} {customer.lastName}
              </TableCell>
              <TableCell>{customer.company}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>
                <div
                  className={`h-6 w-12 rounded-[4px] ${
                    customer.role === 'administrator' ? 'bg-[#0EA5E9]' : 'bg-[#E2E8F0]'
                  }`}></div>
              </TableCell>
              <TableCell className="text-right flex justify-end align-center gap-2">
                <Link href={`/${customer?.email}/edit`}>
                  <Image
                    src={editButton}
                    alt="edit"
                    className="cursor-pointer"
                    // onClick={() => dispatch(edit(customer))}
                  />
                </Link>
                <Image
                  src={trash}
                  alt="trash"
                  className="cursor-pointer"
                  onClick={() => dispatch(delate(customer.email))}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Customers;
