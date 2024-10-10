const { getAllActivities } = require("@/service/activity.service");
const { useState, useEffect } = require("react");

const useActivities = () => {
  const [activities, setActivities] = useState([]);

  // ambil data dari service API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getAllActivities();
        setActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivities();
  }, []); // cuma di render sekali ketika component di mount
  return activities;
};

export default useActivities;
