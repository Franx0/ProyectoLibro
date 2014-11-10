class User < ActiveRecord::Base
    
    def self.last_created(n)
        order(created_at:  :asc).limit(n)
    end
end
