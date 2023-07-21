import { create } from 'zustand';

type ModelStore = {
    loading: boolean; 
    setLoading: (loading: boolean) => void; 
};

const useModelStore = create<ModelStore>((set) => ({
    loading: true, 
    setLoading: (loading: boolean) => set({loading: loading}),
}));

export default useModelStore; 
