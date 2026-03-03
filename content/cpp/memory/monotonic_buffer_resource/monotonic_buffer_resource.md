---
title: "std::pmr::monotonic_buffer_resource::monotonic_buffer_resource"
source_path: "cpp/memory/monotonic_buffer_resource/monotonic_buffer_resource"
category: "memory"
since: "C++17"
---

Constructs a [monotonic_buffer_resource](/cpp/memory/monotonic_buffer_resource/). The constructors not taking an upstream memory resource pointer use the return value of [std::pmr::get_default_resource](/cpp/memory/get_default_resource/) as the upstream memory resource.

## Declarations
```cpp
monotonic_buffer_resource();
```
_(since C++17)_

```cpp
explicit monotonic_buffer_resource( std::pmr::memory_resource* upstream );
```
_(since C++17)_

```cpp
explicit monotonic_buffer_resource( std::size_t initial_size );
```
_(since C++17)_

```cpp
monotonic_buffer_resource( std::size_t initial_size,
std::pmr::memory_resource* upstream );
```
_(since C++17)_

```cpp
monotonic_buffer_resource( void* buffer, std::size_t buffer_size );
```
_(since C++17)_

```cpp
monotonic_buffer_resource( void* buffer, std::size_t buffer_size,
std::pmr::memory_resource* upstream );
```
_(since C++17)_

```cpp
monotonic_buffer_resource( const monotonic_buffer_resource& ) = delete;
```
_(since C++17)_

## Parameters
- `upstream`: the upstream memory resource to use; must point to a valid memory resource
- `initial_size`: the minimum size of the first buffer to allocate; must be greater than zero
- `buffer`: the initial buffer to use
- `buffer_size`: the size of the initial buffer; cannot be greater than the number of bytes in buffer
