let tv = {
  currentChannel: 1,
  nextChannel: function () {
    this.currentChannel++;
  },
  previousChannel: function () {
    this.currentChannel--;
  },
  setChannel: function (number) {
    this.currentChannel = number;
  }
};

tv.nextChannel();
console.log(tv.currentChannel);

tv.previousChannel();
console.log(tv.currentChannel);

tv.setChannel(15);
console.log(tv.currentChannel);
