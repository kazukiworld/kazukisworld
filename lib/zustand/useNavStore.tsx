import { create } from 'zustand';

type NavStore = {
    currentSection: string | null;
    currentInfo: string | null;
    sections: string[] | null;
    infos: string [] | null; 
    openModal: boolean;
    openLoading: boolean; 
    loading: boolean; 
    setCurrentSection: (currentSection: string | null) => void;
    setSections: (section: string[]) => void;
    setCurrentInfo: (currentInfo: string | null) => void;
    setInfos: (infos: string[]) => void;
    setOpenModal: (openModal: boolean) => void;
    setOpenLoading: (openLoading: boolean) => void;
};

const useNavStore = create<NavStore>((set) => ({
    currentSection: null,
    sections: ["Introduction", "Featured Project", "Values", "Interests", "Current Project"],
    currentInfo: null,
    infos: [],
    openModal: false,
    openLoading: true,
    loading: true, 
    setCurrentSection: (section: string | null) => set({ currentSection: section }),
    setSections: (sections: string[] | null) => set({ sections: sections }),
    setCurrentInfo: (info: string | null) => set({ currentInfo: info }),
    setInfos: (infos: string[] | null) => set({ infos: infos }),
    setOpenModal: (openModal: boolean) => set({openModal: openModal}),
    setOpenLoading: (openLoading: boolean) => set({openLoading: openLoading}),
}));

export default useNavStore; 
