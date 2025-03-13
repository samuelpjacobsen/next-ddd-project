import UserList from '@/interfaces/components/UserList';

export default function UsersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Users Page</h1>
      <UserList />
    </div>
  );
}
