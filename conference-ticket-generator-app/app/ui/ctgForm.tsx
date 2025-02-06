import FormField from "@/app/ui/formField";
import FormUpload from "./formUpload";
import PrimaryButton from "./primaryButton";

export default function CtgForm() {
    return (
        <form className="flex flex-col gap-6 max-w-md w-md">
            {/* Upload Avatar */}
            <FormUpload label="Upload Form" id="uploadForm"/>

            {/* Full Name */}
            <FormField label="Full Name" id="fullName" type="text"/>

            {/* Email */}
            <FormField label="Email Address" id="emailAddress" type="text"/>

            {/* Github Username */}
            <FormField label="Github Username" id="githubUsername" type="text"/>

            <PrimaryButton label="Generate my ticket"/>
        </form>
    )
}