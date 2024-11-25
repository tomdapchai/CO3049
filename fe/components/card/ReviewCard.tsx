import { Star } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReviewStar } from "../decoration/ReviewStar";

interface ReviewCardProps {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
}

export function ReviewCard({
    reviewer,
    rating,
    comment,
    date,
}: ReviewCardProps) {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4 bg-main">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{reviewer}</h3>
                    <div
                        className="flex items-center space-x-2"
                        aria-label={`Rating: ${rating} out of 5 stars`}>
                        <ReviewStar rating={rating} /> <p>({rating}/5)</p>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">{date}</p>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
                <p className="text-sm leading-relaxed">{comment}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
                <p>Was this review helpful?</p>
            </CardFooter>
        </Card>
    );
}
