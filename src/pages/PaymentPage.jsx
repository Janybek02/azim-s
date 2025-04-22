// ... остальной код остаётся без изменений

// src/pages/PaymentsPage.jsx
import React from 'react';

export default function PaymentsPage() {
  return (
    <div className="p-4 pb-16">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Платежи</h1>
        <span className="text-green-400 text-sm">История</span>
      </div>

      <input className="w-full p-2 mb-4 rounded bg-gray-800 placeholder-gray-400" placeholder="🔍 Поиск" />

      <h2 className="text-md font-semibold mb-2">Переводы по телефону</h2>
      <div className="flex overflow-x-auto gap-3 mb-4 text-sm">
        <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center">📞</div>
        <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">👤 Айдар</div>
        <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">👤 Нурислам</div>
        <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">👤 Чубак</div>
        <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">👤 Эмиль</div>
      </div>

      <h2 className="text-md font-semibold mb-2">Переводы</h2>
      <div className="grid grid-cols-3 gap-2 text-xs mb-4">
        <div className="bg-gray-900 p-3 rounded">🔁 В другой банк</div>
        <div className="bg-gray-900 p-3 rounded">💳 Перевод через Visa</div>
        <div className="bg-gray-900 p-3 rounded">📱 По номеру телефона</div>
      </div>

      <h2 className="text-md font-semibold mb-2">Платежи</h2>
      <div className="grid grid-cols-3 gap-2 text-xs mb-4">
        <div className="bg-gray-900 p-3 rounded">📶 Мобильная связь</div>
        <div className="bg-gray-900 p-3 rounded">💡 Коммунальные услуги</div>
        <div className="bg-gray-900 p-3 rounded">🌐 Интернет + ТВ</div>
      </div>

      <h2 className="text-md font-semibold mb-2">Пополнить счёт</h2>
      <div className="bg-gray-800 p-3 rounded text-sm">📷 По единому QR</div>
    </div>
  );
}
