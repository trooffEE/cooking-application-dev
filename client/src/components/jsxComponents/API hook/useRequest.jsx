import { useContext, useEffect, useState } from "react";
import API from "../../../api/api";
import testAPI from "../../../api/testApi";
import { ApiContext } from "../../../App";

const useRequest = (dataPath, callback) => {
  const [data, setData] = useState(null);

  const isDevMode = useContext(ApiContext);

  const api = isDevMode ? new testAPI() : new API;

  useEffect(() => {
    let mounted = false;
    api.getData(dataPath).then((res) => !mounted && setData(callback(res)));
    return () => (mounted = true);
  }, [dataPath]);

  return data;
};

export default useRequest;
