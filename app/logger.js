class Logger {
  constructor() {
    this.entries = [];
    this.logElem = document.querySelector(".js-log");
  }

  addEntry(logEntry) {
    this.entries.push(logEntry);
    console.log(logEntry);
    this.onLogUpdate(logEntry);
  }

  onLogUpdate(logEntry) {
    const p = document.createElement("p");
    p.classList.add("log-entry");
    p.innerHTML = logEntry;
    this.logElem.appendChild(p);
  }
}

const logger = new Logger();

export default logger;
