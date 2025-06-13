// In-memory "database" (replace with MongoDB later)
export const db = {
    users: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" }
    ],
    moodEntries: [
        {
            id: 1,
            userId: 1,
            date: "2024-05-20",
            mood: "😊 Happy",
            weather: "Sunny",
            tags: ["Work", "Exercise"],
            note: "Finished the big project at work and had a great workout session!"
        },
        {
            id: 2,
            userId: 1,
            date: "2024-05-19",
            mood: "😫 Stressed",
            weather: "Rainy",
            tags: ["Study", "Coding"],
            note: "Struggled with the new framework. Need to review documentation tomorrow."
        },
        {
            id: 3,
            userId: 2,
            date: "2024-05-18",
            mood: "🧘 Calm",
            weather: "Partly Cloudy",
            tags: ["Meditation", "Reading"],
            note: "Spent the morning reading with coffee. Very peaceful day."
        },
        {
            id: 4,
            userId: 1,
            date: "2024-05-17",
            mood: "🎉 Excited",
            weather: "Sunny",
            tags: ["Social", "Music"],
            note: "Went to a concert with friends! The energy was amazing."
        },
        {
            id: 5,
            userId: 2,
            date: "2024-05-16",
            mood: "🚀 Productive",
            weather: "Cloudy",
            tags: ["Work", "Coding", "Learning"],
            note: "Built a new feature in record time. Feeling accomplished!"
        },
        {
            id: 6,
            userId: 1,
            date: "2024-05-15",
            mood: "😴 Tired",
            weather: "Foggy",
            tags: ["Netflix", "Relaxation"],
            note: "Binged the new show all evening. Need to sleep early tonight."
        },
        {
            id: 7,
            userId: 2,
            date: "2024-05-14",
            mood: "🎨 Creative",
            weather: "Sunny",
            tags: ["Art", "Photography"],
            note: "Took some great nature photos and painted for hours."
        },
        {
            id: 8,
            userId: 1,
            date: "2024-05-13",
            mood: "😐 Neutral",
            weather: "Windy",
            tags: ["Cooking", "DIY"],
            note: "Tried a new recipe - turned out okay. Fixed the squeaky cabinet too."
        },
        {
            id: 9,
            userId: 2,
            date: "2024-05-12",
            mood: "😢 Sad",
            weather: "Stormy",
            tags: ["Writing", "Music"],
            note: "Wrote some poetry to process my feelings. The rain matched my mood."
        },
        {
            id: 10,
            userId: 1,
            date: "2024-05-11",
            mood: "😊 Happy",
            weather: "Sunny",
            tags: ["Outdoors", "Gardening"],
            note: "Planted new flowers in the garden. The sunshine felt wonderful."
        }
    ],
    tags: [
        { id: 1, name: "Work", emoji: "💼" },
        { id: 2, name: "Study", emoji: "📚" },
        { id: 3, name: "Exercise", emoji: "🏋️" },
        { id: 4, name: "Art", emoji: "🎨" },
        { id: 5, name: "Music", emoji: "🎵" },
        { id: 6, name: "Reading", emoji: "📖" },
        { id: 7, name: "Writing", emoji: "✍️" },
        { id: 8, name: "Coding", emoji: "💻" },
        { id: 9, name: "Cooking", emoji: "🍳" },
        { id: 10, name: "Social", emoji: "👥" },
        { id: 11, name: "Relaxation", emoji: "🛀" },
        { id: 12, name: "Travel", emoji: "✈️" },
        { id: 13, name: "Gaming", emoji: "🎮" },
        { id: 14, name: "Meditation", emoji: "🧘" },
        { id: 15, name: "Shopping", emoji: "🛍️" },
        { id: 16, name: "Gardening", emoji: "🌱" },
        { id: 17, name: "Photography", emoji: "📸" },
        { id: 18, name: "DIY", emoji: "🛠️" },
        { id: 19, name: "Learning", emoji: "🧠" },
        { id: 20, name: "Netflix", emoji: "🍿" },
        { id: 21, name: "Outdoors", emoji: "🌲" }
    ]
};
