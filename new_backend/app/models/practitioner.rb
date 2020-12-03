class Practitioner < ApplicationRecord
    has_many :user_practitioners
    has_many :users, through: :user_practitioners
end
