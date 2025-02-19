import CtgLogo from '@/app/ui/CTGLogo'

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto mt-10 mb-32 text-center">
      <CtgLogo />
      <div className="flex-col items-center gap-6">
        <h1 className='leading-[1.25]'>Congrats, <span>NAME</span> Your ticket is ready.</h1>
        <p className=" text-lg text-[#EAE6FD]">We’ve emailed your ticket to <span>EMAIL</span> and will send updates in the run up event.</p>
      </div>
    </div>
  )
}
