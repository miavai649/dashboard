interface Props {
  showLoginForm: boolean;
  setShowLoginForm: (value: boolean) => void;
}

export default function AuthTabs({ showLoginForm, setShowLoginForm }: Props) {
  return (
    <div className='flex gap-3 mb-8'>
      {['Login', 'Register'].map((tab) => (
        <button
          key={tab}
          onClick={() => setShowLoginForm(tab === 'Login')}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            (showLoginForm && tab === 'Login') || (!showLoginForm && tab === 'Register')
              ? 'bg-blue-500/20 text-primary-300 border border-blue-500/30 shadow-sm'
              : 'text-gray-500 hover:text-gray-300'
          }`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
