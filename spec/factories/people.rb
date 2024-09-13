FactoryBot.define do
    factory :person do
      name { "Tyrion Lannister" }
      description { "A witty and intelligent member of House Lannister." }
      association :kingdom
  
      trait :with_location do
        association :location
      end
    end
  end