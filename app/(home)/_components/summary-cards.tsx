import { Card, CardContent, CardHeader } from "@/app/_components/ui/card"
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react"
import SummaryCard from "./summary-card"

const SummaryCards = () => {

    return (
        <div className="space-y-6">

            <Card>
                <CardHeader>
                    <WalletIcon size={16}/>
                    <p className="text-white opacity-70 ">Saldo</p>
                </CardHeader>
                <CardContent>

                    <p className="text-4xl font-bold">R$ 2.700,00</p>

                </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-6">

                <SummaryCard icon={<PiggyBankIcon size={16}/>} title="Investido" amount={3500} size="small"/>
                <SummaryCard icon={<TrendingUpIcon size={16} className="text-primary"/>} title="Receita" amount={1200} size="small"/>
                <SummaryCard icon={<TrendingDownIcon size={16} className="text-red-500"/>} title="Despesas" amount={1700} size="small"/>



            </div>

        </div>
    )

}

export default SummaryCards