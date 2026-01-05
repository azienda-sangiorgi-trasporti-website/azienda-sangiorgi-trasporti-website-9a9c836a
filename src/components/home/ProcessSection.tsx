import { FileText, CalendarCheck, Truck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Richiesta e Dati Carico',
    description: 'Raccogliamo le informazioni sul carico, tratta e tempistiche per preparare un preventivo accurato.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Pianificazione e Documenti',
    description: 'Organizziamo il trasporto, prepariamo la documentazione e coordiniamo la logistica.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Trasporto e Sicurezza',
    description: 'Eseguiamo il trasporto con mezzi idonei, garantendo sicurezza e tracciabilità del carico.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Consegna e Conferma',
    description: 'Completiamo la consegna, verifichiamo lo stato della merce e forniamo documentazione finale.',
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
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
              Come lavoriamo
            </h2>
            <div className="divider-copper mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processo chiaro e strutturato per garantire trasporti efficienti e senza sorprese
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 bg-gradient-copper text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mt-4 mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
