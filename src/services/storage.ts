import {IFavorite} from "../common/types";

export class Storage {
  storage: string;

  constructor() {
    this.storage = 'imagesData';
    if (!window.localStorage.getItem(this.storage)) {
      const data = this.getDefaultData();
      window.localStorage.setItem(this.storage, JSON.stringify(data));
    }
  }

  getDefaultData(): { favorites: IFavorite[], taggedImages: [] } {
    return { favorites: [], taggedImages: [] };
  }

  getFavorites(): IFavorite[] {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    return storage.favorites;
  }

  addFavorites(favoriteImage: IFavorite) {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    const favoriteImages = this.getFavorites();
    favoriteImages.push(favoriteImage);
    storage.favorites = favoriteImages;
    this.commit(storage);
  }

  removeFavorite(id: string) {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    const favoriteImages = this.getFavorites();
    storage.favorites = favoriteImages.filter((imageItem) => imageItem.id !== id);
    this.commit(storage);
  }

  getTaggedImages(): any[] {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    return storage.taggedImages;
  }

  addTagToImage(tag: string, id: string) {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    const taggedImages = this.getTaggedImages();
    const existing = taggedImages.find(taggedImage => taggedImage.id === id);
    if (existing) {
      existing.tags.push(tag);
    } else {
      taggedImages.push({id: id, tags: [tag]});
    }
    storage.taggedImages = taggedImages;
    this.commit(storage);
  }

  removeTagFromImage(tag: string, id: string) {
    const storage = JSON.parse(window.localStorage.getItem(this.storage) as string);
    const taggedImages = this.getTaggedImages();
    const existing = taggedImages.find(taggedImage => taggedImage.id === id);
    if (existing) {
      existing.tags = existing.tags.filter((item: string) => item !== tag);
    }
    storage.taggedImages = taggedImages;
    this.commit(storage);
  }

  commit(data: IFavorite[]) {
    window.localStorage.setItem(this.storage, JSON.stringify(data));
  }
}
