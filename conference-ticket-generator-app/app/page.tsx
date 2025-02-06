import CtgLogo from '@/app/ui/ctgLogo'
import CtgForm from './ui/ctgForm';

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto mt-10 mb-32 text-center">
      <CtgLogo />
      <div className="flex-col items-center gap-6">
        <h1 className='leading-[1.25]'>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <h5 className='text-2xl font-bold text-[#D4D1E2]'>Secure your spot at next year's biggest coding conference.</h5>
      </div>
      <CtgForm />
    </div>
  );
}
