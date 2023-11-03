import easyAtsBffClient from '../gateway/easyAtsBff.client';

const getFile = (userData) => {
    return easyAtsBffClient(userData);
}

export default getFile;