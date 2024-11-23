import { Container, Title, Text, Paper, SimpleGrid } from '@mantine/core';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="lg">Welcome, {user.email}</Title>
      
      <SimpleGrid cols={3}>
        <Paper shadow="xs" p="md">
          <Title order={3}>Users</Title>
          <Text>Manage system users</Text>
        </Paper>
        
        <Paper shadow="xs" p="md">
          <Title order={3}>Products</Title>
          <Text>Manage your products</Text>
        </Paper>
        
        <Paper shadow="xs" p="md">
          <Title order={3}>Orders</Title>
          <Text>View and manage orders</Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}