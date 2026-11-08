import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, Calendar, Clock, Send, Check } from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const {
    company,
    isConsultationOpen,
    closeConsultation,
    consultationDefaultService,
    showToast,
  } = useBrand();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM GMT');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (consultationDefaultService) {
      setNotes(`Interested in: ${consultationDefaultService}`);
    }
  }, [consultationDefaultService]);

  if (!isConsultationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please provide your name and email address');
      return;
    }
    const code = `DISC-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setBooked(true);
    showToast(`Discovery session reserved [${code}]`, 'success');
  };

  const handleClose = () => {
    setBooked(false);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    closeConsultation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700/80 text-white rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-2xl text-white">
              Consultation Reserved
            </h3>
            <div className="font-mono text-xs text-amber-400 tracking-wider">
              CONFIRMATION: {bookingCode}
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
              A private calendar invitation has been prepared for {email || name}. Our Principal Architect looks forward to reviewing your spatial objectives.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                Direct Principal Access
              </span>
              <h3 className="font-editorial text-2xl text-white mt-0.5">
                Schedule Discovery Consultation
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                A confidential 45-minute architectural & feasibility working session with {company.name}.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and Last Name"
                  className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option>10:00 AM GMT / 05:00 AM EST</option>
                    <option>02:00 PM GMT / 09:00 AM EST</option>
                    <option>04:30 PM GMT / 11:30 AM EST</option>
                    <option>07:00 PM GMT / 02:00 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Commission Notes / Site Context
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Location, approximate scope, or key design desires..."
                  className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Confirm Working Session</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
