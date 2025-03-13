import Link from 'next/link';

export default function UsersPage() {
  return (
    <div className="p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        &larr; Voltar para Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Lista de Usuários</h1>
      
      <div className="bg-yellow-100 p-4 rounded mb-8">
        <p className="text-yellow-800">
          <strong>Nota:</strong> Esta é uma versão estática da página de usuários para demonstração no GitHub Pages.
          Em um ambiente real, os dados seriam carregados dinamicamente do backend.
        </p>
      </div>
      
      <div className="grid gap-4">
        {demoUsers.map((user) => (
          <div key={user.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500 mt-2">
              Criado em: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dados de demonstração para a versão estática
const demoUsers = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    createdAt: '2023-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    email: 'maria.oliveira@exemplo.com',
    createdAt: '2023-02-20T14:45:00Z'
  },
  {
    id: '3',
    name: 'Carlos Santos',
    email: 'carlos.santos@exemplo.com',
    createdAt: '2023-03-10T09:15:00Z'
  }
];
