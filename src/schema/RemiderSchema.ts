import { z } from 'zod'

export const reminderSchema = z.object({
    pet: z.string().min(1, "Pet is required"),
    category: z.string().min(1, "Category is required"),
    title: z.string().min(1, "Reminder title is required"),
    note: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().nullable().optional(),
    time: z.date(),
    frequency: z.string().min(1, "Frequency is required"),
})

export type ReminderFormData = z.infer<typeof reminderSchema>
