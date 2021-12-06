class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :photographer, :password_digest
end
