class PractitionersController < ApplicationController
  before_action :set_practitioner, only: [:show, :update, :destroy]

  # GET /practitioners
  def index
    practitioners = Practitioner.all

    render json: practitioners.to_json(pract_serializer_options)
  end

  # GET /practitioners/1
  def show
    practitioner = Practitioner.find(params[:id])
    render json: practitioner.to_json(pract_serializer_options)
  end

  # POST /practitioners
  def create
    @practitioner = Practitioner.new(practitioner_params)

    if @practitioner.save
      render json: @practitioner, status: :created, location: @practitioner
    else
      render json: @practitioner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /practitioners/1
  def update
    if @practitioner.update(practitioner_params)
      render json: @practitioner
    else
      render json: @practitioner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /practitioners/1
  def destroy
    @practitioner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_practitioner
      @practitioner = Practitioner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def practitioner_params
      params.require(:practitioner).permit(:name, :specialties, :about, :zip_code, :languages, :image)
    end

    def
      pract_serializer_options() {
        :include => {
            :user_practitioners => {
              :except => [:created_at, :updated_at]
            }
        },
        :except => [:created_at, :updated_at]
      }
    end
end
