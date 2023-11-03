const easyAtsBffClient = async (userData) => {
    const users = await $fetch('http://localhost:3000/generatePDF',
        {
            method: 'POST',
            body: userData
        }
    );
    return users;
}

export default easyAtsBffClient;


