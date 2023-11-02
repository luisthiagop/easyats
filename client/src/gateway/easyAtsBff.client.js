const easyAtsBffClient = async () => {
    const users = await $fetch('http://localhost:3000/generatePDF',
        {
            method: 'POST',
            body: { title: 'Luis Thiago Padilha', content: 'testando pdf'}
        }
    );
    return users;
}

export default easyAtsBffClient;


