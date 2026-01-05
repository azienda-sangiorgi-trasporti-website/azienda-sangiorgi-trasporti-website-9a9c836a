import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import fleetImage from '@/assets/fleet-lineup.jpg';

const values = [
  {
    icon: Target,
    title: 'Affidabilità',
    description: 'Manteniamo le promesse. Ogni consegna viene programmata con cura e rispettiamo gli impegni presi.',
  },
  {
    icon: Shield,
    title: 'Sicurezza',
    description: 'La sicurezza del carico e degli operatori è la nostra priorità in ogni fase del trasporto.',
  },
  {
    icon: Clock,
    title: 'Puntualità',
    description: 'Rispettiamo i tempi concordati. La vostra programmazione è anche la nostra.',
  },
  {
    icon: Users,
    title: 'Relazione',
    description: 'Costruiamo rapporti duraturi con i nostri clienti basati su fiducia e professionalità.',
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-night">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Chi <span className="text-gradient-copper">Siamo</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Sangiorgi Alessandro Trasporti è un'azienda familiare con sede nel cuore del Piemonte, specializzata nel trasporto legname e merci su strada conto terzi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Operativi dal 2017, abbiamo costruito la nostra reputazione sulla base di valori semplici ma fondamentali: affidabilità, puntualità e rispetto degli impegni. La nostra conoscenza del territorio e l'esperienza maturata nel settore forestale ci permettono di offrire un servizio di qualità ai nostri clienti.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={fleetImage}
                  alt="La flotta Sangiorgi Trasporti"
                  className="rounded-2xl shadow-card w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-copper rounded-xl p-6 shadow-copper">
                  <div className="text-3xl font-bold text-primary-foreground">
                    Dal 2017
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Al vostro servizio
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  La Nostra Storia
                </h2>
                <div className="divider-copper mx-auto mb-8" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  L'azienda nasce dalla passione per il settore dei trasporti e dalla volontà di creare un'impresa che mettesse al centro la qualità del servizio. Con sede a Gattinara e deposito operativo a Roasio, nel cuore delle colline vercellesi, ci troviamo in una posizione strategica per servire le aziende del Nord Italia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La specializzazione nel trasporto legname è nata dalla collaborazione con le segherie e le imprese forestali del territorio, che ci hanno permesso di sviluppare competenze specifiche nel settore. Oggi offriamo i nostri servizi anche per il trasporto di merci generiche, mantenendo sempre gli stessi standard di qualità.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                I Nostri Valori
              </h2>
              <div className="divider-copper mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Territory */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Il Nostro Territorio
                </h2>
                <div className="divider-copper mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Operiamo principalmente nel Nord Italia, con particolare focus sulle regioni Piemonte, Lombardia, Veneto e Trentino-Alto Adige. La nostra conoscenza del territorio montano ci permette di raggiungere anche località di carico in zone forestali difficilmente accessibili.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Per tratte internazionali o destinazioni particolari, valutiamo ogni richiesta per offrire la soluzione più adatta alle vostre esigenze.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Le nostre sedi</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Sede Legale</h4>
                    <p className="text-muted-foreground">
                      Corso Valsesia 166<br />
                      13045 Gattinara (VC)
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Deposito Operativo</h4>
                    <p className="text-muted-foreground">
                      Via Torino 1<br />
                      13060 Roasio (VC)
                    </p>
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
              Lavoriamo insieme
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Siamo sempre aperti a nuove collaborazioni. Contattaci per discutere delle tue esigenze di trasporto.
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

export default ChiSiamo;
