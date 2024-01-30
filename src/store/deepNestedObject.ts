import { create } from "zustand";

// type State = {
//   profile: {
//     name:string
//     obj2: {
//       obj3: {
//         name: string;
//       };
//     };
//   };
//   updateObj: (obj: object) => void;
// };

export const useDeepNestedObjectStore = create((set) => ({
  profile: {
    name: "周杰坤",
    details: {
      age: 18,
      address: {
        province: "黑龙江",
        city: "铁岭"
      }
    }
  },
  updateObj: (data) => set(() => ({}))
}));
