# frozen_string_literal: true

class ModalComponent < ViewComponent::Base
    def initialize(disable_dismiss: false)
        @disable_dismiss = disable_dismiss
    end

    attr_reader :disable_dismiss

    renders_one :title
    renders_one :body
    renders_one :footer
end
