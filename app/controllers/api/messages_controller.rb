class Api::MessagesController < Api::ApiController
  before_action :set_message, only: %i[show update destroy]

  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    @message = Message.find(params[:id])
    render json: @message
  end
end
