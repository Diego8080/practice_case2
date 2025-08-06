
import React from 'react';

export const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Панель администратора</h1>
      <p>Здесь можно редактировать книги, менять цены, статусы и доступность.</p>
      <table className="w-full mt-4 border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Название</th>
            <th className="border p-2">Автор</th>
            <th className="border p-2">Цена</th>
            <th className="border p-2">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1984</td>
            <td className="border p-2">George Orwell</td>
            <td className="border p-2">$10.99</td>
            <td className="border p-2">available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
