import { cn } from '@/shared/lib/utils'

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-primary/10', className)}
      {...props}
    />
  )
}

export { Skeleton }