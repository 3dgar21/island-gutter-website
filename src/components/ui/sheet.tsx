'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm bg-white dark:bg-black p-6 shadow-lg',
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = 'SheetContent';
