"use client"

import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge, CircleIcon } from "lucide-react"



export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({row: {original: transaction}}) => {
      if (transaction.type === TransactionType.DEPOSIT){
        return <Badge className="bg-muted text-primary hover:bg-muted font-bold">
          <CircleIcon className="fill-primary mr-2" size={10}/>
            Depósito
          </Badge>
      }
      if (transaction.type === TransactionType.EXPENSE){
        return <Badge className="bg-muted text-destructive hover:bg-muted font-bold">
        <CircleIcon className="fill-primary mr-2" size={10}/>
          Despeza
        </Badge>
        
      }

      return <Badge className="bg-muted text-white hover:bg-muted font-bold">
      <CircleIcon className="fill-primary mr-2" size={10}/>
        Investimento
      </Badge>

      
        
    }
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header:"",
  },

]
