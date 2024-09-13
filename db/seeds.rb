require_relative 'seed_data'

Kingdom.destroy_all
Location.destroy_all
Person.destroy_all
Continent.destroy_all

continents = Continent.create([
  { name: 'Westeros' },
  { name: 'Essos' },
  { name: 'Sothoryos' },
  { name: 'Ulthos' }
])

KINGDOMS.each do |kingdom_data|
  Kingdom.create(name: kingdom_data[:name], description: kingdom_data[:description], continent: continents.find { |c| c.name == 'Westeros' })
end

LOCATIONS.each do |location_data|
  kingdom = Kingdom.find_by(name: location_data[:kingdom_name])
  Location.create(name: location_data[:name], description: location_data[:description], kingdom: kingdom)
end

PERSON.each do |person_data|
  kingdom = Kingdom.find_by(name: person_data[:kingdom_name])
  Person.create(name: person_data[:name], description: person_data[:description], kingdom: kingdom)
end
