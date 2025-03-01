import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Settings } from "lucide-react";
import { extension } from "@/types";

interface ExtensionCardProps {
    extension: extension;
    onInstall: (id: string) => void;
    onToggle: (id: string, enabled: boolean) => void;
    onConfigure: (extension: extension) => void;
}

export function ExtensionCard({
    extension,
    onInstall,
    onToggle,
    onConfigure,
}: ExtensionCardProps) {
    const { id, name, description, installed, enabled } = extension;

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex justify-between items-center">
                {installed ? (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Switch
                                id={`switch-${id}`}
                                checked={enabled}
                                onCheckedChange={(checked) =>
                                    onToggle(id, checked)
                                }
                            />
                            <label htmlFor={`switch-${id}`} className="text-sm">
                                {enabled ? "Enabled" : "Disabled"}
                            </label>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onConfigure(extension)}
                            title="Configure">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => onInstall(id)}>Install</Button>
                )}
            </CardFooter>
        </Card>
    );
}
