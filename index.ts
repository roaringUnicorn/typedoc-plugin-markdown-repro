export type User = {
    id: string,
    data: string
}

export const getTypedUser = (): Promise<User> => {
    return new Promise(resolve => {
        resolve({id: 'id', data: 'data'})
    })
}

export const getUser = (): Promise<{id: string, data: string}> => {
    return new Promise(resolve => {
        resolve({id: 'id', data: 'data'})
    })
}
