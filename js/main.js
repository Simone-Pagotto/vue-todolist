const todolistApp = new Vue ({
  el:'#root',
  data: {
    messageArray: [],
    message: '',
    selectFlagArray: []
  },
  methods: {
    addAction : function(){
      this.messageArray.push(this.message);
      this.selectFlagArray.push(false);
    },
    removeMessage : function(index){
      console.log(this.index);
      this.messageArray.splice(index,1);
      this.selectFlagArray.splice(index,1);
    },
    selectItem: function(index){
      this.selectFlagArray[index] = !(this.selectFlagArray[index]);
    }
  }
})
