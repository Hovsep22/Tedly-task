import { CustomerSchemaType, EditCustomerSchemaType } from '@/schema/customer';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  customers: CustomerSchemaType[];
}

const initialState: CounterState = {
  customers: [],
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<CustomerSchemaType>) => {
      state.customers.push(action.payload);
    },
    edit: (state, action: PayloadAction<EditCustomerSchemaType>) => {
      state.customers = state.customers?.map((customer) => {
        if (customer.email === action.payload?.email) {
          return { ...customer, ...action.payload };
        }
        return customer;
      });
    },
    delate: (state, action: PayloadAction<string>) => {
      state.customers = state.customers?.filter((customer) => customer.email !== action.payload);
    },
  },
});

export const { create, edit, delate } = customersSlice.actions;

export default customersSlice.reducer;
