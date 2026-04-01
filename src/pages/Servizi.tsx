import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TreePine, Package, Mountain, FileText, Truck, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: TreePine,
    title: 'Trasporto Legname / Tronchi',
    description: 'La nostra specializzazione principale. Trasportiamo tronchi su pianali aperti e offriamo soluzioni centinate dove richiesto. Autotreni e bilici dedicati con esperienza consolidata su tratte montane e accessi difficili.',
    features: [
      'Tronchi su pianali aperti con fissaggio professionale',
      'Soluzioni centinate disponibili su richiesta',
      'Autotreni e bilici configurati per il legname',
      'Esperienza su tratte montane e accessi difficili',
      'Documentazione completa per ogni trasporto',
    ],
    href: '/legname',
    featured: true,
    keywords: ['trasporto legname', 'trasporto tronchi', 'pianale aperto'],
  },
  {
    icon: Package,
    title: 'Trasporto Merci Nazionale',
    description: 'Copertura capillare su tutta Italia, compresa Corsica e Svizzera. Autotreni e bilici, centinati o aperti, per adattarci alle esigenze del carico. Servizio conto terzi professionale con la stessa affidabilità dedicata al settore legname.',
    features: [
      'Copertura capillare su tutta Italia',
      'Autotreni e bilici con allestimenti centinati o aperti',
      'Configurazioni adatte a diverse tipologie di carico',
      'Puntualità e tracciabilità operativa',
    ],
    href: '/contatti',
    keywords: ['autotrasporto conto terzi', 'bilici centinati'],
  },
  {
    icon: Mountain,
    title: 'Tratte Svizzera + Gestione Sdoganamento',
    description: 'Specializzati sulle tratte Italia–Svizzera. Per lo sdoganamento ci avvaliamo di partner ufficiali dislocati sul territorio svizzero, garantendo una gestione documentale e operativa efficiente e conforme.',
    features: [
      'Specializzazione tratte Italia ↔ Svizzera',
      'Sdoganamento tramite partner ufficiali in loco',
      'Gestione documentale coordinata',
      'Esperienza consolidata su percorsi alpini',
      'Coordinamento completo import/export',
    ],
    href: '/contatti',
    keywords: ['trasporto Italia Svizzera', 'sdoganamento Svizzera'],
  },
  {
    icon: Truck,
    title: 'Trasporti Dedicati',
    description: 'Servizi dedicati per esigenze specifiche della tua azienda. Mezzi riservati per clienti abituali, urgenze con programmazione anticipata e flessibilità operativa.',
    features: [
      'Mezzi dedicati per clienti abituali',
      'Urgenze con programmazione anticipata',
      'Flessibilità negli orari di ritiro e consegna',
      'Contatto diretto con l\'autista',
    ],
    href: '/contatti',
  },
];

const additionalServices = [
  {
    icon: Clock,
    title: 'Servizi su Richiesta',
    description: 'Container, trasporti speciali e configurazioni particolari sono disponibili su richiesta. Contattaci per valutare insieme le tue esigenze specifiche.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestione Documentale',
    description: 'Ci occupiamo di tutta la documentazione necessaria: DDT, CMR per l\'internazionale, documentazione doganale e report di consegna.',
  },
];

const Servizi = () => {
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
                I Nostri <span className="text-gradient-copper">Servizi</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Trasporto legname e merci su strada con specializzazione sulle tratte Italia–Svizzera. 
                Autotreni e bilici, centinati e aperti, per ogni esigenza di carico.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`p-8 rounded-2xl border ${
                      service.featured 
                        ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30' 
                        : 'bg-card border-border'
                    }`}>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                        service.featured ? 'bg-gradient-copper' : 'bg-muted'
                      }`}>
                        <service.icon className={`w-7 h-7 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link to={service.href}>
                        <Button variant={service.featured ? 'copper' : 'outlineCopper'} className="gap-2">
                          {service.featured ? 'Scopri il trasporto legname' : 'Richiedi preventivo'}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.keywords && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Servizi Aggiuntivi</h2>
              <div className="divider-copper mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hai bisogno di un trasporto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo personalizzato. Analizzeremo le tue esigenze e ti proporremo la soluzione migliore.
            </p>
            <Link to="/contatti">
              <Button variant="copper" size="xl" className="gap-2">
                Richiedi Preventivo
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

export default Servizi;
