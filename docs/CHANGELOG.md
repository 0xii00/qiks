# Changelog

## [1.0.0] - 2024-12-27

### Features

- **Basic In-Memory Caching**:  
  Introduced a simple in-memory cache utilizing a hash map for efficient data storage and retrieval.
- **TTL (Time-to-Live) Support**:  
  Added TTL support for cache items, ensuring items automatically expire after a specified duration.

- **Serialization Support**:  
  Enabled JSON serialization and deserialization of cached items. Also added the option to plug in custom serializers for advanced use cases.

- **Namespaces**:  
  Implemented namespaces to allow the isolation of cache segments for different logical areas, enhancing modularity.

- **Cache Events**:  
  Added event emitters for key cache operations, including `set`, `get`, `delete`, and `expire`. This feature enables external monitoring of cache state changes.

- **Customizable Eviction Policies**:  
  Implemented eviction strategies including **Least Recently Used (LRU)**, **Least Frequently Used (LFU)**, and **Most Recently Used (MRU)** policies for cache item management.

- **Cache Dependency Management**:  
  Enabled cache items to depend on other keys, allowing automatic removal of dependent keys when the parent is deleted.

- **Expiration Callbacks**:  
  Supported expiration callbacks, allowing custom logic to be executed when cache items expire.

- **Key Observers**:  
  Introduced key observers to monitor and respond to changes in specific cache keys.

- **Pattern-Based Preloading**:  
  Added pattern-based key preloading, which allows users to preload cache entries that match a specific pattern (e.g., `"user:*"`).

- **Stale-While-Revalidate (SWR) Strategy**:  
  Implemented the SWR strategy, where stale data is served while fresh data is being fetched in the background.

- **Priority-Based Caching**:  
  Introduced a priority system for cache items, allowing higher-priority items to be retained longer during eviction.

### Enhancements

- **Eviction Policy Enhancements**:  
  Eviction policies now consider both frequency/recency and item priority, improving eviction decisions and cache management in complex use cases.

- **Improved Cache Expiration Logic**:  
  Refined cache item expiration and TTL handling for better accuracy and performance under load.

- **Performance Benchmarking**:  
  Added performance benchmarks for key cache operations (set, get, delete, eviction), enabling performance tracking and optimizations.

- **Documentation Updates**:
  - **User Guide**: Detailed documentation for all features and configuration options.
  - **Examples**: Added real-world use cases and practical examples to the `examples/` directory.
  - **FAQ**: Created an FAQ section addressing common issues and troubleshooting steps.

### Fixes

- Fixed various edge cases in eviction policies when multiple items have similar usage patterns (frequency, recency, or priority).
- Corrected minor bugs in TTL expiration logic where items would sometimes expire prematurely.
- Improved error handling for cache operations with invalid inputs or configuration.

### Miscellaneous

- **API Documentation**: Updated the README with basic usage examples, API documentation, and an overview of the cache's core features.
- **TODO.md**: Updated with completed tasks and a list of potential future enhancements.
