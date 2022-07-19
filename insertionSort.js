var InsertionSort = /** @class */ (function () {
    function InsertionSort(list) {
        this.list = list;
    }
    InsertionSort.prototype.getList = function () {
        return this.list;
    };
    InsertionSort.prototype.insertionSort = function () {
        for (var i = 1; i < this.list.length; i++) {
            var temp = this.list[i];
            var j = i - 1;
            while (j >= 0 && this.list[j] > temp) {
                this.list[j + 1] = this.list[j];
                j--;
            }
            this.list[j + 1] = temp;
        }
        console.log(this.list);
    };
    return InsertionSort;
}());
var list = new InsertionSort([12, 11, 13, 5, 6]);
list.insertionSort();
