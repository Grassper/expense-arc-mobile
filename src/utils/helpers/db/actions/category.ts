import Realm from 'realm';
const {UUID} = Realm.BSON;
import {config} from '../config';
import {CategoryAndTransferTypes} from './declaration';

export const addCategory = (categoryObj: CategoryAndTransferTypes) =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                const writeObj = {
                    _id: new UUID(),
                    ...categoryObj
                };
                realm.write(() => {
                    realm.create('Category', writeObj);
                    resolve(writeObj._id);
                });
                realm.close();
            })
            .catch(error => reject(error));
    });

export const updateCategory = (categoryObj: CategoryAndTransferTypes) =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                const writeObj = {
                    _id: new UUID(),
                    ...categoryObj
                };
                realm.write(() => {
                    realm.create('Category', writeObj);
                    resolve(writeObj);
                });
                realm.close();
            })
            .catch(error => reject(error));
    });

export const removeCategory = (id: string) =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                realm.write(() => {
                    const obj = realm.objectForPrimaryKey('Category', id);
                    realm.delete(obj);
                    resolve(`category with id:${id} is deleted`);
                });
                realm.close();
            })
            .catch(error => reject(error));
    });

export const removeCategoryAll = () =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                realm.write(() => {
                    const obj = realm.objects('Category');
                    realm.delete(obj);
                    resolve('All category documents deleted');
                });
                realm.close();
            })
            .catch(error => reject(error));
    });

export const getCategory = (id: string) =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                realm.write(() => {
                    const obj = realm.objectForPrimaryKey('Category', id);
                    resolve(obj?.toJSON);
                });
                realm.close();
            })
            .catch(error => reject(error));
    });

export const getCategoryAll = () =>
    new Promise((resolve, reject) => {
        Realm.open(config)
            .then(realm => {
                realm.write(() => {
                    const obj = realm.objects('Category');
                    resolve(obj);
                });
            })
            .catch(error => reject(error));
    });
