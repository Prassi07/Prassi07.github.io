# Compatibility patch for Ruby 3.2+ with Liquid 4.0.x / Jekyll 3.9
class Object
  unless method_defined?(:tainted?)
    def tainted?
      false
    end
  end
  unless method_defined?(:untaint)
    def untaint
      self
    end
  end
end
