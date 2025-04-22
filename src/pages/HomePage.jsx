import React from 'react';

export default function HomePage() {
  return (
    <div className="p-4 pb-16">
      <h2 className="text-xl font-bold">Азим</h2>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="bg-gray-800 p-2 rounded text-xs">Депозит для ИП</div>
        <div className="bg-green-600 p-2 rounded text-xs">15.5% ставка</div>
        <div className="bg-yellow-500 p-2 rounded text-xs">Дарим 500 сом</div>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <div className="bg-gray-800 p-2 rounded">За Апрель<br /><span className="text-green-400">53 220 с</span></div>
        <div className="bg-gray-800 p-2 rounded">Мои Бонусы<br /><span className="text-green-400">20 Б</span></div>
      </div>

      <div className="bg-green-800 mt-4 p-3 rounded">
        <p>Лучшая ставка по депозиту 15.5%</p>
      </div>

      <div className="bg-gray-900 mt-4 p-4 rounded">
        <p>••8156</p>
        <h2 className="text-xl font-bold">301,07 с</h2>
        <div className="flex space-x-2 mt-2">
          <div className="bg-yellow-500 p-1 rounded text-xs">VISA 6977</div>
          <div className="bg-blue-500 p-1 rounded text-xs">VISA 7798</div>
        </div>
      </div>

      <div className="flex overflow-x-auto mt-4 gap-2">
        <div className="bg-green-600 p-2 rounded text-xs">Market</div>
        <div className="bg-blue-400 p-2 rounded text-xs">MTravel</div>
        <div className="bg-purple-500 p-2 rounded text-xs">MInvest</div>
        <div className="bg-red-600 p-2 rounded text-xs">MTicket</div>
        <div className="bg-gray-500 p-2 rounded text-xs">Азия</div>
      </div>
    </div>
  );
}
