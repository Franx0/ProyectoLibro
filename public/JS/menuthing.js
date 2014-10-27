(function() {
  $(function() {
    var collapse, expand, hidet, showt;
    expand = function() {
      return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapse = function() {
      return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showt = function() {
      return $("nav.sidebar ul a span.expanded-element").show();
    };
    hidet = function() {
      return $("nav.sidebar ul a span.expanded-element").hide();
    };
    return $("#justify-icon").click(function(e) {
      if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
        expand();
        showt();
        $(this).css({
          color: "#000"
        });
      } 
      else if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")) {
        collapse();
        hidet();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);
/*
(function() {
  $(function() {
    var collapse, expand, hidet, showt;
    expand = function() {
      return $("nav.sidebar2").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapse = function() {
      return $("nav.sidebar2").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showt = function() {
      return $("nav.sidebar2 ul a span.expanded-element").show();
    };
    hidet = function() {
      return $("nav.sidebar2 ul a span.expanded-element").hide();
    };
    return $("#justify-icon2").click(function(e) {
      if ($(this).parent("nav.sidebar2").hasClass("sidebar-menu-collapsed")) {
        expand();
        showt();
        $(this).css({
          color: "#000"
        });
      } 
      else if ($(this).parent("nav.sidebar2").hasClass("sidebar-menu-expanded")) {
        collapse();
        hidet();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);
(function() {
  $(function() {
    var collapse, expand, hidet, showt;
    expand = function() {
      return $("nav.sidebar3").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapse = function() {
      return $("nav.sidebar3").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showt = function() {
      return $("nav.sidebar3 ul a span.expanded-element").show();
    };
    hidet = function() {
      return $("nav.sidebar3 ul a span.expanded-element").hide();
    };
    return $("#justify-icon3").click(function(e) {
      if ($(this).parent("nav.sidebar3").hasClass("sidebar-menu-collapsed")) {
        expand();
        showt();
        $(this).css({
          color: "#000"
        });
      } 
      else if ($(this).parent("nav.sidebar3").hasClass("sidebar-menu-expanded")) {
        collapse();
        hidet();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);
(function() {
  $(function() {
    var collapse, expand, hidet, showt;
    expand = function() {
      return $("nav.sidebar4").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapse = function() {
      return $("nav.sidebar4").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showt = function() {
      return $("nav.sidebar4 ul a span.expanded-element").show();
    };
    hidet = function() {
      return $("nav.sidebar4 ul a span.expanded-element").hide();
    };
    return $("#justify-icon4").click(function(e) {
      if ($(this).parent("nav.sidebar4").hasClass("sidebar-menu-collapsed")) {
        expand();
        showt();
        $(this).css({
          color: "#000"
        });
      } 
      else if ($(this).parent("nav.sidebar4").hasClass("sidebar-menu-expanded")) {
        collapse();
        hidet();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);
*/