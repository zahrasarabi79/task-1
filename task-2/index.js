const notesList = [
    {
        id: 1,
        title: "Coding JavaScript",
        createdAt: "2024-03-13T20:43:34.067Z",
        completed: false,
    },
    {
        id: 2,
        title: "Study physics",
        createdAt: "2024-02-13T20:43:34.067Z",
        completed: true,
    },
    {
        id: 3,
        title: "React.js interview",
        createdAt: "2024-01-13T20:43:34.067Z",
        completed: true,
    },
    {
        id: 4,
        title: "Cooking",
        createdAt: "2024-04-13T20:43:34.067Z",
        completed: false,
    },
];

const queryData = ({ sort, filter, status }) => {
    return notesList
        .filter(note => {
            if (status === "completed") return note.completed;
            if (status === "uncompleted") return !note.completed;
            if(status==='all') return true;
        })
        .sort((a, b) => {
            if (sort === "latest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sort === "earliest") {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
            return 0;
        }).filter(note => {
            if (filter) {
                return note.title.toLowerCase().includes(filter.toLowerCase());
            }
            return true;
        });
};

// Example usage:
const result = queryData({
    sort: "latest",
    filter: "Co",
    status: "all",
});

console.log(result);
