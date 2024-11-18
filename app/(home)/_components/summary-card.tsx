import { Card, CardContent, CardHeader } from "@/app/_components/ui/card"
import { ReactNode } from "react"

interface SummaryCardProps{
    icon: ReactNode,
    title: string,
    amount: number,
    size: "small" | "large"
}


const SummaryCard = ({icon, title, amount, size}: SummaryCardProps) => {

    return(

        <Card>
        <CardHeader className="flex-row items-center gap-4">
            {icon}
            <p className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}>{title}</p>
        </CardHeader>
        <CardContent>

            <p className="text-2xl font-bold">{Intl.NumberFormat(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }

            ).format(amount)}</p>

        </CardContent>
    </Card>
    )




}

export default SummaryCard