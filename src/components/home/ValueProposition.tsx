import { TreePine, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: TreePine,
    title: 'Specialisti del Legname',
    description: 'Esperienza consolidata nel trasporto di tronchi, semilavorati e prodotti forestali. Conosciamo le sfide del settore e le affrontiamo con competenza.',
  },
  {
    icon: ShieldCheck,
    title: 'Sicurezza del Carico',
    description: 'Ogni trasporto è gestito con la massima attenzione alla sicurezza stradale tramite personale competente che interviene nella messa in sicurezza e nel controllo del fissaggio del carico.',
  },
  {
    icon: Clock,
    title: 'Affidabilità Operativa',
    description: 'Puntualità nelle consegne e tracciabilità completa. Comunicazione chiara e gestione documentale professionale.',
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-gradient-night">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché scegliere Sangiorgi
            </h2>
            <div className="divider-copper mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affidabilità, competenza e dedizione al servizio caratterizzano ogni nostro trasporto
            </p>
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
