require 'test_helper'

class PractitionersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @practitioner = practitioners(:one)
  end

  test "should get index" do
    get practitioners_url, as: :json
    assert_response :success
  end

  test "should create practitioner" do
    assert_difference('Practitioner.count') do
      post practitioners_url, params: { practitioner: { about: @practitioner.about, image: @practitioner.image, languages: @practitioner.languages, name: @practitioner.name, specialties: @practitioner.specialties, zip_code: @practitioner.zip_code } }, as: :json
    end

    assert_response 201
  end

  test "should show practitioner" do
    get practitioner_url(@practitioner), as: :json
    assert_response :success
  end

  test "should update practitioner" do
    patch practitioner_url(@practitioner), params: { practitioner: { about: @practitioner.about, image: @practitioner.image, languages: @practitioner.languages, name: @practitioner.name, specialties: @practitioner.specialties, zip_code: @practitioner.zip_code } }, as: :json
    assert_response 200
  end

  test "should destroy practitioner" do
    assert_difference('Practitioner.count', -1) do
      delete practitioner_url(@practitioner), as: :json
    end

    assert_response 204
  end
end
