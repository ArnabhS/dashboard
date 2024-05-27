import React, { useState } from 'react';

const SupportTracker = () => {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Fix login issue', status: 'Open', priority: 'High' },
    { id: 2, title: 'Update user profile page', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Resolve payment gateway errors', status: 'Open', priority: 'High' },
    { id: 4, title: 'UI improvement for dashboard', status: 'Closed', priority: 'Low' },
  ]);

  const [filters, setFilters] = useState({
    status: '',
    priority: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredTickets = tickets.filter(ticket => {
    return (
      (!filters.status || ticket.status === filters.status) &&
      (!filters.priority || ticket.priority === filters.priority)
    );
  });

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-200 p-4 rounded-lg shadow-md text-black">
      <h3 className="text-2xl font-bold mb-4">Support Tracker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <label className="block">
          <span className="text-gray-800">Status:</span>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md bg-purple-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-800">Priority:</span>
          <select
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md bg-purple-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
      </div>
      <ul className="divide-y divide-gray-700">
        {filteredTickets.map(ticket => (
          <li key={ticket.id} className="py-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold">{ticket.title}</h4>
                <p className="text-sm">Status: {ticket.status}</p>
                <p className="text-sm">Priority: {ticket.priority}</p>
              </div>
              <div>
                <span className={`px-2 py-1 rounded-md text-xs ${ticket.status === 'Open' ? 'bg-red-500' : ticket.status === 'In Progress' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  {ticket.status}
                </span>
                <span className={`px-2 py-1 rounded-md text-xs ml-2 ${ticket.priority === 'High' ? 'bg-red-600' : ticket.priority === 'Medium' ? 'bg-yellow-600' : 'bg-green-600'}`}>
                  {ticket.priority}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportTracker;
