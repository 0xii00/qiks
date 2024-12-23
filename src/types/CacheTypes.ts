export interface CacheEntry<V> {
  value: V;
  expiry?: number | null;
}

export interface CacheOptions {
  ttl?: number;
}
export interface SerializerType {
  serialize<V>(data: V): string;
  deserialize<V>(data: string): V;
}
