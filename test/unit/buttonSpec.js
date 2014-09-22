( function() {
	'use strict';

	var verifyElementDimensions = function( elemConstructor ) {
		var styles;
		var elem;

		beforeEach( function () {
			jasmine.addMatchers(d2l.jasmine.matchers);
			elem = elemConstructor();
			document.body.appendChild(elem);
		});

		it( 'has correct outer height', function() {
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		it( 'has correct inner height', function() {
			expect( elem.clientHeight ).toBe( 26 );
		} );

		it( 'has correct margins' , function() {
			expect( elem ).toHaveTopMargin( '0px' );
			expect( elem ).toHaveBottomMargin( '0px' );
			expect( elem ).toHaveLeftMargin( '0px' );
			expect( elem ).toHaveRightMargin( '0px' );
		} );

		it( 'responds to font change Arial 11', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="11px";
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		it( 'responds to font change Arial 13', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="13px";
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		it( 'responds to font change Arial 15', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="15px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 29, 'Firefox' : 31 } );
		} );

		it( 'responds to font change Arial 17', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="17px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 32, 'Firefox' : 33 } );
		} );

		it( 'responds to font change Verdana 11', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="11px";
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		it( 'responds to font change Verdana 13', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="13px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 28, 'Firefox' : 29 } );
		} );

		it( 'responds to font change Verdana 15', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="15px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 30, 'Firefox' : 32 } );
		} );

		it( 'responds to font change Verdana 17', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="17px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 32, 'Firefox' : 34, 'Chrome' : 33 } );
		} );

		afterEach( function() {
			document.body.removeChild(elem);
		} );
	};

	describe( 'vui-button', function() {

		beforeEach( function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="13px";
		} );

		var createVUIButton = function( tag ) {
			var vuib = document.createElement( tag );
			vuib.className = 'vui-button';
			return vuib;
		}

		describe ( 'anchor', function() {
			verifyElementDimensions(
				function() {
					var anc = createVUIButton( 'a' );
					anc.innerHTML = "test";
					return anc;
				}
			);

			describe( 'vui-disabled', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'a' );
						dis.classList.add( 'vui-disabled' );
						dis.innerHTML = "test";
						return dis;
					}
				);
			} );
		} );


		describe ( 'button', function() {
			verifyElementDimensions(
				function() {
					var btn = createVUIButton( 'button' );
					btn.innerHTML = "test";
					return btn;
				}
			);

			describe( 'vui-disabled', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'button' );
						dis.classList.add( 'vui-disabled' );
						dis.innerHTML = "test";
						return dis;
					}
				);
			} );
		} );


		describe ( 'input', function() {
			verifyElementDimensions(
				function() {
					var inp = createVUIButton( 'input' );
					inp.setAttribute("type", "button");
					inp.setAttribute("value", "test");
					return inp;
				}
			);

			describe( 'vui-disabled', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'input' );
						dis.setAttribute("type", "button");
						dis.classList.add( 'vui-disabled' );
						dis.setAttribute("value", "test");
						return dis;
					}
				);
			} );
		} );

	} );

} )();