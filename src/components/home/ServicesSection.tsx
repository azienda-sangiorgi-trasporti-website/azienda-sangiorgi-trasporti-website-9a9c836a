import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TreePine, Package, Mountain, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: TreePine,
    title: 'Trasporto Legname',
    description: 'Tronchi su pianali aperti, soluzioni centinate. Autotreni e bilici dedicati per il settore legname.',
    href: '/legname',
    featured: true,
  },
  {
    icon: Package,
    title: 'Merci Nazionali',
    description: 'Copertura capillare su tutta Italia, compresa Corsica e Svizzera. Bilici centinati e pianali aperti.',
    href: '/servizi',
  },
  {
    icon: Mountain,
    title: 'Tratte Svizzera',
    description: 'Specializzati Italia–Svizzera con sdoganamento tramite partner ufficiali sul territorio.',
    href: '/servizi',
  },
  {
    icon: Truck,
    title: 'Trasporti Dedicati',
    description: 'Urgenze programmate e servizi dedicati per esigenze specifiche della tua azienda.',
    href: '/servizi',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              I nostri servizi
            </h2>
            <div className="divider-copper mb-4" />
            <p className="text-lg text-muted-foreground max-w-xl">
              Trasporto legname e merci su strada, con specializzazione tratte Italia–Svizzera
            </p>
          </motion.div>
          <Link to="/servizi">
            <Button variant="outlineCopper" className="gap-2">
              Tutti i servizi
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className={`block h-full p-6 rounded-xl border transition-all duration-300 group ${
                  service.featured
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary'
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  service.featured ? 'bg-gradient-copper' : 'bg-muted'
                }`}>
                  <service.icon className={`w-6 h-6 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
