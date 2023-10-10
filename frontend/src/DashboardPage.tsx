export default function DashboardPage() {
  return (
    <div className="h-screen relative">
      <aside className="bg-quark-purple absolute left-0 top-0 h-full w-2/12">Aside</aside>
      <main className="bg-gray-100 absolute right-0 top-0 bottom-0 left-[16.67%]"> Main</main>
    </div>
  )
}