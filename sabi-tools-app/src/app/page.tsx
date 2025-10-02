export default function DashboardPage() {
  return (
    <main>
      <section>
        <h1 className="font-display text-3xl font-bold text-sabi-black mb-2">
          Tableau de Bord
        </h1>
        <p className="text-gray-600">
          Bonjour ! Bienvenue sur votre centre de contrôle.
        </p>
      </section>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: SabiPage */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-display font-bold text-lg">SabiPage</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Créez votre page de liens unique.
          </p>
        </div>

        {/* Card 2: SabiLink */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-display font-bold text-lg">SabiLink</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Raccourcissez et suivez vos URLs.
          </p>
        </div>

        {/* Card 3: SabiQR */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-display font-bold text-lg">SabiQR</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Générez des QR Codes dynamiques.
          </p>
        </div>
      </div>
    </main>
  );
}