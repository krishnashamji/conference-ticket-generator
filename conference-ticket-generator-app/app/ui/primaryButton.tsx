interface PrimaryButtonProps {
    label: string
}

export default function PrimaryButton({ label }: PrimaryButtonProps) {
    return (
        <button className="font-bold w-full bg-[#F67464] text-[#1B163F] py-3 rounded-xl text-lg">{label}</button>
    )
}