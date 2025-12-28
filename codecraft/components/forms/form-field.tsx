import { placeholder } from 'drizzle-orm';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
}

function FormField({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
}: FormFieldProps) {
  return (
    <>
      <Label htmlFor='name'>{label}</Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />

      {helperText && (
        <p className='text-xs text-muted-foreground'>{helperText}</p>
      )}
      {error && <p className='text-sm text-destructive'> {error} </p>}
    </>
  );
}
export default FormField;
