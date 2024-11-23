import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_componentes/Acquire-plan-button";
import { Badge } from "../_components/ui/badge";

const Subscription = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  //const user = await clerkClient().users.getUser(userId);
  return (
    <>
      <Navbar />

      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>

        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="relative border-b border-solid">
              <Badge className="absolute left-4 top-6">Teste Gratis</Badge>
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">0</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 trnsações por mês</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>

              <div className="flex items-center gap-3">
                <XIcon />
                <p>Apenas 10 trnsações por mês</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid">
              <h2 className="text-center text-2xl font-semibold">
                Plano Premium
              </h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">12,99</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Chega de excel, constrole suas finanças com finance AI!</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>

              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Subscription;
