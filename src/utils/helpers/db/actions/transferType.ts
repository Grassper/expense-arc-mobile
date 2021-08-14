import Realm from 'realm';

import {OpenDb} from '../config';

const {UUID} = Realm.BSON;

export const addTransferType = async (name: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            realm.create('TransferType', {
                _id: new UUID(),
                name
            });
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const updateTransferType = async (): Promise<void> => {};

export const removeTransferType = async (id: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objectForPrimaryKey('TransferType', id);
            realm.delete(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const removeTransferTypeAll = async (): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objects('TransferType');
            realm.delete(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getTransferType = async (id: string): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objectForPrimaryKey('TransferType', id);
            console.log(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};

export const getTransferTypeAll = async (): Promise<void> => {
    try {
        const realm = await OpenDb();
        realm.write(() => {
            const obj = realm.objects('TransferType');
            console.log(obj);
        });
        realm.close();
    } catch (err) {
        console.log(err, 'error');
    }
};
