import * as httpRequest from '../utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(
            `menu`,
            // {
            //     params: {
            //         q,
            //         type,
            //     },
            // }
        );
        return res;
    } catch (error) {
        console.log(error);
        return [];
    }
};
