FactoryBot.define do
    factory :kingdom do
      name { "Westerlands" }
      description { "A wealthy kingdom ruled by House Lannister." }
      association :continent
    end
  end