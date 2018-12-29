function chain(fns) {
    function wrapper(x) {
      this._ = x
    }
    
    Object.keys(fns).forEach(function(prop) {
      var fn = fns[prop]
      
      wrapper.prototype[prop] = function() {
        var args = [].slice.call(arguments)
        if (this._ != null) args.unshift(this._)
        
        var x = fn.apply(null, args)
        return new wrapper(x)
      }
    })
    
    wrapper.prototype.execute = function() {
      return this._;
    }
    
    return new wrapper();
  }


