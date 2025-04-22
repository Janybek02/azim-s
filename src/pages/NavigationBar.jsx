import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-black border-t border-gray-800 flex justify-around py-2 text-sm">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Главная</NavLink>
      <NavLink to="/payments" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Платежи</NavLink>
      <div className="text-yellow-400">▣</div>
      <NavLink to="/more" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Сервисы</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Ещё</NavLink>
    </nav>
  );
}
