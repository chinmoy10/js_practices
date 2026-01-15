const peopleData = [
    {
        id: 1,
        name: "Chinmoy Podder",
        age: 26,
        occupation: "Web Developer",
        contact: {
            phone_num: "+8801712345678",
            email: "chinmoy@example.com",
        },
        address: {
            street: "12/A Green Road",
            city: "Dhaka",
            state: "Dhaka",
            zip: "1205",
        },
        social: {
            twitter: "@chinmoy_dev",
        },
        hobbies: ["coding", "hiking", "photography"],
    },

    {
        id: 2,
        name: "Rahim Ahmed",
        age: 29,
        occupation: "Software Engineer",
        contact: {
            phone_num: "+8801812345678",
            email: "rahim@example.com",
        },
        address: {
            street: "45 Lake View",
            city: "Chittagong",
            state: "Chittagong",
            zip: "4000",
        },
        social: {
            twitter: "@rahim_codes",
        },
    },

    {
        id: 3,
        name: "Nusrat Jahan",
        age: 24,
        occupation: "UI/UX Designer",
        contact: {
            phone_num: "+8801912345678",
            email: "nusrat@example.com",
        },
        social: {
            twitter: "@nusrat_designs",
        },
        hobbies: ["coding", "hiking", "photography"],
    },

    {
        id: 4,
        name: "Tanvir Hasan",
        age: 31,
        occupation: "Product Manager",
        contact: {
            phone_num: "+8801612345678",
            email: "tanvir@example.com",
        },
        address: {
            street: "22 Station Road",
            city: "Rajshahi",
            state: "Rajshahi",
            zip: "6000",
        },
        hobbies: ["coding", "hiking", "photography"],
    }
];


peopleData.map((person) => {
    const sentence = `Person's name is ${person.name}. City ${person?.address?.city || "N/A"}. And his twitter address is ${person?.social?.twitter || "fukuchi"}.`
    console.log(sentence);
})