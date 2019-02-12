import axios from 'axios';
import { firebaseDB, firebaseStorageRef } from '../../DB/dbInit'

const api = {
    bookList: 'book list api'
}

function fetchBookList() {
    return firebaseDB.collection('bookList').orderBy('idx').get()
}

function fetchBookDetail(idx) {
    return firebaseDB.collection('bookList').doc(idx).get();
}

function fetchImage(imgUrl) {
    return axios.get(imgUrl, { responseType: "blob" });
}

function saveBookInfo(bookInfo) {
    console.log('saveBookInfo : ', bookInfo)
    return firebaseDB.collection('bookList').doc(bookInfo.idx + '').set(bookInfo);
}

function saveBookImage(file) {
    // console.log(firebaseStorageRef)
    const imageRef = firebaseStorageRef.child(file.name)
    return imageRef.put(file)

    // console.log(firebaseDB.storage().ref())
}

function deleteBookInfo(idx) {
    return firebaseDB.collection('bookList').doc(idx.toString()).delete();
}

export {
    fetchBookList,
    fetchBookDetail,
    fetchImage,
    saveBookInfo,
    deleteBookInfo,
    saveBookImage
}