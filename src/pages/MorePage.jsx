import React from 'react';

export default function MorePage() {
  return (
    <div className="p-4 pb-16">
      <h1 className="text-xl font-bold mb-4">Ещё</h1>

      <div className="bg-gray-900 p-3 rounded flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">👤</div>
        <div>
          <p className="text-sm font-semibold">Орозбеков Жаныбек</p>
        </div>
      </div>

      <div className="bg-gray-800 p-3 rounded text-sm mb-4">
        <p>USD <span className="text-white">87.2</span> &nbsp;
           EUR <span className="text-white">100.7</span> &nbsp;
           RUB <span className="text-white">1.0975</span> &nbsp;
           CNY <span className="text-white">12.5</span></p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">📞 Служба поддержки ➤</div>

        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">
          🆔 <span>MBANK ID <span className="text-red-400 ml-1 text-xs">NEW</span></span> ➤
        </div>

        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">
          💳 <span>Лимиты MBANK <span className="text-red-400 ml-1 text-xs">NEW</span></span> ➤
        </div>

        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">
          📬 <span>Управление подписками <span className="text-red-400 ml-1 text-xs">NEW</span></span> ➤
        </div>

        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">🏦 Отделения ➤</div>
        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">🏧 Банкоматы ➤</div>
        <div className="bg-gray-900 p-3 rounded flex justify-between items-center">⚙️ Настройки ➤</div>
      </div>
    </div>
  );
}
