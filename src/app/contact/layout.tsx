
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>navbar for contacts</h1>
        {children}
    </>
  );
}
