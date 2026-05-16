type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition"
    >
      {children}
    </button>
  );
}
