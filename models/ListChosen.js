// ListChosen.js - Quản lý danh sách các mục đã chọn (quản lý trạng thái)

class ListChosen {
    constructor() {
        this.chosenItems = {
            shirt: null,
            pants: null,
            shoes: null,
            bag: null,
            necklace: null,
            hairstyle: null,
            background: null,
        };
    }

    // Thêm item đã chọn vào danh mục tương ứng
    addItem(category, item) {
        this.chosenItems[category] = item;
    }

    // Lấy item đã chọn theo danh mục
    getItem(category) {
        return this.chosenItems[category];
    }

    // Lấy toàn bộ các item đã chọn
    getChosenItems() {
        return this.chosenItems;
    }
}

export default ListChosen;
