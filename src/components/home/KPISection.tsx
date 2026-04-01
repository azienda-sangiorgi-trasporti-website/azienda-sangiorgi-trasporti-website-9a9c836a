import { motion } from 'framer-motion';
import { TrendingUp, Handshake, Package } from 'lucide-react';

const kpis = [
  {
    icon: TrendingUp,
    value: '> 1.000.000',
    unit: 'km/anno (circa)',
    label: 'Chilometri percorsi',
  },
  {
    icon: Handshake,
    value: '—',
    unit: '',
    label: 'Collaborazioni attive',
  },
  {
    icon: Package,
    value: '—',
    unit: '',
    label: 'Spedizioni annue',
  },
];

const KPISection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-night">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Numeri operativi
          </h2>
          <div className="divider-copper mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <kpi.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-copper mb-1">
                {kpi.value}
              </div>
              {kpi.unit && (
                <div className="text-sm text-muted-foreground mb-2">{kpi.unit}</div>
              )}
              <div className="text-foreground font-medium">{kpi.label}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 italic">
          * Valori indicativi / da aggiornare
        </p>
      </div>
    </section>
  );
};

export default KPISection;
