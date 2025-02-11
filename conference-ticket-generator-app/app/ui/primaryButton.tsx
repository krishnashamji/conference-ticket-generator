interface PrimaryButtonProps {
    label: string;
    type: "button" | "submit" | "reset";
}

export default function PrimaryButton({ label, type }: PrimaryButtonProps) {
    return (
        <button type={type} className="font-bold w-full bg-[#F67464] text-[#1B163F] py-3 rounded-xl text-lg">{label}</button>
    )
}