import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StepsSection from './components/StepsSection';
import CatalogSection from './components/CatalogSection';
import TeachersSection from './components/TeachersSection';
import VirtualClassroomDemo from './components/VirtualClassroomDemo';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

// Modals
import LoginModal from './components/modals/LoginModal';
import BookingModal from './components/modals/BookingModal';
import PaymentModal from './components/modals/PaymentModal';
import VideoPresentationModal from './components/modals/VideoPresentationModal';

export default function App() {
  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Selected entities for modals
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState(null);
  const [selectedTeacherForBooking, setSelectedTeacherForBooking] = useState(null);
  const [selectedTeacherForVideo, setSelectedTeacherForVideo] = useState(null);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState('clase-individual');

  // Handlers
  const handleOpenBooking = (courseTitle = null, teacherName = null) => {
    setSelectedCourseForBooking(courseTitle);
    setSelectedTeacherForBooking(teacherName);
    setIsBookingOpen(true);
  };

  const handleOpenVideo = (teacher) => {
    setSelectedTeacherForVideo(teacher);
    setIsVideoModalOpen(true);
  };

  const handleOpenPayment = (planId = 'clase-individual') => {
    setSelectedPlanForPayment(planId);
    setIsPaymentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-500 selection:text-white">
      {/* 1. Header / Navbar with Iniciar Sesión simulation and booking */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section with Welcome Message, Value Prop & Smart Search */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenLogin={() => setIsLoginOpen(true)}
          onSelectSubject={(subject) => handleOpenBooking(subject)}
        />

        {/* Pasos para Empezar: 1. Elige Área, 2. Docente, 3. Reserva */}
        <StepsSection 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 2. Catálogo de Materias y Talleres: Bloque 1 (Ciencias) & Bloque 2 (Artes) */}
        <CatalogSection
          onOpenBooking={(courseTitle, teacherName) => handleOpenBooking(courseTitle, teacherName)}
        />

        {/* 3. Perfiles de Docentes con Video de Presentación y Horarios sincronizados */}
        <TeachersSection
          onOpenBooking={(courseTitle, teacherName) => handleOpenBooking(courseTitle, teacherName)}
          onOpenVideoModal={handleOpenVideo}
        />

        {/* 4. Aula Virtual con Doble Enfoque (Pizarra digital de Ciencias & Sala acústica de Artes) + Paneles */}
        <VirtualClassroomDemo />

        {/* 5. Tarifas y Pasarela de Pagos (Clases individuales vs Paquetes, QR Yape/Plin, Tarjetas, Bancos) */}
        <PricingSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenPayment={(planId) => handleOpenPayment(planId)}
        />

        {/* 6. Casos de Éxito y Testimonios con Notas y Logros Artísticos */}
        <TestimonialsSection />

        {/* Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCourse={selectedCourseForBooking}
        preselectedTeacher={selectedTeacherForBooking}
        onOpenPayment={() => handleOpenPayment('clase-individual')}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        selectedPlanId={selectedPlanForPayment}
      />

      <VideoPresentationModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        teacher={selectedTeacherForVideo}
        onBookTeacher={(teacher) => handleOpenBooking(teacher.subjects[0], teacher.name)}
      />
    </div>
  );
}
