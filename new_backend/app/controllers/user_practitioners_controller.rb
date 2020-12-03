class UserPractitionersController < ApplicationController
  before_action :set_user_practitioner, only: [:show, :update, :destroy]

  # GET /user_practitioners
  def index
    @user_practitioners = UserPractitioner.all

    render json: @user_practitioners
  end

  # GET /user_practitioners/1
  def show
    render json: @user_practitioner
  end

  # POST /user_practitioners
  def create
    @user_practitioner = UserPractitioner.new(user_practitioner_params)

    if @user_practitioner.save
      render json: @user_practitioner, status: :created, location: @user_practitioner
    else
      render json: @user_practitioner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_practitioners/1
  def update
    if @user_practitioner.update(user_practitioner_params)
      render json: @user_practitioner
    else
      render json: @user_practitioner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_practitioners/1
  def destroy
    @user_practitioner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_practitioner
      @user_practitioner = UserPractitioner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_practitioner_params
      params.require(:user_practitioner).permit(:user_id, :practitioner_id, :review, :likes)
    end
end
