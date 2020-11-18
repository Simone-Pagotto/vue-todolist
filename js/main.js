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
    removeMessage : function(delIndex){
      console.log(this.delIndex);
      this.messageArray.splice(delIndex,1);
      this.selectFlagArray.splice(delIndex,1);
    },
    selectItem: function(delIndex){
      this.selectFlagArray[delIndex] = !(this.selectFlagArray[delIndex]);
    }
  }
})
