import { observable, computed } from 'mobx';

class Global {
    @observable currentUser = {};

    clear() {
        this.currentUser = {}
    }
}

export default new Global();