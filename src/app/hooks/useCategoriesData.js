import { getCategories } from "@/service/activity.service";

const { useState, useEffect } = require("react");

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return categories;
};

export default useCategoriesData;
