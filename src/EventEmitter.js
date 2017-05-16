class EventEmitter {
  static subscriptions = [];

  static subscribe(callback) {
    this.subscriptions.push(callback);

    return () => {
      this.subscriptions = this.subscriptions.filter((f) => (f !== callback));
    }
  }

  static trigger() {
    this.subscriptions.forEach((callback) => callback());
  }
}

export default EventEmitter;
