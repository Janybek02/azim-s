import React from 'react';

export default function ServicesPage() {
  return (
    <div className="p-4 pb-16">
      <h1 className="text-xl font-bold mb-4">Сервисы</h1>

      <input className="w-full p-2 mb-4 rounded bg-gray-800 placeholder-gray-400" placeholder="🔍 Поиск" />

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Популярные</h2>
        <span className="text-green-400 text-sm">Все сервисы</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm mb-4">
        <div className="bg-orange-600 p-3 rounded">Мой авто</div>
        <div className="bg-purple-600 p-3 rounded">Госуслуги</div>
        <div className="bg-teal-600 p-3 rounded">Налоги и штрафы</div>
        <div className="bg-green-600 p-3 rounded">Мойдом</div>
        <div className="bg-blue-600 p-3 rounded">Азия</div>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-6">
        <div className="bg-green-700 px-3 py-1 rounded-full text-xs">✈️ MTravel</div>
        <div className="bg-purple-700 px-3 py-1 rounded-full text-xs">📈 MInvest</div>
        <div className="bg-gray-700 px-3 py-1 rounded-full text-xs">🛒 Market</div>
        <div className="bg-gray-800 px-3 py-1 rounded-full text-xs">🎫 MTicket</div>
      </div>

      <h2 className="text-lg font-semibold mb-2">Лучшее предложение</h2>
      <div className="bg-gray-900 p-4 rounded text-sm mb-6">
        <div className="flex justify-between text-white mb-1">
          <div>
            <span className="font-bold">FRU</span><br />
            <span className="text-xs text-gray-400">Бишкек</span>
          </div>
          <div className="text-center">✈️</div>
          <div>
            <span className="font-bold">OSS</span><br />
            <span className="text-xs text-gray-400">Ош</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="bg-orange-500 text-black font-semibold px-2 py-1 rounded">1 334 с</div>
          <div className="text-xs text-gray-400">x 3 мес — Тез Джет</div>
        </div>
      </div>
    </div>
  );
}
