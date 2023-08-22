import bcrypt from 'bcrypt'

const encodePassword = (password: string) => {
    const salt = process.env.SALT ?? ""
    const hashpassword = bcrypt.hashSync(password, salt)
    return hashpassword
}

export default encodePassword