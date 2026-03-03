---
title: "std::experimental::pmr::monotonic_buffer_resource::monotonic_buffer_resource"
source_path: "cpp/experimental/monotonic_buffer_resource/monotonic_buffer_resource"
category: "experimental"
---

Constructs a monotonic_buffer_resource. The constructors not taking an upstream memory resource pointer uses the return value of [std::experimental::pmr::get_default_resource](/cpp/experimental/get_default_resource/)() as the upstream memory resource.

## Declarations
```cpp
monotonic_buffer_resource();
```
_(library fundamentals TS)_

```cpp
explicit monotonic_buffer_resource( memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
explicit monotonic_buffer_resource( std::size_t initial_size );
```
_(library fundamentals TS)_

```cpp
monotonic_buffer_resource( std::size_t initial_size,
memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
monotonic_buffer_resource( void* buffer, std::size_t buffer_size );
```
_(library fundamentals TS)_

```cpp
monotonic_buffer_resource( void* buffer, std::size_t buffer_size,
memory_resource* upstream );
```
_(library fundamentals TS)_

```cpp
monotonic_buffer_resource( const monotonic_buffer_resource& ) = delete;
```
_(library fundamentals TS)_

## Parameters
- `upstream`: the upstream memory resource to use; must point to a valid memory resource
- `initial_size`: the minimum size of the first buffer to allocate; must be greater than zero
- `buffer`: the initial buffer to use
- `buffer_size`: the size of the initial buffer; cannot be greater than the number of bytes in buffer
