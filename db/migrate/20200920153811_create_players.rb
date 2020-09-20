class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.boolean "ai", default: false
      t.integer "game_id"
      t.timestamps
    end
  end
end
