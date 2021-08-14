import Realm from 'realm';

import {OpenDb} from '../config';

const {UUID} = Realm.BSON;

export const addCategory = async (name: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.create('Category', {
                _id: new UUID(),
                name
            });
            console.log(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const updateCategory = async (): Promise<void> => {};

export const removeCategory = async (id: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objectForPrimaryKey('Category', id);
            realm.delete(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const removeCategoryAll = async (): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objects('Category');
            realm.delete(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getCategory = async (id: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objectForPrimaryKey('Category', id);
            console.log(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getCategoryAll = async (): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objects('Category');
            console.log(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};
