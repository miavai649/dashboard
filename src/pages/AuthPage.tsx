import { useState } from 'react';
import HeroSection from '../components/auth/HeroSection';
import AuthTabs from '../components/auth/AuthTabs';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

export default function AuthPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <>
      <main className='relative z-10 min-h-screen flex items-center justify-center p-7'>
        <div className='w-full max-w-6xl grid md:grid-cols-[1fr_420px] bg-white/2 backdrop-blur-sm border border-white/5 rounded-xl shadow-2xl overflow-hidden'>
          <HeroSection />
          <section className='p-8 bg-black/10'>
            <AuthTabs showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
            {showLoginForm ? <LoginForm /> : <RegisterForm onCancel={() => setShowLoginForm(true)} />}
          </section>
        </div>
      </main>
    </>
  );
}
