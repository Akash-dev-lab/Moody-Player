const modules = [
    { id: 1, name: 'Programming', unit: 'Unit 01', status: 'Completed' },
    { id: 2, name: 'Networking', unit: 'Unit 01', status: 'Ongoing' },
    { id: 3, name: 'Database', unit: 'Unit 01', status: 'Pending' },
    { id: 4, name: 'Professional Practice', unit: 'Unit 01', status: 'Pending' },
];

const ModuleList = () => {
    return (
        <div className="max-w-4xl mx-auto mt-14">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Module
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Unit
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module) => (
                            <tr key={module.id}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked readOnly />
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {module.name}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {module.unit}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {module.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Previous</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Next</button>
            </div>
        </div>
    );
};

export default ModuleList;
