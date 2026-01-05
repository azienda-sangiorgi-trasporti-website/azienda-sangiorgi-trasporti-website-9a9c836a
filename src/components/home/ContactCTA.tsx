import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    tipoMerce: '',
    tratta: '',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Richiesta inviata! Vi contatteremo al più presto.');
    setFormData({
      nome: '',
      azienda: '',
      email: '',
      telefono: '',
      tipoMerce: '',
      tratta: '',
      note: '',
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Richiedi un preventivo
            </h2>
            <div className="divider-copper mb-6" />
            <p className="text-lg text-muted-foreground mb-8">
              Compila il form per ricevere un preventivo personalizzato. Risponderemo entro 24 ore lavorative.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome *</label>
                  <Input
                    required
                    placeholder="Il tuo nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Azienda</label>
                  <Input
                    placeholder="Nome azienda"
                    value={formData.azienda}
                    onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    placeholder="email@azienda.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefono</label>
                  <Input
                    type="tel"
                    placeholder="+39 ..."
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tipo di Merce</label>
                  <Input
                    placeholder="Es: Tronchi, legname, altro..."
                    value={formData.tipoMerce}
                    onChange={(e) => setFormData({ ...formData, tipoMerce: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tratta</label>
                  <Input
                    placeholder="Es: Milano - Torino"
                    value={formData.tratta}
                    onChange={(e) => setFormData({ ...formData, tratta: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Note Aggiuntive</label>
                <Textarea
                  placeholder="Descrivi le tue esigenze specifiche..."
                  rows={4}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="bg-card border-border"
                />
              </div>

              <Button type="submit" variant="copper" size="lg" className="w-full gap-2">
                Invia Richiesta
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contatti Diretti
              </h3>
              <div className="space-y-6">
                <a href="tel:+39" className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Telefono</span>
                    <span className="text-foreground font-semibold">[Inserire numero]</span>
                  </div>
                </a>
                
                <a href="mailto:sangiorgialessandro@cert.cna.it" className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">PEC</span>
                    <span className="text-foreground font-semibold text-sm break-all">sangiorgialessandro@cert.cna.it</span>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">WhatsApp</span>
                    <span className="text-foreground font-semibold">Scrivici su WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>

            <Link to="/contatti">
              <Button variant="outlineCopper" size="lg" className="w-full gap-2">
                Vai alla pagina contatti
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
