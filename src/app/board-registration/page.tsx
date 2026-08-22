'use client';

import { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CheckCircle2, Loader2, Camera, User, FileText, PenTool, X, Trash2, SwitchCamera, Lock, Download, ExternalLink, ShieldCheck, ArrowLeft } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface TrusteeSubmission {
  id: string;
  title: string;
  full_name: string;
  occupation: string;
  nationality: string;
  date_of_birth: string;
  phone_number: string;
  email: string;
  home_address: string;
  passport_url: string;
  id_card_url: string;
  signature_url: string;
  created_at: string;
}

export default function BoardRegistrationPage() {
  const [viewMode, setViewMode] = useState<'locked' | 'trustee-form' | 'registrar-portal'>('locked');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: 'Mr.',
    fullName: '',
    occupation: '',
    nationality: 'Nigerian',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    homeAddress: '',
  });

  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [signatureFile, setSignatureFile] = useState<File | null>(null);

  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);

  const [activeCameraType, setActiveCameraType] = useState<'passport' | 'idCard' | 'signature' | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const [registrarLoading, setRegistrarLoading] = useState(false);
  const [submissions, setSubmissions] = useState<TrusteeSubmission[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleUniversalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'ELI7trustee') {
      setViewMode('trustee-form');
      setLoginError('');
      setPasswordInput('');
    } else if (passwordInput === 'ELI7RA') {
      setViewMode('registrar-portal');
      setLoginError('');
      setPasswordInput('');
      fetchSubmissions();
    } else {
      setLoginError('Incorrect access password or code.');
    }
  };

  const fetchSubmissions = async () => {
    setRegistrarLoading(true);
    try {
      const { data, error } = await supabase
        .from('trustee_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      alert('Failed to load submissions.');
    } finally {
      setRegistrarLoading(false);
    }
  };

  // Force direct download function using blobs to bypass browser cross-origin tab viewing
  const handleDownloadFile = async (url: string, filename: string, uniqueKey: string) => {
    setDownloadingId(uniqueKey);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download failed, opening fallback link:', err);
      window.open(url, '_blank');
    } finally {
      setDownloadingId(null);
    }
  };

  const startCamera = async (type: 'passport' | 'idCard' | 'signature', mode: 'user' | 'environment' = 'user') => {
    setActiveCameraType(type);
    setFacingMode(mode);
    if (stream) stream.getTracks().forEach((track) => track.stop());

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: mode } });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access camera. Please check browser permissions.');
      setActiveCameraType(null);
    }
  };

  const toggleCameraDirection = () => {
    const newMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newMode);
    if (activeCameraType) startCamera(activeCameraType, newMode);
  };

  const stopCamera = () => {
    if (stream) stream.getTracks().forEach((track) => track.stop());
    setStream(null);
    setActiveCameraType(null);
  };

  const captureSnapshot = () => {
    if (!videoRef.current || !activeCameraType) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], `${activeCameraType}-${Date.now()}.jpg`, { type: 'image/jpeg' });
      const previewUrl = URL.createObjectURL(blob);

      if (activeCameraType === 'passport') {
        setPassportFile(file);
        setPassportPreview(previewUrl);
      } else if (activeCameraType === 'idCard') {
        setIdCardFile(file);
        setIdCardPreview(previewUrl);
      } else if (activeCameraType === 'signature') {
        setSignatureFile(file);
        setSignaturePreview(previewUrl);
      }
      stopCamera();
    }, 'image/jpeg', 0.9);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'passport' | 'idCard' | 'signature') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);

    if (type === 'passport') {
      setPassportFile(file);
      setPassportPreview(previewUrl);
    } else if (type === 'idCard') {
      setIdCardFile(file);
      setIdCardPreview(previewUrl);
    } else if (type === 'signature') {
      setSignatureFile(file);
      setSignaturePreview(previewUrl);
    }
  };

  const handleRemoveFile = (type: 'passport' | 'idCard' | 'signature') => {
    if (type === 'passport') { setPassportFile(null); setPassportPreview(null); }
    else if (type === 'idCard') { setIdCardFile(null); setIdCardPreview(null); }
    else if (type === 'signature') { setSignatureFile(null); setSignaturePreview(null); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passportFile || !idCardFile || !signatureFile) {
      setError('Please provide your passport photo, ID card, and signature.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const uploadFile = async (file: File, prefix: string) => {
        const fileName = `${Date.now()}-${prefix}-${file.name}`;
        const { error: uploadError } = await supabase.storage.from('trustee-documents').upload(fileName, file);
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from('trustee-documents').getPublicUrl(fileName);
        return data.publicUrl;
      };

      const passportUrl = await uploadFile(passportFile, 'passport');
      const idCardUrl = await uploadFile(idCardFile, 'nin');
      const signatureUrl = await uploadFile(signatureFile, 'sig');

      const { error: dbError } = await supabase.from('trustee_submissions').insert([
        {
          title: formData.title,
          full_name: formData.fullName,
          occupation: formData.occupation,
          nationality: formData.nationality,
          date_of_birth: formData.dateOfBirth,
          phone_number: formData.phoneNumber,
          email: formData.email,
          home_address: formData.homeAddress,
          passport_url: passportUrl,
          id_card_url: idCardUrl,
          signature_url: signatureUrl,
        },
      ]);

      if (dbError) throw dbError;
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // 1. LOCKED VIEW
  if (viewMode === 'locked') {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-800">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ELI7 Foundation Portal</h1>
            <p className="text-sm text-gray-600">Enter your access password or registrar code to proceed.</p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs">
              {loginError}
            </div>
          )}

          <form onSubmit={handleUniversalLogin} className="space-y-4">
            <input
              type="password"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password or code"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
            />
            <button
              type="submit"
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition text-base"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. REGISTRAR PORTAL VIEW
  if (viewMode === 'registrar-portal') {
    return (
      <div className="w-full py-8 px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 gap-4">
            <div className="space-y-1">
              <button
                onClick={() => setViewMode('locked')}
                className="text-xs text-gray-500 hover:text-black flex items-center space-x-1 mb-2 font-medium"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back to Login</span>
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Registrar Portal — Trustee Submissions</h1>
              <p className="text-sm text-gray-600">Review all trustee records and download asset files directly for filing.</p>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-medium border border-green-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Registrar Verified</span>
            </div>
          </div>

          {registrarLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
            </div>
          ) : submissions.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl text-center shadow-sm border border-gray-100 text-gray-500 space-y-2">
              <p>No trustee submissions received yet.</p>
              <p className="text-xs text-gray-400">If you already sent one, verify that your Supabase RLS policies allow inserts/selects on `trustee_submissions`.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {submissions.map((sub, index) => {
                const subId = sub.id || index.toString();
                return (
                  <div key={subId} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between border-b pb-4 gap-2">
                      <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Trustee #{index + 1}</span>
                        <h2 className="text-xl font-bold text-gray-900">{sub.title} {sub.full_name}</h2>
                      </div>
                      <span className="text-xs text-gray-500">Submitted: {new Date(sub.created_at).toLocaleString()}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                      <div><span className="text-gray-500 block mb-1">Nationality</span><span className="font-semibold text-gray-900 text-base">{sub.nationality}</span></div>
                      <div><span className="text-gray-500 block mb-1">Occupation</span><span className="font-semibold text-gray-900 text-base">{sub.occupation}</span></div>
                      <div><span className="text-gray-500 block mb-1">Date of Birth</span><span className="font-semibold text-gray-900 text-base">{sub.date_of_birth}</span></div>
                      <div><span className="text-gray-500 block mb-1">Phone Number</span><span className="font-semibold text-gray-900 text-base">{sub.phone_number}</span></div>
                      <div><span className="text-gray-500 block mb-1">Email Address</span><span className="font-semibold text-gray-900 text-base">{sub.email}</span></div>
                      <div className="sm:col-span-3"><span className="text-gray-500 block mb-1">Home Address</span><span className="font-semibold text-gray-900 text-base">{sub.home_address}</span></div>
                    </div>

                    {/* Media Download Assets */}
                    <div className="pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Passport */}
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="text-xs font-semibold text-gray-700">Passport Photo</p>
                            <a href={sub.passport_url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center space-x-1 mt-0.5">
                              <span>View Full Size</span><ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownloadFile(sub.passport_url, `passport-${sub.full_name}.jpg`, `${subId}-passport`)}
                          disabled={downloadingId === `${subId}-passport`}
                          className="p-2.5 bg-white border rounded-lg hover:bg-gray-100 text-gray-700 shadow-sm flex items-center justify-center disabled:opacity-50"
                          title="Download Passport"
                        >
                          {downloadingId === `${subId}-passport` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* ID Card */}
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="text-xs font-semibold text-gray-700">National ID / NIN</p>
                            <a href={sub.id_card_url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center space-x-1 mt-0.5">
                              <span>View Document</span><ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownloadFile(sub.id_card_url, `id-card-${sub.full_name}.jpg`, `${subId}-id`)}
                          disabled={downloadingId === `${subId}-id`}
                          className="p-2.5 bg-white border rounded-lg hover:bg-gray-100 text-gray-700 shadow-sm flex items-center justify-center disabled:opacity-50"
                          title="Download ID"
                        >
                          {downloadingId === `${subId}-id` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Signature */}
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <PenTool className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="text-xs font-semibold text-gray-700">Signature Asset</p>
                            <a href={sub.signature_url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center space-x-1 mt-0.5">
                              <span>View Signature</span><ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownloadFile(sub.signature_url, `signature-${sub.full_name}.jpg`, `${subId}-sig`)}
                          disabled={downloadingId === `${subId}-sig`}
                          className="p-2.5 bg-white border rounded-lg hover:bg-gray-100 text-gray-700 shadow-sm flex items-center justify-center disabled:opacity-50"
                          title="Download Signature"
                        >
                          {downloadingId === `${subId}-sig` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. TRUSTEE FORM VIEW
  if (submitted) {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center p-4">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm max-w-lg w-full text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">Submission Successful!</h2>
          <p className="text-gray-600">
            Thank you. Your details and verification documents have been securely submitted for the ELI7 Foundation registration.
          </p>
          <button
            onClick={() => { setSubmitted(false); setViewMode('locked'); }}
            className="text-sm font-medium text-blue-600 hover:underline pt-2 inline-block"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-4xl mx-auto space-y-4">
        <button
          onClick={() => setViewMode('locked')}
          className="text-xs text-gray-500 hover:text-black flex items-center space-x-1 font-medium"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Exit to Login</span>
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-12">
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ELI7 Foundation</h1>
            <p className="text-sm text-gray-600 mt-2">Board of Trustees Registration Form</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none bg-white text-base"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Chief">Chief</option>
                  <option value="Alhaji">Alhaji</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Elder">Elder</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (As on ID)</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  required
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                  placeholder="e.g. Business Owner"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                  placeholder="08012345678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                required
                value={formData.homeAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none text-base"
                placeholder="Enter your residential address"
              />
            </div>

            {/* Passport Field */}
            <div className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-900 flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span>Passport Photograph (Selfie / Portrait)</span>
                </label>
                {passportPreview && <span className="text-xs text-green-600 font-semibold">✓ Attached</span>}
              </div>
              {!passportPreview ? (
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => startCamera('passport', 'user')} className="px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 flex items-center space-x-2">
                    <Camera className="w-4 h-4" /><span>Take Photo</span>
                  </button>
                  <label className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 cursor-pointer flex items-center">
                    <span>Upload File</span><input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'passport')} className="hidden" />
                  </label>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <img src={passportPreview} alt="Passport Preview" className="w-20 h-20 object-cover rounded-lg border" />
                  <button type="button" onClick={() => handleRemoveFile('passport')} className="px-3 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium hover:bg-red-100 flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" /><span>Retake / Delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* ID Card Field */}
            <div className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-900 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span>National ID (NIN Slip, Voter's Card, etc.)</span>
                </label>
                {idCardPreview && <span className="text-xs text-green-600 font-semibold">✓ Attached</span>}
              </div>
              {!idCardPreview ? (
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => startCamera('idCard', 'environment')} className="px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 flex items-center space-x-2">
                    <Camera className="w-4 h-4" /><span>Snap ID Card</span>
                  </button>
                  <label className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 cursor-pointer flex items-center">
                    <span>Upload File</span>
                    {/* Updated to accept images, PDFs, and Word docs */}
                    <input type="file" accept="image/*,.pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'idCard')} className="hidden" />
                  </label>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  {/* Conditionally render PDF iframe, Word Doc icon, or Image */}
                  {idCardFile?.type === 'application/pdf' ? (
                    <iframe src={idCardPreview} title="ID Preview" className="w-24 h-16 rounded-lg border"></iframe>
                  ) : idCardFile?.type === 'application/msword' || idCardFile?.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? (
                    <div className="w-24 h-16 rounded-lg border flex items-center justify-center bg-white">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                  ) : (
                    <img src={idCardPreview} alt="ID Preview" className="w-24 h-16 object-cover rounded-lg border" />
                  )}
                  <button type="button" onClick={() => handleRemoveFile('idCard')} className="px-3 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium hover:bg-red-100 flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" /><span>Retake / Delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* Signature Field */}
            <div className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-900 flex items-center space-x-2">
                  <PenTool className="w-4 h-4 text-gray-600" />
                  <span>Signature Upload (Sign on paper & snap)</span>
                </label>
                {signaturePreview && <span className="text-xs text-green-600 font-semibold">✓ Attached</span>}
              </div>
              {!signaturePreview ? (
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => startCamera('signature', 'environment')} className="px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 flex items-center space-x-2">
                    <Camera className="w-4 h-4" /><span>Snap Signature</span>
                  </button>
                  <label className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 cursor-pointer flex items-center">
                    <span>Upload File</span><input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'signature')} className="hidden" />
                  </label>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <img src={signaturePreview} alt="Signature Preview" className="w-24 h-16 object-cover rounded-lg border" />
                  <button type="button" onClick={() => handleRemoveFile('signature')} className="px-3 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium hover:bg-red-100 flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" /><span>Retake / Delete</span>
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center space-x-2 disabled:opacity-50 text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting details...</span>
                </>
              ) : (
                <span>Submit Trustee Information</span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Live Webcam Modal */}
      {activeCameraType && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 relative">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Take Snapshot</h3>
              <button onClick={stopCamera} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-6 h-6" /></button>
            </div>
            <div className="relative bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={toggleCameraDirection} className="px-4 py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center space-x-2">
                <SwitchCamera className="w-5 h-5" /><span>Switch ({facingMode === 'user' ? 'Front' : 'Back'})</span>
              </button>
              <button type="button" onClick={captureSnapshot} className="flex-1 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition">
                Capture Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}