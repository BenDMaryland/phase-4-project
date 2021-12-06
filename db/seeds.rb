Car.destroy_all
Car.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

puts "seeding start"

puts "seeding users"

ben= User.create(
    name: "Been", 
    email: "ben@ben.com", 
    photographer: false,
     password: "123")

saim = User.create(
    name: "Saim",
     email: "saim@saim.com",
      photographer: true,
       password: "12345")


dimitri = User.create(
    name: "Dimitri",
     email: "dimitri@dimitri.com", 
     photographer: false, 
     password: "1234567")


puts "seeding cars"

honda = Car.create(
    owned_by_id: ben.id,   
    photographed_by_id: saim.id,
     photo:"https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX176/43f27833-9727-49e2-a3f3-b00d96ab404d.JPG",
      model:"Honda-CRV", 
      year:2006,  
      description: "As good as it was the day I bought it!!")

lambo = Car.create(
    owned_by_id: dimitri.id, 
    photographed_by_id: saim.id,
     photo: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Aventador_ultimae_model_mobile.png",
      model: "Lamborghini Aventador", 
      year: 2021, 
      description: "Super fast!!!")

ford = Car.create(
    owned_by_id: saim.id,
     model: "Ford something",
      year: 2111, 
      description: "It's a car")


puts "seeding reviews"

Review.create(
    car_id: honda.id, 
    user_id: dimitri.id, 
     comment: "Uhh that doesn't look new", 
     rating: 1 )

Review.create(
    car_id: honda.id, 
    user_id: saim.id, 
     comment: "that looks beat up",
      rating: 3 )

Review.create(
    car_id: lambo.id, 
    user_id: ben.id,  
    comment: "Wow!", 
    rating: 5 )

puts "seeding done"






# create_table "cars", force: :cascade do |t|
#   t.integer "owned_by"
#   t.integer "photographed_by"
#   t.string "photo"
#   t.string "description"
#   t.string "model"
#   t.integer "year"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "reviews", force: :cascade do |t|
#   t.integer "car_id"
#   t.integer "user_id"
#   t.string "comment"
#   t.integer "rating"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "users", force: :cascade do |t|
#   t.string "name"
#   t.string "email"
#   t.boolean "photographer"
#   t.string "password_digest"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end
