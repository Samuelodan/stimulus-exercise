import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "list" ]
  connect() {
  }

  showHideList() {
    // this.listTarget.classList.toggle("hidden")
    this.listTarget.hidden = !this.listTarget.hidden
  }
}