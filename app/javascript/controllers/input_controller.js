import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "display", "field" ]

  connect() {
  }
}
