class Continent < ApplicationRecord
    has_many :kingdoms, dependent: :destroy
end
