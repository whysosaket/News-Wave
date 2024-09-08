import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component({ onRetry }: { onRetry?: () => void } = {}) {
  return (
    <Card className="w-full max-w-md mx-auto border-white/20 bg-white/10 text-white">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <AlertCircle className="w-12 h-12 text-destructive" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-center" id="error-heading">Failed to Load News</h2>
        <p className="text-center text-white/80" id="error-description">
          We couldn't load the latest news. Please try again later.
        </p>
        <Button 
          onClick={onRetry} 
          className="mt-4 bg-white text-black hover:bg-gray-200"
          aria-describedby="error-description"
        >
          Try Again
        </Button>
      </CardContent>
    </Card>
  )
}