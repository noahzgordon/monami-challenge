import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = window.RAILS_ENV != null
window.Stimulus   = application

export { application }
