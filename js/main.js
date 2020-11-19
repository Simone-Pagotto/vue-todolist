const todolistApp = new Vue ({
  el:'#root',
  data: {
    messageArray: [],
    message: '',
    selectedArray:[]
  },
  methods: {
    addAction : function(){
      this.messageArray.push(this.message);
      this.message = "";
      this.selectedArray.push(false);
    },
    removeMessage : function(index){
      this.messageArray.splice(index,1)
      this.selectedArray.splice(index,1);
    },
    selectItem: function(index){
      this.$set(this.selectedArray,index,!(this.selectedArray[index]));
    }
  }
})
