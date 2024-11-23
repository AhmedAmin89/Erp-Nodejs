import { Navbar as MantineNavbar, UnstyledButton, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <MantineNavbar p="md">
      <MantineNavbar.Section>
        <Text size="lg" fw={500}>ERP Solution</Text>
        <Text size="sm" c="dimmed">{user.email}</Text>
      </MantineNavbar.Section>

      <MantineNavbar.Section grow mt="md">
        <UnstyledButton 
          w="100%" 
          px="md" 
          py="xs"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </UnstyledButton>
        {user.role === 'admin' && (
          <UnstyledButton 
            w="100%" 
            px="md" 
            py="xs"
          >
            User Management
          </UnstyledButton>
        )}
      </MantineNavbar.Section>

      <MantineNavbar.Section>
        <UnstyledButton 
          w="100%" 
          px="md" 
          py="xs"
          onClick={handleLogout}
        >
          Logout
        </UnstyledButton>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}