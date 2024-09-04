'use client'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import AddCustomer from '@/components/AddCustomer'

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  return (
    <>
    <AddCustomer />
    </>
  );
}
