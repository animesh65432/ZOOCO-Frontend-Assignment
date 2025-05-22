import { Call } from "../service/call"
import type { ReminderTypes } from "../types"

export const create = (pet: string, category: string, title: string,
    startDateTime: Date, endDateTime: Date, frequency: string, ReminderTime: Date, notes?: string,

) => Call({
    path: "/reminders/create",
    method: "POST",
    request: {
        pet,
        category,
        title,
        startDateTime,
        endDateTime,
        frequency,
        ReminderTime,
        notes
    }
})

export const Get = () => Call<undefined, ReminderTypes[]>({
    path: "/reminders/getAll",
    method: "GET"
})

export const GetbyId = (id: string) => Call({
    path: `/reminers/get/${id}`,
    method: "GET"
})

export const update = (id: string, title: string,
    pet: string,
    frequency: string,
    ReminderTime: string,) =>
    Call({
        path: `/reminders/update/${id}`,
        method: "PUT",
        request: {
            pet,
            title,
            frequency,
            ReminderTime,
        },
    });

export const deletebyId = (id: string) => Call({
    path: `/reminders/delete/${id}`,
    method: "DELETE"
})

export const makeitCompleted = (id: string) => Call({
    path: `/reminders/complete/${id}`,
    method: "PUT"
})