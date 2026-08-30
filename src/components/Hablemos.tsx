import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";
import { MailIcon } from "./Icons";
import { Send, CheckCircle2, X } from "lucide-react";

export function Hablemos() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    interes: "Alianzas",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowContactForm(false);
      setFormData({ nombre: "", email: "", mensaje: "", interes: "Alianzas" });
    }, 2500);
  };

  return (
    <>
      <section
        id="hablemos"
        className="bg-grain relative overflow-hidden bg-ink pt-[clamp(30px,3vw,60px)] pb-[clamp(60px,7vw,130px)] text-center"
      >
        {/* Exact background solar panels image with matching multi-layer ink overlays and ambient gradient as in previous sections */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img
            src="/fondo-banner-01.webp"
            alt=""
            className="h-full w-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.05]"
          />
          {/* Exact ambient radial glow and multi-layered ink overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(27,49,137,0.4),rgba(0,18,46,0.95))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] px-[3.2vw]">
          <FadeIn
            as="h2"
            className="mb-[clamp(16px,1.6vw,28px)] text-[clamp(32px,4.4vw,72px)] font-black leading-[1.05] tracking-[0.5px] text-brand-blue uppercase"
          >
            Sé parte del cambio
          </FadeIn>

          <FadeIn
            as="p"
            delay={110}
            className="mx-auto mb-[clamp(28px,3vw,52px)] max-w-[660px] text-[clamp(14px,1.1vw,19px)] font-light leading-[1.75] text-soft-dim text-pretty"
          >
            Únete a nuestra red de pensamiento y acción. Juntos construimos alternativas para una
            vida digna y justa.
          </FadeIn>

          <FadeIn delay={220}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contacto@centrodepensamientovida.org"
                className="inline-flex items-center gap-4 rounded-full bg-ink-soft px-[clamp(30px,3vw,54px)] py-[clamp(13px,1.3vw,22px)] text-[clamp(14px,1.25vw,22px)] font-semibold tracking-[1.2px] text-white uppercase transition-opacity duration-200 hover:opacity-85 shadow-lg border border-white/10"
              >
                <MailIcon className="h-auto w-[1.5em] text-brand-yellow" />
                Hablemos
              </a>

              <button
                type="button"
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-transparent px-[clamp(24px,2.5vw,40px)] py-[clamp(13px,1.3vw,22px)] text-[clamp(13px,1.1vw,18px)] font-semibold tracking-[1.2px] text-brand-yellow uppercase transition duration-200 hover:bg-brand-yellow hover:text-ink cursor-pointer"
              >
                Escríbenos directamente
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Contact / Message Modal */}
      {showContactForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-brand-yellow/30 bg-ink p-6 md:p-8 shadow-2xl text-left text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 rounded-full p-2 text-stone-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-bold uppercase tracking-wide text-brand-yellow mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-sm text-soft-dim">
                  Gracias por sumarte. Nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase text-brand-yellow tracking-wide mb-1">
                    Únete a la conversación
                  </h3>
                  <p className="text-sm font-light text-soft-dim">
                    Déjanos tu mensaje para colaboraciones, formación o incidencia política.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                      Nombre completo
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                      Correo electrónico
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                      Área de interés
                    </label>
                    <select
                      value={formData.interes}
                      onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                      className="w-full rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-white focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    >
                      <option value="Investigación">Investigación económica</option>
                      <option value="Formación">Talleres y Formación</option>
                      <option value="Incidencia">Incidencia y Políticas</option>
                      <option value="Alianzas">Alianzas y Voluntariado</option>
                      <option value="Donaciones">Donaciones</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntanos en qué te gustaría colaborar..."
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-yellow py-3 text-sm font-extrabold uppercase tracking-wider text-ink transition hover:opacity-90 cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensaje
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
