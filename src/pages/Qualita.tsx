import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileCheck, Building2, ClipboardCheck, UserCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const qualityPoints = [
  {
    icon: Shield,
    title: 'Iscrizione Albo Autotrasportatori',
    description: 'Siamo regolarmente iscritti all\'Albo Nazionale degli Autotrasportatori, requisito fondamentale per operare nel settore conto terzi.',
  },
  {
    icon: FileCheck,
    title: 'Procedure Operative Standard',
    description: 'Ogni trasporto segue procedure definite per garantire sicurezza, tracciabilità e corretta gestione documentale.',
  },
  {
    icon: ClipboardCheck,
    title: 'Controlli Pre-Partenza',
    description: 'Verifiche sistematiche su mezzi e carichi prima di ogni viaggio. Ogni trasporto è gestito con la massima attenzione alla sicurezza stradale tramite personale competente che interviene nella messa in sicurezza e nel controllo del fissaggio del carico.',
  },
  {
    icon: UserCheck,
    title: 'Formazione Autisti',
    description: 'Il nostro personale è formato sulle procedure di sicurezza e sulle specifiche del trasporto legname.',
  },
  {
    icon: Building2,
    title: 'Tracciabilità Documenti',
    description: 'Sistema organizzato per la gestione e l\'archiviazione della documentazione di trasporto.',
  },
  {
    icon: AlertTriangle,
    title: 'Gestione Reclami',
    description: 'Procedure chiare per la gestione di eventuali problematiche e comunicazione tempestiva con il cliente.',
  },
];

const Qualita = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-night">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Qualità, Sicurezza & <span className="text-gradient-copper">Conformità</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Operiamo nel rispetto delle normative, con procedure consolidate per garantire trasporti sicuri e tracciabili.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quality Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium group hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Data */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Dati Aziendali e Iscrizioni
                </h2>
                <div className="divider-copper mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Trasparenza e conformità sono alla base del nostro operato. Tutti i dati aziendali sono a disposizione per verifica.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Iscritti all'Albo Autotrasportatori</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Codice ATECO 49.41</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Carburante HVO (dove compatibile)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-background border border-border rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Informazioni Azienda
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-border">
                      <span className="text-sm text-muted-foreground">Ragione Sociale</span>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        SANGIORGI ALESSANDRO TRASPORTI
                      </p>
                    </div>
                    
                    <div className="pb-6 border-b border-border">
                      <span className="text-sm text-muted-foreground">Sede Legale</span>
                      <p className="text-foreground mt-1">
                        Corso Valsesia 166<br />
                        13045 Gattinara (VC), Italia
                      </p>
                    </div>
                    
                    <div className="pb-6 border-b border-border">
                      <span className="text-sm text-muted-foreground">Unità Locale / Deposito</span>
                      <p className="text-foreground mt-1">
                        Via Torino 1<br />
                        13060 Roasio (VC)
                      </p>
                    </div>
                    
                    <div className="pb-6 border-b border-border">
                      <span className="text-sm text-muted-foreground">PEC</span>
                      <p className="text-foreground mt-1 break-all">
                        sangiorgialessandro@cert.cna.it
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground">P.IVA</span>
                      <p className="text-foreground mt-1">
                        02635580026
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hai domande sulla nostra operatività?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Siamo a disposizione per qualsiasi chiarimento sui nostri processi e sulla documentazione.
            </p>
            <Link to="/contatti">
              <Button variant="copper" size="xl" className="gap-2">
                Contattaci
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Qualita;
