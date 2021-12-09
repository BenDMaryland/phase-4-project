Car.destroy_all
Car.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

puts "seeding start"

puts "seeding users"

ben= User.create(
    name: "Ben", 
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
    photo:"https://www.kienle.com/fileadmin/_processed_/1/c/csm_faszination-oldtimer-header-xs_33e6719298.jpg",
    model:"Mercedes 300 SL", 
    year:1965,
    favorite: false,
    description: "Delighted to offer this Mercedes-Benz 300SL disc brake-model, which is surely one of the finest examples on offer today. Presented in its original colour scheme was originally delivered new in June 1961.")

lambo = Car.create(
    owned_by_id: dimitri.id, 
    photographed_by_id: saim.id,
    photo: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Aventador_ultimae_model_mobile.png",
    model: "Lamborghini Aventador",
    year: 2021, 
    favorite: false,
    description: "The 2021 Aventador SVJ Roadster delivers incredible performance with its robust V12 engine which provides a whopping 770 horsepower and 720 lb-ft of torque. This automobile can reach a top speed of 217 mph and go from 0 to 62 mph 2.9 seconds.")

ford = Car.create(
    owned_by_id: saim.id,
    photo: "https://assets-global.website-files.com/5a10aaa4d85f4b0001a53297/5a10aaa4d85f4b0001a541e5_2016-bmw-i8-white-car-hero-image-royalty-exotic-cars.jpg",
    model: "BMW i8",
    year: 2020, 
    favorite: false,
    description: "You’re a different breed of cat. Hard-working. Out-of-the-box thinking. Some might even say you’re rebellious or revolutionary. The 2020 BMW i8 might just be your spirit animal in the form of a luxury hybrid sports car.")

rolls = Car.create(
    owned_by_id: saim.id,
    photo: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png?crop=1.00xw:1.00xh;0,0&resize=640:*",
    model: "Rolls-Royce Phantom",
    year: 2019, 
    favorite: false,
    description: "Cars simply don't get more opulent than the Rolls-Royce Phantom—the biggest Roller you can buy has always been the ultra-luxury benchmark. With a starting price just under half a million dollars, it better be.")

aston = Car.create(
    owned_by_id: ben.id,
    photo: "https://www.supercars.net/blog/wp-content/uploads/2020/10/2021-Aston-Martin-V12-Speedster-001-2160-scaled.jpg",
    model: "Aston Martin V12",
    year: 2021, 
    favorite: false,
    description: "V12 Vantage S replaced the outgoing V12 Vantage in markets around the world and, with the exception of One-77, arrived as the fastest road-going Aston Martin offered at the time.")

packard = Car.create(
    owned_by_id: ben.id,
    photo: "https://wallpaperaccess.com/full/204610.jpg",
    model: "Packard",
    year: 1939, 
    favorite: false,
    description: "Packards can arguably be considered the Rolls Royce® of North America, with an exclusive heritage of extraordinary quality and luxury, and a price tag to match.")


puts "seeding reviews"

Review.create(
    car_id: honda.id, 
    user_id: dimitri.id, 
     comment: "love the exterior", 
     rating: 1 )

Review.create(
    car_id: honda.id, 
    user_id: saim.id, 
     comment: "🔥🔥🔥🔥",
      rating: 3 )

Review.create(
    car_id: lambo.id, 
    user_id: saim.id,  
    comment: "Wow! looks awesome", 
    rating: 5 )

Review.create(
    car_id: aston.id, 
    user_id: ben.id,  
    comment: "Wow! 🔥", 
    rating: 4 )

Review.create(
    car_id: rolls.id, 
    user_id: ben.id,  
    comment: "my favorite car!", 
    rating: 5 )

Review.create(
    car_id: packard.id, 
    user_id: dimitri.id,  
    comment: "How much did you pay for this car?", 
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
