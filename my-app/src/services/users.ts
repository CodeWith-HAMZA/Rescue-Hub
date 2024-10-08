import User from "@/interfaces/user";
import axiosInstance from "./index";
interface AuthResponse {
  token: string;
  user: User;
}

// Register user
export const registerUser = async (
  userData: Omit<User, "id" | "isAdmin" | "isOnboarded">
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    "/user/register",
    userData
  );
  localStorage.setItem("token", response.data.token);

  return response.data;
};
export const onBoard = async (
  userData: Omit<User, "id" | "isAdmin" | "isOnboarded">
): Promise<AuthResponse> => {
  const response = await axiosInstance.put<AuthResponse>(
    "/user/onboard",
    userData,
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
};

// Login user
export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/login",
    credentials
  );
  return response.data;
};

// Get user profile
export const getUserProfile = async (): Promise<User> => {
  const response = await axiosInstance.get<User>("/user/profile", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return response.data;
};

// Update user profile (Onboarding)
export const updateUserProfile = async (
  userData: Partial<Omit<User, "id" | "isAdmin" | "isOnboarded">>
): Promise<User> => {
  const response = await axiosInstance.put<User>("/user/profile", userData);
  return response.data;
};
// services/users.ts

export const getAllUsersWithApplications = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>("/user/all", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return response.data;
};

// Example usage
// const newUser = await registerUser({
//   username: 'newuser',
//   email: 'newuser@example.com',
//   password: 'password123',
//   fullName: 'New User',
//   address: '123 Main St',
//   phoneNumber: '123-456-7890',
//   profilePicture: 'https://example.com/profile.jpg',
//   bio: 'Hello, I am a new user!',
// });

export const updateUserOnboardStatus = async (
  userId: string
): Promise<User> => {
  const response = await axiosInstance.put(`/user/onboard-status/${userId}`);
  return response.data;
};

