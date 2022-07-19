class InsertionSort {
    list:number[];

    constructor(list: number[]) {
        this.list = list;
    }
    getList(){
        return this.list;
    }
    insertionSort(){
        for(let i=1; i< this.list.length; i++){
            let temp = this.list[i];
            let j = i-1;
            while (j>=0 && this.list[j]>temp){
                this.list[j + 1]=this.list[j];
                j--;
            }
            this.list[j+1]=temp;
        }
        console.log(this.list)
    }
}
let list=new InsertionSort([12, 11, 13, 5, 6 ]);
list.insertionSort();