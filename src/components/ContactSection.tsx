import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Copy,
  Check,
  Building2,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { company, showToast } = useBrand();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: 'Private Residential Estates & Villas',
    budgetRange: '$2M – $5M',
    timeline: 'Within 6–12 months',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedStudio, setSelectedStudio] = useState<'london' | 'newyork'>('london');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard`, 'info');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters detailing your inquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `AET-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(ref);
    setSubmitted(true);
    showToast(`Consultation inquiry registered [${ref}]`, 'success');
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${company.name}, I would like to inquire about your architectural and spatial advisory services.`
  );
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-neutral-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
            Initiate Consultation
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
            Commissioning & Studio Inquiries
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            Our Principal Architects welcome preliminary discussions regarding upcoming residential developments, flagship corporate headquarters, and institutional masterplans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Studio Locations */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Channels */}
            <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-4">
              <h3 className="font-editorial text-xl text-neutral-950 dark:text-neutral-100">
                Direct Communication Lines
              </h3>

              {/* WhatsApp Working Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="text-xs font-semibold">Instant WhatsApp Advisory</div>
                    <div className="text-[11px] text-emerald-700/80 dark:text-emerald-300/80">
                      Direct executive studio channel
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Telephone */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-200 hover:text-amber-500"
                >
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">Telephone Inquiries</div>
                    <div className="font-medium">{company.phone}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(company.phone, 'Phone number')}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                  title="Copy phone"
                >
                  {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-200 hover:text-amber-500 truncate"
                >
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">Confidential Inquiries</div>
                    <div className="font-medium truncate">{company.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(company.email, 'Email address')}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'Email address' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Studio Addresses with Interactive Selector */}
            <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-xl text-neutral-950 dark:text-neutral-100">
                  Global Studio Presence
                </h3>
                <div className="flex rounded-md p-0.5 bg-neutral-200 dark:bg-neutral-800 text-xs">
                  <button
                    onClick={() => setSelectedStudio('london')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      selectedStudio === 'london'
                        ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-sm font-semibold'
                        : 'text-neutral-500'
                    }`}
                  >
                    London
                  </button>
                  <button
                    onClick={() => setSelectedStudio('newyork')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      selectedStudio === 'newyork'
                        ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-sm font-semibold'
                        : 'text-neutral-500'
                    }`}
                  >
                    New York
                  </button>
                </div>
              </div>

              <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-950 dark:text-neutral-100">
                      {selectedStudio === 'london' ? 'European Headquarters' : 'Americas Flagship Studio'}
                    </div>
                    <div>
                      {selectedStudio === 'london' ? company.address : company.secondaryAddress}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{company.hours}</span>
                </div>
              </div>

              {/* Map Visualizer Mock / Location Badge */}
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 p-4 text-white relative">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-amber-400">
                    {selectedStudio === 'london' ? 'LAT 51.5118° N · LON 0.1511° W' : 'LAT 40.7614° N · LON 73.9712° W'}
                  </span>
                  <Building2 className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="h-24 rounded bg-neutral-800/80 border border-neutral-700/60 flex flex-col items-center justify-center p-2 text-center">
                  <p className="text-xs font-medium text-neutral-200">
                    {selectedStudio === 'london' ? 'Mayfair Architectural Studio & Gallery' : 'Park Avenue Advisory & Planning Suite'}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Private consultations hosted by prior appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-neutral-950 dark:text-neutral-100">
                    Inquiry Confirmed
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Reference ID: {submissionId}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our Principal Architect will review your preliminary project briefing and reach out within 24 business hours to arrange an exploratory session.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          serviceType: 'Private Residential Estates & Villas',
                          budgetRange: '$2M – $5M',
                          timeline: 'Within 6–12 months',
                          message: '',
                        });
                      }}
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-editorial text-2xl text-neutral-950 dark:text-neutral-100">
                      Confidential Project Registration
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Complete this form to schedule a preliminary spatial discovery briefing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Lord / Lady / Dr. / First Last"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                        } text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@organization.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border ${
                          errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                        } text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Telephone <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border ${
                          errors.phone ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                        } text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Organization / Family Office */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Organization / Family Office (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sterling Trust"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Service Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Commission Typology
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                      >
                        <option>Private Residential Estates & Villas</option>
                        <option>Flagship Headquarters & Commercial</option>
                        <option>Sustainable Biophilic Architecture</option>
                        <option>Spatial Masterplanning & Heritage</option>
                      </select>
                    </div>

                    {/* Capital Allocation */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Estimated Capital
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                      >
                        <option>$1M – $2M</option>
                        <option>$2M – $5M</option>
                        <option>$5M – $15M</option>
                        <option>$15M – $50M+</option>
                      </select>
                    </div>

                    {/* Desired Timeline */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Target Horizon
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                      >
                        <option>Immediate (Within 3 Months)</option>
                        <option>Within 6–12 months</option>
                        <option>Long-Term Strategic (1–2 Years)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Project Overview & Site Details <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the site location, approximate footprint, architectural vision, or existing zoning condition..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border ${
                        errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                      } text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>Transmit Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    All communications are governed by non-disclosure protocols. No client data is shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
