import UserSchema from "../Schemas/usersSchema";
import { ICreateUser } from "../Interfaces/Users/create-user.interface";
import encodePassword from "../Utils/encodePassword";
const insertUser = async (user: ICreateUser) => {
    const hashPassword = encodePassword(user.userPassword)
    user.userPassword = hashPassword
    const userCreated = new UserSchema({ ...user })
    return await userCreated.save().then(
        (o) => {
            console.log('Usuário Salvo com Sucesso !')
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}
const getUsers = async (filter: string, skip: number, limit: number) => {
    filter = filter || ''
    return await UserSchema.find({
        $or: [
            { userName: new RegExp('.*' + filter + '.*', 'i') },


        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error Finding Users', e)
            return null
        }
    )
}


const deleteUser = async (id: string) => {
    return await UserSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete User')
        }

    )
}

const updateUser = async (id: string, update: Partial<ICreateUser>) => {
    return await UserSchema.findByIdAndUpdate(id, update)
        .then(
            (o) => {
                return o
            }
        ).catch(
            (e) => {
                console.log('Error on Updated User')
            }

        )
}


export default {
    insertUser,
    deleteUser,
    updateUser,
    getUsers
}