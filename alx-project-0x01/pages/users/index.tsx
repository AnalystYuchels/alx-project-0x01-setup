import Header from "@/components/layout/Header";

const Users = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">Users Page</h1>
      </main>
    </div>
  );
};

export default Users;
