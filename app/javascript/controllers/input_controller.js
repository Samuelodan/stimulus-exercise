import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "display", "field" ]

  connect() {
  }

  warnAboutLength() {
    let lengthLimit = 40;
    let currentLength = this.fieldTarget.value.length;

    if (currentLength >= (lengthLimit - 5)) {
      this.displayTarget.textContent = `${currentLength} / ${lengthLimit}`
    } else {
      this.displayTarget.textContent = ""
    }
  }
}
