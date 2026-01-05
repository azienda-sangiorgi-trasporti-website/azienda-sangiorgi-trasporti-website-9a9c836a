import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Zap, Check, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    tipoMerce: '',
    tratta: '',
    peso: '',
    volume: '',
    lunghezzaMax: '',
    doganaCH: false,
    noteDocumenti: '',
    dataPrevista: '',
    note: '',
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast.error('Devi accettare la privacy policy per procedere');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Richiesta inviata con successo! Vi contatteremo al più presto.');
    setFormData({
      nome: '',
      azienda: '',
      email: '',
      telefono: '',
      tipoMerce: '',
      tratta: '',
      peso: '',
      volume: '',
      lunghezzaMax: '',
      doganaCH: false,
      noteDocumenti: '',
      dataPrevista: '',
      note: '',
      privacy: false,
    });
    setIsSubmitting(false);
  };

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
                Richiedi un <span className="text-gradient-copper">Preventivo</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Compila il form per ricevere un preventivo personalizzato. Risponderemo entro 24 ore lavorative.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nome e Cognome *</label>
                      <Input
                        required
                        placeholder="Il tuo nome completo"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Azienda</label>
                      <Input
                        placeholder="Nome della tua azienda"
                        value={formData.azienda}
                        onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        placeholder="email@azienda.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Telefono</label>
                      <Input
                        type="tel"
                        placeholder="+39 ..."
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tipo di Merce</label>
                      <Input
                        placeholder="Es: Tronchi, legname segato, altro..."
                        value={formData.tipoMerce}
                        onChange={(e) => setFormData({ ...formData, tipoMerce: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tratta (Origine - Destinazione + CAP)</label>
                      <Input
                        placeholder="Es: 38100 Trento - 20100 Milano"
                        value={formData.tratta}
                        onChange={(e) => setFormData({ ...formData, tratta: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                  </div>

                  {/* Campi opzionali: Peso, Volume, Lunghezza */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Peso <span className="text-muted-foreground font-normal">(ton)</span>
                      </label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="Es: 25"
                        value={formData.peso}
                        onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Volume <span className="text-muted-foreground font-normal">(m³)</span>
                      </label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="Es: 30"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Lunghezza max <span className="text-muted-foreground font-normal">(m)</span>
                      </label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="Es: 13.5"
                        value={formData.lunghezzaMax}
                        onChange={(e) => setFormData({ ...formData, lunghezzaMax: e.target.value })}
                        className="bg-card border-border h-12"
                      />
                    </div>
                  </div>

                  {/* Toggle Dogana Svizzera */}
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <label htmlFor="doganaCH" className="text-sm font-medium text-foreground cursor-pointer">
                          Richiede sdoganamento Svizzera (gestito da partner)
                        </label>
                      </div>
                      <Switch
                        id="doganaCH"
                        checked={formData.doganaCH}
                        onCheckedChange={(checked) => setFormData({ ...formData, doganaCH: checked })}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {formData.doganaCH && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Note per documentazione doganale
                          </label>
                          <Textarea
                            placeholder="Indicare eventuali documenti già in possesso. Lo sdoganamento viene gestito dai nostri partner ufficiali dislocati in Svizzera."
                            rows={3}
                            value={formData.noteDocumenti}
                            onChange={(e) => setFormData({ ...formData, noteDocumenti: e.target.value })}
                            className="bg-background border-border"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Data Prevista (indicativa)</label>
                    <Input
                      type="date"
                      value={formData.dataPrevista}
                      onChange={(e) => setFormData({ ...formData, dataPrevista: e.target.value })}
                      className="bg-card border-border h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Note e Richieste Specifiche</label>
                    <Textarea
                      placeholder="Descrivi le tue esigenze: volume/peso merce, frequenza, esigenze particolari..."
                      rows={5}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Accetto il trattamento dei miei dati personali secondo la <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. I dati saranno utilizzati esclusivamente per rispondere alla richiesta di preventivo.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="copper" 
                    size="xl" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Checklist Card - Cosa serve per un preventivo */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Preventivo in 60 secondi
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Cosa serve per un preventivo rapido:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Tipo di merce (tronchi, segato, altro)',
                      'Quantità: peso/volume + lunghezza max tronchi',
                      'Tratta con CAP partenza e arrivo',
                      'Data prevista per carico/scarico',
                      'Svizzera: indicare se serve sdoganamento (tramite partner)',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Cards */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    Contatti Diretti
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:+39" className="flex items-center gap-4 p-3 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground">Telefono</span>
                        <span className="text-sm text-foreground font-medium">[Inserire numero]</span>
                      </div>
                    </a>
                    
                    <a href="mailto:sangiorgialessandro@cert.cna.it" className="flex items-center gap-4 p-3 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground">PEC</span>
                        <span className="text-sm text-foreground font-medium break-all">sangiorgialessandro@cert.cna.it</span>
                      </div>
                    </a>
                    
                    <a href="#" className="flex items-center gap-4 p-3 rounded-xl bg-background hover:bg-muted/50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground">WhatsApp</span>
                        <span className="text-sm text-foreground font-medium">Scrivici</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Orari</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Lun - Ven: 08:00 - 18:00<br />
                    Sab: 08:00 - 12:00
                  </p>
                </div>

                {/* Addresses */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Sedi</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Sede Legale:</span>
                      <p className="text-foreground">Corso Valsesia 166, 13045 Gattinara (VC)</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deposito:</span>
                      <p className="text-foreground">Via Torino 1, 13060 Roasio (VC)</p>
                    </div>
                  </div>
                </div>

                {/* PEC Box */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Richiesta via PEC</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Per comunicazioni ufficiali e richieste formali, puoi scriverci via PEC:
                  </p>
                  <code className="block text-sm text-primary break-all">
                    sangiorgialessandro@cert.cna.it
                  </code>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
