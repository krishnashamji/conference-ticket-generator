import { create } from "zustand";

interface FormState {
  file: File | null;
  fullName: string;
  email: string;
  githubUsername: string;
  setFormData: (data: Partial<FormState>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  // Represents the actual state. If we don't have it, the property doesn't exist in the store at all
  file: null,
  fullName: "",
  email: "",
  githubUsername: "",
  
  // setters to modify state
  setFormData: (data) => set((state) => ({ ...state, ...data })),
}));
