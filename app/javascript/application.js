// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// third party imports
import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"

// note: not hard to guess the name of this variable and turn on dev mode in production
// so should be wary of leaking development logs and possibly make this name harder to guess
if (window.RAILS_ENV !== 'production') {
    console.log(`Initializing applications.js in ${window.RAILS_ENV}`);
}

// our imports
import "controllers"
