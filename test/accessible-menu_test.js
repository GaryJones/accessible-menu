(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('gamajoAcessibleMenu', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('defaults', function() {
    ok($.fn.gamajoAccessibleMenu.options, 'options set up correctly');
    equal($.fn.gamajoAccessibleMenu.options.hoverDelay, 250, 'default global options are set');
    $.fn.gamajoAccessibleMenu.options.hoverDelay = 500;
    equal($.fn.gamajoAccessibleMenu.options.hoverDelay, 500, 'can change the defaults globally');
    $.fn.gamajoAccessibleMenu.options.hoverDelay = 250;
  });

  test('is chainable', function() {
    expect(1);
    strictEqual(this.elems.gamajoAccessibleMenu(), this.elems, 'should be chainable');
  });

  test('gets class on mouseenter', function() {
    expect(1);
    this.elems.gamajoAccessibleMenu();
    var menuItem = this.elems.find( '.menu-item:first' );
    ok( menuItem.trigger('mouseenter').hasClass('menu-item-hover'), 'should get class on mouseenter' );
  });

  test('gets custom class on mouseenter', function() {
    expect(1);
    this.elems.gamajoAccessibleMenu({
      hoverClass: 'foobar'
    });
    var menuItem = this.elems.find( '.menu-item:first' );
    ok( menuItem.trigger('mouseenter').hasClass('foobar'), 'should get custom class on mouseenter' );
  });

  test('loses class on mouseleave', function() {
    expect(2);
    this.elems.gamajoAccessibleMenu();
    var menuItem = this.elems.find( '.menu-item:first' );
    ok( menuItem.trigger('mouseenter').hasClass('menu-item-hover'), 'should get class on mouseenter' );
    menuItem.trigger('mouseleave');
    stop();
    setTimeout(function() {
       //Make assertion 
      ok( ! menuItem.hasClass('menu-item-hover'), 'should drop class on mouseleave' );
       // After the assertion called, restart the test
      start();
    }, 250);
  });

  test('loses custom class on mouseleave', function() {
    expect(2);
    this.elems.gamajoAccessibleMenu({
      hoverClass: 'foobar'
    });
    var menuItem = this.elems.find( '.menu-item:first' );
    ok( menuItem.trigger('mouseenter').hasClass('foobar'), 'should get custom class on mouseenter' );
    menuItem.trigger('mouseleave');
    stop();
    setTimeout(function() {
       //Make assertion 
      ok( ! menuItem.hasClass('foobar'), 'should drop custom class on mouseleave' );
       // After the assertion called, restart the test
      start();
    }, 250);
  });

  test('hoverDelay setting works', function() {
    expect(2);
    this.elems.gamajoAccessibleMenu( {
      hoverDelay: 500
    });
    var menuItem = this.elems.find( '.menu-item:first' );
    menuItem.trigger('mouseenter');
    menuItem.trigger('mouseleave');
    stop();
    setTimeout(function() {
      ok( menuItem.hasClass('menu-item-hover'), 'should not drop class on mouseleave until hoverDelay has passed' );
       // After the assertion called, restart the test
      start();
    }, 250);
    stop();
    setTimeout(function() {
       //Make assertion 
      ok( ! menuItem.hasClass('menu-item-hover'), 'should drop class on mouseleave after new hoverDelay' );
       // After the assertion called, restart the test
      start();
    }, 500);
  });

  test('menuItemSelector setting works', function() {
    expect(2);
    this.elems.gamajoAccessibleMenu({
      menuItemSelector: '.menu li'
    });
    var menuItem = this.elems.find( '.menu li:first' );
    ok( menuItem.trigger('mouseenter').hasClass('menu-item-hover'), 'should get class on mouseenter on custom selector' );
    menuItem.trigger('mouseleave');
    stop();
    setTimeout(function() {
       //Make assertion 
      ok( ! menuItem.hasClass('menu-item-hover'), 'should drop class on mouseleave on custom selector' );
       // After the assertion called, restart the test
      start();
    }, 250);
  });

  test('gets class on anchor focus', function() {
    expect(1);
    this.elems.gamajoAccessibleMenu();
    var menuItem = this.elems.find( '.menu-item:first' ),
    anchor = menuItem.find('a:first');
    anchor.trigger('focus');
    ok( menuItem.hasClass('menu-item-hover'), 'should get class on anchor focus' );
  });

  test('loses class on anchor blur', function() {
    expect(2);
    this.elems.gamajoAccessibleMenu();
    var menuItem = this.elems.find( '.menu-item:first' ),
    anchor = menuItem.find('a:first');
    anchor.trigger('focus');
    ok( menuItem.hasClass('menu-item-hover'), 'should get class on anchor focus' );
    anchor.trigger('blur');
    stop();
    setTimeout(function() {
      ok( ! menuItem.hasClass('menu-item-hover'), 'should lose class on anchor blur' );
      start();
    }, 250);
  });

}(jQuery));
