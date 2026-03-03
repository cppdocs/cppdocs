---
title: "std::stop_source::stop_source"
source_path: "cpp/thread/stop_source/stop_source"
category: "thread"
since: "C++20"
---

Constructs a new stop_source object.

## Declarations
```cpp
stop_source();
```
_(since C++20)_

```cpp
explicit stop_source( std::nostopstate_t nss ) noexcept;
```
_(since C++20)_

```cpp
stop_source( const stop_source& other ) noexcept;
```
_(since C++20)_

```cpp
stop_source( stop_source&& other ) noexcept;
```
_(since C++20)_

## Parameters
- `nss`: an std::nostopstate_t placeholder object to construct an empty stop_source
- `other`: another stop_source object to construct this stop_source object with
