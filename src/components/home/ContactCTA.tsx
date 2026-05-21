import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-night p-10 md:p-16"
        >
          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Copy + CTAs */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Hai bisogno di un <span className="text-gradient-copper">trasporto?</span>
              </h2>
              <div className="divider-copper mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Compila il form preventivo con i dati del carico e ti ricontatteremo al più presto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contatti" className="w-full sm:w-auto">
                  <Button variant="copper" size="xl" className="w-full sm:w-auto gap-2">
                    Richiedi preventivo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/393408107572?text=Buongiorno%2C%20vorrei%20un%20preventivo.%0A%0ATipo%20merce%3A%20(tronchi%2Flegname%2Faltro)%0ATratta%20(origine%20%E2%86%92%20destinazione%20%2B%20CAP)%3A%0APeso%2FVolume%20(se%20disponibile)%3A%0AData%20indicativa%3A%0ASvizzera%2Fdogana%3A%20s%C3%AC%2Fno%0ANote%3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="xl"
                    variant="outline"
                    className="w-full sm:w-auto gap-2 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
                  >
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.792 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.748.244-1.118 0-.215-.058-.43-.215-.6-.302-.343-2.092-1.087-2.493-1.087zm-2.42 7.34h-.025c-1.747 0-3.45-.488-4.927-1.405l-.348-.21-3.65.953.973-3.54-.227-.36a9.398 9.398 0 0 1-1.434-4.995c0-5.18 4.214-9.394 9.41-9.394 2.512 0 4.87.98 6.643 2.756a9.345 9.345 0 0 1 2.756 6.643c0 5.18-4.214 9.394-9.395 9.394zm7.71-17.087A10.85 10.85 0 0 0 16.69 4.25C10.673 4.25 5.78 9.144 5.78 15.16a10.81 10.81 0 0 0 1.453 5.444L5.69 26.25l5.788-1.518a10.85 10.85 0 0 0 5.21 1.327h.005c6.016 0 10.91-4.894 10.91-10.91 0-2.913-1.137-5.652-3.193-7.71z" />
                    </svg>
                    Scrivici su WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Direct contacts */}
            <div className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Contatti diretti
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+393408107572"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Telefono</span>
                    <span className="text-foreground font-semibold">+39 340 810 7572</span>
                  </div>
                </a>

                <a
                  href="mailto:sangiorgitrasporti@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Email Commerciale</span>
                    <span className="text-foreground font-semibold text-sm break-all">sangiorgitrasporti@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
