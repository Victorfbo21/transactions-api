import { ICreateTransaction } from "../Interfaces/Transactions/create-transaction.interface";
import TransactionSchema from "../Schemas/transactionSchema"
import WalletSchema from "../Schemas/walletSchema";
import validateTransaction from "../Middlewares/validateTransaction";
import { IVerifyFunds } from "../Interfaces/Transactions/verifyFunds.interface";
import toTransaction from "../Middlewares/doTransaction";

const insertTransaction = async (transaction: ICreateTransaction) => {
    const transactionCreated = new TransactionSchema({ ...transaction })

    const payer = transaction.payer;
    const value = transaction.value;

    const data: IVerifyFunds = {
        payer: payer,
        value: value
    }
    const validate = await validateTransaction(data)
    if (validate) {
        toTransaction(transaction)
            .then(async () => {
                return await transactionCreated.save()
                    .then(
                        (o) => {
                            console.log('Transaçao Salva com Sucesso !')
                            return transactionCreated._id
                        }

                    ).catch(
                        (e) => {
                            return e
                        }
                    )
            })
            .catch((err) => {
                console.log(err)
            })


    }

}
const getTransactions = async (filter: string, skip: number, limit: number) => {
    filter = filter || ''
    return await TransactionSchema.find({
        $or: [
            { storeName: new RegExp('.*' + filter + '.*', 'i') },
            { storeEmail: new RegExp('.*' + filter + '.*', 'i') },

        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Erro ao Listar Lojas', e)
            return null
        }
    )
}


const deleteTransaction = async (id: string) => {
    return await TransactionSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Erro em Deletar Loja')
        }

    )
}

const updateTransaction = async (id: string, update: Partial<ICreateTransaction>) => {
    return await TransactionSchema.findByIdAndUpdate(id, update)
        .then(
            (o) => {
                return o
            }
        ).catch(
            (e) => {
                console.log('Erro em Atualizar Dados da Loja')
            }

        )
}


export default {
    insertTransaction,
    deleteTransaction,
    updateTransaction,
    getTransactions
}