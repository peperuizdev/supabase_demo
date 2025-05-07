import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setMessages(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    const { error } = await supabase.from('messages').insert([{ content }]);
    if (!error) {
      setContent('');
      fetchMessages();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4 text-center">📬 Supabase Demo</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            className="border border-gray-300 rounded p-2 w-full mb-2 focus:outline-none focus:ring focus:border-blue-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe un mensaje"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 w-full rounded" type="submit">
            Enviar
          </button>
        </form>
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {messages.map(msg => (
            <li key={msg.id} className="bg-blue-50 border border-blue-200 rounded p-2 shadow-sm">
              <p className="text-gray-800">{msg.content}</p>
              <span className="text-xs text-gray-500 block mt-1">{new Date(msg.created_at).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
