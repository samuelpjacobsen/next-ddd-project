import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js DDD Project</h1>
      <p className="text-xl mb-6">
        Um exemplo de aplicação Next.js usando Domain-Driven Design
      </p>
      <div className="mt-8">
        <Link 
          href="/users" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Lista de Usuários
        </Link>
      </div>
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sobre este projeto</h2>
        <p className="mb-3">
          Este é um projeto de demonstração que implementa uma arquitetura Domain-Driven Design (DDD) 
          em uma aplicação Next.js, usando:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Domain Layer (Entidades, Value Objects)</li>
          <li className="mb-2">Application Layer (Serviços de Aplicação, DTOs)</li>
          <li className="mb-2">Infrastructure Layer (Repositories, Database)</li>
          <li className="mb-2">Interface Layer (Componentes React, API Routes)</li>
        </ul>
        <p>
          A aplicação está hospedada no GitHub Pages como demonstração.
        </p>
      </div>
    </main>
  );
}
