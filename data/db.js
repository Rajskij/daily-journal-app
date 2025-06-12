// In-memory "database" (replace with MongoDB later)
export const db = {
    users: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" }
    ],
    moodEntries: [
        { id: 1, userId: 1, mood: "Happy", date: "2024-05-20", tags: ["Work", "Exercise"] }
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
