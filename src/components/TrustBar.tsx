const items = [
  { label: "Secure checkout", detail: "Encrypted payment" },
  { label: "Small-batch runs", detail: "Printed to order" },
  { label: "Signed by malicknoir", detail: "Every edition" },
  { label: "Ships worldwide", detail: "Tracked delivery" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-parchment">
      <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="text-sm font-semibold">{item.label}</p>
            <p className="text-xs text-stone">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
