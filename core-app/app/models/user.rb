class User < ApplicationRecord 
  has_secure_password
  scope :filter_by_name, -> (name) {where("name like ?", "#{name}%")}
  scope :filter_by_email, -> (email) {where("email like ?", "#{email}%")}

end