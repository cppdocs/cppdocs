---
title: "std::experimental::pmr::synchronized_pool_resource::synchronized_pool_resource"
source_path: "cpp/experimental/synchronized_pool_resource/synchronized_pool_resource"
category: "experimental"
---

Constructs a synchronized_pool_resource.

## Declarations
```cpp
synchronized_pool_resource();
```
_(library fundamentals TS)_

```cpp
explicit synchronized_pool_resource( memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
explicit synchronized_pool_resource( const pool_options& opts );
```
_(library fundamentals TS)_

```cpp
synchronized_pool_resource( const pool_options& opts,
memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
synchronized_pool_resource( const synchronized_pool_resource& ) = delete;
```
_(library fundamentals TS)_

## Parameters
- `opts`: a pool_options struct containing the constructor options
- `upstream`: the upstream memory resource to use
