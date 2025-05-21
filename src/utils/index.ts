export function formatTo12HourDot(date: Date): string {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12; // Convert 0 (midnight) to 12

    return `${hours}.${minutes.toString().padStart(2, '0')}${period}`;
}
