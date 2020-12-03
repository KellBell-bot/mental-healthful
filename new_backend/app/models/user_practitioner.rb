class UserPractitioner < ApplicationRecord
  belongs_to :user
  belongs_to :practitioner
end
