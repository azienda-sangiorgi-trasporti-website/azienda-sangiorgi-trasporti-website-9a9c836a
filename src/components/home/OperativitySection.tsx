import { Satellite, MapPin, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Satellite,
    title: 'Controllo Satellitare',
    description: 'Flotta tracciata e sotto controllo satellitare per una gestione operativa affidabile.',
  },
  {
    icon: MapPin,
    title: 'Monitoraggio Tratte',
    description: 'Pianificazione e monitoraggio delle tratte per ottimizzare tempi e risorse.',
  },
  {
    icon: Clock,
    title: 'Aggiornamenti Operativi',
    description: 'Comunicazione costante sullo stato del trasporto e gestione tempi di consegna.',
  },
  {
    icon: Shield,
    title: 'Affidabilità Garantita',
    description: 'Tracciabilità operativa che assicura maggiore controllo e sicurezza del carico.',
  },
];

const OperativitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Operatività e Controllo
            </h2>
            <div className="divider-copper mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Gestiamo ogni trasporto con strumenti di monitoraggio e tracciabilità operativa. 
              La nostra flotta è dotata di sistemi di controllo satellitare per garantire 
              pianificazione efficiente e comunicazione costante con i nostri clienti.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Questo si traduce in maggiore affidabilità, gestione ottimale dei tempi 
              e visibilità sullo stato delle consegne.
            </p>

            {/* Enterprise Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
              <Satellite className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Fleet Tracking Integrato
              </span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperativitySection;
