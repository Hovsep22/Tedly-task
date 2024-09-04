import React, { FC, forwardRef, RefAttributes } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputWithLabelProps extends InputProps {
  label: string;
  error?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        <Input ref={ref} id={id}  {...props} />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  },
);

export default InputWithLabel;
