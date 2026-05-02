import arquitecturaImg from "./assets/diagrama.jpeg";
export default function Landing() {
  const goToApp = () => {
    window.location.href = "https://TU-URL-AQUI";
  };


  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wide">
         Hospital System
        </h1>

        <button
          onClick={goToApp}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition shadow-md"
        >
          Acceder
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center mt-24 px-6 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Sistema Hospitalario Distribuido
        </h1>

        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
          Plataforma en AWS con arquitectura de microservicios, API Gateway y autenticación JWT.
        </p>

        <button
          onClick={goToApp}
          className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg transition shadow-lg hover:shadow-blue-500/20"
        >
          Acceder al sistema
        </button>

        {/* Glow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-40 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
      </section>

      {/* FEATURES */}
      <section className="mt-28 px-6 md:px-12">
  
  <h2 className="text-3xl font-bold text-center mb-12">
    Módulos del Sistema
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Citas",
        tech: "FastAPI + MySQL",
        desc: "Gestión de citas médicas con disponibilidad en tiempo real y persistencia de datos.",
      },
      {
        title: "Expedientes",
        tech: "PostgreSQL",
        desc: "Administración del historial clínico de pacientes con almacenamiento relacional.",
      },
      {
        title: "Quirófanos",
        tech: "Go + MariaDB",
        desc: "Orquestación y control de cirugías en tiempo real con alta concurrencia.",
      },
      {
        title: "Personal",
        tech: "Redis",
        desc: "Gestión dinámica de médicos y personal hospitalario con acceso rápido.",
      },
      {
        title: "Motor SQL",
        tech: "Compilador en Go",
        desc: "Procesamiento de consultas mediante un motor SQL personalizado.",
      },
      {
        title: "API Gateway",
        tech: "JWT + Seguridad",
        desc: "Encaminamiento de solicitudes y autenticación segura mediante tokens JWT.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-blue-500 hover:scale-[1.03] transition duration-300"
      >
        <h3 className="text-xl font-semibold">{item.title}</h3>

        <p className="text-blue-400 text-sm mt-1">
          {item.tech}
        </p>

        <p className="text-slate-400 text-sm mt-3">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

</section>

      {/* ARQUITECTURA TEXTO */}
      <section className="mt-28 text-center px-6">
        <h2 className="text-3xl font-bold">
          Arquitectura en AWS
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Flujo completo desde el usuario hasta los microservicios mediante CloudFront,
          frontend en React, API Gateway y servicios distribuidos altamente escalables.
        </p>

        <div className="mt-10 flex justify-center">
            <img
            src={arquitecturaImg}
            alt="Arquitectura del sistema"
            className="rounded-xl border border-slate-800 shadow-lg max-w-5xl w-full"
            />
        </div>
      </section>



      {/* FOOTER */}
      <footer className="mt-28 py-10 text-center border-t border-slate-800 text-slate-500 text-sm">
        © 2026 Sistema Hospitalario Distribuido  
      </footer>
    </div>
  );
}