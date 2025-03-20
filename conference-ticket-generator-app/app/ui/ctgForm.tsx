import FormField from "@/app/ui/FormField";
import FormUpload from "./FormUpload";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStore } from "../hooks/formStore";

export default function CtgForm() {
    const [file, setFile] = useState<File | null>(null);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [githubUsername, setGithubUsername] = useState("")

    const [error, setError] = useState("")

    const router = useRouter();
    const setFormData = useFormStore((state) => state.setFormData);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = event.target.files?.[0];

        if (!newFile) {
            setError("Upload your photo (JPG or PNG, max size: 5MB).")
            return
        }

        const maxSize = 5 * 1024 * 1024;
        if (newFile.size > maxSize) {
            setError("Upload your photo (JPG or PNG, max size: 5MB).")
            return
        }

        setError("");
        setFile(newFile);
    }

    const handleFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value
        setEmail(newEmail)

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const emailValidity = emailPattern.test(newEmail);

        if (emailValidity) {
            setError("")
        } else {
            setError("Please enter a valid email address")
        }
    }

    const handleGithubUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGithubUsername(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        if (!file||!email) {
            setError("Field is required")
            return
        }

        setFormData({ file, fullName, email, githubUsername });

        router.push('/ticket');
    }


    return (
        <form onSubmit={handleSubmit} id="form" className="flex flex-col gap-6 max-w-md w-md">

            {/* Upload Avatar */}
            <FormUpload label="Upload Form" id="uploadForm" onChange={handleFileUpload} />

            {/* Full Name */}
            <FormField label="Full Name" id="fullName" type="text" value={fullName} onChange={handleFullName} />

            {/* Email */}
            <FormField label="Email Address" id="emailAddress" type="text" value={email} onChange={handleEmail} error={error} />

            {/* Github Username */}
            <FormField label="Github Username" id="githubUsername" type="text" value={githubUsername} onChange={handleGithubUsername} />

            <PrimaryButton label="Generate my ticket" type="submit" />
            
        </form>
    )
}

// Capture the data
// Store the data
// Check the required data is there
// Construct an object
// Pass object onto next
// 
