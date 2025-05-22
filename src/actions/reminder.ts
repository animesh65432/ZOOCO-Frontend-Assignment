import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Get, GetbyId, create, update, deletebyId, makeitCompleted } from "../api/reminder"
import type { ReminderTypes } from "../types"

export const useGetReminders = () =>
    useQuery<ReminderTypes[]>({
        queryKey: ['reminders'],
        queryFn: Get
    });

export const useGetReminderById = (id: string) =>
    useQuery({
        queryKey: ['reminder', id],
        queryFn: () => GetbyId(id),
        enabled: !!id
    });

export const useCreateReminder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: {
            pet: string;
            category: string;
            title: string;
            startDateTime: Date;
            endDateTime: Date;
            frequency: string;
            ReminderTime: Date;
            notes?: string;
        }) => create(
            data.pet,
            data.category,
            data.title,
            data.startDateTime,
            data.endDateTime,
            data.frequency,
            data.ReminderTime,
            data.notes
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reminders'] });
        }
    });
};

export const useUpdateReminder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (params: {
            id: string;
            data: {
                pet: string;
                category: string;
                title: string;
                startDateTime: Date;
                endDateTime: Date;
                frequency: string;
                ReminderTime: Date;
                notes?: string;
            };
        }) => {
            const { id, data } = params;
            return update(
                id,
                data.pet,
                data.category,
                data.title,
                data.startDateTime,
                data.endDateTime,
                data.frequency,
                data.ReminderTime,
                data.notes
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reminders'] });
        },
    });
};

export const useDeleteReminder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deletebyId(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reminders'] });
        }
    });
};

export const useMakeItCompleted = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => makeitCompleted(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reminders'] });
        }
    });
};
