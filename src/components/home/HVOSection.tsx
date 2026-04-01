import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const HVOSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
            <Leaf className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              HVO
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Parte della flotta utilizza carburante HVO dove disponibile e compatibile con le specifiche dei mezzi, per ridurre l'impatto rispetto al diesel tradizionale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HVOSection;
