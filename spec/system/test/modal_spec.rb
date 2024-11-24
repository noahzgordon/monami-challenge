# frozen_string_literal: true

require "rails_helper"

RSpec.describe "modal functionality", type: :system do
  it "opens and dismisses the modal" do
    visit test_path('modal')
    modal_button = page.find("#modal-button")

    expect(page).not_to have_selector("#test-modal")
    expect(page).not_to have_text("Modal Text!")

    modal_button.click

    expect(page).to have_selector("#test-modal")
    expect(page).to have_text("Modal Text!")
  end
end
