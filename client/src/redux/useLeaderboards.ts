import { useState } from "react";
import axios from "axios";

const userData: Record<string, any> | null = JSON.parse(
  localStorage.getItem("userData") || "null"
);
const [users, setUsers] = useState<any[]>([]);

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users/all");
    setUsers(response.data);

    const updatedUsers = users.map((user) => ({
      ...user,
      isCurrentUser: user._id === userData?._id,
    }));

    setUsers(updatedUsers);
  } catch (error) {
    console.error(error);
  }
};

export const useLeaderboardUsers = () => {
  return users.sort((a, b) => b.xp - a.xp);
};

export const useLeaderboardRank = () => {
  const leaderboardUsers = useLeaderboardUsers();
  const index = leaderboardUsers.findIndex((user) => user.isCurrentUser);
  return index === -1 ? null : index + 1;
};
