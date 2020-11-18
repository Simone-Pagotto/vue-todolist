const todolistApp = new Vue ({
  el:'#root',
  data: {
    messageArray: [],
    message: '',
    selected: null
  },
  methods: {
    addAction : function(){
      this.messageArray.push(this.message);
      this.message = "";
    },
    removeMessage : function(index){
      console.log(this.index);
      this.messageArray.splice(index,1);
    },
    selectItem: function(index){
      this.selected = index;
    }
  }
})
