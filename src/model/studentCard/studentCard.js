var StudentCard = (function () {
    function StudentCard(imageId, name, description, schedule) {
        this._imageId = imageId;
        this._name = name;
        this._description = description;
        this._schedule = schedule;
    }
    Object.defineProperty(StudentCard.prototype, "ImageId", {
        get: function () {
            return this._imageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentCard.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentCard.prototype, "Description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentCard.prototype, "Schedule", {
        get: function () {
            return this._schedule;
        },
        enumerable: true,
        configurable: true
    });
    return StudentCard;
}());
export { StudentCard };
//# sourceMappingURL=studentCard.js.map