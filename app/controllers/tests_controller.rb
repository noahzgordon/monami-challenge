class TestsController < ApplicationController
    def show
        case params[:id]
        when 'colors'
            render Test::ColorsComponent.new
        when 'modal'
            render Test::ModalComponent.new
        when 'stimulus'
            render Test::StimulusComponent.new
        else raise "Invalid test type: #{params[:id]}"
        end
    end
end
