---
title: "std::experimental::pmr::unsynchronized_pool_resource::unsynchronized_pool_resource"
source_path: "cpp/experimental/unsynchronized_pool_resource/unsynchronized_pool_resource"
category: "experimental"
---

Constructs an unsynchronized_pool_resource.

## Declarations
```cpp
unsynchronized_pool_resource();
```
_(library fundamentals TS)_

```cpp
explicit unsynchronized_pool_resource( memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
explicit unsynchronized_pool_resource( const pool_options& opts );
```
_(library fundamentals TS)_

```cpp
unsynchronized_pool_resource( const pool_options& opts,
memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
unsynchronized_pool_resource( const unsynchronized_pool_resource& ) = delete;
```
_(library fundamentals TS)_

## Parameters
- `opts`: a pool_options struct containing the constructor options
- `upstream`: the upstream memory resource to use
