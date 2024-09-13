class CreateKingdoms < ActiveRecord::Migration[7.2]
  def change
    create_table :kingdoms do |t|
      t.string :name
      t.text :description
      t.references :continent, null: false, foreign_key: true

      t.timestamps
    end
  end
end
