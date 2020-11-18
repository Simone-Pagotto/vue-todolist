const todolistApp = new Vue ({
  el:'#root',
  data: {
    messageArray: [],
    message: '',
  },
  methods: {
    addAction : function(){
      this.messageArray.push(this.message);
    },
    removeMessage : function(delIndex){
      console.log(this.delIndex);
      this.messageArray.splice(delIndex,1);
    }
  }
})
