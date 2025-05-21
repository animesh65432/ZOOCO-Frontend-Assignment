import { Call } from "../service/call"

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

export const Get = () => Call({
    path: "/reminders/getAll",
    method: "GET"
})

export const GetbyId = (id: string) => Call({
    path: `/reminers/get/${id}`,
    method: "GET"
})

export const update = (id: string, pet: string, category: string, title: string,
    startDateTime: Date, endDateTime: Date, frequency: string, ReminderTime: Date, notes?: string,
) =>
    Call({
        path: `/reminders/update/${id}`,
        method: "PUT",
        request: {
            pet,
            category,
            title,
            startDateTime,
            endDateTime,
            frequency,
            ReminderTime,
            notes
        },
    });

export const deletebyId = (id: string) => Call({
    path: `/reminders/delete/${id}`,
    method: "DELETE"
})

