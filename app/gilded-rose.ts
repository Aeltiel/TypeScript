export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
        switch (this.items[i].name) {
          case 'Aged Brie':
            if (this.items[i].quality < 50) {
              this.items[i].quality += 1;
            }
            this.items[i].sellIn -= 1;
            if (this.items[i].sellIn < 0 && this.items[i].quality < 50) {
              this.items[i].quality += 1;
            }
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            if (this.items[i].quality < 50) {
              this.items[i].quality += 1;
              if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
              if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
            this.items[i].sellIn -= 1;
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = 0;
            }
            break;
          case 'Sulfuras, Hand of Ragnaros':
            // Sulfuras does not change in quality or sellIn
            break;
          default:
            if (this.items[i].name.includes('Conjured')) {
              if (this.items[i].quality > 0) {
                this.items[i].quality -= 2;
              }
              this.items[i].sellIn -= 1;
              if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
                this.items[i].quality -= 2;
              }
            } else {
              if (this.items[i].quality > 0) {
                this.items[i].quality -= 1;
              }
              this.items[i].sellIn -= 1;
              if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
                this.items[i].quality -= 1;
              }
            }
            break;
        }

    }


    return this.items;
  }
}
