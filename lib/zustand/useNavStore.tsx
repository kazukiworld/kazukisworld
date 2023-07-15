import { create } from 'zustand';

type NavStore = {
    currentSection: string | null;
    sections: string[] | null;
    setCurrentSection: (currentSection: string | null) => void;
    setSections: (section: string[]) => void;
};

const useNavStore = create<NavStore>((set) => ({
    currentSection: null,
    sections: ["Introduction", "Featured Project", "Values", "Interests", "Current Project"],
    setCurrentSection: (section: string | null) => set({ currentSection: section }),
    setSections: (sections: string[] | null) => set({ sections: sections }),
}));

export default useNavStore; 
