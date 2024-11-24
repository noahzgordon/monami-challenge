// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// third party imports
import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"

if (window._RAILS_ENV == null) {
    console.error('application.js initializing before Rails env is set! Something is wrong.');
} else if (window._RAILS_ENV !== 'production') {
    console.log(`Initializing applications.js in ${window._RAILS_ENV}`);
}

// our imports
import "controllers"
