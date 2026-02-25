import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface UserContextType {
  user: UserProfile;
  updateUser: (user: UserProfile) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>(() => {
    const stored = localStorage.getItem('user_profile');
    return stored
      ? JSON.parse(stored)
      : {
          name: 'John Doe',
          email: 'john@clinic.com',
          role: 'Administrator',
          avatar: 'JD',
        };
  });

  useEffect(() => {
    localStorage.setItem('user_profile', JSON.stringify(user));
  }, [user]);

  const updateUser = (newUser: UserProfile) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
