import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "list" ]
  connect() {
    console.log("does this connect?")
  }

  showHideList() {
    // this.listTarget.classList.toggle("hidden")
    console.log("does this worK?")
    this.listTarget.hidden = true
  }
}
