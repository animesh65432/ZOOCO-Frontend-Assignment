export type ReminderTypes = {
    _id: string,
    pet: string,
    category: string,
    title: string
    notes: string,
    startDateTime: Date,
    endDateTime: Date,
    frequency: string,
    ReminderTime: string,
    status: "pending" | "completed"
}