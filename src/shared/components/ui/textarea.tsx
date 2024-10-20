import * as React from 'react'

import { cn } from '@/shared/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        <textarea
          className={cn(
            error ? 'border-red-500' : 'border-white/20',
            'flex min-h-full w-full rounded-md  border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
