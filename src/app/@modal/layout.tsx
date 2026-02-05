export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-10 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}