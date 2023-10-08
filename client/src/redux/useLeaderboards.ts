import { useState, useEffect } from "react";
import axios from "axios";

export const useUserData = () => {
  const userData: Record<string, any> | null = JSON.parse(
    localStorage.getItem("userData") || "null"
  );

  return userData;
};

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const userData = useUserData()
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/all");
        const updatedUsers = response.data.map((user: any) => ({
          ...user,
          isCurrentUser: user._id === userData?._id,
        }));
        setUsers(updatedUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return users;
};

export const useLeaderboardUsers = () => {
  const users = useUsers();
  return users.sort((a, b) => b.xp - a.xp);
};

export const useLeaderboardRank = () => {
  const leaderboardUsers = useLeaderboardUsers();
  const index = leaderboardUsers.findIndex((user) => user.isCurrentUser);
  return index === -1 ? null : index + 1;
};
