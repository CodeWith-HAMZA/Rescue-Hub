 
interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  isAdmin: boolean;
  isOnboarded: boolean;
  fullName?: string;
  address?: string;
  phoneNumber?: string;
  profilePicture?: string;
  bio?: string;
}

export default User