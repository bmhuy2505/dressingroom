// ChoseItem.js - Lớp đại diện cho item được chọn

class ChoseItem {
    constructor(id, name, imgURL) {
        this.id = id;
        this.name = name;
        this.imgURL = imgURL;
    }

    // Lấy URL hình ảnh của item
    getImageURL() {
        return this.imgURL;
    }

    // Lấy tên của item
    getName() {
        return this.name;
    }
}

export default ChoseItem;
