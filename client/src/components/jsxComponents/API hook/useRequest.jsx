import { useEffect, useState } from 'react';
import API from '../../../api/api';

const useRequest = (dataPath, method = "GET") => {
    const [data, setData] = useState(null);
    const api = new API();

    useEffect(() => {
        api.getData(dataPath)
            .then(res => console.log(res))
            // .then((res) => setData(res))
            .catch(err => console.log(err.message));
    }, [dataPath]);

    return data;
}


export default useRequest;