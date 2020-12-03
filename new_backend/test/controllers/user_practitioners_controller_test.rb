require 'test_helper'

class UserPractitionersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_practitioner = user_practitioners(:one)
  end

  test "should get index" do
    get user_practitioners_url, as: :json
    assert_response :success
  end

  test "should create user_practitioner" do
    assert_difference('UserPractitioner.count') do
      post user_practitioners_url, params: { user_practitioner: { likes: @user_practitioner.likes, practitioner_id: @user_practitioner.practitioner_id, review: @user_practitioner.review, user_id: @user_practitioner.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_practitioner" do
    get user_practitioner_url(@user_practitioner), as: :json
    assert_response :success
  end

  test "should update user_practitioner" do
    patch user_practitioner_url(@user_practitioner), params: { user_practitioner: { likes: @user_practitioner.likes, practitioner_id: @user_practitioner.practitioner_id, review: @user_practitioner.review, user_id: @user_practitioner.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_practitioner" do
    assert_difference('UserPractitioner.count', -1) do
      delete user_practitioner_url(@user_practitioner), as: :json
    end

    assert_response 204
  end
end
