describe("LibraryView", function() {
  var view, fakeSongs, fakeSongData, fakeSubview;

  beforeEach(function() {
    fakeSongData = [
      {
        artist: 'Fakey McFakerson',
        title: 'Never Gonna Mock You Up',
        url: 'example/url'
      },
      {
        artist: 'BittyBacon',
        title: 'Sizzle Sundays',
        url: 'fake/url'
      }
    ];
    fakeSongs = new Backbone.Collection(fakeSongData);

    fakeSubview = { render: jasmine.createSpy() };
    spyOn(window, 'LibraryEntryView').andReturn(fakeSubview);

    view = new LibraryView({collection: fakeSongs});
  });

  it("should create some subviews when you create it", function(){
    expect(LibraryEntryView.callCount).toEqual(fakeSongData.length);
  });

  it("should render its subviews when you render it", function(){
    view.render();
    expect(fakeSubview.render.callCount).toEqual(fakeSongData.length);
  });

  //Implement the test
  xit("should have a header element", function(){
  });
});