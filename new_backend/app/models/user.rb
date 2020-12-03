class User < ApplicationRecord
    has_many :user_practitioners
    has_many :practitioners, through: :user_practitioners
end
