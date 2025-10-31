export default function ImpactMeter({ impact }) {
  return (
    <div className="space-y-2">
      {Object.entries(impact).map(([key, value]) => (
        <div key={key}>
          <div className="flex justify-between text-sm capitalize">
            <span>{key}</span>
            <span>{value}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
