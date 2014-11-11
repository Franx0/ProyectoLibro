class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    has_many :myworks
    validates :name, presence: true
    def self.last_created(n)
        order(created_at:  :asc).limit(n)
    end
end
