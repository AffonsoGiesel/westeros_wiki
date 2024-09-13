FactoryBot.define do
    factory :location do
      name { "Casterly Rock" }
      description { "The seat of House Lannister." }
      association :kingdom
    end
  end