const getTemplateClient = async () => {
    const response = await $fetch('http://localhost:3000/getTemplate',
    );
    return response;
}

export default getTemplateClient;


