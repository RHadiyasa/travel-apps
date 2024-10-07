import { getLoggedInUser } from "@/service/user.service";
import { useEffect, useState } from "react";

const useLoggedInUserData = () => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLoggedInUser();

      // Kalau tidak ada response
      if (!response) {
        alert("Please login first");
        return;
      }

      setLoggedInUserData(response.data);
    };

    // Panggil fungsi fetch data
    fetchData();
  }, []);

  //return loggedInUserData
  return loggedInUserData;
};

export default useLoggedInUserData;
