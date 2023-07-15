import { create } from 'zustand';

type NavStore = {
    currentSection: string | null;
    currentInfo: string | null;
    sections: string[] | null;
    infos: string [] | null; 
    setCurrentSection: (currentSection: string | null) => void;
    setSections: (section: string[]) => void;
    setCurrentInfo: (currentInfo: string | null) => void;
    setInfos: (infos: string[]) => void;
};

const useNavStore = create<NavStore>((set) => ({
    currentSection: null,
    sections: ["Introduction", "Featured Project", "Values", "Interests", "Current Project"],
    setCurrentSection: (section: string | null) => set({ currentSection: section }),
    setSections: (sections: string[] | null) => set({ sections: sections }),
    currentInfo: null,
    infos: [],
    setCurrentInfo: (info: string | null) => set({ currentInfo: info }),
    setInfos: (infos: string[] | null) => set({ infos: infos }),
}));

export default useNavStore; 
