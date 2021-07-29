interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export default class LocalStorageService<T extends string> {
  private readonly storage: IStorage;

  public constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  public get(key: T): string | null {
    return this.storage.getItem(key);
  }

  public set(key: T, value: string): void {
    return this.storage.setItem(key, value);
  }

  public clearItem(key: T): void {
    return this.storage.removeItem(key);
  }

  public clearItems(keys: T[]): void {
    keys.forEach(key => this.clearItem(key));
  }
}
