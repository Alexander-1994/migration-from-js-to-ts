export type ID = number | string

export interface User {
    id: ID,
    name: string,
}

export interface ToDo {
    userId: ID,
    id: ID,
    title: string,
    completed: boolean,
}