import {
    fetchBookList,
    fetchBookDetail,
    fetchImage,
    saveBookInfo,
    deleteBookInfo,
    saveBookImage
} from '../api/index'
import axios from 'axios';

export default {
    FETCH_BOOKLIST(context) {
        var bookList = []
        return fetchBookList()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    bookList.push(doc.data())
                })
                context.commit('SET_BOOKLIST', bookList);
                // return querySnapshot;
            })
            .catch(error => console.log(error))
    },
    FETCH_BOOKDETAIL(context, idx) {
        return fetchBookDetail(idx)
            .then(documentSnapshot => {
                // axios.get(documentSnapshot.data().imgUrl)
                //     .then(res => {
                //         console.log(typeof res.data)
                //     })
                //     .catch(error => console.log(error))
                context.commit('SET_BOOKDETAIL', documentSnapshot.data())
            })
            .catch(error => console.log(error))
    },
    FETCH_IMAGE(context, imgUrl) {
        return fetchImage(imgUrl)
            .then(res => {
                // console.log(typeof res.data, res.data)
                context.commit('SET_IMAGE', res.data)
            })
            .catch(error => console.log(error))
    },
    SAVE_BOOKINFO(context, payload) {
        console.log('SAVE_BOOKINFO : ', payload)
        return saveBookInfo(payload)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    },
    SAVE_BOOKIMAGE(context, payload) {
        return saveBookImage(payload.file)
            .then(res => res.ref.getDownloadURL())
            .catch(error => console.log(error))
    },
    DELETE_BOOKINFO(context, payload) {
        return deleteBookInfo(payload)
            .then(res => {
                console.log(payload)
                context.commit('DELETE_BOOKINFO', payload)
            }).catch(error => {
                console.log(error)
            })
    }
}