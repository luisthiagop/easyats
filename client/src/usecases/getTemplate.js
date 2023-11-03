import getTemplateClient from '../gateway/template.client';

const getTemplate = async () => {
    const response = await getTemplateClient();

    return response.template;
}

export default getTemplate;