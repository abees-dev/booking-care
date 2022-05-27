import { atom } from 'recoil';
export const genderState = atom({
   key: 'genderState',
   default: [],
});

export const roleState = atom({
   key: 'roleState',
   default: null,
});

export const positionState = atom({
   key: 'positionState',
   default: null,
});
