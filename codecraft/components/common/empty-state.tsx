import { LucideIcon } from 'lucide-react';

interface EmptyStateTypes {
  message: string;
  icon?: LucideIcon;
}

function EmptyState({ message, icon: Icon }: EmptyStateTypes) {
  return (
    <div className='empty-state'>
      {Icon && (
        <Icon className='size-10 text-muted-foreground/50 mx-auto mb-4' />
      )}
      <p className='text-lg text-muted-foreground'>{message}</p>
    </div>
  );
}
export default EmptyState;
