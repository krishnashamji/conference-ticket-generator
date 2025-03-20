interface FormUploadProps {
    label: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string
}

export default function FormUpload({ label, id, onChange, error }: FormUploadProps) {
    return (
        <div className="flex flex-col gap-2 items-start w-full">
            <label className="text-lg text-[#EAE6FD]">{label}</label>
            <div className="relative w-full">
                <input
                    id={id}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    placeholder=""
                    className="flex flex-col items-center justify-center w-full border border-dashed border-[#8A84A8] bg-white bg-opacity-10 rounded-xl px-3 py-8 text-center cursor-pointer hover:bg-opacity-20 [&::file-selector-button]:hidden"
                    onChange={onChange}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="p-2 border border-[#413D62] bg-[#332F52] rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30"><path fill="#F57463" fillRule="evenodd" d="M21.894 11.252a.264.264 0 0 1-.229-.225c-.368-2.634-2.51-5.924-6.663-5.924-4.465 0-6.3 3.636-6.657 5.928a.264.264 0 0 1-.228.22c-2.95.362-4.945 2.622-4.945 5.729a5.802 5.802 0 0 0 3.423 5.277 6.274 6.274 0 0 0 2.305.468h2.528a.45.45 0 0 0 .45-.45c0-.267-.233-.472-.5-.484a3.077 3.077 0 0 1-2.049-.9 3.123 3.123 0 0 1 0-4.418l3.461-3.462c.147-.146.307-.277.479-.392.076-.05.158-.085.236-.129.1-.054.196-.114.301-.158.1-.04.206-.065.308-.096.092-.027.181-.062.276-.081.191-.039.384-.056.578-.059.011 0 .022-.004.034-.004.01 0 .018.003.027.004.196.002.391.02.584.059.094.019.18.053.271.08.105.031.211.055.313.098.1.042.193.098.288.15.084.046.17.083.25.137.154.103.295.221.428.349.016.014.034.024.049.039l3.463 3.463a3.124 3.124 0 0 1 0 4.42c-.558.56-1.284.86-2.05.897-.266.013-.497.219-.497.486 0 .249.202.451.451.451h2.512c.435 0 1.314-.06 2.344-.473a5.794 5.794 0 0 0 3.394-5.272c0-3.104-1.991-5.363-4.935-5.728Z" clipRule="evenodd" /><path fill="#F57463" fillRule="evenodd" d="M18.464 19.62a.936.936 0 0 0 .663-1.6l-3.464-3.464a.938.938 0 0 0-.664-.275l-.014.002a.932.932 0 0 0-.65.274l-3.462 3.462a.936.936 0 1 0 1.326 1.325l1.864-1.862v6.479a.937.937 0 1 0 1.875 0v-6.48l1.864 1.863a.93.93 0 0 0 .662.275Z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-[#EAE6FD]">Drag and drop or click to upload</span>
                </div>
            </div>
            {error && (
                <div className="flex gap-2">
                    <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                    >
                        <path
                            stroke="#BC8990"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
                        />
                        <path fill="#BC8990" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
                        <path
                            stroke="#BC8990"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.004 10.462V7.596M8 5.569v-.042"
                        />
                    </svg>
                    <span className="text-xs text-[#BC8990]">{error}</span>
                </div>
            )}
        </div>
    )
}

