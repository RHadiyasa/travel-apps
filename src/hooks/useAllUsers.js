import { getAllUsers } from "@/service/user.service";
import { useEffect, useState } from "react";

const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllUsers();
        setAllUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUsers();
  }, []);

  return allUsers;
};

export default useAllUsers;
