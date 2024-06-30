import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Slokpage from "./Slokpage";

export function Popup({ isOpen, onClose, slokData }: any) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            
            <DialogContent className="w-[90%] h-[90%]">
                <DialogHeader>
                    <h1>Slok Details</h1>
                </DialogHeader>
                <ScrollArea className="grid gap-4 py-4">
                    <Slokpage slokData={slokData} />
                </ScrollArea>
                <DialogFooter>
                    <Button type="button" onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
