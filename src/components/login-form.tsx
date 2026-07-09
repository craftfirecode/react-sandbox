import {cn} from "@/lib/utils"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"

interface LoginFormProps extends React.ComponentProps<"div"> {
  title?: string;
  description?: string;
}

export function LoginForm({
                            className,
                            title = "Login to your account",
                            description = "Enter your username below to login to your account",
                            children,
                            ...props
                          }: LoginFormProps) {
  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </div>
  )
}
