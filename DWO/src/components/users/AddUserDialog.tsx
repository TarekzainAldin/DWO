
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';

type AddUserDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: any) => void;
};

type FormValues = {
  name: string;
  email: string;
  role: string;
};

const AddUserDialog = ({ isOpen, onClose, onAddUser }: AddUserDialogProps) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      role: '',
    }
  });

  const onSubmit = (data: FormValues) => {
    const newUser = {
      ...data,
      status: 'Pending',
      lastLogin: 'N/A',
    };
    
    onAddUser(newUser);
    toast({
      title: "User Invited",
      description: `An invitation has been sent to ${data.email}`,
    });
    reset();
    onClose();
  };

  const handleRoleChange = (value: string) => {
    setValue('role', value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Send an invitation to join your organization. They'll receive an email with instructions.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                {...register('name', { required: 'Name is required' })} 
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} 
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Administrator">Administrator</SelectItem>
                  <SelectItem value="Board Member">Board Member</SelectItem>
                  <SelectItem value="Committee Chair">Committee Chair</SelectItem>
                  <SelectItem value="Committee Member">Committee Member</SelectItem>
                  <SelectItem value="Staff">Staff</SelectItem>
                  <SelectItem value="Volunteer">Volunteer</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Send Invitation</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
