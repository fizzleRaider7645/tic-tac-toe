class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text "state"
      t.integer "turn_count", default: 0
      t.string "name"
      t.timestamps
    end
  end
end
