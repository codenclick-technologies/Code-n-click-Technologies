
// Fixed Date Holidays (Same every year)
const FIXED_HOLIDAYS = [
    { day: 26, month: 1, name: "Republic Day", message: "Happy Republic Day! 🇮🇳", type: "tricolor", icon: "🇮🇳" },
    { day: 15, month: 8, name: "Independence Day", message: "Happy Independence Day! 🇮🇳", type: "tricolor", icon: "🇮🇳" },
    { day: 2, month: 10, name: "Gandhi Jayanti", message: "Happy Gandhi Jayanti! 🕊️", type: "peace", icon: "🕊️" },
    { day: 25, month: 12, name: "Christmas", message: "Merry Christmas! 🎄", type: "christmas", icon: "🎅" },
    { day: 1, month: 1, name: "New Year", message: "Happy New Year! 🎉", type: "newyear", icon: "✨" },
];

// Variable Date Holidays (Based on Indian Calendar/Moon)
// Format: YYYY-MM-DD
const VARIABLE_HOLIDAYS = [
    // 2025
    { date: "2025-03-14", name: "Holi", message: "Happy Holi! 🎨", type: "holi", icon: "🌈" },
    { date: "2025-08-27", name: "Ganesh Chaturthi", message: "Ganpati Bappa Morya! 🌺 Happy Ganesh Chaturthi! 🐘", type: "ganesh", icon: "🐘" },
    { date: "2025-10-20", name: "Diwali", message: "Happy Diwali! 🪔", type: "diwali", icon: "✨" },

    // 2026
    { date: "2026-03-04", name: "Holi", message: "Happy Holi! 🎨", type: "holi", icon: "🌈" },
    { date: "2026-09-15", name: "Ganesh Chaturthi", message: "Ganpati Bappa Morya! 🌺 Happy Ganesh Chaturthi! 🐘", type: "ganesh", icon: "🐘" },
    { date: "2026-11-08", name: "Diwali", message: "Happy Diwali! 🪔", type: "diwali", icon: "✨" },

    // 2027
    { date: "2027-03-22", name: "Holi", message: "Happy Holi! 🎨", type: "holi", icon: "🌈" },
    { date: "2027-09-04", name: "Ganesh Chaturthi", message: "Ganpati Bappa Morya! 🌺 Happy Ganesh Chaturthi! 🐘", type: "ganesh", icon: "🐘" },
    { date: "2027-10-29", name: "Diwali", message: "Happy Diwali! 🪔", type: "diwali", icon: "✨" }
];

export const checkHoliday = (day, month, year) => {
    // 1. Check Fixed Holidays
    const fixed = FIXED_HOLIDAYS.find(h => h.day === day && h.month === month);
    if (fixed) return fixed;

    // 2. Check Variable Holidays
    // Construct simplified YYYY-MM-DD for comparison (handling single digit months/days)
    const currentStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const variable = VARIABLE_HOLIDAYS.find(h => h.date === currentStr);

    return variable || null; // Return found holiday or null
};

export const getHolidayTheme = (type) => {
    switch (type) {
        case 'ganesh':
            return {
                bg: "bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600",
                text: "text-red-900",
                animation: "flower-rain"
            };
        case 'tricolor':
            return {
                bg: "bg-gradient-to-r from-orange-500 via-white to-green-600",
                text: "text-blue-900",
                animation: "tricolor-shimmer"
            };
        case 'diwali':
            return {
                bg: "bg-gradient-to-r from-yellow-600 via-purple-900 to-yellow-600",
                text: "text-yellow-100",
                animation: "diya-flicker"
            };
        case 'holi':
            return {
                bg: "bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500",
                text: "text-white shadow-md",
                animation: "color-splash"
            };
        case 'christmas':
            return {
                bg: "bg-gradient-to-r from-red-700 via-green-800 to-red-700",
                text: "text-white",
                animation: "snow-fall"
            };
        case 'newyear':
            return {
                bg: "bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900",
                text: "text-yellow-400",
                animation: "fireworks"
            };
        default:
            return {
                bg: "bg-blue-600",
                text: "text-white",
                animation: "none"
            };
    }
};
