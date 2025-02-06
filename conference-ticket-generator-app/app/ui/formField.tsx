
interface FormFieldProps {
    label: string;
    id: string;
    type: string;
}
export default function FormField({ label, id, type}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2 items-start">
            <label className=" text-lg text-[#EAE6FD]" htmlFor={id} >{label}</label>
            <input
                id={id}
                type={type}
                className="bg-opacity-10 w-full border border-[#8A84A8] bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
