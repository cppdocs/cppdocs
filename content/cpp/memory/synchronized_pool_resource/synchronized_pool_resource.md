---
title: "std::pmr::synchronized_pool_resource::synchronized_pool_resource"
source_path: "cpp/memory/synchronized_pool_resource/synchronized_pool_resource"
category: "memory"
since: "C++17"
---

Constructs a synchronized_pool_resource.

## Declarations
```cpp
synchronized_pool_resource();
```
_(since C++17)_

```cpp
explicit synchronized_pool_resource( std::pmr::memory_resource* upstream );
```
_(since C++17)_

```cpp
explicit synchronized_pool_resource( const std::pmr::pool_options& opts );
```
_(since C++17)_

```cpp
synchronized_pool_resource( const std::pmr::pool_options& opts,
std::pmr::memory_resource* upstream );
```
_(since C++17)_

```cpp
synchronized_pool_resource( const synchronized_pool_resource& ) = delete;
```
_(since C++17)_

## Parameters
- `opts`: a std::pmr::pool_options struct containing the constructor options
- `upstream`: the upstream memory resource to use
