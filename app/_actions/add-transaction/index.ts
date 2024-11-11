"use server"

import { db } from "@/app/_lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { Prisma, TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"
import { addTransactionSchema } from "./schema"
import { revalidatePath } from "next/cache"

interface AddTransactionParams {
    name: string,
    amount: number,
    type: TransactionType,
    category: TransactionCategory,
    paymentMethod: TransactionPaymentMethod,
    date: Date
}

export const addTransaction = async(params: AddTransactionParams) => {

    addTransactionSchema.parse(params)

    const { userId }= await auth()

    if (!userId) {
        throw new Error("Sem autorização")
    }

    await db.transaction.create({
        data: { ...params, userId }
    })

    revalidatePath("/transactions")

}