const recentSales = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Indra Maulana",
  email: `indramaulana${i}@gmail.com`,
  amount: 1500,
}));

const RecentSales = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="font-semibold mb-3">
        <h2 className="text-lg">Recent Sales</h2>
        <p className="text-sm text-gray-500 font-normal">You made 350 sales this mount</p>
      </div>

      <div className="space-y-6">
        {recentSales.map((s) => (
          <div key={s.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-gray-400">{s.email}</div>
              </div>
            </div>
            <div className="font-semibold">+${s.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;
