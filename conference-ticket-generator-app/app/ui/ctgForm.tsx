import FormField from "@/app/ui/formField";
import FormUpload from "./formUpload";
import PrimaryButton from "./primaryButton";
import { useState } from "react";

export default function CtgForm() {
    // const [selectedFile, setSelectedFile] = useState()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [githubUsername, setGithubUsername] = useState("")

    // const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedFile(event.target.files[0])
    // }

    const handleFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleGithubUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGithubUsername(event.target.value)
    }

    return (
        <form id="form" className="flex flex-col gap-6 max-w-md w-md">
            {/* Upload Avatar */}
            <FormUpload label="Upload Form" id="uploadForm" />

            {/* Full Name */}
            <FormField label="Full Name" id="fullName" type="text" value={fullName} onChange={handleFullName} />

            {/* Email */}
            <FormField label="Email Address" id="emailAddress" type="text" value={email} onChange={handleEmail} />

            {/* Github Username */}
            <FormField label="Github Username" id="githubUsername" type="text" value={githubUsername} onChange={handleGithubUsername} />

            <PrimaryButton label="Generate my ticket" type="submit" />
        </form>
    )
}