import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/companyData';
import { ContactFormData } from '../types';
import {
  Phone,
  MessageSquare,
  MapPin,
  ArrowUpRight,
  Send,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    district: 'Kurunegala / Galgamuwa',
    serviceRequired: SERVICES_DATA[0].title,
    approxPerimeter: '',
    message: '',
  });

  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    return (
      `Hello Nikeshi Electronics & Fence Constructions,\n` +
      `I would like to inquire about your services:\n` +
      `- Name: ${formData.fullName || 'Not specified'}\n` +
      `- Contact Phone: ${formData.phoneNumber || 'Not specified'}\n` +
      `- District / Location: ${formData.district}\n` +
      `- Service: ${formData.serviceRequired}\n` +
      `- Approx Perimeter: ${formData.approxPerimeter || 'Not specified'}\n` +
      `- Details: ${formData.message || 'Please contact me regarding site inspection and pricing.'}`
    );
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/94774200364?text=${encoded}`, '_blank');
  };

  const handleDemoSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="border-b border-slate-900 bg-slate-950/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Phone className="w-4 h-4" />
              <span>Direct Communication &amp; Facility Location</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contact NIKESHI ELECTRONICS &amp; FENCE CONSTRUCTIONS
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach our engineering desk at 39 Mile Post, Galgamuwa. Call or message us directly on WhatsApp for fence estimates, solar energizer advice, and site inspections.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Channels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Channel 1: Telephone */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Direct Telephone Line
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {COMPANY_DETAILS.phoneDisplay}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Direct verbal consultations with our technical supervisors for emergency repairs and immediate site queries.
              </p>
            </div>
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call tel:+94774200364</span>
            </a>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Instant WhatsApp Messenger
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                +94 77 420 0364
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Send site photos, Google Maps location pins, survey diagrams, and receive rapid quotation replies.
              </p>
            </div>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Channel 3: Physical Address */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Office &amp; Workshop Facility
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                39 Mile Post, Galgamuwa 60700
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                North Western Province, Sri Lanka. Centrally positioned along the main transportation arterial between Kurunegala and Anuradhapura.
              </p>
            </div>
            <a
              href={COMPANY_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form (Explicitly labeled as DEMO, no backend pretending) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Send className="w-4 h-4" />
                <span>Project Inquiry Form</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Request a Perimeter Survey or Technical Consultation
              </h2>
            </div>

            {/* MANDATORY PROMPT REQUIREMENT: Clearly label the contact form as a demo because no backend is connected */}
            <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/90 space-y-1">
                <p className="font-bold text-amber-300">
                  DEMO FORM NOTICE: No Backend Server Connected
                </p>
                <p className="text-[11px] leading-relaxed text-amber-200/80">
                  This demonstration website runs without a backend database and does not store or transmit form data to a server. To submit an actual inquiry immediately, please use the direct <strong className="text-white">"Send via WhatsApp"</strong> button below or call <strong className="text-white">077 420 0364</strong>.
                </p>
              </div>
            </div>

            {/* Interactive Demo Submission Feedback State */}
            {demoSubmitted && (
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/50 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Demo Submission Acknowledged (Client-side Simulation)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  As noted, no data was stored in any database. Here is your formatted message payload ready to be sent to Nikeshi Electronics:
                </p>
                <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 whitespace-pre-wrap border border-slate-800">
                  {generateWhatsAppMessage()}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open in WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoSubmitted(false)}
                    className="px-3 py-2 text-slate-400 hover:text-white text-xs"
                  >
                    Close Notice
                  </button>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="font-medium text-slate-300 block">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Sunil Perera"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber" className="font-medium text-slate-300 block">
                    Phone / WhatsApp Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="serviceRequired" className="font-medium text-slate-300 block">
                    Service Required <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="district" className="font-medium text-slate-300 block">
                    District / Site Location
                  </label>
                  <input
                    id="district"
                    type="text"
                    name="district"
                    placeholder="e.g. Kurunegala, Anuradhapura, Puttalam"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="approxPerimeter" className="font-medium text-slate-300 block">
                  Estimated Perimeter / Land Size (Optional)
                </label>
                <input
                  id="approxPerimeter"
                  type="text"
                  name="approxPerimeter"
                  placeholder="e.g. 1,200 meters / 5 acres / 200m wall-top"
                  value={formData.approxPerimeter}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-medium text-slate-300 block">
                  Project Details / Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe wildlife challenges (elephants/wild boar), solar requirement, terrain condition, or electrical scope..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 resize-y"
                />
              </div>

              {/* Action Buttons: 1. Send via WhatsApp (Live Real Action) 2. Test Demo Form (Feedback) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-md shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDemoSubmitTest}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Simulate Demo Submit</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map & Operational Center Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Container */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Galgamuwa 60700 Location</span>
                </div>
                <a
                  href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="w-full h-72 bg-slate-950 relative">
                <iframe
                  title="NIKESHI ELECTRONICS Google Maps Location - 39 Mile Post, Galgamuwa 60700, Sri Lanka"
                  src="https://maps.google.com/maps?q=39+Mile+Post,+Galgamuwa+60700,+Sri+Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-slate-950/90 text-xs space-y-2 border-t border-slate-800">
                <p className="font-semibold text-white">
                  {COMPANY_DETAILS.address}
                </p>
                <p className="text-[11px] text-slate-400">
                  Direct transport accessibility along the A28/Padeniya-Anuradhapura Highway corridor at 39 Mile Post.
                </p>
                <div className="pt-2">
                  <a
                    href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors w-full justify-center"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Navigate with Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Corporate Info */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Office &amp; Site Dispatch Hours</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-850">
                  <span className="text-slate-400">Monday – Friday</span>
                  <span className="font-mono text-white">7:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-850">
                  <span className="text-slate-400">Saturday</span>
                  <span className="font-mono text-white">8:00 AM – 4:30 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Sunday &amp; Poya Days</span>
                  <span className="text-cyan-300">On-Call Support</span>
                </div>
              </div>

              {/* Verified rule note */}
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 leading-normal">
                <span className="text-slate-400 font-semibold">Corporate Email Status:</span> {COMPANY_DETAILS.emailNotice}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
