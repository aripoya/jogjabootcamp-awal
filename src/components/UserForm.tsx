import { useState } from 'react';
import type { UserData } from '../types';

interface UserFormProps {
  onSubmit: (data: UserData) => void;
  isSubmitting?: boolean;
}

export default function UserForm({ onSubmit, isSubmitting = false }: UserFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    whatsapp: '',
    email: '',
    businessType: '',
  });
  
  const [errors, setErrors] = useState<Partial<UserData>>({});

  const validateForm = () => {
    const newErrors: Partial<UserData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9]{10,15}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'Nomor WhatsApp tidak valid';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="font-heading text-3xl font-bold text-navy-primary mb-3">
          Quiz Selesai!
        </h2>
        <p className="text-gray-600">
          Masukkan data Anda untuk melihat hasil dan rekomendasi personal.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-gold transition-colors ${
              errors.name ? 'border-red-400' : 'border-gray-200'
            }`}
            placeholder="Nama Anda"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor WhatsApp *
          </label>
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-gold transition-colors ${
              errors.whatsapp ? 'border-red-400' : 'border-gray-200'
            }`}
            placeholder="08123456789"
          />
          {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-gold transition-colors ${
              errors.email ? 'border-red-400' : 'border-gray-200'
            }`}
            placeholder="email@domain.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jenis Usaha (Opsional)
          </label>
          <input
            type="text"
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gold transition-colors"
            placeholder="Contoh: Kuliner, Fashion, Jasa, dll"
          />
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          🔒 Data Anda aman. Kami tidak akan spam atau menjual data Anda.
        </p>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-gold to-gold-hover text-navy-primary font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </span>
          ) : (
            'Lihat Hasil Saya →'
          )}
        </button>
      </form>
    </div>
  );
}
