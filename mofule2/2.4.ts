{
  // Generic - Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaserYear: number;
    };
    SmartWatch: T;
    Bike?: X;
  }

  //   Generic
  type Poor = { WatchName: string; price: number };

  const poorDeveloper: Developer<Poor> = {
    name: "Pritom Chakma",
    computer: {
      brand: "Asus",
      model: "Vivobook Flip-14",
      releaserYear: 2020,
    },
    SmartWatch: {
      WatchName: "I dont Have it",
      price: 0,
    },
  };

  // Interface

  interface Rich {
    WatchName: string;
    model: string;
    price: number;
  }

  const RichDeveloper: Developer<Rich> = {
    name: "Pritom Chakma",
    computer: {
      brand: "Asus",
      model: "Vivobook Flip-14",
      releaserYear: 2020,
    },
    SmartWatch: {
      WatchName: "Apple",
      model: "Series 5",
      price: 100,
    },
  };
}
