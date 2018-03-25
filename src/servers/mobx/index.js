import {
    loginStore
} from '../../stores/view'

export default function () {
    return () => {
        return function getAllStores() {
            return {
                'loginStore': loginStore
            }
        }
    }
}