import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { offer, formatBRL } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function PurchaseButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  function purchase() {
    if (offer.checkoutUrl) {
      window.location.assign(offer.checkoutUrl);
      return;
    }
    setOpen(true);
  }
  return (
    <>
      <Button onClick={purchase} className={cn("purchase-button", className)}>
        <span>{children}</span>
        <ArrowRight aria-hidden="true" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md rounded-lg">
          <LockKeyhole className="size-8 text-primary" />
          <DialogTitle>Seu próximo passo começa aqui.</DialogTitle>
          <DialogDescription>
            Protocolo Cicatriz Invisível + Sono de Mãe por {formatBRL(offer.price)}. O pagamento
            ainda não está disponível nesta página. Volte em breve para concluir sua compra.
          </DialogDescription>
          <Button onClick={() => setOpen(false)} className="h-12">
            Entendi
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
