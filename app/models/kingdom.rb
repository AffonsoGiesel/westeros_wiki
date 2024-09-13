class Kingdom < ApplicationRecord
  belongs_to :continent
  has_many :conflicts
  has_many :locations
  has_many :people
  validates :name, presence: true
  validates :description, presence: true
end
