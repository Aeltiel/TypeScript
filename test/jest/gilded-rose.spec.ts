import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe("Quality of standard items", () => {
  it("perte de qualite de 1 par jour", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });
  it("SellIn dépassé, perte de qualité de 2 par jour", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
  it("La qualité ne peut être négative", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Quality of Aged Brie", () => {
  it("Augmente en qualité avec le temps", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  it("La qualité ne peut dépasser 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Quality of Sulfuras", () => {
  it("La qualité ne change pas", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe("Quality of Backstage passes", () => {
  it("Augmente en qualité avec le temps", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
  it("Augmente de 2 en qualité à 10 jours ou moins", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });
  it("Augmente de 3 en qualité à 5 jours ou moins", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
  it("La qualité tombe à 0 après le concert", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("La qualité ne peut dépasser 50", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Quality of Conjured items", () => {
  it("perte de qualité de 2 par jour", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });
  it("perte de qualité de 4 par jour après la date de péremption", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("La qualité ne peut être négative", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
